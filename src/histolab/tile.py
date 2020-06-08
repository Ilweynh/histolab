import os
from pathlib import Path

import numpy as np
from PIL import Image

from .filters import image_filters as imf
from .filters import morphological_filters as mof
from .filters.util import mask_percent
from .types import CoordinatePair


class Tile:
    def __init__(self, image: Image.Image, coords: CoordinatePair, level: int = 0):
        self._image = image
        self._level = level
        self._coords = coords

    @property
    def image(self) -> Image.Image:
        return self._image

    @property
    def level(self) -> int:
        return self._level

    @property
    def coords(self) -> CoordinatePair:
        return self._coords

    def has_enough_tissue(
        self, tissue_percent: float = 80.0, near_zero_var_threshold: float = 0.1
    ) -> bool:
        """Check if the tile has enough tissue.

        Parameters
        ----------
        tissue_percent : float, optional
            Number between 0.0 and 100.0 representing the minimum required percentage of
            tissue over the total area of the image, default is 80.0
        near_zero_var_threshold : float, optional
            Minimum image variance after morphological operations (dilation, fill
            holes), default is 0.1

        Returns
        -------
        enough_tissue : bool
            Whether the image has enough tissue, i.e. if the proportion of tissue
            over the total area of the image is more than ``threshold`` and the image
            variance after morphological operations is more than
            ``near_zero_var_threshold``.
        """

        if self._is_almost_white:
            return False

        if self._is_all_tissue_or_no_tissue(near_zero_var_threshold):
            return False

        if not self._has_tissue_more_than_percent(tissue_percent):
            return False

        return True

    def save(self, path):
        """Save tile at given path.

        The format to use is determined from the filename extension (to be compatible to
        PIL.Image formats). If no extension is provided, the image will be saved in png
        format.

        Parameters
        ---------
        path: str or pathlib.Path
            Path to which the tile is saved.

        """
        ext = os.path.splitext(path)[1]

        if not ext:
            path = f"{path}.png"

        Path(path).parent.mkdir(parents=True, exist_ok=True)

        self._image.save(path)

    @property
    def _enough_tissue_mask_filters(self) -> imf.Compose:
        """Return a filters composition to get a binary mask to estimate tissue.

        Returns
        -------
        imf.Compose
            Filters composition
        """
        filters = imf.Compose(
            [
                imf.RgbToGrayscale(),
                imf.OtsuThreshold(),
                mof.BinaryDilation(),
                mof.BinaryFillHoles(structure=np.ones((5, 5))),
            ]
        )
        return filters

    def _is_all_tissue_or_no_tissue(self, near_zero_var_threshold: float = 0.1) -> bool:
        """Check if the image is composed all by tissue or by no tissue at all.

        Parameters
        ----------
        near_zero_var_threshold : float, optional
            Minimum image variance after morphological operations (dilation, fill
            holes), default is 0.1
        Returns
        -------
        bool
            True if the image is composed all by tissue or by no tissue at all, False
            otherwise.
        """
        filters = self._enough_tissue_mask_filters
        tissue_mask = filters(self._image)

        return np.var(tissue_mask) > near_zero_var_threshold

    @property
    def _is_almost_white(self) -> bool:
        """Check if the image is almost white.

        Returns
        -------
        bool
            True if the image is almost white, False otherwise
        """
        rgb2grey = imf.RgbToGrayscale()
        image_gray = rgb2grey(self._image)
        image_gray_arr = np.array(image_gray)

        return (
            np.mean(image_gray_arr.ravel()) < 0.9
            and np.std(image_gray_arr.ravel()) > 0.09
        )

    def _has_tissue_more_than_percent(self, tissue_percent: float = 80.0) -> bool:
        """Check if tissue represent more than ``tissue_percent`` % of the image.

        Parameters
        ----------
        tissue_percent : float, optional
            Number between 0.0 and 100.0 representing the minimum required percentage of
            tissue over the total area of the image, default is 80.0

        Returns
        -------
        bool
            True if tissue represent more than ``tissue_percent`` % of the image, False
            otherwise.
        """
        filters = self._enough_tissue_mask_filters
        tissue_mask = filters(self._image)

        return mask_percent(tissue_mask) > tissue_percent

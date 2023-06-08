window.BENCHMARK_DATA = {
  "lastUpdate": 1686213487838,
  "repoUrl": "https://github.com/histolab/histolab",
  "entries": {
    "Python Benchmark with pytest-benchmark": [
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "4aef626f6cf0ff9102e63cd9ebb46f268990eae7",
          "message": "new tests in benchmarks",
          "timestamp": "2020-09-30T16:07:25+02:00",
          "tree_id": "c991e4ef979b01aacedac8fae356b42b9acf4002",
          "url": "https://github.com/histolab/histolab/commit/4aef626f6cf0ff9102e63cd9ebb46f268990eae7"
        },
        "date": 1601474990540,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.784657664037161,
            "unit": "iter/sec",
            "range": "stddev: 0.0032356764650666213",
            "extra": "mean: 128.45780035000217 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 282.80847866122366,
            "unit": "iter/sec",
            "range": "stddev: 0.00007661560017624431",
            "extra": "mean: 3.5359618803999866 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1057.3147807011044,
            "unit": "iter/sec",
            "range": "stddev: 0.000015491014096698318",
            "extra": "mean: 945.7921313999805 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 35540.78355992677,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023983710293687287",
            "extra": "mean: 28.136689736000335 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 38585.95187038198,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034593607554622635",
            "extra": "mean: 25.916167712000515 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 32567.141446622198,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013533599994758278",
            "extra": "mean: 30.705795952002976 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "b05d520532654713aeaf453578689537c309b7bf",
          "message": "add python38 in setup.py",
          "timestamp": "2020-09-30T23:40:08+02:00",
          "tree_id": "2eb9538dff2b8d08fe138ac1d215330fe494b6e1",
          "url": "https://github.com/histolab/histolab/commit/b05d520532654713aeaf453578689537c309b7bf"
        },
        "date": 1601502122570,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.793908574484398,
            "unit": "iter/sec",
            "range": "stddev: 0.005799402696930317",
            "extra": "mean: 113.7150780600004 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 360.8863541592808,
            "unit": "iter/sec",
            "range": "stddev: 0.0003538371511343212",
            "extra": "mean: 2.770955422599991 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1011.7981068329487,
            "unit": "iter/sec",
            "range": "stddev: 0.00002779644096004124",
            "extra": "mean: 988.3394653999915 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 24731.238347060487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021365109741397",
            "extra": "mean: 40.43469178399869 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 26492.339280507156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021077546283911002",
            "extra": "mean: 37.74676103200113 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24700.70715330469,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029867064922747046",
            "extra": "mean: 40.48467089599944 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fbd91e2a8143eb6cf8702b223167d4ef5fc79829",
          "message": "Update README.md",
          "timestamp": "2020-10-01T00:01:18+02:00",
          "tree_id": "dcc5b26a89e21791ca6429318ea5fb4103be67ed",
          "url": "https://github.com/histolab/histolab/commit/fbd91e2a8143eb6cf8702b223167d4ef5fc79829"
        },
        "date": 1601503388945,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.321684399568948,
            "unit": "iter/sec",
            "range": "stddev: 0.011143008392168093",
            "extra": "mean: 120.16797945999954 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 217.44862350244378,
            "unit": "iter/sec",
            "range": "stddev: 0.00024022491488789462",
            "extra": "mean: 4.598787446400007 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1045.1633586671269,
            "unit": "iter/sec",
            "range": "stddev: 0.00006745854073656738",
            "extra": "mean: 956.7882300000235 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25241.20861415521,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032545764061965005",
            "extra": "mean: 39.61775425599876 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25628.518566480787,
            "unit": "iter/sec",
            "range": "stddev: 0.000004125767323640795",
            "extra": "mean: 39.019032543999174 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 22978.055961152077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044390574415870325",
            "extra": "mean: 43.519782600001236 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "7cc6af595056234a011586c823cf78f18601c509",
          "message": "Fix typo in quickstart",
          "timestamp": "2020-10-01T21:04:21+02:00",
          "tree_id": "b3ba5d2c2988078943cde386a1fad87d8cab60b7",
          "url": "https://github.com/histolab/histolab/commit/7cc6af595056234a011586c823cf78f18601c509"
        },
        "date": 1601579169049,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.4807194006586215,
            "unit": "iter/sec",
            "range": "stddev: 0.001423610535210892",
            "extra": "mean: 133.67698298000022 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 286.09654191968593,
            "unit": "iter/sec",
            "range": "stddev: 0.000042008363605420724",
            "extra": "mean: 3.4953236179999805 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1064.8760841759254,
            "unit": "iter/sec",
            "range": "stddev: 0.000004936417200379685",
            "extra": "mean: 939.0764004000232 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 34127.29156664356,
            "unit": "iter/sec",
            "range": "stddev: 1.3436817910249868e-7",
            "extra": "mean: 29.30206160800094 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 37653.8902747506,
            "unit": "iter/sec",
            "range": "stddev: 1.2497878968477198e-7",
            "extra": "mean: 26.557680832000642 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 30399.17164445862,
            "unit": "iter/sec",
            "range": "stddev: 1.5009881612971626e-7",
            "extra": "mean: 32.89563320000161 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "8c8eb9f9589870d0c8e49992b55f7c14ced7e8a6",
          "message": "try to fix travis failure on windows/macos pt2",
          "timestamp": "2020-10-14T11:41:46+02:00",
          "tree_id": "e0e68910e853c8371227d7ef2662d6690e124c83",
          "url": "https://github.com/histolab/histolab/commit/8c8eb9f9589870d0c8e49992b55f7c14ced7e8a6"
        },
        "date": 1602668653298,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.140211349103764,
            "unit": "iter/sec",
            "range": "stddev: 0.005032084110492282",
            "extra": "mean: 122.84693321999555 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 268.74681422218856,
            "unit": "iter/sec",
            "range": "stddev: 0.0003269018326964666",
            "extra": "mean: 3.7209743411999736 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 967.106256666149,
            "unit": "iter/sec",
            "range": "stddev: 0.000011060268284048942",
            "extra": "mean: 1.0340125432000036 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 19580.0189750921,
            "unit": "iter/sec",
            "range": "stddev: 0.000002238847818625082",
            "extra": "mean: 51.07247348800365 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20960.673670418753,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011646496758590427",
            "extra": "mean: 47.708390279997275 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 18375.14751619734,
            "unit": "iter/sec",
            "range": "stddev: 0.000016039532863020805",
            "extra": "mean: 54.4213318080042 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "0c954059a1ee425908da444f04d07828b19b4a9e",
          "message": "Fix typos",
          "timestamp": "2020-10-14T12:22:47+02:00",
          "tree_id": "d8664f4eda21ada4a38343cc3ff1944370bf4220",
          "url": "https://github.com/histolab/histolab/commit/0c954059a1ee425908da444f04d07828b19b4a9e"
        },
        "date": 1602671114386,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.47222080066598,
            "unit": "iter/sec",
            "range": "stddev: 0.008763086074115134",
            "extra": "mean: 118.03280668999946 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 198.6022968064224,
            "unit": "iter/sec",
            "range": "stddev: 0.0009528316159200585",
            "extra": "mean: 5.035188495200032 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1163.8807946520672,
            "unit": "iter/sec",
            "range": "stddev: 0.000022996573628907983",
            "extra": "mean: 859.1945194000232 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27329.285097050095,
            "unit": "iter/sec",
            "range": "stddev: 0.000002523534661851699",
            "extra": "mean: 36.59078517600665 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 29418.837215856147,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020668432354305664",
            "extra": "mean: 33.99182614399933 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25121.765852251312,
            "unit": "iter/sec",
            "range": "stddev: 0.000002245763341726139",
            "extra": "mean: 39.80611896000073 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "a0e4a95028289d27265b6ef37bc98f9524947795",
          "message": "release: prepare v0.1.1 release",
          "timestamp": "2020-10-14T21:49:09+02:00",
          "tree_id": "661956862ba3b097b73ee236eb306b8cc1548b4f",
          "url": "https://github.com/histolab/histolab/commit/a0e4a95028289d27265b6ef37bc98f9524947795"
        },
        "date": 1602705137130,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.050218145024633,
            "unit": "iter/sec",
            "range": "stddev: 0.01061634028757935",
            "extra": "mean: 124.22023626999987 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 210.7240091404988,
            "unit": "iter/sec",
            "range": "stddev: 0.00022580181525265732",
            "extra": "mean: 4.745543728400008 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1040.471236964586,
            "unit": "iter/sec",
            "range": "stddev: 0.00007250034482576267",
            "extra": "mean: 961.102973799973 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 24628.13970868702,
            "unit": "iter/sec",
            "range": "stddev: 0.000004780572279151408",
            "extra": "mean: 40.60396001600043 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25493.162370828057,
            "unit": "iter/sec",
            "range": "stddev: 0.000004581282538168819",
            "extra": "mean: 39.22620448000225 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 22662.63409858544,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068900262527403526",
            "extra": "mean: 44.125497312001244 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "7cf938fa56a4ad868c788ad4c3d61f723bb5d586",
          "message": "make __init__ for HistolabException consistent",
          "timestamp": "2020-10-28T22:36:16+01:00",
          "tree_id": "3ca40591bafc01f1c8f9f4463f870fb868ee90ff",
          "url": "https://github.com/histolab/histolab/commit/7cf938fa56a4ad868c788ad4c3d61f723bb5d586"
        },
        "date": 1603922625581,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.87816725540527,
            "unit": "iter/sec",
            "range": "stddev: 0.0025245612444240446",
            "extra": "mean: 145.38756661000662 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 181.66701488502696,
            "unit": "iter/sec",
            "range": "stddev: 0.00015329731636130634",
            "extra": "mean: 5.50457660480015 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1050.4562589638447,
            "unit": "iter/sec",
            "range": "stddev: 0.00001161155467130267",
            "extra": "mean: 951.9672917998378 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 33401.1080561065,
            "unit": "iter/sec",
            "range": "stddev: 3.8066128366170697e-7",
            "extra": "mean: 29.939126520001082 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 36508.47236098712,
            "unit": "iter/sec",
            "range": "stddev: 2.9751242422493434e-7",
            "extra": "mean: 27.390902311995887 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 30048.933707760258,
            "unit": "iter/sec",
            "range": "stddev: 4.7448725204285414e-7",
            "extra": "mean: 33.279051087984044 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "77f06cf8998c0c1580b15be96e694603f9a70c60",
          "message": "fix unconsistent path method",
          "timestamp": "2020-10-29T00:11:25+01:00",
          "tree_id": "f765ed4c3ee758def664fbf1334fb52fd81c281d",
          "url": "https://github.com/histolab/histolab/commit/77f06cf8998c0c1580b15be96e694603f9a70c60"
        },
        "date": 1603928226696,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.326183914412183,
            "unit": "iter/sec",
            "range": "stddev: 0.0018072901260508308",
            "extra": "mean: 136.49670984000068 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 283.93514499677923,
            "unit": "iter/sec",
            "range": "stddev: 0.0000601036364047141",
            "extra": "mean: 3.5219310382000915 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1049.0449574018946,
            "unit": "iter/sec",
            "range": "stddev: 0.00000783699169626119",
            "extra": "mean: 953.2479927996974 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 34177.71105639406,
            "unit": "iter/sec",
            "range": "stddev: 5.293232203382339e-7",
            "extra": "mean: 29.25883475198134 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 37760.72261738912,
            "unit": "iter/sec",
            "range": "stddev: 4.979851547344637e-7",
            "extra": "mean: 26.4825440480181 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 30813.30569695803,
            "unit": "iter/sec",
            "range": "stddev: 6.228791116561198e-7",
            "extra": "mean: 32.45351244799167 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "9ec45ac85674bc7aca358e2b0b3b7670252bee8b",
          "message": "Fix quickstart path",
          "timestamp": "2020-10-30T10:59:03+01:00",
          "tree_id": "842a8794eb6094791ab5741aa3d3042d63a94610",
          "url": "https://github.com/histolab/histolab/commit/9ec45ac85674bc7aca358e2b0b3b7670252bee8b"
        },
        "date": 1604053079730,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.661793406514203,
            "unit": "iter/sec",
            "range": "stddev: 0.0060512925121707735",
            "extra": "mean: 115.44953257000316 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 316.3833085825984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000359702647491815",
            "extra": "mean: 3.16072299919997 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1097.562840770852,
            "unit": "iter/sec",
            "range": "stddev: 0.00003544335852103817",
            "extra": "mean: 911.1095627997655 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 41028.57431877472,
            "unit": "iter/sec",
            "range": "stddev: 0.000002066167323370058",
            "extra": "mean: 24.373257335983 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 45558.04564736472,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018833032872374138",
            "extra": "mean: 21.950019712003268 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 37101.988360497424,
            "unit": "iter/sec",
            "range": "stddev: 0.000002504383745638349",
            "extra": "mean: 26.95273337600156 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "31658006+nicolebussola@users.noreply.github.com",
            "name": "nicolebussola",
            "username": "nicolebussola"
          },
          "distinct": true,
          "id": "ea596047dc5e05ad18a524c1a9f8771122ae2473",
          "message": "Remove examples folder from pip installation",
          "timestamp": "2020-11-03T14:54:22+01:00",
          "tree_id": "b57701c1a102b40017d7db5626d0a734976202a5",
          "url": "https://github.com/histolab/histolab/commit/ea596047dc5e05ad18a524c1a9f8771122ae2473"
        },
        "date": 1604412961861,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.253591491613063,
            "unit": "iter/sec",
            "range": "stddev: 0.003190936757626622",
            "extra": "mean: 121.15937662000306 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 260.3230322547827,
            "unit": "iter/sec",
            "range": "stddev: 0.00015235720074921453",
            "extra": "mean: 3.841381192200015 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1130.9487081830757,
            "unit": "iter/sec",
            "range": "stddev: 0.00002633319913471695",
            "extra": "mean: 884.213397799931 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 26757.66813456131,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012038351578491662",
            "extra": "mean: 37.37246440800118 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 29264.87119292382,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021782712241243552",
            "extra": "mean: 34.1706612480084 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24756.82286918292,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022695920552891422",
            "extra": "mean: 40.39290523198724 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicole.bussolaceradini@gmail.com",
            "name": "Nicole Bussola",
            "username": "nicolebussola"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "d9b310743865bf4df4d97d4b95d85b2552656c24",
          "message": "fix flake8",
          "timestamp": "2020-11-04T19:31:33+01:00",
          "tree_id": "3f7b8b92fbc606d5cb3f1dc4b516c3971e6c30ea",
          "url": "https://github.com/histolab/histolab/commit/d9b310743865bf4df4d97d4b95d85b2552656c24"
        },
        "date": 1604516015467,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 9.178993575437284,
            "unit": "iter/sec",
            "range": "stddev: 0.003925411828715287",
            "extra": "mean: 108.94440569998551 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 276.36417212022354,
            "unit": "iter/sec",
            "range": "stddev: 0.00011385978016318289",
            "extra": "mean: 3.6184140379997642 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1101.3105550891887,
            "unit": "iter/sec",
            "range": "stddev: 0.000022043768670423725",
            "extra": "mean: 908.0090946000382 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27728.415566121443,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017246408670957061",
            "extra": "mean: 36.064087311999174 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 29625.549607717505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020239445560439835",
            "extra": "mean: 33.754648039997846 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24476.508181929246,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042570018663963105",
            "extra": "mean: 40.85550081601468 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicole.bussolaceradini@gmail.com",
            "name": "Nicole Bussola",
            "username": "nicolebussola"
          },
          "committer": {
            "email": "31658006+nicolebussola@users.noreply.github.com",
            "name": "nicolebussola",
            "username": "nicolebussola"
          },
          "distinct": true,
          "id": "21dcf0697eef827268c928a7764faf6a816bf399",
          "message": "add warning for TCGA",
          "timestamp": "2020-11-05T18:30:55+01:00",
          "tree_id": "84a46dbecf8ee6201cba07d595b89a2a069bc0e0",
          "url": "https://github.com/histolab/histolab/commit/21dcf0697eef827268c928a7764faf6a816bf399"
        },
        "date": 1604598028854,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.424765301138402,
            "unit": "iter/sec",
            "range": "stddev: 0.006437825744833653",
            "extra": "mean: 118.69766862999427 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 280.3052759687505,
            "unit": "iter/sec",
            "range": "stddev: 0.000874651794467078",
            "extra": "mean: 3.5675389859999767 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 974.1801162685134,
            "unit": "iter/sec",
            "range": "stddev: 0.000029021417533702886",
            "extra": "mean: 1.0265042195999512 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 24535.059147244545,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016673668607904393",
            "extra": "mean: 40.75800241599609 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 27181.041602536985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017065973245342158",
            "extra": "mean: 36.79034875200159 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24948.7574875261,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023044257760720035",
            "extra": "mean: 40.08215641600509 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "valerio.maggio@gmail.com",
            "name": "leriomaggio",
            "username": "leriomaggio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "8b07d870020e291cfd69b1d0c63905d43de577ba",
          "message": "Extra Reqs for examples with Instructions & README update",
          "timestamp": "2020-11-09T15:34:39+01:00",
          "tree_id": "36aa025c2262f2bb9bbc155d77558fa5bca009c7",
          "url": "https://github.com/histolab/histolab/commit/8b07d870020e291cfd69b1d0c63905d43de577ba"
        },
        "date": 1604933077316,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 9.08889978717645,
            "unit": "iter/sec",
            "range": "stddev: 0.004913659152026698",
            "extra": "mean: 110.0243179500012 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 309.36637315181144,
            "unit": "iter/sec",
            "range": "stddev: 0.00020586105746886352",
            "extra": "mean: 3.2324133674000906 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 991.2312755252661,
            "unit": "iter/sec",
            "range": "stddev: 0.000018461297314729854",
            "extra": "mean: 1.0088462951999646 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 22461.002560927067,
            "unit": "iter/sec",
            "range": "stddev: 0.000001980080581331713",
            "extra": "mean: 44.521610167998006 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24676.145533140323,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018325176875994396",
            "extra": "mean: 40.52496767199682 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23991.252842959024,
            "unit": "iter/sec",
            "range": "stddev: 0.000001931646128500328",
            "extra": "mean: 41.681858239991016 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "e72c529829e5c8b56b719624cd191abae9d32ee3",
          "message": "revert",
          "timestamp": "2020-11-14T20:52:31+01:00",
          "tree_id": "cf03efa272cc12f7e5a4454ecb4a881c73c5c951",
          "url": "https://github.com/histolab/histolab/commit/e72c529829e5c8b56b719624cd191abae9d32ee3"
        },
        "date": 1605384134555,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.591986708880312,
            "unit": "iter/sec",
            "range": "stddev: 0.009634311689251633",
            "extra": "mean: 151.69933498999058 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 198.74654847979627,
            "unit": "iter/sec",
            "range": "stddev: 0.0003564280033918983",
            "extra": "mean: 5.031533919199887 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 824.3113108815036,
            "unit": "iter/sec",
            "range": "stddev: 0.00009234038579290213",
            "extra": "mean: 1.2131339056000796 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 18418.711656754163,
            "unit": "iter/sec",
            "range": "stddev: 0.000008041460883913619",
            "extra": "mean: 54.29261387200768 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19728.880079596154,
            "unit": "iter/sec",
            "range": "stddev: 0.000007280553784695774",
            "extra": "mean: 50.68711431999691 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16780.160852984078,
            "unit": "iter/sec",
            "range": "stddev: 0.000007889532613205794",
            "extra": "mean: 59.59418439199089 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "9ad0045a4f8729600464c0152ec732a1c719aadb",
          "message": "fix master branch reference",
          "timestamp": "2020-11-14T20:56:45+01:00",
          "tree_id": "2fa88b9c00f14b73244244f804f69c6ebc399326",
          "url": "https://github.com/histolab/histolab/commit/9ad0045a4f8729600464c0152ec732a1c719aadb"
        },
        "date": 1605384185911,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.390785291950825,
            "unit": "iter/sec",
            "range": "stddev: 0.006159634156873237",
            "extra": "mean: 119.17835640000078 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 331.8423452347058,
            "unit": "iter/sec",
            "range": "stddev: 0.000026566251043909554",
            "extra": "mean: 3.0134791847999964 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1108.2319280099273,
            "unit": "iter/sec",
            "range": "stddev: 0.00002125649055705708",
            "extra": "mean: 902.3381972000379 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 40627.77670032183,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016173821047976662",
            "extra": "mean: 24.61370227999896 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 45909.20342769731,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017575226958839195",
            "extra": "mean: 21.782124832004683 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 36570.50075500687,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020555589703198637",
            "extra": "mean: 27.34444372799817 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fef91d1f855e15432eb83398d578b7b5fade8ef7",
          "message": "Update README.md",
          "timestamp": "2020-11-14T21:05:44+01:00",
          "tree_id": "e878dbac0d113018303e6f0ea2daab94941a913a",
          "url": "https://github.com/histolab/histolab/commit/fef91d1f855e15432eb83398d578b7b5fade8ef7"
        },
        "date": 1605384778329,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.899045407381617,
            "unit": "iter/sec",
            "range": "stddev: 0.005035769742005306",
            "extra": "mean: 112.3716032699997 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 222.45483730357145,
            "unit": "iter/sec",
            "range": "stddev: 0.00015598904067797841",
            "extra": "mean: 4.495294470200065 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1078.8411956558377,
            "unit": "iter/sec",
            "range": "stddev: 0.000028133276205283935",
            "extra": "mean: 926.9204810000701 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 24208.63969072933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035770951025045435",
            "extra": "mean: 41.30756675200337 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 26587.32750066302,
            "unit": "iter/sec",
            "range": "stddev: 0.000003266957613388984",
            "extra": "mean: 37.61190363999776 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23082.5078051704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036468610053040366",
            "extra": "mean: 43.32284899199749 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "a40b5bef25b9fa82cd4ffde813619a9b19f24ef9",
          "message": "Modify tests according to new exception",
          "timestamp": "2020-11-15T16:04:38+01:00",
          "tree_id": "a1995be36052817ff41589a3a241fb53f839b699",
          "url": "https://github.com/histolab/histolab/commit/a40b5bef25b9fa82cd4ffde813619a9b19f24ef9"
        },
        "date": 1605453100012,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 9.06852913990064,
            "unit": "iter/sec",
            "range": "stddev: 0.007782482773098027",
            "extra": "mean: 110.27146569999957 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 303.3975802907787,
            "unit": "iter/sec",
            "range": "stddev: 0.0005915953815393763",
            "extra": "mean: 3.296005192399991 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 976.2129395010152,
            "unit": "iter/sec",
            "range": "stddev: 0.000030308970473269128",
            "extra": "mean: 1.0243666720000077 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 23781.968887896244,
            "unit": "iter/sec",
            "range": "stddev: 0.000002017125415636339",
            "extra": "mean: 42.04866319999883 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 26352.07402721004,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021663555863096373",
            "extra": "mean: 37.94767724800113 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24123.21377386327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027914475167726466",
            "extra": "mean: 41.45384646400089 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "2f72c501822a22946ca454be936e1445aecad7bb",
          "message": "chache jobs in gh action workflow",
          "timestamp": "2020-11-16T11:46:17+01:00",
          "tree_id": "c81185614781efd0137f43f80d7ab042c9fd4bb9",
          "url": "https://github.com/histolab/histolab/commit/2f72c501822a22946ca454be936e1445aecad7bb"
        },
        "date": 1605524079644,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.707295471793845,
            "unit": "iter/sec",
            "range": "stddev: 0.0023523893448119527",
            "extra": "mean: 149.0913892500032 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 196.14507152984316,
            "unit": "iter/sec",
            "range": "stddev: 0.0001232852058348428",
            "extra": "mean: 5.098267278399862 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1052.101893044112,
            "unit": "iter/sec",
            "range": "stddev: 0.000007289904086359044",
            "extra": "mean: 950.4782822000607 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32629.86180082546,
            "unit": "iter/sec",
            "range": "stddev: 1.2421991051100661e-7",
            "extra": "mean: 30.64677399199718 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 36621.552449234216,
            "unit": "iter/sec",
            "range": "stddev: 4.0808994152889033e-7",
            "extra": "mean: 27.306324640011553 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 30688.198891658267,
            "unit": "iter/sec",
            "range": "stddev: 4.1512501979599394e-7",
            "extra": "mean: 32.58581592000246 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "2e90a45e3b8a10c7b49f12b8cbe1eb5094feddad",
          "message": "typing __getitem__ in slide.py",
          "timestamp": "2020-11-22T22:27:31+01:00",
          "tree_id": "eeb680575ed9f336570ed9ed9f37c426479b3e40",
          "url": "https://github.com/histolab/histolab/commit/2e90a45e3b8a10c7b49f12b8cbe1eb5094feddad"
        },
        "date": 1606080928848,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.359078233227716,
            "unit": "iter/sec",
            "range": "stddev: 0.003186446285203609",
            "extra": "mean: 135.88658366000232 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 312.0177302243085,
            "unit": "iter/sec",
            "range": "stddev: 0.00003893748710891783",
            "extra": "mean: 3.2049460755999464 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1036.404983231639,
            "unit": "iter/sec",
            "range": "stddev: 0.000013308489693399",
            "extra": "mean: 964.873786000021 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 35208.46068795904,
            "unit": "iter/sec",
            "range": "stddev: 8.399633984635978e-7",
            "extra": "mean: 28.402264128008028 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 38621.50915651104,
            "unit": "iter/sec",
            "range": "stddev: 8.611772602093151e-7",
            "extra": "mean: 25.892307727996013 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 31995.15119372047,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012002114519041851",
            "extra": "mean: 31.254735879987496 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "9a3910a02106f6963729950f6da1056145e48822",
          "message": "Break when there is a flake8 error",
          "timestamp": "2020-11-22T23:18:38+01:00",
          "tree_id": "80c2838a81d7d59e2e03d2930949470a6db22015",
          "url": "https://github.com/histolab/histolab/commit/9a3910a02106f6963729950f6da1056145e48822"
        },
        "date": 1606084003182,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.911656461505606,
            "unit": "iter/sec",
            "range": "stddev: 0.00234235242391134",
            "extra": "mean: 144.6831169299992 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 300.61927218948534,
            "unit": "iter/sec",
            "range": "stddev: 0.00008420285090391306",
            "extra": "mean: 3.32646670559991 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1034.3711026828826,
            "unit": "iter/sec",
            "range": "stddev: 0.000009695264636273167",
            "extra": "mean: 966.7710142000942 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 33682.5901404449,
            "unit": "iter/sec",
            "range": "stddev: 1.3086094727343197e-7",
            "extra": "mean: 29.688928191993 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 36958.64375661513,
            "unit": "iter/sec",
            "range": "stddev: 3.6325160155303915e-7",
            "extra": "mean: 27.05726992000382 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 30157.687568599904,
            "unit": "iter/sec",
            "range": "stddev: 9.555854044411675e-8",
            "extra": "mean: 33.1590410480012 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "9f8e1d9c4ff172086b8613567d9e46710e3aa242",
          "message": "address alessia's comments",
          "timestamp": "2020-11-27T10:25:05+01:00",
          "tree_id": "ab0e678e09f1f0b22265fa2599508dc83bb90ed8",
          "url": "https://github.com/histolab/histolab/commit/9f8e1d9c4ff172086b8613567d9e46710e3aa242"
        },
        "date": 1606469547358,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.464395594011736,
            "unit": "iter/sec",
            "range": "stddev: 0.0025939980975884756",
            "extra": "mean: 133.96931973999926 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 310.60345640174296,
            "unit": "iter/sec",
            "range": "stddev: 0.000011510406526700852",
            "extra": "mean: 3.2195391885999243 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1073.2335380459579,
            "unit": "iter/sec",
            "range": "stddev: 0.000008248344488889173",
            "extra": "mean: 931.7636512000036 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 36509.326749719316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010362901907334748",
            "extra": "mean: 27.390261311999893 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 39987.13609353268,
            "unit": "iter/sec",
            "range": "stddev: 9.433530458460065e-7",
            "extra": "mean: 25.00804252800026 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 32990.5116746914,
            "unit": "iter/sec",
            "range": "stddev: 0.000001020515915721386",
            "extra": "mean: 30.311745687992698 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "7feca1d51281a1a059ace29d9cce6cafcffe8764",
          "message": "mv markdown table to html",
          "timestamp": "2020-11-27T19:14:59+01:00",
          "tree_id": "67bd63cb731a9a3a2bf08cb45ffede1c27d178e8",
          "url": "https://github.com/histolab/histolab/commit/7feca1d51281a1a059ace29d9cce6cafcffe8764"
        },
        "date": 1606501391124,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.088659434988834,
            "unit": "iter/sec",
            "range": "stddev: 0.002545598131084764",
            "extra": "mean: 123.62988058000496 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 239.770766774793,
            "unit": "iter/sec",
            "range": "stddev: 0.00014955263386599065",
            "extra": "mean: 4.170650214999978 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1057.6322816909174,
            "unit": "iter/sec",
            "range": "stddev: 0.00002397261582860702",
            "extra": "mean: 945.5082047998985 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 23730.012722613686,
            "unit": "iter/sec",
            "range": "stddev: 0.000003367060062886562",
            "extra": "mean: 42.14072751200183 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 26425.380718023272,
            "unit": "iter/sec",
            "range": "stddev: 0.000003596103939956809",
            "extra": "mean: 37.842406535999544 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 22124.939379037278,
            "unit": "iter/sec",
            "range": "stddev: 0.000003514695240478896",
            "extra": "mean: 45.19786395200117 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "888766ddd56b64ab95a8d36b39ba828ed511d8c5",
          "message": "workflow for pypi release",
          "timestamp": "2020-12-04T17:31:30+01:00",
          "tree_id": "5f0a458ed2c8e3097eb5716693dd6adad08122dd",
          "url": "https://github.com/histolab/histolab/commit/888766ddd56b64ab95a8d36b39ba828ed511d8c5"
        },
        "date": 1607099940506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 9.118037614384024,
            "unit": "iter/sec",
            "range": "stddev: 0.0033327106490046083",
            "extra": "mean: 109.6727215099952 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 266.17989151739584,
            "unit": "iter/sec",
            "range": "stddev: 0.00011537866467375063",
            "extra": "mean: 3.7568577938001226 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1121.1076033330821,
            "unit": "iter/sec",
            "range": "stddev: 0.00002152725884849233",
            "extra": "mean: 891.9750406000048 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 26293.45008797527,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013624188735006844",
            "extra": "mean: 38.0322854799997 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 29169.44195529821,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012707183547576412",
            "extra": "mean: 34.28245221600355 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24940.117466115425,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017865977673262714",
            "extra": "mean: 40.096042103997206 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "72a598eb0e35536581ed1227e0ebacc57a17e915",
          "message": "remove code inspector",
          "timestamp": "2020-12-04T18:25:18+01:00",
          "tree_id": "b3e8447d95512249d56f95f59788a09badb35f62",
          "url": "https://github.com/histolab/histolab/commit/72a598eb0e35536581ed1227e0ebacc57a17e915"
        },
        "date": 1607103210839,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.9806882471455785,
            "unit": "iter/sec",
            "range": "stddev: 0.00259950648814608",
            "extra": "mean: 143.25235057000327 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 303.9696291492878,
            "unit": "iter/sec",
            "range": "stddev: 0.000009819282976032176",
            "extra": "mean: 3.289802349000047 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1049.8083344767883,
            "unit": "iter/sec",
            "range": "stddev: 0.000006985187376383355",
            "extra": "mean: 952.5548303999585 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 34551.97489061501,
            "unit": "iter/sec",
            "range": "stddev: 3.2923607793748623e-7",
            "extra": "mean: 28.941905727988342 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 37527.311998641555,
            "unit": "iter/sec",
            "range": "stddev: 2.703631095660591e-7",
            "extra": "mean: 26.64725893600371 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 31533.13221013447,
            "unit": "iter/sec",
            "range": "stddev: 3.4740788766132084e-7",
            "extra": "mean: 31.712675840004522 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "e126fce4365d321e8aa93ef7df167ff1590e1d83",
          "message": "Add missing files",
          "timestamp": "2020-12-04T19:13:19+01:00",
          "tree_id": "1321bbda649f215bd5f26a08f9669099d896c3d3",
          "url": "https://github.com/histolab/histolab/commit/e126fce4365d321e8aa93ef7df167ff1590e1d83"
        },
        "date": 1607106008198,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.546491204632214,
            "unit": "iter/sec",
            "range": "stddev: 0.004581732201780963",
            "extra": "mean: 132.51191486000494 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 301.7424242476951,
            "unit": "iter/sec",
            "range": "stddev: 0.00016132315987677884",
            "extra": "mean: 3.3140848605999054 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1084.3790134079984,
            "unit": "iter/sec",
            "range": "stddev: 0.00000683507016356768",
            "extra": "mean: 922.1867886000382 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 34997.2164082084,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010991735956114843",
            "extra": "mean: 28.573701071993128 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 39671.32954715076,
            "unit": "iter/sec",
            "range": "stddev: 9.393214605615038e-7",
            "extra": "mean: 25.207120895997832 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 31537.224682482563,
            "unit": "iter/sec",
            "range": "stddev: 7.879902270079842e-7",
            "extra": "mean: 31.70856059999005 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "861f96db81adbc4c2de2efb92897abe3104c8b23",
          "message": "fix flake8 fail on windows",
          "timestamp": "2020-12-04T23:15:05+01:00",
          "tree_id": "6ba30b66465cfa85b07ea8add85ad68cf0561825",
          "url": "https://github.com/histolab/histolab/commit/861f96db81adbc4c2de2efb92897abe3104c8b23"
        },
        "date": 1607120616376,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.804507459114488,
            "unit": "iter/sec",
            "range": "stddev: 0.003907973191430587",
            "extra": "mean: 146.9614084500006 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 260.51171006293146,
            "unit": "iter/sec",
            "range": "stddev: 0.000051337992190312474",
            "extra": "mean: 3.8385990393999236 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1033.8495841450715,
            "unit": "iter/sec",
            "range": "stddev: 0.0000061061343430371556",
            "extra": "mean: 967.2586954000053 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 34228.07969789617,
            "unit": "iter/sec",
            "range": "stddev: 1.5951691039485317e-7",
            "extra": "mean: 29.215778648004743 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 38134.892153646615,
            "unit": "iter/sec",
            "range": "stddev: 1.2923895352575176e-7",
            "extra": "mean: 26.222704288004024 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 30812.140298106166,
            "unit": "iter/sec",
            "range": "stddev: 1.5066075784246688e-7",
            "extra": "mean: 32.45473992799725 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "0e43cd44499688b11680e9e56c2fa42601f959f6",
          "message": "tests: refactor test_slide and back to 100% coverage",
          "timestamp": "2020-12-08T17:46:50+01:00",
          "tree_id": "9ed107946289738e885dbe720a0f9a18e40377d9",
          "url": "https://github.com/histolab/histolab/commit/0e43cd44499688b11680e9e56c2fa42601f959f6"
        },
        "date": 1607446500327,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.941977993390595,
            "unit": "iter/sec",
            "range": "stddev: 0.007330459039930145",
            "extra": "mean: 125.9132171900012 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 265.93899891721514,
            "unit": "iter/sec",
            "range": "stddev: 0.00022528008704992495",
            "extra": "mean: 3.760260827000002 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 978.4591475047195,
            "unit": "iter/sec",
            "range": "stddev: 0.00003779237170099736",
            "extra": "mean: 1.0220150760000706 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 23545.57254598782,
            "unit": "iter/sec",
            "range": "stddev: 0.000002633355715610607",
            "extra": "mean: 42.47082962399236 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25616.475593765037,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030351424200573984",
            "extra": "mean: 39.03737640799409 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23230.13448979981,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034669588195213757",
            "extra": "mean: 43.04753381600494 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "b5a940e7bfee5e5646ae68196992c7d43c41fb09",
          "message": "Add Slack user group link",
          "timestamp": "2020-12-09T14:42:08+01:00",
          "tree_id": "b0b0046d0673f7851fce9c1d895ce981bc165cd4",
          "url": "https://github.com/histolab/histolab/commit/b5a940e7bfee5e5646ae68196992c7d43c41fb09"
        },
        "date": 1607521772440,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.0140044261563155,
            "unit": "iter/sec",
            "range": "stddev: 0.001927020964530717",
            "extra": "mean: 142.57190888999787 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 291.71929940412144,
            "unit": "iter/sec",
            "range": "stddev: 0.00006857497765739945",
            "extra": "mean: 3.427952836999964 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1045.28337108499,
            "unit": "iter/sec",
            "range": "stddev: 0.000043033192080286856",
            "extra": "mean: 956.6783780000378 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 34709.79219247662,
            "unit": "iter/sec",
            "range": "stddev: 4.378825577938538e-7",
            "extra": "mean: 28.810313656004837 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 38839.62079022069,
            "unit": "iter/sec",
            "range": "stddev: 3.720127687965168e-7",
            "extra": "mean: 25.746904311995422 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 31336.3821609174,
            "unit": "iter/sec",
            "range": "stddev: 4.4142535383550735e-7",
            "extra": "mean: 31.91178850400911 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "66267a959712a32959358da6a4882a7ca5a894b6",
          "message": "release: prepare v0.2.0 release",
          "timestamp": "2020-12-09T16:41:24+01:00",
          "tree_id": "9ec564fbb6c8af30af3c2e6d87345a708f63df7a",
          "url": "https://github.com/histolab/histolab/commit/66267a959712a32959358da6a4882a7ca5a894b6"
        },
        "date": 1607528959475,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.114503089144241,
            "unit": "iter/sec",
            "range": "stddev: 0.0023312893950327845",
            "extra": "mean: 140.55795429 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 288.33897411954234,
            "unit": "iter/sec",
            "range": "stddev: 0.00006325114110742104",
            "extra": "mean: 3.4681402438000304 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1046.7822093256425,
            "unit": "iter/sec",
            "range": "stddev: 0.000009123672523066118",
            "extra": "mean: 955.3085552000539 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 36176.56058606929,
            "unit": "iter/sec",
            "range": "stddev: 6.182791335499881e-7",
            "extra": "mean: 27.64220765600021 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 39505.090453876226,
            "unit": "iter/sec",
            "range": "stddev: 5.665948676234641e-7",
            "extra": "mean: 25.3131935279971 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 33138.76152520792,
            "unit": "iter/sec",
            "range": "stddev: 9.211148127666934e-7",
            "extra": "mean: 30.176142800005437 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "b7c78c711bb67a1130cd3cbbaf22dc7d37d2d01a",
          "message": "address Alessia's comment",
          "timestamp": "2020-12-16T15:11:42+01:00",
          "tree_id": "c914eb05960c5e4f529c9b1ad29f611afe0cab57",
          "url": "https://github.com/histolab/histolab/commit/b7c78c711bb67a1130cd3cbbaf22dc7d37d2d01a"
        },
        "date": 1608128297599,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.9161933126432835,
            "unit": "iter/sec",
            "range": "stddev: 0.0010490169691161973",
            "extra": "mean: 126.32334260999642 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 329.8087292499922,
            "unit": "iter/sec",
            "range": "stddev: 0.000054485540195182",
            "extra": "mean: 3.032060437800021 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1201.7184840622226,
            "unit": "iter/sec",
            "range": "stddev: 0.000008640117023087074",
            "extra": "mean: 832.1416482000473 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 39454.256066849244,
            "unit": "iter/sec",
            "range": "stddev: 1.9408160925857366e-7",
            "extra": "mean: 25.345808023997506 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 43758.85655408804,
            "unit": "iter/sec",
            "range": "stddev: 8.558017530315463e-8",
            "extra": "mean: 22.8525166959962 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 35210.29890584372,
            "unit": "iter/sec",
            "range": "stddev: 1.2328575612757764e-7",
            "extra": "mean: 28.40078133599809 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "567c7dd5573889a9c3f9bf572e436a904c143097",
          "message": "fix conftest HTMLRenderer when items is empty",
          "timestamp": "2020-12-16T15:20:33+01:00",
          "tree_id": "6481606ffa3d62b284f2527f16da9cffefde7ccf",
          "url": "https://github.com/histolab/histolab/commit/567c7dd5573889a9c3f9bf572e436a904c143097"
        },
        "date": 1608128890648,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.017569219420709,
            "unit": "iter/sec",
            "range": "stddev: 0.002732045689837983",
            "extra": "mean: 142.49948503999917 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 305.10386999596284,
            "unit": "iter/sec",
            "range": "stddev: 0.000011318763254485404",
            "extra": "mean: 3.27757232320007 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1051.2327897857408,
            "unit": "iter/sec",
            "range": "stddev: 0.000008903090487506374",
            "extra": "mean: 951.2640870000041 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 35385.64652670363,
            "unit": "iter/sec",
            "range": "stddev: 6.016447354196494e-7",
            "extra": "mean: 28.260046040005363 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 38256.042011977836,
            "unit": "iter/sec",
            "range": "stddev: 2.4322872064300987e-7",
            "extra": "mean: 26.13966180000807 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 31197.60155355379,
            "unit": "iter/sec",
            "range": "stddev: 5.907343791957621e-7",
            "extra": "mean: 32.05374612799642 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "cc41b94d5f630108d78f96b21835ef830f25a2a3",
          "message": "release: prepare v0.2.1 release",
          "timestamp": "2020-12-16T15:25:01+01:00",
          "tree_id": "982c5d24d75bf81dc50239c4fef0ec63a031b1bc",
          "url": "https://github.com/histolab/histolab/commit/cc41b94d5f630108d78f96b21835ef830f25a2a3"
        },
        "date": 1608129180737,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.831441572992273,
            "unit": "iter/sec",
            "range": "stddev: 0.005248330924341682",
            "extra": "mean: 146.3819882399997 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 258.7442730175939,
            "unit": "iter/sec",
            "range": "stddev: 0.00006654100429863995",
            "extra": "mean: 3.864819840599921 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1021.3401394775954,
            "unit": "iter/sec",
            "range": "stddev: 0.00000614237807518707",
            "extra": "mean: 979.1057467999735 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 34391.712467817386,
            "unit": "iter/sec",
            "range": "stddev: 1.5755095650437112e-7",
            "extra": "mean: 29.07677252000076 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 38096.72512435034,
            "unit": "iter/sec",
            "range": "stddev: 1.3701607784361049e-7",
            "extra": "mean: 26.24897538399773 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 30397.592090492875,
            "unit": "iter/sec",
            "range": "stddev: 1.6530345782868454e-7",
            "extra": "mean: 32.897342559997014 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "1c7a85a79eabbf8e7872c950611f748dc36c842d",
          "message": "fix np_to_pil in case float input but in a correct range.",
          "timestamp": "2020-12-30T16:34:13+01:00",
          "tree_id": "a4bc6e4da6ea842f4efec70ab54ad3c1a7d134b9",
          "url": "https://github.com/histolab/histolab/commit/1c7a85a79eabbf8e7872c950611f748dc36c842d"
        },
        "date": 1609342953052,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.995627900107849,
            "unit": "iter/sec",
            "range": "stddev: 0.0016586847818635213",
            "extra": "mean: 142.94642514999737 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 293.62627278373236,
            "unit": "iter/sec",
            "range": "stddev: 0.0001532289428319909",
            "extra": "mean: 3.4056897923999485 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 595.1334166546465,
            "unit": "iter/sec",
            "range": "stddev: 0.000007730368985910398",
            "extra": "mean: 1.6802954967999995 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25321.9210668254,
            "unit": "iter/sec",
            "range": "stddev: 2.8717036039333333e-7",
            "extra": "mean: 39.49147449598968 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 26459.783851365133,
            "unit": "iter/sec",
            "range": "stddev: 3.885566662731434e-7",
            "extra": "mean: 37.7932036639977 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23448.58237598316,
            "unit": "iter/sec",
            "range": "stddev: 3.9130281668320297e-7",
            "extra": "mean: 42.64650135200645 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicole.bussolaceradini@gmail.com",
            "name": "Nicole Bussola",
            "username": "nicolebussola"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "b2301466f20fc226b15d0a2663ba7f3bc2fe502b",
          "message": "fix issue #117",
          "timestamp": "2020-12-30T19:30:57+01:00",
          "tree_id": "fedecf35d838f79104cb9d59651d6c8d1bfa1042",
          "url": "https://github.com/histolab/histolab/commit/b2301466f20fc226b15d0a2663ba7f3bc2fe502b"
        },
        "date": 1609353466378,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.046712070595408,
            "unit": "iter/sec",
            "range": "stddev: 0.0012281895678810282",
            "extra": "mean: 124.27436090999663 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 265.6546339869491,
            "unit": "iter/sec",
            "range": "stddev: 0.00011201569687108423",
            "extra": "mean: 3.7642859263999413 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 601.6643624901026,
            "unit": "iter/sec",
            "range": "stddev: 0.00000994552853152849",
            "extra": "mean: 1.6620562266000092 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29284.35609334245,
            "unit": "iter/sec",
            "range": "stddev: 1.2848923917496368e-7",
            "extra": "mean: 34.14792515200088 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 30651.855041634317,
            "unit": "iter/sec",
            "range": "stddev: 1.6342945868158774e-7",
            "extra": "mean: 32.62445286400134 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26919.6219958421,
            "unit": "iter/sec",
            "range": "stddev: 1.1782790714889465e-7",
            "extra": "mean: 37.14762414399638 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "7c64c363836574f28e7fec5ac13097fc53f68825",
          "message": "fix docstring",
          "timestamp": "2020-12-31T13:33:15+01:00",
          "tree_id": "884ec2a095bd790e0a75c49914b99d43f23030e0",
          "url": "https://github.com/histolab/histolab/commit/7c64c363836574f28e7fec5ac13097fc53f68825"
        },
        "date": 1609418530191,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.906345746881875,
            "unit": "iter/sec",
            "range": "stddev: 0.0017622072462600237",
            "extra": "mean: 144.79437268999845 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 276.252746437815,
            "unit": "iter/sec",
            "range": "stddev: 0.000149346565908819",
            "extra": "mean: 3.6198735139999827 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 558.5490610809031,
            "unit": "iter/sec",
            "range": "stddev: 0.00003707071071006263",
            "extra": "mean: 1.7903530229999889 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25343.277928269534,
            "unit": "iter/sec",
            "range": "stddev: 1.4154013097066172e-7",
            "extra": "mean: 39.4581949040039 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 26227.44921847732,
            "unit": "iter/sec",
            "range": "stddev: 1.8583740842772606e-7",
            "extra": "mean: 38.12799299199469 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23267.531542976998,
            "unit": "iter/sec",
            "range": "stddev: 4.032232878541003e-7",
            "extra": "mean: 42.978345088000424 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "9301e74d2a8dded2adfcd2fc42d03f218fb75b3a",
          "message": "Update scipy requirement from <=1.5.4,>=1.5.0 to >=1.5.0,<1.6.1\n\nUpdates the requirements on [scipy](https://github.com/scipy/scipy) to permit the latest version.\n- [Release notes](https://github.com/scipy/scipy/releases)\n- [Commits](https://github.com/scipy/scipy/compare/v1.5.0...v1.6.0)\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-01-01T17:32:34+01:00",
          "tree_id": "2fd4a48cd6363def4d11bd584f7e0cc5d96e6b60",
          "url": "https://github.com/histolab/histolab/commit/9301e74d2a8dded2adfcd2fc42d03f218fb75b3a"
        },
        "date": 1609519206375,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.3999392390841745,
            "unit": "iter/sec",
            "range": "stddev: 0.002573749075616181",
            "extra": "mean: 135.1362447299988 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 284.7166799712255,
            "unit": "iter/sec",
            "range": "stddev: 0.00004296680935457867",
            "extra": "mean: 3.5122634897999774 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 613.8813805882356,
            "unit": "iter/sec",
            "range": "stddev: 0.000019933720276225687",
            "extra": "mean: 1.628979199600053 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27388.13185914793,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012157907106357654",
            "extra": "mean: 36.51216538399967 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 28756.689610326866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013714712494701589",
            "extra": "mean: 34.774517288001334 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25248.79931526635,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016213089305489024",
            "extra": "mean: 39.605843727997126 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "426ca069f87de3d82269ce10c2f666991789720c",
          "message": "Update numpy requirement from <=1.19.4,>=1.18.4 to >=1.18.4,<1.19.6\n\nUpdates the requirements on [numpy](https://github.com/numpy/numpy) to permit the latest version.\n- [Release notes](https://github.com/numpy/numpy/releases)\n- [Changelog](https://github.com/numpy/numpy/blob/master/doc/HOWTO_RELEASE.rst.txt)\n- [Commits](https://github.com/numpy/numpy/compare/v1.18.4...v1.19.5)\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-01-07T14:18:25+01:00",
          "tree_id": "f1518362571210aae2a75c1965fa08331691cc2b",
          "url": "https://github.com/histolab/histolab/commit/426ca069f87de3d82269ce10c2f666991789720c"
        },
        "date": 1610025867817,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 9.268864886895997,
            "unit": "iter/sec",
            "range": "stddev: 0.0038404736086150534",
            "extra": "mean: 107.88807607000138 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 337.35408568709255,
            "unit": "iter/sec",
            "range": "stddev: 0.00006159438601706007",
            "extra": "mean: 2.964244520600039 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 728.6781518769941,
            "unit": "iter/sec",
            "range": "stddev: 0.000026662941855845275",
            "extra": "mean: 1.372347993999972 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 34060.72406541808,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018320776584024311",
            "extra": "mean: 29.359328887999254 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 35668.78915461212,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013582135924979134",
            "extra": "mean: 28.035714799998914 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 30501.956141573646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017839382676713337",
            "extra": "mean: 32.784782567994625 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "51d1465d3c1408c9857a54aaf216076e2a770bdb",
          "message": "fix typo",
          "timestamp": "2021-01-07T15:35:14+01:00",
          "tree_id": "7d3bf6b14704a7404eb930565496ae6b2624aed4",
          "url": "https://github.com/histolab/histolab/commit/51d1465d3c1408c9857a54aaf216076e2a770bdb"
        },
        "date": 1610030594350,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.77664467405662,
            "unit": "iter/sec",
            "range": "stddev: 0.0015352339111607575",
            "extra": "mean: 147.5656535200011 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 241.98755807128452,
            "unit": "iter/sec",
            "range": "stddev: 0.00004243061635906331",
            "extra": "mean: 4.132443866000005 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 574.2976222865378,
            "unit": "iter/sec",
            "range": "stddev: 0.000007014386610003978",
            "extra": "mean: 1.741257426799973 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 24324.706129121336,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012167109567048996",
            "extra": "mean: 41.11046582399649 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25514.404434720855,
            "unit": "iter/sec",
            "range": "stddev: 1.5634963805206026e-7",
            "extra": "mean: 39.19354663200238 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 22302.070585232257,
            "unit": "iter/sec",
            "range": "stddev: 1.2005989360687784e-7",
            "extra": "mean: 44.838885976002985 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "27acf35817e82ff06ee7e3eba42d384fed25af43",
          "message": "Change method order",
          "timestamp": "2021-01-07T16:30:08+01:00",
          "tree_id": "0376dff740dde63d73cb71fd28bf318bab90bde1",
          "url": "https://github.com/histolab/histolab/commit/27acf35817e82ff06ee7e3eba42d384fed25af43"
        },
        "date": 1610033788447,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 10.940108140584417,
            "unit": "iter/sec",
            "range": "stddev: 0.0034151443381199545",
            "extra": "mean: 91.40677469999673 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 462.36383917809,
            "unit": "iter/sec",
            "range": "stddev: 0.00010412859413167618",
            "extra": "mean: 2.162798894000071 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 611.3761373341167,
            "unit": "iter/sec",
            "range": "stddev: 0.000027505785234231307",
            "extra": "mean: 1.6356542869999202 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 18786.02337300193,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018876573732354682",
            "extra": "mean: 53.23106333600845 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20181.84962162003,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021544280884181885",
            "extra": "mean: 49.54947235999316 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 19861.676446456884,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033081446384616877",
            "extra": "mean: 50.34821721599383 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Ernesto Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "b224ca57170d168648e58188fb215cd62b2bd64e",
          "message": "skip flake8 on expectation file",
          "timestamp": "2021-01-08T00:45:56+01:00",
          "tree_id": "1b2e9241b2101344a8421e524f605f7b2dfb51f9",
          "url": "https://github.com/histolab/histolab/commit/b224ca57170d168648e58188fb215cd62b2bd64e"
        },
        "date": 1610063569835,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 9.30777404841362,
            "unit": "iter/sec",
            "range": "stddev: 0.006196322211425399",
            "extra": "mean: 107.43707301000029 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 351.829252222323,
            "unit": "iter/sec",
            "range": "stddev: 0.00028770787955720854",
            "extra": "mean: 2.8422878248000076 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 553.9578203772321,
            "unit": "iter/sec",
            "range": "stddev: 0.00007074770509096775",
            "extra": "mean: 1.8051915925999993 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17690.27290606128,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039136370117339725",
            "extra": "mean: 56.528240423999705 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 18766.41399520821,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037220993399066464",
            "extra": "mean: 53.286685472000045 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 19602.241837391164,
            "unit": "iter/sec",
            "range": "stddev: 0.00000436470144474589",
            "extra": "mean: 51.01457314400159 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Ernesto Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "a6109ea54a8093b03bde96b2275e547a75e3988e",
          "message": "refactor docstring for _remap_level",
          "timestamp": "2021-01-08T13:37:30+01:00",
          "tree_id": "5a221dee1688324b3cbdba84e0abd4ae10304e66",
          "url": "https://github.com/histolab/histolab/commit/a6109ea54a8093b03bde96b2275e547a75e3988e"
        },
        "date": 1610109933635,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.893506615833968,
            "unit": "iter/sec",
            "range": "stddev: 0.00514165066797784",
            "extra": "mean: 126.68640804000233 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 203.74824096151502,
            "unit": "iter/sec",
            "range": "stddev: 0.0002676247844943565",
            "extra": "mean: 4.908017832600012 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 482.1226921804952,
            "unit": "iter/sec",
            "range": "stddev: 0.00004672163447010551",
            "extra": "mean: 2.0741608229998523 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17809.322386657994,
            "unit": "iter/sec",
            "range": "stddev: 0.000003323968160471894",
            "extra": "mean: 56.15036767199854 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 18341.95939616261,
            "unit": "iter/sec",
            "range": "stddev: 0.000003603939576543099",
            "extra": "mean: 54.51980229599758 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16270.543318319596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028170000556584573",
            "extra": "mean: 61.46076258400444 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Ernesto Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "e7785e538d4eb57f6a688d7837208ee9e953acb2",
          "message": "some changes in the contributing guidelines",
          "timestamp": "2021-01-08T18:15:52+01:00",
          "tree_id": "5838c138f6ea3889728c927496eed621be6e9886",
          "url": "https://github.com/histolab/histolab/commit/e7785e538d4eb57f6a688d7837208ee9e953acb2"
        },
        "date": 1610126677648,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.59271935762618,
            "unit": "iter/sec",
            "range": "stddev: 0.0036153919433883843",
            "extra": "mean: 131.70511813999724 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 194.36708487071445,
            "unit": "iter/sec",
            "range": "stddev: 0.00011476681380897848",
            "extra": "mean: 5.144904039000028 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 463.08331214132915,
            "unit": "iter/sec",
            "range": "stddev: 0.0000419851312161195",
            "extra": "mean: 2.1594386448000704 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17954.79764724426,
            "unit": "iter/sec",
            "range": "stddev: 0.000003892246564832161",
            "extra": "mean: 55.69542022399128 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 18529.315682528646,
            "unit": "iter/sec",
            "range": "stddev: 0.000004600913717738831",
            "extra": "mean: 53.96853381600613 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16646.46003488075,
            "unit": "iter/sec",
            "range": "stddev: 0.000004086033885676518",
            "extra": "mean: 60.07283217600707 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "0a5c448c65aa9160580b36e347a0cdb43cb0576c",
          "message": "Refactor util import",
          "timestamp": "2021-01-14T16:30:10+01:00",
          "tree_id": "938fdcc6089eb55f546098b262ac79ef68b1a39a",
          "url": "https://github.com/histolab/histolab/commit/0a5c448c65aa9160580b36e347a0cdb43cb0576c"
        },
        "date": 1610638632844,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.77396551617052,
            "unit": "iter/sec",
            "range": "stddev: 0.007165809189664217",
            "extra": "mean: 113.97355029000153 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 305.27475656553406,
            "unit": "iter/sec",
            "range": "stddev: 0.0003403200653332265",
            "extra": "mean: 3.2757376052000153 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 565.6030734088072,
            "unit": "iter/sec",
            "range": "stddev: 0.00008374486488149222",
            "extra": "mean: 1.768024339000044 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17156.62855880123,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032223230319205824",
            "extra": "mean: 58.28650987999663 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 18625.093821825038,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028666922139596477",
            "extra": "mean: 53.69100470399735 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 18270.129610420143,
            "unit": "iter/sec",
            "range": "stddev: 0.000004311480384244585",
            "extra": "mean: 54.734149199995954 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicola.bussolaceradini@gmail.com",
            "name": "Nicole Bussola"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "f1c74aeb61c2f858fe8cbd54cdce1257970bf010",
          "message": "address comments",
          "timestamp": "2021-01-18T18:13:05+01:00",
          "tree_id": "1789ae1b72db8ea215b4e755b4d251a409721ee4",
          "url": "https://github.com/histolab/histolab/commit/f1c74aeb61c2f858fe8cbd54cdce1257970bf010"
        },
        "date": 1610990493241,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.6757819062733175,
            "unit": "iter/sec",
            "range": "stddev: 0.00428593153435693",
            "extra": "mean: 130.27988708000066 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 233.50949877586558,
            "unit": "iter/sec",
            "range": "stddev: 0.0002148548155599181",
            "extra": "mean: 4.282481035000001 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 527.3852503738595,
            "unit": "iter/sec",
            "range": "stddev: 0.00006731580251217042",
            "extra": "mean: 1.896147075199974 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15896.797767103664,
            "unit": "iter/sec",
            "range": "stddev: 0.000003145078508174664",
            "extra": "mean: 62.90575087200068 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 16578.53951188461,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047282372958576075",
            "extra": "mean: 60.318944215992815 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15316.972461490766,
            "unit": "iter/sec",
            "range": "stddev: 0.000005419110263241667",
            "extra": "mean: 65.28705346400238 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Ernesto Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "30e8797b937a9f053e68e8bf3a1848f918c786fb",
          "message": "address CR comments",
          "timestamp": "2021-01-18T23:38:10+01:00",
          "tree_id": "9cdfae7d38bbd5d05f931603c2dce4438c1af273",
          "url": "https://github.com/histolab/histolab/commit/30e8797b937a9f053e68e8bf3a1848f918c786fb"
        },
        "date": 1611009986454,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.697829855210578,
            "unit": "iter/sec",
            "range": "stddev: 0.004627260134629331",
            "extra": "mean: 149.3020906200013 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 227.28525931702177,
            "unit": "iter/sec",
            "range": "stddev: 0.00009169199601018718",
            "extra": "mean: 4.3997573930000495 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 515.5823628466691,
            "unit": "iter/sec",
            "range": "stddev: 0.000072182986755854",
            "extra": "mean: 1.9395543216000077 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 23775.229141941145,
            "unit": "iter/sec",
            "range": "stddev: 0.000004305754651522072",
            "extra": "mean: 42.060583055997995 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24715.230305753965,
            "unit": "iter/sec",
            "range": "stddev: 0.000003192183147516055",
            "extra": "mean: 40.46088131200577 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 21913.266497417702,
            "unit": "iter/sec",
            "range": "stddev: 0.000004313315624000368",
            "extra": "mean: 45.63445619199865 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicola.bussolaceradini@gmail.com",
            "name": "Nicole Bussola"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "ddd0c4a7116367d24f81f38755cd6483913bbf7e",
          "message": "fix quickstart bug",
          "timestamp": "2021-01-19T16:10:10+01:00",
          "tree_id": "c3f3b360b88c725c0b3ad264f0e98f00c5429c35",
          "url": "https://github.com/histolab/histolab/commit/ddd0c4a7116367d24f81f38755cd6483913bbf7e"
        },
        "date": 1611069427807,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.9879071329527465,
            "unit": "iter/sec",
            "range": "stddev: 0.001567984530589608",
            "extra": "mean: 125.18923709999969 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 210.6323822753285,
            "unit": "iter/sec",
            "range": "stddev: 0.0000887556312845274",
            "extra": "mean: 4.747608080000009 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 664.597152074359,
            "unit": "iter/sec",
            "range": "stddev: 0.00001822185419435431",
            "extra": "mean: 1.5046709075998477 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29328.093222382864,
            "unit": "iter/sec",
            "range": "stddev: 1.244235882128132e-7",
            "extra": "mean: 34.097000184001445 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 30621.05480290236,
            "unit": "iter/sec",
            "range": "stddev: 1.0354656894044006e-7",
            "extra": "mean: 32.657268223993924 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26857.545318227876,
            "unit": "iter/sec",
            "range": "stddev: 1.2437475118373388e-7",
            "extra": "mean: 37.23348459999852 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Ernesto Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Ernesto Arbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "e79f57df869eefedd769b7932d87d9e5ce84e947",
          "message": "release: prepare v0.2.2 release",
          "timestamp": "2021-01-19T22:44:47+01:00",
          "tree_id": "df90e5fa7312c1ebe069137c58c23f21cae1ae88",
          "url": "https://github.com/histolab/histolab/commit/e79f57df869eefedd769b7932d87d9e5ce84e947"
        },
        "date": 1611093146032,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.680010549213166,
            "unit": "iter/sec",
            "range": "stddev: 0.004396137253671233",
            "extra": "mean: 130.20815448000292 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 296.3859125068011,
            "unit": "iter/sec",
            "range": "stddev: 0.00004236560138210492",
            "extra": "mean: 3.373979523999992 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 629.6919192627149,
            "unit": "iter/sec",
            "range": "stddev: 0.000032852240475497943",
            "extra": "mean: 1.588078184599965 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28625.283689446875,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017792644915394978",
            "extra": "mean: 34.93415159999495 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 29592.95901686731,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017710259379632353",
            "extra": "mean: 33.79182187999595 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25902.263533574147,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019713387031530804",
            "extra": "mean: 38.60666457600564 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d0fa9038905c1d3da5e073f645070dec30549045",
          "message": "Update README.md",
          "timestamp": "2021-01-19T22:51:47+01:00",
          "tree_id": "2c510db064ef56121463bfb68614926d82909e47",
          "url": "https://github.com/histolab/histolab/commit/d0fa9038905c1d3da5e073f645070dec30549045"
        },
        "date": 1611093625242,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.657046452101279,
            "unit": "iter/sec",
            "range": "stddev: 0.00783728438579432",
            "extra": "mean: 130.59865919000345 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 242.85895078520556,
            "unit": "iter/sec",
            "range": "stddev: 0.00018481691720386513",
            "extra": "mean: 4.117616405600142 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 529.2640091758047,
            "unit": "iter/sec",
            "range": "stddev: 0.00005103050555402954",
            "extra": "mean: 1.889416213200002 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15550.048933249453,
            "unit": "iter/sec",
            "range": "stddev: 0.000004904938823525184",
            "extra": "mean: 64.30847930399614 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 16795.59586368971,
            "unit": "iter/sec",
            "range": "stddev: 0.000005080671409356078",
            "extra": "mean: 59.53941784000017 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15605.274176586034,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043595214980911105",
            "extra": "mean: 64.08089910399576 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "01ce4ef4d0f27a57132c1f8ffacbb571fa398ef2",
          "message": "Update numpy requirement from <1.19.6,>=1.18.4 to >=1.18.4,<1.20.1\n\nUpdates the requirements on [numpy](https://github.com/numpy/numpy) to permit the latest version.\n- [Release notes](https://github.com/numpy/numpy/releases)\n- [Changelog](https://github.com/numpy/numpy/blob/master/doc/HOWTO_RELEASE.rst.txt)\n- [Commits](https://github.com/numpy/numpy/compare/v1.18.4...v1.20.0)\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-02-01T09:54:02+01:00",
          "tree_id": "f9781e171c8e149887963a721d61ce2c02193b21",
          "url": "https://github.com/histolab/histolab/commit/01ce4ef4d0f27a57132c1f8ffacbb571fa398ef2"
        },
        "date": 1612170148487,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.455683492622269,
            "unit": "iter/sec",
            "range": "stddev: 0.005551091584103586",
            "extra": "mean: 134.12586531999978 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 213.56738443375045,
            "unit": "iter/sec",
            "range": "stddev: 0.00020565311515134178",
            "extra": "mean: 4.6823629115999434 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 462.38027929821345,
            "unit": "iter/sec",
            "range": "stddev: 0.00008139314102026439",
            "extra": "mean: 2.1627219947999716 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 18096.292366619396,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036875732683015756",
            "extra": "mean: 55.259938319995854 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19261.05833547788,
            "unit": "iter/sec",
            "range": "stddev: 0.000005366722034170728",
            "extra": "mean: 51.91822705598952 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16307.743250673358,
            "unit": "iter/sec",
            "range": "stddev: 0.00000620877970327011",
            "extra": "mean: 61.32056316000126 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "6febdd858c933157e8cf5d6dea72982fcbecf6d5",
          "message": "Update numpy requirement from <1.20.1,>=1.18.4 to >=1.18.4,<1.20.2\n\nUpdates the requirements on [numpy](https://github.com/numpy/numpy) to permit the latest version.\n- [Release notes](https://github.com/numpy/numpy/releases)\n- [Changelog](https://github.com/numpy/numpy/blob/master/doc/HOWTO_RELEASE.rst.txt)\n- [Commits](https://github.com/numpy/numpy/compare/v1.18.4...v1.20.1)\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-02-08T09:48:28+01:00",
          "tree_id": "6a2b9bef40ba517e6896fcb1ccabbf490c9158e2",
          "url": "https://github.com/histolab/histolab/commit/6febdd858c933157e8cf5d6dea72982fcbecf6d5"
        },
        "date": 1612774570352,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.439235492833696,
            "unit": "iter/sec",
            "range": "stddev: 0.006502614261713384",
            "extra": "mean: 118.4941456899935 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 326.56199450600934,
            "unit": "iter/sec",
            "range": "stddev: 0.0001905144204735854",
            "extra": "mean: 3.062205697000047 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 550.0685448719619,
            "unit": "iter/sec",
            "range": "stddev: 0.00005962080538557291",
            "extra": "mean: 1.8179552518000603 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 18102.36917952937,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029816836482597606",
            "extra": "mean: 55.24138802399557 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19146.468206103218,
            "unit": "iter/sec",
            "range": "stddev: 0.000002790667659426323",
            "extra": "mean: 52.228953624002315 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 18011.522648847353,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033286570996708623",
            "extra": "mean: 55.52001457600227 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "4f59b9a02c47b4032bfb9b6158326d8d7106d2cf",
          "message": "Address CR comments",
          "timestamp": "2021-02-16T09:21:50+01:00",
          "tree_id": "a07825d86884e917546e0be1bd620f4942aa5a22",
          "url": "https://github.com/histolab/histolab/commit/4f59b9a02c47b4032bfb9b6158326d8d7106d2cf"
        },
        "date": 1613464132043,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 9.481312873566992,
            "unit": "iter/sec",
            "range": "stddev: 0.005703730345110216",
            "extra": "mean: 105.47062556999947 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 463.58415392500893,
            "unit": "iter/sec",
            "range": "stddev: 0.00013074715443224796",
            "extra": "mean: 2.1571056549999414 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 582.7870411063856,
            "unit": "iter/sec",
            "range": "stddev: 0.00005654807306713238",
            "extra": "mean: 1.7158926493999616 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 19413.5982407535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022417146273924688",
            "extra": "mean: 51.510286120003 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19826.17077403888,
            "unit": "iter/sec",
            "range": "stddev: 0.000003162820024633342",
            "extra": "mean: 50.43838325600609 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 20442.993430061088,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029881901066576914",
            "extra": "mean: 48.91651525600537 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "7036066adfaede91abc9ce277088f0f5dbf105da",
          "message": "address CR comments part 2",
          "timestamp": "2021-02-16T15:37:13+01:00",
          "tree_id": "e77ab603ec26326dd9a1df7e1711f99d7b90c841",
          "url": "https://github.com/histolab/histolab/commit/7036066adfaede91abc9ce277088f0f5dbf105da"
        },
        "date": 1613486773368,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.364684799963309,
            "unit": "iter/sec",
            "range": "stddev: 0.005311244329859465",
            "extra": "mean: 135.78313630000594 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 246.81349172064213,
            "unit": "iter/sec",
            "range": "stddev: 0.00047283082352206904",
            "extra": "mean: 4.0516423677999684 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 510.7145600132294,
            "unit": "iter/sec",
            "range": "stddev: 0.00008483184947657829",
            "extra": "mean: 1.9580409064000377 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17282.57547321791,
            "unit": "iter/sec",
            "range": "stddev: 0.000004606030683978216",
            "extra": "mean: 57.861746448013946 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 18244.48554024723,
            "unit": "iter/sec",
            "range": "stddev: 0.00000391107817938169",
            "extra": "mean: 54.81108238398974 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16791.729087199867,
            "unit": "iter/sec",
            "range": "stddev: 0.000006170076942022662",
            "extra": "mean: 59.55312849599795 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "43278e75af58dc63ac663c06b2d3e2b19cfcbab5",
          "message": "release: prepare v0.2.3 release",
          "timestamp": "2021-02-16T17:36:57+01:00",
          "tree_id": "7462a252af1af46df7298878cfd6b51522afcba4",
          "url": "https://github.com/histolab/histolab/commit/43278e75af58dc63ac663c06b2d3e2b19cfcbab5"
        },
        "date": 1613493884477,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.572527697070866,
            "unit": "iter/sec",
            "range": "stddev: 0.005168655488912557",
            "extra": "mean: 132.05630141000483 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 280.15439154321257,
            "unit": "iter/sec",
            "range": "stddev: 0.00007979294678990037",
            "extra": "mean: 3.5694603767999635 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 633.1023694177519,
            "unit": "iter/sec",
            "range": "stddev: 0.000044653350698737805",
            "extra": "mean: 1.5795233887999416 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28901.06883819324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020970228134205735",
            "extra": "mean: 34.60079644800135 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 29663.76161333509,
            "unit": "iter/sec",
            "range": "stddev: 0.00000139367010717262",
            "extra": "mean: 33.71116627199626 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25858.784175886365,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019032317444961843",
            "extra": "mean: 38.67157841599192 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "b6e52ec75baf3c2d77eaf724ef64f43776b6c55d",
          "message": "Update scipy requirement from <1.6.1,>=1.5.0 to >=1.5.0,<1.6.2\n\nUpdates the requirements on [scipy](https://github.com/scipy/scipy) to permit the latest version.\n- [Release notes](https://github.com/scipy/scipy/releases)\n- [Commits](https://github.com/scipy/scipy/compare/v1.5.0...v1.6.1)\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-02-18T09:57:42+01:00",
          "tree_id": "71eb9aa4ad315482f8d0823ab7ff1cc962890cae",
          "url": "https://github.com/histolab/histolab/commit/b6e52ec75baf3c2d77eaf724ef64f43776b6c55d"
        },
        "date": 1613639201340,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.810361779832125,
            "unit": "iter/sec",
            "range": "stddev: 0.006333286106577653",
            "extra": "mean: 128.03504219000388 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 317.43465789679476,
            "unit": "iter/sec",
            "range": "stddev: 0.0002802391638539448",
            "extra": "mean: 3.1502546275999976 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 532.900021383705,
            "unit": "iter/sec",
            "range": "stddev: 0.00003846565511153296",
            "extra": "mean: 1.8765246010000967 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17046.061761039997,
            "unit": "iter/sec",
            "range": "stddev: 0.00000381840343232142",
            "extra": "mean: 58.664576840004884 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 18012.20308170241,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033581194746610764",
            "extra": "mean: 55.517917239998496 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 17206.50395063001,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035736374914963614",
            "extra": "mean: 58.117558503997316 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "2a4706d639e6a6e5f95db26cce16c6ed7e401686",
          "message": "Fix typo in workflow name",
          "timestamp": "2021-02-18T20:58:10+01:00",
          "tree_id": "a705c7501dba3339e281c50af0a4cd0fc11a876e",
          "url": "https://github.com/histolab/histolab/commit/2a4706d639e6a6e5f95db26cce16c6ed7e401686"
        },
        "date": 1613678860428,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.474365507252621,
            "unit": "iter/sec",
            "range": "stddev: 0.004315765558514488",
            "extra": "mean: 118.00293475000217 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 223.62092981305705,
            "unit": "iter/sec",
            "range": "stddev: 0.0001707653568460096",
            "extra": "mean: 4.471853331599959 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 521.8808282861633,
            "unit": "iter/sec",
            "range": "stddev: 0.000030220766823473607",
            "extra": "mean: 1.9161462651999728 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 20441.210762641258,
            "unit": "iter/sec",
            "range": "stddev: 0.000002412866036620113",
            "extra": "mean: 48.920781240004544 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21705.015751801675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019634430337503317",
            "extra": "mean: 46.07230012800119 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 19422.075557490745,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020791616139253804",
            "extra": "mean: 51.487802992009165 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "9a67ff80c153e28c385cfa0e9d262393d40ca047",
          "message": "fix docstring in tiler according to CR",
          "timestamp": "2021-03-09T17:32:50+01:00",
          "tree_id": "a10a689dc34727892850f28ed69196b3c7560915",
          "url": "https://github.com/histolab/histolab/commit/9a67ff80c153e28c385cfa0e9d262393d40ca047"
        },
        "date": 1615308092548,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 9.998768807602403,
            "unit": "iter/sec",
            "range": "stddev: 0.0012956023898364425",
            "extra": "mean: 100.01231343999734 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 325.5005366159919,
            "unit": "iter/sec",
            "range": "stddev: 0.000028278008968596698",
            "extra": "mean: 3.072191555799941 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 950.6203612824121,
            "unit": "iter/sec",
            "range": "stddev: 0.000023257263674400193",
            "extra": "mean: 1.0519446466000089 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 31757.180649701942,
            "unit": "iter/sec",
            "range": "stddev: 6.218062524608374e-7",
            "extra": "mean: 31.488941384013746 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 31757.40334023751,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020785081061065217",
            "extra": "mean: 31.48872057599783 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 28533.136925568775,
            "unit": "iter/sec",
            "range": "stddev: 3.2570544840501365e-7",
            "extra": "mean: 35.04697021601896 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "ad2e3a3154a827346ba4c027f0bff1767458428d",
          "message": "remove leftover tests",
          "timestamp": "2021-03-10T23:18:42+01:00",
          "tree_id": "3110cf35aba744570806cc3579e986114eedbd97",
          "url": "https://github.com/histolab/histolab/commit/ad2e3a3154a827346ba4c027f0bff1767458428d"
        },
        "date": 1615415337720,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.551252701825865,
            "unit": "iter/sec",
            "range": "stddev: 0.003955460939499915",
            "extra": "mean: 116.94193060000202 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 220.62499129112942,
            "unit": "iter/sec",
            "range": "stddev: 0.0001730118636968269",
            "extra": "mean: 4.532578082600048 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 505.6589258220252,
            "unit": "iter/sec",
            "range": "stddev: 0.000049984060565318644",
            "extra": "mean: 1.9776176171998712 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 18707.135238244937,
            "unit": "iter/sec",
            "range": "stddev: 0.000003027628050246787",
            "extra": "mean: 53.45553914399443 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19235.78824151355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027555599375972084",
            "extra": "mean: 51.98643213600462 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 17720.317076822015,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030171912874513317",
            "extra": "mean: 56.43239879200519 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mtageld@emory.edu",
            "name": "kheffah",
            "username": "kheffah"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "f72cd7ae89c7dfe79252c27add8137a5a41dbcf7",
          "message": "fix test_tiler.py",
          "timestamp": "2021-03-15T17:48:22+01:00",
          "tree_id": "5451b823de00226756e4fbb5ca98eba5742b9b25",
          "url": "https://github.com/histolab/histolab/commit/f72cd7ae89c7dfe79252c27add8137a5a41dbcf7"
        },
        "date": 1615827534098,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.475990952244461,
            "unit": "iter/sec",
            "range": "stddev: 0.0014460521934511925",
            "extra": "mean: 133.76153160000513 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 264.0412205429252,
            "unit": "iter/sec",
            "range": "stddev: 0.00006263129236648796",
            "extra": "mean: 3.7872874468001103 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 592.3612505134488,
            "unit": "iter/sec",
            "range": "stddev: 0.000008662606279631379",
            "extra": "mean: 1.688159040000028 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 26822.36615626137,
            "unit": "iter/sec",
            "range": "stddev: 1.6349330528519326e-7",
            "extra": "mean: 37.28231857600531 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 28080.422771120644,
            "unit": "iter/sec",
            "range": "stddev: 1.626778269531383e-7",
            "extra": "mean: 35.611999439996 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24609.216678833982,
            "unit": "iter/sec",
            "range": "stddev: 2.4892316730836587e-7",
            "extra": "mean: 40.63518205600121 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "47f41f3bb5a830ec14ce00418527db21bad2f91b",
          "message": "remove coverall references",
          "timestamp": "2021-03-27T09:30:57+01:00",
          "tree_id": "a1550f1ba3e002577524acb23b06ab14a4bdd861",
          "url": "https://github.com/histolab/histolab/commit/47f41f3bb5a830ec14ce00418527db21bad2f91b"
        },
        "date": 1616834490984,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.536858563650867,
            "unit": "iter/sec",
            "range": "stddev: 0.00600857718199367",
            "extra": "mean: 117.13910831999783 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 366.07207230459176,
            "unit": "iter/sec",
            "range": "stddev: 0.0002875567206988334",
            "extra": "mean: 2.7317025134000006 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 538.1043392297167,
            "unit": "iter/sec",
            "range": "stddev: 0.000034946526936557444",
            "extra": "mean: 1.8583756477999713 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16746.102579038037,
            "unit": "iter/sec",
            "range": "stddev: 0.000001913217133937925",
            "extra": "mean: 59.715387223995094 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 17618.52095682145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020557013781980102",
            "extra": "mean: 56.75845336000384 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16883.152706620782,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030453040747679324",
            "extra": "mean: 59.2306435520095 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "75291a74d2d509ef4dd9b6eababc5a89754655f3",
          "message": "Update scipy requirement from <1.6.2,>=1.5.0 to >=1.5.0,<1.6.3\n\nUpdates the requirements on [scipy](https://github.com/scipy/scipy) to permit the latest version.\n- [Release notes](https://github.com/scipy/scipy/releases)\n- [Commits](https://github.com/scipy/scipy/compare/v1.5.0...v1.6.2)\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-03-27T09:41:55+01:00",
          "tree_id": "1587a412e385adeb2af16490a33afac523406c38",
          "url": "https://github.com/histolab/histolab/commit/75291a74d2d509ef4dd9b6eababc5a89754655f3"
        },
        "date": 1616835123113,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.931248488956448,
            "unit": "iter/sec",
            "range": "stddev: 0.003384444191528575",
            "extra": "mean: 126.08355435999896 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 278.1961283582934,
            "unit": "iter/sec",
            "range": "stddev: 0.00010798788952569111",
            "extra": "mean: 3.5945863297999723 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 604.1568828972631,
            "unit": "iter/sec",
            "range": "stddev: 0.000027985997756820453",
            "extra": "mean: 1.6551992177999408 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27532.54814915219,
            "unit": "iter/sec",
            "range": "stddev: 7.496508165052084e-7",
            "extra": "mean: 36.320648367985996 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 29092.005275967706,
            "unit": "iter/sec",
            "range": "stddev: 6.819364798288319e-7",
            "extra": "mean: 34.37370475200896 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25710.905075234587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011589889572504531",
            "extra": "mean: 38.89400225600093 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ae86a348b41006a9e17f2f7db3ee3cb96b5995a4",
          "message": "Update README.md",
          "timestamp": "2021-03-27T16:17:04+01:00",
          "tree_id": "f9594d82b28b155ee73caf0451dd23e2488fe4e8",
          "url": "https://github.com/histolab/histolab/commit/ae86a348b41006a9e17f2f7db3ee3cb96b5995a4"
        },
        "date": 1616858855187,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.493938715954747,
            "unit": "iter/sec",
            "range": "stddev: 0.0016410451324911574",
            "extra": "mean: 133.44117665000113 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 289.4406589292756,
            "unit": "iter/sec",
            "range": "stddev: 0.00007238049313086201",
            "extra": "mean: 3.4549396194000113 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 589.3335665843318,
            "unit": "iter/sec",
            "range": "stddev: 0.000008640180296070425",
            "extra": "mean: 1.6968319075999942 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27376.72654698691,
            "unit": "iter/sec",
            "range": "stddev: 1.528015825632584e-7",
            "extra": "mean: 36.52737657600119 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 28335.816381275745,
            "unit": "iter/sec",
            "range": "stddev: 1.9340451256905278e-7",
            "extra": "mean: 35.29102484800114 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24800.8111198495,
            "unit": "iter/sec",
            "range": "stddev: 1.6814022120240358e-7",
            "extra": "mean: 40.321261880005295 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "e1ff656cd5cd770189eac0b4199ad54269e86427",
          "message": "Update requirements.txt",
          "timestamp": "2021-03-31T12:29:47+02:00",
          "tree_id": "bcf8083874e3f8df379ce5f72c2b6167c27ed902",
          "url": "https://github.com/histolab/histolab/commit/e1ff656cd5cd770189eac0b4199ad54269e86427"
        },
        "date": 1617187192267,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.368459452329981,
            "unit": "iter/sec",
            "range": "stddev: 0.004114068435659094",
            "extra": "mean: 119.49630701999467 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 258.9899938201706,
            "unit": "iter/sec",
            "range": "stddev: 0.00016630841516726308",
            "extra": "mean: 3.861153032399966 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 518.7639614114921,
            "unit": "iter/sec",
            "range": "stddev: 0.00005285561806747304",
            "extra": "mean: 1.9276589631999967 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 19536.99732976539,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019000522763037053",
            "extra": "mean: 51.184938152008726 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19598.48264370561,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019265395335703656",
            "extra": "mean: 51.02435827199952 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 18241.95366432045,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028037320388445904",
            "extra": "mean: 54.818689839998115 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "0f0c18c2b43a5b993674323f6eda2b7b50f53a23",
          "message": "fix issue 238",
          "timestamp": "2021-04-03T18:50:40+02:00",
          "tree_id": "bdcf4cda1fb1ba2e34370d9bcd053cd8dbd2480b",
          "url": "https://github.com/histolab/histolab/commit/0f0c18c2b43a5b993674323f6eda2b7b50f53a23"
        },
        "date": 1617469225088,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.564230705894946,
            "unit": "iter/sec",
            "range": "stddev: 0.003010813172701874",
            "extra": "mean: 132.20115023999483 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 310.4450291917683,
            "unit": "iter/sec",
            "range": "stddev: 0.00002906231975380221",
            "extra": "mean: 3.2211821932000704 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 624.3236907485039,
            "unit": "iter/sec",
            "range": "stddev: 0.000023160735090460387",
            "extra": "mean: 1.601733227199975 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28354.17213196129,
            "unit": "iter/sec",
            "range": "stddev: 0.000001221704898978402",
            "extra": "mean: 35.268178359994636 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 29792.064133811487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012172990315188184",
            "extra": "mean: 33.56598574400505 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26233.500588024584,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014146434030793043",
            "extra": "mean: 38.119197879999774 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "4e30415c6ae078b1ad694eba1c4f1e16f37ace14",
          "message": "Remove Deprecated package",
          "timestamp": "2021-04-16T23:19:42+02:00",
          "tree_id": "adfab5be80b33e7d890296d02bccb8043427e0c3",
          "url": "https://github.com/histolab/histolab/commit/4e30415c6ae078b1ad694eba1c4f1e16f37ace14"
        },
        "date": 1618608647288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.294480175480322,
            "unit": "iter/sec",
            "range": "stddev: 0.0053544908221619305",
            "extra": "mean: 137.08996062000438 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 258.1777052592547,
            "unit": "iter/sec",
            "range": "stddev: 0.00019576336513325767",
            "extra": "mean: 3.873301139600062 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 528.3227741310367,
            "unit": "iter/sec",
            "range": "stddev: 0.00003126837476252969",
            "extra": "mean: 1.892782308399933 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16706.534588379865,
            "unit": "iter/sec",
            "range": "stddev: 0.000002676948250686397",
            "extra": "mean: 59.856817983996734 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 17498.698416365263,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026542972040461016",
            "extra": "mean: 57.14710752799601 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16863.074761179145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026978559608071343",
            "extra": "mean: 59.30116625599749 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "50be1c123f926a00359ab7c7272b4256ead52ecb",
          "message": "release: prepare v0.2.4 release",
          "timestamp": "2021-04-19T22:00:48+02:00",
          "tree_id": "07d5771e5cb3a14499bcd5dc010a25121fbc1ec3",
          "url": "https://github.com/histolab/histolab/commit/50be1c123f926a00359ab7c7272b4256ead52ecb"
        },
        "date": 1618863077195,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.855679226040706,
            "unit": "iter/sec",
            "range": "stddev: 0.006220268852732919",
            "extra": "mean: 145.86446754999656 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 278.3127767431719,
            "unit": "iter/sec",
            "range": "stddev: 0.0000944975882992126",
            "extra": "mean: 3.593079741800011 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 600.4580572673663,
            "unit": "iter/sec",
            "range": "stddev: 0.00001803809992071927",
            "extra": "mean: 1.6653952559999197 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 26517.728170476243,
            "unit": "iter/sec",
            "range": "stddev: 6.192623551824393e-7",
            "extra": "mean: 37.710621120000724 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 28027.879496758655,
            "unit": "iter/sec",
            "range": "stddev: 7.500057718864209e-7",
            "extra": "mean: 35.67876050400628 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24336.558797579863,
            "unit": "iter/sec",
            "range": "stddev: 8.147938677058876e-7",
            "extra": "mean: 41.09044373600773 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "21730a68caa6c4ce13c5e381c1c511dc2df51a78",
          "message": "Fix random choice of coordinates within true values of a binary mask",
          "timestamp": "2021-04-24T23:13:43+02:00",
          "tree_id": "5ba4781daac5e7ab124cf93742aad5daa38dcd16",
          "url": "https://github.com/histolab/histolab/commit/21730a68caa6c4ce13c5e381c1c511dc2df51a78"
        },
        "date": 1619299488295,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.412930832139085,
            "unit": "iter/sec",
            "range": "stddev: 0.0049265754797791945",
            "extra": "mean: 134.8994105899999 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 263.518408960159,
            "unit": "iter/sec",
            "range": "stddev: 0.00018611713309903314",
            "extra": "mean: 3.794801296600076 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 514.5538174891202,
            "unit": "iter/sec",
            "range": "stddev: 0.00003925166602298671",
            "extra": "mean: 1.9434313107999515 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15249.575178708788,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027792618596480967",
            "extra": "mean: 65.57559723999293 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 15689.750322829183,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024807851631687557",
            "extra": "mean: 63.73587720799878 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15023.544103879425,
            "unit": "iter/sec",
            "range": "stddev: 0.000004455772291671479",
            "extra": "mean: 66.56219019197852 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "805aba68234b4f5d8c0eed851cb545238f46946e",
          "message": "Update scipy requirement from <1.6.3,>=1.5.0 to >=1.5.0,<1.6.4\n\nUpdates the requirements on [scipy](https://github.com/scipy/scipy) to permit the latest version.\n- [Release notes](https://github.com/scipy/scipy/releases)\n- [Commits](https://github.com/scipy/scipy/compare/v1.5.0...v1.6.3)\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-04-26T11:08:04+02:00",
          "tree_id": "6208cbf27d11f11b8f118bf2a8a3aa436b0e9d2e",
          "url": "https://github.com/histolab/histolab/commit/805aba68234b4f5d8c0eed851cb545238f46946e"
        },
        "date": 1619428701459,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.845356056965885,
            "unit": "iter/sec",
            "range": "stddev: 0.004673664119233177",
            "extra": "mean: 127.46394079999732 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 214.41409212283642,
            "unit": "iter/sec",
            "range": "stddev: 0.00033133607254005805",
            "extra": "mean: 4.663872556599995 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 500.8300161200656,
            "unit": "iter/sec",
            "range": "stddev: 0.000044865363869511844",
            "extra": "mean: 1.9966854377998517 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17967.068668661912,
            "unit": "iter/sec",
            "range": "stddev: 0.000002238287544650595",
            "extra": "mean: 55.65738176000832 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 18372.347630838416,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025325081551007088",
            "extra": "mean: 54.429625439999654 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 17182.186644176312,
            "unit": "iter/sec",
            "range": "stddev: 0.000002963297389052848",
            "extra": "mean: 58.199810111999795 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicola.bussolaceradini@gmail.com",
            "name": "Nicole Bussola"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "a3694106d1437bfb0bc08baa3a5ccf0af6b2db9c",
          "message": "move local otsu filter",
          "timestamp": "2021-04-26T13:10:55+02:00",
          "tree_id": "51d1e3fcf17b1fea8e7a5602bd7a4149b1bfbc1e",
          "url": "https://github.com/histolab/histolab/commit/a3694106d1437bfb0bc08baa3a5ccf0af6b2db9c"
        },
        "date": 1619435988015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.944457486643865,
            "unit": "iter/sec",
            "range": "stddev: 0.001264202199662504",
            "extra": "mean: 125.87391923000268 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 235.2410400064009,
            "unit": "iter/sec",
            "range": "stddev: 0.00013738563086430653",
            "extra": "mean: 4.250958931200057 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 684.896989917403,
            "unit": "iter/sec",
            "range": "stddev: 0.000008555315359209592",
            "extra": "mean: 1.4600735800001075 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 30315.26744840456,
            "unit": "iter/sec",
            "range": "stddev: 8.311456463570997e-8",
            "extra": "mean: 32.986679127999196 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 31815.11917217715,
            "unit": "iter/sec",
            "range": "stddev: 9.304464947704424e-8",
            "extra": "mean: 31.431596864000312 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 27792.817206136795,
            "unit": "iter/sec",
            "range": "stddev: 8.277787558487125e-8",
            "extra": "mean: 35.9805194479959 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicole.bussolaceradini@gmail.com",
            "name": "Nicole Bussola",
            "username": "nicolebussola"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "b2536c81e3f389c590b0ab668edef012e906bbd1",
          "message": "fix flake8",
          "timestamp": "2021-04-26T16:59:58+02:00",
          "tree_id": "8ca9a5019ef24e8a6b227d6734c27cd5ae320712",
          "url": "https://github.com/histolab/histolab/commit/b2536c81e3f389c590b0ab668edef012e906bbd1"
        },
        "date": 1619449794559,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.410794906147077,
            "unit": "iter/sec",
            "range": "stddev: 0.0034047895662275137",
            "extra": "mean: 118.8948263699956 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 221.23722381702407,
            "unit": "iter/sec",
            "range": "stddev: 0.00020524672254489996",
            "extra": "mean: 4.520035022800039 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 512.7275889119882,
            "unit": "iter/sec",
            "range": "stddev: 0.000031869368354163573",
            "extra": "mean: 1.950353407200123 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17135.991210622316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029052614167301667",
            "extra": "mean: 58.35670593599025 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 18015.94109877918,
            "unit": "iter/sec",
            "range": "stddev: 0.000002383048508087805",
            "extra": "mean: 55.50639816799594 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16602.829718369638,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024188720526428096",
            "extra": "mean: 60.23069663200749 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "984d91ef9a5e295dd2310f5c28eb0b3620fef60a",
          "message": "address CR comments",
          "timestamp": "2021-04-26T18:22:05+02:00",
          "tree_id": "ce81f526a3a7d0f0628a4e56d744ad7e8169c5e0",
          "url": "https://github.com/histolab/histolab/commit/984d91ef9a5e295dd2310f5c28eb0b3620fef60a"
        },
        "date": 1619454731594,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.346256431969127,
            "unit": "iter/sec",
            "range": "stddev: 0.007125100773161135",
            "extra": "mean: 119.8141955199992 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 373.524251216056,
            "unit": "iter/sec",
            "range": "stddev: 0.00023103468586655146",
            "extra": "mean: 2.6772023415999686 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 541.3758796600821,
            "unit": "iter/sec",
            "range": "stddev: 0.00006285931893076066",
            "extra": "mean: 1.8471454631999449 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15465.038822716611,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038101718124321407",
            "extra": "mean: 64.66197799200472 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 15912.26759600647,
            "unit": "iter/sec",
            "range": "stddev: 0.000004366357303917348",
            "extra": "mean: 62.84459420799158 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15894.525089140627,
            "unit": "iter/sec",
            "range": "stddev: 0.00000518619696002671",
            "extra": "mean: 62.91474544799166 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicole.bussolaceradini@gmail.com",
            "name": "Nicole Bussola",
            "username": "nicolebussola"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "4f759629caa60f1dece5b46fee1e6ac39729792d",
          "message": "fix random tiler coordinates",
          "timestamp": "2021-04-27T13:06:58+02:00",
          "tree_id": "a6a5966b781fb53df774567a3e9fe785ea3e2844",
          "url": "https://github.com/histolab/histolab/commit/4f759629caa60f1dece5b46fee1e6ac39729792d"
        },
        "date": 1619522188900,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 9.302104834227228,
            "unit": "iter/sec",
            "range": "stddev: 0.005293941513342305",
            "extra": "mean: 107.5025510699993 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 454.53533282868887,
            "unit": "iter/sec",
            "range": "stddev: 0.00022049208728952872",
            "extra": "mean: 2.2000489902000484 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 573.3947616600152,
            "unit": "iter/sec",
            "range": "stddev: 0.00006412796311680666",
            "extra": "mean: 1.7439991902000203 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17504.149502172088,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029124803404423328",
            "extra": "mean: 57.12931096000466 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 17695.288697697077,
            "unit": "iter/sec",
            "range": "stddev: 0.000002624215553309469",
            "extra": "mean: 56.51221729601639 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 17767.435362814143,
            "unit": "iter/sec",
            "range": "stddev: 0.000004559286438421917",
            "extra": "mean: 56.28274309599692 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicole.bussolaceradini@gmail.com",
            "name": "Nicole Bussola",
            "username": "nicolebussola"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "b6dcc609b56dc72561b203ddf235502ef4f0a481",
          "message": "address comment",
          "timestamp": "2021-04-27T16:10:13+02:00",
          "tree_id": "d95311c337211bfff7bc9e8b7188715fa6b07abe",
          "url": "https://github.com/histolab/histolab/commit/b6dcc609b56dc72561b203ddf235502ef4f0a481"
        },
        "date": 1619533243985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.699939009557602,
            "unit": "iter/sec",
            "range": "stddev: 0.006494050685196185",
            "extra": "mean: 149.25509001999558 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 272.0106933009142,
            "unit": "iter/sec",
            "range": "stddev: 0.00022573557525414978",
            "extra": "mean: 3.676326058599989 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 591.4602179438444,
            "unit": "iter/sec",
            "range": "stddev: 0.000010091548538066905",
            "extra": "mean: 1.6907307874000481 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 26100.47252115357,
            "unit": "iter/sec",
            "range": "stddev: 2.3292015648615856e-7",
            "extra": "mean: 38.31348260800769 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 27098.96863656353,
            "unit": "iter/sec",
            "range": "stddev: 1.9501043645950478e-7",
            "extra": "mean: 36.901773399993544 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23700.674251077544,
            "unit": "iter/sec",
            "range": "stddev: 2.1943356724515388e-7",
            "extra": "mean: 42.19289246399967 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicole.bussolaceradini@gmail.com",
            "name": "Nicole Bussola",
            "username": "nicolebussola"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "6171f0eb25645b613c29b41df05271267f9ff53e",
          "message": "fix typo",
          "timestamp": "2021-04-28T08:27:46+02:00",
          "tree_id": "b7fd5d3c413260d68ba7cd27a10411c3a8b89f70",
          "url": "https://github.com/histolab/histolab/commit/6171f0eb25645b613c29b41df05271267f9ff53e"
        },
        "date": 1619591819150,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.545871220416961,
            "unit": "iter/sec",
            "range": "stddev: 0.0033110666889124975",
            "extra": "mean: 132.5228023099953 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 319.1009992361775,
            "unit": "iter/sec",
            "range": "stddev: 0.00007745256851875374",
            "extra": "mean: 3.1338040382000374 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 609.4509133067007,
            "unit": "iter/sec",
            "range": "stddev: 0.00001949680542994106",
            "extra": "mean: 1.6408212346000028 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27302.92567069452,
            "unit": "iter/sec",
            "range": "stddev: 6.829646088367471e-7",
            "extra": "mean: 36.626111503989705 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 29025.992552707412,
            "unit": "iter/sec",
            "range": "stddev: 9.871315743397502e-7",
            "extra": "mean: 34.45187957600865 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25962.806788385118,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012377908954817544",
            "extra": "mean: 38.5166368240034 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "0d217ec8607bf1b78bb37d6d0d12a92931adf09e",
          "message": "release: prepare v0.2.5 release",
          "timestamp": "2021-04-28T15:58:08+02:00",
          "tree_id": "61eb0911d6066ab3587d0f104ee40fd9841df244",
          "url": "https://github.com/histolab/histolab/commit/0d217ec8607bf1b78bb37d6d0d12a92931adf09e"
        },
        "date": 1619618914840,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.459981736589391,
            "unit": "iter/sec",
            "range": "stddev: 0.0035481746178902453",
            "extra": "mean: 118.20356487000481 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 262.5800499124378,
            "unit": "iter/sec",
            "range": "stddev: 0.00010459701746341572",
            "extra": "mean: 3.8083624416000705 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 515.2430254573992,
            "unit": "iter/sec",
            "range": "stddev: 0.000033884890797186594",
            "extra": "mean: 1.9408317057999283 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 18278.535961464873,
            "unit": "iter/sec",
            "range": "stddev: 0.000002865587364658936",
            "extra": "mean: 54.70897680800135 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19337.29875470582,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025838978961500247",
            "extra": "mean: 51.71353107199866 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 17672.32123041984,
            "unit": "iter/sec",
            "range": "stddev: 0.000003078674869683912",
            "extra": "mean: 56.585662232003415 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicole.bussolaceradini@gmail.com",
            "name": "Nicole Bussola",
            "username": "nicolebussola"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "22281eee641a4fd3c50b504f37eca93e4b04713e",
          "message": "adress comments",
          "timestamp": "2021-04-29T18:42:12+02:00",
          "tree_id": "94292bbea728b80ffe383eaa0569dc16df23a672",
          "url": "https://github.com/histolab/histolab/commit/22281eee641a4fd3c50b504f37eca93e4b04713e"
        },
        "date": 1619715181607,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.897507198706549,
            "unit": "iter/sec",
            "range": "stddev: 0.001545891521315689",
            "extra": "mean: 144.97991392999552 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 236.5413700586117,
            "unit": "iter/sec",
            "range": "stddev: 0.00009464247196262203",
            "extra": "mean: 4.227590293199933 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 563.3681964742776,
            "unit": "iter/sec",
            "range": "stddev: 0.000024950790077562327",
            "extra": "mean: 1.775038076800024 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 26494.398448832533,
            "unit": "iter/sec",
            "range": "stddev: 1.1769616390524082e-7",
            "extra": "mean: 37.74382731999958 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 27492.71481107686,
            "unit": "iter/sec",
            "range": "stddev: 1.4061532956949031e-7",
            "extra": "mean: 36.37327222399654 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24033.35966292255,
            "unit": "iter/sec",
            "range": "stddev: 1.436078520716125e-7",
            "extra": "mean: 41.60883097600163 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "acc0f8206d64a14804099bcac4649c174f6b7fcd",
          "message": "Update numpy requirement from <1.20.3,>=1.18.4 to >=1.18.4,<1.20.4\n\nUpdates the requirements on [numpy](https://github.com/numpy/numpy) to permit the latest version.\n- [Release notes](https://github.com/numpy/numpy/releases)\n- [Changelog](https://github.com/numpy/numpy/blob/main/doc/HOWTO_RELEASE.rst.txt)\n- [Commits](https://github.com/numpy/numpy/compare/v1.18.4...v1.20.3)\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-05-18T20:06:11+02:00",
          "tree_id": "b0b7d20cd87dd86722d11246ec436eec8d6adba5",
          "url": "https://github.com/histolab/histolab/commit/acc0f8206d64a14804099bcac4649c174f6b7fcd"
        },
        "date": 1621361867249,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.36363645721492,
            "unit": "iter/sec",
            "range": "stddev: 0.00624374112077349",
            "extra": "mean: 135.8024674099977 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 230.96949107912118,
            "unit": "iter/sec",
            "range": "stddev: 0.0002813428098290394",
            "extra": "mean: 4.329576150200023 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 530.3461240273659,
            "unit": "iter/sec",
            "range": "stddev: 0.000031748351097860056",
            "extra": "mean: 1.8855610603998685 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17315.381817819427,
            "unit": "iter/sec",
            "range": "stddev: 0.000003036048963482304",
            "extra": "mean: 57.752119503994436 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 18557.047025195985,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023933017897000745",
            "extra": "mean: 53.8878841359965 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16444.93289403423,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032802763620188526",
            "extra": "mean: 60.80900459999884 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "244bf0dacbc7487b3040371542596de3af89fcb3",
          "message": "Remove 'array' suffix from method name",
          "timestamp": "2021-05-20T11:25:24+02:00",
          "tree_id": "f205b8e5ddf093683cc8809c927df9e02c9c3578",
          "url": "https://github.com/histolab/histolab/commit/244bf0dacbc7487b3040371542596de3af89fcb3"
        },
        "date": 1621503261815,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.765604745640019,
            "unit": "iter/sec",
            "range": "stddev: 0.0016222460943827169",
            "extra": "mean: 114.08226004000426 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 292.67856081325283,
            "unit": "iter/sec",
            "range": "stddev: 0.00008180081654900302",
            "extra": "mean: 3.4167176346000363 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 666.6376257095421,
            "unit": "iter/sec",
            "range": "stddev: 0.000009809683706809765",
            "extra": "mean: 1.5000653450000527 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29696.251426645056,
            "unit": "iter/sec",
            "range": "stddev: 4.770588062701353e-7",
            "extra": "mean: 33.67428385600033 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 31051.324450497836,
            "unit": "iter/sec",
            "range": "stddev: 8.947733043017302e-8",
            "extra": "mean: 32.20474545600155 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 27280.639209667064,
            "unit": "iter/sec",
            "range": "stddev: 9.625218575861408e-8",
            "extra": "mean: 36.65603259199452 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "f3634c2427cc8f9bc759fd1e9e6f558f280193e2",
          "message": "delete artifact depends on build",
          "timestamp": "2021-06-03T16:54:38+02:00",
          "tree_id": "5e5af3d34b6b32186cf70fad81bc0ec9935d348b",
          "url": "https://github.com/histolab/histolab/commit/f3634c2427cc8f9bc759fd1e9e6f558f280193e2"
        },
        "date": 1622732656717,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.691389789390517,
            "unit": "iter/sec",
            "range": "stddev: 0.001680783175272894",
            "extra": "mean: 115.05639767999924 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 278.94133089626763,
            "unit": "iter/sec",
            "range": "stddev: 0.0001899217551318885",
            "extra": "mean: 3.584983253599944 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 631.5162542902608,
            "unit": "iter/sec",
            "range": "stddev: 0.00004468783435854109",
            "extra": "mean: 1.5834905170000184 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 30155.535426931157,
            "unit": "iter/sec",
            "range": "stddev: 3.1606883606197836e-7",
            "extra": "mean: 33.16140754400021 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 31090.6996649568,
            "unit": "iter/sec",
            "range": "stddev: 8.858520935284825e-8",
            "extra": "mean: 32.163959343994065 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 27509.653908933473,
            "unit": "iter/sec",
            "range": "stddev: 1.047054925045112e-7",
            "extra": "mean: 36.3508753439919 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "44efd1e9787f5ae14ca1c7c6377dc2a0a81683b3",
          "message": "Update scipy requirement from <1.6.4,>=1.5.0 to >=1.5.0,<1.7.1\n\nUpdates the requirements on [scipy](https://github.com/scipy/scipy) to permit the latest version.\n- [Release notes](https://github.com/scipy/scipy/releases)\n- [Commits](https://github.com/scipy/scipy/compare/v1.5.0...v1.7.0)\n\n---\nupdated-dependencies:\n- dependency-name: scipy\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-06-21T10:37:32+02:00",
          "tree_id": "b0cf30b004927aa1d78b97a5a75c9b06dd55a75e",
          "url": "https://github.com/histolab/histolab/commit/44efd1e9787f5ae14ca1c7c6377dc2a0a81683b3"
        },
        "date": 1624265291603,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.449804552488944,
            "unit": "iter/sec",
            "range": "stddev: 0.0015548681749126471",
            "extra": "mean: 134.23170943000173 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 259.10629064966116,
            "unit": "iter/sec",
            "range": "stddev: 0.00006152367447875975",
            "extra": "mean: 3.859419998999965 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 581.8744078640088,
            "unit": "iter/sec",
            "range": "stddev: 0.00001470127474626863",
            "extra": "mean: 1.7185839186000296 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 26532.801604330947,
            "unit": "iter/sec",
            "range": "stddev: 7.31814207014313e-7",
            "extra": "mean: 37.68919750399709 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 27197.120807838637,
            "unit": "iter/sec",
            "range": "stddev: 7.681994609860827e-7",
            "extra": "mean: 36.76859793599124 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24260.09212472019,
            "unit": "iter/sec",
            "range": "stddev: 3.610141669232512e-7",
            "extra": "mean: 41.219958887997564 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "dec10c6645e65ea81b13efbfb0e913f3058ea662",
          "message": "Put type hints in description and not in signature",
          "timestamp": "2021-06-24T14:18:52+02:00",
          "tree_id": "7f437482e32d48367700ac07dbee94b188c26750",
          "url": "https://github.com/histolab/histolab/commit/dec10c6645e65ea81b13efbfb0e913f3058ea662"
        },
        "date": 1624537713604,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.709712385215707,
            "unit": "iter/sec",
            "range": "stddev: 0.0021922687447684607",
            "extra": "mean: 129.70652471000335 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 295.6538195396826,
            "unit": "iter/sec",
            "range": "stddev: 0.00005776399390459745",
            "extra": "mean: 3.3823341148000283 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 610.6677882266201,
            "unit": "iter/sec",
            "range": "stddev: 0.00002021665374152289",
            "extra": "mean: 1.637551577599993 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27608.261060939116,
            "unit": "iter/sec",
            "range": "stddev: 9.585117900234512e-7",
            "extra": "mean: 36.22104259999287 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 28328.728114825677,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010177082385603191",
            "extra": "mean: 35.299855183990985 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24956.93310333006,
            "unit": "iter/sec",
            "range": "stddev: 7.816832927481023e-7",
            "extra": "mean: 40.069025943999804 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "8dae65b223e420f03f73017d4143ef251ca8add7",
          "message": "Update all lazyproperty docstrings according to CR",
          "timestamp": "2021-06-29T20:16:05+02:00",
          "tree_id": "e6ee49be33746b28ab0fd035f86f6452c7de5d55",
          "url": "https://github.com/histolab/histolab/commit/8dae65b223e420f03f73017d4143ef251ca8add7"
        },
        "date": 1624991111586,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.701753257631943,
            "unit": "iter/sec",
            "range": "stddev: 0.008393461918185515",
            "extra": "mean: 114.91936973999373 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 298.01129780557926,
            "unit": "iter/sec",
            "range": "stddev: 0.0001236530309929793",
            "extra": "mean: 3.3555774810000454 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 671.0720421170181,
            "unit": "iter/sec",
            "range": "stddev: 0.00005709869663277048",
            "extra": "mean: 1.4901529750000009 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 33220.62146976584,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019812485972826407",
            "extra": "mean: 30.10178484800781 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 33951.59437478957,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023180349140625135",
            "extra": "mean: 29.453697783999814 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 30484.19668675413,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020167105039249983",
            "extra": "mean: 32.80388229598702 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "50dfce7664993495de90bd2dbe579dc8bbf70f86",
          "message": "Update numpy requirement from <1.20.4,>=1.18.4 to >=1.18.4,<1.21.1\n\nUpdates the requirements on [numpy](https://github.com/numpy/numpy) to permit the latest version.\n- [Release notes](https://github.com/numpy/numpy/releases)\n- [Changelog](https://github.com/numpy/numpy/blob/main/doc/HOWTO_RELEASE.rst.txt)\n- [Commits](https://github.com/numpy/numpy/compare/v1.18.4...v1.21.0)\n\n---\nupdated-dependencies:\n- dependency-name: numpy\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-06-29T20:40:43+02:00",
          "tree_id": "658b0f2f86f4d2e5327a0d466a77dcb92db6b6da",
          "url": "https://github.com/histolab/histolab/commit/50dfce7664993495de90bd2dbe579dc8bbf70f86"
        },
        "date": 1624992694492,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.982231744986079,
            "unit": "iter/sec",
            "range": "stddev: 0.003424461709067292",
            "extra": "mean: 125.27824698000472 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 205.11527764842108,
            "unit": "iter/sec",
            "range": "stddev: 0.00011036874414123818",
            "extra": "mean: 4.875307249000025 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 475.4905843910747,
            "unit": "iter/sec",
            "range": "stddev: 0.00005610659847105713",
            "extra": "mean: 2.1030910660000246 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16327.158959157938,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024965154129928414",
            "extra": "mean: 61.247642808003555 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 16794.10366167817,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034090617022685805",
            "extra": "mean: 59.544708080006785 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15009.088655176434,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028522370747029573",
            "extra": "mean: 66.62629710399597 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "22cc4fa4674b4aac93595b76deb931285d32cd46",
          "message": "Add DAB filter",
          "timestamp": "2021-07-01T12:44:37+02:00",
          "tree_id": "3ad8a1dee0de297205e757b876b9f61a069d35c3",
          "url": "https://github.com/histolab/histolab/commit/22cc4fa4674b4aac93595b76deb931285d32cd46"
        },
        "date": 1625136811668,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.064662820696345,
            "unit": "iter/sec",
            "range": "stddev: 0.001254985607123801",
            "extra": "mean: 123.99774450999985 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 278.788276490678,
            "unit": "iter/sec",
            "range": "stddev: 0.000050963778742683335",
            "extra": "mean: 3.58695140479997 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 578.6976691060017,
            "unit": "iter/sec",
            "range": "stddev: 0.00009784133496988836",
            "extra": "mean: 1.7280180194000876 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29515.933219416725,
            "unit": "iter/sec",
            "range": "stddev: 2.2437719108403726e-7",
            "extra": "mean: 33.88000618398746 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 30281.21272230328,
            "unit": "iter/sec",
            "range": "stddev: 7.682023645835224e-8",
            "extra": "mean: 33.02377646399418 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 27174.162614532772,
            "unit": "iter/sec",
            "range": "stddev: 1.02164339669434e-7",
            "extra": "mean: 36.79966202399919 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "517812044e8e0dbb97f39c6394445af536c4514b",
          "message": "Docstring improvements",
          "timestamp": "2021-07-06T15:48:11+02:00",
          "tree_id": "4af85c0af8c4b966a7fe5ab8e310337495140deb",
          "url": "https://github.com/histolab/histolab/commit/517812044e8e0dbb97f39c6394445af536c4514b"
        },
        "date": 1625580019553,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.283867666503928,
            "unit": "iter/sec",
            "range": "stddev: 0.005179894405882186",
            "extra": "mean: 137.28969906999623 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 209.09400337802415,
            "unit": "iter/sec",
            "range": "stddev: 0.0002099968813935941",
            "extra": "mean: 4.782537919999959 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 456.3867469173675,
            "unit": "iter/sec",
            "range": "stddev: 0.00014261754205849338",
            "extra": "mean: 2.1911240998000725 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 14706.49410157112,
            "unit": "iter/sec",
            "range": "stddev: 0.000006669023715544939",
            "extra": "mean: 67.9971713920022 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 15340.463796573182,
            "unit": "iter/sec",
            "range": "stddev: 0.000006517581121010867",
            "extra": "mean: 65.18707734399686 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14436.848408236316,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035475134403882045",
            "extra": "mean: 69.26719542400224 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "f04b8a19fe5055f3a019467ec37e64549dae18c5",
          "message": "Use correct Windows path for dll",
          "timestamp": "2021-07-13T14:38:05+02:00",
          "tree_id": "af90575788d78df38275c23ab3f38f16dad87002",
          "url": "https://github.com/histolab/histolab/commit/f04b8a19fe5055f3a019467ec37e64549dae18c5"
        },
        "date": 1626180429903,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.6506868880714585,
            "unit": "iter/sec",
            "range": "stddev: 0.00101956255702947",
            "extra": "mean: 130.7072181400008 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 276.737905303154,
            "unit": "iter/sec",
            "range": "stddev: 0.00008355005802695227",
            "extra": "mean: 3.613527387599993 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 590.5399091834452,
            "unit": "iter/sec",
            "range": "stddev: 0.0000979866112903312",
            "extra": "mean: 1.6933656548000728 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29399.950491439136,
            "unit": "iter/sec",
            "range": "stddev: 1.0897786249276867e-7",
            "extra": "mean: 34.013662719982676 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 30135.8468162989,
            "unit": "iter/sec",
            "range": "stddev: 8.408860502451426e-8",
            "extra": "mean: 33.18307283998911 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 27086.2857118396,
            "unit": "iter/sec",
            "range": "stddev: 9.289214843196858e-8",
            "extra": "mean: 36.91905234400201 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mtageld@emory.edu",
            "name": "kheffah",
            "username": "kheffah"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "b96805a3a39bc5574c39d4242df38ab5f6d9464b",
          "message": "formatting pep8",
          "timestamp": "2021-07-13T21:55:03+02:00",
          "tree_id": "91180d1d3e8ef9000244bd8788512722fbeb1e92",
          "url": "https://github.com/histolab/histolab/commit/b96805a3a39bc5574c39d4242df38ab5f6d9464b"
        },
        "date": 1626206731209,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.324244893623435,
            "unit": "iter/sec",
            "range": "stddev: 0.005071628345565893",
            "extra": "mean: 120.13101642000265 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 212.36768013536891,
            "unit": "iter/sec",
            "range": "stddev: 0.0001764719125887393",
            "extra": "mean: 4.708814445600069 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 442.3586641260365,
            "unit": "iter/sec",
            "range": "stddev: 0.00011281758452444094",
            "extra": "mean: 2.2606090511998675 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17756.983546323267,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026606070313765123",
            "extra": "mean: 56.315871296003934 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 18414.878309357653,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031642511760375166",
            "extra": "mean: 54.30391573599718 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16439.41726111903,
            "unit": "iter/sec",
            "range": "stddev: 0.000003877934200738622",
            "extra": "mean: 60.829406791997826 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "c551867845828592f98b7ee75bd3d8a5c06185bc",
          "message": "pin black and flake8 version in ci workflow to be compliant with pre-commit",
          "timestamp": "2021-07-13T22:17:51+02:00",
          "tree_id": "f7d71b3c0004ae792f2bb926e398f31ba3455b1d",
          "url": "https://github.com/histolab/histolab/commit/c551867845828592f98b7ee75bd3d8a5c06185bc"
        },
        "date": 1626208066641,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 9.32013631941978,
            "unit": "iter/sec",
            "range": "stddev: 0.0070034034533320855",
            "extra": "mean: 107.29456798999422 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 268.7530843232731,
            "unit": "iter/sec",
            "range": "stddev: 0.00030290094669796773",
            "extra": "mean: 3.7208875295999864 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 489.3086780470187,
            "unit": "iter/sec",
            "range": "stddev: 0.00010411701002157991",
            "extra": "mean: 2.0436997029999704 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16793.33031127958,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023976429578247755",
            "extra": "mean: 59.547450175998165 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 17098.319833299716,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019315602464712996",
            "extra": "mean: 58.485278656003175 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 18026.301560252203,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028297384051205464",
            "extra": "mean: 55.47449634399709 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "a97bec98605d412d361c536015b9c6c1d0e03c40",
          "message": "tweak in contributing md",
          "timestamp": "2021-07-13T22:36:16+02:00",
          "tree_id": "c117e75ccd58e6f1f9bb2306fd6c39c5683c3d1e",
          "url": "https://github.com/histolab/histolab/commit/a97bec98605d412d361c536015b9c6c1d0e03c40"
        },
        "date": 1626209227534,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.033763001529143,
            "unit": "iter/sec",
            "range": "stddev: 0.004590948442988046",
            "extra": "mean: 124.47467019000442 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 252.84938982508402,
            "unit": "iter/sec",
            "range": "stddev: 0.00022488572496919316",
            "extra": "mean: 3.954923524600076 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 458.67476758518455,
            "unit": "iter/sec",
            "range": "stddev: 0.00012585840884688556",
            "extra": "mean: 2.180194051800072 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16372.548275304027,
            "unit": "iter/sec",
            "range": "stddev: 0.000001662598784708507",
            "extra": "mean: 61.077847088005 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 16872.65593092911,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035329632449855135",
            "extra": "mean: 59.267491975991106 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16002.286236647022,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026684558815536227",
            "extra": "mean: 62.49107066400848 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "21d676230b47345069b64366ec288f11d774f804",
          "message": "release: prepare v0.2.6 release",
          "timestamp": "2021-07-13T22:41:34+02:00",
          "tree_id": "c5fa1d688f44127179a801df2e99bb36aa696a9b",
          "url": "https://github.com/histolab/histolab/commit/21d676230b47345069b64366ec288f11d774f804"
        },
        "date": 1626209633850,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.739220753568176,
            "unit": "iter/sec",
            "range": "stddev: 0.005967877366799406",
            "extra": "mean: 129.21197519000202 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 235.43683540162633,
            "unit": "iter/sec",
            "range": "stddev: 0.00029741826488124",
            "extra": "mean: 4.2474237231999945 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 457.29461017631263,
            "unit": "iter/sec",
            "range": "stddev: 0.00012569143862240775",
            "extra": "mean: 2.1867740790000654 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16590.162261526635,
            "unit": "iter/sec",
            "range": "stddev: 0.000002125207239980759",
            "extra": "mean: 60.27668592000737 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 17595.5849295626,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028530196513687633",
            "extra": "mean: 56.83243859201775 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16013.362373545287,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032558668224940296",
            "extra": "mean: 62.447846784010835 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "dd2110f3b163ac2f37427b337cd8a64638471994",
          "message": "requirements for docs",
          "timestamp": "2021-07-13T22:53:35+02:00",
          "tree_id": "5dea0763c7b5e06022924ab8fb79673d368744f1",
          "url": "https://github.com/histolab/histolab/commit/dd2110f3b163ac2f37427b337cd8a64638471994"
        },
        "date": 1626210179401,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.562710312871187,
            "unit": "iter/sec",
            "range": "stddev: 0.0013594821004055823",
            "extra": "mean: 132.2277277100079 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 209.00928093919953,
            "unit": "iter/sec",
            "range": "stddev: 0.00026746878418228067",
            "extra": "mean: 4.7844765337999435 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 579.8024464519735,
            "unit": "iter/sec",
            "range": "stddev: 0.00009944600393856072",
            "extra": "mean: 1.7247253889999457 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29143.794054616603,
            "unit": "iter/sec",
            "range": "stddev: 9.803155937305952e-8",
            "extra": "mean: 34.312622376000945 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 29867.20932407294,
            "unit": "iter/sec",
            "range": "stddev: 5.640985360912077e-7",
            "extra": "mean: 33.481534519999514 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26755.57501721012,
            "unit": "iter/sec",
            "range": "stddev: 1.208289884977093e-7",
            "extra": "mean: 37.375388096004826 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "dc87eeedf6abf122e25153543d54a4dc6254432f",
          "message": "Update numpy requirement from <1.21.1,>=1.18.4 to >=1.18.4,<1.21.2\n\nUpdates the requirements on [numpy](https://github.com/numpy/numpy) to permit the latest version.\n- [Release notes](https://github.com/numpy/numpy/releases)\n- [Changelog](https://github.com/numpy/numpy/blob/main/doc/HOWTO_RELEASE.rst.txt)\n- [Commits](https://github.com/numpy/numpy/compare/v1.18.4...v1.21.1)\n\n---\nupdated-dependencies:\n- dependency-name: numpy\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-07-19T11:13:52+02:00",
          "tree_id": "dbfc5754828ddbe8432804ab9bc1a3b28e8f497b",
          "url": "https://github.com/histolab/histolab/commit/dc87eeedf6abf122e25153543d54a4dc6254432f"
        },
        "date": 1626686663708,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.032844813933253,
            "unit": "iter/sec",
            "range": "stddev: 0.001591404288548698",
            "extra": "mean: 142.18997097999818 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 168.17138567847033,
            "unit": "iter/sec",
            "range": "stddev: 0.00006308456214417532",
            "extra": "mean: 5.946314802399956 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 513.3776524163153,
            "unit": "iter/sec",
            "range": "stddev: 0.00011177815736499572",
            "extra": "mean: 1.9478837757999372 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25283.6118414807,
            "unit": "iter/sec",
            "range": "stddev: 2.498789204966826e-7",
            "extra": "mean: 39.5513111919945 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 26759.537784734053,
            "unit": "iter/sec",
            "range": "stddev: 2.7058721387872e-7",
            "extra": "mean: 37.36985324800662 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 22922.705920594795,
            "unit": "iter/sec",
            "range": "stddev: 2.9144601137364975e-7",
            "extra": "mean: 43.62486712799273 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "cd32904484c95d94274df5b7d276328bcb008ad4",
          "message": "Link automatically issues",
          "timestamp": "2021-07-20T14:21:54+02:00",
          "tree_id": "b3f9c29e78cf7feef0d26963a8a2e1eb67c8a182",
          "url": "https://github.com/histolab/histolab/commit/cd32904484c95d94274df5b7d276328bcb008ad4"
        },
        "date": 1626784458483,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.9731836436123125,
            "unit": "iter/sec",
            "range": "stddev: 0.005069385113434302",
            "extra": "mean: 143.40652004999697 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 185.95086733744088,
            "unit": "iter/sec",
            "range": "stddev: 0.00010473715430929216",
            "extra": "mean: 5.3777646446000285 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 444.31445833417905,
            "unit": "iter/sec",
            "range": "stddev: 0.00013612671518728256",
            "extra": "mean: 2.2506582471999534 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15471.771531655226,
            "unit": "iter/sec",
            "range": "stddev: 0.000004014245295790794",
            "extra": "mean: 64.6338396320034 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 16466.807723741666,
            "unit": "iter/sec",
            "range": "stddev: 0.000004734367642925164",
            "extra": "mean: 60.72822472799089 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14981.653137372816,
            "unit": "iter/sec",
            "range": "stddev: 0.000003910255885759229",
            "extra": "mean: 66.74830813599783 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "5951a6ba7a81d74b86c6c456520de13a7d9ee430",
          "message": "Add RGB to OD filter",
          "timestamp": "2021-07-21T16:11:25+02:00",
          "tree_id": "02060d0c0bd5376655cfed5b77628efa86b491f6",
          "url": "https://github.com/histolab/histolab/commit/5951a6ba7a81d74b86c6c456520de13a7d9ee430"
        },
        "date": 1626877266898,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 9.36854406660547,
            "unit": "iter/sec",
            "range": "stddev: 0.005722458954298992",
            "extra": "mean: 106.74017145999642 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 308.5538918577334,
            "unit": "iter/sec",
            "range": "stddev: 0.00021960416886256088",
            "extra": "mean: 3.240924928800041 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 489.84504490689693,
            "unit": "iter/sec",
            "range": "stddev: 0.00011182274122327354",
            "extra": "mean: 2.041461908000042 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16094.48782194119,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017844553090581958",
            "extra": "mean: 62.13307382399125 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 17111.262691530093,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016528199222089371",
            "extra": "mean: 58.44104073599374 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 17164.10955970643,
            "unit": "iter/sec",
            "range": "stddev: 0.000003145408596971684",
            "extra": "mean: 58.261105624002084 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "0b7aa0943a4ea00a75278bd4797f44f1a4bc2fb1",
          "message": "Include histolab version",
          "timestamp": "2021-07-21T22:41:46+02:00",
          "tree_id": "c91d11f3532e8c250f71dc001cebe9ba66f0c499",
          "url": "https://github.com/histolab/histolab/commit/0b7aa0943a4ea00a75278bd4797f44f1a4bc2fb1"
        },
        "date": 1626900649020,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.327043659118987,
            "unit": "iter/sec",
            "range": "stddev: 0.0013162060798967133",
            "extra": "mean: 120.09063972000376 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 197.43149760531404,
            "unit": "iter/sec",
            "range": "stddev: 0.00004106077277104057",
            "extra": "mean: 5.065047938800035 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 595.9809314050889,
            "unit": "iter/sec",
            "range": "stddev: 0.0000963299503696485",
            "extra": "mean: 1.6779060324000512 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29407.727191005066,
            "unit": "iter/sec",
            "range": "stddev: 1.0142742816168292e-7",
            "extra": "mean: 34.00466800800132 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 30407.952326998602,
            "unit": "iter/sec",
            "range": "stddev: 8.892977854730813e-8",
            "extra": "mean: 32.88613416800581 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26861.29540723744,
            "unit": "iter/sec",
            "range": "stddev: 1.048919190265331e-7",
            "extra": "mean: 37.22828645600475 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "d2a0bf09bde4b3e60e34dfa9ffbc8433d098f8c6",
          "message": "Update scipy requirement from <1.7.1,>=1.5.0 to >=1.5.0,<1.7.2\n\nUpdates the requirements on [scipy](https://github.com/scipy/scipy) to permit the latest version.\n- [Release notes](https://github.com/scipy/scipy/releases)\n- [Commits](https://github.com/scipy/scipy/compare/v1.5.0...v1.7.1)\n\n---\nupdated-dependencies:\n- dependency-name: scipy\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-08-02T11:06:10+02:00",
          "tree_id": "8f5eada24d1714e1d7eadb6aa0492171795cc466",
          "url": "https://github.com/histolab/histolab/commit/d2a0bf09bde4b3e60e34dfa9ffbc8433d098f8c6"
        },
        "date": 1627895836632,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.834752821352755,
            "unit": "iter/sec",
            "range": "stddev: 0.005762337200521884",
            "extra": "mean: 127.63644531000523 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 211.76580054711124,
            "unit": "iter/sec",
            "range": "stddev: 0.0001433415762459476",
            "extra": "mean: 4.722197812000013 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 435.1679885849175,
            "unit": "iter/sec",
            "range": "stddev: 0.00009568652702667979",
            "extra": "mean: 2.2979631457998724 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15828.053343977592,
            "unit": "iter/sec",
            "range": "stddev: 0.000005371180829395956",
            "extra": "mean: 63.1789632159971 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 16282.450912131755,
            "unit": "iter/sec",
            "range": "stddev: 0.000004520519630597698",
            "extra": "mean: 61.415815431994815 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14892.944076690332,
            "unit": "iter/sec",
            "range": "stddev: 0.00000419394329446203",
            "extra": "mean: 67.14589102400168 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mtageld@emory.edu",
            "name": "kheffah",
            "username": "kheffah"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "ffd63f39c7f358b108b3a05dd15f090b1888ad97",
          "message": "fix test case",
          "timestamp": "2021-08-10T12:52:25+02:00",
          "tree_id": "c57a5e5c535e1de4c4320d332b2e8a788e3a2fca",
          "url": "https://github.com/histolab/histolab/commit/ffd63f39c7f358b108b3a05dd15f090b1888ad97"
        },
        "date": 1628593298509,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.844481594783074,
            "unit": "iter/sec",
            "range": "stddev: 0.001044764451199392",
            "extra": "mean: 127.47814982000136 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 166.50105843685728,
            "unit": "iter/sec",
            "range": "stddev: 0.00010563759017531539",
            "extra": "mean: 6.005967826199935 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 585.7701911510003,
            "unit": "iter/sec",
            "range": "stddev: 0.00009879769014822372",
            "extra": "mean: 1.7071541282001135 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29849.382435222444,
            "unit": "iter/sec",
            "range": "stddev: 1.058294107059382e-7",
            "extra": "mean: 33.50153063200378 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 30639.806093889074,
            "unit": "iter/sec",
            "range": "stddev: 8.091162968189275e-8",
            "extra": "mean: 32.63728226398416 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26922.508041366356,
            "unit": "iter/sec",
            "range": "stddev: 2.25327993967735e-7",
            "extra": "mean: 37.14364198400472 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "86db1a16fff5550940a66c66714a1ba8c78d9f20",
          "message": "address Alessias's comment",
          "timestamp": "2021-08-12T15:50:46+02:00",
          "tree_id": "b2f134b6cd84bd929d973ad23c93178391771d82",
          "url": "https://github.com/histolab/histolab/commit/86db1a16fff5550940a66c66714a1ba8c78d9f20"
        },
        "date": 1628776900853,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.92851134567859,
            "unit": "iter/sec",
            "range": "stddev: 0.0031534559772878365",
            "extra": "mean: 126.1270819199933 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 218.14874332290816,
            "unit": "iter/sec",
            "range": "stddev: 0.00011089071715729637",
            "extra": "mean: 4.584028240400085 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 440.4563030152137,
            "unit": "iter/sec",
            "range": "stddev: 0.00009188224818176161",
            "extra": "mean: 2.2703727774000297 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17785.853882187632,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026598378592994195",
            "extra": "mean: 56.22445830399465 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 18156.670896838365,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029395472998947587",
            "extra": "mean: 55.07617589599704 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16210.115332346222,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016778354921058129",
            "extra": "mean: 61.689875704003505 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "79e9792d0ff5cf2c5a19dec12c7b06c202daba49",
          "message": "Update numpy requirement from <1.21.2,>=1.18.4 to >=1.18.4,<1.21.3\n\nUpdates the requirements on [numpy](https://github.com/numpy/numpy) to permit the latest version.\n- [Release notes](https://github.com/numpy/numpy/releases)\n- [Changelog](https://github.com/numpy/numpy/blob/main/doc/HOWTO_RELEASE.rst.txt)\n- [Commits](https://github.com/numpy/numpy/compare/v1.18.4...v1.21.2)\n\n---\nupdated-dependencies:\n- dependency-name: numpy\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-08-16T20:23:07+02:00",
          "tree_id": "bb24a9adb347065168613b3fb62c1456c8acd70d",
          "url": "https://github.com/histolab/histolab/commit/79e9792d0ff5cf2c5a19dec12c7b06c202daba49"
        },
        "date": 1629138971254,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.576976063933412,
            "unit": "iter/sec",
            "range": "stddev: 0.010015063153256372",
            "extra": "mean: 152.04555867000408 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 162.69798841575712,
            "unit": "iter/sec",
            "range": "stddev: 0.0002776600282997874",
            "extra": "mean: 6.146357491800131 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 408.3194992795035,
            "unit": "iter/sec",
            "range": "stddev: 0.0001786471486874536",
            "extra": "mean: 2.4490625644000374 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 14279.219980603202,
            "unit": "iter/sec",
            "range": "stddev: 0.000005759914551928085",
            "extra": "mean: 70.03183656799138 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 15028.863322762956,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060326698781527735",
            "extra": "mean: 66.53863159999491 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 13393.245909562518,
            "unit": "iter/sec",
            "range": "stddev: 0.0000070251673118879165",
            "extra": "mean: 74.66449931200168 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "f86c65e81f54d258c8805d3078c49ead89d6619e",
          "message": "Add method dispatcher compatible with older Python versions",
          "timestamp": "2021-08-18T15:31:43+02:00",
          "tree_id": "104cf43ec690f81ed65370fce1c480ac00b8a482",
          "url": "https://github.com/histolab/histolab/commit/f86c65e81f54d258c8805d3078c49ead89d6619e"
        },
        "date": 1629294001736,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 9.112212802444578,
            "unit": "iter/sec",
            "range": "stddev: 0.003231281773039168",
            "extra": "mean: 109.74282774999779 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 224.27920855271546,
            "unit": "iter/sec",
            "range": "stddev: 0.00007836702583377333",
            "extra": "mean: 4.458728057999883 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 621.5206551208668,
            "unit": "iter/sec",
            "range": "stddev: 0.00008502335777197446",
            "extra": "mean: 1.6089569859999755 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 35016.21784252577,
            "unit": "iter/sec",
            "range": "stddev: 0.000001203767728437432",
            "extra": "mean: 28.558195648004585 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 35851.250654314106,
            "unit": "iter/sec",
            "range": "stddev: 0.000001301790522719352",
            "extra": "mean: 27.893029720001323 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 32121.068127410068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012842520777406075",
            "extra": "mean: 31.132215031998385 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "a7dc3522e6b626dd0ee6966c1db74e28357719d3",
          "message": "Pin pooch and be compliant with future versions",
          "timestamp": "2021-08-23T20:57:39+02:00",
          "tree_id": "eba7693dc5723097d763ecaf0c8fb28861555e78",
          "url": "https://github.com/histolab/histolab/commit/a7dc3522e6b626dd0ee6966c1db74e28357719d3"
        },
        "date": 1629745633624,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.66815103933023,
            "unit": "iter/sec",
            "range": "stddev: 0.00391369294058224",
            "extra": "mean: 130.40953352000543 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 192.47158290432378,
            "unit": "iter/sec",
            "range": "stddev: 0.00012743325560723483",
            "extra": "mean: 5.195572171799995 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 549.3009183713117,
            "unit": "iter/sec",
            "range": "stddev: 0.00010861729383150127",
            "extra": "mean: 1.8204957730000162 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27472.616737401928,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017408219832100965",
            "extra": "mean: 36.39988172799622 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 29048.827499979878,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020519380739095933",
            "extra": "mean: 34.42479735199959 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26212.141116248837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014912191706009977",
            "extra": "mean: 38.15026004800893 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "6625b404b60de30aef914dd62f2ff95e5a3da73c",
          "message": "Add message to exception",
          "timestamp": "2021-08-23T23:53:46+02:00",
          "tree_id": "eefac2df48ff99114d631c940c7b126b4aca3c60",
          "url": "https://github.com/histolab/histolab/commit/6625b404b60de30aef914dd62f2ff95e5a3da73c"
        },
        "date": 1629756218550,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.742453655851248,
            "unit": "iter/sec",
            "range": "stddev: 0.002611073691452044",
            "extra": "mean: 114.38436385999125 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 236.8672328735117,
            "unit": "iter/sec",
            "range": "stddev: 0.00012698755168596092",
            "extra": "mean: 4.221774315799962 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 462.3138975804845,
            "unit": "iter/sec",
            "range": "stddev: 0.00008714664088485871",
            "extra": "mean: 2.1630325310000216 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 18382.53051912394,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031347715347214306",
            "extra": "mean: 54.39947448800194 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19263.213309640734,
            "unit": "iter/sec",
            "range": "stddev: 0.000002152095498439817",
            "extra": "mean: 51.91241896799875 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 17422.79202717328,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021926614871747543",
            "extra": "mean: 57.39608200800194 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "fbfc897ee0fe2b0c3b689e3172ab4ee0ec22fe88",
          "message": "address alessia's comments",
          "timestamp": "2021-08-30T22:12:34+02:00",
          "tree_id": "0fc3556f312b2affd7f5037bf8dc8ea0994c0592",
          "url": "https://github.com/histolab/histolab/commit/fbfc897ee0fe2b0c3b689e3172ab4ee0ec22fe88"
        },
        "date": 1630355037254,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.569148312429035,
            "unit": "iter/sec",
            "range": "stddev: 0.005083788180821715",
            "extra": "mean: 132.11526035999782 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 227.99867291238544,
            "unit": "iter/sec",
            "range": "stddev: 0.00013764579621929",
            "extra": "mean: 4.385990441199965 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 422.8754728231972,
            "unit": "iter/sec",
            "range": "stddev: 0.00015290280936926742",
            "extra": "mean: 2.3647623573999454 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16242.851700288318,
            "unit": "iter/sec",
            "range": "stddev: 0.000005657321748533258",
            "extra": "mean: 61.565543935997994 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 16327.232137832847,
            "unit": "iter/sec",
            "range": "stddev: 0.000007169207315714331",
            "extra": "mean: 61.24736829599169 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14733.8005475704,
            "unit": "iter/sec",
            "range": "stddev: 0.000006041018867718684",
            "extra": "mean: 67.87115088000155 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "cc4a8eaba7b963de419661c5dd91db3a6709426c",
          "message": "Remove _ from subfunction",
          "timestamp": "2021-09-05T18:28:27+02:00",
          "tree_id": "031861fe5c44138cc97201d455559009fd42c49c",
          "url": "https://github.com/histolab/histolab/commit/cc4a8eaba7b963de419661c5dd91db3a6709426c"
        },
        "date": 1630859852701,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.073336159589125,
            "unit": "iter/sec",
            "range": "stddev: 0.001442285335421263",
            "extra": "mean: 123.86453137000217 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 176.67273005415097,
            "unit": "iter/sec",
            "range": "stddev: 0.00011167126855132672",
            "extra": "mean: 5.660183094999979 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 597.974073430739,
            "unit": "iter/sec",
            "range": "stddev: 0.0000974130795850514",
            "extra": "mean: 1.6723133065999491 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29794.31203509929,
            "unit": "iter/sec",
            "range": "stddev: 7.631156867401062e-8",
            "extra": "mean: 33.5634532800068 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 30317.79355443588,
            "unit": "iter/sec",
            "range": "stddev: 0.000001509415730206901",
            "extra": "mean: 32.98393064800348 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 27062.84576543125,
            "unit": "iter/sec",
            "range": "stddev: 9.573698986192815e-8",
            "extra": "mean: 36.95102904800024 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "41ea99cec9a535ad7b65875f3c6cb5c99ae70fcb",
          "message": "Minor fixes",
          "timestamp": "2021-09-21T18:11:32+02:00",
          "tree_id": "7b97a44b195b4c39942888f6adf9eca1bf5934cc",
          "url": "https://github.com/histolab/histolab/commit/41ea99cec9a535ad7b65875f3c6cb5c99ae70fcb"
        },
        "date": 1632241357325,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.817159786963237,
            "unit": "iter/sec",
            "range": "stddev: 0.003445814236833185",
            "extra": "mean: 127.92369956000016 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 205.47963022533838,
            "unit": "iter/sec",
            "range": "stddev: 0.00007723451079074252",
            "extra": "mean: 4.866662446799978 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 430.6173897618178,
            "unit": "iter/sec",
            "range": "stddev: 0.00009883007007043517",
            "extra": "mean: 2.3222471357998757 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17498.90899202104,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035882066301466785",
            "extra": "mean: 57.14641984000082 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 17182.18819825281,
            "unit": "iter/sec",
            "range": "stddev: 0.000003851885283394769",
            "extra": "mean: 58.19980484800453 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15281.362612256029,
            "unit": "iter/sec",
            "range": "stddev: 0.000004023294188949026",
            "extra": "mean: 65.43919056000777 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicole.bussolaceradini@gmail.com",
            "name": "Nicole Bussola",
            "username": "nicolebussola"
          },
          "committer": {
            "email": "31658006+nicolebussola@users.noreply.github.com",
            "name": "nicolebussola",
            "username": "nicolebussola"
          },
          "distinct": true,
          "id": "7bbdefba13ad82008ff5d5be903ea5cbe0e53198",
          "message": "Address comments",
          "timestamp": "2021-09-22T10:36:37+02:00",
          "tree_id": "50e0848802fd029e15e102200dd2d16452e42dcf",
          "url": "https://github.com/histolab/histolab/commit/7bbdefba13ad82008ff5d5be903ea5cbe0e53198"
        },
        "date": 1632300340450,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.23407062861989,
            "unit": "iter/sec",
            "range": "stddev: 0.0012540429600880183",
            "extra": "mean: 121.44661433000238 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 200.11931331189626,
            "unit": "iter/sec",
            "range": "stddev: 0.000058757346839985755",
            "extra": "mean: 4.997018945599962 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 583.8234294769715,
            "unit": "iter/sec",
            "range": "stddev: 0.0000988697087424602",
            "extra": "mean: 1.7128466408000576 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29431.79799588859,
            "unit": "iter/sec",
            "range": "stddev: 8.340144794009451e-8",
            "extra": "mean: 33.97685727999669 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 30537.24788506225,
            "unit": "iter/sec",
            "range": "stddev: 5.898843708345752e-7",
            "extra": "mean: 32.746893359999376 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26899.422124148205,
            "unit": "iter/sec",
            "range": "stddev: 7.833354611332304e-8",
            "extra": "mean: 37.17551980799908 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicole.bussolaceradini@gmail.com",
            "name": "Nicole Bussola",
            "username": "nicolebussola"
          },
          "committer": {
            "email": "31658006+nicolebussola@users.noreply.github.com",
            "name": "nicolebussola",
            "username": "nicolebussola"
          },
          "distinct": true,
          "id": "06bd9cf392def0b2d03e70143cf7913c48c089a9",
          "message": "address comments",
          "timestamp": "2021-09-22T16:07:43+02:00",
          "tree_id": "195c6d4cf259cdc09f8f0042fb11c0a4e5f0b3a0",
          "url": "https://github.com/histolab/histolab/commit/06bd9cf392def0b2d03e70143cf7913c48c089a9"
        },
        "date": 1632320285430,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.185029954907067,
            "unit": "iter/sec",
            "range": "stddev: 0.005495494116444138",
            "extra": "mean: 122.17426270999567 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 221.6484347425972,
            "unit": "iter/sec",
            "range": "stddev: 0.00013751872986216554",
            "extra": "mean: 4.511649275400077 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 444.1048412225784,
            "unit": "iter/sec",
            "range": "stddev: 0.00010979006319859962",
            "extra": "mean: 2.2517205560000093 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17655.703637632003,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029156616959047743",
            "extra": "mean: 56.638920799993684 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 18557.24531210065,
            "unit": "iter/sec",
            "range": "stddev: 0.000002013959981716137",
            "extra": "mean: 53.88730833600221 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16114.534554022051,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035122231985203985",
            "extra": "mean: 62.055779312000595 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "06204cc2a9f632e8e734968965230a94328b17d5",
          "message": "add warning in readme",
          "timestamp": "2021-10-05T11:05:36+02:00",
          "tree_id": "557ba3a6746b4cfe792f59dbdb2c43787111feba",
          "url": "https://github.com/histolab/histolab/commit/06204cc2a9f632e8e734968965230a94328b17d5"
        },
        "date": 1633425417822,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.6643103909342685,
            "unit": "iter/sec",
            "range": "stddev: 0.003177765107905844",
            "extra": "mean: 130.4748828000038 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 210.20463523736484,
            "unit": "iter/sec",
            "range": "stddev: 0.00008212783339846718",
            "extra": "mean: 4.75726902439992 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 430.6521457369789,
            "unit": "iter/sec",
            "range": "stddev: 0.0000984017335014944",
            "extra": "mean: 2.3220597178000615 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16927.81750847331,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025699547244746447",
            "extra": "mean: 59.07436085599602 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 17146.870201061574,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027540843125124595",
            "extra": "mean: 58.319680984001934 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15113.42007435625,
            "unit": "iter/sec",
            "range": "stddev: 0.000002535574877625591",
            "extra": "mean: 66.16636043199469 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "5ebbc8ad070a2e0245511b6846a5e4635f75a432",
          "message": "get rid of src directory. Histolab now lives in the histolab child dir within the root",
          "timestamp": "2021-10-06T12:24:32+02:00",
          "tree_id": "2d52167e9a3359ae9495de2ca7b738752371d1ba",
          "url": "https://github.com/histolab/histolab/commit/5ebbc8ad070a2e0245511b6846a5e4635f75a432"
        },
        "date": 1633516428730,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.751524183498192,
            "unit": "iter/sec",
            "range": "stddev: 0.0008919997469581406",
            "extra": "mean: 129.0068864300065 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 172.52017893297204,
            "unit": "iter/sec",
            "range": "stddev: 0.0001195512666686529",
            "extra": "mean: 5.796423387599908 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 581.198442521862,
            "unit": "iter/sec",
            "range": "stddev: 0.00009789135530253264",
            "extra": "mean: 1.7205827249999628 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28803.641182850977,
            "unit": "iter/sec",
            "range": "stddev: 7.723950103261876e-7",
            "extra": "mean: 34.7178328480004 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 29997.165395055832,
            "unit": "iter/sec",
            "range": "stddev: 2.3415777078744054e-7",
            "extra": "mean: 33.33648319200256 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26559.675776543896,
            "unit": "iter/sec",
            "range": "stddev: 1.3113033357593479e-7",
            "extra": "mean: 37.65106202400057 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "5de2c9f0e48f0e1469d9029b91c22b92d55ebd52",
          "message": "Update scikit-image requirement\n\nUpdates the requirements on [scikit-image](https://github.com/scikit-image/scikit-image) to permit the latest version.\n- [Release notes](https://github.com/scikit-image/scikit-image/releases)\n- [Changelog](https://github.com/scikit-image/scikit-image/blob/master/RELEASE.txt)\n- [Commits](https://github.com/scikit-image/scikit-image/compare/v0.17.1...v0.18.0)\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-10-08T17:20:36+02:00",
          "tree_id": "5caedc36e52645c30da309e3df01c443acf31170",
          "url": "https://github.com/histolab/histolab/commit/5de2c9f0e48f0e1469d9029b91c22b92d55ebd52"
        },
        "date": 1633706571990,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.712232485198931,
            "unit": "iter/sec",
            "range": "stddev: 0.0030756231885228366",
            "extra": "mean: 129.66414094999962 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 203.2229966464075,
            "unit": "iter/sec",
            "range": "stddev: 0.00007730761495787745",
            "extra": "mean: 4.920702954400007 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 426.076476638756,
            "unit": "iter/sec",
            "range": "stddev: 0.00009843850430085827",
            "extra": "mean: 2.3469965014000023 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17271.739146984382,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015698459369552066",
            "extra": "mean: 57.89804903199911 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 17820.74354039708,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013924737887893492",
            "extra": "mean: 56.11438140800033 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15577.315424947748,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015963624048620757",
            "extra": "mean: 64.19591391199901 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "ernestoarbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "0b52a6189f6564f064fa594301e452987fada9f4",
          "message": "change watershed test expectations according to skimage 0.18.1 changes",
          "timestamp": "2021-10-08T19:09:49+02:00",
          "tree_id": "5ace570bae66b8b867d02c5ec055fb9d7b0a780a",
          "url": "https://github.com/histolab/histolab/commit/0b52a6189f6564f064fa594301e452987fada9f4"
        },
        "date": 1633713119228,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.382966038725586,
            "unit": "iter/sec",
            "range": "stddev: 0.002910183235345241",
            "extra": "mean: 135.4469185900001 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 175.03170524221227,
            "unit": "iter/sec",
            "range": "stddev: 0.0001063770738998994",
            "extra": "mean: 5.713250628600005 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 521.2553588841672,
            "unit": "iter/sec",
            "range": "stddev: 0.00010658446282475623",
            "extra": "mean: 1.9184455046000182 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 26965.47292739958,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013901393471438247",
            "extra": "mean: 37.0844599200002 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 27896.910523681345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013642982144815845",
            "extra": "mean: 35.84626330399965 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24838.860979350215,
            "unit": "iter/sec",
            "range": "stddev: 0.000001143411098452679",
            "extra": "mean: 40.2594950240009 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "0e8147be8ecc02e35cde666f900f7f1c5d957b2a",
          "message": "clarify docstring",
          "timestamp": "2021-10-12T16:11:23+02:00",
          "tree_id": "f5b0a36b31b1fd2b9e75a6eba257c0439677c085",
          "url": "https://github.com/histolab/histolab/commit/0e8147be8ecc02e35cde666f900f7f1c5d957b2a"
        },
        "date": 1634048014256,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.00198536170538,
            "unit": "iter/sec",
            "range": "stddev: 0.005697483928874804",
            "extra": "mean: 124.96898642000019 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 192.9418480080945,
            "unit": "iter/sec",
            "range": "stddev: 0.00012200618458807586",
            "extra": "mean: 5.182908790000016 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 560.5697818717462,
            "unit": "iter/sec",
            "range": "stddev: 0.00011437881778231379",
            "extra": "mean: 1.7838992260000055 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29313.225257499456,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024070093917032807",
            "extra": "mean: 34.11429452800189 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 31624.431025918875,
            "unit": "iter/sec",
            "range": "stddev: 0.000001997843337124158",
            "extra": "mean: 31.621122263999496 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26438.33659059895,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027278798133915953",
            "extra": "mean: 37.82386219999876 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "47473c485deefd7a92327aed4594255ad1645293",
          "message": "Add pytest-html to requirements for testing",
          "timestamp": "2021-10-13T19:51:50+02:00",
          "tree_id": "98cdb03915efbd14acbb4b0270137c5f196e2c90",
          "url": "https://github.com/histolab/histolab/commit/47473c485deefd7a92327aed4594255ad1645293"
        },
        "date": 1634147637128,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.738294029617869,
            "unit": "iter/sec",
            "range": "stddev: 0.0009443609875844882",
            "extra": "mean: 129.22744938000008 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 167.12997498504447,
            "unit": "iter/sec",
            "range": "stddev: 0.00008932015992604482",
            "extra": "mean: 5.983367137400006 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 581.0505358825694,
            "unit": "iter/sec",
            "range": "stddev: 0.00009716507759007785",
            "extra": "mean: 1.7210207000000082 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28958.512554093842,
            "unit": "iter/sec",
            "range": "stddev: 1.0455637430363998e-7",
            "extra": "mean: 34.532160383998416 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 29620.491900083038,
            "unit": "iter/sec",
            "range": "stddev: 2.1343256255765473e-7",
            "extra": "mean: 33.760411655999405 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26231.504061559797,
            "unit": "iter/sec",
            "range": "stddev: 1.0609242620053676e-7",
            "extra": "mean: 38.12209920000055 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "b8037b71d1809e3bfb72cad8d8c4da584d172a84",
          "message": "kmeans_segmentation always returns a RGB image",
          "timestamp": "2021-10-13T20:29:16+02:00",
          "tree_id": "b239ac7a40be8a6570f526779956bbe0dd8211bd",
          "url": "https://github.com/histolab/histolab/commit/b8037b71d1809e3bfb72cad8d8c4da584d172a84"
        },
        "date": 1634149893231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.864144143627495,
            "unit": "iter/sec",
            "range": "stddev: 0.005339015124003922",
            "extra": "mean: 127.15941896999993 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 233.56579995083118,
            "unit": "iter/sec",
            "range": "stddev: 0.00023039576055160847",
            "extra": "mean: 4.281448740399981 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 461.9091502119366,
            "unit": "iter/sec",
            "range": "stddev: 0.0001229230518881364",
            "extra": "mean: 2.1649278857999947 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16165.131643935694,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024220002008560303",
            "extra": "mean: 61.861543847998746 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 16864.301213696912,
            "unit": "iter/sec",
            "range": "stddev: 0.00000270273155055296",
            "extra": "mean: 59.296853592001526 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16592.89263063582,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037428363604225574",
            "extra": "mean: 60.26676736000081 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "437aa845e180ad7719fe6ee988174c4e2329358e",
          "message": "Remove pin pooch",
          "timestamp": "2021-10-14T13:13:04+02:00",
          "tree_id": "85e2dcb7548d7b1c63ded7fe1d1cb172dfc09f5e",
          "url": "https://github.com/histolab/histolab/commit/437aa845e180ad7719fe6ee988174c4e2329358e"
        },
        "date": 1634210130883,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.132390244526723,
            "unit": "iter/sec",
            "range": "stddev: 0.005612826783121539",
            "extra": "mean: 140.20545226999928 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 202.33242172789866,
            "unit": "iter/sec",
            "range": "stddev: 0.0002186630653459913",
            "extra": "mean: 4.942361641599995 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 438.9877023584705,
            "unit": "iter/sec",
            "range": "stddev: 0.0001628028845519526",
            "extra": "mean: 2.2779681404000147 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15785.840687631586,
            "unit": "iter/sec",
            "range": "stddev: 0.000004849989733551044",
            "extra": "mean: 63.347909039998974 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 16678.69445157517,
            "unit": "iter/sec",
            "range": "stddev: 0.000004406165676028979",
            "extra": "mean: 59.95673119999856 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15343.56487877397,
            "unit": "iter/sec",
            "range": "stddev: 0.000005054831108320654",
            "extra": "mean: 65.17390240799796 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "e1e9f7ac2f177a34b3e3d92d450647c89e8c1eb7",
          "message": "Clarify docstring",
          "timestamp": "2021-10-15T15:01:31+02:00",
          "tree_id": "18a8bae9023252a0b6b27b6a6fd901ddbc541c76",
          "url": "https://github.com/histolab/histolab/commit/e1e9f7ac2f177a34b3e3d92d450647c89e8c1eb7"
        },
        "date": 1634303015054,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.265176723095191,
            "unit": "iter/sec",
            "range": "stddev: 0.001688795059359425",
            "extra": "mean: 120.98954850000041 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 203.46134106739933,
            "unit": "iter/sec",
            "range": "stddev: 0.00008337846460505258",
            "extra": "mean: 4.914938605799989 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 585.2966354620146,
            "unit": "iter/sec",
            "range": "stddev: 0.00009700268309915427",
            "extra": "mean: 1.7085353637999845 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28433.071089842,
            "unit": "iter/sec",
            "range": "stddev: 4.317541856568646e-7",
            "extra": "mean: 35.170312655999396 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 29678.75905417583,
            "unit": "iter/sec",
            "range": "stddev: 8.772864859848987e-8",
            "extra": "mean: 33.69413115199973 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26221.86658975205,
            "unit": "iter/sec",
            "range": "stddev: 1.5094729020133383e-7",
            "extra": "mean: 38.136110432001715 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "767661d5c7528d1758d2fa2d2a399fc629897fff",
          "message": "add 3.9 reference in contributing files",
          "timestamp": "2021-10-15T17:03:25+02:00",
          "tree_id": "3e2ec1ff34dae3e9cfe8f30dcc0ab6087b639033",
          "url": "https://github.com/histolab/histolab/commit/767661d5c7528d1758d2fa2d2a399fc629897fff"
        },
        "date": 1634310348322,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.68745274066356,
            "unit": "iter/sec",
            "range": "stddev: 0.0011603815179435462",
            "extra": "mean: 130.0821005000003 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 156.38037445501604,
            "unit": "iter/sec",
            "range": "stddev: 0.00006269670024342498",
            "extra": "mean: 6.394664314399998 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 579.3430270396716,
            "unit": "iter/sec",
            "range": "stddev: 0.00010003556329612605",
            "extra": "mean: 1.726093097400002 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29239.982047352412,
            "unit": "iter/sec",
            "range": "stddev: 9.29209679632216e-8",
            "extra": "mean: 34.19974740000043 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 29541.053392022906,
            "unit": "iter/sec",
            "range": "stddev: 7.450655200156194e-8",
            "extra": "mean: 33.85119639200252 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26526.8506456601,
            "unit": "iter/sec",
            "range": "stddev: 9.740029440393784e-8",
            "extra": "mean: 37.697652592001305 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "e5e28846fada56d04b90cf32a2772fbdb2e0786a",
          "message": "add note for data moudule",
          "timestamp": "2021-10-19T14:34:16+02:00",
          "tree_id": "d16f4e48f756478ff73e4dfbafeee63c2e52fca9",
          "url": "https://github.com/histolab/histolab/commit/e5e28846fada56d04b90cf32a2772fbdb2e0786a"
        },
        "date": 1634647004477,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.997298637862052,
            "unit": "iter/sec",
            "range": "stddev: 0.0018488402881480658",
            "extra": "mean: 142.9122939800007 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 168.29629908477938,
            "unit": "iter/sec",
            "range": "stddev: 0.00005331769629897104",
            "extra": "mean: 5.941901309999986 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 499.7895967263519,
            "unit": "iter/sec",
            "range": "stddev: 0.00011629512683157978",
            "extra": "mean: 2.0008419673999867 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25260.95754386914,
            "unit": "iter/sec",
            "range": "stddev: 4.296088952803645e-7",
            "extra": "mean: 39.586781232000476 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 26206.045424190273,
            "unit": "iter/sec",
            "range": "stddev: 5.193060038956811e-7",
            "extra": "mean: 38.1591340399998 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23275.273372452066,
            "unit": "iter/sec",
            "range": "stddev: 4.989900454082252e-7",
            "extra": "mean: 42.96404961600024 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "51ae30f9a2ec478165ce30df12eacc8da6886df8",
          "message": "Update numpy requirement from <1.21.3,>=1.18.4 to >=1.18.4,<1.21.4\n\nUpdates the requirements on [numpy](https://github.com/numpy/numpy) to permit the latest version.\n- [Release notes](https://github.com/numpy/numpy/releases)\n- [Changelog](https://github.com/numpy/numpy/blob/main/doc/HOWTO_RELEASE.rst.txt)\n- [Commits](https://github.com/numpy/numpy/compare/v1.18.4...v1.21.3)\n\n---\nupdated-dependencies:\n- dependency-name: numpy\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-10-21T09:30:28+02:00",
          "tree_id": "16dfd3588d87e4ad6506487fa25824f7b4de2280",
          "url": "https://github.com/histolab/histolab/commit/51ae30f9a2ec478165ce30df12eacc8da6886df8"
        },
        "date": 1634801543794,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 9.66533787517807,
            "unit": "iter/sec",
            "range": "stddev: 0.005496485195738102",
            "extra": "mean: 103.46249793999846 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 314.21769643024965,
            "unit": "iter/sec",
            "range": "stddev: 0.00030659890031709474",
            "extra": "mean: 3.182506941400038 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 472.89033599384913,
            "unit": "iter/sec",
            "range": "stddev: 0.00010763100372368302",
            "extra": "mean: 2.1146551829999907 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17641.21936988311,
            "unit": "iter/sec",
            "range": "stddev: 0.000002623570728172965",
            "extra": "mean: 56.685424008001974 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 18523.69806832174,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021817042646447827",
            "extra": "mean: 53.98490065599526 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 18564.178341761195,
            "unit": "iter/sec",
            "range": "stddev: 0.000004365570280158292",
            "extra": "mean: 53.867183431999365 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "a7d48b8b74ea5a1af4226672b112a0bcc21e16ae",
          "message": "Use Python 3.9 for benchmarks",
          "timestamp": "2021-11-03T17:19:48+01:00",
          "tree_id": "825568dda903d6b9f8339e7178fbb01a0ab84078",
          "url": "https://github.com/histolab/histolab/commit/a7d48b8b74ea5a1af4226672b112a0bcc21e16ae"
        },
        "date": 1635956517746,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.5158434507929925,
            "unit": "iter/sec",
            "range": "stddev: 0.006126181048428254",
            "extra": "mean: 133.0522657300014 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 219.8857699661005,
            "unit": "iter/sec",
            "range": "stddev: 0.00021807030952399569",
            "extra": "mean: 4.54781589619996 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 523.877703943152,
            "unit": "iter/sec",
            "range": "stddev: 0.00013356529823178672",
            "extra": "mean: 1.9088424502000065 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 26737.957819782885,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032628549223882247",
            "extra": "mean: 37.400014120005835 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20434.072765470144,
            "unit": "iter/sec",
            "range": "stddev: 0.000004558436019246481",
            "extra": "mean: 48.93787016799797 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23577.945317460853,
            "unit": "iter/sec",
            "range": "stddev: 0.000003936032536879276",
            "extra": "mean: 42.41251671999771 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "17d1e0e0084c77e04210053b051aa8cab68323af",
          "message": "Remove option to continue on error",
          "timestamp": "2021-11-04T15:07:27+01:00",
          "tree_id": "708e0dda95e7ea2d9041c849aeb50e0d77144bc3",
          "url": "https://github.com/histolab/histolab/commit/17d1e0e0084c77e04210053b051aa8cab68323af"
        },
        "date": 1636034999171,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.467828643119729,
            "unit": "iter/sec",
            "range": "stddev: 0.0032291451295186784",
            "extra": "mean: 133.9077324599998 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 203.4134483847342,
            "unit": "iter/sec",
            "range": "stddev: 0.00008852289519983585",
            "extra": "mean: 4.916095803600015 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 420.53812816353127,
            "unit": "iter/sec",
            "range": "stddev: 0.00010335035827939682",
            "extra": "mean: 2.3779056713999975 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16067.426884424533,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037950498638094135",
            "extra": "mean: 62.23771903199895 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 11772.43173319198,
            "unit": "iter/sec",
            "range": "stddev: 0.0000044696162521911605",
            "extra": "mean: 84.94421735999822 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 13769.895058609834,
            "unit": "iter/sec",
            "range": "stddev: 0.00000459495763333895",
            "extra": "mean: 72.62219470399918 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "b3e1563d316c5e514c30f555c4b522fb9cae673c",
          "message": "Update numpy requirement from <1.21.4,>=1.18.4 to >=1.18.4,<1.21.5\n\nUpdates the requirements on [numpy](https://github.com/numpy/numpy) to permit the latest version.\n- [Release notes](https://github.com/numpy/numpy/releases)\n- [Changelog](https://github.com/numpy/numpy/blob/main/doc/HOWTO_RELEASE.rst.txt)\n- [Commits](https://github.com/numpy/numpy/compare/v1.18.4...v1.21.4)\n\n---\nupdated-dependencies:\n- dependency-name: numpy\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-11-05T09:49:10+01:00",
          "tree_id": "e148617fed61f372af4894f74d0226f227893408",
          "url": "https://github.com/histolab/histolab/commit/b3e1563d316c5e514c30f555c4b522fb9cae673c"
        },
        "date": 1636102270266,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.931651420336093,
            "unit": "iter/sec",
            "range": "stddev: 0.0009708768267264302",
            "extra": "mean: 126.07714925999944 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 162.63916028893075,
            "unit": "iter/sec",
            "range": "stddev: 0.00006953269270028537",
            "extra": "mean: 6.148580687599996 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 595.1149005025384,
            "unit": "iter/sec",
            "range": "stddev: 0.00009843569756349434",
            "extra": "mean: 1.6803477768000106 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29500.36018063506,
            "unit": "iter/sec",
            "range": "stddev: 8.700121599698549e-8",
            "extra": "mean: 33.8978912080006 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22785.225386218066,
            "unit": "iter/sec",
            "range": "stddev: 1.0755192926024054e-7",
            "extra": "mean: 43.888089016001686 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26970.129681005765,
            "unit": "iter/sec",
            "range": "stddev: 9.296603936909779e-8",
            "extra": "mean: 37.07805679200237 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "fb5368a3dccf9d2dcb0139b578b4577e12978db7",
          "message": "Move RGB->color space expectations in correct folder",
          "timestamp": "2021-11-05T11:21:48+01:00",
          "tree_id": "ee9f5e0ccec5c74ed970ccdc9085bc374dcb2cc4",
          "url": "https://github.com/histolab/histolab/commit/fb5368a3dccf9d2dcb0139b578b4577e12978db7"
        },
        "date": 1636107851468,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.534297763258088,
            "unit": "iter/sec",
            "range": "stddev: 0.0054218712075153885",
            "extra": "mean: 132.72637098000303 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 198.93498299596146,
            "unit": "iter/sec",
            "range": "stddev: 0.0002414874636074343",
            "extra": "mean: 5.026767966799992 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 453.0645073508321,
            "unit": "iter/sec",
            "range": "stddev: 0.00014379104269647992",
            "extra": "mean: 2.2071912140000105 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 14686.928336282517,
            "unit": "iter/sec",
            "range": "stddev: 0.00000428650331691163",
            "extra": "mean: 68.08775647999892 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12357.714558539286,
            "unit": "iter/sec",
            "range": "stddev: 0.000005503343650251385",
            "extra": "mean: 80.92111168800147 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14619.437331053154,
            "unit": "iter/sec",
            "range": "stddev: 0.000005702481753303097",
            "extra": "mean: 68.4020853440029 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "4d9e68f12930622f6e0afc16840c3828565df920",
          "message": "release: prepare v0.3.0 release",
          "timestamp": "2021-11-06T18:09:07+01:00",
          "tree_id": "369f0dabab5c017b4d8f63b92a87bc8bc1dfc1c3",
          "url": "https://github.com/histolab/histolab/commit/4d9e68f12930622f6e0afc16840c3828565df920"
        },
        "date": 1636218740984,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.690222331760172,
            "unit": "iter/sec",
            "range": "stddev: 0.00657656196854791",
            "extra": "mean: 130.03525215000067 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 218.54536999422535,
            "unit": "iter/sec",
            "range": "stddev: 0.00025864395087967564",
            "extra": "mean: 4.57570892499998 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 458.8881877140617,
            "unit": "iter/sec",
            "range": "stddev: 0.00013220705507542907",
            "extra": "mean: 2.179180085199994 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15301.657567699753,
            "unit": "iter/sec",
            "range": "stddev: 0.000005234704160308749",
            "extra": "mean: 65.35239699200292 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12131.03022362776,
            "unit": "iter/sec",
            "range": "stddev: 0.000007151952201835764",
            "extra": "mean: 82.43322962400066 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14798.57069517927,
            "unit": "iter/sec",
            "range": "stddev: 0.000005029856818100393",
            "extra": "mean: 67.5740935120009 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "c0ff00f719ad910b7ba5564bb1db082deeb39a40",
          "message": "fix release yml",
          "timestamp": "2021-11-06T18:52:45+01:00",
          "tree_id": "53aa9b8cb99ef08b3e43ca145b9f5de2947bdbf0",
          "url": "https://github.com/histolab/histolab/commit/c0ff00f719ad910b7ba5564bb1db082deeb39a40"
        },
        "date": 1636221422357,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.980543735717535,
            "unit": "iter/sec",
            "range": "stddev: 0.0012929811824261169",
            "extra": "mean: 125.30474528000185 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 145.98275036622263,
            "unit": "iter/sec",
            "range": "stddev: 0.00010607784246767178",
            "extra": "mean: 6.8501243981999895 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 586.3986215424549,
            "unit": "iter/sec",
            "range": "stddev: 0.00009723756233279581",
            "extra": "mean: 1.705324608999956 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28975.468054645058,
            "unit": "iter/sec",
            "range": "stddev: 7.491801055384278e-8",
            "extra": "mean: 34.511953288005316 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22702.889468992715,
            "unit": "iter/sec",
            "range": "stddev: 8.276808655051413e-8",
            "extra": "mean: 44.04725668799938 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26647.13046295147,
            "unit": "iter/sec",
            "range": "stddev: 2.456344336666266e-7",
            "extra": "mean: 37.52749292800354 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "f080986c3c8fc723024ba50fa8ec8c69c27a7f9d",
          "message": "Update scipy requirement from <1.7.2,>=1.5.0 to >=1.5.0,<1.7.3\n\nUpdates the requirements on [scipy](https://github.com/scipy/scipy) to permit the latest version.\n- [Release notes](https://github.com/scipy/scipy/releases)\n- [Commits](https://github.com/scipy/scipy/compare/v1.5.0...v1.7.2)\n\n---\nupdated-dependencies:\n- dependency-name: scipy\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-11-08T09:51:09+01:00",
          "tree_id": "0705c74cf6324ddffd063b4fc7dfc012858154a8",
          "url": "https://github.com/histolab/histolab/commit/f080986c3c8fc723024ba50fa8ec8c69c27a7f9d"
        },
        "date": 1636361607020,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.82484289679311,
            "unit": "iter/sec",
            "range": "stddev: 0.003955102475006532",
            "extra": "mean: 127.79809296999872 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 189.9194765265812,
            "unit": "iter/sec",
            "range": "stddev: 0.0001651239593055172",
            "extra": "mean: 5.265389407600014 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 425.4446472530841,
            "unit": "iter/sec",
            "range": "stddev: 0.00010823221253666344",
            "extra": "mean: 2.350482034399954 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16640.23047893975,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032720902966708585",
            "extra": "mean: 60.09532147199661 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 13316.448138171594,
            "unit": "iter/sec",
            "range": "stddev: 0.000003811317531487408",
            "extra": "mean: 75.09509965600364 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15112.17781196012,
            "unit": "iter/sec",
            "range": "stddev: 0.000003033265015503201",
            "extra": "mean: 66.17179948799821 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "94ec6cb8db6318199fef881a242fff0333c5491e",
          "message": "Add test for np_to_pil with float values [0,1] array",
          "timestamp": "2021-11-09T19:13:26+01:00",
          "tree_id": "42854ea4dfd9076a6f54c5d3a424a9ea174b2d13",
          "url": "https://github.com/histolab/histolab/commit/94ec6cb8db6318199fef881a242fff0333c5491e"
        },
        "date": 1636481740310,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.755942652452455,
            "unit": "iter/sec",
            "range": "stddev: 0.0011469596619479267",
            "extra": "mean: 128.93339272999867 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 145.8862322245633,
            "unit": "iter/sec",
            "range": "stddev: 0.0001175352218246726",
            "extra": "mean: 6.8546564316000405 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 584.5273835142051,
            "unit": "iter/sec",
            "range": "stddev: 0.0000985082716547164",
            "extra": "mean: 1.7107838369999968 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28856.817310295155,
            "unit": "iter/sec",
            "range": "stddev: 1.1728504289437764e-7",
            "extra": "mean: 34.65385628799868 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22658.945821455647,
            "unit": "iter/sec",
            "range": "stddev: 1.0169042623365986e-7",
            "extra": "mean: 44.13267977599844 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26576.915671202478,
            "unit": "iter/sec",
            "range": "stddev: 7.350342941759747e-8",
            "extra": "mean: 37.62663856000245 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "21e626d6a842bf85a0c5e3b116a99fbae44ef2bf",
          "message": "Remove old note about saving tiles in /tiles directory",
          "timestamp": "2021-11-10T11:18:00+01:00",
          "tree_id": "cecae15b27fe192865e6046f4421ccdb6becbb5b",
          "url": "https://github.com/histolab/histolab/commit/21e626d6a842bf85a0c5e3b116a99fbae44ef2bf"
        },
        "date": 1636539616642,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.71456401901215,
            "unit": "iter/sec",
            "range": "stddev: 0.0009491208367364214",
            "extra": "mean: 129.62495321000006 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 150.0205229260522,
            "unit": "iter/sec",
            "range": "stddev: 0.00009769624279659913",
            "extra": "mean: 6.665754661400013 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 583.0376424890686,
            "unit": "iter/sec",
            "range": "stddev: 0.00010027363977611398",
            "extra": "mean: 1.715155123999989 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29347.480251908724,
            "unit": "iter/sec",
            "range": "stddev: 8.485097839344668e-8",
            "extra": "mean: 34.07447560800256 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22717.317321432576,
            "unit": "iter/sec",
            "range": "stddev: 3.096943539910257e-7",
            "extra": "mean: 44.01928211200152 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 27209.296402911466,
            "unit": "iter/sec",
            "range": "stddev: 9.856943610861257e-8",
            "extra": "mean: 36.7521447520046 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "1d2dff41e72c21b8d5da5a881f867bdc48581316",
          "message": "Bump sphinx from 4.2.0 to 4.3.0\n\nBumps [sphinx](https://github.com/sphinx-doc/sphinx) from 4.2.0 to 4.3.0.\n- [Release notes](https://github.com/sphinx-doc/sphinx/releases)\n- [Changelog](https://github.com/sphinx-doc/sphinx/blob/4.x/CHANGES)\n- [Commits](https://github.com/sphinx-doc/sphinx/compare/v4.2.0...v4.3.0)\n\n---\nupdated-dependencies:\n- dependency-name: sphinx\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-11-11T10:48:38+01:00",
          "tree_id": "30a5a5d4ea239dbc699c561edb7429e7ed30803f",
          "url": "https://github.com/histolab/histolab/commit/1d2dff41e72c21b8d5da5a881f867bdc48581316"
        },
        "date": 1636624256372,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.670623321068092,
            "unit": "iter/sec",
            "range": "stddev: 0.00783747025132979",
            "extra": "mean: 130.3675018500003 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 209.84268853816351,
            "unit": "iter/sec",
            "range": "stddev: 0.0004044689380684808",
            "extra": "mean: 4.765474589400014 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 447.43840307053097,
            "unit": "iter/sec",
            "range": "stddev: 0.00015692073031325465",
            "extra": "mean: 2.2349445044000102 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 14794.572471333397,
            "unit": "iter/sec",
            "range": "stddev: 0.000005656477982868394",
            "extra": "mean: 67.5923553680002 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12838.627138451739,
            "unit": "iter/sec",
            "range": "stddev: 0.000006479680649057928",
            "extra": "mean: 77.88994798400176 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15085.830578427393,
            "unit": "iter/sec",
            "range": "stddev: 0.000006113976013943835",
            "extra": "mean: 66.2873677919988 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "fb1370dcca89a8666067109fb17ab74a3d103783",
          "message": "Add 3.10 references where needed",
          "timestamp": "2021-11-11T12:44:22+01:00",
          "tree_id": "640f2c2b98d970c21cb9feea54e67a21ae01e9d0",
          "url": "https://github.com/histolab/histolab/commit/fb1370dcca89a8666067109fb17ab74a3d103783"
        },
        "date": 1636631202016,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.746229942575961,
            "unit": "iter/sec",
            "range": "stddev: 0.001160599303914334",
            "extra": "mean: 129.0950575200013 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 148.01117883568543,
            "unit": "iter/sec",
            "range": "stddev: 0.00009383400033896255",
            "extra": "mean: 6.756246439400025 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 584.4833950177022,
            "unit": "iter/sec",
            "range": "stddev: 0.00009952534666018621",
            "extra": "mean: 1.710912591399989 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29423.28894276937,
            "unit": "iter/sec",
            "range": "stddev: 1.4158205821771772e-7",
            "extra": "mean: 33.98668320000115 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 23036.141127409373,
            "unit": "iter/sec",
            "range": "stddev: 1.1323491881440623e-7",
            "extra": "mean: 43.410048343997914 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 27262.71264140192,
            "unit": "iter/sec",
            "range": "stddev: 1.3312542040675738e-7",
            "extra": "mean: 36.68013572799691 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "7cea37b5efc09991eccd5bac63c5427e69f0dccc",
          "message": "release: prepare v0.3.1 release",
          "timestamp": "2021-11-11T13:06:36+01:00",
          "tree_id": "d14a9fbabddfd1d7ac9a5fad80d7003d3b7100e2",
          "url": "https://github.com/histolab/histolab/commit/7cea37b5efc09991eccd5bac63c5427e69f0dccc"
        },
        "date": 1636632535359,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.702321126289749,
            "unit": "iter/sec",
            "range": "stddev: 0.0008100564512312342",
            "extra": "mean: 129.8309929699991 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 149.02664774041807,
            "unit": "iter/sec",
            "range": "stddev: 0.0000651010469907658",
            "extra": "mean: 6.710209315999975 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 591.5063675449205,
            "unit": "iter/sec",
            "range": "stddev: 0.00009931035821900857",
            "extra": "mean: 1.6905988758000263 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29237.910442316643,
            "unit": "iter/sec",
            "range": "stddev: 8.37091654064245e-8",
            "extra": "mean: 34.20217056799925 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22498.714860807777,
            "unit": "iter/sec",
            "range": "stddev: 9.4734352954298e-8",
            "extra": "mean: 44.4469831360002 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26724.90034710159,
            "unit": "iter/sec",
            "range": "stddev: 9.908391264283856e-8",
            "extra": "mean: 37.41828732799945 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mtageld@emory.edu",
            "name": "kheffah",
            "username": "kheffah"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "29ebb9a28abb72b98b4daad7c59fb1649700f6b4",
          "message": "remove underscore from list comprehension in Slide class",
          "timestamp": "2021-11-15T12:21:07+01:00",
          "tree_id": "ba23b31d0f00e95849089816d0518f3d8b708c97",
          "url": "https://github.com/histolab/histolab/commit/29ebb9a28abb72b98b4daad7c59fb1649700f6b4"
        },
        "date": 1636975399855,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.967458565869303,
            "unit": "iter/sec",
            "range": "stddev: 0.0017617953969468597",
            "extra": "mean: 143.52435548000045 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 150.44247183151361,
            "unit": "iter/sec",
            "range": "stddev: 0.00007898813698432419",
            "extra": "mean: 6.64705909060002 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 505.3801581976831,
            "unit": "iter/sec",
            "range": "stddev: 0.00010586207082677048",
            "extra": "mean: 1.9787084708000011 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 26474.510204119513,
            "unit": "iter/sec",
            "range": "stddev: 6.907129415307413e-7",
            "extra": "mean: 37.77218132800044 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20642.377118945707,
            "unit": "iter/sec",
            "range": "stddev: 8.61595053599011e-7",
            "extra": "mean: 48.44403307999801 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24646.23651277712,
            "unit": "iter/sec",
            "range": "stddev: 8.294620790572559e-7",
            "extra": "mean: 40.57414605599433 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "97abd621b133e1f310355c95dc3e8ea7ddc62bc9",
          "message": "Update expectation after updating to skimage 0.18.3",
          "timestamp": "2021-11-15T14:53:31+01:00",
          "tree_id": "709c136817b2eccd3f344c656b207bf2b7b89a9d",
          "url": "https://github.com/histolab/histolab/commit/97abd621b133e1f310355c95dc3e8ea7ddc62bc9"
        },
        "date": 1636984551714,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.886252991483174,
            "unit": "iter/sec",
            "range": "stddev: 0.006214839546127328",
            "extra": "mean: 126.8029317700001 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 213.04220823568295,
            "unit": "iter/sec",
            "range": "stddev: 0.00040374480718794695",
            "extra": "mean: 4.693905532999953 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 437.0800900876756,
            "unit": "iter/sec",
            "range": "stddev: 0.00015328885900347264",
            "extra": "mean: 2.287910208400035 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15270.970664721039,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051361156739649",
            "extra": "mean: 65.48372215200425 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 13401.380445708688,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053771101492025984",
            "extra": "mean: 74.61917852800116 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15389.143493773505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056027260047222705",
            "extra": "mean: 64.9808743679987 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "7463921b65c4be69381b5b56e426b21296de792f",
          "message": "Fix error message",
          "timestamp": "2021-11-16T17:51:16+01:00",
          "tree_id": "5d79c760ca93c1ec0f148d9ada2430d53e6b4448",
          "url": "https://github.com/histolab/histolab/commit/7463921b65c4be69381b5b56e426b21296de792f"
        },
        "date": 1637081616056,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.865394070928437,
            "unit": "iter/sec",
            "range": "stddev: 0.0064337659590781105",
            "extra": "mean: 127.1392114599999 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 211.36474106020677,
            "unit": "iter/sec",
            "range": "stddev: 0.00028635309098205695",
            "extra": "mean: 4.731158068199995 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 464.480396117877,
            "unit": "iter/sec",
            "range": "stddev: 0.00012648031297175352",
            "extra": "mean: 2.152943392999987 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15832.37996388067,
            "unit": "iter/sec",
            "range": "stddev: 0.00000495480977399381",
            "extra": "mean: 63.16169788000025 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12942.25509481545,
            "unit": "iter/sec",
            "range": "stddev: 0.000006076705997374077",
            "extra": "mean: 77.26628726400168 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15571.231149109828,
            "unit": "iter/sec",
            "range": "stddev: 0.000004616266880761596",
            "extra": "mean: 64.22099771199964 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "7f57e63e43e2fe4c2dcbd6988556aa42b076a1c6",
          "message": "Fix link to installation instructions",
          "timestamp": "2021-11-16T18:57:08+01:00",
          "tree_id": "8d3f0c2c523c520b0461aa64c13576cbc4074b5d",
          "url": "https://github.com/histolab/histolab/commit/7f57e63e43e2fe4c2dcbd6988556aa42b076a1c6"
        },
        "date": 1637085557666,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.916390574200227,
            "unit": "iter/sec",
            "range": "stddev: 0.005362039726785859",
            "extra": "mean: 126.32019486999951 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 244.4341593698528,
            "unit": "iter/sec",
            "range": "stddev: 0.00028883060417514905",
            "extra": "mean: 4.091081224399992 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 470.8467355583675,
            "unit": "iter/sec",
            "range": "stddev: 0.00011126060343882131",
            "extra": "mean: 2.1238333506000004 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15754.700177311444,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023821940533187653",
            "extra": "mean: 63.47312159200043 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 14207.354112837897,
            "unit": "iter/sec",
            "range": "stddev: 0.000003699069827106245",
            "extra": "mean: 70.3860825920001 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16132.788633223541,
            "unit": "iter/sec",
            "range": "stddev: 0.000003831797127203772",
            "extra": "mean: 61.98556385599819 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "943dbb7adbe2f5ff765c10f3d8bf0096416b31e5",
          "message": "Fix SlideSet not passing along args to Slide",
          "timestamp": "2021-11-18T18:16:43+01:00",
          "tree_id": "f6624c3fd74698d4c5bd4e0524073a365bee8e77",
          "url": "https://github.com/histolab/histolab/commit/943dbb7adbe2f5ff765c10f3d8bf0096416b31e5"
        },
        "date": 1637255961423,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.77589471441042,
            "unit": "iter/sec",
            "range": "stddev: 0.0011851235609872347",
            "extra": "mean: 128.6025643000005 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 158.50341312169274,
            "unit": "iter/sec",
            "range": "stddev: 0.00013220783226055262",
            "extra": "mean: 6.30901240739995 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 587.6612009076766,
            "unit": "iter/sec",
            "range": "stddev: 0.00009711624436674655",
            "extra": "mean: 1.701660750200017 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29345.525006350308,
            "unit": "iter/sec",
            "range": "stddev: 7.730086028242672e-8",
            "extra": "mean: 34.076745936002226 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 23059.712829916854,
            "unit": "iter/sec",
            "range": "stddev: 8.496485761883312e-8",
            "extra": "mean: 43.36567447200105 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 27232.800184967866,
            "unit": "iter/sec",
            "range": "stddev: 8.94155253700047e-8",
            "extra": "mean: 36.72042511999871 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "7f455d36183e81892dc58a1eb37a2c318430591f",
          "message": "release: prepare v0.4.0 release",
          "timestamp": "2021-11-18T18:51:41+01:00",
          "tree_id": "bf3e6796c89248135f138ce10544dfc1c1d49bb2",
          "url": "https://github.com/histolab/histolab/commit/7f455d36183e81892dc58a1eb37a2c318430591f"
        },
        "date": 1637258129035,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.96026783662434,
            "unit": "iter/sec",
            "range": "stddev: 0.0021914573253125715",
            "extra": "mean: 143.67263207000235 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 153.0792390155327,
            "unit": "iter/sec",
            "range": "stddev: 0.00008557678559176564",
            "extra": "mean: 6.532564483800002 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 504.9898975912614,
            "unit": "iter/sec",
            "range": "stddev: 0.00011789070817219834",
            "extra": "mean: 1.9802376339999568 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 26019.90318056246,
            "unit": "iter/sec",
            "range": "stddev: 9.739061844965745e-8",
            "extra": "mean: 38.43211840799722 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20175.271564504972,
            "unit": "iter/sec",
            "range": "stddev: 1.0648929148981354e-7",
            "extra": "mean: 49.56562774398208 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24113.241453299386,
            "unit": "iter/sec",
            "range": "stddev: 1.2093957151580662e-7",
            "extra": "mean: 41.470990199999505 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "641f2aca65a199604d53f498846e2aeb67f3bf71",
          "message": "Try tp use http instead of ftp",
          "timestamp": "2021-11-19T16:17:07+01:00",
          "tree_id": "3f60cdb5b057421490c845b92b21de25805b01c5",
          "url": "https://github.com/histolab/histolab/commit/641f2aca65a199604d53f498846e2aeb67f3bf71"
        },
        "date": 1637335168224,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.249129810470523,
            "unit": "iter/sec",
            "range": "stddev: 0.005321577651787697",
            "extra": "mean: 137.94759180000014 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 150.30104864320455,
            "unit": "iter/sec",
            "range": "stddev: 0.00013316690692187456",
            "extra": "mean: 6.653313526600016 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 488.97317249050565,
            "unit": "iter/sec",
            "range": "stddev: 0.00012656592199298102",
            "extra": "mean: 2.045101973400017 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25996.054428250005,
            "unit": "iter/sec",
            "range": "stddev: 6.880465215996197e-7",
            "extra": "mean: 38.46737599200037 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19906.63223813488,
            "unit": "iter/sec",
            "range": "stddev: 4.202351606909732e-7",
            "extra": "mean: 50.234514207999155 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23551.42573563741,
            "unit": "iter/sec",
            "range": "stddev: 4.40885026675308e-7",
            "extra": "mean: 42.46027443199864 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "9231c477a5c098e7490ee4fee59f0b5873c0fe15",
          "message": "None as default level for Tile, instead of 0",
          "timestamp": "2021-11-23T13:57:21+01:00",
          "tree_id": "300cba9bf01fa57f97c4e18d71a6e7bf9034562a",
          "url": "https://github.com/histolab/histolab/commit/9231c477a5c098e7490ee4fee59f0b5873c0fe15"
        },
        "date": 1637672386302,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.995556672786093,
            "unit": "iter/sec",
            "range": "stddev: 0.0014263755476542658",
            "extra": "mean: 125.06946556999948 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 147.1427463861575,
            "unit": "iter/sec",
            "range": "stddev: 0.00011930738870747532",
            "extra": "mean: 6.796121620400007 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 577.7033545808227,
            "unit": "iter/sec",
            "range": "stddev: 0.00009849600990778485",
            "extra": "mean: 1.7309921988000099 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28981.322746592075,
            "unit": "iter/sec",
            "range": "stddev: 7.516302774305298e-8",
            "extra": "mean: 34.50498131999825 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22421.035732274246,
            "unit": "iter/sec",
            "range": "stddev: 8.597082848566112e-8",
            "extra": "mean: 44.60097258399787 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26691.794774961676,
            "unit": "iter/sec",
            "range": "stddev: 9.983239719233041e-8",
            "extra": "mean: 37.4646968639986 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "348f9451780bae10fdfcd85e05b05455106c896e",
          "message": "Update scipy requirement from <1.7.3,>=1.5.0 to >=1.5.0,<1.7.4\n\nUpdates the requirements on [scipy](https://github.com/scipy/scipy) to permit the latest version.\n- [Release notes](https://github.com/scipy/scipy/releases)\n- [Commits](https://github.com/scipy/scipy/compare/v1.5.0...v1.7.3)\n\n---\nupdated-dependencies:\n- dependency-name: scipy\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-11-25T07:49:18+01:00",
          "tree_id": "771c6c89abbd8e8efbfa1a74e7d0048626625469",
          "url": "https://github.com/histolab/histolab/commit/348f9451780bae10fdfcd85e05b05455106c896e"
        },
        "date": 1637823162640,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.070397626256177,
            "unit": "iter/sec",
            "range": "stddev: 0.0027866993494796996",
            "extra": "mean: 141.43476122000038 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 155.82401921369382,
            "unit": "iter/sec",
            "range": "stddev: 0.00010736878027224966",
            "extra": "mean: 6.417495871600004 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 524.7608174461003,
            "unit": "iter/sec",
            "range": "stddev: 0.00010538307223591152",
            "extra": "mean: 1.905630082799985 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 26928.48968621725,
            "unit": "iter/sec",
            "range": "stddev: 9.448646903417058e-7",
            "extra": "mean: 37.13539124000067 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20810.92515926263,
            "unit": "iter/sec",
            "range": "stddev: 9.713984736151121e-7",
            "extra": "mean: 48.051684024 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24864.032638759094,
            "unit": "iter/sec",
            "range": "stddev: 8.032227994441992e-7",
            "extra": "mean: 40.2187374239993 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrick.arminio@gmail.com",
            "name": "Patrick Arminio",
            "username": "patrick91"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "0c49ba5e21925a3271de221fcf0f28fbbf266e55",
          "message": "Fix yml",
          "timestamp": "2021-11-26T18:18:21+01:00",
          "tree_id": "5302a50b29093bf9a767c8d37949c88c88a7962d",
          "url": "https://github.com/histolab/histolab/commit/0c49ba5e21925a3271de221fcf0f28fbbf266e55"
        },
        "date": 1637947270561,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.056057384575455,
            "unit": "iter/sec",
            "range": "stddev: 0.007856639910836303",
            "extra": "mean: 141.7222034200006 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 196.96192972884668,
            "unit": "iter/sec",
            "range": "stddev: 0.00022364937729738",
            "extra": "mean: 5.077123286599999 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 443.0261670548064,
            "unit": "iter/sec",
            "range": "stddev: 0.0001376175289726909",
            "extra": "mean: 2.2572030149999933 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15938.63215327765,
            "unit": "iter/sec",
            "range": "stddev: 0.000004552714123756143",
            "extra": "mean: 62.74064112800034 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 13611.456628802023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000064569960386418905",
            "extra": "mean: 73.46752278400436 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15365.407940103201,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051091404931428015",
            "extra": "mean: 65.08125289599593 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "b8eae2b86aeccf8b822aff6f58f508fae3faad3d",
          "message": "Bump sphinx from 4.3.0 to 4.3.1\n\nBumps [sphinx](https://github.com/sphinx-doc/sphinx) from 4.3.0 to 4.3.1.\n- [Release notes](https://github.com/sphinx-doc/sphinx/releases)\n- [Changelog](https://github.com/sphinx-doc/sphinx/blob/4.x/CHANGES)\n- [Commits](https://github.com/sphinx-doc/sphinx/compare/v4.3.0...v4.3.1)\n\n---\nupdated-dependencies:\n- dependency-name: sphinx\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-11-29T10:01:15+01:00",
          "tree_id": "25b37535100f92e398212284e4a81dab18abb605",
          "url": "https://github.com/histolab/histolab/commit/b8eae2b86aeccf8b822aff6f58f508fae3faad3d"
        },
        "date": 1638176621211,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.153154146571599,
            "unit": "iter/sec",
            "range": "stddev: 0.0025134510705007037",
            "extra": "mean: 139.79846925000004 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 154.50822622125068,
            "unit": "iter/sec",
            "range": "stddev: 0.00007186645531975937",
            "extra": "mean: 6.472147305399995 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 518.4823120153309,
            "unit": "iter/sec",
            "range": "stddev: 0.00010910834065415686",
            "extra": "mean: 1.9287061039999969 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 26667.227705316684,
            "unit": "iter/sec",
            "range": "stddev: 5.811806121072945e-7",
            "extra": "mean: 37.499211055996966 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21065.44197534674,
            "unit": "iter/sec",
            "range": "stddev: 9.174756845639028e-7",
            "extra": "mean: 47.471114120003676 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24645.672741546972,
            "unit": "iter/sec",
            "range": "stddev: 7.588941122455062e-7",
            "extra": "mean: 40.57507419199919 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "cf25abb32b5110dc5dad7f486880f5ffc7fe499f",
          "message": "BICUBIC for upsampling and LANCZOS for downsampling",
          "timestamp": "2021-12-02T20:54:43+01:00",
          "tree_id": "82d36dc6c329139b825ffaab0e7f93f3472a2041",
          "url": "https://github.com/histolab/histolab/commit/cf25abb32b5110dc5dad7f486880f5ffc7fe499f"
        },
        "date": 1638475024253,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.699532869100068,
            "unit": "iter/sec",
            "range": "stddev: 0.005596218321719151",
            "extra": "mean: 114.94870070000047 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 266.9001716055354,
            "unit": "iter/sec",
            "range": "stddev: 0.00024407051796516608",
            "extra": "mean: 3.746719209600016 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 468.69598595131424,
            "unit": "iter/sec",
            "range": "stddev: 0.00012979195761607783",
            "extra": "mean: 2.133579185600013 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16513.138622600436,
            "unit": "iter/sec",
            "range": "stddev: 0.00000303824236296388",
            "extra": "mean: 60.55783959999985 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 14411.844731498815,
            "unit": "iter/sec",
            "range": "stddev: 0.000004840888769575557",
            "extra": "mean: 69.38736980800104 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16995.34663425438,
            "unit": "iter/sec",
            "range": "stddev: 0.000004391454750007401",
            "extra": "mean: 58.83963543200025 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "19722a070f97ecd5a72a6bae95b4e8f6a3937c6c",
          "message": "Remove deprecated indices argument and adapt to new output",
          "timestamp": "2021-12-06T16:23:18+01:00",
          "tree_id": "5a980401ad7b000fcec1035afadc87662b690628",
          "url": "https://github.com/histolab/histolab/commit/19722a070f97ecd5a72a6bae95b4e8f6a3937c6c"
        },
        "date": 1638804336418,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.241959544600908,
            "unit": "iter/sec",
            "range": "stddev: 0.001431328334118123",
            "extra": "mean: 121.3303698699994 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 176.97234258617715,
            "unit": "iter/sec",
            "range": "stddev: 0.00008194309056533478",
            "extra": "mean: 5.650600457600021 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 574.4080411681293,
            "unit": "iter/sec",
            "range": "stddev: 0.00009732429414256991",
            "extra": "mean: 1.7409227036000006 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29338.376193688186,
            "unit": "iter/sec",
            "range": "stddev: 7.39188474921293e-7",
            "extra": "mean: 34.08504933600034 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 23157.29615925221,
            "unit": "iter/sec",
            "range": "stddev: 1.6293537495090074e-7",
            "extra": "mean: 43.182934359997034 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26819.863684814576,
            "unit": "iter/sec",
            "range": "stddev: 8.839196744012409e-7",
            "extra": "mean: 37.285797263995846 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "192f08132bdadb6f7e28503924907e79042dadae",
          "message": "Use np.pad for conciseness",
          "timestamp": "2021-12-07T14:20:33+01:00",
          "tree_id": "fcf47077e03ba6e53719008e4edf04d52a1ebcec",
          "url": "https://github.com/histolab/histolab/commit/192f08132bdadb6f7e28503924907e79042dadae"
        },
        "date": 1638883393627,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.310919038441304,
            "unit": "iter/sec",
            "range": "stddev: 0.004802338851270709",
            "extra": "mean: 136.78170894000232 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 163.81234380738417,
            "unit": "iter/sec",
            "range": "stddev: 0.00010274488215098392",
            "extra": "mean: 6.104546072399967 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 531.4410244467995,
            "unit": "iter/sec",
            "range": "stddev: 0.00012491374736387629",
            "extra": "mean: 1.881676336599992 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27530.85115714995,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014991961544604994",
            "extra": "mean: 36.32288716000312 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21422.930825974843,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016298180891453904",
            "extra": "mean: 46.67895387999488 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25422.778161953043,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015307393392286183",
            "extra": "mean: 39.33480415199347 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "0f74c878d77e68595243143b3698657265ecf1af",
          "message": "release: prepare v0.4.1 release",
          "timestamp": "2021-12-07T15:54:52+01:00",
          "tree_id": "3366dbf311ae81a340986f588bcfa7f559fbeee6",
          "url": "https://github.com/histolab/histolab/commit/0f74c878d77e68595243143b3698657265ecf1af"
        },
        "date": 1638889042699,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.9537375449775904,
            "unit": "iter/sec",
            "range": "stddev: 0.0015905948149467835",
            "extra": "mean: 125.72705527999886 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 156.79986844425784,
            "unit": "iter/sec",
            "range": "stddev: 0.00010918885246434773",
            "extra": "mean: 6.377556371200012 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 581.6385269005054,
            "unit": "iter/sec",
            "range": "stddev: 0.00009994531473384835",
            "extra": "mean: 1.7192808828000126 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29999.386872526145,
            "unit": "iter/sec",
            "range": "stddev: 8.940182211070398e-8",
            "extra": "mean: 33.3340146000055 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 23203.772222324103,
            "unit": "iter/sec",
            "range": "stddev: 8.140775869730046e-8",
            "extra": "mean: 43.09644097600267 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 27257.337710473963,
            "unit": "iter/sec",
            "range": "stddev: 1.036436181789394e-7",
            "extra": "mean: 36.68736875999957 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "6578345f511ec277c7b2a33456fc89d4962069a8",
          "message": "Update docs",
          "timestamp": "2021-12-13T18:28:30+01:00",
          "tree_id": "134525cb58efa9dfe97d9f5538547913eed786aa",
          "url": "https://github.com/histolab/histolab/commit/6578345f511ec277c7b2a33456fc89d4962069a8"
        },
        "date": 1639416712094,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.720041559169977,
            "unit": "iter/sec",
            "range": "stddev: 0.001462025634368152",
            "extra": "mean: 129.53298144000087 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 144.95360179275963,
            "unit": "iter/sec",
            "range": "stddev: 0.00008844886733093272",
            "extra": "mean: 6.898759241800019 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 583.0814224701049,
            "unit": "iter/sec",
            "range": "stddev: 0.00009923518045517138",
            "extra": "mean: 1.715026343600016 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29222.742880554833,
            "unit": "iter/sec",
            "range": "stddev: 9.055447850360917e-8",
            "extra": "mean: 34.21992261600508 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22983.765744354667,
            "unit": "iter/sec",
            "range": "stddev: 1.0161319260547464e-7",
            "extra": "mean: 43.508971120001206 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26660.28103596661,
            "unit": "iter/sec",
            "range": "stddev: 9.083175792919281e-8",
            "extra": "mean: 37.508981943998606 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "2a5233d40309b97c1a1d7c318f772b55589fd05f",
          "message": "Update scikit-image requirement\n\nUpdates the requirements on [scikit-image](https://github.com/scikit-image/scikit-image) to permit the latest version.\n- [Release notes](https://github.com/scikit-image/scikit-image/releases)\n- [Changelog](https://github.com/scikit-image/scikit-image/blob/main/RELEASE.txt)\n- [Commits](https://github.com/scikit-image/scikit-image/compare/v0.19.0...v0.19.1)\n\n---\nupdated-dependencies:\n- dependency-name: scikit-image\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-12-16T10:26:50+01:00",
          "tree_id": "304cc7ab2aaf141526cab66336807080f6dbdcae",
          "url": "https://github.com/histolab/histolab/commit/2a5233d40309b97c1a1d7c318f772b55589fd05f"
        },
        "date": 1639646953406,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.078935194958389,
            "unit": "iter/sec",
            "range": "stddev: 0.0011290618878184125",
            "extra": "mean: 123.77868813999697 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 169.89716120245367,
            "unit": "iter/sec",
            "range": "stddev: 0.00003680238236312777",
            "extra": "mean: 5.885913530999937 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 514.7432013182945,
            "unit": "iter/sec",
            "range": "stddev: 0.00009623073902495713",
            "extra": "mean: 1.9427162854000357 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29740.150464969876,
            "unit": "iter/sec",
            "range": "stddev: 8.116530115954132e-8",
            "extra": "mean: 33.62457769599632 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 23060.705608034128,
            "unit": "iter/sec",
            "range": "stddev: 9.299840451264974e-8",
            "extra": "mean: 43.363807551994796 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 27024.897476795126,
            "unit": "iter/sec",
            "range": "stddev: 1.3309939315008618e-7",
            "extra": "mean: 37.00291558399613 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "8758cd8985626316cd69e4c6033d0b20266a4695",
          "message": "Specify large_image version",
          "timestamp": "2021-12-20T12:37:21+01:00",
          "tree_id": "c1e6120f144277d844b99eaac8e94e9cb4f7424a",
          "url": "https://github.com/histolab/histolab/commit/8758cd8985626316cd69e4c6033d0b20266a4695"
        },
        "date": 1640000366013,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.785912111984834,
            "unit": "iter/sec",
            "range": "stddev: 0.008817527978052605",
            "extra": "mean: 113.81857537999991 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 273.1207781227042,
            "unit": "iter/sec",
            "range": "stddev: 0.0005449958312223811",
            "extra": "mean: 3.661383827600011 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 475.7405715488757,
            "unit": "iter/sec",
            "range": "stddev: 0.00012969317389922725",
            "extra": "mean: 2.101985955799995 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15374.611746359264,
            "unit": "iter/sec",
            "range": "stddev: 0.000003954554057157636",
            "extra": "mean: 65.04229287200064 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 13959.168810548821,
            "unit": "iter/sec",
            "range": "stddev: 0.0000053985434571794275",
            "extra": "mean: 71.6375031759992 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16466.308361087926,
            "unit": "iter/sec",
            "range": "stddev: 0.000004286542533586409",
            "extra": "mean: 60.73006639199912 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "7ec27645d25e90e7ca63eab4a9b357ab70a411f1",
          "message": "Bump sphinx from 4.3.1 to 4.3.2\n\nBumps [sphinx](https://github.com/sphinx-doc/sphinx) from 4.3.1 to 4.3.2.\n- [Release notes](https://github.com/sphinx-doc/sphinx/releases)\n- [Changelog](https://github.com/sphinx-doc/sphinx/blob/4.x/CHANGES)\n- [Commits](https://github.com/sphinx-doc/sphinx/compare/v4.3.1...v4.3.2)\n\n---\nupdated-dependencies:\n- dependency-name: sphinx\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-12-20T13:15:01+01:00",
          "tree_id": "b0ee9bbe60acfc97093381478072e13599737622",
          "url": "https://github.com/histolab/histolab/commit/7ec27645d25e90e7ca63eab4a9b357ab70a411f1"
        },
        "date": 1640002617992,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.959877785176321,
            "unit": "iter/sec",
            "range": "stddev: 0.0058738144026342105",
            "extra": "mean: 125.63006958000031 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 166.0523341376163,
            "unit": "iter/sec",
            "range": "stddev: 0.00009166517951112619",
            "extra": "mean: 6.022197792000005 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 622.8461383382568,
            "unit": "iter/sec",
            "range": "stddev: 0.00008949232721808549",
            "extra": "mean: 1.6055329533999896 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 33908.37099272302,
            "unit": "iter/sec",
            "range": "stddev: 8.967622012296808e-8",
            "extra": "mean: 29.49124274399992 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 26262.59729758014,
            "unit": "iter/sec",
            "range": "stddev: 1.063972894315167e-7",
            "extra": "mean: 38.076965072001485 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 30920.095276105123,
            "unit": "iter/sec",
            "range": "stddev: 1.1636110578646075e-7",
            "extra": "mean: 32.34142686399787 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "05c020d53fbda9a53504bcd81126082a440a7aab",
          "message": "Update numpy requirement from <1.21.5,>=1.18.4 to >=1.18.4,<1.21.6\n\nUpdates the requirements on [numpy](https://github.com/numpy/numpy) to permit the latest version.\n- [Release notes](https://github.com/numpy/numpy/releases)\n- [Changelog](https://github.com/numpy/numpy/blob/main/doc/HOWTO_RELEASE.rst.txt)\n- [Commits](https://github.com/numpy/numpy/compare/v1.18.4...v1.21.5)\n\n---\nupdated-dependencies:\n- dependency-name: numpy\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2021-12-20T14:36:58+01:00",
          "tree_id": "3d0a4cfaaaccaaa1f611d8714f4c34ca02a493ad",
          "url": "https://github.com/histolab/histolab/commit/05c020d53fbda9a53504bcd81126082a440a7aab"
        },
        "date": 1640007533643,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.313984835105018,
            "unit": "iter/sec",
            "range": "stddev: 0.0036188504119770565",
            "extra": "mean: 136.72437426999963 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 224.12728893753618,
            "unit": "iter/sec",
            "range": "stddev: 0.00043397518326148484",
            "extra": "mean: 4.46175030599999 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 559.982125155528,
            "unit": "iter/sec",
            "range": "stddev: 0.00009308515263953973",
            "extra": "mean: 1.785771286400012 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32789.94100178439,
            "unit": "iter/sec",
            "range": "stddev: 1.60267327182853e-7",
            "extra": "mean: 30.497157647998847 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24282.841831166945,
            "unit": "iter/sec",
            "range": "stddev: 1.3729090426731677e-7",
            "extra": "mean: 41.18134141599944 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29272.73714690111,
            "unit": "iter/sec",
            "range": "stddev: 1.430021212893172e-7",
            "extra": "mean: 34.16147915999932 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "b71a1c632d33e9c0170e56543c39c5566cf7b324",
          "message": "Update setup.py",
          "timestamp": "2021-12-21T14:34:33+01:00",
          "tree_id": "1e8360598b6566a85b771d3dae472808d052a21e",
          "url": "https://github.com/histolab/histolab/commit/b71a1c632d33e9c0170e56543c39c5566cf7b324"
        },
        "date": 1640093805689,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.691844106046766,
            "unit": "iter/sec",
            "range": "stddev: 0.001075935036681726",
            "extra": "mean: 130.00783508000026 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 140.33091431388792,
            "unit": "iter/sec",
            "range": "stddev: 0.00006104473790695052",
            "extra": "mean: 7.126013572199994 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 569.5076553013986,
            "unit": "iter/sec",
            "range": "stddev: 0.00010222780354241277",
            "extra": "mean: 1.7559026480000057 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29738.054254707335,
            "unit": "iter/sec",
            "range": "stddev: 1.0596207986349559e-7",
            "extra": "mean: 33.62694786400516 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22743.04540555647,
            "unit": "iter/sec",
            "range": "stddev: 8.552453760399862e-8",
            "extra": "mean: 43.96948527199811 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 27154.428070753325,
            "unit": "iter/sec",
            "range": "stddev: 3.122568894132247e-7",
            "extra": "mean: 36.826406263995295 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "fa32c5872e76abacb6f1be9ea869f158f99667d3",
          "message": "tentative: fix broken test due to pillow release",
          "timestamp": "2022-01-18T10:02:26+01:00",
          "tree_id": "245061e364da02e43bac93f7a8a00b95638c81b1",
          "url": "https://github.com/histolab/histolab/commit/fa32c5872e76abacb6f1be9ea869f158f99667d3"
        },
        "date": 1642496682679,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.245075220116384,
            "unit": "iter/sec",
            "range": "stddev: 0.00408457013184286",
            "extra": "mean: 121.28452116000034 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 246.14550402369446,
            "unit": "iter/sec",
            "range": "stddev: 0.00020288656821857996",
            "extra": "mean: 4.062637682399991 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 447.06062402242367,
            "unit": "iter/sec",
            "range": "stddev: 0.0001134570090953027",
            "extra": "mean: 2.236833096599986 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15528.189797682733,
            "unit": "iter/sec",
            "range": "stddev: 0.000004951196644099822",
            "extra": "mean: 64.39900677600099 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12081.58336910081,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027795553818130007",
            "extra": "mean: 82.77060791200142 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14804.769869261369,
            "unit": "iter/sec",
            "range": "stddev: 0.000003252764438056172",
            "extra": "mean: 67.54579833599882 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "3be96351f128bfae9d5cd0145c0ecbe5ce8ac7cc",
          "message": "Add integration test for fix on pixel_overlap",
          "timestamp": "2022-01-18T10:53:17+01:00",
          "tree_id": "9e8e95789ca9f82fc3d8f1aae517682f195e149d",
          "url": "https://github.com/histolab/histolab/commit/3be96351f128bfae9d5cd0145c0ecbe5ce8ac7cc"
        },
        "date": 1642499704189,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.73909285594832,
            "unit": "iter/sec",
            "range": "stddev: 0.0008844400035676147",
            "extra": "mean: 129.21411056999958 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 307.30810880641457,
            "unit": "iter/sec",
            "range": "stddev: 0.000013237633779204142",
            "extra": "mean: 3.254063174199999 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 582.197973055634,
            "unit": "iter/sec",
            "range": "stddev: 0.00009804383749848355",
            "extra": "mean: 1.7176287899999976 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27751.346994047937,
            "unit": "iter/sec",
            "range": "stddev: 6.075613704899012e-7",
            "extra": "mean: 36.034286919999886 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21219.53705605571,
            "unit": "iter/sec",
            "range": "stddev: 1.0013105009381722e-7",
            "extra": "mean: 47.12638156800017 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25142.603987236354,
            "unit": "iter/sec",
            "range": "stddev: 1.2361605896941797e-7",
            "extra": "mean: 39.773127735999424 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "e47fd6a856ba7cb558ef9256b1a57d6f3b86ca74",
          "message": "Bump sphinx from 4.3.2 to 4.4.0\n\nBumps [sphinx](https://github.com/sphinx-doc/sphinx) from 4.3.2 to 4.4.0.\n- [Release notes](https://github.com/sphinx-doc/sphinx/releases)\n- [Changelog](https://github.com/sphinx-doc/sphinx/blob/4.x/CHANGES)\n- [Commits](https://github.com/sphinx-doc/sphinx/compare/v4.3.2...v4.4.0)\n\n---\nupdated-dependencies:\n- dependency-name: sphinx\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-01-20T15:38:21+01:00",
          "tree_id": "bea755e58c21140324fbe520c9804cc464557845",
          "url": "https://github.com/histolab/histolab/commit/e47fd6a856ba7cb558ef9256b1a57d6f3b86ca74"
        },
        "date": 1642689633024,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.657218251706395,
            "unit": "iter/sec",
            "range": "stddev: 0.004858559586099162",
            "extra": "mean: 130.5957290400012 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 263.1498275603291,
            "unit": "iter/sec",
            "range": "stddev: 0.00028502933065410995",
            "extra": "mean: 3.8001164935999894 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 455.8346232767156,
            "unit": "iter/sec",
            "range": "stddev: 0.00011600799472247419",
            "extra": "mean: 2.1937780697999925 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 14917.18490540301,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017841195696488598",
            "extra": "mean: 67.03677713599973 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12262.62312022983,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025835788838302497",
            "extra": "mean: 81.54862056799948 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14496.849246144962,
            "unit": "iter/sec",
            "range": "stddev: 0.000002859904440130107",
            "extra": "mean: 68.98050624799885 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "849e88dc168bef685377f9db2b416d97ce9ac00a",
          "message": "Update numpy requirement from <1.22.2,>=1.18.4 to >=1.18.4,<1.22.3\n\nUpdates the requirements on [numpy](https://github.com/numpy/numpy) to permit the latest version.\n- [Release notes](https://github.com/numpy/numpy/releases)\n- [Changelog](https://github.com/numpy/numpy/blob/main/doc/HOWTO_RELEASE.rst.txt)\n- [Commits](https://github.com/numpy/numpy/compare/v1.18.4...v1.22.2)\n\n---\nupdated-dependencies:\n- dependency-name: numpy\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-02-08T16:23:07+01:00",
          "tree_id": "80801b667a69e0dfb9125bc578c402ffcc3f028c",
          "url": "https://github.com/histolab/histolab/commit/849e88dc168bef685377f9db2b416d97ce9ac00a"
        },
        "date": 1644333894685,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.121289697031342,
            "unit": "iter/sec",
            "range": "stddev: 0.001398981841940042",
            "extra": "mean: 123.13315215999992 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 307.3080889554913,
            "unit": "iter/sec",
            "range": "stddev: 0.000004767365972804473",
            "extra": "mean: 3.254063384399993 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 567.7697941586438,
            "unit": "iter/sec",
            "range": "stddev: 0.0001419684534086198",
            "extra": "mean: 1.7612772118000066 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27575.92199202814,
            "unit": "iter/sec",
            "range": "stddev: 8.138672901037839e-7",
            "extra": "mean: 36.263520048000146 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21255.04816554897,
            "unit": "iter/sec",
            "range": "stddev: 9.869900636880558e-8",
            "extra": "mean: 47.04764685599912 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25225.723980785566,
            "unit": "iter/sec",
            "range": "stddev: 1.2064522449474308e-7",
            "extra": "mean: 39.64207333600018 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "8d29f8e1af3aae34baada4e89c007b4ae544ad4c",
          "message": "Update scipy requirement from <1.7.4,>=1.5.0 to >=1.5.0,<1.8.1\n\nUpdates the requirements on [scipy](https://github.com/scipy/scipy) to permit the latest version.\n- [Release notes](https://github.com/scipy/scipy/releases)\n- [Commits](https://github.com/scipy/scipy/compare/v1.5.0...v1.8.0)\n\n---\nupdated-dependencies:\n- dependency-name: scipy\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-02-08T19:52:17+01:00",
          "tree_id": "c8491e0f938dab4252a6ca6ecf01b939ff81cf27",
          "url": "https://github.com/histolab/histolab/commit/8d29f8e1af3aae34baada4e89c007b4ae544ad4c"
        },
        "date": 1644346470608,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.2062307273669095,
            "unit": "iter/sec",
            "range": "stddev: 0.002740458241717284",
            "extra": "mean: 138.76880131000064 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 239.85451077397164,
            "unit": "iter/sec",
            "range": "stddev: 0.0004306787920663031",
            "extra": "mean: 4.169194053399963 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 464.48748244583453,
            "unit": "iter/sec",
            "range": "stddev: 0.00016891608269973936",
            "extra": "mean: 2.152910547199974 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15852.101682965693,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011098944315684908",
            "extra": "mean: 63.08311793600069 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12908.72557647938,
            "unit": "iter/sec",
            "range": "stddev: 0.000002157831366764384",
            "extra": "mean: 77.46698107999691 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15608.64539013159,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015782041785538567",
            "extra": "mean: 64.0670586719998 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "marcoburro98@gmail.com",
            "name": "Marco Burro",
            "username": "schiism"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "db5092f386cf4f6134b40c3a13a06c969a612d4c",
          "message": "add reference to gitpod on CONTRIBUTING.md",
          "timestamp": "2022-02-17T21:50:31+01:00",
          "tree_id": "021d7c0466a1696215b8b5104d960114adf605bd",
          "url": "https://github.com/histolab/histolab/commit/db5092f386cf4f6134b40c3a13a06c969a612d4c"
        },
        "date": 1645131150985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 9.15686020445356,
            "unit": "iter/sec",
            "range": "stddev: 0.006793271281227284",
            "extra": "mean: 109.20773908000001 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 392.7483751277489,
            "unit": "iter/sec",
            "range": "stddev: 0.00027874088376015455",
            "extra": "mean: 2.546159483599979 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 495.85904467228505,
            "unit": "iter/sec",
            "range": "stddev: 0.00007584647809228544",
            "extra": "mean: 2.0167021470000694 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15189.046735510474,
            "unit": "iter/sec",
            "range": "stddev: 0.000003030717151996828",
            "extra": "mean: 65.83691639200106 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 13484.739887792306,
            "unit": "iter/sec",
            "range": "stddev: 0.00000502477653563866",
            "extra": "mean: 74.15790058399989 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16186.353138722061,
            "unit": "iter/sec",
            "range": "stddev: 0.00000387104913088725",
            "extra": "mean: 61.780438832001884 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "df6913725790a0d32948a09bdeefb5933178f5d8",
          "message": "Update scikit-image requirement\n\nUpdates the requirements on [scikit-image](https://github.com/scikit-image/scikit-image) to permit the latest version.\n- [Release notes](https://github.com/scikit-image/scikit-image/releases)\n- [Changelog](https://github.com/scikit-image/scikit-image/blob/main/RELEASE.txt)\n- [Commits](https://github.com/scikit-image/scikit-image/compare/v0.19.0...v0.19.2)\n\n---\nupdated-dependencies:\n- dependency-name: scikit-image\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-02-20T17:51:18+01:00",
          "tree_id": "46abacdddec0ad6d9477c9449100347325f0eb30",
          "url": "https://github.com/histolab/histolab/commit/df6913725790a0d32948a09bdeefb5933178f5d8"
        },
        "date": 1645376006337,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.67898847793224,
            "unit": "iter/sec",
            "range": "stddev: 0.0014367203052934646",
            "extra": "mean: 130.22548515000182 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 292.6388955702164,
            "unit": "iter/sec",
            "range": "stddev: 0.000035539234720741934",
            "extra": "mean: 3.417180747800006 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 523.064627762054,
            "unit": "iter/sec",
            "range": "stddev: 0.00015372106062942783",
            "extra": "mean: 1.9118096444000172 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 26610.679420772198,
            "unit": "iter/sec",
            "range": "stddev: 1.108303432774014e-7",
            "extra": "mean: 37.57889771199916 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20923.55868954766,
            "unit": "iter/sec",
            "range": "stddev: 1.0476541748959423e-7",
            "extra": "mean: 47.793017184000746 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24526.795537268994,
            "unit": "iter/sec",
            "range": "stddev: 1.1010372217824493e-7",
            "extra": "mean: 40.77173467200305 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "34389aad3249f8c54f8c7330a6c0b10c7aa0b6a0",
          "message": "remove meaningless else",
          "timestamp": "2022-02-25T14:25:13+01:00",
          "tree_id": "356b1d0b4dd979b6d7965a43460151a5bb5621df",
          "url": "https://github.com/histolab/histolab/commit/34389aad3249f8c54f8c7330a6c0b10c7aa0b6a0"
        },
        "date": 1645795667043,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.629720760721318,
            "unit": "iter/sec",
            "range": "stddev: 0.005838895899297678",
            "extra": "mean: 131.06639565999785 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 245.53907702339265,
            "unit": "iter/sec",
            "range": "stddev: 0.00018611407055561157",
            "extra": "mean: 4.072671495400016 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 408.9354663593449,
            "unit": "iter/sec",
            "range": "stddev: 0.0001921639504944485",
            "extra": "mean: 2.445373615799974 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 14881.61592031616,
            "unit": "iter/sec",
            "range": "stddev: 0.000005983606944451792",
            "extra": "mean: 67.19700369600423 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 11503.094031051523,
            "unit": "iter/sec",
            "range": "stddev: 0.000007460126613436209",
            "extra": "mean: 86.9331327119985 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 13671.82399768733,
            "unit": "iter/sec",
            "range": "stddev: 0.0000060417300343136525",
            "extra": "mean: 73.14313000000266 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "7b16f176ace9d3fa10653237a9e3db55c9657a90",
          "message": "Update numpy requirement from <1.22.3,>=1.18.4 to >=1.18.4,<1.22.4\n\nUpdates the requirements on [numpy](https://github.com/numpy/numpy) to permit the latest version.\n- [Release notes](https://github.com/numpy/numpy/releases)\n- [Changelog](https://github.com/numpy/numpy/blob/main/doc/HOWTO_RELEASE.rst.txt)\n- [Commits](https://github.com/numpy/numpy/compare/v1.18.4...v1.22.3)\n\n---\nupdated-dependencies:\n- dependency-name: numpy\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-03-08T12:44:03+01:00",
          "tree_id": "e2ee2f79a0c2ea778148aad2655c477acb111a5c",
          "url": "https://github.com/histolab/histolab/commit/7b16f176ace9d3fa10653237a9e3db55c9657a90"
        },
        "date": 1646739978371,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.174374508292542,
            "unit": "iter/sec",
            "range": "stddev: 0.0014536429062921088",
            "extra": "mean: 139.38497340000083 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 186.00501919239733,
            "unit": "iter/sec",
            "range": "stddev: 0.000023379277614450035",
            "extra": "mean: 5.376199009800018 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 488.34441415474686,
            "unit": "iter/sec",
            "range": "stddev: 0.00018080447422545186",
            "extra": "mean: 2.047735104600008 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27420.837380073288,
            "unit": "iter/sec",
            "range": "stddev: 1.1025585830904264e-7",
            "extra": "mean: 36.468616407998525 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21293.90352370154,
            "unit": "iter/sec",
            "range": "stddev: 1.6612795890371245e-7",
            "extra": "mean: 46.961798192000515 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25179.638125377274,
            "unit": "iter/sec",
            "range": "stddev: 1.0354992170861992e-7",
            "extra": "mean: 39.71462953600394 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "76f8622ad6faf61fb5114d476ae72aa12b126512",
          "message": "Bump sphinx from 4.4.0 to 4.5.0\n\nBumps [sphinx](https://github.com/sphinx-doc/sphinx) from 4.4.0 to 4.5.0.\n- [Release notes](https://github.com/sphinx-doc/sphinx/releases)\n- [Changelog](https://github.com/sphinx-doc/sphinx/blob/4.x/CHANGES)\n- [Commits](https://github.com/sphinx-doc/sphinx/compare/v4.4.0...v4.5.0)\n\n---\nupdated-dependencies:\n- dependency-name: sphinx\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-03-28T08:48:35+02:00",
          "tree_id": "e2010527a0266d6c33b7bf2474c49cd7215a5a83",
          "url": "https://github.com/histolab/histolab/commit/76f8622ad6faf61fb5114d476ae72aa12b126512"
        },
        "date": 1648450253882,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.61173846061455,
            "unit": "iter/sec",
            "range": "stddev: 0.00207830663524206",
            "extra": "mean: 151.2461519699997 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 211.45901442911855,
            "unit": "iter/sec",
            "range": "stddev: 0.00005106152678472715",
            "extra": "mean: 4.729048807399988 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 508.5964923501427,
            "unit": "iter/sec",
            "range": "stddev: 0.00008043118449583539",
            "extra": "mean: 1.9661952353999939 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 23544.32263573973,
            "unit": "iter/sec",
            "range": "stddev: 3.9024252005451754e-7",
            "extra": "mean: 42.47308429600025 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 18069.773485374182,
            "unit": "iter/sec",
            "range": "stddev: 6.490622387366112e-7",
            "extra": "mean: 55.341036832000555 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 21631.535987374682,
            "unit": "iter/sec",
            "range": "stddev: 6.396040095294522e-7",
            "extra": "mean: 46.228802272000166 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "ced1239378d1d5205357929f18d9bf9291e1c1a9",
          "message": "Fix power operators according to new black version (https://github.com/psf/black/pull/2726)",
          "timestamp": "2022-04-01T13:30:39+02:00",
          "tree_id": "6567eb7be98b7fb8a2be0e4ea0c75cb87dcaf899",
          "url": "https://github.com/histolab/histolab/commit/ced1239378d1d5205357929f18d9bf9291e1c1a9"
        },
        "date": 1648812766157,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.494408177179219,
            "unit": "iter/sec",
            "range": "stddev: 0.0011779918881597848",
            "extra": "mean: 133.43281769 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 201.62280784868267,
            "unit": "iter/sec",
            "range": "stddev: 0.00004818691090009748",
            "extra": "mean: 4.959756342399998 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 581.575544000888,
            "unit": "iter/sec",
            "range": "stddev: 0.00006919805642283174",
            "extra": "mean: 1.7194670757999972 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27090.944423094643,
            "unit": "iter/sec",
            "range": "stddev: 1.1394663806771265e-7",
            "extra": "mean: 36.91270353600203 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21256.1072596747,
            "unit": "iter/sec",
            "range": "stddev: 1.1419068583097704e-7",
            "extra": "mean: 47.04530268800045 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24946.53291922932,
            "unit": "iter/sec",
            "range": "stddev: 2.2188759026781522e-7",
            "extra": "mean: 40.08573068000078 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "20790ffc01d9962523477642fd01626a9ea18b7f",
          "message": "Address CR comments",
          "timestamp": "2022-04-01T15:52:14+02:00",
          "tree_id": "1ca7629689b8ccebd8d932aeb19e69ff2c73ad93",
          "url": "https://github.com/histolab/histolab/commit/20790ffc01d9962523477642fd01626a9ea18b7f"
        },
        "date": 1648821271477,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.633611626436642,
            "unit": "iter/sec",
            "range": "stddev: 0.006252713475063434",
            "extra": "mean: 130.9995908799985 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 252.46494094599512,
            "unit": "iter/sec",
            "range": "stddev: 0.00029352461319419586",
            "extra": "mean: 3.960946008000019 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 453.3627607643696,
            "unit": "iter/sec",
            "range": "stddev: 0.00013003117118657803",
            "extra": "mean: 2.205739170800001 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15342.795981643523,
            "unit": "iter/sec",
            "range": "stddev: 0.000002224060678733053",
            "extra": "mean: 65.17716856799916 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12338.605436693084,
            "unit": "iter/sec",
            "range": "stddev: 0.000004111676684789515",
            "extra": "mean: 81.04643633600244 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14584.023036576096,
            "unit": "iter/sec",
            "range": "stddev: 0.00000343637240723677",
            "extra": "mean: 68.56818571199756 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "48959dc6a7eeb32df6930bb2b42db962a322e8e2",
          "message": "Fix bug of thumbnail dimensions when using large_image",
          "timestamp": "2022-04-01T16:31:31+02:00",
          "tree_id": "d1d866005e1b9786e196213c599d900e3b6b2993",
          "url": "https://github.com/histolab/histolab/commit/48959dc6a7eeb32df6930bb2b42db962a322e8e2"
        },
        "date": 1648823625721,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.892020499822751,
            "unit": "iter/sec",
            "range": "stddev: 0.006147358216764872",
            "extra": "mean: 126.71026387000126 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 312.6720930589489,
            "unit": "iter/sec",
            "range": "stddev: 0.00048282741039450523",
            "extra": "mean: 3.1982387370000027 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 455.28093548378854,
            "unit": "iter/sec",
            "range": "stddev: 0.0001017211534920992",
            "extra": "mean: 2.1964460227999325 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 14977.284994268823,
            "unit": "iter/sec",
            "range": "stddev: 0.000003422184199453868",
            "extra": "mean: 66.76777535999736 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 13026.802317283975,
            "unit": "iter/sec",
            "range": "stddev: 0.0000040545195891521946",
            "extra": "mean: 76.76480963199992 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14682.921495691979,
            "unit": "iter/sec",
            "range": "stddev: 0.000004308818310144001",
            "extra": "mean: 68.10633703200028 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "78854423df04c95c7168d03a95ae8665e3e957d8",
          "message": "release: prepare v0.5.0 release",
          "timestamp": "2022-04-01T23:23:53+02:00",
          "tree_id": "fbce79653cb2f0132e4879c635e45241b0606c49",
          "url": "https://github.com/histolab/histolab/commit/78854423df04c95c7168d03a95ae8665e3e957d8"
        },
        "date": 1648848372113,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.759877775940604,
            "unit": "iter/sec",
            "range": "stddev: 0.0012639533206383364",
            "extra": "mean: 128.86800912000012 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 252.5879534917775,
            "unit": "iter/sec",
            "range": "stddev: 0.000034523484680451665",
            "extra": "mean: 3.959016992599976 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 596.1176108514026,
            "unit": "iter/sec",
            "range": "stddev: 0.00006711150584378845",
            "extra": "mean: 1.677521317599985 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27068.24582018771,
            "unit": "iter/sec",
            "range": "stddev: 7.731765358035376e-8",
            "extra": "mean: 36.94365740000012 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21294.308727634867,
            "unit": "iter/sec",
            "range": "stddev: 1.1096190734204157e-7",
            "extra": "mean: 46.96090456800039 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24861.877636031295,
            "unit": "iter/sec",
            "range": "stddev: 1.0511264565846801e-7",
            "extra": "mean: 40.22222354399901 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "dc9b2a105a8f19eca0bb3132d089c3bf0174d4ed",
          "message": "Correct/add license in every source file",
          "timestamp": "2022-04-11T13:41:56+02:00",
          "tree_id": "e425f7940a5620fa1b8a4bda8247453078e7a1e2",
          "url": "https://github.com/histolab/histolab/commit/dc9b2a105a8f19eca0bb3132d089c3bf0174d4ed"
        },
        "date": 1649677426620,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.430403441585067,
            "unit": "iter/sec",
            "range": "stddev: 0.0012066796488282878",
            "extra": "mean: 134.58219433999915 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 304.49452871247274,
            "unit": "iter/sec",
            "range": "stddev: 0.0001317947972037836",
            "extra": "mean: 3.2841312591999867 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 572.8576741652965,
            "unit": "iter/sec",
            "range": "stddev: 0.00005790121415709654",
            "extra": "mean: 1.7456342911999685 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29384.744548270508,
            "unit": "iter/sec",
            "range": "stddev: 1.230910247919608e-7",
            "extra": "mean: 34.03126402400039 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21855.407042292787,
            "unit": "iter/sec",
            "range": "stddev: 5.670110950099744e-7",
            "extra": "mean: 45.75526770400029 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26978.249261564633,
            "unit": "iter/sec",
            "range": "stddev: 1.225520916767509e-7",
            "extra": "mean: 37.06689749600173 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "35cdbff1b89a9e0957113b24b5cf301353f2de1e",
          "message": "release: prepare v0.5.1 release",
          "timestamp": "2022-04-11T14:07:02+02:00",
          "tree_id": "14f4ac8da9f1a160cae4391d924b6da9b89636c9",
          "url": "https://github.com/histolab/histolab/commit/35cdbff1b89a9e0957113b24b5cf301353f2de1e"
        },
        "date": 1649678965101,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.821294611342029,
            "unit": "iter/sec",
            "range": "stddev: 0.0014181970284854748",
            "extra": "mean: 127.85607110999919 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 244.15320089266504,
            "unit": "iter/sec",
            "range": "stddev: 0.00006009127547691112",
            "extra": "mean: 4.095789022400001 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 583.943751615325,
            "unit": "iter/sec",
            "range": "stddev: 0.00007903924251852992",
            "extra": "mean: 1.7124937071999937 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27633.902496936356,
            "unit": "iter/sec",
            "range": "stddev: 8.096599223162517e-8",
            "extra": "mean: 36.18743317600058 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21421.924189581307,
            "unit": "iter/sec",
            "range": "stddev: 1.1410249609151162e-7",
            "extra": "mean: 46.68114736800146 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25560.419774553673,
            "unit": "iter/sec",
            "range": "stddev: 1.1903117663195347e-7",
            "extra": "mean: 39.12298815199961 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18ac2ee69c537b9cd60d82fda4fc2aeadad80e47",
          "message": "Update README.md",
          "timestamp": "2022-04-16T11:50:49+02:00",
          "tree_id": "134b51fb040e30fd8e96406f67411cf945fe66df",
          "url": "https://github.com/histolab/histolab/commit/18ac2ee69c537b9cd60d82fda4fc2aeadad80e47"
        },
        "date": 1650102759445,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.779779531561642,
            "unit": "iter/sec",
            "range": "stddev: 0.0013369328348794593",
            "extra": "mean: 128.53834687000045 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 247.08496849629384,
            "unit": "iter/sec",
            "range": "stddev: 0.00003729862360444361",
            "extra": "mean: 4.047190754200005 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 585.3270142131272,
            "unit": "iter/sec",
            "range": "stddev: 0.00006790743033509842",
            "extra": "mean: 1.7084466899999995 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27134.965702202484,
            "unit": "iter/sec",
            "range": "stddev: 0.000001059218340996516",
            "extra": "mean: 36.852819752001096 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21149.8854740118,
            "unit": "iter/sec",
            "range": "stddev: 7.348729671253514e-7",
            "extra": "mean: 47.28157990400291 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25271.689218628526,
            "unit": "iter/sec",
            "range": "stddev: 1.076982538668427e-7",
            "extra": "mean: 39.56997062400046 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "6300273c717a71d7bdaadd30776fe8ea646b703c",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2022-04-17T16:57:14+02:00",
          "tree_id": "90119080a1ed6e2ddd6e419427ca8bcebe72e7b0",
          "url": "https://github.com/histolab/histolab/commit/6300273c717a71d7bdaadd30776fe8ea646b703c"
        },
        "date": 1650207571917,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.060967280280956,
            "unit": "iter/sec",
            "range": "stddev: 0.005524186308718107",
            "extra": "mean: 141.62365583999843 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 270.4160571796553,
            "unit": "iter/sec",
            "range": "stddev: 0.00023924086692302048",
            "extra": "mean: 3.6980052532000114 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 444.32335499502653,
            "unit": "iter/sec",
            "range": "stddev: 0.00009739248152719291",
            "extra": "mean: 2.2506131823999964 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 14555.55731240472,
            "unit": "iter/sec",
            "range": "stddev: 0.00000453761850797074",
            "extra": "mean: 68.70228178400066 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12144.786924446307,
            "unit": "iter/sec",
            "range": "stddev: 0.000004200860929170503",
            "extra": "mean: 82.33985546400118 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14070.189328569195,
            "unit": "iter/sec",
            "range": "stddev: 0.000004309615255016075",
            "extra": "mean: 71.0722490399985 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "e6e330207d63a9ddcb5113c8c467705edea31382",
          "message": "fix hash",
          "timestamp": "2022-04-17T19:01:55+02:00",
          "tree_id": "d0d736a9ea07e26ab31d74e123dd48ec9059a8e3",
          "url": "https://github.com/histolab/histolab/commit/e6e330207d63a9ddcb5113c8c467705edea31382"
        },
        "date": 1650215027640,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 9.157114470781238,
            "unit": "iter/sec",
            "range": "stddev: 0.005798703551594626",
            "extra": "mean: 109.204706700001 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 412.13032075080673,
            "unit": "iter/sec",
            "range": "stddev: 0.000211528172642747",
            "extra": "mean: 2.426416960000006 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 497.13078684542927,
            "unit": "iter/sec",
            "range": "stddev: 0.00008066475907671751",
            "extra": "mean: 2.011543091799956 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16553.92261868275,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022319938964267516",
            "extra": "mean: 60.40864289599858 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 14669.16076494734,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043392963396700256",
            "extra": "mean: 68.17022568799894 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 17182.607330099414,
            "unit": "iter/sec",
            "range": "stddev: 0.000003294994351692697",
            "extra": "mean: 58.19838519199948 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "57cc8dcb6876465d10aa3a38d474f3809bbb44cb",
          "message": "fix flak8 eredicate",
          "timestamp": "2022-04-22T09:58:29+02:00",
          "tree_id": "a56ff5146e879aee2129353c43af729d5a968981",
          "url": "https://github.com/histolab/histolab/commit/57cc8dcb6876465d10aa3a38d474f3809bbb44cb"
        },
        "date": 1650614431433,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.230851818009997,
            "unit": "iter/sec",
            "range": "stddev: 0.0012282945803544143",
            "extra": "mean: 138.29629277000038 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 192.28258117140078,
            "unit": "iter/sec",
            "range": "stddev: 0.00003279249091640254",
            "extra": "mean: 5.200679093799971 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 561.31099016211,
            "unit": "iter/sec",
            "range": "stddev: 0.00007082329181147159",
            "extra": "mean: 1.7815435962000208 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27429.16618066581,
            "unit": "iter/sec",
            "range": "stddev: 4.7327609959627556e-7",
            "extra": "mean: 36.45754280000233 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21340.73299473569,
            "unit": "iter/sec",
            "range": "stddev: 1.0767738872434585e-7",
            "extra": "mean: 46.8587466159986 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25573.222059048687,
            "unit": "iter/sec",
            "range": "stddev: 1.7348450241303416e-7",
            "extra": "mean: 39.10340267999845 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "d6792ca82bd469d42a5d75c763b548416845abd0",
          "message": "change logo",
          "timestamp": "2022-04-22T10:49:02+02:00",
          "tree_id": "b9a4d8fe92ae3e694a8b2e346d4790f8ae2bc83b",
          "url": "https://github.com/histolab/histolab/commit/d6792ca82bd469d42a5d75c763b548416845abd0"
        },
        "date": 1650617464148,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.34589504147897,
            "unit": "iter/sec",
            "range": "stddev: 0.0010479076778832112",
            "extra": "mean: 136.13045032000173 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 210.41615941274878,
            "unit": "iter/sec",
            "range": "stddev: 0.0001356425779682146",
            "extra": "mean: 4.752486704400002 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 578.6801476040166,
            "unit": "iter/sec",
            "range": "stddev: 0.00006999211081022667",
            "extra": "mean: 1.7280703409999945 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27594.350459047695,
            "unit": "iter/sec",
            "range": "stddev: 9.44981815931031e-8",
            "extra": "mean: 36.239302007999186 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21260.016883161556,
            "unit": "iter/sec",
            "range": "stddev: 1.02158984231932e-7",
            "extra": "mean: 47.03665126399892 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25553.63328451642,
            "unit": "iter/sec",
            "range": "stddev: 1.763718265524577e-7",
            "extra": "mean: 39.1333783679961 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "8229d934c23dd0db89ab24ee3dc6ae6e905a3e92",
          "message": "Change order of anaconda badge",
          "timestamp": "2022-04-27T18:24:45+02:00",
          "tree_id": "cfa2f1edad1155bc616bb860d1f413fab8a343ae",
          "url": "https://github.com/histolab/histolab/commit/8229d934c23dd0db89ab24ee3dc6ae6e905a3e92"
        },
        "date": 1651076850131,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.3282816117662355,
            "unit": "iter/sec",
            "range": "stddev: 0.001224943998667649",
            "extra": "mean: 136.45763809000016 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 208.23757415690244,
            "unit": "iter/sec",
            "range": "stddev: 0.00012105494819648476",
            "extra": "mean: 4.802207306000031 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 593.5968131935522,
            "unit": "iter/sec",
            "range": "stddev: 0.00006870166172075574",
            "extra": "mean: 1.6846451627999783 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27872.714703049154,
            "unit": "iter/sec",
            "range": "stddev: 9.69013509170173e-8",
            "extra": "mean: 35.877380824000056 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21362.121844739755,
            "unit": "iter/sec",
            "range": "stddev: 1.2595051197917127e-7",
            "extra": "mean: 46.81182923999859 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25667.401626154566,
            "unit": "iter/sec",
            "range": "stddev: 1.2847018945167077e-7",
            "extra": "mean: 38.959923352000715 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "43ce6ab897e9c065349f4f6e3b9d1f1b8a436b06",
          "message": "Update README.md",
          "timestamp": "2022-04-29T09:40:34+02:00",
          "tree_id": "2797a351bc14f3edbf62f5666478f7bfa46134c5",
          "url": "https://github.com/histolab/histolab/commit/43ce6ab897e9c065349f4f6e3b9d1f1b8a436b06"
        },
        "date": 1651218153159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.4135927446622585,
            "unit": "iter/sec",
            "range": "stddev: 0.0009678211748883334",
            "extra": "mean: 134.88736627999884 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 229.5749861380342,
            "unit": "iter/sec",
            "range": "stddev: 0.00005497078503874631",
            "extra": "mean: 4.355875249399952 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 596.8332637229018,
            "unit": "iter/sec",
            "range": "stddev: 0.00006960754498772907",
            "extra": "mean: 1.6755098296000484 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27422.34982177439,
            "unit": "iter/sec",
            "range": "stddev: 7.735159212091875e-8",
            "extra": "mean: 36.46660503200064 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21563.15845999225,
            "unit": "iter/sec",
            "range": "stddev: 9.982367200947278e-8",
            "extra": "mean: 46.37539541599972 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25597.971286804608,
            "unit": "iter/sec",
            "range": "stddev: 9.345362659508295e-8",
            "extra": "mean: 39.06559581600459 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "1dffe88aa04022567c70bbb78f96a860d73a599b",
          "message": "Fix expectation with correct result",
          "timestamp": "2022-05-06T17:05:19+02:00",
          "tree_id": "33dc4ee9a763861ff2a8bef4553355740e77a33a",
          "url": "https://github.com/histolab/histolab/commit/1dffe88aa04022567c70bbb78f96a860d73a599b"
        },
        "date": 1651849677485,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.949833200852771,
            "unit": "iter/sec",
            "range": "stddev: 0.005217286973104948",
            "extra": "mean: 125.7888027000027 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 257.3016324460472,
            "unit": "iter/sec",
            "range": "stddev: 0.0001579748280763562",
            "extra": "mean: 3.886489139200029 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 470.5131083221909,
            "unit": "iter/sec",
            "range": "stddev: 0.00004033685268289069",
            "extra": "mean: 2.1253392993999967 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16058.16745320385,
            "unit": "iter/sec",
            "range": "stddev: 0.000004258491859619745",
            "extra": "mean: 62.27360643200199 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12532.490617276431,
            "unit": "iter/sec",
            "range": "stddev: 0.000005972056463587046",
            "extra": "mean: 79.79259913599844 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14996.878568291173,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050102484318118946",
            "extra": "mean: 66.68054258399889 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "1282f2cd14b2b777c2143593b9967a41a4fdc21e",
          "message": "Update scipy requirement from <1.8.1,>=1.5.0 to >=1.5.0,<1.8.2\n\nUpdates the requirements on [scipy](https://github.com/scipy/scipy) to permit the latest version.\n- [Release notes](https://github.com/scipy/scipy/releases)\n- [Commits](https://github.com/scipy/scipy/compare/v1.5.0...v1.8.1)\n\n---\nupdated-dependencies:\n- dependency-name: scipy\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-05-19T11:51:53+02:00",
          "tree_id": "f44efdb6ea8d84286a00a456d539443b722e1d6b",
          "url": "https://github.com/histolab/histolab/commit/1282f2cd14b2b777c2143593b9967a41a4fdc21e"
        },
        "date": 1652954040339,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.213802089513492,
            "unit": "iter/sec",
            "range": "stddev: 0.0009549675784469337",
            "extra": "mean: 138.6231542799979 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 197.20308080531785,
            "unit": "iter/sec",
            "range": "stddev: 0.00009830538451449875",
            "extra": "mean: 5.070914693200034 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 631.8018115868513,
            "unit": "iter/sec",
            "range": "stddev: 0.000010939841916792442",
            "extra": "mean: 1.582774822199974 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27893.84940979486,
            "unit": "iter/sec",
            "range": "stddev: 9.836832680124534e-8",
            "extra": "mean: 35.850197128003856 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21521.20991568458,
            "unit": "iter/sec",
            "range": "stddev: 1.171207912946982e-7",
            "extra": "mean: 46.465789048003444 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25832.427672877402,
            "unit": "iter/sec",
            "range": "stddev: 1.4714855175689281e-7",
            "extra": "mean: 38.71103454399463 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "7179672b6457925e8524799b76a21b679cd65546",
          "message": "Update numpy requirement from <1.22.4,>=1.18.4 to >=1.18.4,<1.22.5\n\nUpdates the requirements on [numpy](https://github.com/numpy/numpy) to permit the latest version.\n- [Release notes](https://github.com/numpy/numpy/releases)\n- [Changelog](https://github.com/numpy/numpy/blob/main/doc/HOWTO_RELEASE.rst.txt)\n- [Commits](https://github.com/numpy/numpy/compare/v1.18.4...v1.22.4)\n\n---\nupdated-dependencies:\n- dependency-name: numpy\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-05-26T14:40:27+02:00",
          "tree_id": "2bcc2a3cd446a6cbfb4b981154a7f3bc9bf38acf",
          "url": "https://github.com/histolab/histolab/commit/7179672b6457925e8524799b76a21b679cd65546"
        },
        "date": 1653568956821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.475664846792379,
            "unit": "iter/sec",
            "range": "stddev: 0.007016841525044278",
            "extra": "mean: 117.98484462000062 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 339.90775687985564,
            "unit": "iter/sec",
            "range": "stddev: 0.00029759458085956177",
            "extra": "mean: 2.941974637999985 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 493.53153174298706,
            "unit": "iter/sec",
            "range": "stddev: 0.00009189153410559682",
            "extra": "mean: 2.0262129888000007 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 14607.280473884419,
            "unit": "iter/sec",
            "range": "stddev: 0.000003662698687793599",
            "extra": "mean: 68.45901273600157 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12703.581725323473,
            "unit": "iter/sec",
            "range": "stddev: 0.000004043859700140999",
            "extra": "mean: 78.71795700000007 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14782.21834760274,
            "unit": "iter/sec",
            "range": "stddev: 0.000003973646413271348",
            "extra": "mean: 67.64884515199788 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "ff6b3135858b07f490628f86e30a2c32b85056e2",
          "message": "Use non-deprecated resampling constants",
          "timestamp": "2022-05-26T15:09:02+02:00",
          "tree_id": "7fb6daf3c50b274dc987fd4fd688f20700530e92",
          "url": "https://github.com/histolab/histolab/commit/ff6b3135858b07f490628f86e30a2c32b85056e2"
        },
        "date": 1653570648605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.664601906891454,
            "unit": "iter/sec",
            "range": "stddev: 0.0022755788485170304",
            "extra": "mean: 130.46992030999974 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 378.7387469613126,
            "unit": "iter/sec",
            "range": "stddev: 0.00011689883303908639",
            "extra": "mean: 2.640342473600009 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 600.5063707999502,
            "unit": "iter/sec",
            "range": "stddev: 0.00000821642534891866",
            "extra": "mean: 1.6652612672000031 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29612.706646021703,
            "unit": "iter/sec",
            "range": "stddev: 0.000001398187378390642",
            "extra": "mean: 33.76928735200045 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22234.42449414887,
            "unit": "iter/sec",
            "range": "stddev: 2.1698259865078407e-7",
            "extra": "mean: 44.97530395999934 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 27329.375273841233,
            "unit": "iter/sec",
            "range": "stddev: 1.519587861698633e-7",
            "extra": "mean: 36.59066444000155 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "931bd013f8c319ff645b762d25ef0921233f39b4",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/pre-commit/pre-commit-hooks: v4.2.0 → v4.3.0](https://github.com/pre-commit/pre-commit-hooks/compare/v4.2.0...v4.3.0)",
          "timestamp": "2022-06-15T09:12:36+02:00",
          "tree_id": "5b5e28488a7bf5d9cfb1660c7bb206ce3bfc8be7",
          "url": "https://github.com/histolab/histolab/commit/931bd013f8c319ff645b762d25ef0921233f39b4"
        },
        "date": 1655277279870,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.561418656378988,
            "unit": "iter/sec",
            "range": "stddev: 0.0037435674593797774",
            "extra": "mean: 116.80307202999757 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 274.10185480100074,
            "unit": "iter/sec",
            "range": "stddev: 0.00011866688610021755",
            "extra": "mean: 3.6482788513999824 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 489.2184689920495,
            "unit": "iter/sec",
            "range": "stddev: 0.00005162738984217786",
            "extra": "mean: 2.0440765493999606 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 17168.225213809175,
            "unit": "iter/sec",
            "range": "stddev: 0.000003063933770980307",
            "extra": "mean: 58.247138975999405 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 13958.15170825848,
            "unit": "iter/sec",
            "range": "stddev: 0.000002258989065391994",
            "extra": "mean: 71.64272325599813 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 16357.091583661831,
            "unit": "iter/sec",
            "range": "stddev: 0.000002027997419226609",
            "extra": "mean: 61.13556281599859 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "e33dbc79e6c1fc7ec1cd354c0abfe0cd920c6aed",
          "message": "Allow openslide-python 1.2.0",
          "timestamp": "2022-06-20T12:40:42+02:00",
          "tree_id": "7bf0137ca6388c34cf4441d33da995331843c6b2",
          "url": "https://github.com/histolab/histolab/commit/e33dbc79e6c1fc7ec1cd354c0abfe0cd920c6aed"
        },
        "date": 1655721748082,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.745027327161879,
            "unit": "iter/sec",
            "range": "stddev: 0.001323038722544901",
            "extra": "mean: 129.11510285999782 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 303.5683960792723,
            "unit": "iter/sec",
            "range": "stddev: 0.00003372303410456994",
            "extra": "mean: 3.2941505536000024 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 637.6285153758538,
            "unit": "iter/sec",
            "range": "stddev: 0.000007088350730349721",
            "extra": "mean: 1.5683112908000112 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28351.062534202123,
            "unit": "iter/sec",
            "range": "stddev: 1.1166994246493393e-7",
            "extra": "mean: 35.27204664000237 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21484.78712790252,
            "unit": "iter/sec",
            "range": "stddev: 1.0966118226552855e-7",
            "extra": "mean: 46.54456169599598 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25695.891207483903,
            "unit": "iter/sec",
            "range": "stddev: 9.940479765181807e-8",
            "extra": "mean: 38.916727656005605 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "b.guetarni@laposte.net",
            "name": "BilGuet",
            "username": "bguetarni"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "60eab311c5b4e8b1d688c4b22167b02bbb21abb8",
          "message": "fix to \"OtsuThreshold is missing the relate parameter #403\"\n\nsee https://github.com/histolab/histolab/issues/403",
          "timestamp": "2022-06-20T14:12:47+02:00",
          "tree_id": "d5bf923bb5623cb17df8e816e691c672ce63519a",
          "url": "https://github.com/histolab/histolab/commit/60eab311c5b4e8b1d688c4b22167b02bbb21abb8"
        },
        "date": 1655727277236,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.604008613007001,
            "unit": "iter/sec",
            "range": "stddev: 0.0010576590878924345",
            "extra": "mean: 131.5095827600004 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 289.51914236229567,
            "unit": "iter/sec",
            "range": "stddev: 0.00005619825834631937",
            "extra": "mean: 3.4540030473999876 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 605.1538341664403,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056709290331394275",
            "extra": "mean: 1.6524723855999923 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 31617.452659844268,
            "unit": "iter/sec",
            "range": "stddev: 1.7383289643332396e-7",
            "extra": "mean: 31.6281014400015 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22970.562812124568,
            "unit": "iter/sec",
            "range": "stddev: 1.563452462481023e-7",
            "extra": "mean: 43.533979039998485 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 28100.690771044672,
            "unit": "iter/sec",
            "range": "stddev: 2.0940383924786943e-7",
            "extra": "mean: 35.58631380800125 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "777e254dbfc7fb2b057dd48b1d5d4c9536905c36",
          "message": "Update numpy requirement from <1.22.5,>=1.18.4 to >=1.18.4,<1.23.1\n\nUpdates the requirements on [numpy](https://github.com/numpy/numpy) to permit the latest version.\n- [Release notes](https://github.com/numpy/numpy/releases)\n- [Changelog](https://github.com/numpy/numpy/blob/main/doc/HOWTO_RELEASE.rst)\n- [Commits](https://github.com/numpy/numpy/compare/v1.18.4...v1.23.0)\n\n---\nupdated-dependencies:\n- dependency-name: numpy\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-06-23T09:06:30+02:00",
          "tree_id": "fcaeb3ed9b3536fe7e74eec04cc455d95c2fba69",
          "url": "https://github.com/histolab/histolab/commit/777e254dbfc7fb2b057dd48b1d5d4c9536905c36"
        },
        "date": 1655968095325,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.582555443557815,
            "unit": "iter/sec",
            "range": "stddev: 0.0013095225833541788",
            "extra": "mean: 131.88166014000018 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 291.89297005553533,
            "unit": "iter/sec",
            "range": "stddev: 0.00010488294894977128",
            "extra": "mean: 3.425913271600001 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1153.0258991153294,
            "unit": "iter/sec",
            "range": "stddev: 0.00002463267397602054",
            "extra": "mean: 867.2832073999899 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29797.954206292336,
            "unit": "iter/sec",
            "range": "stddev: 2.0530807925683518e-7",
            "extra": "mean: 33.55935085600049 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 23102.852609754776,
            "unit": "iter/sec",
            "range": "stddev: 1.023419004869135e-7",
            "extra": "mean: 43.28469808000102 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26852.61689981453,
            "unit": "iter/sec",
            "range": "stddev: 1.471207838927232e-7",
            "extra": "mean: 37.24031828 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "9ee52bb312946ce4da300745886bee5bea07813b",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/psf/black: 22.3.0 → 22.6.0](https://github.com/psf/black/compare/22.3.0...22.6.0)",
          "timestamp": "2022-07-05T11:59:22+02:00",
          "tree_id": "28121de887a5759d79154971b48b9c4449be5733",
          "url": "https://github.com/histolab/histolab/commit/9ee52bb312946ce4da300745886bee5bea07813b"
        },
        "date": 1657015297111,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.650126653866668,
            "unit": "iter/sec",
            "range": "stddev: 0.001843647555884463",
            "extra": "mean: 150.37307588999937 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 206.5211513281392,
            "unit": "iter/sec",
            "range": "stddev: 0.00003331074146253378",
            "extra": "mean: 4.842119044799972 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1047.3594800203603,
            "unit": "iter/sec",
            "range": "stddev: 0.000007450939542707344",
            "extra": "mean: 954.7820200000103 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 24192.096798856943,
            "unit": "iter/sec",
            "range": "stddev: 5.505109429375498e-7",
            "extra": "mean: 41.335813440001175 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19409.60546253811,
            "unit": "iter/sec",
            "range": "stddev: 8.111138502260129e-7",
            "extra": "mean: 51.52088237600037 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 22239.47436102027,
            "unit": "iter/sec",
            "range": "stddev: 7.908267838825156e-7",
            "extra": "mean: 44.96509152000135 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "beltrami.ester@gmail.com",
            "name": "Etty",
            "username": "estyxx"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "a042b60f791052f5be7be2b355a899c7b5d8c85f",
          "message": "Refactor import metadata",
          "timestamp": "2022-07-19T13:30:02+01:00",
          "tree_id": "e112b04692145c70a121d30109b07d0fb368ca00",
          "url": "https://github.com/histolab/histolab/commit/a042b60f791052f5be7be2b355a899c7b5d8c85f"
        },
        "date": 1658233958697,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.754765550455634,
            "unit": "iter/sec",
            "range": "stddev: 0.006867112844882952",
            "extra": "mean: 148.0436282399981 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 201.57650714876857,
            "unit": "iter/sec",
            "range": "stddev: 0.00020682914028918306",
            "extra": "mean: 4.960895563400027 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 917.8850339261732,
            "unit": "iter/sec",
            "range": "stddev: 0.00007975259799114616",
            "extra": "mean: 1.0894610578000028 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 14242.611866168463,
            "unit": "iter/sec",
            "range": "stddev: 0.000010463279455337929",
            "extra": "mean: 70.21184101599897 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12341.102007814048,
            "unit": "iter/sec",
            "range": "stddev: 0.000007676703482393905",
            "extra": "mean: 81.03004086400279 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14057.594143367749,
            "unit": "iter/sec",
            "range": "stddev: 0.000005961790774323598",
            "extra": "mean: 71.13592765599878 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "b93aacaae22bd163503de8dee24c50e54ce7ac58",
          "message": "Bump pyflakes from 2.4.0 to 2.5.0\n\nBumps [pyflakes](https://github.com/PyCQA/pyflakes) from 2.4.0 to 2.5.0.\n- [Release notes](https://github.com/PyCQA/pyflakes/releases)\n- [Changelog](https://github.com/PyCQA/pyflakes/blob/master/NEWS.rst)\n- [Commits](https://github.com/PyCQA/pyflakes/compare/2.4.0...2.5.0)\n\n---\nupdated-dependencies:\n- dependency-name: pyflakes\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-08-01T09:58:29+02:00",
          "tree_id": "2397815a2652987adcb325fb28fdaceb1fe9e9cf",
          "url": "https://github.com/histolab/histolab/commit/b93aacaae22bd163503de8dee24c50e54ce7ac58"
        },
        "date": 1659340834045,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.587067831105366,
            "unit": "iter/sec",
            "range": "stddev: 0.002878605530812924",
            "extra": "mean: 151.81261612 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 204.27182305218523,
            "unit": "iter/sec",
            "range": "stddev: 0.000010585027855412729",
            "extra": "mean: 4.895437780200016 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1042.3004628691765,
            "unit": "iter/sec",
            "range": "stddev: 0.000007521860510191591",
            "extra": "mean: 959.4162486000101 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 24090.699110857277,
            "unit": "iter/sec",
            "range": "stddev: 2.2782594334187512e-7",
            "extra": "mean: 41.50979576799898 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19272.26838120808,
            "unit": "iter/sec",
            "range": "stddev: 1.8829693043896664e-7",
            "extra": "mean: 51.88802792799811 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 22569.983652012124,
            "unit": "iter/sec",
            "range": "stddev: 1.2231755562004638e-7",
            "extra": "mean: 44.30663377599967 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "6111694b299bbd99c7de3686616295662a892904",
          "message": "Bump pycodestyle from 2.8.0 to 2.9.0\n\nBumps [pycodestyle](https://github.com/PyCQA/pycodestyle) from 2.8.0 to 2.9.0.\n- [Release notes](https://github.com/PyCQA/pycodestyle/releases)\n- [Changelog](https://github.com/PyCQA/pycodestyle/blob/main/CHANGES.txt)\n- [Commits](https://github.com/PyCQA/pycodestyle/compare/2.8.0...2.9.0)\n\n---\nupdated-dependencies:\n- dependency-name: pycodestyle\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-08-01T10:42:42+02:00",
          "tree_id": "2cec1d812de7aeefeb46b112c7defdbf75756233",
          "url": "https://github.com/histolab/histolab/commit/6111694b299bbd99c7de3686616295662a892904"
        },
        "date": 1659343455693,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.609056453119523,
            "unit": "iter/sec",
            "range": "stddev: 0.0009842302648179308",
            "extra": "mean: 131.42233944000048 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 374.00418234530406,
            "unit": "iter/sec",
            "range": "stddev: 0.00009393003157594095",
            "extra": "mean: 2.6737668913999926 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1215.028619199621,
            "unit": "iter/sec",
            "range": "stddev: 0.000009748135740997368",
            "extra": "mean: 823.0258812000102 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 31431.845626815066,
            "unit": "iter/sec",
            "range": "stddev: 1.6563674399022462e-7",
            "extra": "mean: 31.81486737599914 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24286.391619297923,
            "unit": "iter/sec",
            "range": "stddev: 1.9543873414318409e-7",
            "extra": "mean: 41.17532220000112 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 28040.34439098053,
            "unit": "iter/sec",
            "range": "stddev: 1.9214957876828325e-7",
            "extra": "mean: 35.66290007199984 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "b46f93e2ee42a40692d94f77967c2b5ad08d6669",
          "message": "Bump pytest from 6.2.5 to 7.1.2\n\nBumps [pytest](https://github.com/pytest-dev/pytest) from 6.2.5 to 7.1.2.\n- [Release notes](https://github.com/pytest-dev/pytest/releases)\n- [Changelog](https://github.com/pytest-dev/pytest/blob/main/CHANGELOG.rst)\n- [Commits](https://github.com/pytest-dev/pytest/compare/6.2.5...7.1.2)\n\n---\nupdated-dependencies:\n- dependency-name: pytest\n  dependency-type: direct:development\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-08-01T11:37:09+02:00",
          "tree_id": "1d609bf42cd310d90df7658c064da7041420f6b2",
          "url": "https://github.com/histolab/histolab/commit/b46f93e2ee42a40692d94f77967c2b5ad08d6669"
        },
        "date": 1659346746712,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.538945680738417,
            "unit": "iter/sec",
            "range": "stddev: 0.0014477105964459747",
            "extra": "mean: 132.6445423999995 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 198.50169566331732,
            "unit": "iter/sec",
            "range": "stddev: 0.00006782035268786621",
            "extra": "mean: 5.037740341000008 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 987.6354366177462,
            "unit": "iter/sec",
            "range": "stddev: 0.000009691751104054212",
            "extra": "mean: 1.0125193598000068 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27773.50270742867,
            "unit": "iter/sec",
            "range": "stddev: 9.852059063433474e-8",
            "extra": "mean: 36.00554134399931 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22158.380088401635,
            "unit": "iter/sec",
            "range": "stddev: 9.634918232783139e-8",
            "extra": "mean: 45.12965280000003 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25545.28982297863,
            "unit": "iter/sec",
            "range": "stddev: 2.1420339214488964e-7",
            "extra": "mean: 39.146159896000654 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "9a93efdca1fb176fb651716891d0b65f29ac6077",
          "message": "Bump large-image-source-openslide from 1.8.11 to 1.13.0\n\nBumps [large-image-source-openslide](https://github.com/girder/large_image) from 1.8.11 to 1.13.0.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.8.11...v1.13.0)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-openslide\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-08-01T14:35:17+02:00",
          "tree_id": "92d4037f34530eea375c213d2f76cfac512f0f71",
          "url": "https://github.com/histolab/histolab/commit/9a93efdca1fb176fb651716891d0b65f29ac6077"
        },
        "date": 1659357432588,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.196590443250254,
            "unit": "iter/sec",
            "range": "stddev: 0.0021255322365530322",
            "extra": "mean: 138.9546908199992 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 200.05574638997302,
            "unit": "iter/sec",
            "range": "stddev: 0.000042546955346094316",
            "extra": "mean: 4.998606728599929 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 775.9198058003735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000559107008030409",
            "extra": "mean: 1.2887929816000565 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 31372.177722628556,
            "unit": "iter/sec",
            "range": "stddev: 1.9977880271396185e-7",
            "extra": "mean: 31.87537724799722 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24528.923938823675,
            "unit": "iter/sec",
            "range": "stddev: 1.6190198996965217e-7",
            "extra": "mean: 40.76819686399813 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 28314.02603899297,
            "unit": "iter/sec",
            "range": "stddev: 2.283184597317321e-7",
            "extra": "mean: 35.318184656001904 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "d4c6c1ea6422d11ec8520a591ae0f67acafdde57",
          "message": "Bump large-image-source-pil from 1.8.11 to 1.13.0\n\nBumps [large-image-source-pil](https://github.com/girder/large_image) from 1.8.11 to 1.13.0.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.8.11...v1.13.0)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-pil\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-08-01T17:08:18+02:00",
          "tree_id": "bcb3c52b16f227c76420d5b30c28bd1c0228bee4",
          "url": "https://github.com/histolab/histolab/commit/d4c6c1ea6422d11ec8520a591ae0f67acafdde57"
        },
        "date": 1659366597002,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.497578930358619,
            "unit": "iter/sec",
            "range": "stddev: 0.0019933660595610257",
            "extra": "mean: 133.37638847000022 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 295.9908594432861,
            "unit": "iter/sec",
            "range": "stddev: 0.0002723644701042976",
            "extra": "mean: 3.37848270679996 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1246.1217873741691,
            "unit": "iter/sec",
            "range": "stddev: 0.0000101008418372646",
            "extra": "mean: 802.4897807999992 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 31649.521724077073,
            "unit": "iter/sec",
            "range": "stddev: 3.591040217431447e-7",
            "extra": "mean: 31.596054079997657 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24064.003956150882,
            "unit": "iter/sec",
            "range": "stddev: 1.53934053495466e-7",
            "extra": "mean: 41.555844231998435 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 28459.941910809885,
            "unit": "iter/sec",
            "range": "stddev: 1.6877566200721788e-7",
            "extra": "mean: 35.13710615200421 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "88ec942ba7b7f82f083c26dcc462286d24d41561",
          "message": "Bump pycodestyle from 2.9.0 to 2.9.1\n\nBumps [pycodestyle](https://github.com/PyCQA/pycodestyle) from 2.9.0 to 2.9.1.\n- [Release notes](https://github.com/PyCQA/pycodestyle/releases)\n- [Changelog](https://github.com/PyCQA/pycodestyle/blob/main/CHANGES.txt)\n- [Commits](https://github.com/PyCQA/pycodestyle/compare/2.9.0...2.9.1)\n\n---\nupdated-dependencies:\n- dependency-name: pycodestyle\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-08-08T11:13:26+02:00",
          "tree_id": "10229ee8e9f93821ac4db8451aa2975cfaa216a0",
          "url": "https://github.com/histolab/histolab/commit/88ec942ba7b7f82f083c26dcc462286d24d41561"
        },
        "date": 1659950106747,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.626982356679704,
            "unit": "iter/sec",
            "range": "stddev: 0.0012877692757627005",
            "extra": "mean: 131.1134539500017 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 372.8827709275225,
            "unit": "iter/sec",
            "range": "stddev: 0.00008201109188642479",
            "extra": "mean: 2.681808004999971 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1198.5980259705284,
            "unit": "iter/sec",
            "range": "stddev: 0.000006104489233128017",
            "extra": "mean: 834.3080651999912 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 31646.39478197192,
            "unit": "iter/sec",
            "range": "stddev: 1.7888006465917847e-7",
            "extra": "mean: 31.59917604799875 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24524.934098778096,
            "unit": "iter/sec",
            "range": "stddev: 1.4780535932578075e-7",
            "extra": "mean: 40.77482924000287 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 28778.818254159596,
            "unit": "iter/sec",
            "range": "stddev: 1.745386063703934e-7",
            "extra": "mean: 34.74777842399635 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "83212362a880af1c82e039ee34921070064b4efb",
          "message": "Bump coverage from 6.4.2 to 6.4.3\n\nBumps [coverage](https://github.com/nedbat/coveragepy) from 6.4.2 to 6.4.3.\n- [Release notes](https://github.com/nedbat/coveragepy/releases)\n- [Changelog](https://github.com/nedbat/coveragepy/blob/master/CHANGES.rst)\n- [Commits](https://github.com/nedbat/coveragepy/compare/6.4.2...6.4.3)\n\n---\nupdated-dependencies:\n- dependency-name: coverage\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-08-08T16:57:58+02:00",
          "tree_id": "fa3d117c2e8a30f3d06ce1c32c56559a03c87bf1",
          "url": "https://github.com/histolab/histolab/commit/83212362a880af1c82e039ee34921070064b4efb"
        },
        "date": 1659970797539,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.685905655260932,
            "unit": "iter/sec",
            "range": "stddev: 0.002429157827220047",
            "extra": "mean: 149.56836838000115 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 213.71162533222483,
            "unit": "iter/sec",
            "range": "stddev: 0.00010979656024338752",
            "extra": "mean: 4.679202633200009 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1093.6350021606106,
            "unit": "iter/sec",
            "range": "stddev: 0.000008243723893792076",
            "extra": "mean: 914.3818531999955 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25789.454191620032,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010776621074611173",
            "extra": "mean: 38.77553951199707 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20466.87912933207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013803331961031403",
            "extra": "mean: 48.85942764800188 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24644.66645625397,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019277722192816034",
            "extra": "mean: 40.57673094399843 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "494794e18e9616ce9979ef2f882af7b4a61b3902",
          "message": "Sphinx was reported twice with different versions",
          "timestamp": "2022-08-10T14:52:10+02:00",
          "tree_id": "51ec73e2a93077e21f5d4b363d3e38cecd7dc50b",
          "url": "https://github.com/histolab/histolab/commit/494794e18e9616ce9979ef2f882af7b4a61b3902"
        },
        "date": 1660136044673,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.3524031595038135,
            "unit": "iter/sec",
            "range": "stddev: 0.0013810425820936904",
            "extra": "mean: 136.0099518900003 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 195.20409603594726,
            "unit": "iter/sec",
            "range": "stddev: 0.00008242786684448678",
            "extra": "mean: 5.122843322999984 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1181.690033313613,
            "unit": "iter/sec",
            "range": "stddev: 0.000009792886133898176",
            "extra": "mean: 846.2456073999958 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27821.250305216952,
            "unit": "iter/sec",
            "range": "stddev: 9.723582020006981e-8",
            "extra": "mean: 35.94374764000031 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22104.436052710487,
            "unit": "iter/sec",
            "range": "stddev: 1.2536390721037878e-7",
            "extra": "mean: 45.239787959999944 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25780.13575062989,
            "unit": "iter/sec",
            "range": "stddev: 1.3443358097586392e-7",
            "extra": "mean: 38.789555248000056 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "768181e39a12c24671cd9cf232d7dcea2257a0a4",
          "message": "Bump coverage from 6.4.3 to 6.4.4\n\nBumps [coverage](https://github.com/nedbat/coveragepy) from 6.4.3 to 6.4.4.\n- [Release notes](https://github.com/nedbat/coveragepy/releases)\n- [Changelog](https://github.com/nedbat/coveragepy/blob/master/CHANGES.rst)\n- [Commits](https://github.com/nedbat/coveragepy/compare/6.4.3...6.4.4)\n\n---\nupdated-dependencies:\n- dependency-name: coverage\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-08-17T09:58:04+02:00",
          "tree_id": "f3e90256241301d335cc4752790c67e25e5a9d8e",
          "url": "https://github.com/histolab/histolab/commit/768181e39a12c24671cd9cf232d7dcea2257a0a4"
        },
        "date": 1660723190095,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.855744799251093,
            "unit": "iter/sec",
            "range": "stddev: 0.0012531228203220726",
            "extra": "mean: 127.29537752999975 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 247.02569116731533,
            "unit": "iter/sec",
            "range": "stddev: 0.000039151090131663626",
            "extra": "mean: 4.048161935200014 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1210.0759280001844,
            "unit": "iter/sec",
            "range": "stddev: 0.000005836626070909002",
            "extra": "mean: 826.394424399993 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27620.941187876215,
            "unit": "iter/sec",
            "range": "stddev: 8.201208757629312e-8",
            "extra": "mean: 36.20441436799899 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21774.620047308395,
            "unit": "iter/sec",
            "range": "stddev: 8.006393803896702e-8",
            "extra": "mean: 45.92502637599921 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25276.193308033944,
            "unit": "iter/sec",
            "range": "stddev: 1.0916742871569095e-7",
            "extra": "mean: 39.56291945599867 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "d535f89857accd7ef3709e62c999b7e0e0af4614",
          "message": "Bump twine from 3.8.0 to 4.0.1\n\nBumps [twine](https://github.com/pypa/twine) from 3.8.0 to 4.0.1.\n- [Release notes](https://github.com/pypa/twine/releases)\n- [Changelog](https://github.com/pypa/twine/blob/main/docs/changelog.rst)\n- [Commits](https://github.com/pypa/twine/compare/3.8.0...4.0.1)\n\n---\nupdated-dependencies:\n- dependency-name: twine\n  dependency-type: direct:development\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-08-19T11:06:40+02:00",
          "tree_id": "fd2ad21ab6d744631261e9f8efa698faf50c5544",
          "url": "https://github.com/histolab/histolab/commit/d535f89857accd7ef3709e62c999b7e0e0af4614"
        },
        "date": 1660900106659,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.792154311313302,
            "unit": "iter/sec",
            "range": "stddev: 0.0012406406983490267",
            "extra": "mean: 128.3342141399993 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 232.6944753037253,
            "unit": "iter/sec",
            "range": "stddev: 0.00005399508400322459",
            "extra": "mean: 4.297480628599999 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1188.58651987651,
            "unit": "iter/sec",
            "range": "stddev: 0.000005769072933474032",
            "extra": "mean: 841.3354714000093 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27943.094895879098,
            "unit": "iter/sec",
            "range": "stddev: 8.564151943174153e-8",
            "extra": "mean: 35.78701656799922 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22421.948573238955,
            "unit": "iter/sec",
            "range": "stddev: 9.509521002889682e-8",
            "extra": "mean: 44.599156791997984 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25759.28149847955,
            "unit": "iter/sec",
            "range": "stddev: 1.120639456891173e-7",
            "extra": "mean: 38.820958576000066 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "dce30fb5c5d9036a5fd22eee22b7dcb0fe36ef8b",
          "message": "Add poetry installation info\n\nCo-authored-by: Etty <28976199+estyxx@users.noreply.github.com>",
          "timestamp": "2022-08-19T11:16:23+02:00",
          "tree_id": "c612d9d1e68de7864357c8ac2c72b1573ade2521",
          "url": "https://github.com/histolab/histolab/commit/dce30fb5c5d9036a5fd22eee22b7dcb0fe36ef8b"
        },
        "date": 1660900697722,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.793612637647447,
            "unit": "iter/sec",
            "range": "stddev: 0.0013061422165882158",
            "extra": "mean: 128.31020047999928 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 233.2374743469352,
            "unit": "iter/sec",
            "range": "stddev: 0.00006762440075400962",
            "extra": "mean: 4.287475684599993 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1204.5706563372455,
            "unit": "iter/sec",
            "range": "stddev: 0.000005967205357111156",
            "extra": "mean: 830.1713102000292 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27819.7287417457,
            "unit": "iter/sec",
            "range": "stddev: 7.734181489755254e-8",
            "extra": "mean: 35.9457135359994 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22346.002030922085,
            "unit": "iter/sec",
            "range": "stddev: 1.0066346643175289e-7",
            "extra": "mean: 44.75073432000113 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25772.54508498467,
            "unit": "iter/sec",
            "range": "stddev: 1.063289244101917e-7",
            "extra": "mean: 38.8009797520001 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "22d78a52861ec78b31b163ab941ec1b5042e10cf",
          "message": "enambe CI workflow for pre-commit changes",
          "timestamp": "2022-08-19T14:38:09+02:00",
          "tree_id": "a77f39527a870b081ebc35ea74cbaa50f45760ca",
          "url": "https://github.com/histolab/histolab/commit/22d78a52861ec78b31b163ab941ec1b5042e10cf"
        },
        "date": 1660912803714,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.459379853022197,
            "unit": "iter/sec",
            "range": "stddev: 0.0016594753658291516",
            "extra": "mean: 134.05940167999972 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 177.89426005500275,
            "unit": "iter/sec",
            "range": "stddev: 0.000015068961528171856",
            "extra": "mean: 5.621316841200004 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1162.6350273333944,
            "unit": "iter/sec",
            "range": "stddev: 0.000007233324907526016",
            "extra": "mean: 860.1151491999929 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27811.349036428284,
            "unit": "iter/sec",
            "range": "stddev: 9.924972853146731e-8",
            "extra": "mean: 35.95654416800005 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21997.28181946709,
            "unit": "iter/sec",
            "range": "stddev: 0.000001135210371371605",
            "extra": "mean: 45.46016222399908 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25370.45196181882,
            "unit": "iter/sec",
            "range": "stddev: 6.173913788183533e-7",
            "extra": "mean: 39.415931632000365 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "e05836e1fe5743860979e12686d1862a554a8955",
          "message": "Bump sphinxcontrib-katex from 0.8.6 to 0.9.0\n\nBumps [sphinxcontrib-katex](https://github.com/hagenw/sphinxcontrib-katex) from 0.8.6 to 0.9.0.\n- [Release notes](https://github.com/hagenw/sphinxcontrib-katex/releases)\n- [Changelog](https://github.com/hagenw/sphinxcontrib-katex/blob/master/CHANGELOG.rst)\n- [Commits](https://github.com/hagenw/sphinxcontrib-katex/compare/v0.8.6...v0.9.0)\n\n---\nupdated-dependencies:\n- dependency-name: sphinxcontrib-katex\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-08-22T11:01:56+02:00",
          "tree_id": "8a1ab715f37dd9a477c68eace93ada55832fb4bd",
          "url": "https://github.com/histolab/histolab/commit/e05836e1fe5743860979e12686d1862a554a8955"
        },
        "date": 1661159037021,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.608428826757756,
            "unit": "iter/sec",
            "range": "stddev: 0.0019080125929587255",
            "extra": "mean: 151.32189908 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 211.3057308304008,
            "unit": "iter/sec",
            "range": "stddev: 0.0000660836812483597",
            "extra": "mean: 4.732479313599993 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1049.227723184514,
            "unit": "iter/sec",
            "range": "stddev: 0.000007048675613032103",
            "extra": "mean: 953.0819457999996 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 24391.567234198734,
            "unit": "iter/sec",
            "range": "stddev: 1.2681609051243863e-7",
            "extra": "mean: 40.997775600000296 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19306.880989282396,
            "unit": "iter/sec",
            "range": "stddev: 2.0867156701865105e-7",
            "extra": "mean: 51.79500513599885 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 22252.8952609596,
            "unit": "iter/sec",
            "range": "stddev: 1.9438353086884576e-7",
            "extra": "mean: 44.937972712000146 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "c9b67d922e3a36d54d8f6b602f3862af6f937f90",
          "message": "start build if docs are changed",
          "timestamp": "2022-09-16T16:56:46+02:00",
          "tree_id": "9add9240f50dcd5336a3ccd46f1549a9c663ebda",
          "url": "https://github.com/histolab/histolab/commit/c9b67d922e3a36d54d8f6b602f3862af6f937f90"
        },
        "date": 1663340334545,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.342684642989938,
            "unit": "iter/sec",
            "range": "stddev: 0.006187017873643311",
            "extra": "mean: 136.18996982999946 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 245.7577568556945,
            "unit": "iter/sec",
            "range": "stddev: 0.0003847936252749742",
            "extra": "mean: 4.0690475563999655 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 933.0863869699137,
            "unit": "iter/sec",
            "range": "stddev: 0.000030493764501180363",
            "extra": "mean: 1.0717121308000002 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 14944.02391854877,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033830483502098853",
            "extra": "mean: 66.91638111999964 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 13045.00389381269,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056120879129683046",
            "extra": "mean: 76.65770038399955 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15065.253879891021,
            "unit": "iter/sec",
            "range": "stddev: 0.000004190351105687464",
            "extra": "mean: 66.3779056080025 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "fafedf97e6fb66def20b48d156209ce0950502ec",
          "message": "Bump pytest from 7.1.2 to 7.1.3\n\nBumps [pytest](https://github.com/pytest-dev/pytest) from 7.1.2 to 7.1.3.\n- [Release notes](https://github.com/pytest-dev/pytest/releases)\n- [Changelog](https://github.com/pytest-dev/pytest/blob/main/CHANGELOG.rst)\n- [Commits](https://github.com/pytest-dev/pytest/compare/7.1.2...7.1.3)\n\n---\nupdated-dependencies:\n- dependency-name: pytest\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-09-16T17:51:54+02:00",
          "tree_id": "778bb491864a8e9b448b5ef84a16d0b90e5b3b41",
          "url": "https://github.com/histolab/histolab/commit/fafedf97e6fb66def20b48d156209ce0950502ec"
        },
        "date": 1663343671816,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.804225702699221,
            "unit": "iter/sec",
            "range": "stddev: 0.004379200710469748",
            "extra": "mean: 146.96749397999866 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 215.8113476979228,
            "unit": "iter/sec",
            "range": "stddev: 0.00016598102085579774",
            "extra": "mean: 4.6336766378000105 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 969.47240219088,
            "unit": "iter/sec",
            "range": "stddev: 0.000028040754428219704",
            "extra": "mean: 1.031488877599952 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15293.789482208156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031929277309150497",
            "extra": "mean: 65.3860183680008 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12886.677852818435,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032265057062163205",
            "extra": "mean: 77.59951877599633 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14431.047797989328,
            "unit": "iter/sec",
            "range": "stddev: 0.0000042951155812334315",
            "extra": "mean: 69.29503761600245 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "0391eead5abe5a951923b32fbf63d34db228612e",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2022-09-19T22:42:08+02:00",
          "tree_id": "d33a4daba4452a25959407589a7465bdd3a199e0",
          "url": "https://github.com/histolab/histolab/commit/0391eead5abe5a951923b32fbf63d34db228612e"
        },
        "date": 1663620257003,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.582415992015487,
            "unit": "iter/sec",
            "range": "stddev: 0.003670356588373588",
            "extra": "mean: 151.9199031499994 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 198.24936976470858,
            "unit": "iter/sec",
            "range": "stddev: 0.00002074822234913079",
            "extra": "mean: 5.044152226999995 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1067.5704801479865,
            "unit": "iter/sec",
            "range": "stddev: 0.000008668707557448388",
            "extra": "mean: 936.7063051999907 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 23308.388502034068,
            "unit": "iter/sec",
            "range": "stddev: 2.19642288782072e-7",
            "extra": "mean: 42.90300892799746 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 18509.02630285351,
            "unit": "iter/sec",
            "range": "stddev: 1.9406628877459426e-7",
            "extra": "mean: 54.027693496001575 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 21706.819234111776,
            "unit": "iter/sec",
            "range": "stddev: 1.8592725660941352e-7",
            "extra": "mean: 46.068472272000236 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "650e1d7fd3ae276ab6a428cdc7ee2f01525b24d9",
          "message": "Bump pytest-cov from 3.0.0 to 4.0.0\n\nBumps [pytest-cov](https://github.com/pytest-dev/pytest-cov) from 3.0.0 to 4.0.0.\n- [Release notes](https://github.com/pytest-dev/pytest-cov/releases)\n- [Changelog](https://github.com/pytest-dev/pytest-cov/blob/master/CHANGELOG.rst)\n- [Commits](https://github.com/pytest-dev/pytest-cov/compare/v3.0.0...v4.0.0)\n\n---\nupdated-dependencies:\n- dependency-name: pytest-cov\n  dependency-type: direct:development\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-09-29T10:51:57+02:00",
          "tree_id": "3d4c42bb11f018a7d87ef6ed74f03defa136223a",
          "url": "https://github.com/histolab/histolab/commit/650e1d7fd3ae276ab6a428cdc7ee2f01525b24d9"
        },
        "date": 1664441620416,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.778963020429198,
            "unit": "iter/sec",
            "range": "stddev: 0.0013561062520677778",
            "extra": "mean: 128.55183876999916 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 233.94682465456913,
            "unit": "iter/sec",
            "range": "stddev: 0.00003441914279160873",
            "extra": "mean: 4.274475627000006 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1202.0741845831262,
            "unit": "iter/sec",
            "range": "stddev: 0.000006891230314967686",
            "extra": "mean: 831.8954127999973 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28249.96576674757,
            "unit": "iter/sec",
            "range": "stddev: 9.682051946159494e-8",
            "extra": "mean: 35.39827298400053 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22325.16916548212,
            "unit": "iter/sec",
            "range": "stddev: 9.129746353512884e-8",
            "extra": "mean: 44.7924937360001 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25845.598237746555,
            "unit": "iter/sec",
            "range": "stddev: 1.133442534848155e-7",
            "extra": "mean: 38.69130792799899 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "c9997f19977ec3e9129f803149d2d455229fc91d",
          "message": "Bump importlib-metadata from 4.12.0 to 5.0.0\n\nBumps [importlib-metadata](https://github.com/python/importlib_metadata) from 4.12.0 to 5.0.0.\n- [Release notes](https://github.com/python/importlib_metadata/releases)\n- [Changelog](https://github.com/python/importlib_metadata/blob/main/CHANGES.rst)\n- [Commits](https://github.com/python/importlib_metadata/compare/v4.12.0...v5.0.0)\n\n---\nupdated-dependencies:\n- dependency-name: importlib-metadata\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-10-03T11:30:03+02:00",
          "tree_id": "ebde365e14f37902fdb54c8297c1d236f646fc98",
          "url": "https://github.com/histolab/histolab/commit/c9997f19977ec3e9129f803149d2d455229fc91d"
        },
        "date": 1664789510779,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.368173995818484,
            "unit": "iter/sec",
            "range": "stddev: 0.0010296015325548552",
            "extra": "mean: 135.7188362500004 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 213.9532593306512,
            "unit": "iter/sec",
            "range": "stddev: 0.00010073485536762549",
            "extra": "mean: 4.673918046999993 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1202.3860027600156,
            "unit": "iter/sec",
            "range": "stddev: 0.000006469798410631115",
            "extra": "mean: 831.6796750000009 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27707.845773425062,
            "unit": "iter/sec",
            "range": "stddev: 9.7976591149655e-8",
            "extra": "mean: 36.09086062400104 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22478.208201200487,
            "unit": "iter/sec",
            "range": "stddev: 1.132952759365562e-7",
            "extra": "mean: 44.48753170399914 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25966.602552660108,
            "unit": "iter/sec",
            "range": "stddev: 1.204060890437312e-7",
            "extra": "mean: 38.51100651199965 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "0a14d9bad2cef17d0fb363b41d411725098eea46",
          "message": "Bump coverage from 6.4.4 to 6.5.0\n\nBumps [coverage](https://github.com/nedbat/coveragepy) from 6.4.4 to 6.5.0.\n- [Release notes](https://github.com/nedbat/coveragepy/releases)\n- [Changelog](https://github.com/nedbat/coveragepy/blob/master/CHANGES.rst)\n- [Commits](https://github.com/nedbat/coveragepy/compare/6.4.4...6.5.0)\n\n---\nupdated-dependencies:\n- dependency-name: coverage\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-10-03T12:21:52+02:00",
          "tree_id": "b42879cf116ac1c50e0f692b0d4370291af94fea",
          "url": "https://github.com/histolab/histolab/commit/0a14d9bad2cef17d0fb363b41d411725098eea46"
        },
        "date": 1664792633324,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.5965815555104435,
            "unit": "iter/sec",
            "range": "stddev: 0.001795032318227313",
            "extra": "mean: 151.59366887000004 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 205.87409700720235,
            "unit": "iter/sec",
            "range": "stddev: 0.00004744593699353023",
            "extra": "mean: 4.857337637600011 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1089.539679626794,
            "unit": "iter/sec",
            "range": "stddev: 0.000007039983298500759",
            "extra": "mean: 917.8187987999991 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 24891.156637251832,
            "unit": "iter/sec",
            "range": "stddev: 1.4012623565951542e-7",
            "extra": "mean: 40.174910896001165 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19601.42370327728,
            "unit": "iter/sec",
            "range": "stddev: 1.3788884907615174e-7",
            "extra": "mean: 51.01670241599868 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 22884.090978560027,
            "unit": "iter/sec",
            "range": "stddev: 1.4960489694064882e-7",
            "extra": "mean: 43.698480352000615 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "bb1420e3780805711a5fc73940d81cb7b0a1105f",
          "message": "Bump pytest-xdist from 2.5.0 to 3.0.2\n\nBumps [pytest-xdist](https://github.com/pytest-dev/pytest-xdist) from 2.5.0 to 3.0.2.\n- [Release notes](https://github.com/pytest-dev/pytest-xdist/releases)\n- [Changelog](https://github.com/pytest-dev/pytest-xdist/blob/master/CHANGELOG.rst)\n- [Commits](https://github.com/pytest-dev/pytest-xdist/compare/v2.5.0...v3.0.2)\n\n---\nupdated-dependencies:\n- dependency-name: pytest-xdist\n  dependency-type: direct:development\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-10-26T15:39:22+02:00",
          "tree_id": "7eac8bfa21a0f46370a74299a4016b7aaba129cc",
          "url": "https://github.com/histolab/histolab/commit/bb1420e3780805711a5fc73940d81cb7b0a1105f"
        },
        "date": 1666791676368,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.317732331356344,
            "unit": "iter/sec",
            "range": "stddev: 0.0014712629708325431",
            "extra": "mean: 136.65435611999897 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 191.09615668313992,
            "unit": "iter/sec",
            "range": "stddev: 0.00017412285678553526",
            "extra": "mean: 5.232967618799987 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1209.2887655508594,
            "unit": "iter/sec",
            "range": "stddev: 0.000007061961097969513",
            "extra": "mean: 826.932349400002 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28355.672553349286,
            "unit": "iter/sec",
            "range": "stddev: 1.1130795139247437e-7",
            "extra": "mean: 35.266312167999786 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22368.701846945725,
            "unit": "iter/sec",
            "range": "stddev: 1.3783019471057538e-7",
            "extra": "mean: 44.70532116000027 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25981.87134381996,
            "unit": "iter/sec",
            "range": "stddev: 1.1573514597465136e-7",
            "extra": "mean: 38.48837471200318 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "474c24159720503dea4d6d0c966e8f94b834be18",
          "message": "Bump pytest-benchmark from 3.4.1 to 4.0.0\n\nBumps [pytest-benchmark](https://github.com/ionelmc/pytest-benchmark) from 3.4.1 to 4.0.0.\n- [Release notes](https://github.com/ionelmc/pytest-benchmark/releases)\n- [Changelog](https://github.com/ionelmc/pytest-benchmark/blob/master/CHANGELOG.rst)\n- [Commits](https://github.com/ionelmc/pytest-benchmark/compare/v3.4.1...v4.0.0)\n\n---\nupdated-dependencies:\n- dependency-name: pytest-benchmark\n  dependency-type: direct:development\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-10-28T14:59:05+02:00",
          "tree_id": "b6c26a7d257516ec093e67e009d90c07f3608ff0",
          "url": "https://github.com/histolab/histolab/commit/474c24159720503dea4d6d0c966e8f94b834be18"
        },
        "date": 1666962039645,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.581404409655686,
            "unit": "iter/sec",
            "range": "stddev: 0.002393524576128316",
            "extra": "mean: 131.90168285000055 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 316.1441052127251,
            "unit": "iter/sec",
            "range": "stddev: 0.00014042537196954022",
            "extra": "mean: 3.163114489600008 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1206.6691611205179,
            "unit": "iter/sec",
            "range": "stddev: 0.000006724547516374473",
            "extra": "mean: 828.727568599993 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 31964.524627006853,
            "unit": "iter/sec",
            "range": "stddev: 1.6843919728380084e-7",
            "extra": "mean: 31.284682367999263 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24215.241791115914,
            "unit": "iter/sec",
            "range": "stddev: 1.9392231838625353e-7",
            "extra": "mean: 41.296304560001545 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 28581.146206868234,
            "unit": "iter/sec",
            "range": "stddev: 1.6835918680025554e-7",
            "extra": "mean: 34.98809994400062 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "612381de7d9d75f6a87250b41a6cd5c713f46052",
          "message": "Bump pytest-html from 3.1.1 to 3.2.0\n\nBumps [pytest-html](https://github.com/pytest-dev/pytest-html) from 3.1.1 to 3.2.0.\n- [Release notes](https://github.com/pytest-dev/pytest-html/releases)\n- [Changelog](https://github.com/pytest-dev/pytest-html/blob/master/docs/changelog.rst)\n- [Commits](https://github.com/pytest-dev/pytest-html/compare/v3.1.1...v3.2.0)\n\n---\nupdated-dependencies:\n- dependency-name: pytest-html\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-11-11T18:57:52+01:00",
          "tree_id": "64533d143b2a3d0e2179652c4fe01c606f0d9cfa",
          "url": "https://github.com/histolab/histolab/commit/612381de7d9d75f6a87250b41a6cd5c713f46052"
        },
        "date": 1668189582489,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.306446774338559,
            "unit": "iter/sec",
            "range": "stddev: 0.0018653067186213009",
            "extra": "mean: 136.86543279999853 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 198.0405770171227,
            "unit": "iter/sec",
            "range": "stddev: 0.00012054385895346317",
            "extra": "mean: 5.049470240200015 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1202.2729328553246,
            "unit": "iter/sec",
            "range": "stddev: 0.000006253639274471268",
            "extra": "mean: 831.7578918000436 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28281.930963777482,
            "unit": "iter/sec",
            "range": "stddev: 1.2977870726062318e-7",
            "extra": "mean: 35.35826465600121 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22379.254871589124,
            "unit": "iter/sec",
            "range": "stddev: 1.4689584287169622e-7",
            "extra": "mean: 44.68424019199665 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26024.15421630224,
            "unit": "iter/sec",
            "range": "stddev: 1.1893941875230016e-7",
            "extra": "mean: 38.42584053600376 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "b251d9b213ad1bf8e6e424dce6bd80163a51e1dd",
          "message": "Bump typing-extensions from 4.3.0 to 4.4.0\n\nBumps [typing-extensions](https://github.com/python/typing_extensions) from 4.3.0 to 4.4.0.\n- [Release notes](https://github.com/python/typing_extensions/releases)\n- [Changelog](https://github.com/python/typing_extensions/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/python/typing_extensions/compare/4.3.0...4.4.0)\n\n---\nupdated-dependencies:\n- dependency-name: typing-extensions\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-11-11T19:39:50+01:00",
          "tree_id": "49a1ea2d6f856e193df7ac803960a5a8404886fe",
          "url": "https://github.com/histolab/histolab/commit/b251d9b213ad1bf8e6e424dce6bd80163a51e1dd"
        },
        "date": 1668192101322,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.953807632939943,
            "unit": "iter/sec",
            "range": "stddev: 0.005946948588515592",
            "extra": "mean: 143.80610634999954 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 212.09517008130965,
            "unit": "iter/sec",
            "range": "stddev: 0.00014627709271070882",
            "extra": "mean: 4.714864556400016 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1098.2388620741265,
            "unit": "iter/sec",
            "range": "stddev: 0.000015244259062275189",
            "extra": "mean: 910.5487289999985 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 26058.11335891711,
            "unit": "iter/sec",
            "range": "stddev: 0.000001837302488700323",
            "extra": "mean: 38.3757636720004 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20247.830634953047,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019487096138288036",
            "extra": "mean: 49.38800694400015 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24189.384345324735,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018855670623193824",
            "extra": "mean: 41.34044859199889 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "e0549c606cb4d26b87602c40f7836715a4017ede",
          "message": "Bump pytest from 7.1.3 to 7.2.0\n\nBumps [pytest](https://github.com/pytest-dev/pytest) from 7.1.3 to 7.2.0.\n- [Release notes](https://github.com/pytest-dev/pytest/releases)\n- [Changelog](https://github.com/pytest-dev/pytest/blob/main/CHANGELOG.rst)\n- [Commits](https://github.com/pytest-dev/pytest/compare/7.1.3...7.2.0)\n\n---\nupdated-dependencies:\n- dependency-name: pytest\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-11-11T21:55:58+01:00",
          "tree_id": "9fa78439fce5a5437e2e71aaaa791e105c1cea0a",
          "url": "https://github.com/histolab/histolab/commit/e0549c606cb4d26b87602c40f7836715a4017ede"
        },
        "date": 1668200268603,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.487750028411597,
            "unit": "iter/sec",
            "range": "stddev: 0.0013342914350501112",
            "extra": "mean: 133.55146688999895 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 190.95779715618116,
            "unit": "iter/sec",
            "range": "stddev: 0.00004259187597972129",
            "extra": "mean: 5.236759194399991 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1224.229121561047,
            "unit": "iter/sec",
            "range": "stddev: 0.000006553378450454709",
            "extra": "mean: 816.8405589999963 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27695.250866105565,
            "unit": "iter/sec",
            "range": "stddev: 8.814116419060086e-8",
            "extra": "mean: 36.107273584000495 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22008.398222708453,
            "unit": "iter/sec",
            "range": "stddev: 9.318064493468327e-8",
            "extra": "mean: 45.43720037599974 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25711.40490798258,
            "unit": "iter/sec",
            "range": "stddev: 1.1966800462049634e-7",
            "extra": "mean: 38.8932461520036 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "c9e17f4170740f75055baa403fe6f0245e7d418d",
          "message": "Bump cryptography from 37.0.4 to 38.0.3\n\nBumps [cryptography](https://github.com/pyca/cryptography) from 37.0.4 to 38.0.3.\n- [Release notes](https://github.com/pyca/cryptography/releases)\n- [Changelog](https://github.com/pyca/cryptography/blob/main/CHANGELOG.rst)\n- [Commits](https://github.com/pyca/cryptography/compare/37.0.4...38.0.3)\n\n---\nupdated-dependencies:\n- dependency-name: cryptography\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-11-11T22:19:24+01:00",
          "tree_id": "39741c71053d20b06f210e7a7c790448e75119cb",
          "url": "https://github.com/histolab/histolab/commit/c9e17f4170740f75055baa403fe6f0245e7d418d"
        },
        "date": 1668201657197,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.7068596340886115,
            "unit": "iter/sec",
            "range": "stddev: 0.001071683803740499",
            "extra": "mean: 129.75453653999978 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 382.8700185640826,
            "unit": "iter/sec",
            "range": "stddev: 0.000046142713804526595",
            "extra": "mean: 2.6118524604000184 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1276.589150853432,
            "unit": "iter/sec",
            "range": "stddev: 0.000005894189126062847",
            "extra": "mean: 783.337379400001 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32344.243285855388,
            "unit": "iter/sec",
            "range": "stddev: 1.561976335641551e-7",
            "extra": "mean: 30.917402863999424 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24262.35548807234,
            "unit": "iter/sec",
            "range": "stddev: 1.6004703772764112e-7",
            "extra": "mean: 41.21611360000111 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 28770.10630439885,
            "unit": "iter/sec",
            "range": "stddev: 1.665970583822568e-7",
            "extra": "mean: 34.75830048800003 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "739abd8fbb3a62f051fe2f5752ca68c4d04dfb5b",
          "message": "Bump pillow from 9.2.0 to 9.3.0\n\nBumps [pillow](https://github.com/python-pillow/Pillow) from 9.2.0 to 9.3.0.\n- [Release notes](https://github.com/python-pillow/Pillow/releases)\n- [Changelog](https://github.com/python-pillow/Pillow/blob/main/CHANGES.rst)\n- [Commits](https://github.com/python-pillow/Pillow/compare/9.2.0...9.3.0)\n\n---\nupdated-dependencies:\n- dependency-name: pillow\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2022-11-11T22:52:56+01:00",
          "tree_id": "3ca7127033979fa720eb4c6a516cf9700e7e3f8a",
          "url": "https://github.com/histolab/histolab/commit/739abd8fbb3a62f051fe2f5752ca68c4d04dfb5b"
        },
        "date": 1668203685918,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.8073058543101785,
            "unit": "iter/sec",
            "range": "stddev: 0.001715768694138253",
            "extra": "mean: 128.08515750000112 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 236.146474121047,
            "unit": "iter/sec",
            "range": "stddev: 0.00004978967317539203",
            "extra": "mean: 4.23465988099999 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1239.7378025559794,
            "unit": "iter/sec",
            "range": "stddev: 0.000006126123147405816",
            "extra": "mean: 806.6221727999988 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27943.95164031355,
            "unit": "iter/sec",
            "range": "stddev: 7.21972688418641e-8",
            "extra": "mean: 35.78591935999998 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22288.943097571682,
            "unit": "iter/sec",
            "range": "stddev: 1.0781023017911717e-7",
            "extra": "mean: 44.86529467200023 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25962.648313427228,
            "unit": "iter/sec",
            "range": "stddev: 8.494199359454228e-8",
            "extra": "mean: 38.51687192800068 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "a75aeea38cf4cda7157284f8e0aad1d76c2a3a76",
          "message": "fix 3",
          "timestamp": "2022-11-12T00:09:24+01:00",
          "tree_id": "6b49d952f36fb74ccadf242f81284b0f54b03194",
          "url": "https://github.com/histolab/histolab/commit/a75aeea38cf4cda7157284f8e0aad1d76c2a3a76"
        },
        "date": 1668208292626,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.292815953763487,
            "unit": "iter/sec",
            "range": "stddev: 0.0058390137714670505",
            "extra": "mean: 137.12124456999987 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 234.2407777651334,
            "unit": "iter/sec",
            "range": "stddev: 0.00013200829317079504",
            "extra": "mean: 4.269111507999992 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1074.0280614151145,
            "unit": "iter/sec",
            "range": "stddev: 0.000043288820600586705",
            "extra": "mean: 931.0743694000166 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16150.524688620635,
            "unit": "iter/sec",
            "range": "stddev: 0.000002625862232321032",
            "extra": "mean: 61.917493039999044 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12717.665809734497,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045569456171618885",
            "extra": "mean: 78.63078138399965 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14870.738805245857,
            "unit": "iter/sec",
            "range": "stddev: 0.000003751929896407984",
            "extra": "mean: 67.24615455200092 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "4bd3f2301efc02d245b509dbfe538b4bd33dd731",
          "message": "add codeql",
          "timestamp": "2022-11-13T16:32:58+01:00",
          "tree_id": "3018e4219fe3ad124ee3ba99a7072d1e735fefdb",
          "url": "https://github.com/histolab/histolab/commit/4bd3f2301efc02d245b509dbfe538b4bd33dd731"
        },
        "date": 1668353694891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.048488016986993,
            "unit": "iter/sec",
            "range": "stddev: 0.004038012054047539",
            "extra": "mean: 141.8743988199995 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 218.85641813312347,
            "unit": "iter/sec",
            "range": "stddev: 0.00010789667557404675",
            "extra": "mean: 4.569205731 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1089.1239985366808,
            "unit": "iter/sec",
            "range": "stddev: 0.000011667833889874966",
            "extra": "mean: 918.1690985999523 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25523.56552233313,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016226707538954937",
            "extra": "mean: 39.179479024002376 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20431.844126245614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020414711902397287",
            "extra": "mean: 48.94320815199717 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23526.19622856068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014856919999495158",
            "extra": "mean: 42.505808856002204 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "b1cec454ef84fe99e0cf8347b6f15d3bedffc63e",
          "message": "update scikit-image to 0.19.3",
          "timestamp": "2022-11-15T14:25:55+01:00",
          "tree_id": "e9698dc7052a260f829e211b4621bf323c32dac2",
          "url": "https://github.com/histolab/histolab/commit/b1cec454ef84fe99e0cf8347b6f15d3bedffc63e"
        },
        "date": 1668518872584,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.5445796876467695,
            "unit": "iter/sec",
            "range": "stddev: 0.0016356748131034218",
            "extra": "mean: 132.5454884700025 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 197.96867571901493,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068183283204153",
            "extra": "mean: 5.051304184200035 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1201.5706244866644,
            "unit": "iter/sec",
            "range": "stddev: 0.000007465593636042541",
            "extra": "mean: 832.2440475999656 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28119.404705948375,
            "unit": "iter/sec",
            "range": "stddev: 9.422500368870052e-8",
            "extra": "mean: 35.56263052000031 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22162.559701363607,
            "unit": "iter/sec",
            "range": "stddev: 8.589118158408649e-8",
            "extra": "mean: 45.12114184800021 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26195.87969840687,
            "unit": "iter/sec",
            "range": "stddev: 9.609475349690492e-8",
            "extra": "mean: 38.173942296002224 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "fb662d0b9d1e490aeab3996ba3e16b11965cb0c3",
          "message": "add python 3.11 in CI",
          "timestamp": "2022-11-18T18:22:10+01:00",
          "tree_id": "d538049dd1e6905d29486fba34a9309244d9b8d4",
          "url": "https://github.com/histolab/histolab/commit/fb662d0b9d1e490aeab3996ba3e16b11965cb0c3"
        },
        "date": 1668792257983,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.138534634192028,
            "unit": "iter/sec",
            "range": "stddev: 0.0045974628552265025",
            "extra": "mean: 140.0847724699993 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 211.86665811427085,
            "unit": "iter/sec",
            "range": "stddev: 0.00016600434001596892",
            "extra": "mean: 4.719949844399997 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1082.0163884465765,
            "unit": "iter/sec",
            "range": "stddev: 0.000017881035471733336",
            "extra": "mean: 924.2004194000003 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 24730.438781138586,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014659787130778652",
            "extra": "mean: 40.43599908800161 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19164.308279421857,
            "unit": "iter/sec",
            "range": "stddev: 9.591071237364564e-7",
            "extra": "mean: 52.18033363999757 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 22316.784564131078,
            "unit": "iter/sec",
            "range": "stddev: 8.365109188259855e-7",
            "extra": "mean: 44.80932264799753 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "00286087c56dcd3c598c738bbca36a2ca11d592b",
          "message": "[pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/PyCQA/flake8: 5.0.4 → 6.0.0](https://github.com/PyCQA/flake8/compare/5.0.4...6.0.0)\n- [github.com/pre-commit/pre-commit-hooks: v4.3.0 → v4.4.0](https://github.com/pre-commit/pre-commit-hooks/compare/v4.3.0...v4.4.0)",
          "timestamp": "2022-11-30T15:58:58+01:00",
          "tree_id": "1e1c4c5b7205e67f3293c548352799d6c3bb9707",
          "url": "https://github.com/histolab/histolab/commit/00286087c56dcd3c598c738bbca36a2ca11d592b"
        },
        "date": 1669820458665,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.688545161418442,
            "unit": "iter/sec",
            "range": "stddev: 0.0022346487923201584",
            "extra": "mean: 149.50934408999785 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 206.50087195695235,
            "unit": "iter/sec",
            "range": "stddev: 0.00002523292061146304",
            "extra": "mean: 4.842594564000012 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1072.5618698723144,
            "unit": "iter/sec",
            "range": "stddev: 0.000008851529614466475",
            "extra": "mean: 932.3471476000236 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 24922.279919918426,
            "unit": "iter/sec",
            "range": "stddev: 0.00000101994902035729",
            "extra": "mean: 40.12473991999332 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19709.97095931102,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012955913856994465",
            "extra": "mean: 50.73574192800106 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23314.75276794549,
            "unit": "iter/sec",
            "range": "stddev: 9.615062150103315e-7",
            "extra": "mean: 42.89129762400307 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "6a6f9eb0ea222710030e0cc05e1cb6b95e69c6b5",
          "message": "Update codecov version",
          "timestamp": "2023-01-02T17:38:13+01:00",
          "tree_id": "823ad82baf39a5fc6bbd0f65f16ef9113ff22aec",
          "url": "https://github.com/histolab/histolab/commit/6a6f9eb0ea222710030e0cc05e1cb6b95e69c6b5"
        },
        "date": 1672677585601,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.86636484725295,
            "unit": "iter/sec",
            "range": "stddev: 0.0009428217099798595",
            "extra": "mean: 127.12352140000405 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 380.82326532682714,
            "unit": "iter/sec",
            "range": "stddev: 0.00003719986610573151",
            "extra": "mean: 2.625889988999984 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1301.4300591635413,
            "unit": "iter/sec",
            "range": "stddev: 0.000005399874886621945",
            "extra": "mean: 768.3855102000052 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32277.072746650494,
            "unit": "iter/sec",
            "range": "stddev: 1.3991767027404818e-7",
            "extra": "mean: 30.981743848000406 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24594.951445749364,
            "unit": "iter/sec",
            "range": "stddev: 1.6629259544778495e-7",
            "extra": "mean: 40.65875072800054 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29463.368575814533,
            "unit": "iter/sec",
            "range": "stddev: 2.7597600445298324e-7",
            "extra": "mean: 33.940450407998014 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "83d5a7ac445417c6f2b0724b12f7dc57c31fe4c8",
          "message": "Bump pycodestyle from 2.9.1 to 2.10.0\n\nBumps [pycodestyle](https://github.com/PyCQA/pycodestyle) from 2.9.1 to 2.10.0.\n- [Release notes](https://github.com/PyCQA/pycodestyle/releases)\n- [Changelog](https://github.com/PyCQA/pycodestyle/blob/main/CHANGES.txt)\n- [Commits](https://github.com/PyCQA/pycodestyle/compare/2.9.1...2.10.0)\n\n---\nupdated-dependencies:\n- dependency-name: pycodestyle\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-02T18:28:04+01:00",
          "tree_id": "2da5cf44e67160b0a96b05ed39e22b10def5301b",
          "url": "https://github.com/histolab/histolab/commit/83d5a7ac445417c6f2b0724b12f7dc57c31fe4c8"
        },
        "date": 1672680576543,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.825524701826435,
            "unit": "iter/sec",
            "range": "stddev: 0.0010494080923488423",
            "extra": "mean: 127.78695846000018 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 375.1391490140433,
            "unit": "iter/sec",
            "range": "stddev: 0.00013619481233328632",
            "extra": "mean: 2.665677529599998 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1220.5053703527517,
            "unit": "iter/sec",
            "range": "stddev: 0.000009385045789416948",
            "extra": "mean: 819.3327324000052 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 31916.81446598846,
            "unit": "iter/sec",
            "range": "stddev: 5.350655440613453e-7",
            "extra": "mean: 31.331447599998796 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25019.680170176332,
            "unit": "iter/sec",
            "range": "stddev: 2.325732968993908e-7",
            "extra": "mean: 39.96853649600234 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29042.627781607567,
            "unit": "iter/sec",
            "range": "stddev: 2.114571850579541e-7",
            "extra": "mean: 34.432146000001126 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "b98a98b052a2cdcd580cb0204d6e11d81543905f",
          "message": "Bump pyflakes from 2.5.0 to 3.0.1\n\nBumps [pyflakes](https://github.com/PyCQA/pyflakes) from 2.5.0 to 3.0.1.\n- [Release notes](https://github.com/PyCQA/pyflakes/releases)\n- [Changelog](https://github.com/PyCQA/pyflakes/blob/main/NEWS.rst)\n- [Commits](https://github.com/PyCQA/pyflakes/compare/2.5.0...3.0.1)\n\n---\nupdated-dependencies:\n- dependency-name: pyflakes\n  dependency-type: direct:development\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-02T21:38:45+01:00",
          "tree_id": "1ce13ec40d0285db378e723b8eabc51c41744ec2",
          "url": "https://github.com/histolab/histolab/commit/b98a98b052a2cdcd580cb0204d6e11d81543905f"
        },
        "date": 1672692020972,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.847991201143742,
            "unit": "iter/sec",
            "range": "stddev: 0.0010406977334189713",
            "extra": "mean: 127.4211418399989 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 375.57751449266823,
            "unit": "iter/sec",
            "range": "stddev: 0.00006199510899674165",
            "extra": "mean: 2.662566211799992 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1311.866890185479,
            "unit": "iter/sec",
            "range": "stddev: 0.000005787228170882005",
            "extra": "mean: 762.272458800004 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32494.641244374114,
            "unit": "iter/sec",
            "range": "stddev: 1.3453626848754105e-7",
            "extra": "mean: 30.774304983998945 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25451.19106456356,
            "unit": "iter/sec",
            "range": "stddev: 1.8748331983204108e-7",
            "extra": "mean: 39.29089202400155 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29796.96254846008,
            "unit": "iter/sec",
            "range": "stddev: 2.1363936595825218e-7",
            "extra": "mean: 33.56046772799937 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "8241a164f1dcb0329ec7eff3bfc4f3f7724d8a88",
          "message": "Bump twine from 4.0.1 to 4.0.2\n\nBumps [twine](https://github.com/pypa/twine) from 4.0.1 to 4.0.2.\n- [Release notes](https://github.com/pypa/twine/releases)\n- [Changelog](https://github.com/pypa/twine/blob/main/docs/changelog.rst)\n- [Commits](https://github.com/pypa/twine/compare/4.0.1...4.0.2)\n\n---\nupdated-dependencies:\n- dependency-name: twine\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-03T11:19:42+01:00",
          "tree_id": "c7e157a7a374b0aadf0f456b68b522b3fc28d514",
          "url": "https://github.com/histolab/histolab/commit/8241a164f1dcb0329ec7eff3bfc4f3f7724d8a88"
        },
        "date": 1672741277987,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.837044959275841,
            "unit": "iter/sec",
            "range": "stddev: 0.0010424882018198588",
            "extra": "mean: 127.59911487000097 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 389.8722810493772,
            "unit": "iter/sec",
            "range": "stddev: 0.00002321578352731148",
            "extra": "mean: 2.564942543000001 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1235.1412013248255,
            "unit": "iter/sec",
            "range": "stddev: 0.00000858499887068524",
            "extra": "mean: 809.6240324000121 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32513.4322625646,
            "unit": "iter/sec",
            "range": "stddev: 1.3097817613755857e-7",
            "extra": "mean: 30.75651908800114 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24903.853632512153,
            "unit": "iter/sec",
            "range": "stddev: 2.1179324131333138e-7",
            "extra": "mean: 40.154428095999265 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29814.770453000183,
            "unit": "iter/sec",
            "range": "stddev: 2.433801212587586e-7",
            "extra": "mean: 33.54042257599781 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "8edc9a2b286a97ff73add2b19b70c7932712c0de",
          "message": "Bump pytest-xdist from 3.0.2 to 3.1.0\n\nBumps [pytest-xdist](https://github.com/pytest-dev/pytest-xdist) from 3.0.2 to 3.1.0.\n- [Release notes](https://github.com/pytest-dev/pytest-xdist/releases)\n- [Changelog](https://github.com/pytest-dev/pytest-xdist/blob/master/CHANGELOG.rst)\n- [Commits](https://github.com/pytest-dev/pytest-xdist/compare/v3.0.2...v3.1.0)\n\n---\nupdated-dependencies:\n- dependency-name: pytest-xdist\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-03T15:22:54+01:00",
          "tree_id": "3234e6f3fff64b8b3c8202800e7a49853b0fccb7",
          "url": "https://github.com/histolab/histolab/commit/8edc9a2b286a97ff73add2b19b70c7932712c0de"
        },
        "date": 1672755910227,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.7631393141150795,
            "unit": "iter/sec",
            "range": "stddev: 0.001644384310967126",
            "extra": "mean: 147.86032839999905 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 209.55275897641877,
            "unit": "iter/sec",
            "range": "stddev: 0.00002689265675159177",
            "extra": "mean: 4.7720679264000125 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1049.7197804747584,
            "unit": "iter/sec",
            "range": "stddev: 0.000012566158246235366",
            "extra": "mean: 952.6351875999978 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 24823.326556380314,
            "unit": "iter/sec",
            "range": "stddev: 1.3720723094989772e-7",
            "extra": "mean: 40.28468939200138 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19822.11334190848,
            "unit": "iter/sec",
            "range": "stddev: 1.3953745326203217e-7",
            "extra": "mean: 50.448707600000034 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23013.499338528967,
            "unit": "iter/sec",
            "range": "stddev: 7.471335085850447e-7",
            "extra": "mean: 43.45275723999998 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "80371c579bac9779a33f6662b20848bdc5316a3d",
          "message": "Bump pillow from 9.3.0 to 9.4.0\n\nBumps [pillow](https://github.com/python-pillow/Pillow) from 9.3.0 to 9.4.0.\n- [Release notes](https://github.com/python-pillow/Pillow/releases)\n- [Changelog](https://github.com/python-pillow/Pillow/blob/main/CHANGES.rst)\n- [Commits](https://github.com/python-pillow/Pillow/compare/9.3.0...9.4.0)\n\n---\nupdated-dependencies:\n- dependency-name: pillow\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-03T16:04:34+01:00",
          "tree_id": "4e25b3bdd55a14fb1a30e99884632f0c3ae57f59",
          "url": "https://github.com/histolab/histolab/commit/80371c579bac9779a33f6662b20848bdc5316a3d"
        },
        "date": 1672758381997,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.99143137438864,
            "unit": "iter/sec",
            "range": "stddev: 0.0013714067687307374",
            "extra": "mean: 125.13402833000015 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 235.1384103417025,
            "unit": "iter/sec",
            "range": "stddev: 0.00003803831937918964",
            "extra": "mean: 4.252814325599985 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1219.3918453106146,
            "unit": "iter/sec",
            "range": "stddev: 0.000007152266795123827",
            "extra": "mean: 820.0809311999876 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27816.081752437658,
            "unit": "iter/sec",
            "range": "stddev: 0.000001431595817782163",
            "extra": "mean: 35.95042640800284 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22784.82931890597,
            "unit": "iter/sec",
            "range": "stddev: 1.231531042975588e-7",
            "extra": "mean: 43.88885192000271 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26507.503362234904,
            "unit": "iter/sec",
            "range": "stddev: 3.272689152127429e-7",
            "extra": "mean: 37.725167336004006 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "3b3b7c02b84893f181442b427e29bc23f0642b29",
          "message": "Bump certifi from 2022.9.24 to 2022.12.7\n\nBumps [certifi](https://github.com/certifi/python-certifi) from 2022.9.24 to 2022.12.7.\n- [Release notes](https://github.com/certifi/python-certifi/releases)\n- [Commits](https://github.com/certifi/python-certifi/compare/2022.09.24...2022.12.07)\n\n---\nupdated-dependencies:\n- dependency-name: certifi\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-03T17:08:53+01:00",
          "tree_id": "2a2ddd203fc60d2549936ef4e2a937d2e18d9a71",
          "url": "https://github.com/histolab/histolab/commit/3b3b7c02b84893f181442b427e29bc23f0642b29"
        },
        "date": 1672762238813,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.96359111570757,
            "unit": "iter/sec",
            "range": "stddev: 0.0013004548389449683",
            "extra": "mean: 125.57148973000096 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 235.9720085165123,
            "unit": "iter/sec",
            "range": "stddev: 0.000052891554371439046",
            "extra": "mean: 4.237790771400009 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1217.6612386677245,
            "unit": "iter/sec",
            "range": "stddev: 0.000006081256436931799",
            "extra": "mean: 821.2464749999981 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28267.95465864679,
            "unit": "iter/sec",
            "range": "stddev: 6.141103125313057e-7",
            "extra": "mean: 35.37574656799984 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22529.013728091493,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017924804118034651",
            "extra": "mean: 44.387207184001 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26546.018013433222,
            "unit": "iter/sec",
            "range": "stddev: 9.285665610781825e-7",
            "extra": "mean: 37.67043326400085 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "a930704d1263cf9b6e05bbece2c7b35005c7c959",
          "message": "Bump ipdb from 0.13.9 to 0.13.11\n\nBumps [ipdb](https://github.com/gotcha/ipdb) from 0.13.9 to 0.13.11.\n- [Release notes](https://github.com/gotcha/ipdb/releases)\n- [Changelog](https://github.com/gotcha/ipdb/blob/master/HISTORY.txt)\n- [Commits](https://github.com/gotcha/ipdb/compare/0.13.9...0.13.11)\n\n---\nupdated-dependencies:\n- dependency-name: ipdb\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-03T17:40:26+01:00",
          "tree_id": "c94eac94afeae553087274a4335d468776b95b7b",
          "url": "https://github.com/histolab/histolab/commit/a930704d1263cf9b6e05bbece2c7b35005c7c959"
        },
        "date": 1672764118581,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.781893024992031,
            "unit": "iter/sec",
            "range": "stddev: 0.001235785515253216",
            "extra": "mean: 128.50343699000206 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 345.21321376967876,
            "unit": "iter/sec",
            "range": "stddev: 0.0004134641136611376",
            "extra": "mean: 2.896760495000012 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1218.8448011925152,
            "unit": "iter/sec",
            "range": "stddev: 0.0000067084617270374295",
            "extra": "mean: 820.4490014000157 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32691.104776331333,
            "unit": "iter/sec",
            "range": "stddev: 2.3886362657428043e-7",
            "extra": "mean: 30.58936083200251 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25371.611694176634,
            "unit": "iter/sec",
            "range": "stddev: 1.6772709635280236e-7",
            "extra": "mean: 39.414129935999426 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29970.676591721804,
            "unit": "iter/sec",
            "range": "stddev: 5.312505573610534e-7",
            "extra": "mean: 33.36594677599669 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "ad88e52390ffa190a3feb48c98ef2aa883886a44",
          "message": "Bump coverage from 6.5.0 to 7.0.3\n\nBumps [coverage](https://github.com/nedbat/coveragepy) from 6.5.0 to 7.0.3.\n- [Release notes](https://github.com/nedbat/coveragepy/releases)\n- [Changelog](https://github.com/nedbat/coveragepy/blob/master/CHANGES.rst)\n- [Commits](https://github.com/nedbat/coveragepy/compare/6.5.0...7.0.3)\n\n---\nupdated-dependencies:\n- dependency-name: coverage\n  dependency-type: direct:development\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-04T10:40:03+01:00",
          "tree_id": "7f1a5d341a8dc7c1bd73ef88b4b69cda20d7ed79",
          "url": "https://github.com/histolab/histolab/commit/ad88e52390ffa190a3feb48c98ef2aa883886a44"
        },
        "date": 1672825310578,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.883566899765973,
            "unit": "iter/sec",
            "range": "stddev: 0.0010153740643375263",
            "extra": "mean: 126.8461361099993 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 385.40440458312156,
            "unit": "iter/sec",
            "range": "stddev: 0.000028359546994789484",
            "extra": "mean: 2.594677144600007 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1225.2937983003287,
            "unit": "iter/sec",
            "range": "stddev: 0.000006849097823504282",
            "extra": "mean: 816.1307935999957 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32421.23245494006,
            "unit": "iter/sec",
            "range": "stddev: 1.6013463889670111e-7",
            "extra": "mean: 30.84398476800129 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25296.530734552085,
            "unit": "iter/sec",
            "range": "stddev: 2.0445829238007672e-7",
            "extra": "mean: 39.531112407999785 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29835.754875919298,
            "unit": "iter/sec",
            "range": "stddev: 2.0563472400165794e-7",
            "extra": "mean: 33.516832543999385 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "9d6ac3bb3699076c5a8d970755e8ae9a10791ed4",
          "message": "Bump pre-commit from 2.20.0 to 2.21.0\n\nBumps [pre-commit](https://github.com/pre-commit/pre-commit) from 2.20.0 to 2.21.0.\n- [Release notes](https://github.com/pre-commit/pre-commit/releases)\n- [Changelog](https://github.com/pre-commit/pre-commit/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/pre-commit/pre-commit/compare/v2.20.0...v2.21.0)\n\n---\nupdated-dependencies:\n- dependency-name: pre-commit\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-04T11:26:30+01:00",
          "tree_id": "46aa5f1d05360246137221aaf019a0aca809e04a",
          "url": "https://github.com/histolab/histolab/commit/9d6ac3bb3699076c5a8d970755e8ae9a10791ed4"
        },
        "date": 1672828093624,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.061528815758171,
            "unit": "iter/sec",
            "range": "stddev: 0.0011675314665644202",
            "extra": "mean: 124.04594994999741 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 249.2499822522807,
            "unit": "iter/sec",
            "range": "stddev: 0.00002392356047727117",
            "extra": "mean: 4.012036393999984 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1251.9906504232695,
            "unit": "iter/sec",
            "range": "stddev: 0.000005950981333898786",
            "extra": "mean: 798.7280094000084 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28238.228996918886,
            "unit": "iter/sec",
            "range": "stddev: 1.093719128620438e-7",
            "extra": "mean: 35.41298571199741 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22671.28437877631,
            "unit": "iter/sec",
            "range": "stddev: 1.0431012488403066e-7",
            "extra": "mean: 44.108661128001586 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26241.796860224265,
            "unit": "iter/sec",
            "range": "stddev: 1.1760299723300745e-7",
            "extra": "mean: 38.10714660000053 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "50dc21a00c59b4053dd3d56890c8e0c1156b883f",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2023-01-04T13:29:25+01:00",
          "tree_id": "e3a7eda353bc6d5dd4a991e003c176b5dc6dbb0a",
          "url": "https://github.com/histolab/histolab/commit/50dc21a00c59b4053dd3d56890c8e0c1156b883f"
        },
        "date": 1672835492338,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.7425573151036176,
            "unit": "iter/sec",
            "range": "stddev: 0.003975504047486883",
            "extra": "mean: 148.31167956999892 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 219.54650464165587,
            "unit": "iter/sec",
            "range": "stddev: 0.00012798953625841954",
            "extra": "mean: 4.554843638399991 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 975.2524515723981,
            "unit": "iter/sec",
            "range": "stddev: 0.00005147058666046082",
            "extra": "mean: 1.0253755306000016 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15433.692320839897,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031410111748775915",
            "extra": "mean: 64.79330928799936 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 13108.613332772658,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026986324832157487",
            "extra": "mean: 76.28571951999788 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14885.183522721803,
            "unit": "iter/sec",
            "range": "stddev: 0.000003437697647535027",
            "extra": "mean: 67.18089827199833 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "9b296cf41e658ad9a3798768c2fb7723d7f508ee",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2023-01-04T14:39:17+01:00",
          "tree_id": "bc5d94c1bdfcc89ebfbfc12910a1d24dda1b842a",
          "url": "https://github.com/histolab/histolab/commit/9b296cf41e658ad9a3798768c2fb7723d7f508ee"
        },
        "date": 1672839657765,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.02091602979651,
            "unit": "iter/sec",
            "range": "stddev: 0.0013633813909867368",
            "extra": "mean: 124.67403925999832 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 238.1690070664233,
            "unit": "iter/sec",
            "range": "stddev: 0.00009225053015398077",
            "extra": "mean: 4.19869911840002 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1235.215103320142,
            "unit": "iter/sec",
            "range": "stddev: 0.000006353365096568928",
            "extra": "mean: 809.5755931999975 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28683.61525869055,
            "unit": "iter/sec",
            "range": "stddev: 6.594447647505412e-7",
            "extra": "mean: 34.863108815999794 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 23032.75440261255,
            "unit": "iter/sec",
            "range": "stddev: 9.162424594879471e-7",
            "extra": "mean: 43.41643133600087 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26355.838001818145,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010338232005870955",
            "extra": "mean: 37.9422577999992 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "3b1c4b2f88dd207c65b4eff5bf0e7bac8a5ba70e",
          "message": "Bump coverage from 7.0.3 to 7.0.4\n\nBumps [coverage](https://github.com/nedbat/coveragepy) from 7.0.3 to 7.0.4.\n- [Release notes](https://github.com/nedbat/coveragepy/releases)\n- [Changelog](https://github.com/nedbat/coveragepy/blob/master/CHANGES.rst)\n- [Commits](https://github.com/nedbat/coveragepy/compare/7.0.3...7.0.4)\n\n---\nupdated-dependencies:\n- dependency-name: coverage\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-09T22:45:53+01:00",
          "tree_id": "8aca6264910caa8eecb5b9c052faba9f893ad079",
          "url": "https://github.com/histolab/histolab/commit/3b1c4b2f88dd207c65b4eff5bf0e7bac8a5ba70e"
        },
        "date": 1673300902555,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.714765197672785,
            "unit": "iter/sec",
            "range": "stddev: 0.00989161546816505",
            "extra": "mean: 148.92553508000276 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 196.0292449751358,
            "unit": "iter/sec",
            "range": "stddev: 0.00007102565323589111",
            "extra": "mean: 5.101279659200031 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1077.9939241787172,
            "unit": "iter/sec",
            "range": "stddev: 0.000008707458393709617",
            "extra": "mean: 927.6490132000163 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25177.077536604065,
            "unit": "iter/sec",
            "range": "stddev: 8.367441372418352e-7",
            "extra": "mean: 39.7186686400014 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20278.092330643223,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010484079265428625",
            "extra": "mean: 49.314303520003705 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23532.74903853489,
            "unit": "iter/sec",
            "range": "stddev: 9.031990281960583e-7",
            "extra": "mean: 42.49397290399429 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "18a14b00c5122534330d93b69de67475adf584dc",
          "message": "Bump coverage from 7.0.4 to 7.0.5\n\nBumps [coverage](https://github.com/nedbat/coveragepy) from 7.0.4 to 7.0.5.\n- [Release notes](https://github.com/nedbat/coveragepy/releases)\n- [Changelog](https://github.com/nedbat/coveragepy/blob/master/CHANGES.rst)\n- [Commits](https://github.com/nedbat/coveragepy/compare/7.0.4...7.0.5)\n\n---\nupdated-dependencies:\n- dependency-name: coverage\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-11T11:11:22+01:00",
          "tree_id": "e7dbfdc92c3f176a53d6c8ba5193fc0fb95c3260",
          "url": "https://github.com/histolab/histolab/commit/18a14b00c5122534330d93b69de67475adf584dc"
        },
        "date": 1673432002900,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.70925834155682,
            "unit": "iter/sec",
            "range": "stddev: 0.006708181976822617",
            "extra": "mean: 149.04777087000042 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 201.73048314753046,
            "unit": "iter/sec",
            "range": "stddev: 0.00005878365485509367",
            "extra": "mean: 4.957109031799996 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1063.0785110074512,
            "unit": "iter/sec",
            "range": "stddev: 0.000007859569185610794",
            "extra": "mean: 940.6642967999858 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25068.988789209823,
            "unit": "iter/sec",
            "range": "stddev: 6.667008089527262e-7",
            "extra": "mean: 39.88992170399865 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20193.94149619399,
            "unit": "iter/sec",
            "range": "stddev: 8.907881386195284e-7",
            "extra": "mean: 49.519802767997135 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23226.643316142487,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010633340042924167",
            "extra": "mean: 43.054004248000865 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "9b363547962d0b7ec098bab82335125941aa4c11",
          "message": "Bump gitpython from 3.1.29 to 3.1.30\n\nBumps [gitpython](https://github.com/gitpython-developers/GitPython) from 3.1.29 to 3.1.30.\n- [Release notes](https://github.com/gitpython-developers/GitPython/releases)\n- [Changelog](https://github.com/gitpython-developers/GitPython/blob/main/CHANGES)\n- [Commits](https://github.com/gitpython-developers/GitPython/compare/3.1.29...3.1.30)\n\n---\nupdated-dependencies:\n- dependency-name: gitpython\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-11T12:19:07+01:00",
          "tree_id": "8c4748b71d9dccd3ff3f8add379f56ee2a9745f2",
          "url": "https://github.com/histolab/histolab/commit/9b363547962d0b7ec098bab82335125941aa4c11"
        },
        "date": 1673436057788,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.000918744219284,
            "unit": "iter/sec",
            "range": "stddev: 0.0014891699487982392",
            "extra": "mean: 124.9856462699995 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 229.06111502521833,
            "unit": "iter/sec",
            "range": "stddev: 0.00003781901350784364",
            "extra": "mean: 4.365647132599986 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1224.0692829539782,
            "unit": "iter/sec",
            "range": "stddev: 0.000006387412631611815",
            "extra": "mean: 816.9472218000237 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28339.97155412717,
            "unit": "iter/sec",
            "range": "stddev: 3.7922528410421246e-7",
            "extra": "mean: 35.28585052000062 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22339.470657954298,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016079395287499375",
            "extra": "mean: 44.76381805599931 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26031.989491505185,
            "unit": "iter/sec",
            "range": "stddev: 9.375067145251293e-7",
            "extra": "mean: 38.41427488000181 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "fe68f58a100918897ce56baa70faf33f71affefe",
          "message": "Bump requests from 2.28.1 to 2.28.2\n\nBumps [requests](https://github.com/psf/requests) from 2.28.1 to 2.28.2.\n- [Release notes](https://github.com/psf/requests/releases)\n- [Changelog](https://github.com/psf/requests/blob/main/HISTORY.md)\n- [Commits](https://github.com/psf/requests/compare/v2.28.1...v2.28.2)\n\n---\nupdated-dependencies:\n- dependency-name: requests\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-13T09:38:04+01:00",
          "tree_id": "8c496dfdecb2e44ce2112879fcbf34fbd407af09",
          "url": "https://github.com/histolab/histolab/commit/fe68f58a100918897ce56baa70faf33f71affefe"
        },
        "date": 1673599391885,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.300786508700095,
            "unit": "iter/sec",
            "range": "stddev: 0.005697916565622902",
            "extra": "mean: 136.9715439300046 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 219.08874464448488,
            "unit": "iter/sec",
            "range": "stddev: 0.00016343154880014247",
            "extra": "mean: 4.564360445000034 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1038.1957095601545,
            "unit": "iter/sec",
            "range": "stddev: 0.00004226036250420298",
            "extra": "mean: 963.2095286000208 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15301.410927835906,
            "unit": "iter/sec",
            "range": "stddev: 0.000004109419169145417",
            "extra": "mean: 65.35345039200456 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12256.591523513485,
            "unit": "iter/sec",
            "range": "stddev: 0.000004953466310983636",
            "extra": "mean: 81.58875149600635 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14122.962333062393,
            "unit": "iter/sec",
            "range": "stddev: 0.000004849830144104256",
            "extra": "mean: 70.80667472000277 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Ernesto Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "c355939194f76e7787f5f44e087880f37a365c35",
          "message": "address Alessia's comments",
          "timestamp": "2023-01-14T12:03:34+01:00",
          "tree_id": "ccd9b0525daf36905669b0e69ff7fe487156777e",
          "url": "https://github.com/histolab/histolab/commit/c355939194f76e7787f5f44e087880f37a365c35"
        },
        "date": 1673694313004,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.835833563550751,
            "unit": "iter/sec",
            "range": "stddev: 0.0011148796069349013",
            "extra": "mean: 127.61884130000043 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 386.6390040295803,
            "unit": "iter/sec",
            "range": "stddev: 0.00004855895462623129",
            "extra": "mean: 2.5863919304000005 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1216.8541040625325,
            "unit": "iter/sec",
            "range": "stddev: 0.000006389380557467243",
            "extra": "mean: 821.7912045999981 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32388.400488103664,
            "unit": "iter/sec",
            "range": "stddev: 1.909399520870919e-7",
            "extra": "mean: 30.87525116800077 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24984.917429849687,
            "unit": "iter/sec",
            "range": "stddev: 1.7932420114674458e-7",
            "extra": "mean: 40.024146680000285 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29350.90343219522,
            "unit": "iter/sec",
            "range": "stddev: 2.0574237825384316e-7",
            "extra": "mean: 34.070501520000676 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "b4dc10692b367c9789078b4cb1aa3aeebfe0de9c",
          "message": "Generalize calculation of principal components",
          "timestamp": "2023-01-14T12:27:17+01:00",
          "tree_id": "a047c9706254d2fbedfd49a26547fde621af35e3",
          "url": "https://github.com/histolab/histolab/commit/b4dc10692b367c9789078b4cb1aa3aeebfe0de9c"
        },
        "date": 1673695776373,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.587750413304424,
            "unit": "iter/sec",
            "range": "stddev: 0.004859172309822712",
            "extra": "mean: 151.7968862299989 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 202.2122741699265,
            "unit": "iter/sec",
            "range": "stddev: 0.000150184897907164",
            "extra": "mean: 4.9452982224000035 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 943.2770753924325,
            "unit": "iter/sec",
            "range": "stddev: 0.00004878091820024969",
            "extra": "mean: 1.0601338950000128 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 14134.210189068112,
            "unit": "iter/sec",
            "range": "stddev: 0.000004340201989469468",
            "extra": "mean: 70.75032751199888 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12052.737070013856,
            "unit": "iter/sec",
            "range": "stddev: 0.000004332025958534202",
            "extra": "mean: 82.9687061279974 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 13361.58586434181,
            "unit": "iter/sec",
            "range": "stddev: 0.000006180335966061813",
            "extra": "mean: 74.84141554399685 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicole.bussolaceradini@gmail.com",
            "name": "Nicole Bussola",
            "username": "nicolebussola"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "571abe5dcec2ed1c43b56aa3b0dc7930cec685ad",
          "message": "Fix typo in doc of thumbnail size",
          "timestamp": "2023-01-14T12:52:43+01:00",
          "tree_id": "85dfb4d289db661eae3ee05372e3d26c11286f85",
          "url": "https://github.com/histolab/histolab/commit/571abe5dcec2ed1c43b56aa3b0dc7930cec685ad"
        },
        "date": 1673697430470,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.056650294652329,
            "unit": "iter/sec",
            "range": "stddev: 0.0012675750841057017",
            "extra": "mean: 124.12106314999903 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 240.49203964071575,
            "unit": "iter/sec",
            "range": "stddev: 0.00006193192118866349",
            "extra": "mean: 4.158141789199988 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1234.3168661750838,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063668034020568436",
            "extra": "mean: 810.1647376000074 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28569.122099676242,
            "unit": "iter/sec",
            "range": "stddev: 1.8675194507866635e-7",
            "extra": "mean: 35.00282565600196 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 23022.182829037083,
            "unit": "iter/sec",
            "range": "stddev: 9.865624123997335e-8",
            "extra": "mean: 43.436367759999484 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26285.66165070681,
            "unit": "iter/sec",
            "range": "stddev: 8.309954756651617e-7",
            "extra": "mean: 38.0435544399968 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "c4caa8c1d9f76a286def0c18ec090433f4264b27",
          "message": "Bump large-image from 1.17.3 to 1.19.1\n\nBumps [large-image](https://github.com/girder/large_image) from 1.17.3 to 1.19.1.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.17.3...v1.19.1)\n\n---\nupdated-dependencies:\n- dependency-name: large-image\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-14T13:51:36+01:00",
          "tree_id": "68b2eda9b0923a807758b4d1609f17d7e7f8b35f",
          "url": "https://github.com/histolab/histolab/commit/c4caa8c1d9f76a286def0c18ec090433f4264b27"
        },
        "date": 1673700803776,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.854242902414151,
            "unit": "iter/sec",
            "range": "stddev: 0.0011784027369459728",
            "extra": "mean: 127.3197190900005 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 363.3404392055563,
            "unit": "iter/sec",
            "range": "stddev: 0.00014801474888654224",
            "extra": "mean: 2.7522397512000025 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1295.2443806026704,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045980085163876055",
            "extra": "mean: 772.0550769999903 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32487.679596553695,
            "unit": "iter/sec",
            "range": "stddev: 1.5031176577552052e-7",
            "extra": "mean: 30.78089948000104 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24966.71008783786,
            "unit": "iter/sec",
            "range": "stddev: 1.8266560994990323e-7",
            "extra": "mean: 40.05333487999826 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29501.003373846874,
            "unit": "iter/sec",
            "range": "stddev: 1.928558208168426e-7",
            "extra": "mean: 33.89715215200158 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "7c41e05f7e02842811e4a69062fc4cd041154bbf",
          "message": "Tissue mask is 1D",
          "timestamp": "2023-01-14T14:55:07+01:00",
          "tree_id": "6f2d057bd3846311fe4bc9fcc199adc359f6ebd3",
          "url": "https://github.com/histolab/histolab/commit/7c41e05f7e02842811e4a69062fc4cd041154bbf"
        },
        "date": 1673704622112,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.8665746370017855,
            "unit": "iter/sec",
            "range": "stddev: 0.004837392978886401",
            "extra": "mean: 145.63301979000101 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 210.1690003218559,
            "unit": "iter/sec",
            "range": "stddev: 0.00009263238241412618",
            "extra": "mean: 4.758075636600001 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1070.0519203594993,
            "unit": "iter/sec",
            "range": "stddev: 0.000009703558900469952",
            "extra": "mean: 934.5340921999707 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25460.94998300838,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015568574147959287",
            "extra": "mean: 39.27583223200077 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20225.29906525538,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016905827145146519",
            "extra": "mean: 49.44302661600091 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23991.606457020578,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017329303067590245",
            "extra": "mean: 41.68124388800038 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "9a16e61fa818c8bf6ed293a1a7b53f2f6cbd76d9",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2023-01-14T14:58:33+01:00",
          "tree_id": "14c3924b2a1c93fa016f3c137ea796a9768bc448",
          "url": "https://github.com/histolab/histolab/commit/9a16e61fa818c8bf6ed293a1a7b53f2f6cbd76d9"
        },
        "date": 1673704811653,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.979661178493712,
            "unit": "iter/sec",
            "range": "stddev: 0.001354364630364699",
            "extra": "mean: 125.31860409000045 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 234.2237597603585,
            "unit": "iter/sec",
            "range": "stddev: 0.00003860510655883779",
            "extra": "mean: 4.2694216890000005 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1198.1153393628695,
            "unit": "iter/sec",
            "range": "stddev: 0.000006636976450099751",
            "extra": "mean: 834.6441841999763 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28395.062838119044,
            "unit": "iter/sec",
            "range": "stddev: 8.575114186618932e-8",
            "extra": "mean: 35.217389927996464 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 23152.151759716166,
            "unit": "iter/sec",
            "range": "stddev: 1.3230107194389874e-7",
            "extra": "mean: 43.192529591999346 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26463.061082822645,
            "unit": "iter/sec",
            "range": "stddev: 1.3738070994698245e-7",
            "extra": "mean: 37.788523287999624 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Ernesto Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "baa701bcd418bb6e74eb271af899b2f0a9a4d47b",
          "message": "remove LGTM add codeQL badge",
          "timestamp": "2023-01-14T15:00:22+01:00",
          "tree_id": "61aca43289c02adb12ee75a4a8b80130bf5d9fe7",
          "url": "https://github.com/histolab/histolab/commit/baa701bcd418bb6e74eb271af899b2f0a9a4d47b"
        },
        "date": 1673704991173,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.354602482749535,
            "unit": "iter/sec",
            "range": "stddev: 0.004659545502419702",
            "extra": "mean: 135.96927942000036 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 231.38319124086448,
            "unit": "iter/sec",
            "range": "stddev: 0.00012681937882294794",
            "extra": "mean: 4.321835111000019 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1074.563175369184,
            "unit": "iter/sec",
            "range": "stddev: 0.00003210157300902745",
            "extra": "mean: 930.6107104000034 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16076.02353277715,
            "unit": "iter/sec",
            "range": "stddev: 0.00000311694430847691",
            "extra": "mean: 62.204437432000304 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 13282.868007072735,
            "unit": "iter/sec",
            "range": "stddev: 0.000002970325573665853",
            "extra": "mean: 75.28494595199845 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15001.440281079073,
            "unit": "iter/sec",
            "range": "stddev: 0.000004769614226561803",
            "extra": "mean: 66.66026603200726 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "c790f491ce573592f6ef318520330a979317c90c",
          "message": "Bump large-image-source-pil from 1.17.3 to 1.19.1\n\nBumps [large-image-source-pil](https://github.com/girder/large_image) from 1.17.3 to 1.19.1.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.17.3...v1.19.1)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-pil\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-14T16:40:17+01:00",
          "tree_id": "65e0bb19f3fdba8151fca33435bb8fafaa7cd558",
          "url": "https://github.com/histolab/histolab/commit/c790f491ce573592f6ef318520330a979317c90c"
        },
        "date": 1673710920318,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.022269408496028,
            "unit": "iter/sec",
            "range": "stddev: 0.001235155266869453",
            "extra": "mean: 124.6530064099997 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 232.0657861939806,
            "unit": "iter/sec",
            "range": "stddev: 0.00004316147722888289",
            "extra": "mean: 4.309122927599992 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1248.8440683693025,
            "unit": "iter/sec",
            "range": "stddev: 0.000006632934596005798",
            "extra": "mean: 800.7404809999741 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28634.38193752372,
            "unit": "iter/sec",
            "range": "stddev: 1.1364320704027318e-7",
            "extra": "mean: 34.92305167200266 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22857.4452964108,
            "unit": "iter/sec",
            "range": "stddev: 1.22377721641665e-7",
            "extra": "mean: 43.74942111999826 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26271.07732237484,
            "unit": "iter/sec",
            "range": "stddev: 2.2142628079583192e-7",
            "extra": "mean: 38.06467423200456 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "880c793c80e0633529a64c716a9e93e28846ff98",
          "message": "Bump large-image-source-openslide from 1.17.3 to 1.19.1\n\nBumps [large-image-source-openslide](https://github.com/girder/large_image) from 1.17.3 to 1.19.1.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.17.3...v1.19.1)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-openslide\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-14T19:30:32+01:00",
          "tree_id": "09beabfc18421123d9400b7cf00d5e6da7469999",
          "url": "https://github.com/histolab/histolab/commit/880c793c80e0633529a64c716a9e93e28846ff98"
        },
        "date": 1673721138441,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.015484960857249,
            "unit": "iter/sec",
            "range": "stddev: 0.0014095868297341818",
            "extra": "mean: 124.75851491000128 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 231.99750296930085,
            "unit": "iter/sec",
            "range": "stddev: 0.000046470192030284964",
            "extra": "mean: 4.310391220600013 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1201.0746453003915,
            "unit": "iter/sec",
            "range": "stddev: 0.000006720351522763854",
            "extra": "mean: 832.5877195999738 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28671.73500122178,
            "unit": "iter/sec",
            "range": "stddev: 6.005117370998901e-7",
            "extra": "mean: 34.877554496000585 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22750.891780672708,
            "unit": "iter/sec",
            "range": "stddev: 0.000001050018947530909",
            "extra": "mean: 43.954320984002834 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26511.708217869385,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011062988078761625",
            "extra": "mean: 37.71918398400226 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "007ad228833463c114bd57936fb4d61f1a6c6794",
          "message": "Bump pytest from 7.2.0 to 7.2.1\n\nBumps [pytest](https://github.com/pytest-dev/pytest) from 7.2.0 to 7.2.1.\n- [Release notes](https://github.com/pytest-dev/pytest/releases)\n- [Changelog](https://github.com/pytest-dev/pytest/blob/main/CHANGELOG.rst)\n- [Commits](https://github.com/pytest-dev/pytest/compare/7.2.0...7.2.1)\n\n---\nupdated-dependencies:\n- dependency-name: pytest\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-14T20:44:58+01:00",
          "tree_id": "25cf6f9452d267356ed2ce28fb32080bc5aae977",
          "url": "https://github.com/histolab/histolab/commit/007ad228833463c114bd57936fb4d61f1a6c6794"
        },
        "date": 1673725594034,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.803804205122913,
            "unit": "iter/sec",
            "range": "stddev: 0.0011207884512488863",
            "extra": "mean: 128.1426306599974 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 333.31704095192146,
            "unit": "iter/sec",
            "range": "stddev: 0.00046984178188326953",
            "extra": "mean: 3.000146638599983 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1221.9477903988345,
            "unit": "iter/sec",
            "range": "stddev: 0.000005539081841650851",
            "extra": "mean: 818.3655700000145 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32284.49850529077,
            "unit": "iter/sec",
            "range": "stddev: 2.4202219066826765e-7",
            "extra": "mean: 30.974617736004802 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24923.292048786883,
            "unit": "iter/sec",
            "range": "stddev: 1.6861134755954027e-7",
            "extra": "mean: 40.12311046399964 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29767.530520407116,
            "unit": "iter/sec",
            "range": "stddev: 6.906244243103575e-7",
            "extra": "mean: 33.59364994400357 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Ernesto Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "9edaec93f6416fae18554e09dc60b5176f913321",
          "message": "fix readme",
          "timestamp": "2023-01-16T10:10:00+01:00",
          "tree_id": "25d05e225d9ac8cd6ade8118e2a735c067ee39b0",
          "url": "https://github.com/histolab/histolab/commit/9edaec93f6416fae18554e09dc60b5176f913321"
        },
        "date": 1673860340575,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.208295113237711,
            "unit": "iter/sec",
            "range": "stddev: 0.011230234833808273",
            "extra": "mean: 138.7290592699992 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 234.46180886560614,
            "unit": "iter/sec",
            "range": "stddev: 0.00017741440005726635",
            "extra": "mean: 4.265086944600012 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1046.4362564130938,
            "unit": "iter/sec",
            "range": "stddev: 0.000036950032802065565",
            "extra": "mean: 955.6243811999934 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15269.487871863696,
            "unit": "iter/sec",
            "range": "stddev: 0.000005032174219369405",
            "extra": "mean: 65.49008116000073 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12330.649202908571,
            "unit": "iter/sec",
            "range": "stddev: 0.000005255176627424482",
            "extra": "mean: 81.0987307760015 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 13822.99004467766,
            "unit": "iter/sec",
            "range": "stddev: 0.00000522222033013431",
            "extra": "mean: 72.34324822400026 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nicole.bussolaceradini@gmail.com",
            "name": "Nicole Bussola",
            "username": "nicolebussola"
          },
          "committer": {
            "email": "31658006+nicolebussola@users.noreply.github.com",
            "name": "nicolebussola",
            "username": "nicolebussola"
          },
          "distinct": true,
          "id": "de50e836c5489261a9b6cc0f131ce7755d2a6615",
          "message": "fix typo",
          "timestamp": "2023-01-17T20:58:13+01:00",
          "tree_id": "517b5a88e985dac8238f4962a1def0713729c383",
          "url": "https://github.com/histolab/histolab/commit/de50e836c5489261a9b6cc0f131ce7755d2a6615"
        },
        "date": 1673985612361,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.7686583196510135,
            "unit": "iter/sec",
            "range": "stddev: 0.0012782344494698156",
            "extra": "mean: 128.7223557599998 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 191.624074556715,
            "unit": "iter/sec",
            "range": "stddev: 0.00011223190933312775",
            "extra": "mean: 5.21855096920001 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1215.4985897252739,
            "unit": "iter/sec",
            "range": "stddev: 0.000013957245876063786",
            "extra": "mean: 822.707659600016 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29020.76554179158,
            "unit": "iter/sec",
            "range": "stddev: 1.4558948005440608e-7",
            "extra": "mean: 34.45808480000096 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22854.495776829048,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011088932640273554",
            "extra": "mean: 43.75506726400181 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26448.456557661968,
            "unit": "iter/sec",
            "range": "stddev: 3.881027822892316e-7",
            "extra": "mean: 37.809389663999355 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Ernesto Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Ernesto Arbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "f6aa92217ee8a603fbb2024adf7043271faa844c",
          "message": "release: prepare v0.6.0 release",
          "timestamp": "2023-01-18T14:42:14+01:00",
          "tree_id": "8534309e07ef7c340d1f658d6344923da586efa7",
          "url": "https://github.com/histolab/histolab/commit/f6aa92217ee8a603fbb2024adf7043271faa844c"
        },
        "date": 1674049482827,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.98997419508156,
            "unit": "iter/sec",
            "range": "stddev: 0.0014990373345293562",
            "extra": "mean: 125.15684977000008 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 220.32631698680692,
            "unit": "iter/sec",
            "range": "stddev: 0.0000651749290212517",
            "extra": "mean: 4.538722444399957 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1164.3699526792282,
            "unit": "iter/sec",
            "range": "stddev: 0.00002264802979927868",
            "extra": "mean: 858.8335672000028 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28728.553587177983,
            "unit": "iter/sec",
            "range": "stddev: 1.263038525036989e-7",
            "extra": "mean: 34.80857457600359 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 23053.2707984484,
            "unit": "iter/sec",
            "range": "stddev: 1.0147340529887397e-7",
            "extra": "mean: 43.37779262399954 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26409.11855364026,
            "unit": "iter/sec",
            "range": "stddev: 1.2806494369372992e-7",
            "extra": "mean: 37.86570907199621 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Ernesto Arbitrio",
            "username": "ernestoarbitrio"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "Ernesto Arbitrio",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "2b31fb87eeb9b11de9882628992644597797508d",
          "message": "fix action",
          "timestamp": "2023-01-18T15:10:03+01:00",
          "tree_id": "df47d417b1e0f7c1aca0533613fca476e518b50f",
          "url": "https://github.com/histolab/histolab/commit/2b31fb87eeb9b11de9882628992644597797508d"
        },
        "date": 1674051118959,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.765553400306587,
            "unit": "iter/sec",
            "range": "stddev: 0.0022834648720704547",
            "extra": "mean: 128.77382312000066 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 201.76159428829462,
            "unit": "iter/sec",
            "range": "stddev: 0.0000769804478872462",
            "extra": "mean: 4.9563446578 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1226.5018207924736,
            "unit": "iter/sec",
            "range": "stddev: 0.000006552530904530015",
            "extra": "mean: 815.3269592000072 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28652.836007060716,
            "unit": "iter/sec",
            "range": "stddev: 1.0740536562883866e-7",
            "extra": "mean: 34.90055922400063 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 23103.816284473316,
            "unit": "iter/sec",
            "range": "stddev: 1.0927314833519092e-7",
            "extra": "mean: 43.282892648001166 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26430.29477516455,
            "unit": "iter/sec",
            "range": "stddev: 4.233871575991832e-7",
            "extra": "mean: 37.8353706799993 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "5687d35e05f21c8f3e76bea89a0020971273c2d5",
          "message": "Bump large-image from 1.19.1 to 1.19.3\n\nBumps [large-image](https://github.com/girder/large_image) from 1.19.1 to 1.19.3.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.19.1...v1.19.3)\n\n---\nupdated-dependencies:\n- dependency-name: large-image\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-24T10:15:17+01:00",
          "tree_id": "428e4a750d322b4f1e4c67fe0b35234c57f030e3",
          "url": "https://github.com/histolab/histolab/commit/5687d35e05f21c8f3e76bea89a0020971273c2d5"
        },
        "date": 1674551868646,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.60009027607446,
            "unit": "iter/sec",
            "range": "stddev: 0.005088075159242782",
            "extra": "mean: 151.51307908999854 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 209.63803246053916,
            "unit": "iter/sec",
            "range": "stddev: 0.0001483869535584985",
            "extra": "mean: 4.770126814599985 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 951.4272639821331,
            "unit": "iter/sec",
            "range": "stddev: 0.0000530850777382354",
            "extra": "mean: 1.0510524953999834 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15286.581074553955,
            "unit": "iter/sec",
            "range": "stddev: 0.000004586987846083767",
            "extra": "mean: 65.41685123199977 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 13219.833264002636,
            "unit": "iter/sec",
            "range": "stddev: 0.000005839623315175554",
            "extra": "mean: 75.64391925600012 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15160.500912716068,
            "unit": "iter/sec",
            "range": "stddev: 0.000004754498275482985",
            "extra": "mean: 65.96088122399942 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "ad4bba252a0b532c1d35528855d67c491e8e09ee",
          "message": "Bump large-image-source-pil from 1.19.1 to 1.19.3\n\nBumps [large-image-source-pil](https://github.com/girder/large_image) from 1.19.1 to 1.19.3.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.19.1...v1.19.3)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-pil\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-01-30T10:26:55+01:00",
          "tree_id": "381081aa8b659ac6c7019c79aa461a8a4b9b9d6c",
          "url": "https://github.com/histolab/histolab/commit/ad4bba252a0b532c1d35528855d67c491e8e09ee"
        },
        "date": 1675070923703,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.799624385548405,
            "unit": "iter/sec",
            "range": "stddev: 0.0010953691862267358",
            "extra": "mean: 128.2113023100007 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 369.1413599313152,
            "unit": "iter/sec",
            "range": "stddev: 0.00006411653646404999",
            "extra": "mean: 2.7089893156000358 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1214.722322502724,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050829590343550674",
            "extra": "mean: 823.2334102000152 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32517.640859839415,
            "unit": "iter/sec",
            "range": "stddev: 1.5806508503207232e-7",
            "extra": "mean: 30.752538423998658 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25509.219623581717,
            "unit": "iter/sec",
            "range": "stddev: 1.4774956146875058e-7",
            "extra": "mean: 39.201512816000104 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29878.052111232966,
            "unit": "iter/sec",
            "range": "stddev: 2.236276284251109e-7",
            "extra": "mean: 33.46938402400201 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "98marcolini@gmail.com",
            "name": "alessiamarcolini",
            "username": "alessiamarcolini"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "e2c48825e85a29ce2693c6c6434e7924c9342257",
          "message": "Update isort to 5.11.5 in pre-commit hooks",
          "timestamp": "2023-02-01T14:12:22+01:00",
          "tree_id": "9f2f5966856e1c59f4e2b069b6341818358e9ae3",
          "url": "https://github.com/histolab/histolab/commit/e2c48825e85a29ce2693c6c6434e7924c9342257"
        },
        "date": 1675257257736,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.696720356484689,
            "unit": "iter/sec",
            "range": "stddev: 0.001232230264736943",
            "extra": "mean: 129.92546872999924 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 224.59963199649565,
            "unit": "iter/sec",
            "range": "stddev: 0.00005536800348835364",
            "extra": "mean: 4.4523670457999796 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1205.5889128692704,
            "unit": "iter/sec",
            "range": "stddev: 0.000006956984558291334",
            "extra": "mean: 829.4701363999991 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28544.02258434274,
            "unit": "iter/sec",
            "range": "stddev: 3.311254420308391e-7",
            "extra": "mean: 35.0336045680026 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22608.666830724604,
            "unit": "iter/sec",
            "range": "stddev: 1.1077319677058254e-7",
            "extra": "mean: 44.23082561599904 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26286.22207255806,
            "unit": "iter/sec",
            "range": "stddev: 6.863155316740898e-7",
            "extra": "mean: 38.04274335199989 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "c672bb2aafc419402debe7e2272c44b5fdf1eeb2",
          "message": "Bump large-image-source-openslide from 1.19.1 to 1.19.3\n\nBumps [large-image-source-openslide](https://github.com/girder/large_image) from 1.19.1 to 1.19.3.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.19.1...v1.19.3)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-openslide\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-02-02T11:14:28+01:00",
          "tree_id": "ce1f2ceb269060d2157fa95769bff3802552df39",
          "url": "https://github.com/histolab/histolab/commit/c672bb2aafc419402debe7e2272c44b5fdf1eeb2"
        },
        "date": 1675332988204,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.798589285857892,
            "unit": "iter/sec",
            "range": "stddev: 0.001019654809426853",
            "extra": "mean: 128.2283196799989 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 363.5914530051979,
            "unit": "iter/sec",
            "range": "stddev: 0.00008038561709761559",
            "extra": "mean: 2.750339678599937 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1245.8865743451822,
            "unit": "iter/sec",
            "range": "stddev: 0.000004786052512190182",
            "extra": "mean: 802.6412842000354 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32104.07715677377,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011908544519247475",
            "extra": "mean: 31.148691648001655 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24859.15834031078,
            "unit": "iter/sec",
            "range": "stddev: 7.870029980042175e-7",
            "extra": "mean: 40.22662337599877 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29205.18958312887,
            "unit": "iter/sec",
            "range": "stddev: 1.9131623240955595e-7",
            "extra": "mean: 34.24048993599672 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "2bb30a203128d322bca8828bb3c47072ddc4f045",
          "message": "Bump coverage from 7.0.5 to 7.1.0\n\nBumps [coverage](https://github.com/nedbat/coveragepy) from 7.0.5 to 7.1.0.\n- [Release notes](https://github.com/nedbat/coveragepy/releases)\n- [Changelog](https://github.com/nedbat/coveragepy/blob/master/CHANGES.rst)\n- [Commits](https://github.com/nedbat/coveragepy/compare/7.0.5...7.1.0)\n\n---\nupdated-dependencies:\n- dependency-name: coverage\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-02-02T11:41:18+01:00",
          "tree_id": "ef7d5575fbf76ef56cd354d21e7d49ccd1f5e005",
          "url": "https://github.com/histolab/histolab/commit/2bb30a203128d322bca8828bb3c47072ddc4f045"
        },
        "date": 1675334623012,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.075992677920412,
            "unit": "iter/sec",
            "range": "stddev: 0.0033746601572765596",
            "extra": "mean: 141.32292747000037 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 205.80754111912125,
            "unit": "iter/sec",
            "range": "stddev: 0.0000672369082064588",
            "extra": "mean: 4.85890844700001 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1084.6148140695975,
            "unit": "iter/sec",
            "range": "stddev: 0.000008504898611457416",
            "extra": "mean: 921.9863006000139 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25882.660708789666,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012117765291324587",
            "extra": "mean: 38.63590421599906 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20603.44740884101,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013670614693888613",
            "extra": "mean: 48.535566895998954 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23737.231158713,
            "unit": "iter/sec",
            "range": "stddev: 9.697780490077388e-7",
            "extra": "mean: 42.12791261599773 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "2fb668d3c83b6652d4bb7d639e8714226c919fd6",
          "message": "Bump sphinxcontrib-katex from 0.9.0 to 0.9.4\n\nBumps [sphinxcontrib-katex](https://github.com/hagenw/sphinxcontrib-katex) from 0.9.0 to 0.9.4.\n- [Release notes](https://github.com/hagenw/sphinxcontrib-katex/releases)\n- [Changelog](https://github.com/hagenw/sphinxcontrib-katex/blob/main/CHANGELOG.rst)\n- [Commits](https://github.com/hagenw/sphinxcontrib-katex/compare/v0.9.0...v0.9.4)\n\n---\nupdated-dependencies:\n- dependency-name: sphinxcontrib-katex\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-02-13T09:33:52+01:00",
          "tree_id": "94658e8bcc440e0db6f3d2c48b0e79ff6b645814",
          "url": "https://github.com/histolab/histolab/commit/2fb668d3c83b6652d4bb7d639e8714226c919fd6"
        },
        "date": 1676277339837,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.752172212473405,
            "unit": "iter/sec",
            "range": "stddev: 0.0011119934803165944",
            "extra": "mean: 128.99610232999976 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 324.0863196756619,
            "unit": "iter/sec",
            "range": "stddev: 0.00007548845587715052",
            "extra": "mean: 3.0855976920000106 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1242.160806992904,
            "unit": "iter/sec",
            "range": "stddev: 0.000006504155053487167",
            "extra": "mean: 805.0487460000113 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32055.431150118773,
            "unit": "iter/sec",
            "range": "stddev: 1.459133832572132e-7",
            "extra": "mean: 31.195961624003754 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24969.134349639335,
            "unit": "iter/sec",
            "range": "stddev: 1.9315889521121384e-7",
            "extra": "mean: 40.049446088003606 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29182.321593125223,
            "unit": "iter/sec",
            "range": "stddev: 1.9794741449577925e-7",
            "extra": "mean: 34.26732163199722 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "bcc6b1f2f3817e6cdc31ed7937341c357f57cb93",
          "message": "Bump typing-extensions from 4.4.0 to 4.5.0\n\nBumps [typing-extensions](https://github.com/python/typing_extensions) from 4.4.0 to 4.5.0.\n- [Release notes](https://github.com/python/typing_extensions/releases)\n- [Changelog](https://github.com/python/typing_extensions/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/python/typing_extensions/compare/4.4.0...4.5.0)\n\n---\nupdated-dependencies:\n- dependency-name: typing-extensions\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-02-15T09:28:42+01:00",
          "tree_id": "a837330e4cbf4ccebb4c5e5c4ebc34fa105c5e8e",
          "url": "https://github.com/histolab/histolab/commit/bcc6b1f2f3817e6cdc31ed7937341c357f57cb93"
        },
        "date": 1676449830639,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.7955780309698905,
            "unit": "iter/sec",
            "range": "stddev: 0.0009640593613399975",
            "extra": "mean: 128.27785137000092 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 359.89177913699547,
            "unit": "iter/sec",
            "range": "stddev: 0.00009798412781331252",
            "extra": "mean: 2.778613066400004 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1254.628700095033,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054264237207316305",
            "extra": "mean: 797.0485609999628 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 31763.485779450777,
            "unit": "iter/sec",
            "range": "stddev: 1.631897157505255e-7",
            "extra": "mean: 31.482690752000053 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24825.778342903683,
            "unit": "iter/sec",
            "range": "stddev: 1.6090650256710073e-7",
            "extra": "mean: 40.280710887996975 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29246.10437970377,
            "unit": "iter/sec",
            "range": "stddev: 1.982013084348412e-7",
            "extra": "mean: 34.19258808000359 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "30166c4371ad9df26f559e59e9ee2ea0af315991",
          "message": "Bump large-image from 1.19.3 to 1.20.0\n\nBumps [large-image](https://github.com/girder/large_image) from 1.19.3 to 1.20.0.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.19.3...v1.20.0)\n\n---\nupdated-dependencies:\n- dependency-name: large-image\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-02-21T09:08:24+01:00",
          "tree_id": "a13af749c0b33fa6ad14607fbe73686e6db9fcf5",
          "url": "https://github.com/histolab/histolab/commit/30166c4371ad9df26f559e59e9ee2ea0af315991"
        },
        "date": 1676967045326,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.754115052594071,
            "unit": "iter/sec",
            "range": "stddev: 0.001606307277518376",
            "extra": "mean: 148.05788652000047 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 196.18028432950015,
            "unit": "iter/sec",
            "range": "stddev: 0.00005754130027170064",
            "extra": "mean: 5.097352180000013 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1057.712874797119,
            "unit": "iter/sec",
            "range": "stddev: 0.000008108043531201917",
            "extra": "mean: 945.4361611999957 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 24968.084042217935,
            "unit": "iter/sec",
            "range": "stddev: 2.2208932401222905e-7",
            "extra": "mean: 40.0511308079997 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19775.67262933533,
            "unit": "iter/sec",
            "range": "stddev: 1.5539810740764444e-7",
            "extra": "mean: 50.567180128002065 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 22831.15151939199,
            "unit": "iter/sec",
            "range": "stddev: 0.000001094046198105368",
            "extra": "mean: 43.799805679999736 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "671b868aa5765fafdba035d3da7290362c03726a",
          "message": "Bump large-image-source-pil from 1.19.3 to 1.20.0\n\nBumps [large-image-source-pil](https://github.com/girder/large_image) from 1.19.3 to 1.20.0.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.19.3...v1.20.0)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-pil\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-02-21T13:52:02+01:00",
          "tree_id": "14eb0d39b218d22770f51b92548701b0e9ee5f59",
          "url": "https://github.com/histolab/histolab/commit/671b868aa5765fafdba035d3da7290362c03726a"
        },
        "date": 1676984037012,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.5141450519462705,
            "unit": "iter/sec",
            "range": "stddev: 0.0010374683762918193",
            "extra": "mean: 133.0823391200022 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 181.66165076456141,
            "unit": "iter/sec",
            "range": "stddev: 0.00008130927534076732",
            "extra": "mean: 5.50473914439998 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1194.2638745597803,
            "unit": "iter/sec",
            "range": "stddev: 0.00001131606037006491",
            "extra": "mean: 837.3358863999897 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29243.08202847576,
            "unit": "iter/sec",
            "range": "stddev: 1.1933990284237728e-7",
            "extra": "mean: 34.19612197600236 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22786.567842967153,
            "unit": "iter/sec",
            "range": "stddev: 1.1816342894165334e-7",
            "extra": "mean: 43.88550337600054 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26686.06631250433,
            "unit": "iter/sec",
            "range": "stddev: 1.0919251803562458e-7",
            "extra": "mean: 37.472739079998064 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "e07c187ee668d1f55b59216981a7cfb82b677072",
          "message": "Bump large-image from 1.20.0 to 1.20.1\n\nBumps [large-image](https://github.com/girder/large_image) from 1.20.0 to 1.20.1.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.20.0...v1.20.1)\n\n---\nupdated-dependencies:\n- dependency-name: large-image\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-02-22T10:05:13+01:00",
          "tree_id": "b72f5aeaaf561ebf152e67bc3b6595db37477417",
          "url": "https://github.com/histolab/histolab/commit/e07c187ee668d1f55b59216981a7cfb82b677072"
        },
        "date": 1677056835158,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.27624533241199,
            "unit": "iter/sec",
            "range": "stddev: 0.005449648046807683",
            "extra": "mean: 120.82773767999996 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 252.33128099640444,
            "unit": "iter/sec",
            "range": "stddev: 0.0002955672555493089",
            "extra": "mean: 3.963044122200011 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1047.5577688417588,
            "unit": "iter/sec",
            "range": "stddev: 0.00005680278859977875",
            "extra": "mean: 954.6012923999967 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16272.090472572632,
            "unit": "iter/sec",
            "range": "stddev: 0.00000567536377417933",
            "extra": "mean: 61.454918880001735 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 13425.553709510581,
            "unit": "iter/sec",
            "range": "stddev: 0.000005418599465522243",
            "extra": "mean: 74.48482361599781 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15557.778899898738,
            "unit": "iter/sec",
            "range": "stddev: 0.000004439378915374407",
            "extra": "mean: 64.27652728799922 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "c7260d3e72a5f233de34b2830455f07e4452bc95",
          "message": "Bump pytest-xdist from 3.1.0 to 3.2.0\n\nBumps [pytest-xdist](https://github.com/pytest-dev/pytest-xdist) from 3.1.0 to 3.2.0.\n- [Release notes](https://github.com/pytest-dev/pytest-xdist/releases)\n- [Changelog](https://github.com/pytest-dev/pytest-xdist/blob/master/CHANGELOG.rst)\n- [Commits](https://github.com/pytest-dev/pytest-xdist/compare/v3.1.0...v3.2.0)\n\n---\nupdated-dependencies:\n- dependency-name: pytest-xdist\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-02-22T11:41:16+01:00",
          "tree_id": "77d404f0169ec2fca915e4c7a4d73d3693621d46",
          "url": "https://github.com/histolab/histolab/commit/c7260d3e72a5f233de34b2830455f07e4452bc95"
        },
        "date": 1677062572364,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.79266406463071,
            "unit": "iter/sec",
            "range": "stddev: 0.001923450235286603",
            "extra": "mean: 128.32581922000116 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 370.87144442200014,
            "unit": "iter/sec",
            "range": "stddev: 0.00008631825460367706",
            "extra": "mean: 2.6963521054000013 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1293.7501953368858,
            "unit": "iter/sec",
            "range": "stddev: 0.000008613643211191884",
            "extra": "mean: 772.9467431999922 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32378.481576435654,
            "unit": "iter/sec",
            "range": "stddev: 1.3826349143976543e-7",
            "extra": "mean: 30.88470957599748 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24898.74503050567,
            "unit": "iter/sec",
            "range": "stddev: 1.457842537871009e-7",
            "extra": "mean: 40.162666784000976 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29754.616042821748,
            "unit": "iter/sec",
            "range": "stddev: 2.1836894120341783e-7",
            "extra": "mean: 33.60823068799937 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "e207e1e6b8ebb682de5aa640c2e4f418a6c682d4",
          "message": "Bump cryptography from 38.0.3 to 39.0.1\n\nBumps [cryptography](https://github.com/pyca/cryptography) from 38.0.3 to 39.0.1.\n- [Release notes](https://github.com/pyca/cryptography/releases)\n- [Changelog](https://github.com/pyca/cryptography/blob/main/CHANGELOG.rst)\n- [Commits](https://github.com/pyca/cryptography/compare/38.0.3...39.0.1)\n\n---\nupdated-dependencies:\n- dependency-name: cryptography\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-02-22T12:36:46+01:00",
          "tree_id": "15faeb12302a76fbee1468d4d3a7a437fe24ec7b",
          "url": "https://github.com/histolab/histolab/commit/e207e1e6b8ebb682de5aa640c2e4f418a6c682d4"
        },
        "date": 1677065923665,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.459438176117889,
            "unit": "iter/sec",
            "range": "stddev: 0.005491801185241437",
            "extra": "mean: 134.0583535099998 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 329.2200170030705,
            "unit": "iter/sec",
            "range": "stddev: 0.00021495683949391412",
            "extra": "mean: 3.0374823776000026 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1001.4787406451568,
            "unit": "iter/sec",
            "range": "stddev: 0.00001962286797225646",
            "extra": "mean: 998.5234427999899 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16254.943461208422,
            "unit": "iter/sec",
            "range": "stddev: 0.000002841577541156655",
            "extra": "mean: 61.51974643199765 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 14370.336766297149,
            "unit": "iter/sec",
            "range": "stddev: 0.000003343877996922887",
            "extra": "mean: 69.58779159200412 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15842.142394105593,
            "unit": "iter/sec",
            "range": "stddev: 0.000003226162699822908",
            "extra": "mean: 63.122775639996235 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "26dab348a92624852c5e020c8e1fa90407dc1af2",
          "message": "Bump large-image-source-openslide from 1.19.3 to 1.20.1\n\nBumps [large-image-source-openslide](https://github.com/girder/large_image) from 1.19.3 to 1.20.1.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.19.3...v1.20.1)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-openslide\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-02-22T15:24:01+01:00",
          "tree_id": "e707fc65a0097ca4940475700976843126c32064",
          "url": "https://github.com/histolab/histolab/commit/26dab348a92624852c5e020c8e1fa90407dc1af2"
        },
        "date": 1677075944060,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.122955522612443,
            "unit": "iter/sec",
            "range": "stddev: 0.001380679470847721",
            "extra": "mean: 123.10790046999884 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 252.41450675675878,
            "unit": "iter/sec",
            "range": "stddev: 0.000040617198822717256",
            "extra": "mean: 3.9617374328000015 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1233.0180413971725,
            "unit": "iter/sec",
            "range": "stddev: 0.000005927481120581625",
            "extra": "mean: 811.0181412000003 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27855.422167230157,
            "unit": "iter/sec",
            "range": "stddev: 1.143573938789767e-7",
            "extra": "mean: 35.899653359999206 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21874.498183699146,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010292878687629119",
            "extra": "mean: 45.71533443200076 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25839.118334504714,
            "unit": "iter/sec",
            "range": "stddev: 1.0722923304685938e-7",
            "extra": "mean: 38.701010888000496 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "f0e889c6ee0ec091c57e2ef1750cb543303b22f7",
          "message": "Bump pooch from 1.6.0 to 1.7.0\n\nBumps [pooch](https://github.com/fatiando/pooch) from 1.6.0 to 1.7.0.\n- [Release notes](https://github.com/fatiando/pooch/releases)\n- [Changelog](https://github.com/fatiando/pooch/blob/main/doc/changes.rst)\n- [Commits](https://github.com/fatiando/pooch/compare/v1.6.0...v1.7.0)\n\n---\nupdated-dependencies:\n- dependency-name: pooch\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-02-28T17:12:27+01:00",
          "tree_id": "7ed28dee04410c6822be502d060b762b7e753c59",
          "url": "https://github.com/histolab/histolab/commit/f0e889c6ee0ec091c57e2ef1750cb543303b22f7"
        },
        "date": 1677600848011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.764621965168809,
            "unit": "iter/sec",
            "range": "stddev: 0.0012343031667718175",
            "extra": "mean: 128.7892706800001 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 327.2330141004029,
            "unit": "iter/sec",
            "range": "stddev: 0.00019960001430913862",
            "extra": "mean: 3.05592637940002 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1219.8734508259213,
            "unit": "iter/sec",
            "range": "stddev: 0.000006198849962917008",
            "extra": "mean: 819.7571635999992 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 31609.919992497515,
            "unit": "iter/sec",
            "range": "stddev: 1.518355339188132e-7",
            "extra": "mean: 31.63563844000066 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24835.05484410211,
            "unit": "iter/sec",
            "range": "stddev: 1.8452247131400443e-7",
            "extra": "mean: 40.26566505599976 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29894.28935890857,
            "unit": "iter/sec",
            "range": "stddev: 1.767233758177496e-7",
            "extra": "mean: 33.45120494399703 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "1cb9ec4e68fa44ccaec0b89495e573213c3a176c",
          "message": "Bump coverage from 7.1.0 to 7.2.1\n\nBumps [coverage](https://github.com/nedbat/coveragepy) from 7.1.0 to 7.2.1.\n- [Release notes](https://github.com/nedbat/coveragepy/releases)\n- [Changelog](https://github.com/nedbat/coveragepy/blob/master/CHANGES.rst)\n- [Commits](https://github.com/nedbat/coveragepy/compare/7.1.0...7.2.1)\n\n---\nupdated-dependencies:\n- dependency-name: coverage\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-02-28T17:51:12+01:00",
          "tree_id": "cf3abd18566659a0141e1491a4d626368fd6e340",
          "url": "https://github.com/histolab/histolab/commit/1cb9ec4e68fa44ccaec0b89495e573213c3a176c"
        },
        "date": 1677603189610,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.939217548218375,
            "unit": "iter/sec",
            "range": "stddev: 0.0025532194040337147",
            "extra": "mean: 144.10846656000103 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 199.92773333779064,
            "unit": "iter/sec",
            "range": "stddev: 0.00011123135329227637",
            "extra": "mean: 5.00180731960001 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1054.3040756605294,
            "unit": "iter/sec",
            "range": "stddev: 0.000009312846399212106",
            "extra": "mean: 948.4929661999956 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25893.105856494458,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012630672999183172",
            "extra": "mean: 38.6203186880025 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20727.558405666492,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017203287874068674",
            "extra": "mean: 48.24494908800352 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23664.78928661858,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011801358612408247",
            "extra": "mean: 42.25687319199824 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "806c2dfe412d456fcd2b0cdcf2da54501131a2a8",
          "message": "Bump large-image-source-pil from 1.20.0 to 1.20.1\n\nBumps [large-image-source-pil](https://github.com/girder/large_image) from 1.20.0 to 1.20.1.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.20.0...v1.20.1)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-pil\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-03-01T10:25:26+01:00",
          "tree_id": "34d5bae42d75e410ddc3c10093e64b5b5168fc55",
          "url": "https://github.com/histolab/histolab/commit/806c2dfe412d456fcd2b0cdcf2da54501131a2a8"
        },
        "date": 1677662866117,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.981999881423747,
            "unit": "iter/sec",
            "range": "stddev: 0.0020482936994966577",
            "extra": "mean: 143.2254392699994 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 214.37775170158366,
            "unit": "iter/sec",
            "range": "stddev: 0.00007246161341786759",
            "extra": "mean: 4.66466315680002 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1082.7623389567382,
            "unit": "iter/sec",
            "range": "stddev: 0.0000086809513055241",
            "extra": "mean: 923.5637074000181 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25691.461294404315,
            "unit": "iter/sec",
            "range": "stddev: 0.00000117402740418424",
            "extra": "mean: 38.923437967999234 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20789.544869363137,
            "unit": "iter/sec",
            "range": "stddev: 0.000001422169521952289",
            "extra": "mean: 48.101101119999385 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 24112.485528937596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013188354793147926",
            "extra": "mean: 41.47229031200004 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "12b8b62a09785448dfe6982c38567025aad97b2e",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2023-03-01T12:16:27+01:00",
          "tree_id": "2c716ca9f62e743b68cd67eccd379cd2b325781a",
          "url": "https://github.com/histolab/histolab/commit/12b8b62a09785448dfe6982c38567025aad97b2e"
        },
        "date": 1677669498304,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.803708005416524,
            "unit": "iter/sec",
            "range": "stddev: 0.0010093871270495422",
            "extra": "mean: 128.14421033000002 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 367.9295552713358,
            "unit": "iter/sec",
            "range": "stddev: 0.00013477923690903234",
            "extra": "mean: 2.7179115829999945 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1220.9192026605028,
            "unit": "iter/sec",
            "range": "stddev: 0.0000043751572048929",
            "extra": "mean: 819.0550183999903 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32730.47014047713,
            "unit": "iter/sec",
            "range": "stddev: 1.65832405629977e-7",
            "extra": "mean: 30.55257060800113 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25162.019309201296,
            "unit": "iter/sec",
            "range": "stddev: 1.9881153061941728e-7",
            "extra": "mean: 39.742438304000416 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29946.646924468725,
            "unit": "iter/sec",
            "range": "stddev: 2.1506423107734919e-7",
            "extra": "mean: 33.39272014400126 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "838a66477ee4c95ce6c4bdb9cc19a48bf056e2a0",
          "message": "Bump pytest from 7.2.1 to 7.2.2\n\nBumps [pytest](https://github.com/pytest-dev/pytest) from 7.2.1 to 7.2.2.\n- [Release notes](https://github.com/pytest-dev/pytest/releases)\n- [Changelog](https://github.com/pytest-dev/pytest/blob/main/CHANGELOG.rst)\n- [Commits](https://github.com/pytest-dev/pytest/compare/7.2.1...7.2.2)\n\n---\nupdated-dependencies:\n- dependency-name: pytest\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-03-06T09:15:59+01:00",
          "tree_id": "e7c4de9d1202a7d0e31dde268711ddf2f2da958f",
          "url": "https://github.com/histolab/histolab/commit/838a66477ee4c95ce6c4bdb9cc19a48bf056e2a0"
        },
        "date": 1678090663602,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.828667302555868,
            "unit": "iter/sec",
            "range": "stddev: 0.0010593507570196684",
            "extra": "mean: 127.73566193999896 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 358.80950865245353,
            "unit": "iter/sec",
            "range": "stddev: 0.00008546630152755734",
            "extra": "mean: 2.786994145599999 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1247.7719683910486,
            "unit": "iter/sec",
            "range": "stddev: 0.00000993536590610329",
            "extra": "mean: 801.4284864000103 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32278.981020940817,
            "unit": "iter/sec",
            "range": "stddev: 1.232315750617169e-7",
            "extra": "mean: 30.9799122639979 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24889.411734145706,
            "unit": "iter/sec",
            "range": "stddev: 1.3867660621025917e-7",
            "extra": "mean: 40.17772740800069 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29573.920299235695,
            "unit": "iter/sec",
            "range": "stddev: 2.120524219759381e-7",
            "extra": "mean: 33.813575943999695 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "7fc5fcd2d877b6b3240fe182275b3ab353ed4eaa",
          "message": "Bump coverage from 7.2.1 to 7.2.2\n\nBumps [coverage](https://github.com/nedbat/coveragepy) from 7.2.1 to 7.2.2.\n- [Release notes](https://github.com/nedbat/coveragepy/releases)\n- [Changelog](https://github.com/nedbat/coveragepy/blob/master/CHANGES.rst)\n- [Commits](https://github.com/nedbat/coveragepy/compare/7.2.1...7.2.2)\n\n---\nupdated-dependencies:\n- dependency-name: coverage\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-03-17T09:49:09+01:00",
          "tree_id": "1a386fb2aec265c0e45c55846dbf6a2da9cfcebe",
          "url": "https://github.com/histolab/histolab/commit/7fc5fcd2d877b6b3240fe182275b3ab353ed4eaa"
        },
        "date": 1679043048178,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.769005660032856,
            "unit": "iter/sec",
            "range": "stddev: 0.0014303183854165434",
            "extra": "mean: 128.71660077999877 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 322.25964426319973,
            "unit": "iter/sec",
            "range": "stddev: 0.00016564369352290288",
            "extra": "mean: 3.10308789139998 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1194.7953203711577,
            "unit": "iter/sec",
            "range": "stddev: 0.000006850249510198723",
            "extra": "mean: 836.9634388000065 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 31695.045714998672,
            "unit": "iter/sec",
            "range": "stddev: 2.117651333715568e-7",
            "extra": "mean: 31.550672272000607 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24528.373506681535,
            "unit": "iter/sec",
            "range": "stddev: 1.7040862621642856e-7",
            "extra": "mean: 40.769111727999416 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 28887.76563036502,
            "unit": "iter/sec",
            "range": "stddev: 1.8810542274055834e-7",
            "extra": "mean: 34.616730583997196 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "9c886649e4f34fe7a32b00e8f019eaeaa170dba4",
          "message": "Bump large-image from 1.20.1 to 1.20.2\n\nBumps [large-image](https://github.com/girder/large_image) from 1.20.1 to 1.20.2.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.20.1...v1.20.2)\n\n---\nupdated-dependencies:\n- dependency-name: large-image\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-03-29T11:51:18+02:00",
          "tree_id": "11c0f3fc553aab97085e62e7bcd60e32c8ddbb5b",
          "url": "https://github.com/histolab/histolab/commit/9c886649e4f34fe7a32b00e8f019eaeaa170dba4"
        },
        "date": 1680083609839,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.7183874509026715,
            "unit": "iter/sec",
            "range": "stddev: 0.004050270050484144",
            "extra": "mean: 148.84524110999905 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 216.119637485695,
            "unit": "iter/sec",
            "range": "stddev: 0.000023601254332178513",
            "extra": "mean: 4.627066802599972 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1057.8949629543415,
            "unit": "iter/sec",
            "range": "stddev: 0.000006648236804117468",
            "extra": "mean: 945.2734298000054 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 24570.402966303427,
            "unit": "iter/sec",
            "range": "stddev: 6.569617546608758e-7",
            "extra": "mean: 40.69937320000122 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19913.415123303068,
            "unit": "iter/sec",
            "range": "stddev: 1.552771973656348e-7",
            "extra": "mean: 50.21740338400218 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23044.461666879797,
            "unit": "iter/sec",
            "range": "stddev: 1.6575087011780038e-7",
            "extra": "mean: 43.39437451199956 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "75fe42a44b289c301b9a1b4ce22457991c7a7f53",
          "message": "Bump ipdb from 0.13.11 to 0.13.13\n\nBumps [ipdb](https://github.com/gotcha/ipdb) from 0.13.11 to 0.13.13.\n- [Release notes](https://github.com/gotcha/ipdb/releases)\n- [Changelog](https://github.com/gotcha/ipdb/blob/master/HISTORY.txt)\n- [Commits](https://github.com/gotcha/ipdb/compare/0.13.11...0.13.13)\n\n---\nupdated-dependencies:\n- dependency-name: ipdb\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-03-29T12:43:36+02:00",
          "tree_id": "9d237192c416f91a306795a352fab29915ddbf95",
          "url": "https://github.com/histolab/histolab/commit/75fe42a44b289c301b9a1b4ce22457991c7a7f53"
        },
        "date": 1680086728437,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.0039119241188,
            "unit": "iter/sec",
            "range": "stddev: 0.0014382637662641625",
            "extra": "mean: 124.93890606000093 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 233.89096763823883,
            "unit": "iter/sec",
            "range": "stddev: 0.00006662980547872703",
            "extra": "mean: 4.2754964421999775 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1214.4908217984173,
            "unit": "iter/sec",
            "range": "stddev: 0.000006511254954513538",
            "extra": "mean: 823.3903312000336 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28419.75606845927,
            "unit": "iter/sec",
            "range": "stddev: 7.260522823836309e-7",
            "extra": "mean: 35.186790399999836 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22822.88560048031,
            "unit": "iter/sec",
            "range": "stddev: 7.178236499073605e-7",
            "extra": "mean: 43.81566895199944 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26541.66148267287,
            "unit": "iter/sec",
            "range": "stddev: 1.0280032677946349e-7",
            "extra": "mean: 37.67661646400052 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "bf7087baa9baa0f05e5b23b3e4cc2b00fd339207",
          "message": "Bump pytest-xdist from 3.2.0 to 3.2.1\n\nBumps [pytest-xdist](https://github.com/pytest-dev/pytest-xdist) from 3.2.0 to 3.2.1.\n- [Release notes](https://github.com/pytest-dev/pytest-xdist/releases)\n- [Changelog](https://github.com/pytest-dev/pytest-xdist/blob/master/CHANGELOG.rst)\n- [Commits](https://github.com/pytest-dev/pytest-xdist/compare/v3.2.0...v3.2.1)\n\n---\nupdated-dependencies:\n- dependency-name: pytest-xdist\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-03-29T13:13:42+02:00",
          "tree_id": "e6c34b05e1252939bee1dac052c76242f2151dc0",
          "url": "https://github.com/histolab/histolab/commit/bf7087baa9baa0f05e5b23b3e4cc2b00fd339207"
        },
        "date": 1680088524637,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.822851506972412,
            "unit": "iter/sec",
            "range": "stddev: 0.0012406496006842976",
            "extra": "mean: 127.83062532999791 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 250.38383254379266,
            "unit": "iter/sec",
            "range": "stddev: 0.0006746439318145107",
            "extra": "mean: 3.9938680937999376 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1264.6075488207066,
            "unit": "iter/sec",
            "range": "stddev: 0.000013387724129676058",
            "extra": "mean: 790.7591575999504 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 31744.70505520071,
            "unit": "iter/sec",
            "range": "stddev: 1.4355609917016099e-7",
            "extra": "mean: 31.501316463993135 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25061.08134851269,
            "unit": "iter/sec",
            "range": "stddev: 1.7171583906550124e-7",
            "extra": "mean: 39.902508039995155 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29680.659496926106,
            "unit": "iter/sec",
            "range": "stddev: 2.220122057595464e-7",
            "extra": "mean: 33.69197372799499 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "60c1a50d59da4280cef03ff57a93c8b73b9a4d06",
          "message": "Bump large-image-source-pil from 1.20.1 to 1.20.2\n\nBumps [large-image-source-pil](https://github.com/girder/large_image) from 1.20.1 to 1.20.2.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.20.1...v1.20.2)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-pil\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-03-29T14:28:24+02:00",
          "tree_id": "ddfc703b14e58945d9d814092a825bf6890c21b9",
          "url": "https://github.com/histolab/histolab/commit/60c1a50d59da4280cef03ff57a93c8b73b9a4d06"
        },
        "date": 1680093033323,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.596866734974127,
            "unit": "iter/sec",
            "range": "stddev: 0.004219785528822155",
            "extra": "mean: 131.63321601999982 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 233.04269498921389,
            "unit": "iter/sec",
            "range": "stddev: 0.00037322899252679244",
            "extra": "mean: 4.291059198599998 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1014.7446418914875,
            "unit": "iter/sec",
            "range": "stddev: 0.00011384882344987106",
            "extra": "mean: 985.4696035999722 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15665.295553861646,
            "unit": "iter/sec",
            "range": "stddev: 0.000005893259645328909",
            "extra": "mean: 63.835373967999665 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12382.48245416709,
            "unit": "iter/sec",
            "range": "stddev: 0.000007766497104821943",
            "extra": "mean: 80.75925031199768 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 13595.805712471825,
            "unit": "iter/sec",
            "range": "stddev: 0.00000926356999870673",
            "extra": "mean: 73.55209548799826 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "31db248b36067874df14f67ecadceb8db41c9f38",
          "message": "Bump large-image-source-openslide from 1.20.1 to 1.20.2\n\nBumps [large-image-source-openslide](https://github.com/girder/large_image) from 1.20.1 to 1.20.2.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.20.1...v1.20.2)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-openslide\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-03-29T15:00:10+02:00",
          "tree_id": "ead5244624e62153d655e257dc5da360d99d0a77",
          "url": "https://github.com/histolab/histolab/commit/31db248b36067874df14f67ecadceb8db41c9f38"
        },
        "date": 1680094936654,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.742194441315594,
            "unit": "iter/sec",
            "range": "stddev: 0.004436976179795426",
            "extra": "mean: 148.31966190000173 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 206.40647948182175,
            "unit": "iter/sec",
            "range": "stddev: 0.000024260718393695048",
            "extra": "mean: 4.844809147999979 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1053.4298880762778,
            "unit": "iter/sec",
            "range": "stddev: 0.000008762815752096268",
            "extra": "mean: 949.2800719999991 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 24995.22405756121,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012892736511573445",
            "extra": "mean: 40.00764296799707 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 20192.721449713386,
            "unit": "iter/sec",
            "range": "stddev: 0.000001529014405891434",
            "extra": "mean: 49.52279475999967 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23091.878986371838,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011131127527017527",
            "extra": "mean: 43.305267647997425 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "7d5900a33100816160b2daa5575117f999e800bc",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2023-03-29T16:07:12+02:00",
          "tree_id": "62a78af06a5be87ecfd0a491505a6cc928171107",
          "url": "https://github.com/histolab/histolab/commit/7d5900a33100816160b2daa5575117f999e800bc"
        },
        "date": 1680098936542,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.882703865612755,
            "unit": "iter/sec",
            "range": "stddev: 0.001241956104973326",
            "extra": "mean: 126.86002380000174 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 376.8431558439612,
            "unit": "iter/sec",
            "range": "stddev: 0.00004742334325506766",
            "extra": "mean: 2.6536238870000033 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1319.0038242189157,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056011672500204764",
            "extra": "mean: 758.1479156 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 31956.816766796514,
            "unit": "iter/sec",
            "range": "stddev: 9.608203921782514e-7",
            "extra": "mean: 31.292228112000547 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25083.901008350458,
            "unit": "iter/sec",
            "range": "stddev: 2.1874333844366815e-7",
            "extra": "mean: 39.86620740000126 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29639.2085440914,
            "unit": "iter/sec",
            "range": "stddev: 2.2380491891476734e-7",
            "extra": "mean: 33.739092543999504 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "d3d57a0630aee17fb60e29dd23f72376a3c66436",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2023-03-30T11:20:50+02:00",
          "tree_id": "a63a4ff49bf9ccdf29cbac50ce0368d479086538",
          "url": "https://github.com/histolab/histolab/commit/d3d57a0630aee17fb60e29dd23f72376a3c66436"
        },
        "date": 1680168154594,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.86020122281149,
            "unit": "iter/sec",
            "range": "stddev: 0.0012621410070588655",
            "extra": "mean: 127.22320607999818 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 382.02274873495514,
            "unit": "iter/sec",
            "range": "stddev: 0.000049628240577126715",
            "extra": "mean: 2.617645162000008 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1205.0235323719135,
            "unit": "iter/sec",
            "range": "stddev: 0.00000536213896847976",
            "extra": "mean: 829.8593124000206 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 31978.904246499103,
            "unit": "iter/sec",
            "range": "stddev: 1.4925406554471047e-7",
            "extra": "mean: 31.270614912000156 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25335.20106651622,
            "unit": "iter/sec",
            "range": "stddev: 1.8873433398059076e-7",
            "extra": "mean: 39.470774175999395 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29612.35436995025,
            "unit": "iter/sec",
            "range": "stddev: 1.9531391050502626e-7",
            "extra": "mean: 33.769689080000035 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "1fc19ccdc33e172cb5b9fbf55025e52c1dfb45f7",
          "message": "Bump pillow from 9.4.0 to 9.5.0\n\nBumps [pillow](https://github.com/python-pillow/Pillow) from 9.4.0 to 9.5.0.\n- [Release notes](https://github.com/python-pillow/Pillow/releases)\n- [Changelog](https://github.com/python-pillow/Pillow/blob/main/CHANGES.rst)\n- [Commits](https://github.com/python-pillow/Pillow/compare/9.4.0...9.5.0)\n\n---\nupdated-dependencies:\n- dependency-name: pillow\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-04-03T11:30:19+02:00",
          "tree_id": "9a09bf89c3809b972d78c2c31b7fa0b49a746151",
          "url": "https://github.com/histolab/histolab/commit/1fc19ccdc33e172cb5b9fbf55025e52c1dfb45f7"
        },
        "date": 1680514356917,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.162849990493877,
            "unit": "iter/sec",
            "range": "stddev: 0.00601468591950602",
            "extra": "mean: 139.6092339400019 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 218.86723238917483,
            "unit": "iter/sec",
            "range": "stddev: 0.0001590266449988922",
            "extra": "mean: 4.568979965999972 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1012.8336528931802,
            "unit": "iter/sec",
            "range": "stddev: 0.0000356344330776136",
            "extra": "mean: 987.3289628000406 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15202.012895754711,
            "unit": "iter/sec",
            "range": "stddev: 0.000004082006872080604",
            "extra": "mean: 65.78076251199991 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 11701.549626724376,
            "unit": "iter/sec",
            "range": "stddev: 0.000007962756073322591",
            "extra": "mean: 85.45876673600287 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 13876.504098188507,
            "unit": "iter/sec",
            "range": "stddev: 0.000005353997450050929",
            "extra": "mean: 72.06426005599951 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "85334f958252939ef561ebe5a8980c2a45b46109",
          "message": "Bump large-image from 1.20.2 to 1.20.3\n\nBumps [large-image](https://github.com/girder/large_image) from 1.20.2 to 1.20.3.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.20.2...v1.20.3)\n\n---\nupdated-dependencies:\n- dependency-name: large-image\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-04-06T13:34:02+02:00",
          "tree_id": "c916a14f4d0eeb50f68495a8bb1d39e5e42891db",
          "url": "https://github.com/histolab/histolab/commit/85334f958252939ef561ebe5a8980c2a45b46109"
        },
        "date": 1680780979846,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.922905306634062,
            "unit": "iter/sec",
            "range": "stddev: 0.006211746898683685",
            "extra": "mean: 126.21632611999955 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 238.68302037878303,
            "unit": "iter/sec",
            "range": "stddev: 0.00016117395007917196",
            "extra": "mean: 4.189657054000025 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1094.3372747305575,
            "unit": "iter/sec",
            "range": "stddev: 0.00004154020481773946",
            "extra": "mean: 913.7950640000042 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16316.138636852802,
            "unit": "iter/sec",
            "range": "stddev: 0.000004590774314533415",
            "extra": "mean: 61.289010975999425 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 13692.542674102704,
            "unit": "iter/sec",
            "range": "stddev: 0.000005439306801367162",
            "extra": "mean: 73.03245451199814 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15187.736271451771,
            "unit": "iter/sec",
            "range": "stddev: 0.000004392215055024504",
            "extra": "mean: 65.84259708799982 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "44c5471347fbb5cc0cea4c4b74377f45b052a5ef",
          "message": "Bump large-image-source-pil from 1.20.2 to 1.20.3\n\nBumps [large-image-source-pil](https://github.com/girder/large_image) from 1.20.2 to 1.20.3.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.20.2...v1.20.3)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-pil\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-04-06T14:42:26+02:00",
          "tree_id": "e67771591aaf72426d0cfd3a8b6fcfea69cf1f3c",
          "url": "https://github.com/histolab/histolab/commit/44c5471347fbb5cc0cea4c4b74377f45b052a5ef"
        },
        "date": 1680785056250,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.006663138017267,
            "unit": "iter/sec",
            "range": "stddev: 0.0013421689767519223",
            "extra": "mean: 124.89597511000511 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 239.30103750716418,
            "unit": "iter/sec",
            "range": "stddev: 0.00004144365462375389",
            "extra": "mean: 4.178836876000014 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1225.0023355956369,
            "unit": "iter/sec",
            "range": "stddev: 0.00000716784076094074",
            "extra": "mean: 816.3249741999607 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28600.547157846653,
            "unit": "iter/sec",
            "range": "stddev: 9.905271945271919e-8",
            "extra": "mean: 34.96436604799874 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22863.76287755787,
            "unit": "iter/sec",
            "range": "stddev: 1.0495223615933506e-7",
            "extra": "mean: 43.73733253599994 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26534.623462913318,
            "unit": "iter/sec",
            "range": "stddev: 9.458255805433283e-8",
            "extra": "mean: 37.68660977600348 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "ec9f1fe4ea64e298dcf78152956bbddda555f974",
          "message": "Bump large-image-source-openslide from 1.20.2 to 1.20.3\n\nBumps [large-image-source-openslide](https://github.com/girder/large_image) from 1.20.2 to 1.20.3.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.20.2...v1.20.3)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-openslide\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-04-06T15:08:47+02:00",
          "tree_id": "21304e10a5b2f3838a8554856c80df36645dbed6",
          "url": "https://github.com/histolab/histolab/commit/ec9f1fe4ea64e298dcf78152956bbddda555f974"
        },
        "date": 1680786663654,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.636799236393032,
            "unit": "iter/sec",
            "range": "stddev: 0.005371173077899824",
            "extra": "mean: 130.94491147999776 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 239.2521973742924,
            "unit": "iter/sec",
            "range": "stddev: 0.00012137004937432751",
            "extra": "mean: 4.179689929599994 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1075.7803104869672,
            "unit": "iter/sec",
            "range": "stddev: 0.000020320049887455798",
            "extra": "mean: 929.5578197999703 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15914.611542577972,
            "unit": "iter/sec",
            "range": "stddev: 0.00000294349296092696",
            "extra": "mean: 62.83533828800024 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12787.56176446944,
            "unit": "iter/sec",
            "range": "stddev: 0.00000420338132178142",
            "extra": "mean: 78.20099080799946 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14627.629688197625,
            "unit": "iter/sec",
            "range": "stddev: 0.000003019483470520557",
            "extra": "mean: 68.36377604000018 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "ec4f651540d9cdd04e7440c3333a1728b5ef5908",
          "message": "Bump coverage from 7.2.2 to 7.2.3\n\nBumps [coverage](https://github.com/nedbat/coveragepy) from 7.2.2 to 7.2.3.\n- [Release notes](https://github.com/nedbat/coveragepy/releases)\n- [Changelog](https://github.com/nedbat/coveragepy/blob/master/CHANGES.rst)\n- [Commits](https://github.com/nedbat/coveragepy/compare/7.2.2...7.2.3)\n\n---\nupdated-dependencies:\n- dependency-name: coverage\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-04-07T11:15:03+02:00",
          "tree_id": "c27fcedf52054990efe205a4fcea6ada2c83d067",
          "url": "https://github.com/histolab/histolab/commit/ec4f651540d9cdd04e7440c3333a1728b5ef5908"
        },
        "date": 1680859049671,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.276788212725353,
            "unit": "iter/sec",
            "range": "stddev: 0.005408365160345579",
            "extra": "mean: 137.42326570000216 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 245.75332973578827,
            "unit": "iter/sec",
            "range": "stddev: 0.0004058617209585084",
            "extra": "mean: 4.069120858200006 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 987.848090049122,
            "unit": "iter/sec",
            "range": "stddev: 0.000034111059132724514",
            "extra": "mean: 1.01230139540005 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 14969.212382594176,
            "unit": "iter/sec",
            "range": "stddev: 0.000003222112266036679",
            "extra": "mean: 66.80378195200001 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 13566.862803452601,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037110876353996776",
            "extra": "mean: 73.70900808000442 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15554.265974176302,
            "unit": "iter/sec",
            "range": "stddev: 0.000003689433858210901",
            "extra": "mean: 64.29104412000106 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "fa0bf88718324dd0b9d2e4ef0858e4f3bbe2e270",
          "message": "Bump pytest from 7.2.2 to 7.3.0\n\nBumps [pytest](https://github.com/pytest-dev/pytest) from 7.2.2 to 7.3.0.\n- [Release notes](https://github.com/pytest-dev/pytest/releases)\n- [Changelog](https://github.com/pytest-dev/pytest/blob/main/CHANGELOG.rst)\n- [Commits](https://github.com/pytest-dev/pytest/compare/7.2.2...7.3.0)\n\n---\nupdated-dependencies:\n- dependency-name: pytest\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-04-11T10:16:28+02:00",
          "tree_id": "982240205fcf4dd51b3a56c4b6210f212f493f1d",
          "url": "https://github.com/histolab/histolab/commit/fa0bf88718324dd0b9d2e4ef0858e4f3bbe2e270"
        },
        "date": 1681201121260,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.778385759944522,
            "unit": "iter/sec",
            "range": "stddev: 0.002067037798766386",
            "extra": "mean: 147.52775002999897 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 206.68733520590234,
            "unit": "iter/sec",
            "range": "stddev: 0.000012131518279252546",
            "extra": "mean: 4.8382258109999725 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1060.0846967855516,
            "unit": "iter/sec",
            "range": "stddev: 0.00001080632261450101",
            "extra": "mean: 943.3208526000385 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 23599.608305406255,
            "unit": "iter/sec",
            "range": "stddev: 0.000003599459167903156",
            "extra": "mean: 42.3735846400009 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19407.594038489395,
            "unit": "iter/sec",
            "range": "stddev: 1.6717242869725775e-7",
            "extra": "mean: 51.526222056004826 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 22611.503731645516,
            "unit": "iter/sec",
            "range": "stddev: 1.8381369523341005e-7",
            "extra": "mean: 44.225276295997446 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "442c0d4af53bc4ff2301f458d17d8bebff2b63b0",
          "message": "Bump pytest from 7.3.0 to 7.3.1\n\nBumps [pytest](https://github.com/pytest-dev/pytest) from 7.3.0 to 7.3.1.\n- [Release notes](https://github.com/pytest-dev/pytest/releases)\n- [Changelog](https://github.com/pytest-dev/pytest/blob/main/CHANGELOG.rst)\n- [Commits](https://github.com/pytest-dev/pytest/compare/7.3.0...7.3.1)\n\n---\nupdated-dependencies:\n- dependency-name: pytest\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-04-17T11:32:03+02:00",
          "tree_id": "029b02a00107d08d97afce1fa868e2ee19e352c1",
          "url": "https://github.com/histolab/histolab/commit/442c0d4af53bc4ff2301f458d17d8bebff2b63b0"
        },
        "date": 1681724039156,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.749818634385062,
            "unit": "iter/sec",
            "range": "stddev: 0.0011815332779090107",
            "extra": "mean: 129.03527774999972 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 316.7864962707584,
            "unit": "iter/sec",
            "range": "stddev: 0.00013020040215205945",
            "extra": "mean: 3.1567002122000076 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1230.6960551722361,
            "unit": "iter/sec",
            "range": "stddev: 0.000014908245702803555",
            "extra": "mean: 812.5483101999947 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32829.46537679525,
            "unit": "iter/sec",
            "range": "stddev: 1.3711988196279047e-7",
            "extra": "mean: 30.460441208001725 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24580.19114000231,
            "unit": "iter/sec",
            "range": "stddev: 1.567319104738372e-7",
            "extra": "mean: 40.68316614400044 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29600.892125802573,
            "unit": "iter/sec",
            "range": "stddev: 1.7633948548351514e-7",
            "extra": "mean: 33.78276559199776 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "e0c5e8fd7c40003a2b43613861a894d52366d34a",
          "message": "Bump large-image from 1.20.3 to 1.20.5\n\nBumps [large-image](https://github.com/girder/large_image) from 1.20.3 to 1.20.5.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.20.3...v1.20.5)\n\n---\nupdated-dependencies:\n- dependency-name: large-image\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-04-24T10:33:59+02:00",
          "tree_id": "087a933f9c0b0c3d57f0c710d1385a3ba8917b2f",
          "url": "https://github.com/histolab/histolab/commit/e0c5e8fd7c40003a2b43613861a894d52366d34a"
        },
        "date": 1682325653606,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.069261185433887,
            "unit": "iter/sec",
            "range": "stddev: 0.005802479802584473",
            "extra": "mean: 141.45749800000118 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 235.4906677109412,
            "unit": "iter/sec",
            "range": "stddev: 0.0006207068738012416",
            "extra": "mean: 4.246452777599979 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 945.1653121247466,
            "unit": "iter/sec",
            "range": "stddev: 0.00004250860943401882",
            "extra": "mean: 1.0580159758000263 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 13831.584639873645,
            "unit": "iter/sec",
            "range": "stddev: 0.000005143544667860058",
            "extra": "mean: 72.298295967998 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 12252.657113035424,
            "unit": "iter/sec",
            "range": "stddev: 0.000004466255207684367",
            "extra": "mean: 81.61495019199674 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 14282.305703281265,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036008139833594265",
            "extra": "mean: 70.01670603999582 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "6fd922787d9973a9d7bf3e381c233c9d4ce5f445",
          "message": "Bump large-image-source-pil from 1.20.3 to 1.20.5\n\nBumps [large-image-source-pil](https://github.com/girder/large_image) from 1.20.3 to 1.20.5.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.20.3...v1.20.5)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-pil\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-04-24T11:33:26+02:00",
          "tree_id": "7d58aadc771154d3f860eb1e4c45e33ff87428fd",
          "url": "https://github.com/histolab/histolab/commit/6fd922787d9973a9d7bf3e381c233c9d4ce5f445"
        },
        "date": 1682328936659,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.835596775807045,
            "unit": "iter/sec",
            "range": "stddev: 0.003440747355007937",
            "extra": "mean: 146.29300597999872 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 208.95157752836747,
            "unit": "iter/sec",
            "range": "stddev: 0.000032196516769101186",
            "extra": "mean: 4.785797799799999 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1048.9490696648572,
            "unit": "iter/sec",
            "range": "stddev: 0.000008554828571920522",
            "extra": "mean: 953.3351321999874 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25068.979432786273,
            "unit": "iter/sec",
            "range": "stddev: 5.776611193777272e-7",
            "extra": "mean: 39.88993659200014 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19821.1798924704,
            "unit": "iter/sec",
            "range": "stddev: 7.608045424620029e-7",
            "extra": "mean: 50.45108340800016 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23088.756431172504,
            "unit": "iter/sec",
            "range": "stddev: 7.975575670404455e-7",
            "extra": "mean: 43.31112431199995 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "04b4cc389e1f11588dd681971f13b7db2dbcfa78",
          "message": "Bump large-image-source-openslide from 1.20.3 to 1.20.5\n\nBumps [large-image-source-openslide](https://github.com/girder/large_image) from 1.20.3 to 1.20.5.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.20.3...v1.20.5)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-openslide\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-04-24T12:00:26+02:00",
          "tree_id": "b2dc38077106d937d48078ee3e19ed5c551db028",
          "url": "https://github.com/histolab/histolab/commit/04b4cc389e1f11588dd681971f13b7db2dbcfa78"
        },
        "date": 1682330537570,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.554321493750471,
            "unit": "iter/sec",
            "range": "stddev: 0.00116540473970598",
            "extra": "mean: 132.37456213999877 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 202.7316173681207,
            "unit": "iter/sec",
            "range": "stddev: 0.00011957064710088715",
            "extra": "mean: 4.93262971499999 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1182.216586443379,
            "unit": "iter/sec",
            "range": "stddev: 0.00003036278929025264",
            "extra": "mean: 845.8686940000007 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28385.594617022372,
            "unit": "iter/sec",
            "range": "stddev: 6.840369889913375e-7",
            "extra": "mean: 35.229136944001766 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22596.90979474429,
            "unit": "iter/sec",
            "range": "stddev: 1.4476141370883277e-7",
            "extra": "mean: 44.25383864799892 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26228.840629556704,
            "unit": "iter/sec",
            "range": "stddev: 1.09659361949428e-7",
            "extra": "mean: 38.125970344000734 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "32f53a6a52c9a588de52e7a7021d80a29165b015",
          "message": "Bump requests from 2.28.2 to 2.29.0\n\nBumps [requests](https://github.com/psf/requests) from 2.28.2 to 2.29.0.\n- [Release notes](https://github.com/psf/requests/releases)\n- [Changelog](https://github.com/psf/requests/blob/main/HISTORY.md)\n- [Commits](https://github.com/psf/requests/compare/v2.28.2...v2.29.0)\n\n---\nupdated-dependencies:\n- dependency-name: requests\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-05-01T10:42:20+02:00",
          "tree_id": "aae3bf8c7757a45885bf37132544ed8768d3b424",
          "url": "https://github.com/histolab/histolab/commit/32f53a6a52c9a588de52e7a7021d80a29165b015"
        },
        "date": 1682930636718,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.823545669285921,
            "unit": "iter/sec",
            "range": "stddev: 0.0011624078259037636",
            "extra": "mean: 127.81928325999955 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 327.98161548487553,
            "unit": "iter/sec",
            "range": "stddev: 0.00017640590852736576",
            "extra": "mean: 3.0489513826000234 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1218.518904279957,
            "unit": "iter/sec",
            "range": "stddev: 0.0000059912641236806106",
            "extra": "mean: 820.6684331999895 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32547.031305154924,
            "unit": "iter/sec",
            "range": "stddev: 1.4495158667620027e-7",
            "extra": "mean: 30.72476843200184 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25049.713817352567,
            "unit": "iter/sec",
            "range": "stddev: 1.911808354212126e-7",
            "extra": "mean: 39.92061575199614 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29776.23595792584,
            "unit": "iter/sec",
            "range": "stddev: 2.0971147840250471e-7",
            "extra": "mean: 33.58382844000198 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "779490c552b15415c0de48c642943d7a2c6b5407",
          "message": "Bump pytest-xdist from 3.2.1 to 3.3.0\n\nBumps [pytest-xdist](https://github.com/pytest-dev/pytest-xdist) from 3.2.1 to 3.3.0.\n- [Changelog](https://github.com/pytest-dev/pytest-xdist/blob/master/CHANGELOG.rst)\n- [Commits](https://github.com/pytest-dev/pytest-xdist/compare/v3.2.1...v3.3.0)\n\n---\nupdated-dependencies:\n- dependency-name: pytest-xdist\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-05-15T10:15:30+02:00",
          "tree_id": "8ebcee4a679ddc382a2af1efe8280c3935a97244",
          "url": "https://github.com/histolab/histolab/commit/779490c552b15415c0de48c642943d7a2c6b5407"
        },
        "date": 1684138632581,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.826417049748339,
            "unit": "iter/sec",
            "range": "stddev: 0.0011121693008423717",
            "extra": "mean: 127.77238852000039 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 339.94293938238627,
            "unit": "iter/sec",
            "range": "stddev: 0.0000858539118096784",
            "extra": "mean: 2.9416701573999915 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1275.6592892763501,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063328042360188154",
            "extra": "mean: 783.9083745999886 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 33088.31074811755,
            "unit": "iter/sec",
            "range": "stddev: 1.5515419890711825e-7",
            "extra": "mean: 30.222153304000017 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25119.776343638947,
            "unit": "iter/sec",
            "range": "stddev: 2.2243243332679066e-7",
            "extra": "mean: 39.80927164000127 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29626.911643587235,
            "unit": "iter/sec",
            "range": "stddev: 2.3145997196322505e-7",
            "extra": "mean: 33.75309624000079 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "7edd748e5e491d02445016866103437366182fa7",
          "message": "Bump requests from 2.29.0 to 2.30.0\n\nBumps [requests](https://github.com/psf/requests) from 2.29.0 to 2.30.0.\n- [Release notes](https://github.com/psf/requests/releases)\n- [Changelog](https://github.com/psf/requests/blob/main/HISTORY.md)\n- [Commits](https://github.com/psf/requests/compare/v2.29.0...v2.30.0)\n\n---\nupdated-dependencies:\n- dependency-name: requests\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-05-15T17:30:29+02:00",
          "tree_id": "9d4557f33e387ca5d97a1de41eb6ce167b51296a",
          "url": "https://github.com/histolab/histolab/commit/7edd748e5e491d02445016866103437366182fa7"
        },
        "date": 1684164783046,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.812022145929057,
            "unit": "iter/sec",
            "range": "stddev: 0.0011443593343057118",
            "extra": "mean: 128.00782964000078 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 339.3525728994014,
            "unit": "iter/sec",
            "range": "stddev: 0.00012712798031551788",
            "extra": "mean: 2.9467877359999934 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1313.1726995861688,
            "unit": "iter/sec",
            "range": "stddev: 0.000008176421076947823",
            "extra": "mean: 761.5144605999944 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32846.92982131575,
            "unit": "iter/sec",
            "range": "stddev: 1.6793621200019858e-7",
            "extra": "mean: 30.444245640000645 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25143.70704728131,
            "unit": "iter/sec",
            "range": "stddev: 1.6465616785178955e-7",
            "extra": "mean: 39.77138288000083 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29688.58308033193,
            "unit": "iter/sec",
            "range": "stddev: 2.005879070700864e-7",
            "extra": "mean: 33.682981680000694 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "4c8e5b172e22dabec78f687423a6d251474ada3a",
          "message": "Bump pytest-xdist from 3.3.0 to 3.3.1\n\nBumps [pytest-xdist](https://github.com/pytest-dev/pytest-xdist) from 3.3.0 to 3.3.1.\n- [Changelog](https://github.com/pytest-dev/pytest-xdist/blob/master/CHANGELOG.rst)\n- [Commits](https://github.com/pytest-dev/pytest-xdist/compare/v3.3.0...v3.3.1)\n\n---\nupdated-dependencies:\n- dependency-name: pytest-xdist\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-05-24T11:42:33+02:00",
          "tree_id": "a9fd3dab900673bd861078a049b65d53036fd668",
          "url": "https://github.com/histolab/histolab/commit/4c8e5b172e22dabec78f687423a6d251474ada3a"
        },
        "date": 1684921457289,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.012386782678092,
            "unit": "iter/sec",
            "range": "stddev: 0.0013389902730344782",
            "extra": "mean: 124.80675573000184 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 225.1274596607858,
            "unit": "iter/sec",
            "range": "stddev: 0.00004581065463027289",
            "extra": "mean: 4.44192814819998 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1221.210373034722,
            "unit": "iter/sec",
            "range": "stddev: 0.000007757747209958308",
            "extra": "mean: 818.8597329999652 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 29083.67823279656,
            "unit": "iter/sec",
            "range": "stddev: 1.0459896291304948e-7",
            "extra": "mean: 34.38354639999898 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 23083.275236298825,
            "unit": "iter/sec",
            "range": "stddev: 1.2062497078442168e-7",
            "extra": "mean: 43.32140867200178 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26767.920283938714,
            "unit": "iter/sec",
            "range": "stddev: 1.0616504263222618e-7",
            "extra": "mean: 37.35815070399849 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "5790d1537f1857af3a125ede4deef31225f48efd",
          "message": "Bump requests from 2.30.0 to 2.31.0\n\nBumps [requests](https://github.com/psf/requests) from 2.30.0 to 2.31.0.\n- [Release notes](https://github.com/psf/requests/releases)\n- [Changelog](https://github.com/psf/requests/blob/main/HISTORY.md)\n- [Commits](https://github.com/psf/requests/compare/v2.30.0...v2.31.0)\n\n---\nupdated-dependencies:\n- dependency-name: requests\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-05-24T13:49:45+02:00",
          "tree_id": "f2bde7eaba5cf56392d45c17925d9b9e9d3ef445",
          "url": "https://github.com/histolab/histolab/commit/5790d1537f1857af3a125ede4deef31225f48efd"
        },
        "date": 1684929103152,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.777088258731035,
            "unit": "iter/sec",
            "range": "stddev: 0.001467323070539385",
            "extra": "mean: 147.55599482000008 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 207.67313021582098,
            "unit": "iter/sec",
            "range": "stddev: 0.000051314761052548086",
            "extra": "mean: 4.815259436600036 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1048.3005802736623,
            "unit": "iter/sec",
            "range": "stddev: 0.000007337302270530211",
            "extra": "mean: 953.9248750000183 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25026.417856657983,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012360947362910313",
            "extra": "mean: 39.95777604799969 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19877.168022495745,
            "unit": "iter/sec",
            "range": "stddev: 1.932178366021823e-7",
            "extra": "mean: 50.30897755999558 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 22903.094822502484,
            "unit": "iter/sec",
            "range": "stddev: 9.577292875472362e-7",
            "extra": "mean: 43.66222153599483 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "068078c54434f3e1ce2b321f03baf094e4c165c9",
          "message": "Bump pytest-cov from 4.0.0 to 4.1.0\n\nBumps [pytest-cov](https://github.com/pytest-dev/pytest-cov) from 4.0.0 to 4.1.0.\n- [Changelog](https://github.com/pytest-dev/pytest-cov/blob/master/CHANGELOG.rst)\n- [Commits](https://github.com/pytest-dev/pytest-cov/compare/v4.0.0...v4.1.0)\n\n---\nupdated-dependencies:\n- dependency-name: pytest-cov\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-05-25T09:46:31+02:00",
          "tree_id": "6a5b7de2c71e67e35531fd581bc8ac05e3ae4821",
          "url": "https://github.com/histolab/histolab/commit/068078c54434f3e1ce2b321f03baf094e4c165c9"
        },
        "date": 1685000914848,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.279044077857413,
            "unit": "iter/sec",
            "range": "stddev: 0.0049187258550590284",
            "extra": "mean: 159.25991083999975 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 205.91279175373305,
            "unit": "iter/sec",
            "range": "stddev: 0.00010038441370883122",
            "extra": "mean: 4.856424855800009 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1051.9037457076547,
            "unit": "iter/sec",
            "range": "stddev: 0.000007817144603250237",
            "extra": "mean: 950.6573239999852 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 23449.033144616697,
            "unit": "iter/sec",
            "range": "stddev: 8.808503816568251e-7",
            "extra": "mean: 42.64568154399899 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 18903.912495752425,
            "unit": "iter/sec",
            "range": "stddev: 1.203817021030577e-7",
            "extra": "mean: 52.899102247997234 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 21808.044328950367,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010136133034207583",
            "extra": "mean: 45.854638999999224 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "09c88f15935284e21b7b4af5f4c448a2aa2cdd28",
          "message": "Bump typing-extensions from 4.5.0 to 4.6.2\n\nBumps [typing-extensions](https://github.com/python/typing_extensions) from 4.5.0 to 4.6.2.\n- [Changelog](https://github.com/python/typing_extensions/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/python/typing_extensions/compare/4.5.0...4.6.2)\n\n---\nupdated-dependencies:\n- dependency-name: typing-extensions\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-05-30T10:59:51+02:00",
          "tree_id": "005201ea9ad112e11e7bb3cc35fb1e6beaf5e822",
          "url": "https://github.com/histolab/histolab/commit/09c88f15935284e21b7b4af5f4c448a2aa2cdd28"
        },
        "date": 1685437293876,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.590303688373313,
            "unit": "iter/sec",
            "range": "stddev: 0.002523894918803617",
            "extra": "mean: 131.74703424999734 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 274.9647926431861,
            "unit": "iter/sec",
            "range": "stddev: 0.00022185145632104276",
            "extra": "mean: 3.6368292477999944 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1172.0520339729758,
            "unit": "iter/sec",
            "range": "stddev: 0.00000563845576159937",
            "extra": "mean: 853.2044405999955 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32183.40476440954,
            "unit": "iter/sec",
            "range": "stddev: 1.3219623319822818e-7",
            "extra": "mean: 31.07191446399929 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24674.37180210038,
            "unit": "iter/sec",
            "range": "stddev: 2.0074329080327587e-7",
            "extra": "mean: 40.52788083200062 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29207.996772663246,
            "unit": "iter/sec",
            "range": "stddev: 6.851714286956723e-7",
            "extra": "mean: 34.23719907199984 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "4309c60975018a176932d9abb1681f8a9dfd8990",
          "message": "Bump coverage from 7.2.3 to 7.2.7\n\nBumps [coverage](https://github.com/nedbat/coveragepy) from 7.2.3 to 7.2.7.\n- [Release notes](https://github.com/nedbat/coveragepy/releases)\n- [Changelog](https://github.com/nedbat/coveragepy/blob/master/CHANGES.rst)\n- [Commits](https://github.com/nedbat/coveragepy/compare/7.2.3...7.2.7)\n\n---\nupdated-dependencies:\n- dependency-name: coverage\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-05-30T14:52:10+02:00",
          "tree_id": "a57691aedd6209d0099c7d0a2d8ae05a3ffb74f5",
          "url": "https://github.com/histolab/histolab/commit/4309c60975018a176932d9abb1681f8a9dfd8990"
        },
        "date": 1685451261858,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.832028831521239,
            "unit": "iter/sec",
            "range": "stddev: 0.004264840697411665",
            "extra": "mean: 146.36940573000146 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 199.41278058632895,
            "unit": "iter/sec",
            "range": "stddev: 0.00004243218951385475",
            "extra": "mean: 5.0147237155999855 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1043.2698442219241,
            "unit": "iter/sec",
            "range": "stddev: 0.000005958033999685948",
            "extra": "mean: 958.5247820000063 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 25243.867763530565,
            "unit": "iter/sec",
            "range": "stddev: 3.7344287186504354e-7",
            "extra": "mean: 39.61358098399978 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19731.26025739368,
            "unit": "iter/sec",
            "range": "stddev: 7.065114088995813e-7",
            "extra": "mean: 50.68099994399904 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 23172.434924011413,
            "unit": "iter/sec",
            "range": "stddev: 5.274504132519537e-7",
            "extra": "mean: 43.15472255200052 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "846d79e4f0e13dfeebd5f0d196db9620418f49a4",
          "message": "Bump large-image from 1.20.5 to 1.22.0\n\nBumps [large-image](https://github.com/girder/large_image) from 1.20.5 to 1.22.0.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.20.5...v1.22.0)\n\n---\nupdated-dependencies:\n- dependency-name: large-image\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-05-30T21:20:32+02:00",
          "tree_id": "bc809c9d72703f736b5e795e43ae0484c2025939",
          "url": "https://github.com/histolab/histolab/commit/846d79e4f0e13dfeebd5f0d196db9620418f49a4"
        },
        "date": 1685474527817,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.742781643422542,
            "unit": "iter/sec",
            "range": "stddev: 0.0011622105780326845",
            "extra": "mean: 129.15255085999945 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 329.16430814295774,
            "unit": "iter/sec",
            "range": "stddev: 0.00013063279198175602",
            "extra": "mean: 3.037996451199973 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1164.3963325195903,
            "unit": "iter/sec",
            "range": "stddev: 0.000011806340610760273",
            "extra": "mean: 858.8141099999348 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32658.902643269357,
            "unit": "iter/sec",
            "range": "stddev: 2.26358086546267e-7",
            "extra": "mean: 30.619522368002436 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24642.916000206857,
            "unit": "iter/sec",
            "range": "stddev: 2.1090555549646628e-7",
            "extra": "mean: 40.579613224003424 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29127.20894644552,
            "unit": "iter/sec",
            "range": "stddev: 1.7608828144702132e-7",
            "extra": "mean: 34.33216007200144 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "1cf20fe30974348c41899d1bf0a338430329d19c",
          "message": "Bump large-image-source-pil from 1.20.5 to 1.22.0\n\nBumps [large-image-source-pil](https://github.com/girder/large_image) from 1.20.5 to 1.22.0.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.20.5...v1.22.0)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-pil\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-05-31T08:56:33+02:00",
          "tree_id": "cb35bbdc85cc3aaf0e0b3928b6be7051ab1206ab",
          "url": "https://github.com/histolab/histolab/commit/1cf20fe30974348c41899d1bf0a338430329d19c"
        },
        "date": 1685516319962,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.011825295181097,
            "unit": "iter/sec",
            "range": "stddev: 0.0013967033978253803",
            "extra": "mean: 124.81550247999962 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 237.2815085732496,
            "unit": "iter/sec",
            "range": "stddev: 0.000058424576616588585",
            "extra": "mean: 4.214403414800006 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1198.0431674706713,
            "unit": "iter/sec",
            "range": "stddev: 0.000007283793940594869",
            "extra": "mean: 834.6944643999905 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28302.56127773335,
            "unit": "iter/sec",
            "range": "stddev: 9.689897784190386e-7",
            "extra": "mean: 35.33249129599926 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22680.06701309978,
            "unit": "iter/sec",
            "range": "stddev: 9.962006312837547e-7",
            "extra": "mean: 44.09158048000518 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26114.57275964141,
            "unit": "iter/sec",
            "range": "stddev: 1.0535733509482475e-7",
            "extra": "mean: 38.29279571999905 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "1cd3c8f0f60b1008a95197e7fc5793a8557515ad",
          "message": "Bump large-image-source-openslide from 1.20.5 to 1.22.0\n\nBumps [large-image-source-openslide](https://github.com/girder/large_image) from 1.20.5 to 1.22.0.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.20.5...v1.22.0)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-openslide\n  dependency-type: direct:development\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-05-31T10:22:25+02:00",
          "tree_id": "5e110938c8461becbf2f08c74b350d15b887c94b",
          "url": "https://github.com/histolab/histolab/commit/1cd3c8f0f60b1008a95197e7fc5793a8557515ad"
        },
        "date": 1685521535768,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.73713463408856,
            "unit": "iter/sec",
            "range": "stddev: 0.006523987597471678",
            "extra": "mean: 148.43105478999917 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 236.48773644561112,
            "unit": "iter/sec",
            "range": "stddev: 0.0008774436557451579",
            "extra": "mean: 4.228549078400039 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 995.0764657325427,
            "unit": "iter/sec",
            "range": "stddev: 0.00002818497619390878",
            "extra": "mean: 1.0049478954000108 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 15858.480863435381,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036964216376576338",
            "extra": "mean: 63.05774232799831 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 13354.545285662361,
            "unit": "iter/sec",
            "range": "stddev: 0.000005319609383021524",
            "extra": "mean: 74.88087228800032 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 15160.031114316867,
            "unit": "iter/sec",
            "range": "stddev: 0.0000045076812360965535",
            "extra": "mean: 65.96292530400001 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "7d2156c013bc14f1345217f4f082a709d12ea14c",
          "message": "[pre-commit.ci] auto fixes from pre-commit.com hooks\n\nfor more information, see https://pre-commit.ci",
          "timestamp": "2023-05-31T12:43:02+02:00",
          "tree_id": "5fd6d15b38d13f68a9b6694cf6bbcf9212f97e43",
          "url": "https://github.com/histolab/histolab/commit/7d2156c013bc14f1345217f4f082a709d12ea14c"
        },
        "date": 1685529899200,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.351980206165473,
            "unit": "iter/sec",
            "range": "stddev: 0.005721933256788147",
            "extra": "mean: 136.0177764299999 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 219.13712948959926,
            "unit": "iter/sec",
            "range": "stddev: 0.00019442649810419693",
            "extra": "mean: 4.563352647400003 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1102.4204054732836,
            "unit": "iter/sec",
            "range": "stddev: 0.000020190480348527577",
            "extra": "mean: 907.0949657999904 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 27077.35203923274,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022597261414849276",
            "extra": "mean: 36.93123310400097 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 21479.68163754064,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026425668486387902",
            "extra": "mean: 46.555624840000974 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 25861.715901372172,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021215379780727426",
            "extra": "mean: 38.66719454399936 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "ea5ae2b368e3161882e4f98dc7bb4c10ca0c2f82",
          "message": "Bump large-image from 1.22.0 to 1.22.1\n\nBumps [large-image](https://github.com/girder/large_image) from 1.22.0 to 1.22.1.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.22.0...v1.22.1)\n\n---\nupdated-dependencies:\n- dependency-name: large-image\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-06-02T10:44:08+02:00",
          "tree_id": "32add7abf9a8d6e727fa8fe29c161c3b7178614e",
          "url": "https://github.com/histolab/histolab/commit/ea5ae2b368e3161882e4f98dc7bb4c10ca0c2f82"
        },
        "date": 1685695579567,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.862783058496772,
            "unit": "iter/sec",
            "range": "stddev: 0.001113620010952752",
            "extra": "mean: 127.18143086999817 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 366.8127563174477,
            "unit": "iter/sec",
            "range": "stddev: 0.00010161873414652888",
            "extra": "mean: 2.7261865427999967 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1219.2885981128263,
            "unit": "iter/sec",
            "range": "stddev: 0.000005783867102338682",
            "extra": "mean: 820.1503741999773 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32805.5637830939,
            "unit": "iter/sec",
            "range": "stddev: 1.4570225154936966e-7",
            "extra": "mean: 30.48263418400211 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25194.122101510126,
            "unit": "iter/sec",
            "range": "stddev: 1.98845347160206e-7",
            "extra": "mean: 39.69179779199612 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 30407.5330624095,
            "unit": "iter/sec",
            "range": "stddev: 1.8102794384946163e-7",
            "extra": "mean: 32.88658760799717 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "1e0523e0dfc97d646e1e559e0773d3a4704214c7",
          "message": "Bump large-image-source-pil from 1.22.0 to 1.22.1\n\nBumps [large-image-source-pil](https://github.com/girder/large_image) from 1.22.0 to 1.22.1.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.22.0...v1.22.1)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-pil\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-06-02T12:53:18+02:00",
          "tree_id": "d0a0665d9342addf52bce396a744d642608bbb00",
          "url": "https://github.com/histolab/histolab/commit/1e0523e0dfc97d646e1e559e0773d3a4704214c7"
        },
        "date": 1685703315968,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.136275445325051,
            "unit": "iter/sec",
            "range": "stddev: 0.006459183877357075",
            "extra": "mean: 122.9063601300004 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 291.0596747447599,
            "unit": "iter/sec",
            "range": "stddev: 0.00019313295556473757",
            "extra": "mean: 3.4357215607999763 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1031.0939972311303,
            "unit": "iter/sec",
            "range": "stddev: 0.000030869309431645216",
            "extra": "mean: 969.8436831999516 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 16453.493342196187,
            "unit": "iter/sec",
            "range": "stddev: 0.000002125835128233112",
            "extra": "mean: 60.77736679999907 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 15785.378239275087,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037999830845972405",
            "extra": "mean: 63.34976488000347 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 17687.09005440306,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031447795126205085",
            "extra": "mean: 56.538412871995206 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "a7d830c89092d7e03577a4a265361338946f3414",
          "message": "Bump typing-extensions from 4.6.2 to 4.6.3\n\nBumps [typing-extensions](https://github.com/python/typing_extensions) from 4.6.2 to 4.6.3.\n- [Changelog](https://github.com/python/typing_extensions/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/python/typing_extensions/compare/4.6.2...4.6.3)\n\n---\nupdated-dependencies:\n- dependency-name: typing-extensions\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-06-02T15:41:10+02:00",
          "tree_id": "d2efcd97191786cc2b208767d1f85fcbf1bf0fd6",
          "url": "https://github.com/histolab/histolab/commit/a7d830c89092d7e03577a4a265361338946f3414"
        },
        "date": 1685713390134,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 6.7592814890589885,
            "unit": "iter/sec",
            "range": "stddev: 0.0017245430674156085",
            "extra": "mean: 147.94471892000132 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 198.9372371099526,
            "unit": "iter/sec",
            "range": "stddev: 0.00002524107516249604",
            "extra": "mean: 5.026711009599978 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1058.147244079447,
            "unit": "iter/sec",
            "range": "stddev: 0.000009735049522295762",
            "extra": "mean: 945.0480598000013 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 24954.88128516188,
            "unit": "iter/sec",
            "range": "stddev: 1.3099468751138232e-7",
            "extra": "mean: 40.072320463996675 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 19515.870664491737,
            "unit": "iter/sec",
            "range": "stddev: 1.4007598939759367e-7",
            "extra": "mean: 51.24034777600036 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 22894.94087121422,
            "unit": "iter/sec",
            "range": "stddev: 1.2750214744101477e-7",
            "extra": "mean: 43.677771680000205 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "8752e5d6c81f2f33becf49e13cc027f807bd5cb0",
          "message": "Bump cryptography from 39.0.1 to 41.0.0\n\nBumps [cryptography](https://github.com/pyca/cryptography) from 39.0.1 to 41.0.0.\n- [Changelog](https://github.com/pyca/cryptography/blob/main/CHANGELOG.rst)\n- [Commits](https://github.com/pyca/cryptography/compare/39.0.1...41.0.0)\n\n---\nupdated-dependencies:\n- dependency-name: cryptography\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-06-05T09:23:05+02:00",
          "tree_id": "eabf90315e1270d665f10c355d79997fa4dcd410",
          "url": "https://github.com/histolab/histolab/commit/8752e5d6c81f2f33becf49e13cc027f807bd5cb0"
        },
        "date": 1685949929768,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.856439524433656,
            "unit": "iter/sec",
            "range": "stddev: 0.001125118417574029",
            "extra": "mean: 127.28412112000397 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 300.9925699784279,
            "unit": "iter/sec",
            "range": "stddev: 0.0008120768574942558",
            "extra": "mean: 3.322341146399958 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1236.8348582831197,
            "unit": "iter/sec",
            "range": "stddev: 0.000007908553117300144",
            "extra": "mean: 808.5153756000409 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32913.315100612315,
            "unit": "iter/sec",
            "range": "stddev: 1.2851555871881616e-7",
            "extra": "mean: 30.382840407996355 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25334.73730934848,
            "unit": "iter/sec",
            "range": "stddev: 1.9292284767358298e-7",
            "extra": "mean: 39.47149669600094 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 30191.943296500463,
            "unit": "iter/sec",
            "range": "stddev: 3.168158065715917e-7",
            "extra": "mean: 33.12141885600022 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "ernesto.arbitrio@gmail.com",
            "name": "pamaron",
            "username": "ernestoarbitrio"
          },
          "distinct": true,
          "id": "b5d5866d162292cb69ff93944e25492d5dfb6a85",
          "message": "Bump large-image-source-openslide from 1.22.0 to 1.22.1\n\nBumps [large-image-source-openslide](https://github.com/girder/large_image) from 1.22.0 to 1.22.1.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.22.0...v1.22.1)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-openslide\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-06-05T10:49:20+02:00",
          "tree_id": "64ae4b53f4660f3836d689d50f147d137d39de1b",
          "url": "https://github.com/histolab/histolab/commit/b5d5866d162292cb69ff93944e25492d5dfb6a85"
        },
        "date": 1685955081164,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 8.04841860964452,
            "unit": "iter/sec",
            "range": "stddev: 0.0015316163207924065",
            "extra": "mean: 124.24801051000102 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 247.45115049479398,
            "unit": "iter/sec",
            "range": "stddev: 0.0000724789863198958",
            "extra": "mean: 4.0412016593999995 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1228.8940700045769,
            "unit": "iter/sec",
            "range": "stddev: 0.000006570508402040029",
            "extra": "mean: 813.7397880000151 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28689.63381700745,
            "unit": "iter/sec",
            "range": "stddev: 1.2167196128460937e-7",
            "extra": "mean: 34.85579517599808 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22939.76991379095,
            "unit": "iter/sec",
            "range": "stddev: 1.1939572448505918e-7",
            "extra": "mean: 43.5924163040022 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26429.37290308053,
            "unit": "iter/sec",
            "range": "stddev: 5.985749484912482e-7",
            "extra": "mean: 37.836690399999725 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "0db8fc82f6b6f127e85b2eac3bf09c32c9dc4552",
          "message": "Bump large-image from 1.22.1 to 1.22.2\n\nBumps [large-image](https://github.com/girder/large_image) from 1.22.1 to 1.22.2.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.22.1...v1.22.2)\n\n---\nupdated-dependencies:\n- dependency-name: large-image\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-06-06T14:54:12+02:00",
          "tree_id": "87a1d0c3901e3ec6a039928b90e24bf5f6d16949",
          "url": "https://github.com/histolab/histolab/commit/0db8fc82f6b6f127e85b2eac3bf09c32c9dc4552"
        },
        "date": 1686056152301,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.888722779629661,
            "unit": "iter/sec",
            "range": "stddev: 0.0011982063297218029",
            "extra": "mean: 126.76323251999804 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 342.74571450966624,
            "unit": "iter/sec",
            "range": "stddev: 0.0006610827216455649",
            "extra": "mean: 2.9176148896000202 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1225.6825327048903,
            "unit": "iter/sec",
            "range": "stddev: 0.000005871598850692261",
            "extra": "mean: 815.8719516000247 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 32891.57618667775,
            "unit": "iter/sec",
            "range": "stddev: 1.3105157468956597e-7",
            "extra": "mean: 30.402921232003337 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 25265.88149165579,
            "unit": "iter/sec",
            "range": "stddev: 2.095096268349811e-7",
            "extra": "mean: 39.57906635199947 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29912.619888929363,
            "unit": "iter/sec",
            "range": "stddev: 2.0574009326917212e-7",
            "extra": "mean: 33.43070595999848 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "211c64b2c228171c4f4fc1694ecc72da0752079e",
          "message": "Bump large-image-source-openslide from 1.22.1 to 1.22.2\n\nBumps [large-image-source-openslide](https://github.com/girder/large_image) from 1.22.1 to 1.22.2.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.22.1...v1.22.2)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-openslide\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-06-06T15:27:51+02:00",
          "tree_id": "97f04acf2332f6ea69f10d3819b5d0e31a5ab0f0",
          "url": "https://github.com/histolab/histolab/commit/211c64b2c228171c4f4fc1694ecc72da0752079e"
        },
        "date": 1686058202169,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.525214063324752,
            "unit": "iter/sec",
            "range": "stddev: 0.0012063354317021864",
            "extra": "mean: 132.8865852300001 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 186.59033076809735,
            "unit": "iter/sec",
            "range": "stddev: 0.00007026074897469216",
            "extra": "mean: 5.359334515799986 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1215.969963993235,
            "unit": "iter/sec",
            "range": "stddev: 0.000009066449192889383",
            "extra": "mean: 822.388734599997 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 28659.595799012815,
            "unit": "iter/sec",
            "range": "stddev: 9.588439591239334e-7",
            "extra": "mean: 34.89232740799662 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 22803.130104964388,
            "unit": "iter/sec",
            "range": "stddev: 2.478379710360632e-7",
            "extra": "mean: 43.85362866400055 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 26432.906095742634,
            "unit": "iter/sec",
            "range": "stddev: 9.884128786951708e-8",
            "extra": "mean: 37.831632903998525 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "d726bdbef34385a39868d59f7ab11ee39c353c56",
          "message": "Bump large-image-source-pil from 1.22.1 to 1.22.2\n\nBumps [large-image-source-pil](https://github.com/girder/large_image) from 1.22.1 to 1.22.2.\n- [Release notes](https://github.com/girder/large_image/releases)\n- [Changelog](https://github.com/girder/large_image/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/girder/large_image/compare/v1.22.1...v1.22.2)\n\n---\nupdated-dependencies:\n- dependency-name: large-image-source-pil\n  dependency-type: direct:development\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-06-06T15:59:52+02:00",
          "tree_id": "52d3681452ee744957001e01fb424a6774924743",
          "url": "https://github.com/histolab/histolab/commit/d726bdbef34385a39868d59f7ab11ee39c353c56"
        },
        "date": 1686060087388,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.780745508951763,
            "unit": "iter/sec",
            "range": "stddev: 0.0012266228031260647",
            "extra": "mean: 128.52238886999942 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 364.49736587401947,
            "unit": "iter/sec",
            "range": "stddev: 0.00009891820431763307",
            "extra": "mean: 2.7435040513999978 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1218.5909457169603,
            "unit": "iter/sec",
            "range": "stddev: 0.00000559892102404651",
            "extra": "mean: 820.61991639996 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 33348.192870116036,
            "unit": "iter/sec",
            "range": "stddev: 1.4338628739371914e-7",
            "extra": "mean: 29.986632375996578 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24548.015926319753,
            "unit": "iter/sec",
            "range": "stddev: 1.3125157084968945e-7",
            "extra": "mean: 40.73648978400024 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29418.9027076984,
            "unit": "iter/sec",
            "range": "stddev: 2.1018611846734895e-7",
            "extra": "mean: 33.9917504719956 usec\nrounds: 250"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "98marcolini@gmail.com",
            "name": "Alessia Marcolini",
            "username": "alessiamarcolini"
          },
          "distinct": true,
          "id": "b80a48f994e788d104cbb73fe169b90cdcfc7f80",
          "message": "Bump sphinxcontrib-katex from 0.9.4 to 0.9.5\n\nBumps [sphinxcontrib-katex](https://github.com/hagenw/sphinxcontrib-katex) from 0.9.4 to 0.9.5.\n- [Release notes](https://github.com/hagenw/sphinxcontrib-katex/releases)\n- [Changelog](https://github.com/hagenw/sphinxcontrib-katex/blob/main/CHANGELOG.rst)\n- [Commits](https://github.com/hagenw/sphinxcontrib-katex/compare/v0.9.4...v0.9.5)\n\n---\nupdated-dependencies:\n- dependency-name: sphinxcontrib-katex\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-06-08T10:36:19+02:00",
          "tree_id": "8a98b79c676677f2b609d37dcc3526f4c9b525eb",
          "url": "https://github.com/histolab/histolab/commit/b80a48f994e788d104cbb73fe169b90cdcfc7f80"
        },
        "date": 1686213486512,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_difference",
            "value": 7.7842298446258065,
            "unit": "iter/sec",
            "range": "stddev: 0.0010249570949276562",
            "extra": "mean: 128.46486036000016 msec\nrounds: 100"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksFilterUtil::test_mask_percent",
            "value": 343.98863171619695,
            "unit": "iter/sec",
            "range": "stddev: 0.00008697534036980133",
            "extra": "mean: 2.907072815199999 msec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_apply_mask_image",
            "value": 1219.8651381073028,
            "unit": "iter/sec",
            "range": "stddev: 0.000004075150341995183",
            "extra": "mean: 819.7627498000003 usec\nrounds: 50"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image0]",
            "value": 33100.3315201569,
            "unit": "iter/sec",
            "range": "stddev: 1.4086410547683118e-7",
            "extra": "mean: 30.211177776000113 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image1]",
            "value": 24891.019589195046,
            "unit": "iter/sec",
            "range": "stddev: 1.4671888517708061e-7",
            "extra": "mean: 40.175132095998606 usec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestDescribeBenchmarksUtil::test_np_to_pil[image2]",
            "value": 29945.735851919995,
            "unit": "iter/sec",
            "range": "stddev: 1.8847709258933428e-7",
            "extra": "mean: 33.393736088000765 usec\nrounds: 250"
          }
        ]
      }
    ]
  }
}
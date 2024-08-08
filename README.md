# kana_converter

# usage

1. include
  This script is available through CDN service. Please include the URL below in your production.
  ```sh
  https://cdn.jsdelivr.net/gh/kento-nkr/kana_converter@20240808/kana_converter.js
  ```

2. use
  ```js
  const full = KanaConverter.halfToFull(“ｱｲｳｴｵ”);  //変数fullに"アイウエオ"が格納
  const half = KanaConverter.fullToHalf(“アイウエオ”);  //変数halfに"ｱｲｳｴｵ"が格納
  ```
  static methodなのでインスタンス化は不要

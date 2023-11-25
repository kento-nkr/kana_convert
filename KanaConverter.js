const CONVERSIONMAP = require("./kana_map.json");
class KanaConverter {
  constructor() {
    this.conversionMap = CONVERSIONMAP;
  }

  halfToFull(str) {
    return this.convert(str, "half", "full");
  }

  fullToHalf(str) {
    return this.convert(str, "full", "half");
  }

  convert(str, fromType, toType) {
    const convertedString = str
      .split("")
      .map((char) => {
        const conversion = this.conversionMap.find(
          (entry) => entry[fromType] === char
        );
        return conversion ? conversion[toType] : char;
      })
      .join("");

    return convertedString;
  }
}

function demo() {
  const converter = new CharacterConverter();

  const hankakuString = "ｶﾞﾁアイウエオ";
  const zenkakuString = "アイウエオ";

  const convertedHankaku = converter.fullToHalf(zenkakuString);
  const convertedZenkaku = converter.halfToFull(hankakuString);

  console.log("Original Hankaku:", hankakuString);
  console.log("Converted to Zenkaku:", convertedZenkaku);

  console.log("Original Zenkaku:", zenkakuString);
  console.log("Converted to Hankaku:", convertedHankaku);
}

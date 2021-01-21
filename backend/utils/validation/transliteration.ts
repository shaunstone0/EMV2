const transliterationMap = {
  // latin transliteration uppercase
  Á: 'A', // Á
  À: 'A', // À
  Â: 'A', // Â
  Ä: 'AE', // Ä
  Ã: 'A', // Ã
  Ă: 'A', // Ă
  Å: 'AA', // Å
  Ā: 'A', // Ā
  Ą: 'A', // Ą
  Ć: 'C', // Ć
  Ĉ: 'C', // Ĉ
  Č: 'C', // Č
  Ċ: 'C', // Ċ
  Ç: 'C', // Ç
  Đ: 'D', // Đ
  Ď: 'D', // Ď
  É: 'E', // É
  È: 'E', // È
  Ê: 'E', // Ê
  Ë: 'E', // Ë
  Ě: 'E', // Ě
  Ė: 'E', // Ė
  Ē: 'E', // Ē
  Ę: 'E', // Ę
  Ĕ: 'E', // Ĕ
  Ĝ: 'G', // Ĝ
  Ğ: 'G', // Ğ
  Ġ: 'G', // Ġ
  Ģ: 'G', // Ģ
  Ħ: 'H', // Ħ
  Ĥ: 'H', // Ĥ
  Í: 'I', // Í
  Ì: 'I', // Ì
  Î: 'I', // Î
  Ï: 'I', // Ï
  Ĩ: 'I', // Ĩ
  İ: 'I', // İ
  Ī: 'I', // Ī
  Į: 'I', // Į
  Ĭ: 'I', // Ĭ
  Ĵ: 'J', // Ĵ
  Ķ: 'K', // Ķ
  Ł: 'L', // Ł
  Ĺ: 'L', // Ĺ
  Ľ: 'L', // Ľ
  Ļ: 'L', // Ļ
  Ŀ: 'L', // Ŀ
  Ń: 'N', // Ń
  Ñ: 'N', // Ñ
  Ň: 'N', // Ň
  Ņ: 'N', // Ņ
  Ø: 'OE', // Ø
  Ó: 'O', // Ó
  Ò: 'O', // Ò
  Ô: 'O', // Ô
  Ö: 'OE', // Ö
  Õ: 'O', // Õ
  Ő: 'O', // Ő
  Ō: 'O', // Ō
  Ŏ: 'O', // Ŏ
  Ŕ: 'R', // Ŕ
  Ř: 'R', // Ř
  Ŗ: 'R', // Ŗ
  Ś: 'S', // Ś
  Ŝ: 'S', // Ŝ
  Š: 'S', // Š
  Ş: 'S', // Ş
  Ŧ: 'T', // Ŧ
  Ť: 'T', // Ť
  Ţ: 'T', // Ţ
  Ú: 'U', // Ú
  Ù: 'U', // Ù
  Û: 'U', // Û
  Ü: 'UE', // Ü
  Ũ: 'U', // Ũ
  Ŭ: 'U', // Ŭ
  Ű: 'U', // Ű
  Ů: 'U', // Ů
  Ū: 'U', // Ū
  Ų: 'U', // Ų
  Ŵ: 'W', // Ŵ
  Ý: 'Y', // Ý
  Ŷ: 'Y', // Ŷ
  Ÿ: 'Y', // Ÿ
  Ź: 'Z', // Ź
  Ž: 'Z', // Ž
  Ż: 'Z', // Ż
  Æ: 'AE', // Æ
  Ĳ: 'IJ', // Ĳ
  Œ: 'OE', // Œ
  þ: 'TH', // þ
  // latin transliteration lowercase
  á: 'a', // á
  à: 'a', // à
  â: 'a', // â
  ä: 'ae', // ä
  ã: 'a', // ã
  ă: 'a', // ă
  å: 'aa', // å
  ā: 'a', // ā
  ą: 'a', // ą
  ć: 'c', // ć
  ĉ: 'c', // ĉ
  č: 'c', // č
  ċ: 'c', // ċ
  ç: 'c', // ç
  đ: 'd', // đ
  ď: 'd', // ď
  é: 'e', // é
  è: 'e', // è
  ê: 'e', // ê
  ë: 'e', // ë
  ě: 'e', // ě
  ė: 'e', // ė
  ē: 'e', // ē
  ę: 'e', // ę
  ĕ: 'e', // ĕ
  ĝ: 'g', // ĝ
  ğ: 'g', // ğ
  ġ: 'g', // ġ
  ģ: 'g', // ģ
  ħ: 'h', // ħ
  ĥ: 'h', // ĥ
  í: 'i', // í
  ì: 'i', // ì
  î: 'i', // î
  ï: 'i', // ï
  ĩ: 'i', // ĩ
  i: 'i', // i
  ī: 'i', // ī
  į: 'i', // į
  ĭ: 'i', // ĭ
  ĵ: 'j', // ĵ
  ķ: 'k', // ķ
  ł: 'l', // ł
  ĺ: 'l', // ĺ
  ľ: 'l', // ľ
  ļ: 'l', // ļ
  ŀ: 'l', // ŀ
  ń: 'n', // ń
  ñ: 'n', // ñ
  ň: 'n', // ň
  ņ: 'n', // ņ
  ø: 'oe', // ø
  ó: 'o', // ó
  ò: 'o', // ò
  ô: 'o', // ô
  ö: 'oe', // ö
  õ: 'o', // õ
  ő: 'o', // ő
  ō: 'o', // ō
  ŏ: 'o', // ŏ
  ŕ: 'r', // ŕ
  ř: 'r', // ř
  ŗ: 'r', // ŗ
  ś: 's', // ś
  ŝ: 's', // ŝ
  š: 's', // š
  ş: 's', // ş
  ŧ: 't', // ŧ
  ť: 't', // ť
  ţ: 't', // ţ
  ú: 'u', // ú
  ù: 'u', // ù
  û: 'u', // û
  ü: 'ue', // ü
  ũ: 'u', // ũ
  ŭ: 'u', // ŭ
  ű: 'u', // ű
  ů: 'u', // ů
  ū: 'u', // ū
  ų: 'u', // ų
  ŵ: 'w', // ŵ
  ý: 'y', // ý
  ŷ: 'y', // ŷ
  ÿ: 'y', // ÿ
  ź: 'z', // ź
  ž: 'z', // ž
  ż: 'z', // ż
  æ: 'ae', // æ
  ĳ: 'ij', // ĳ
  œ: 'oe', // œ
  Þ: 'th', // Þ
  // latin transliteration non standard
  Ð: 'D', // Ð
  ð: 'd', // ð
  // latin transliteration special chars
  ß: 'SS', // ß
  ŋ: 'n', // ŋ
  // speical chars
  '\u2019': '', // ’
  '\u2018': '', // ‘
  '\u0027': '', // '
  '\u00B4': '', // ´
  '\u0060': '', // `
  '\u002F': '', // /
  '\u002E': ' ', // .
  '\u002D': ' ', // -
  '\u002C': ' ', // ,
};

function generateTransliterationPatterns(
  transliteration: object,
): { transliterationReplacePattern: RegExp; transliterationMatchPattern: string } {
  const pattern = Object.keys(transliteration)
    .join('')
    .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');

  return {
    transliterationReplacePattern: new RegExp(`[${pattern}]`, 'g'),
    transliterationMatchPattern: `^[a-zA-Z ${pattern}]+$`,
  };
}

const { transliterationMatchPattern, transliterationReplacePattern } = generateTransliterationPatterns(
  transliterationMap,
);

const lettersWithUmlauts = /[A-Za-zÀ-ž\u0370-\u03FF\u0400-\u04FF\s]+$/;

export { transliterationMatchPattern, transliterationReplacePattern, lettersWithUmlauts };

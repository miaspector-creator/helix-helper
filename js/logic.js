(function () {
  'use strict';

  var EXAMPLE_SEQUENCE = 'ATGGCCATTGTAATGGGCCGC';
  var INVISIBLE_CHARACTER_CODES = {
    '\u200B': 'U+200B',
    '\u200C': 'U+200C',
    '\u200D': 'U+200D',
    '\uFEFF': 'U+FEFF'
  };

  function cleanSequence(raw) {
    if (raw === null || typeof raw === 'undefined') {
      return '';
    }

    return String(raw).replace(/\s+/g, function (whitespace) {
      return whitespace.replace(/[^\uFEFF]/g, '');
    }).toUpperCase();
  }

  function findInvalidCharacters(cleaned) {
    var invalid = [];

    for (var index = 0; index < cleaned.length; index += 1) {
      var character = cleaned.charAt(index);

      if (character !== 'A' && character !== 'T' && character !== 'G' && character !== 'C') {
        invalid.push({
          char: character,
          position: index + 1
        });
      }
    }

    return invalid;
  }

  function gcContent(seq) {
    var normalized = cleanSequence(seq);
    var length = normalized.length;

    if (length === 0) {
      return {
        g: 0,
        c: 0,
        gc: 0,
        length: 0,
        percent: 0,
        percentText: '0.0%'
      };
    }

    var g = 0;
    var c = 0;

    for (var index = 0; index < length; index += 1) {
      var character = normalized.charAt(index);

      if (character === 'G') {
        g += 1;
      } else if (character === 'C') {
        c += 1;
      }
    }

    var gc = g + c;
    var percent = (gc / length) * 100;

    return {
      g: g,
      c: c,
      gc: gc,
      length: length,
      percent: percent,
      percentText: percent.toFixed(1) + '%'
    };
  }

  function reverseComplement(seq) {
    var normalized = cleanSequence(seq);
    var complementMap = {
      A: 'T',
      T: 'A',
      G: 'C',
      C: 'G'
    };
    var reversed = '';

    for (var index = normalized.length - 1; index >= 0; index -= 1) {
      var character = normalized.charAt(index);
      reversed += complementMap[character] || character;
    }

    return reversed;
  }

  function toRna(seq) {
    return cleanSequence(seq).replace(/T/g, 'U');
  }

  function formatInvalid(item) {
    var code = INVISIBLE_CHARACTER_CODES[item.char];
    if (code) {
      return 'invisible character (' + code + ') at position ' + item.position;
    }

    return '"' + item.char + '" at position ' + item.position;
  }

  function analyze(raw) {
    var original = raw === null || typeof raw === 'undefined' ? '' : String(raw);
    var cleaned = cleanSequence(original);

    if (cleaned.length === 0) {
      return {
        status: 'empty',
        message: 'Paste a DNA sequence to start.'
      };
    }

    var invalid = findInvalidCharacters(cleaned);

    if (invalid.length > 0) {
      return {
        status: 'invalid',
        original: original,
        cleaned: cleaned,
        invalid: invalid,
        messages: invalid.map(formatInvalid)
      };
    }

    var result = gcContent(cleaned);

    return {
      status: 'ok',
      original: original,
      cleaned: cleaned,
      length: cleaned.length,
      gc: result,
      reverseComplement: reverseComplement(cleaned),
      rna: toRna(cleaned)
    };
  }

  var HelixLogic = {
    EXAMPLE_SEQUENCE: EXAMPLE_SEQUENCE,
    cleanSequence: cleanSequence,
    findInvalidCharacters: findInvalidCharacters,
    gcContent: gcContent,
    reverseComplement: reverseComplement,
    toRna: toRna,
    formatInvalid: formatInvalid,
    analyze: analyze
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = HelixLogic;
  }

  if (typeof window !== 'undefined') {
    window.HelixLogic = HelixLogic;
  }
}());

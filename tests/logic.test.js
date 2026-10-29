'use strict';

var assert = require('assert');
var HelixLogic = require('../js/logic.js');

function test(name, callback) {
  try {
    callback();
    console.log('✓ ' + name);
  } catch (error) {
    console.error('✗ ' + name);
    throw error;
  }
}

test('ATGC length and GC analysis', function () {
  var analysis = HelixLogic.analyze('ATGC');
  assert.strictEqual(analysis.status, 'ok');
  assert.strictEqual(analysis.length, 4);
  assert.strictEqual(analysis.gc.percent, 50);
  assert.strictEqual(analysis.gc.percentText, '50.0%');
  assert.strictEqual(analysis.reverseComplement, 'GCAT');
  assert.strictEqual(analysis.rna, 'AUGC');
});

test('known example sequence yields expected results', function () {
  var analysis = HelixLogic.analyze(HelixLogic.EXAMPLE_SEQUENCE);
  assert.strictEqual(analysis.status, 'ok');
  assert.strictEqual(analysis.length, 21);
  assert.strictEqual(analysis.gc.percentText, '57.1%');
  assert.strictEqual(analysis.gc.gc, 12);
  assert.strictEqual(analysis.reverseComplement, 'GCGGCCCATTACAATGGCCAT');
  assert.strictEqual(analysis.rna, 'AUGGCCAUUGUAAUGGGCCGC');
});

test('lowercase input is accepted and normalized', function () {
  var analysis = HelixLogic.analyze('atgc');
  assert.strictEqual(analysis.status, 'ok');
  assert.strictEqual(analysis.cleaned, 'ATGC');
  assert.deepStrictEqual(analysis.gc, {
    g: 1,
    c: 1,
    gc: 2,
    length: 4,
    percent: 50,
    percentText: '50.0%'
  });
});

test('spaces and line breaks are removed from sequences', function () {
  var spacedAnalysis = HelixLogic.analyze('AT GC');
  var lineBreakAnalysis = HelixLogic.analyze('AT\nGC');

  assert.strictEqual(spacedAnalysis.status, 'ok');
  assert.strictEqual(spacedAnalysis.cleaned, 'ATGC');
  assert.strictEqual(lineBreakAnalysis.status, 'ok');
  assert.strictEqual(lineBreakAnalysis.cleaned, 'ATGC');
});

test('invalid characters are reported with one-based positions', function () {
  var analysis = HelixLogic.analyze('ATGXC');
  assert.strictEqual(analysis.status, 'invalid');
  assert.deepStrictEqual(analysis.invalid, [{ char: 'X', position: 4 }]);
  assert.deepStrictEqual(analysis.messages, ['"X" at position 4']);
});

test('empty input returns the empty state message', function () {
  var analysis = HelixLogic.analyze('');
  assert.deepStrictEqual(analysis, {
    status: 'empty',
    message: 'Paste a DNA sequence to start.'
  });
});

test('whitespace and line breaks are stripped while original is preserved', function () {
  var original = 'ATG\nC\nT\tA';
  var analysis = HelixLogic.analyze(original);
  assert.strictEqual(analysis.original, original);
  assert.strictEqual(analysis.cleaned, 'ATGCTA');
  assert.strictEqual(analysis.length, 6);
});

test('whitespace-only input counts as empty', function () {
  var analysis = HelixLogic.analyze('   \n\t  ');
  assert.strictEqual(analysis.status, 'empty');
});

test('multiple invalid characters are all reported', function () {
  var analysis = HelixLogic.analyze('ANTGU');
  assert.strictEqual(analysis.status, 'invalid');
  assert.deepStrictEqual(analysis.invalid, [{ char: 'N', position: 2 }, { char: 'U', position: 5 }]);
  assert.deepStrictEqual(analysis.messages, ['"N" at position 2', '"U" at position 5']);
});

test('reverse complement is self-inverse', function () {
  var sequence = 'ACTGCA';
  assert.strictEqual(HelixLogic.reverseComplement(HelixLogic.reverseComplement(sequence)), sequence);
});

test('ATAT yields zero GC content', function () {
  var result = HelixLogic.gcContent('ATAT');
  assert.strictEqual(result.percent, 0);
  assert.strictEqual(result.percentText, '0.0%');
});

test('positions count in the cleaned sequence (spaces removed first)', function () {
  var analysis = HelixLogic.analyze('AT GXC');
  assert.deepStrictEqual(analysis.invalid, [{ char: 'X', position: 4 }]);
});

test('lowercase invalid letters are reported in upper case', function () {
  assert.deepStrictEqual(HelixLogic.analyze('atgx').invalid, [{ char: 'X', position: 4 }]);
});

test('invalid sequences produce no results that could be copied', function () {
  var analysis = HelixLogic.analyze('ATGXC');
  assert.strictEqual(analysis.length, undefined);
  assert.strictEqual(analysis.gc, undefined);
  assert.strictEqual(analysis.reverseComplement, undefined);
  assert.strictEqual(analysis.rna, undefined);
});

test('numbers and dashes are flagged, never silently removed', function () {
  assert.deepStrictEqual(HelixLogic.analyze('1 ATGC').messages, ['"1" at position 1']);
  assert.deepStrictEqual(HelixLogic.analyze('ATG-C').messages, ['"-" at position 4']);
});

test('GC % rounds to one decimal place', function () {
  assert.strictEqual(HelixLogic.analyze('GCA').gc.percentText, '66.7%');
  assert.strictEqual(HelixLogic.analyze('GAAAAA').gc.percentText, '16.7%');
  assert.strictEqual(HelixLogic.analyze('GGCC').gc.percentText, '100.0%');
});

test('single base works', function () {
  var analysis = HelixLogic.analyze('G');
  assert.strictEqual(analysis.length, 1);
  assert.strictEqual(analysis.reverseComplement, 'C');
});

test('EcoRI site GAATTC is its own reverse complement', function () {
  assert.strictEqual(HelixLogic.analyze('GAATTC').reverseComplement, 'GAATTC');
});

test('Windows line breaks are removed', function () {
  assert.strictEqual(HelixLogic.analyze('AT\r\nGC').cleaned, 'ATGC');
});

test('missing input counts as empty', function () {
  assert.strictEqual(HelixLogic.analyze(null).status, 'empty');
  assert.strictEqual(HelixLogic.analyze(undefined).status, 'empty');
});

test('a 10,000-base sequence is analysed correctly', function () {
  var analysis = HelixLogic.analyze('ATGC'.repeat(2500));
  assert.strictEqual(analysis.length, 10000);
  assert.strictEqual(analysis.gc.percentText, '50.0%');
});

test('invisible zero-width space copied from websites is flagged', function () {
  var analysis = HelixLogic.analyze('AT\u200BGC');
  assert.strictEqual(analysis.status, 'invalid');
  assert.strictEqual(analysis.invalid[0].position, 3);
  assert.deepStrictEqual(analysis.messages, ['invisible character (U+200B) at position 3']);
});

test('invisible joiners and byte-order marks are named in errors', function () {
  [
    { character: '\u200C', code: 'U+200C' },
    { character: '\u200D', code: 'U+200D' },
    { character: '\uFEFF', code: 'U+FEFF' }
  ].forEach(function (item) {
    var analysis = HelixLogic.analyze('AT' + item.character + 'GC');
    assert.deepStrictEqual(analysis.messages, [
      'invisible character (' + item.code + ') at position 3'
    ]);
  });
});

console.log('All logic tests passed.');

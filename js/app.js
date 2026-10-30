/*
 * Helix Helper – page behaviour
 * ------------------------------------------------------------
 * Connects the page to the pure functions in logic.js
 * (window.HelixLogic). All DNA rules live there; this file only
 * reads the input and shows the output.
 */
(function () {
  'use strict';

  var Logic = window.HelixLogic;
  var HELIX_TRANSITION_DURATION = 800;
  var HELIX_FADE_DURATION = 100;
  var ERROR_EXAMPLE = 'ATGXC';
  var INVISIBLE_CHARACTERS = {
    '\u200B': true,
    '\u200C': true,
    '\u200D': true,
    '\uFEFF': true
  };

  // ---- Elements ----
  var input        = document.getElementById('sequence-input');
  var letterCount  = document.getElementById('letter-count');
  var analyzeBtn   = document.getElementById('analyze-btn');
  var exampleBtn   = document.getElementById('example-btn');
  var errorExBtn   = document.getElementById('error-example-btn');
  var resetBtn     = document.getElementById('reset-btn');
  var backBtn      = document.getElementById('back-btn');
  var copyAllBtn   = document.getElementById('copy-all-btn');
  var messageBox   = document.getElementById('message-box');
  var inputView    = document.getElementById('input-view');
  var resultsView  = document.getElementById('results-view');
  var results      = document.getElementById('results');
  var transition   = document.getElementById('helix-transition');
  var resultsHeading = document.getElementById('results-heading');
  var resultsLabel = document.getElementById('results-label');
  var statusText   = document.getElementById('status-text');
  var gcRing       = document.getElementById('gc-ring');

  var out = {
    original:  document.getElementById('out-original'),
    cleaned:   document.getElementById('out-cleaned'),
    length:    document.getElementById('out-length'),
    gc:        document.getElementById('out-gc'),
    gcWorking: document.getElementById('out-gc-working'),
    revcomp:   document.getElementById('out-revcomp'),
    rna:       document.getElementById('out-rna'),
    countG:    document.getElementById('count-g'),
    countC:    document.getElementById('count-c'),
    countAT:   document.getElementById('count-at')
  };

  var lastResult = null;   // used by "Copy all results"
  var transitionTimer = null;
  var transitionActive = false;

  // ---- Small helpers ----

  /** Build an element with optional class and text (safe: never uses innerHTML). */
  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  /** Show a sequence with each base coloured; invalid positions get <mark>. */
  function renderSequence(target, seq, badPositions) {
    target.textContent = '';
    target.setAttribute('data-raw', seq);
    for (var i = 0; i < seq.length; i++) {
      var ch = seq[i];
      var node;
      if (badPositions && badPositions[i + 1]) {
        node = el('mark', '', INVISIBLE_CHARACTERS[ch] ? '?' : ch);
      } else if (ch === 'A' || ch === 'T' || ch === 'G' || ch === 'C') {
        node = el('span', 'b-' + ch, ch);
      } else if (ch === 'U') {
        node = el('span', 'b-T', ch);       // RNA: U takes T's colour
      } else {
        node = document.createTextNode(ch);
      }
      target.appendChild(node);
    }
  }

  function updateLetterCount() {
    var n = Logic.cleanSequence(input.value).length;
    letterCount.textContent = n + (n === 1 ? ' letter' : ' letters');
  }

  function hideMessage() {
    messageBox.hidden = true;
    messageBox.textContent = '';
  }

  function showEmpty(message) {
    showInputView(false);
    results.hidden = true;
    messageBox.className = 'message message-info';
    messageBox.textContent = '';
    messageBox.appendChild(el('span', 'message-title', message));
    messageBox.appendChild(el('span', '', 'Or tap "Try clean example" to see how it works.'));
    messageBox.hidden = false;
  }

  function showInvalid(result) {
    showInputView(false);
    results.hidden = true;
    var count = result.invalid.length;
    messageBox.className = 'message message-error';
    messageBox.textContent = '';

    messageBox.appendChild(el('span', 'message-title',
      count + ' letter' + (count === 1 ? '' : 's') + ' to fix before analyzing'));

    var list = el('ul');
    result.messages.forEach(function (m) { list.appendChild(el('li', '', 'Error: ' + m)); });
    messageBox.appendChild(list);

    var bad = {};
    result.invalid.forEach(function (item) { bad[item.position] = true; });
    var seq = el('p', 'seq');
    renderSequence(seq, result.cleaned, bad);
    messageBox.appendChild(seq);

    messageBox.appendChild(el('p', 'tip',
      'Only A, T, G and C are allowed. Positions count from 1, after spaces are removed.'));
    messageBox.hidden = false;
  }

  function showResults(result, animateTransition) {
    hideMessage();
    var gc = result.gc;

    statusText.textContent = 'Valid sequence: all ' + result.length +
      ' letters are A, T, G or C.';
    resultsLabel.textContent = result.length + ' ' +
      (result.length === 1 ? 'letter' : 'letters') + ' · ' + gc.percentText + ' GC';

    out.length.textContent = result.length;
    out.gc.textContent = gc.percentText;
    out.countG.textContent = gc.g;
    out.countC.textContent = gc.c;
    out.countAT.textContent = gc.length - gc.gc;
    out.gcWorking.textContent =
      '(' + gc.g + ' G + ' + gc.c + ' C) ÷ ' + gc.length +
      ' × 100 = ' + gc.percentText;

    // Ring: circumference is 100, so the percentage is the filled length
    gcRing.setAttribute('stroke-dasharray', gc.percent.toFixed(1) + ' 100');

    renderSequence(out.cleaned, result.cleaned);
    out.original.textContent = result.original;
    renderSequence(out.revcomp, result.reverseComplement);
    renderSequence(out.rna, result.rna);

    results.hidden = false;
    if (location.hash !== '#results') location.hash = 'results';
    if (animateTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      playHelixTransition();
    } else {
      showResultsView();
    }
  }

  function finishHelixTransition() {
    if (!transitionActive) return;
    transitionActive = false;
    if (transitionTimer !== null) {
      window.clearTimeout(transitionTimer);
      transitionTimer = null;
    }
    transition.classList.remove('is-active', 'is-leaving');
    transition.hidden = true;
    showResultsView();
  }

  function playHelixTransition() {
    transitionActive = true;
    transition.hidden = false;
    transition.classList.remove('is-leaving');
    transition.classList.add('is-active');
    transitionTimer = window.setTimeout(function () {
      transition.classList.add('is-leaving');
      transitionTimer = window.setTimeout(finishHelixTransition, HELIX_FADE_DURATION);
    }, HELIX_TRANSITION_DURATION - HELIX_FADE_DURATION);
  }

  function showResultsView() {
    if (!resultsView.hidden) return;
    inputView.hidden = true;
    resultsView.hidden = false;
    window.scrollTo(0, 0);
    resultsHeading.focus();
  }

  function showInputView(shouldFocus) {
    resultsView.hidden = true;
    inputView.hidden = false;
    if (shouldFocus) {
      window.scrollTo(0, 0);
      input.focus();
    }
  }

  function handleHashChange() {
    if (location.hash === '#results') {
      if (transitionActive) return;
      if (lastResult) {
        showResultsView();
      } else {
        history.replaceState(null, '', location.pathname + location.search);
        showInputView(false);
      }
      return;
    }
    showInputView(true);
  }

  // ---- Main actions ----
  function runAnalysis() {
    var result = Logic.analyze(input.value);
    lastResult = null;

    if (result.status === 'empty') {
      input.setAttribute('aria-invalid', 'true');
      showEmpty(result.message);
      return;
    }
    input.removeAttribute('aria-invalid');
    if (result.status === 'invalid') {
      showInvalid(result);
      return;
    }
    lastResult = result;
    showResults(result, true);
  }

  function loadExample(seq) {
    input.value = seq;
    updateLetterCount();
    runAnalysis();
  }

  function resetAll() {
    input.value = '';
    input.removeAttribute('aria-invalid');
    lastResult = null;
    updateLetterCount();
    hideMessage();
    results.hidden = true;
    gcRing.setAttribute('stroke-dasharray', '0 100');
    showInputView(true);
    if (location.hash === '#results') history.back();
  }

  // ---- Copying ----
  function flash(button, label) {
    var original = button.getAttribute('data-label') || button.textContent;
    button.setAttribute('data-label', original);
    button.textContent = label;
    setTimeout(function () { button.textContent = original; }, 1500);
  }

  function fallbackCopy(text) {
    var temp = el('textarea');
    temp.value = text;
    temp.setAttribute('readonly', '');
    temp.style.position = 'fixed';
    temp.style.opacity = '0';
    document.body.appendChild(temp);
    temp.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(temp);
    return ok;
  }

  function copyText(text, button) {
    if (!text) return;
    function fallback() { flash(button, fallbackCopy(text) ? 'Copied!' : 'Copy failed'); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { flash(button, 'Copied!'); }, fallback);
    } else {
      fallback();
    }
  }

  function allResultsText(r) {
    return [
      'Helix Helper results',
      'Sequence: ' + r.cleaned,
      'Length: ' + r.length,
      'GC content: ' + r.gc.percentText + ' (' + r.gc.gc + ' of ' + r.gc.length + ')',
      'Reverse complement: ' + r.reverseComplement,
      'RNA: ' + r.rna
    ].join('\n');
  }

  // ---- Events ----
  input.addEventListener('input', function () {
    input.removeAttribute('aria-invalid');
    updateLetterCount();
  });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      runAnalysis();
    }
  });

  analyzeBtn.addEventListener('click', runAnalysis);
  exampleBtn.addEventListener('click', function () { loadExample(Logic.EXAMPLE_SEQUENCE); });
  errorExBtn.addEventListener('click', function () { loadExample(ERROR_EXAMPLE); });
  backBtn.addEventListener('click', function () {
    showInputView(true);
    if (location.hash === '#results') history.back();
  });
  transition.addEventListener('click', finishHelixTransition);
  resetBtn.addEventListener('click', resetAll);
  window.addEventListener('hashchange', handleHashChange);

  document.querySelectorAll('.btn-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = document.getElementById(btn.getAttribute('data-copy'));
      copyText(target ? target.getAttribute('data-raw') : '', btn);
    });
  });

  copyAllBtn.addEventListener('click', function () {
    if (lastResult) copyText(allResultsText(lastResult), copyAllBtn);
  });

  updateLetterCount();
  if (location.hash === '#results') {
    history.replaceState(null, '', location.pathname + location.search);
  }
  showInputView(false);
})();

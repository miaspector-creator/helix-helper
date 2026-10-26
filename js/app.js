(function () {
  'use strict';

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function buildMarkedSequence(cleaned, invalidList) {
    var invalidPositions = {};

    invalidList.forEach(function (item) {
      invalidPositions[item.position] = true;
    });

    var segments = [];

    for (var index = 0; index < cleaned.length; index += 1) {
      var character = cleaned.charAt(index);
      var escaped = escapeHtml(character);

      if (invalidPositions[index + 1]) {
        segments.push('<mark>' + escaped + '</mark>');
      } else {
        segments.push(escaped);
      }
    }

    return segments.join('');
  }

  function copyText(value) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(value);
    }

    var helper = document.createElement('textarea');
    helper.value = value;
    helper.setAttribute('readonly', 'readonly');
    helper.style.position = 'fixed';
    helper.style.top = '-9999px';
    document.body.appendChild(helper);
    helper.select();
    document.execCommand('copy');
    document.body.removeChild(helper);
    return Promise.resolve();
  }

  function updateMessageBox(type, html) {
    var box = document.getElementById('message-box');
    box.hidden = false;
    box.className = 'message-box';
    if (type === 'error') {
      box.classList.add('error');
    }

    box.innerHTML = html;
  }

  function hideMessageBox() {
    var box = document.getElementById('message-box');
    box.hidden = true;
    box.innerHTML = '';
  }

  function setResultVisible(visible) {
    var section = document.getElementById('results');
    section.hidden = !visible;
  }

  function renderEmptyState() {
    setResultVisible(false);
    updateMessageBox('info', '<p>' + escapeHtml('Paste a DNA sequence to start.') + '</p>');
  }

  function renderInvalidState(result) {
    setResultVisible(false);

    var countText = result.invalid.length === 1 ? '1 invalid character' : result.invalid.length + ' invalid characters';
    var messageHtml = '<p>Found ' + countText + '.</p>';

    result.messages.forEach(function (message) {
      messageHtml += '<p>Error: ' + escapeHtml(message) + '</p>';
    });

    messageHtml += '<p class="sequence-markup">' + buildMarkedSequence(result.cleaned, result.invalid) + '</p>';
    updateMessageBox('error', messageHtml);
  }

  function renderValidState(result) {
    setResultVisible(true);
    hideMessageBox();

    var gc = result.gc;
    var gcSummary = 'G = ' + gc.g + ', C = ' + gc.c + ' → ' + gc.gc + ' of ' + gc.length + ' bases = ' + gc.percentText;

    document.getElementById('result-original').textContent = result.original;
    document.getElementById('result-cleaned').textContent = result.cleaned;
    document.getElementById('result-length').textContent = String(result.length);
    document.getElementById('result-gc').textContent = gc.percentText;
    document.getElementById('result-gc-summary').textContent = gcSummary;
    document.getElementById('result-reverse').textContent = result.reverseComplement;
    document.getElementById('result-rna').textContent = result.rna;
  }

  function analyzeSequence() {
    var input = document.getElementById('sequence-input');
    var result = window.HelixLogic.analyze(input.value);

    if (result.status === 'empty') {
      renderEmptyState();
      return;
    }

    if (result.status === 'invalid') {
      renderInvalidState(result);
      return;
    }

    renderValidState(result);
  }

  function resetForm() {
    var input = document.getElementById('sequence-input');
    input.value = '';
    hideMessageBox();
    setResultVisible(false);
    input.focus();
  }

  function bindCopyButtons() {
    var buttons = document.querySelectorAll('[data-copy-target]');

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var targetId = button.getAttribute('data-copy-target');
        var output = document.getElementById(targetId);
        var value = output.textContent || '';

        copyText(value).then(function () {
          var original = button.textContent;
          button.textContent = 'Copied';
          window.setTimeout(function () {
            button.textContent = original;
          }, 1000);
        }).catch(function () {
          button.textContent = 'Copy failed';
          window.setTimeout(function () {
            button.textContent = 'Copy';
          }, 1000);
        });
      });
    });
  }

  function initialize() {
    var input = document.getElementById('sequence-input');
    var analyzeButton = document.getElementById('analyze-button');
    var exampleButton = document.getElementById('example-button');
    var resetButton = document.getElementById('reset-button');

    analyzeButton.addEventListener('click', analyzeSequence);
    exampleButton.addEventListener('click', function () {
      input.value = window.HelixLogic.EXAMPLE_SEQUENCE;
      analyzeSequence();
    });
    resetButton.addEventListener('click', resetForm);

    input.addEventListener('keydown', function (event) {
      if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        event.preventDefault();
        analyzeSequence();
      }
    });

    bindCopyButtons();
    hideMessageBox();
    setResultVisible(false);
  }

  document.addEventListener('DOMContentLoaded', initialize);
}());

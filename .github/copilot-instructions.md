# Copilot instructions – Helix Helper

## Project
Helix Helper is a mobile-first web app. The user pastes a DNA sequence and instantly gets its length, GC content and reverse complement, with any invalid letters flagged.
- Users: biology students and lab researchers.
- Problem: counting GC content and writing reverse complements by hand is slow, and one miscounted or swapped letter can ruin an experiment.

## Tech stack (strict)
- Plain HTML5, CSS3 and vanilla JavaScript (ES5/ES2015 syntax, no modules needed).
- No frameworks, libraries, bundlers, TypeScript or build step.
- No backend, no database, no external API, no AI calls, no localStorage. Everything runs in the phone's browser.
- Tests use Node's built-in `assert` only: `node tests/logic.test.js`.

## File structure
```
my-app/
├── .github/copilot-instructions.md  this file
├── design/new-meeting.html          Stitch wireframe: visual reference ONLY
├── index.html                       single phone-sized page (the real app)
├── css/styles.css                   mobile-first styles, light + dark mode
├── js/logic.js                      pure functions only (no DOM)
├── js/app.js                        DOM wiring only (no calculations)
├── tests/logic.test.js              tests for every row of the test data
└── package.json                     "scripts": { "test": "node tests/logic.test.js" }
```
- Use `design/new-meeting.html` for layout, colours and spacing only. Do not copy its scripts or external dependencies, and do not edit it.
- If the Stitch file loads Tailwind or another CDN, rewrite those styles as plain CSS in `css/styles.css`.
- `package.json` must have no dependencies. It needs only the `test` script.
- `logic.js` must not touch `document` or `window` beyond exporting itself. It exports via `module.exports` in Node and `window.HelixLogic` in the browser.
- `app.js` reads input, calls `HelixLogic.analyze()`, and renders. It never re-implements a rule.
- Load order in `index.html`: `js/logic.js`, then `js/app.js`, at the end of `<body>`.

## Logic rules (`js/logic.js`)
1. **Clean**: `cleanSequence(raw)` removes all whitespace (`/\s+/g`: spaces, tabs, line breaks) and converts to upper case. Lowercase input is valid: `atgc` → `ATGC`.
2. **Validate**: `findInvalidCharacters(cleaned)` allows only `A`, `T`, `G`, `C`. It returns `[{ char, position }]` for every invalid character. Positions are **1-based** and counted in the **cleaned** sequence.
3. **Length**: the number of letters in the cleaned sequence.
4. **GC %**: `gcContent(seq)` counts G and C separately and returns `{ g, c, gc, length, percent, percentText }`. `percent = (g + c) / length * 100`. `percentText = percent.toFixed(1) + '%'`. If length is 0, the result is `0`.
5. **Reverse complement**: `reverseComplement(seq)` swaps A↔T and G↔C, then reads the sequence backwards.
6. **RNA**: `toRna(seq)` replaces every `T` with `U`.
7. **Error format**: `formatInvalid(item)` returns `"X" at position 4`.
8. **Entry point**: `analyze(raw)` returns exactly one of these shapes:
   - `{ status: 'empty', message: 'Paste a DNA sequence to start.' }`
   - `{ status: 'invalid', original, cleaned, invalid: [...], messages: [...] }`
   - `{ status: 'ok', original, cleaned, length, gc, reverseComplement, rna }`
9. **Example**: `EXAMPLE_SEQUENCE = 'ATGGCCATTGTAATGGGCCGC'`.

## UI requirements (`index.html` + `js/app.js`)
- A textarea with id `sequence-input` (monospace, font-size 16px so iOS doesn't zoom, `spellcheck="false"`, `autocapitalize="characters"`).
- Buttons: **Analyze sequence** (primary), **Use example**, **Reset**. Ctrl/Cmd+Enter also runs the analysis.
- Messages box with `role="alert"`:
  - Empty input shows: `Paste a DNA sequence to start.`
  - Invalid input shows the count, one `Error: "X" at position N` per bad character, and the cleaned sequence with the bad letters wrapped in `<mark>`.
- Results section, hidden until a valid analysis:
  - the original sequence (as pasted)
  - the cleaned sequence
  - the length
  - GC %
  - the GC working, e.g. `G = 6, C = 6 → 12 of 21 … = 57.1%`
  - the reverse complement
  - the RNA sequence
- Copy buttons for the cleaned sequence, the reverse complement and RNA. Use `navigator.clipboard.writeText`, with a fallback that selects the text and calls `document.execCommand('copy')`.
- Reset clears the input, messages and results, then focuses the textarea.
- Always escape user text before inserting it as HTML. Prefer `textContent`.

## Style requirements (`css/styles.css`)
- Mobile-first layout with a max-width of 640px and 16px padding.
- Tap targets at least 44px tall.
- CSS variables on `:root`, with dark mode under `@media (prefers-color-scheme: dark)`.
- Sequences wrap with `word-break: break-all` so there is no horizontal scroll.
- Error box: red left edge. Info box: blue left edge.

## Test data (all must pass)
| Input | Expected |
|---|---|
| `ATGC` | Length 4 · GC 50.0% · revcomp `GCAT` · RNA `AUGC` |
| `ATGGCCATTGTAATGGGCCGC` | Length 21 · GC 57.1% (12 of 21) · revcomp `GCGGCCCATTACAATGGCCAT` · RNA `AUGGCCAUUGUAAUGGGCCGC` |
| `atgc` | Accepted as `ATGC`, no errors |
| `ATGXC` | Error: `"X" at position 4` |
| (empty) | `Paste a DNA sequence to start.` |

Extra tests:
- Whitespace and line breaks are removed and the original is kept.
- Whitespace-only input counts as empty.
- Multiple invalid characters are all reported (`ANTGU` → N at 2, U at 5).
- `revcomp(revcomp(s)) === s`.
- `ATAT` → `0.0%`.

## Out of scope – do NOT add
- FASTA file uploads
- protein translation
- user accounts or saved history
- online database search (NCBI)
- ambiguity codes like `N`, which stay invalid
- annealing temperature (Tm)
- any backend, database, API or AI

## Coding conventions
- Use `'use strict'` and IIFEs; don't create globals except `window.HelixLogic`.
- Keep functions small and pure, with a short comment explaining each rule.
- Whenever you change `logic.js`, add or update a test in `tests/logic.test.js` and run it.

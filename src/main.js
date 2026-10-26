import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="helix-app">
    <div class="lab-watermark" aria-hidden="true">
      <svg viewBox="0 0 100 100" class="watermark-one">
        <path d="M20,10 Q50,30 80,10 Q50,50 20,70 Q50,90 80,70" />
        <path d="M80,10 Q50,30 20,10 Q50,50 80,70 Q50,90 20,70" />
        <circle cx="35" cy="20" r="3" />
        <circle cx="65" cy="20" r="3" />
        <circle cx="50" cy="40" r="3" />
        <circle cx="35" cy="60" r="3" />
        <circle cx="65" cy="60" r="3" />
      </svg>
      <svg viewBox="0 0 100 100" class="watermark-two">
        <path d="M10,20 Q50,40 90,20 Q50,60 10,80 Q50,100 90,80" />
      </svg>
    </div>

    <div class="page-shell">
      <header class="topbar">
        <div class="brand-wrap">
          <div class="brand-icon">
            <svg viewBox="0 0 48 48" aria-hidden="true">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"/>
            </svg>
          </div>
          <h1>Helix Helper</h1>
        </div>
      </header>

      <main class="dashboard">
        <section class="title-block">
          <h2>DNA Sequence Analyzer</h2>
          <p>Instant genomic metrics, GC stoichiometry, and strand validation.</p>
        </section>

        <section class="workbench">
          <div class="left-panel panel">
            <div class="panel-head">
              <div class="panel-title-wrap">
                <span class="panel-label">Target Strand (5' → 3')</span>
                <span class="bp-count">42 bp</span>
              </div>
              <button type="button" class="ghost-button">Clear</button>
            </div>

            <textarea class="sequence-input" spellcheck="false">ATGCGTACGATCGTACGATCGATCGATCGATCGATCGATCGATCGATCGATCG
CAGTACGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGA
TGCGTACGATCGATCGATCGATCGATCGATCGATCGATCGATCGATCGATC</textarea>

            <div class="action-row">
              <button class="primary-button" type="button">Run Analysis</button>
              <button class="secondary-button" type="button">Export</button>
              <button class="secondary-button" type="button">Save</button>
            </div>

            <div class="sequence-summary">
              <div class="summary-token strong">
                <span class="summary-key">GC</span>
                <span class="summary-value">52.4%</span>
              </div>
              <div class="summary-token">
                <span class="summary-key">Tm</span>
                <span class="summary-value">64.8°C</span>
              </div>
              <div class="summary-token">
                <span class="summary-key">Coverage</span>
                <span class="summary-value">94.7%</span>
              </div>
            </div>
          </div>

          <div class="right-panel panel">
            <div class="stats-grid">
              <article class="stat-card accent">
                <div class="card-head">
                  <span class="stat-label">Avg Q-score</span>
                  <span class="stat-badge">High</span>
                </div>
                <strong>38.6</strong>
                <span class="card-foot">99.2% confidence</span>
              </article>

              <article class="stat-card">
                <div class="card-head">
                  <span class="stat-label">GC content</span>
                  <span class="stat-badge subtle">Stable</span>
                </div>
                <strong>52.4%</strong>
                <span class="card-foot">Across 24 loci</span>
              </article>

              <article class="stat-card">
                <div class="card-head">
                  <span class="stat-label">Read depth</span>
                  <span class="stat-badge subtle">+12%</span>
                </div>
                <strong>1.4M</strong>
                <span class="card-foot">Paired-end reads</span>
              </article>

              <article class="stat-card">
                <div class="card-head">
                  <span class="stat-label">Variant calls</span>
                  <span class="stat-badge warn">3</span>
                </div>
                <strong>0.08%</strong>
                <span class="card-foot">Low-frequency drift</span>
              </article>
            </div>
          </div>
        </section>

        <section class="bottom-grid">
          <article class="panel seq-panel">
            <div class="panel-head small-header">
              <div>
                <span class="panel-label">Alignment integrity</span>
                <h3>Genome strand map</h3>
              </div>
              <span class="analysis-pill">+ 94.8%</span>
            </div>

            <svg viewBox="0 0 760 280" class="helix-svg" role="img" aria-label="DNA double helix map">
              <defs>
                <linearGradient id="labStrandA" x1="0" x2="1">
                  <stop offset="0%" stop-color="#68dba9" />
                  <stop offset="50%" stop-color="#25a475" />
                  <stop offset="100%" stop-color="#93ccff" />
                </linearGradient>
                <linearGradient id="labStrandB" x1="0" x2="1">
                  <stop offset="0%" stop-color="#93ccff" />
                  <stop offset="50%" stop-color="#ffb3ae" />
                  <stop offset="100%" stop-color="#68dba9" />
                </linearGradient>
              </defs>

              <g opacity="0.28" stroke="#334b82" stroke-width="1">
                <path d="M90 20 L90 250" />
                <path d="M180 20 L180 250" />
                <path d="M270 20 L270 250" />
                <path d="M360 20 L360 250" />
                <path d="M450 20 L450 250" />
                <path d="M540 20 L540 250" />
                <path d="M630 20 L630 250" />
                <path d="M720 20 L720 250" />
              </g>

              <path d="M90 30 C 160 65, 160 100, 90 130 C 20 160, 20 200, 90 230" fill="none" stroke="url(#labStrandA)" stroke-width="4" stroke-linecap="round" />
              <path d="M720 30 C 650 65, 650 100, 720 130 C 790 160, 790 200, 720 230" fill="none" stroke="url(#labStrandB)" stroke-width="4" stroke-linecap="round" />

              <g stroke="#93ccff" stroke-width="2" opacity="0.8">
                <path d="M90 24 C 175 52, 175 96, 90 128 C 15 160, 15 200, 90 230" fill="none"/>
                <path d="M720 24 C 635 52, 635 96, 720 128 C 795 160, 795 200, 720 230" fill="none"/>
              </g>

              <g fill="#b9d9d1" font-size="12" font-family="JetBrains Mono, Consolas, monospace" letter-spacing="1.5">
                <text x="112" y="52">A</text>
                <text x="200" y="80">T</text>
                <text x="298" y="108">G</text>
                <text x="380" y="134">C</text>
                <text x="470" y="168">A</text>
                <text x="558" y="200">T</text>
                <text x="648" y="228">G</text>
              </g>

              <g fill="#68dba9" font-size="12" font-family="JetBrains Mono, Consolas, monospace" letter-spacing="1.5">
                <text x="685" y="52">C</text>
                <text x="590" y="86">G</text>
                <text x="485" y="118">A</text>
                <text x="390" y="154">T</text>
                <text x="298" y="186">C</text>
                <text x="205" y="214">G</text>
                <text x="112" y="236">A</text>
              </g>
            </svg>
          </article>

          <aside class="panel queue-panel">
            <div class="panel-head small-header">
              <div>
                <span class="panel-label">Sample health</span>
                <h3>Sequencing queue</h3>
              </div>
            </div>

            <ul class="status-list">
              <li>
                <span class="bullet good"></span>
                <div>
                  <strong>Reference match</strong>
                  <small>98.4% concordance</small>
                </div>
              </li>
              <li>
                <span class="bullet warn"></span>
                <div>
                  <strong>Coverage drift</strong>
                  <small>Moderate at chr8</small>
                </div>
              </li>
              <li>
                <span class="bullet info"></span>
                <div>
                  <strong>Library prep</strong>
                  <small>Pass / 1 checkpoint</small>
                </div>
              </li>
            </ul>

            <div class="ring-wrap">
              <svg viewBox="0 0 120 120" aria-label="Read quality ring" class="ring-svg">
                <circle cx="60" cy="60" r="44" class="ring-bg"></circle>
                <circle cx="60" cy="60" r="44" class="ring-progress"></circle>
              </svg>
              <div class="ring-center">
                <strong>97.4</strong>
                <span>Q-score</span>
              </div>
            </div>
          </aside>
        </section>

        <section class="panel table-panel">
          <div class="panel-head small-header">
            <div>
              <span class="panel-label">Variant review</span>
              <h3>Detected loci</h3>
            </div>
            <button type="button" class="ghost-button table-button">Export · CSV</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Gene</th>
                <th>Position</th>
                <th>Allele</th>
                <th>Impact</th>
                <th>Confidence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BRCA1</td>
                <td>chr17:431240</td>
                <td>G→A</td>
                <td><span class="impact low">Low</span></td>
                <td>99.7%</td>
              </tr>
              <tr>
                <td>EGFR</td>
                <td>chr7:552490</td>
                <td>C→T</td>
                <td><span class="impact medium">Medium</span></td>
                <td>97.8%</td>
              </tr>
              <tr>
                <td>TP53</td>
                <td>chr17:767271</td>
                <td>A→G</td>
                <td><span class="impact high">High</span></td>
                <td>96.4%</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  </div>
`;

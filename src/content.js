/* ------------------------------------------------------------------
   CONTEÚDO DA APRESENTAÇÃO
   Cada nó é um tópico. A ordem deste array é a ordem do percurso (setas).
   - type: 'root' | 'main' | 'child' | 'leaf'
     (as 'leaf' são decorativas: aparecem no grafo mas não são paragens)
   - parent: id do nó a que se liga
   - html: conteúdo do painel. img('nome') usa um ficheiro de /assets.
   Depois de editar: node build.mjs
------------------------------------------------------------------- */
const img = (name, alt = '') => `<img data-img="${name}" alt="${alt}">`;

const NODES = [
  {
    id: 'root', type: 'root', label: 'Academy',
  },

  /* ---------- DevScope ---------- */
  {
    id: 'devscope', type: 'main', parent: 'root', label: 'DevScope',
    kicker: 'Who', title: 'human &lt;technology&gt;',
    html: `
      <p class="lead">We specialize in helping companies achieve <mark>amazing results</mark>.</p>
      <div class="wide-photo">${img('room', 'DevScope Academy room')}</div>`,
  },
  {
    id: 'what', type: 'child', parent: 'devscope', label: 'What we do',
    kicker: 'Our focus', title: 'Data &amp; AI',
    html: `
      <div class="cards two big">
        <div class="card"><span class="ico">◧</span><b>Data</b></div>
        <div class="card"><span class="ico">✦</span><b>AI</b></div>
      </div>`,
  },
  { id: 'l-data', type: 'leaf', parent: 'what', label: 'Data' },
  { id: 'l-ai', type: 'leaf', parent: 'what', label: 'AI' },
  {
    id: 'who', type: 'child', parent: 'devscope', label: 'Who we are',
    kicker: 'DevScope', title: 'Who we are',
    html: `
      <div class="cards three big">
        <div class="card"><span class="ico">◎</span><b>lean &amp; agile mindset</b></div>
        <div class="card"><span class="ico">⚗</span><b>focus on innovation</b></div>
        <div class="card"><span class="ico">➚</span><b>state-of-the-art technology</b></div>
      </div>`,
  },
  {
    id: 'where', type: 'child', parent: 'devscope', label: 'Where we are',
    kicker: 'DevScope', title: 'Where we are',
    html: `
      <div class="photos four">
        ${img('where1')}${img('where2')}${img('where3')}${img('where4')}
      </div>`,
  },
  {
    id: 'clients', type: 'child', parent: 'devscope', label: 'Clients',
    kicker: 'DevScope', title: 'Who we work with',
    html: `<div class="paper">${img('clients', 'Client logos')}</div>`,
  },
  {
    id: 'core', type: 'child', parent: 'devscope', label: 'Core competencies',
    kicker: 'How', title: 'Our core competencies',
    html: `
      <div class="cards three">
        <div class="card"><em>Consulting</em><b>Services</b><ul><li>Data &amp; AI</li><li>Integration</li><li>App Dev.</li></ul></div>
        <div class="card"><em>Products</em><b>Factory</b><ul><li>PowerBI Tools</li><li>SmartDocumentor</li><li>Real Estate</li></ul></div>
        <div class="card"><em>SaaS</em><b>Operations</b><ul><li>Support 24/7</li><li>Platform teams</li><li>Cloud Native</li></ul></div>
      </div>`,
  },

  /* ---------- Innovation jumpstarter ---------- */
  {
    id: 'jump', type: 'main', parent: 'root', label: 'Innovation jumpstarter',
    kicker: 'What', title: 'Academy as an innovation jumpstarter',
    html: `
      <div class="flow">
        <span>Ideas</span><i>›</i><span class="hot">Academy</span><i>›</i><span>Consulting</span><i>›</i><span>Products</span><i>›</i><span>SaaS</span><i>›</i><span>Feedback</span><i class="loop">↺</i>
      </div>
      <div class="cards four">
        <div class="card hot"><em>Academy</em><b>Research</b><ul><li>Technology adoption</li><li>Talent</li><li>Culture</li></ul></div>
        <div class="card"><em>Consulting</em><b>Services</b><ul><li>Data &amp; AI</li><li>Integration</li><li>App Dev.</li></ul></div>
        <div class="card"><em>Products</em><b>Factory</b><ul><li>PowerBI Tools</li><li>SmartDocumentor</li><li>Real Estate</li></ul></div>
        <div class="card"><em>SaaS</em><b>Operations</b><ul><li>Support 24/7</li><li>Platform teams</li><li>Cloud Native</li></ul></div>
      </div>`,
  },
  { id: 'l-ideas', type: 'leaf', parent: 'jump', label: 'Ideas' },
  { id: 'l-research', type: 'leaf', parent: 'jump', label: 'Research' },
  { id: 'l-talent', type: 'leaf', parent: 'jump', label: 'Talent' },
  { id: 'l-culture', type: 'leaf', parent: 'jump', label: 'Culture' },
  { id: 'l-feedback', type: 'leaf', parent: 'jump', label: 'Feedback' },

  /* ---------- Footprint ---------- */
  {
    id: 'footprint', type: 'main', parent: 'root', label: 'Academy footprint',
    kicker: 'Since 2015', title: 'Academy footprint',
    html: `
      <div class="timeline">
        <div class="yr first"><b>2015</b></div><div class="gap">···</div>
        ${[2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025].map(y => `<div class="yr">${img('badge')}<b>${y}</b></div>`).join('')}
      </div>`,
  },
  {
    id: 'alumni', type: 'child', parent: 'footprint', label: '72 alumni',
    kicker: 'Academy footprint', title: '',
    html: `
      <div class="stat"><span class="num">72</span><span class="what">Academy Alumni</span></div>
      <div class="stat sub"><span class="num">42%</span><span class="what">of DevScope</span></div>`,
  },
  {
    id: 'roles', type: 'child', parent: 'footprint', label: 'Careers',
    kicker: 'Academy footprint', title: 'Where alumni go',
    html: `
      <div class="photos two roles">
        ${img('role-consultants', 'Consultants')}${img('role-developers', 'Developers')}
        ${img('role-pm', 'Project managers')}${img('role-researchers', 'Researchers')}
      </div>`,
  },
  { id: 'l-cons', type: 'leaf', parent: 'roles', label: 'Consultants' },
  { id: 'l-devs', type: 'leaf', parent: 'roles', label: 'Developers' },
  { id: 'l-pms', type: 'leaf', parent: 'roles', label: 'Project managers' },
  { id: 'l-res', type: 'leaf', parent: 'roles', label: 'Researchers' },

  /* ---------- Internship program ---------- */
  {
    id: 'program', type: 'main', parent: 'root', label: 'Internship program',
    kicker: 'Academy', title: 'The internship program',
    html: `
      <div class="cards two big">
        <div class="card"><span class="ico">◉</span><b>Individual Case Study</b></div>
        <div class="card"><span class="ico">✦</span><b>Dedicated Mentor</b></div>
        <div class="card"><span class="ico">⁂</span><b>Team Support</b></div>
        <div class="card"><span class="ico">☑</span><b>Report review</b></div>
      </div>`,
  },
  { id: 'l-case', type: 'leaf', parent: 'program', label: 'Case study' },
  { id: 'l-mentor', type: 'leaf', parent: 'program', label: 'Mentor' },
  { id: 'l-team', type: 'leaf', parent: 'program', label: 'Team' },
  { id: 'l-report', type: 'leaf', parent: 'program', label: 'Report' },

  /* ---------- Learning path ---------- */
  {
    id: 'path', type: 'main', parent: 'root', label: 'Learning path',
    kicker: 'Academy', title: 'The goal and the learning path',
    html: `
      <svg class="curve" viewBox="0 0 640 330" role="img" aria-label="Experiments converge on the goal over time">
        <line x1="60" y1="20" x2="60" y2="300" class="ax"/><line x1="60" y1="300" x2="620" y2="300" class="ax"/>
        <line x1="60" y1="160" x2="620" y2="160" class="goal"/>
        <path class="osc" d="__CURVE__"/>
        <text x="72" y="34" class="t">Unknown</text>
        <text x="250" y="70" class="t hot">Experiments</text>
        <text x="612" y="148" class="t" text-anchor="end">The Goal</text>
        <text x="612" y="322" class="t dim" text-anchor="end">Time</text>
      </svg>`,
  },
  { id: 'l-exp', type: 'leaf', parent: 'path', label: 'Experiments' },
  { id: 'l-goal', type: 'leaf', parent: 'path', label: 'The Goal' },

  /* ---------- How it will happen ---------- */
  {
    id: 'how', type: 'main', parent: 'root', label: 'How it will happen',
    kicker: 'Academy', title: 'How it will happen',
    html: `
      <div class="cards four tall">
        <div class="card"><b>Ramp-up</b><em>Workshops</em><ul><li>DevOps</li><li>AI</li><li>Low Code</li><li>BI</li></ul></div>
        <div class="card"><b>Daily Meeting</b><em>Focus</em><ul><li>Doing since last meeting</li><li>Today</li><li>Any issues?</li></ul></div>
        <div class="card"><b>Weekly Meeting</b><em>&nbsp;</em><ul><li>Overall progress</li><li>Discuss next steps</li><li>Retrospective</li></ul></div>
        <div class="card"><b>Checkpoint (1, 2, 3)</b><em>&nbsp;</em><ul><li>Show your progress to everyone</li><li>Gather feedback</li></ul></div>
      </div>`,
  },
  { id: 'l-ramp', type: 'leaf', parent: 'how', label: 'Ramp-up' },
  { id: 'l-daily', type: 'leaf', parent: 'how', label: 'Daily' },
  { id: 'l-weekly', type: 'leaf', parent: 'how', label: 'Weekly' },
  { id: 'l-check', type: 'leaf', parent: 'how', label: 'Checkpoints' },

  /* ---------- How we work ---------- */
  {
    id: 'tools', type: 'main', parent: 'root', label: 'How we work',
    kicker: 'Academy', title: 'How we work',
    html: `<div class="paper">${img('tools', 'Research, communication, reporting and development tools')}</div>`,
  },
  { id: 'l-tr', type: 'leaf', parent: 'tools', label: 'Research' },
  { id: 'l-tc', type: 'leaf', parent: 'tools', label: 'Communication' },
  { id: 'l-td', type: 'leaf', parent: 'tools', label: 'Development' },
  { id: 'l-tp', type: 'leaf', parent: 'tools', label: 'Reporting' },

  /* ---------- Culture ---------- */
  {
    id: 'share', type: 'main', parent: 'root', label: 'Share & learn',
    kicker: '', title: '',
    html: `<p class="quote">The more you <mark>share</mark>, the more you <mark>learn</mark></p>`,
  },
  {
    id: 'team', type: 'child', parent: 'share', label: 'Team',
    kicker: 'Culture', title: '',
    html: `<div class="photos stack">${img('team1')}${img('team2')}</div>`,
  },
  {
    id: 'road', type: 'child', parent: 'share', label: 'Enjoy each mile',
    kicker: '', title: '',
    html: `
      <div class="wide-photo tall">${img('road')}</div>
      <p class="lead">..Enjoy each <mark>mile</mark> of the Learning path..</p>`,
  },

  /* ---------- Thank you ---------- */
  {
    id: 'thanks', type: 'main', parent: 'root', label: 'Thank you',
    kicker: '', title: '<span class="br">&lt;</span>Thank you!<span class="br">&gt;</span>',
    html: `
      <div class="contact">
        <div class="who">${img('david', 'David Mota')}
          <div><b>David Mota</b><span>DevScope Academy Manager</span>
          <span>david.mota@devscope.net</span><span>in/motadb</span></div>
        </div>
        <div class="qr">${img('qr-linkedin', 'QR code: linkedin.com/in/motadb')}<span>linkedin.com/in/motadb</span></div>
      </div>`,
  },
];

/* Texto do ecrã inicial */
const HERO = { title: 'DevScope Academy', sub: 'ISEP · 2026', hint: 'Prime → para começar' };

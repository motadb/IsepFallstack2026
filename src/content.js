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
    id: 'world', type: 'child', parent: 'devscope', label: 'Porto to the world', wide: true,
    kicker: 'DevScope', title: 'From <mark>Porto</mark> to the world',
    html: `<div class="worldwrap">${WORLD_SVG}</div>`,
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
        <div class="card"><em>Products</em><b>Factory</b><ul><li>PowerBI Tools</li><li>SmartDocumentor</li></ul></div>
        <div class="card"><em>SaaS</em><b>Operations</b><ul><li>Support 24/7</li><li>Platform teams</li><li>Cloud Native</li></ul></div>
      </div>`,
  },

  /* ---------- Vídeo ---------- */
  {
    id: 'video', type: 'main', parent: 'root', label: 'Video', wide: true,
    kicker: '', title: '',
    html: `
      <div class="vhead">
        <div><p class="kicker">Academy</p><h2>Watch</h2></div>
      </div>
      <div class="video">
        <video controls playsinline preload="metadata" tabindex="-1" data-video="devscope" data-poster="video-poster"></video>
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
        <div class="card"><em>Products</em><b>Factory</b><ul><li>PowerBI Tools</li><li>SmartDocumentor</li></ul></div>
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
        ${[2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026].map(y => `<div class="yr">${img('badge')}<b>${y}</b></div>`).join('')}
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

  /* ---------- Perks ---------- */
  {
    id: 'perks', type: 'child', parent: 'program', label: 'Perks',
    kicker: 'Academy', title: 'Perks',
    html: `
      <p class="lead">Interns are treated like colleagues</p>
      <div class="cards two perks">
        <div class="card row"><span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-4h4v4"/></svg></span><b>Free access to the office</b></div>
        <div class="card row"><span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9h11v4a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V9z"/><path d="M16 10h2a2 2 0 0 1 0 5h-2M8 3v2M12 3v2"/></svg></span><b>Kitchen access</b></div>
        <div class="card row"><span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.7 1.8L21.5 18.5l-1.8.7L19 21l-.7-1.8-1.8-.7 1.8-.7z"/></svg></span><b>Fun events</b></div>
        <div class="card row"><span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/></svg></span><b>Workshops</b></div>
        <div class="card row hot wide"><span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M8 6H5a2 2 0 0 0 2 4M16 6h3a2 2 0 0 1-2 4M12 13v4M9 20h6"/></svg></span><div><b>A reward for every intern, matching their effort</b><p>Effort is what we value.</p></div></div>
      </div>`,
  },

  /* ---------- Projects ---------- */
  {
    id: 'projects', type: 'child', parent: 'program', label: 'Projects',
    kicker: 'Academy', title: 'Projects',
    html: `
      <p class="lead">What you will work on</p>
      <div class="cards two big projects">
        <div class="card row"><span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg></span><b>Data</b></div>
        <div class="card row"><span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="8" width="14" height="10" rx="2.5"/><path d="M12 4v4M9 13h.01M15 13h.01M3 12v2M21 12v2"/></svg></span><b>AI Agents</b></div>
        <div class="card row"><span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9.5 12l2 2 3.5-4"/></svg></span><b>Cybersecurity AI</b></div>
        <div class="card row"><span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></svg></span><b>Dev</b></div>
      </div>`,
  },

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
        <div class="qr"><b>Apply</b>${img('qr-apply', 'QR code: devscope.net/careers/curricular-internship')}<span>devscope.net/careers/<wbr>curricular-internship</span></div>
      </div>`,
  },
];

/* Texto do ecrã inicial */
const HERO = { title: 'DevScope Academy', sub: 'ISEP · 2026', hint: '' };

/* ------------------------------------------------------------------
   TRADUÇÃO PT-PT
   PT: texto em inglês (exatamente como aparece) -> português.
   PT_NODES: substituições completas para blocos com formatação (ex.: <mark>).
------------------------------------------------------------------- */
const PT = {
  // nós / etiquetas
  'Porto to the world': 'Do Porto para o mundo', 'Perks': 'Regalias', 'Interns are treated like colleagues': 'Os estagiários são tratados como colaboradores',
  'Free access to the office': 'Acesso livre ao escritório', 'Kitchen access': 'Acesso à copa', 'Fun events': 'Eventos de convívio',
  'A reward for every intern, matching their effort': 'Um prémio para cada estagiário, à altura do seu esforço',
  'Effort is what we value.': 'O esforço é o que valorizamos.', 'Projects': 'Projetos', 'What you will work on': 'Em que vais trabalhar',
  'AI Agents': 'Agentes de IA', 'Cybersecurity AI': 'Cibersegurança com IA', 'What we do': 'O que fazemos', 'Who we are': 'Quem somos', 'Where we are': 'Onde estamos', 'Clients': 'Clientes',
  'Core competencies': 'Competências-chave', 'Innovation jumpstarter': 'Impulsionador de inovação',
  'Academy footprint': 'Impacto da Academy', 'Careers': 'Carreiras', 'Internship program': 'Programa de estágio',
  'Learning path': 'Percurso de aprendizagem', 'How it will happen': 'Como vai acontecer', 'How we work': 'Como trabalhamos',
  'Share & learn': 'Partilhar e aprender', 'Team': 'Equipa', 'Enjoy each mile': 'Aproveita cada quilómetro',
  'Video': 'Vídeo', 'Thank you': 'Obrigado',
  'Data': 'Dados', 'AI': 'IA', 'Ideas': 'Ideias', 'Research': 'Investigação', 'Talent': 'Talento', 'Culture': 'Cultura',
  'Consultants': 'Consultores', 'Developers': 'Programadores', 'Project managers': 'Gestores de projeto', 'Researchers': 'Investigadores',
  'Case study': 'Caso de estudo', 'Mentor': 'Mentor', 'Report': 'Relatório', 'Experiments': 'Experiências', 'The Goal': 'O Objetivo',
  'Daily': 'Diária', 'Weekly': 'Semanal', 'Communication': 'Comunicação', 'Development': 'Desenvolvimento', 'Reporting': 'Relatórios',
  // antetítulos e títulos
  'Who': 'Quem', 'Our focus': 'O nosso foco', 'Data & AI': 'Dados & IA', 'How': 'Como', 'What': 'O quê', 'Since 2015': 'Desde 2015',
  'Who we work with': 'Com quem trabalhamos', 'Our core competencies': 'As nossas competências-chave',
  'Academy as an innovation jumpstarter': 'A Academy como impulsionadora de inovação',
  'Where alumni go': 'Para onde vão os alumni', 'The internship program': 'O programa de estágio',
  'The goal and the learning path': 'O objetivo e o percurso de aprendizagem', 'Watch': 'Ver',
  // cartões
  'lean & agile mindset': 'mentalidade lean e ágil', 'focus on innovation': 'foco na inovação', 'state-of-the-art technology': 'tecnologia de ponta',
  'Consulting': 'Consultoria', 'Services': 'Serviços', 'Integration': 'Integração', 'App Dev.': 'Desenvolvimento de apps',
  'Products': 'Produtos', 'PowerBI Tools': 'Ferramentas PowerBI', 'Operations': 'Operações', 'Support 24/7': 'Suporte 24/7',
  'Platform teams': 'Equipas de plataforma', 'Technology adoption': 'Adoção de tecnologia',
  'Individual Case Study': 'Caso de estudo individual', 'Dedicated Mentor': 'Mentor dedicado', 'Team Support': 'Apoio da equipa', 'Report review': 'Revisão do relatório',
  'Ramp-up': 'Arranque', 'Daily Meeting': 'Reunião diária', 'Focus': 'Foco', 'Doing since last meeting': 'O que fiz desde a última reunião',
  'Today': 'Hoje', 'Any issues?': 'Algum problema?', 'Weekly Meeting': 'Reunião semanal', 'Overall progress': 'Progresso geral',
  'Discuss next steps': 'Discutir próximos passos', 'Retrospective': 'Retrospetiva',
  'Show your progress to everyone': 'Mostrar o progresso a todos', 'Gather feedback': 'Recolher feedback',
  // gráfico
  'Unknown': 'Desconhecido', 'Time': 'Tempo',
  // contactos
  'DevScope Academy Manager': 'Responsável pela DevScope Academy', 'Apply': 'Candidaturas',
};
const PT_NODES = {
  devscope: { html: `
      <p class="lead">Especializamo-nos em ajudar empresas a alcançar <mark>resultados extraordinários</mark>.</p>
      <div class="wide-photo">${img('room', 'DevScope Academy')}</div>` },
  alumni: { html: `
      <div class="stat"><span class="num">72</span><span class="what">Alumni da Academy</span></div>
      <div class="stat sub"><span class="num">42%</span><span class="what">da DevScope</span></div>` },
  share: { html: `<p class="quote">Quanto mais <mark>partilhas</mark>, mais <mark>aprendes</mark></p>` },
  road: { html: `
      <div class="wide-photo tall">${img('road')}</div>
      <p class="lead">..Aproveita cada <mark>quilómetro</mark> do percurso de aprendizagem..</p>` },
  world: { title: 'Do <mark>Porto</mark> para o mundo' },
  thanks: { title: '<span class="br">&lt;</span>Obrigado!<span class="br">&gt;</span>' },
};

// =============================================
//  FINANCEFLOW — Utilitários Globais
//  Importado por todas as páginas
// =============================================

// ── Formatação de moeda ──
export function formatBRL(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value || 0);
}

// ── Formatação de data ──
export function formatDate(dateStr) {
  if (!dateStr) return '—';
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

export function formatMonthYear(mesStr) {
  if (!mesStr) return '—';
  const [year, month] = mesStr.split('-');
  const names = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
                  'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  return `${names[parseInt(month) - 1]} ${year}`;
}

// ── Mês atual no formato AAAA-MM ──
export function getMesAtual() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
}

// ── Navegar entre meses ──
export function navegarMes(mesAtual, delta) {
  const [year, month] = mesAtual.split('-').map(Number);
  const date = new Date(year, month - 1 + delta, 1);
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  return `${y}-${m}`;
}

// ── Toast de notificação ──
export function showToast(message, type = 'success') {
  const icons = { success: '✓', error: '✕', warning: '⚠' };
  let toast = document.getElementById('toast');

  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.className = `toast show ${type}`;
  toast.innerHTML = `<span>${icons[type] || '●'}</span> ${message}`;

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ── Abrir e fechar modal ──
export function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}

export function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}

// ── Loading overlay ──
export function showLoading() {
  const el = document.getElementById('loading');
  if (el) el.classList.remove('hidden');
}

export function hideLoading() {
  const el = document.getElementById('loading');
  if (el) el.classList.add('hidden');
}

// ── Marcar item ativo no menu ──
export function setNavActive(pageName) {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.page === pageName) {
      item.classList.add('active');
    }
  });
}

// ── Categorias ──
export const CATEGORIAS = [
  { value: 'casa',         label: 'Casa / Necessários',       icon: '🏠' },
  { value: 'contas_casa',  label: 'Contas da Casa',           icon: '🏡' },
  { value: 'assinaturas',  label: 'Assinaturas',              icon: '📱' },
  { value: 'alimentacao',  label: 'Alimentação',              icon: '🍽️' },
  { value: 'besteira',     label: 'Comida / Besteira',        icon: '🍕' },
  { value: 'lazer',        label: 'Lazer / Saídas',           icon: '🎉' },
  { value: 'saude',        label: 'Saúde',                    icon: '🏥' },
  { value: 'beleza',       label: 'Beleza / Cuidados',        icon: '✂️' },
  { value: 'moda',         label: 'Moda / Perfume',           icon: '👗' },
  { value: 'compras',      label: 'Compras Gerais',           icon: '🛍️' },
  { value: 'presentes',    label: 'Presentes',                icon: '🎁' },
  { value: 'moto',         label: 'Moto',                     icon: '🏍️' },
  { value: 'gasolina',     label: 'Gasolina / Transporte',    icon: '⛽' },
  { value: 'educacao',     label: 'Conhecimento / Educação',  icon: '📚' },
  { value: 'viagem',       label: 'Viagem',                   icon: '✈️' },
  { value: 'outros',       label: 'Outros',                   icon: '📦' },
];

export const CATEGORIAS_MAP = Object.fromEntries(
  CATEGORIAS.map(c => [c.value, c])
);

// ── Cores padrão para cartões ──
export const CARD_COLORS = [
  { name: 'Roxo (Nubank)',   value: '#8b5cf6' },
  { name: 'Laranja (Inter)', value: '#f97316' },
  { name: 'Azul',            value: '#3b82f6' },
  { name: 'Verde',           value: '#10b981' },
  { name: 'Rosa',            value: '#ec4899' },
  { name: 'Cinza',           value: '#6b7280' },
];

// ── Sidebar HTML (compartilhado) ──
export function renderSidebar(activePage, mesAtual, onMesChange) {
  const navItems = [
    { page: 'dashboard',     icon: '◈',  label: 'Dashboard',         href: 'index.html' },
    { page: 'transacoes',    icon: '↕',  label: 'Transações',        href: 'transacoes.html' },
    { page: 'cartao',        icon: '▣',  label: 'Cartão de Crédito', href: 'cartao.html' },
    { page: 'casa',          icon: '⌂',  label: 'Contas da Casa',    href: 'casa.html' },
    { page: 'planejamento',  icon: '◎',  label: 'Planejamento',      href: 'planejamento.html' },
    { page: 'metas',         icon: '◉',  label: 'Metas',             href: 'metas.html' },
    { page: 'investimentos', icon: '▲',  label: 'Investimentos',     href: 'investimentos.html' },
    { page: 'relatorios',    icon: '▦',  label: 'Relatórios',        href: 'relatorios.html' },
    { page: 'pj',            icon: '◆',  label: 'PJ / Freelance',    href: 'pj.html' },
  ];

  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  sidebar.innerHTML = `
    <div class="sidebar-logo">
      <div class="logo-icon">₿</div>
      <div class="logo-text">Finance<span>Flow</span></div>
    </div>

    <nav class="sidebar-nav">
      <div class="nav-section-label">Menu</div>
      ${navItems.map(item => `
        <a href="${item.href}" class="nav-item ${activePage === item.page ? 'active' : ''}" data-page="${item.page}">
          <span class="nav-icon">${item.icon}</span>
          ${item.label}
        </a>
      `).join('')}
    </nav>

    <div class="sidebar-footer">
      <div class="sidebar-month">
        <button class="month-nav-btn" id="btnMesAnterior">‹</button>
        <span class="month-label" id="sidebarMesLabel">${formatMonthYear(mesAtual)}</span>
        <button class="month-nav-btn" id="btnMesProximo">›</button>
      </div>
    </div>
  `;

  // Eventos de navegação de mês
  document.getElementById('btnMesAnterior')?.addEventListener('click', () => {
    const novoMes = navegarMes(window.APP_MES || getMesAtual(), -1);
    window.APP_MES = novoMes;
    document.getElementById('sidebarMesLabel').textContent = formatMonthYear(novoMes);
    if (onMesChange) onMesChange(novoMes);
  });

  document.getElementById('btnMesProximo')?.addEventListener('click', () => {
    const novoMes = navegarMes(window.APP_MES || getMesAtual(), 1);
    window.APP_MES = novoMes;
    document.getElementById('sidebarMesLabel').textContent = formatMonthYear(novoMes);
    if (onMesChange) onMesChange(novoMes);
  });
}

// ── Loading overlay HTML ──
export function renderLoading() {
  return `
    <div id="loading" class="loading-overlay">
      <div class="spinner"></div>
      <div class="loading-text">Carregando...</div>
    </div>
  `;
}

// Tema salvo no localStorage (só preferência visual, não dados)
function aplicarTema() {
  const tema = localStorage.getItem('tema') || 'dark';
  document.body.classList.toggle('light', tema === 'light');
  const btn = document.getElementById('btnTema');
  if (btn) btn.textContent = tema === 'light' ? '🌙' : '☀️';
}

window.alternarTema = function() {
  const atual = localStorage.getItem('tema') || 'dark';
  const novo  = atual === 'dark' ? 'light' : 'dark';
  localStorage.setItem('tema', novo);
  aplicarTema();
};

// Chame no início de cada página:
aplicarTema();
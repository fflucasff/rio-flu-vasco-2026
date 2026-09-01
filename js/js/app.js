'use strict';

const TRIP = Object.freeze({
  title: 'Rio 2026 | Flu x Vasco',
  start: '2026-09-04T00:00:00-03:00',
  end: '2026-09-07T23:59:59-03:00',
  game: '2026-09-05T21:00:00-03:00',
  budget: 2400,
  timezone: 'America/Sao_Paulo'
});

const ROUTE = [
  {
    id: 'sexta', number: 1, date: '2026-09-04', dateLabel: '04 SET', weekday: 'Sexta', theme: 'Chegada + Copacabana',
    objective: 'Chegar tranquilo, conhecer Copacabana e assistir ao primeiro pôr do sol da viagem.',
    routeStops: ['São Lourenço', 'Pouso Alto', 'Itamonte', 'BR-354', 'Engenheiro Passos', 'Via Dutra', 'Serra das Araras', 'Linha Vermelha', 'Túnel Rebouças', 'Botafogo'],
    events: [
      { time: '07:30', title: 'Saída de São Lourenço', description: 'Rua Presidente Arthur Bernardes, 385\nFederal · São Lourenço / MG', note: 'Rota principal pelas vias indicadas. Evitar atalhos fora das vias principais quando estiver entrando no Rio.' },
      { time: '12:00', title: 'Parada rápida na estrada', description: 'Pausa breve para esticar as pernas, banheiro e lanche.' },
      { time: '13:00', displayTime: '13:00 às 14:00', title: 'Chegada em Botafogo', description: 'Rua Muniz Barreto, 660\nBotafogo · Rio de Janeiro / RJ' },
      { time: '14:00', title: 'Check-in', description: 'Descarregar as malas e deixar tudo organizado.' },
      { time: '15:30', title: 'Ir para Copacabana', description: 'Começo oficial do passeio no Rio.' },
      { time: '16:00', title: 'Orla de Copacabana', description: 'Caminhada leve, fotos e tempo para curtir a praia.' },
      { time: '17:00', title: 'Seguir para o Arpoador', description: 'Caminhada pela orla em direção a Ipanema.' },
      { time: '17:30', title: 'Arpoador', description: 'Escolher um bom ponto e desacelerar.' },
      { time: '18:00', title: 'Pôr do sol', description: 'Primeiro pôr do sol da viagem.', note: 'Horário aproximado. Chegar antes é a jogada.' },
      { time: '19:30', title: 'Voltar / tomar banho', description: 'Retorno para Botafogo e pausa.' },
      { time: '21:00', title: 'Jantar', description: 'Copacabana, Ipanema ou Botafogo. Decidir pela disposição.' }
    ]
  },
  {
    id: 'sabado', number: 2, date: '2026-09-05', dateLabel: '05 SET', weekday: 'Sábado', theme: 'Praia + Flu x Vasco',
    objective: 'Curtir a praia sem pressa e chegar cedo ao Maracanã para viver o clássico completo.',
    quickChecklist: ['Documento', 'Celular', 'Bateria', 'Ingresso', 'Biometria facial cadastrada', 'Camisa do Fluminense', 'Cartão', 'Dinheiro / reserva'],
    events: [
      { time: '08:30', title: 'Café da manhã', description: 'Começar o sábado com calma.' },
      { time: '09:30', title: 'Praia de Copacabana', description: 'Manhã de praia e orla.' },
      { time: '12:30', title: 'Sair da praia', description: 'Hora de trocar o modo praia pelo modo clássico.' },
      { time: '13:00', title: 'Almoço', description: 'Refeição sem exagero antes do jogo.' },
      { time: '14:30', title: 'Voltar para Botafogo', description: 'Retorno para a hospedagem.' },
      { time: '15:00', displayTime: '15:00 às 17:00', title: 'Descanso no hotel', description: 'Carregar celulares, power bank e energia humana.' },
      { time: '17:00', title: 'Banho + preparação', description: 'Conferir checklist do jogo e vestir a camisa tricolor.' },
      { time: '18:00', title: 'Saída de Botafogo', description: 'Usar o metrô como transporte principal.', note: 'Meta: sair até 18h.' },
      { time: '19:00', title: 'Chegada ao Maracanã', description: 'Curtir o pré-jogo e localizar a entrada do setor Oeste Inferior.' },
      { time: '20:20', title: 'Entrar no estádio', description: 'Passar pela biometria e acomodar com tranquilidade.' },
      { time: '21:00', title: 'FLUMINENSE × VASCO', description: 'Maracanã · Oeste Inferior\nLucas: meia R$ 110 · Laís: inteira R$ 220', note: 'DIA DE FLU 🇭🇺' },
      { time: '23:00', title: 'Saída do Maracanã', description: 'Horário aproximado. Evitar pressa na dispersão.' },
      { time: '23:30', title: 'Volta para Botafogo', description: 'Lanche, bar ou comida rápida dependendo da disposição.' }
    ]
  },
  {
    id: 'domingo', number: 3, date: '2026-09-06', dateLabel: '06 SET', weekday: 'Domingo', theme: 'Cristo Redentor',
    objective: 'Viver um dos principais momentos da viagem e manter o restante do dia leve.',
    options: [
      { label: 'Opção A', title: 'Urca + Praia Vermelha' },
      { label: 'Opção B', title: 'Copacabana novamente' },
      { label: 'Opção C', title: 'Botafogo + café / bar' }
    ],
    events: [
      { time: '08:00', title: 'Acordar', description: 'Domingo sem sprint. O dia foi desenhado para ser leve.' },
      { time: '08:30', title: 'Café da manhã', description: 'Preparar para o Cristo.' },
      { time: '09:00', title: 'Saída para o Cosme Velho', description: 'Seguir para a região do Trem do Corcovado.' },
      { time: '09:30', title: 'Trem do Corcovado', description: 'Chegada e organização para o embarque.' },
      { time: '10:00', title: 'Subida para o Cristo', description: 'Horário aproximado, condicionado ao ingresso escolhido.' },
      { time: '10:30', displayTime: '10:30 às 12:00', title: 'Cristo Redentor', description: 'Vista, fotos e tempo para absorver o momento.', note: 'Um dos principais momentos da viagem.' },
      { time: '12:30', title: 'Descida', description: 'Retorno ao Cosme Velho.' },
      { time: '13:30', title: 'Almoço', description: 'Escolher algo próximo ou no caminho da opção da tarde.' },
      { time: '15:00', title: 'Tarde livre', description: 'Urca, Copacabana ou Botafogo. Escolher pelo clima e pela energia.' },
      { time: '18:00', title: 'Fim de tarde tranquilo', description: 'Sem compromisso engessado.' },
      { time: '20:00', title: 'Jantar', description: 'Fechamento leve do domingo.' }
    ]
  },
  {
    id: 'segunda', number: 4, date: '2026-09-07', dateLabel: '07 SET', weekday: 'Segunda', theme: 'Último passeio + retorno',
    objective: 'Aproveitar a última manhã sem comprometer uma volta tranquila para São Lourenço.',
    options: [
      { label: 'Opção A', title: 'Escadaria Selarón' },
      { label: 'Opção B', title: 'Aterro do Flamengo' },
      { label: 'Opção C', title: 'Botafogo' },
      { label: 'Opção D', title: 'Última passagem por Copacabana' }
    ],
    events: [
      { time: '08:30', title: 'Café da manhã', description: 'Último café da viagem.' },
      { time: '09:30', title: 'Check-out / organizar malas', description: 'Deixar tudo pronto antes do passeio curto.' },
      { time: '10:00', title: 'Passeio curto', description: 'Escadaria Selarón, Aterro, Botafogo ou última passagem por Copacabana.' },
      { time: '11:30', title: 'Buscar as malas', description: 'Voltar para a hospedagem sem estourar o horário.' },
      { time: '12:00', title: 'Almoço', description: 'Parada objetiva antes da estrada.' },
      { time: '13:30', title: 'Saída do Rio', description: 'Destino: São Lourenço / MG', note: 'Sem compromissos demorados. Prioridade é voltar com tranquilidade.' },
      { time: '18:30', displayTime: '18:30 às 20:00', title: 'Chegada prevista', description: 'Varia conforme trânsito e paradas na estrada.' }
    ]
  }
];

const CHECKLIST_CATEGORIES = {
  'Documentos': ['RG / CNH Lucas', 'Documento Laís', 'Carteirinha de estudante Lucas', 'Ingressos', 'Biometria facial', 'Reserva da hospedagem'],
  'Carro': ['Abastecer', 'Calibrar pneus', 'Conferir óleo', 'Conferir água', 'Documento do carro', 'Carregador veicular', 'Suporte de celular', 'Google Maps atualizado', 'Waze instalado'],
  'Mala': ['Roupas sexta', 'Roupas sábado', 'Roupas domingo', 'Roupas segunda', 'Roupa de praia', 'Chinelo', 'Tênis', 'Roupa de dormir', 'Roupa extra'],
  'Praia': ['Protetor solar', 'Óculos', 'Toalha', 'Chinelo', 'Boné', 'Água'],
  'Maracanã': ['Camisa do Flu', 'Ingresso Lucas', 'Ingresso Laís', 'Biometria Lucas', 'Biometria Laís', 'Documento', 'Celular carregado', 'Power bank'],
  'Eletrônicos': ['iPhone', 'Carregador', 'Power bank', 'Cabo', 'AirPods', 'Carregador do carro'],
  'Higiene': ['Escova', 'Pasta', 'Desodorante', 'Perfume', 'Shampoo', 'Remédios básicos']
};

const EXPENSE_CATEGORIES = {
  'Combustível': '⛽', 'Pedágio': '🛣️', 'Comida': '🍽️', 'Bebidas': '🥤', 'Ingressos': '🎟️',
  'Uber/Metrô': '🚇', 'Cristo': '⛰️', 'Praia': '☀️', 'Extras': '✨'
};

const MAP_PLACES = [
  { name: 'São Lourenço', image: 'sao-lourenco.svg', tag: 'Origem', description: 'O ponto de partida e de retorno da viagem.', query: 'Rua Presidente Arthur Bernardes 385 Federal São Lourenço MG' },
  { name: 'Botafogo', image: 'botafogo.svg', tag: 'Nossa base', description: 'Hospedagem e ponto central dos deslocamentos.', query: 'Rua Muniz Barreto 660 Botafogo Rio de Janeiro' },
  { name: 'Copacabana', image: 'copacabana.svg', tag: 'Sexta + sábado', description: 'Orla, caminhada, praia e clima de Rio.', query: 'Praia de Copacabana Rio de Janeiro' },
  { name: 'Ipanema', image: 'ipanema.svg', tag: 'Sexta', description: 'Caminho entre Copacabana e o Arpoador.', query: 'Praia de Ipanema Rio de Janeiro' },
  { name: 'Arpoador', image: 'arpoador.svg', tag: 'Pôr do sol', description: 'A primeira golden hour da viagem.', query: 'Pedra do Arpoador Rio de Janeiro' },
  { name: 'Maracanã', image: 'maracana.svg', tag: 'O clássico', description: 'Fluminense x Vasco, sábado às 21h.', query: 'Estádio do Maracanã Rio de Janeiro' },
  { name: 'Cristo Redentor', image: 'cristo.svg', tag: 'Domingo', description: 'O grande cartão-postal do roteiro.', query: 'Trem do Corcovado Cosme Velho Rio de Janeiro' },
  { name: 'Urca', image: 'urca.svg', tag: 'Alternativa', description: 'Praia Vermelha e fim de tarde sem pressa.', query: 'Praia Vermelha Urca Rio de Janeiro' },
  { name: 'Escadaria Selarón', image: 'selaron.svg', tag: 'Segunda', description: 'Opção de passeio curto antes do retorno.', query: 'Escadaria Selarón Rio de Janeiro' }
];

const STORAGE = {
  checks: 'rio2026_checklist_v1',
  expenses: 'rio2026_expenses_v1'
};

const state = {
  activeDay: 0,
  checks: loadJSON(STORAGE.checks, {}),
  expenses: loadJSON(STORAGE.expenses, [])
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function slugify(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function rioDate(date, time = '00:00') {
  return new Date(`${date}T${time}:00-03:00`);
}

function formatMoney(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

function diffParts(target, now = new Date()) {
  const total = Math.max(0, target - now);
  return {
    total,
    days: Math.floor(total / 86400000),
    hours: Math.floor((total % 86400000) / 3600000),
    minutes: Math.floor((total % 3600000) / 60000)
  };
}

function renderOverview() {
  $('#day-overview').innerHTML = ROUTE.map((day, index) => `
    <button class="day-card ${index === state.activeDay ? 'active' : ''}" data-day-index="${index}" data-number="0${day.number}" type="button">
      <span class="date"><strong>${day.dateLabel.slice(0, 2)}</strong>SET · ${day.weekday}</span>
      <div><h3>${day.theme}</h3><p>Ver programação →</p></div>
    </button>`).join('');

  $$('.day-card').forEach(card => card.addEventListener('click', () => {
    selectDay(Number(card.dataset.dayIndex));
    $('#roteiro').scrollIntoView({ behavior: 'smooth' });
  }));
}

function renderDayTabs() {
  $('#day-tabs').innerHTML = ROUTE.map((day, index) => `
    <button class="day-tab" type="button" role="tab" aria-selected="${index === state.activeDay}" data-day-index="${index}">
      <span>${day.dateLabel.slice(0, 2)}</span><div><strong>${day.weekday}</strong><small>${day.theme}</small></div>
    </button>`).join('');

  $$('.day-tab').forEach(tab => tab.addEventListener('click', () => selectDay(Number(tab.dataset.dayIndex))));
}

function renderItinerary() {
  const day = ROUTE[state.activeDay];
  const timeline = day.events.map(event => `
    <article class="timeline-item">
      <time datetime="${day.date}T${event.time}">${event.displayTime || event.time}</time>
      <span class="timeline-pin" aria-hidden="true"></span>
      <div class="timeline-copy"><h4>${event.title}</h4><p>${event.description}</p>${event.note ? `<span class="event-note">${event.note}</span>` : ''}</div>
    </article>`).join('');

  const routeCard = day.routeStops ? `
    <article class="route-card"><span class="card-label">Rota principal</span><h4>São Lourenço → Botafogo</h4>
      <div class="route-stops">${day.routeStops.map(stop => `<div class="route-stop"><span>${stop}</span></div>`).join('')}</div>
    </article>` : '';

  const options = day.options ? `
    <article class="route-card"><span class="card-label">Escolha pelo clima do dia</span><h4>Alternativas</h4>
      <div class="option-cards">${day.options.map(option => `<div class="option-card"><span>${option.label}</span><strong>${option.title}</strong></div>`).join('')}</div>
    </article>` : '';

  const quickChecklist = day.quickChecklist ? `
    <article class="day-quick-check"><div class="card-label light">Checklist rápido</div>
      ${day.quickChecklist.map(item => checkboxHTML(`quick-${slugify(item)}`, item)).join('')}
    </article>` : '';

  $('#itinerary-content').innerHTML = `
    <div class="itinerary-panel" role="tabpanel">
      <div class="timeline-wrap">
        <div class="itinerary-title"><span>${day.dateLabel}</span><div><h3>${day.weekday}</h3><p>${day.theme}</p></div></div>
        <div class="timeline">${timeline}</div>
      </div>
      <aside class="itinerary-aside">
        <article class="objective-card dark-card"><span class="card-label light">Objetivo do dia</span><h3>${day.theme}</h3><p>“${day.objective}”</p></article>
        ${routeCard}${options}${quickChecklist}
      </aside>
    </div>`;
}

function selectDay(index) {
  state.activeDay = index;
  renderOverview();
  renderDayTabs();
  renderItinerary();
}

function checkboxHTML(id, label) {
  const checked = Boolean(state.checks[id]);
  return `<label class="check-row"><input type="checkbox" data-check-id="${id}" ${checked ? 'checked' : ''}><span class="custom-check"></span><span>${label}</span></label>`;
}

function renderChecklist() {
  $('#checklist-grid').innerHTML = Object.entries(CHECKLIST_CATEGORIES).map(([category, items]) => {
    const ids = items.map((item, index) => `main-${slugify(category)}-${index}-${slugify(item)}`);
    const done = ids.filter(id => state.checks[id]).length;
    return `<article class="checklist-category">
      <div class="checklist-category-head"><h3>${category}</h3><span>${done}/${items.length}</span></div>
      ${items.map((item, index) => checkboxHTML(ids[index], item)).join('')}
    </article>`;
  }).join('');
  updateChecklistProgress();
}

function updateChecklistProgress() {
  const inputs = $$('#checklist-grid input[data-check-id]');
  const done = inputs.filter(input => input.checked).length;
  const percentage = inputs.length ? Math.round(done / inputs.length * 100) : 0;
  $('#checklist-progress-text').textContent = `${done} de ${inputs.length} concluídos`;
  $('#checklist-progress-bar').style.width = `${percentage}%`;
}

function renderGameChecklist() {
  const items = ['Biometria Lucas', 'Biometria Laís', 'Documentos', 'Ingressos', 'Celular carregado', 'Sair até 18h'];
  $('#game-checklist-items').innerHTML = items.map(item => checkboxHTML(`game-${slugify(item)}`, item)).join('');
}

function renderExpenseCategories() {
  $('#expense-category').innerHTML = Object.keys(EXPENSE_CATEGORIES).map(category => `<option value="${category}">${category}</option>`).join('');
}

function renderExpenses() {
  const list = $('#expense-list');
  const expenses = [...state.expenses].sort((a, b) => b.createdAt - a.createdAt);
  list.innerHTML = expenses.length ? expenses.map(expense => `
    <article class="expense-item">
      <span class="expense-icon">${EXPENSE_CATEGORIES[expense.category] || '✨'}</span>
      <div><h4>${escapeHTML(expense.description)}</h4><p>${expense.category}</p></div>
      <strong>${formatMoney(expense.value)}</strong>
      <button class="remove-expense" type="button" data-expense-id="${expense.id}" aria-label="Remover ${escapeHTML(expense.description)}">×</button>
    </article>`).join('') : '<div class="empty-state">Nenhum gasto lançado ainda.<br>O orçamento agradece.</div>';

  const spent = state.expenses.reduce((total, expense) => total + Number(expense.value), 0);
  const remaining = TRIP.budget - spent;
  const percentage = TRIP.budget ? spent / TRIP.budget * 100 : 0;
  $('#budget-total').textContent = formatMoney(TRIP.budget);
  $('#spent-total').textContent = formatMoney(spent);
  $('#remaining-total').textContent = formatMoney(remaining);
  $('#budget-percentage').textContent = `${Math.round(percentage)}% utilizado`;
  $('#budget-progress-bar').style.width = `${Math.min(percentage, 100)}%`;
  $('.budget-progress').setAttribute('aria-valuenow', Math.min(Math.round(percentage), 100));
  $('#expense-count').textContent = `${expenses.length} ${expenses.length === 1 ? 'item' : 'itens'}`;
  const panel = $('.budget-panel');
  panel.classList.toggle('warning', percentage >= 80 && percentage <= 100);
  panel.classList.toggle('over', percentage > 100);
  $('#budget-alert').textContent = percentage > 100 ? `Orçamento ultrapassado em ${formatMoney(Math.abs(remaining))}.` : percentage >= 80 ? 'Atenção ao limite.' : '';
}

function parseMoney(value) {
  const normalized = value.trim().replace(/\s/g, '').replace(/R\$/gi, '').replace(/\.(?=\d{3}(?:\D|$))/g, '').replace(',', '.');
  return Number(normalized);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
}

function renderPlaces() {
  $('#places-grid').innerHTML = MAP_PLACES.map(place => `
    <article class="place-card">
      <div class="place-image"><img src="./assets/images/${place.image}" alt="Ilustração de ${place.name}" loading="lazy"><span>${place.tag}</span></div>
      <div class="place-copy"><h3>${place.name}</h3><p>${place.description}</p>
        <a class="map-button" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(place.query)}" target="_blank" rel="noopener">Abrir no Google Maps <b>↗</b></a>
      </div>
    </article>`).join('');

  const route = ['São Lourenço', 'Botafogo', 'Copacabana', 'Arpoador', 'Maracanã', 'Cristo', 'São Lourenço'];
  $('#route-line').innerHTML = route.map((stop, index) => `${index ? '<span class="route-arrow">→</span>' : ''}<span class="route-node">${stop}</span>`).join('');
}

function allEvents() {
  return ROUTE.flatMap(day => day.events.map(event => ({ ...event, day, timestamp: rioDate(day.date, event.time) }))).sort((a, b) => a.timestamp - b.timestamp);
}

function updateNextEvent(now = new Date()) {
  const start = new Date(TRIP.start);
  const end = new Date(TRIP.end);
  const target = $('#next-event-content');

  if (now < start) {
    const diff = diffParts(start, now);
    target.innerHTML = `<div class="next-event-main"><div><time>04 SET</time><h3>Próxima viagem em ${diff.days} ${diff.days === 1 ? 'dia' : 'dias'}</h3><p>Saída de São Lourenço às 07:30</p></div><strong>${diff.hours}h ${diff.minutes}min</strong></div>`;
    return;
  }
  if (now > end) {
    target.innerHTML = '<div class="next-event-main"><div><time>✓</time><h3>Viagem concluída</h3><p>Agora é hora de preencher as memórias.</p></div><strong>Rio 2026</strong></div>';
    return;
  }
  const next = allEvents().find(event => event.timestamp > now);
  if (!next) return;
  const diff = diffParts(next.timestamp, now);
  const distance = diff.days ? `${diff.days}d ${diff.hours}h` : `${diff.hours}h ${diff.minutes}min`;
  target.innerHTML = `<div class="next-event-main"><div><time>${next.displayTime || next.time}</time><h3>${next.title}</h3><p>${next.day.weekday} · ${next.day.theme}</p></div><strong>Próximo em ${distance}</strong></div>`;
}

function updateCountdowns(now = new Date()) {
  const tripStart = new Date(TRIP.start);
  const tripEnd = new Date(TRIP.end);
  const game = new Date(TRIP.game);
  const tripCountdown = $('#trip-countdown');

  if (now < tripStart) {
    const diff = diffParts(tripStart, now);
    tripCountdown.textContent = `Faltam ${diff.days} ${diff.days === 1 ? 'dia' : 'dias'}`;
    $('#countdown-detail').textContent = `${diff.hours}h ${diff.minutes}min · para a viagem`;
  } else if (now <= tripEnd) {
    const rioDay = getTripDay(now);
    tripCountdown.textContent = rioDay?.date === '2026-09-05' ? 'Hoje é dia de Maracanã' : 'Modo viagem ativado';
    $('#countdown-detail').textContent = rioDay ? `Dia ${rioDay.number} de 4 · ${rioDay.theme}` : 'Rio 2026';
  } else {
    tripCountdown.textContent = 'Histórias guardadas';
    $('#countdown-detail').textContent = 'Rio 2026 · viagem concluída';
  }

  if (now < game) {
    const diff = diffParts(game, now);
    $('#game-countdown').textContent = `${diff.days}d · ${String(diff.hours).padStart(2, '0')}h · ${String(diff.minutes).padStart(2, '0')}min`;
  } else if (now - game < 3 * 60 * 60 * 1000) {
    $('#game-countdown').textContent = 'É DIA DE FLU 🇭🇺';
  } else {
    $('#game-countdown').textContent = 'Clássico vivido ✓';
  }
}

function getRioDateKey(now = new Date()) {
  const parts = new Intl.DateTimeFormat('pt-BR', { timeZone: TRIP.timezone, year: 'numeric', month: '2-digit', day: '2-digit' })
    .formatToParts(now).reduce((result, part) => ({ ...result, [part.type]: part.value }), {});
  return `${parts.year}-${parts.month}-${parts.day}`;
}

function getTripDay(now = new Date()) {
  const key = getRioDateKey(now);
  return ROUTE.find(day => day.date === key);
}

function initTravelMode(now = new Date()) {
  const day = getTripDay(now);
  const mode = $('#travel-mode');
  if (!day) return;
  mode.hidden = false;
  $('#trip-day-count').textContent = `Dia ${day.number} de 4`;
  $('#trip-today').textContent = `Hoje, ${day.weekday}`;
  $('#trip-theme').textContent = day.theme;
  $('#today-route-button').addEventListener('click', () => selectDay(day.number - 1));
  selectDay(day.number - 1);
}

function initNavigation() {
  const topbar = $('#topbar');
  const onScroll = () => topbar.classList.toggle('scrolled', window.scrollY > 35);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const sections = ['home', 'roteiro', 'checklist', 'gastos', 'mapa'].map(id => document.getElementById(id));
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    $$('.mobile-nav a').forEach(link => link.classList.toggle('active', link.dataset.section === visible.target.id));
  }, { rootMargin: '-30% 0px -58% 0px', threshold: [0, .15, .4] });
  sections.forEach(section => observer.observe(section));
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 2400);
}

function bindEvents() {
  document.addEventListener('change', event => {
    const checkbox = event.target.closest('input[data-check-id]');
    if (!checkbox) return;
    state.checks[checkbox.dataset.checkId] = checkbox.checked;
    saveJSON(STORAGE.checks, state.checks);
    updateChecklistProgress();
  });

  $('#clear-checklist').addEventListener('click', () => {
    if (!window.confirm('Deseja mesmo desmarcar todos os itens do checklist?')) return;
    state.checks = {};
    saveJSON(STORAGE.checks, state.checks);
    renderChecklist();
    renderItinerary();
    renderGameChecklist();
    showToast('Checklist limpo.');
  });

  $('#expense-form').addEventListener('submit', event => {
    event.preventDefault();
    const description = $('#expense-description').value.trim();
    const category = $('#expense-category').value;
    const value = parseMoney($('#expense-value').value);
    if (!description || !Number.isFinite(value) || value <= 0) {
      showToast('Informe uma descrição e um valor válido.');
      return;
    }
    state.expenses.push({ id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`, description, category, value, createdAt: Date.now() });
    saveJSON(STORAGE.expenses, state.expenses);
    event.target.reset();
    renderExpenses();
    showToast('Gasto adicionado.');
  });

  $('#expense-list').addEventListener('click', event => {
    const button = event.target.closest('[data-expense-id]');
    if (!button) return;
    state.expenses = state.expenses.filter(expense => expense.id !== button.dataset.expenseId);
    saveJSON(STORAGE.expenses, state.expenses);
    renderExpenses();
    showToast('Gasto removido.');
  });
}

function init() {
  renderOverview();
  renderDayTabs();
  renderItinerary();
  renderChecklist();
  renderGameChecklist();
  renderExpenseCategories();
  renderExpenses();
  renderPlaces();
  bindEvents();
  initNavigation();
  initTravelMode();
  updateCountdowns();
  updateNextEvent();
  setInterval(() => { updateCountdowns(); updateNextEvent(); }, 60000);
}

document.addEventListener('DOMContentLoaded', init);

# Rio 2026 — Flu x Vasco

Trip Command Center estático da viagem de Lucas + Laís ao Rio de Janeiro, de 04 a 07 de setembro de 2026.

O projeto usa apenas HTML, CSS e JavaScript puro. Não há backend, banco de dados, etapa de build ou dependências externas. Checklist e gastos são armazenados no `localStorage` do navegador.

## 1. Como abrir localmente

Opção rápida: abra o arquivo `index.html` no navegador.

Opção recomendada: execute um servidor local dentro da pasta do projeto:

```bash
python -m http.server 8000
```

Depois abra `http://localhost:8000`.

## 2. Como alterar as imagens

As imagens ficam em `assets/images/`. O projeto inclui ilustrações SVG leves como placeholders.

- Para manter o site funcionando sem mudar código, substitua um arquivo por outro com o mesmo nome.
- Também é possível usar `.jpg`, `.webp`, `.png` ou `.svg`. Nesse caso, atualize o nome correspondente no `index.html` ou na constante `MAP_PLACES`, dentro de `js/app.js`.
- A imagem principal do hero é definida em `css/style.css`, na classe `.hero-image`.
- Para fotos, prefira WebP com largura entre 1200 e 1800 px no hero e entre 700 e 1000 px nos cards.

Arquivos atuais:

```text
hero-rio.svg
copacabana.svg
arpoador.svg
maracana.svg
cristo.svg
botafogo.svg
urca.svg
ipanema.svg
selaron.svg
sao-lourenco.svg
```

## 3. Como alterar o roteiro

Abra `js/app.js` e edite a constante `ROUTE`.

Cada dia possui:

- `date`, `dateLabel`, `weekday` e `theme`;
- `objective`;
- `events`, com `time`, `title`, `description` e `note` opcional;
- `routeStops`, `options` ou `quickChecklist`, quando aplicável.

O dashboard, as abas, a timeline, o próximo compromisso e o Modo Viagem são gerados automaticamente a partir dessa constante.

As datas gerais ficam na constante `TRIP`, no começo do mesmo arquivo.

## 4. Como publicar no GitHub Pages

1. Crie no GitHub um repositório chamado `rio-flu-vasco-2026`.
2. Envie todo o conteúdo desta pasta para a raiz do repositório.
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main`, pasta `/ (root)` e clique em **Save**.
6. Aguarde a publicação. O endereço será:

```text
https://USUARIO.github.io/rio-flu-vasco-2026/
```

Todos os caminhos do projeto são relativos e já estão preparados para esse formato de URL.

## 5. Como alterar o orçamento

Abra `js/app.js` e altere:

```js
budget: 2400
```

O dashboard de gastos recalcula automaticamente valor gasto, restante, percentual e alertas.

As categorias ficam na constante `EXPENSE_CATEGORIES`.

## 6. Como resetar os dados do localStorage

Pelo próprio site:

- Checklist: use o botão **Limpar checklist**.
- Gastos: remova os lançamentos individualmente.

Para zerar tudo de uma vez, abra o Console do navegador e execute:

```js
localStorage.removeItem('rio2026_checklist_v1');
localStorage.removeItem('rio2026_expenses_v1');
location.reload();
```

Os dados são salvos apenas no navegador/aparelho atual. Eles não sincronizam entre o iPhone e o computador.

## Estrutura

```text
rio-flu-vasco-2026/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

## Compatibilidade

O layout é mobile-first e possui ajustes específicos para 390 px, 430 px, 768 px e desktop. O menu inferior aparece apenas no mobile; no desktop, a navegação fica no topo.

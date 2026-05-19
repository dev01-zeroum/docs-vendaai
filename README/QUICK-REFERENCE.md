# Quick Reference

Referência rápida pro time. Para o fluxo de PR/review completo, ver [CONTRIBUTING.md](./CONTRIBUTING.md).

## Comece agora

```powershell
npm install
npm start
# http://localhost:3000
```

## Estrutura do repo

```
docs/                       # Conteúdo em Markdown
  boletim/                  # Atualizações por edição (Jan/25, Jun/25, ...)
  manual/                   # Manual do VendaAI
  fale-conosco/             # Contato (suporte, comercial, sugestões)
  index.md                  # Landing

src/
  components/               # Componentes JSX reutilizáveis
    FormDuvidas.jsx
    FormSugestoes.jsx
    HabilitarMelhorias.jsx  # Bloco padrão de habilitação dos Atualizações
  css/custom.css            # Tema e estilos

static/img/                 # Logos, favicons, imagens locais

docusaurus.config.js        # Config geral (URL, navbar, footer)
sidebars.js                 # Menu lateral
```

## Adicionar uma página

### 1. Criar o arquivo

```markdown
---
title: 'Título da Página'
sidebar_position: 1
description: 'Resumo curto pra SEO (opcional, recomendado).'
---

# Título

Conteúdo em Markdown...
```

### 2. Incluir no sidebar

Edite `sidebars.js` e adicione na categoria correta:

```js
{ type: 'doc', id: 'caminho/sem-extensao', label: 'Texto no menu' },
```

> ⚠️ O `id` é o caminho relativo a `docs/` **sem** a extensão `.md`.

### 3. Commit em uma branch

```powershell
git checkout -b docs/sua-mudanca
git add .
git commit -m "docs: descrição curta"
git push origin docs/sua-mudanca
```

Depois abra PR no GitHub. Ver [CONTRIBUTING.md](./CONTRIBUTING.md).

## Scripts úteis

```powershell
npm start              # Dev local com hot reload
npm run build          # Build de produção
npm run serve          # Testa o build local em http://localhost:3000
npm run deploy         # Deploy manual pro GitHub Pages
```

> ⚠️ Não use `npm run clear` no Windows — o script usa `rm -rf` (Linux). Se precisar limpar cache, apague manualmente `node_modules\.cache`.

## Onde editar o quê

| Quer mudar | Arquivo |
|---|---|
| Conteúdo | `docs/...` |
| Menu lateral | `sidebars.js` |
| Cores / tema | `src/css/custom.css` |
| Logo | `static/img/logo.svg`, `static/img/logo_branco.svg` |
| Título do site, URL, footer | `docusaurus.config.js` |
| Bloco de habilitação dos Atualizações | `src/components/HabilitarMelhorias.jsx` |

## Markdown essencial

```markdown
# H1 (geralmente vem do frontmatter)
## H2
### H3

**negrito** _itálico_ ~~tachado~~

- Lista
- Itens

[Link interno](/boletim/boletim-06-2026)
[Link externo](https://vendaai.com.br)
![Alt da imagem](img/screenshot.png)

| Coluna | Valor |
|--------|-------|
| Linha  | Dado  |

:::note
Bloco de nota
:::

:::tip
Dica
:::

:::warning
Aviso
:::

:::danger
Atenção
:::
```

## Imagens

1. Coloque em `static/img/` (ex: `static/img/Atualizações/jun26-painel.png`).
2. Referencie em qualquer `.md`:

```markdown
![Painel](img/Atualizações/jun26-painel.png)
```

> Evite hospedar imagens críticas no Imgur — perdemos controle. Prefira `static/img/`.

## Componentes reutilizáveis

Pra usar um componente JSX dentro de um `.md`:

```markdown
import HabilitarMelhorias from '@site/src/components/HabilitarMelhorias';

<HabilitarMelhorias />
```

## Troubleshoot

| Problema | Solução |
|---|---|
| Porta 3000 ocupada | `npm start -- --port 3001` |
| Link quebrado no build | `onBrokenLinks: 'throw'` mostra o erro com caminho |
| Mudança não aparece | Ctrl+Shift+R no navegador; apagar `node_modules\.cache` se persistir |
| Build falha por sintaxe MDX | Verifique se há `<` ou `{` soltos em markdown (precisam de escape) |

## Contato

- Suporte VendaAI: **suporte@vendaai.com.br**
- Comercial: **contato@itzeroum.com.br**
- Site: https://vendaai.com.br
- Docs publicadas: https://docs.vendaai.com.br

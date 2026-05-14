# Quick Reference

## Comece Agora

```bash
npm install
npm start
# http://localhost:3000
```

## Estrutura Rápida

```
docs/                       # Conteúdo em markdown
docs/boletim/, manual/, faq/, identidade/, fale-conosco/

src/css/custom.css         # Cores e estilos
static/img/                # Logos
docusaurus.config.js       # Config geral
sidebars.js                # Menu lateral
```

## Adicionar Página (5 min)

### 1. Criar arquivo
```bash
# docs/novo-topico.md
---
sidebar_position: 1
title: Título
---

# Título

Conteúdo...
```

### 2. Menu
Edite `sidebars.js`:
```javascript
'novo-topico',
```

### 3. Commit
```bash
git add .
git commit -m "docs: novo tópico"
git push origin seu-branch
```

## Scripts

```bash
npm start          # Dev local
npm build          # Build produção
npm run clear      # Limpar cache
```

## Onde Editar?

| Quer mudar | Arquivo |
|---|---|
| Conteúdo | `docs/` |
| Menu lateral | `sidebars.js` |
| Cores/estilos | `src/css/custom.css` |
| Logo | `static/img/` |
| Config (título, URL) | `docusaurus.config.js` |

## Markdown Básico

```markdown
# H1
## H2
**negrito** _itálico_

[Link](./outro)
![Img](img/foto.png)

:::note
Nota
:::

:::warning
Aviso
:::
```

## Links Internos

```markdown
[Ir para FAQ](../faq)
[Ver seção](#pergunta-1)
```

## Imagens

```bash
# 1. static/img/screenshot.png
# 2. ![Alt](img/screenshot.png)
```

## Git Rápido

```bash
git pull origin main
# ... editar ...
git add .
git commit -m "docs: mensagem"
git push origin seu-branch
```

## Troubleshoot

| Problema | Solução |
|---|---|
| Port 3000 em uso | `npm start -- --port 3001` |
| Links quebrados | Verifique caminho em .md |
| Mudanças não refletem | Recarregue Ctrl+Shift+R |

## Contatos

docs@vendaai.com.br | https://vendaai.com.br

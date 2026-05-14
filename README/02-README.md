# Boletim VendaAI - Documentação Oficial

Documentação centralizada do Boletim VendaAI. Gerada com **Docusaurus** e hospedada em **GitHub Pages**.

**Live:** https://docs.vendaai.com.br

## O que é?

Este repositório contém:
- Guias de uso e tutoriais
- FAQs e dúvidas frequentes
- Manual e procedimentos
- Boletins e comunicados
- Identidade visual

## Começar Rápido

```bash
git clone https://github.com/dev01-zeroum/docs-vendaai.git
cd docs-vendaai
npm install
npm start
```

Acesse: http://localhost:3000

## Tecnologia

- **Docusaurus 2.4.0** - Gerador de docs em Markdown
- **React** - Interface
- **GitHub Pages** - Hospedagem gratuita
- **GitHub Actions** - Deploy automático

## Estrutura do Projeto

```
docs-vendaai/
├── docs/                       # Conteúdo (Markdown)
│   ├── index.md               # Página inicial
│   ├── boletim/               # Boletins
│   ├── manual/                # Guias e tutoriais
│   ├── faq/                   # Perguntas frequentes
│   ├── identidade/            # Branding
│   └── fale-conosco/          # Contato
├── src/css/
│   └── custom.css             # Estilos customizados
├── static/img/
│   ├── logo.svg               # Logo claro
│   └── logo_branco.svg        # Logo escuro
├── docusaurus.config.js       # Configuração principal
├── sidebars.js                # Estrutura do menu
├── package.json               # Dependências
└── README.md                  # Este arquivo
```

## Por Que Docusaurus?

✅ Markdown simples (sem HTML)  
✅ Deploy automático com GitHub Pages  
✅ Dark mode nativo  
✅ SEO amigável  
✅ Hot reload em dev  
✅ Site estático rápido  

## Fluxo de Trabalho

```
Você escreve em docs/
    ↓
npm start (testa local)
    ↓
git push (seu branch)
    ↓
PR review (outro dev)
    ↓
Merge em main
    ↓
Deploy automático
    ↓
Online em 1-2 minutos
```

## Scripts Principais

```bash
npm start              # Servidor local com hot reload
npm build              # Compilar para produção
npm run serve          # Testar build localmente
npm run deploy         # Deploy manual (raramente necessário)
npm run clear          # Limpar cache
```

## Adicionando Conteúdo

### Criar Página

1. Arquivo em `docs/novo-topico.md`:
```markdown
---
sidebar_position: 1
title: Título da Página
description: Descrição para SEO (opcional)
---

# Título

Conteúdo em Markdown...

## Seção
Mais conteúdo...
```

2. Edite `sidebars.js`:
```javascript
module.exports = {
  docs: [
    'index',
    'novo-topico',  // Adicione aqui
  ],
};
```

3. Commit e push (veja CONTRIBUTING.md)

### Adicionar Imagem

```bash
# 1. Coloque em static/img/screenshot.png
# 2. Referencie em docs/arquivo.md:
![Descrição](img/screenshot.png)
```

## Customização

### Mudar Cores

Edite `src/css/custom.css`:
```css
:root {
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #1f5a3a;
  --ifm-color-primary-light: #4ca072;
}
```

### Mudar Logo

Substitua em `static/img/`:
- `logo.svg` - Versão clara
- `logo_branco.svg` - Versão escura

Referenciado em `docusaurus.config.js`.

### Configuração Geral

Edite `docusaurus.config.js`:
- Título
- Tagline
- URL do site
- Footer
- Navbar

## Troubleshooting

**Port 3000 em uso?**
```bash
npm start -- --port 3001
```

**Links quebrados na build?**
```bash
npm build
# Docusaurus lista erros de links
```

**Mudanças não aparecem?**
```bash
npm run clear
npm start
```

## Contato e Suporte

- Email: suporte@vendaai.com.br
- Website: https://vendaai.com.br
- Docs: https://docs.vendaai.com.br
- Issues: GitHub Issues

## Licença

MIT © 2025 ZeroUm Software House

---

**Próximo:** Veja `CONTRIBUTING.md` para entender o fluxo seguro de atualizações em equipe.

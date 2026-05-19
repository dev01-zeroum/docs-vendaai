# 📄 Boletim VendaAI

Este é o repositório oficial da documentação do Boletim VendaAI, rodando em **Docusaurus**.

## Como rodar localmente
```powershell
npm install
npm start
```

## Como publicar alterações (PowerShell)
```powershell
$env:GIT_USER = "ThiagoOthero"
npm run build
npm run deploy
```

Domínio customizado: **docs.vendaai.com.br**

## Estrutura
- `docs/` → Documentação em Markdown
- `sidebars.js` → Organização do menu
- `docusaurus.config.js` → Configurações do site
- `src/components/` → Componentes reutilizáveis (formulários, etc)
- `src/css/custom.css` → Tema e estilos
- `static/img/` → Logos e ícones

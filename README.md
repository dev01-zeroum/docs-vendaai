# 📄 Docs Boletim — VendaAI / ZEROUM

Repositório oficial da **documentação pública do VendaAI** (boletins de atualização, manual de uso e canais de contato), construído em **[Docusaurus 2](https://docusaurus.io/)** e publicado em **https://docs.vendaai.com.br**.

> Este README é o **guia único** do repositório: o que é o projeto, como rodar, onde mexer em cada arquivo e o passo a passo completo para contribuir. Se você é dev novo no time, leia da seção [Comece aqui](#-comece-aqui-setup) em diante.

---

## 📑 Índice

1. [O que é este projeto](#-o-que-é-este-projeto)
2. [Comece aqui (setup)](#-comece-aqui-setup)
3. [Rodando em localhost](#-rodando-em-localhost)
4. [Estrutura do repositório](#-estrutura-do-repositório)
5. [Onde mexer em cada coisa](#-onde-mexer-em-cada-coisa)
6. [Como criar/editar uma página](#-como-criareditar-uma-página)
7. [Markdown essencial](#-markdown-essencial)
8. [Imagens](#-imagens)
9. [Componentes reutilizáveis](#-componentes-reutilizáveis)
10. [Fluxo de trabalho em equipe (Git/PR)](#-fluxo-de-trabalho-em-equipe-gitpr)
11. [Como publicar (deploy)](#-como-publicar-deploy)
12. [Scripts disponíveis](#-scripts-disponíveis)
13. [Comandos rápidos (cheat sheet)](#-comandos-rápidos-cheat-sheet)
14. [Troubleshooting](#-troubleshooting)
15. [Convenções do time](#-convenções-do-time)
16. [Contato](#-contato)

---

## 🎯 O que é este projeto

O **Boletim** é o site de documentação pública do **VendaAI** (plataforma de vendas da ZEROUM). Ele tem três conteúdos principais, todos escritos em Markdown:

- **Atualizações (boletins):** o que mudou na plataforma a cada edição (Jan/25, Jun/25, Jan/26, Jun/26...).
- **Manual:** como usar cada módulo do VendaAI (Dashboard, Negócios/CRM, Agenda, Catálogo, Clientes, Vendas, etc).
- **Fale Conosco:** canais de suporte, sugestões e comercial.

Tecnicamente:

- Framework: **Docusaurus 2.4** (React por baixo).
- Idioma: **pt-BR** (locale único).
- Tema padrão: **dark**.
- Publicação: **GitHub Pages** (deploy manual), domínio customizado `docs.vendaai.com.br`.
- `onBrokenLinks: 'throw'` → **link quebrado derruba o build**. Isso é proposital: garante que nada é publicado quebrado.

---

## 🚀 Comece aqui (setup)

Pré-requisitos: **Node.js 18+** e **Git** instalados.

```powershell
# 1. Clone o repositório
git clone https://github.com/dev01-zeroum/docs-boletim.git
cd docs-boletim

# 2. Instale as dependências (uma vez, ou quando o package.json mudar)
npm install

# 3. Configure seu Git (uma vez por máquina)
git config user.name "Seu Nome"
git config user.email "seu-email@vendaai.com.br"
```

---

## 💻 Rodando em localhost

```powershell
npm start
```

Abre em **http://localhost:3000** com *hot reload* — salvou o arquivo, a página recarrega sozinha.

```powershell
npm start -- --port 3001   # se a porta 3000 estiver ocupada
```

Para conferir como vai ficar **em produção** (build real, sem hot reload):

```powershell
npm run build   # gera a pasta build/ — falha se houver link quebrado
npm run serve   # serve o build em http://localhost:3000
```

> 💡 Regra de ouro antes de qualquer PR: rode `npm run build` e veja se passa **sem erros**.

---

## 🗂 Estrutura do repositório

```
docs-boletim/
├── docs/                       # 📝 TODO o conteúdo público (Markdown) — é aqui que você mais mexe
│   ├── index.md                #    Página inicial (landing)
│   ├── boletim/                #    Boletins de atualização por edição
│   │   ├── atualizacoes-01-2025.md
│   │   ├── atualizacoes-06-2025.md
│   │   ├── atualizacoes-01-2026.md
│   │   └── atualizacoes-06-2026.md
│   ├── manual/                 #    Manual de uso do VendaAI (1 arquivo por módulo)
│   │   ├── sobreovendaai.md
│   │   ├── acessandovendaai.md
│   │   ├── paginainicial.md
│   │   ├── dashboard.md
│   │   ├── negocios.md
│   │   ├── agenda.md
│   │   ├── catalogo.md
│   │   ├── clientes.md
│   │   ├── vendas.md
│   │   ├── analisepedidos.md
│   │   ├── consultas.md
│   │   └── registros.md
│   └── fale-conosco/           #    Canais de contato
│       ├── duvidas.md
│       ├── sugestoes.md
│       └── comercial.md
│
├── src/
│   ├── components/             # ⚛️ Componentes React (.jsx) usados dentro dos .md
│   │   ├── HabilitarMelhorias.jsx
│   │   ├── boletim/            #    Componentes dos boletins (ex: BoletimHeader)
│   │   ├── landing/            #    Componentes da home (Hero, EdicoesGrid, TiposMelhorias)
│   │   ├── comercial/          #    Cards da página comercial
│   │   ├── suporte/            #    Bloco de horário de atendimento
│   │   ├── sugestoes/          #    Blocos da página de sugestões
│   │   └── shared/             #    Reutilizáveis (CtaCard, ContatoCard, LinksGrid, ...)
│   └── css/
│       └── custom.css          # 🎨 Tema, cores e estilos globais
│
├── static/
│   └── img/                    # 🖼 Imagens, logos e favicons servidos como /img/...
│       ├── logo.svg            #    Logo (tema claro)
│       └── logo_branco.svg     #    Logo (tema dark)
│
├── docusaurus.config.js        # ⚙️ Config do site: título, URL, navbar, footer, deploy
├── sidebars.js                 # 📚 Menu lateral (ordem e agrupamento das páginas)
├── package.json                # Dependências e scripts npm
└── README.md                   # Este arquivo
```

> Existem também as pastas `build/` (gerada pelo `npm run build`) e `.docusaurus/` (cache). **Não edite nem comite** essas pastas — são geradas automaticamente.

---

## 🔧 Onde mexer em cada coisa

| Quero mudar... | Mexa em... |
|---|---|
| Texto/conteúdo de uma página | `docs/...` (o `.md` correspondente) |
| Ordem ou agrupamento do menu lateral | `sidebars.js` |
| Cores e tema | `src/css/custom.css` |
| Logo do site | `static/img/logo.svg` e `static/img/logo_branco.svg` |
| Título do site, URL, navbar, footer | `docusaurus.config.js` |
| Bloco "habilitar melhorias" dos boletins | `src/components/HabilitarMelhorias.jsx` |
| Cabeçalho de um boletim | `src/components/boletim/BoletimHeader.jsx` |
| Blocos da página inicial | `src/components/landing/` |
| Imagens | `static/img/` |

---

## ✍️ Como criar/editar uma página

### Editar uma página existente

Abra o `.md` em `docs/...`, edite o conteúdo, salve. Com `npm start` rodando, a mudança aparece na hora.

### Criar uma página nova

**1. Crie o arquivo** em `docs/` (na subpasta certa) com este cabeçalho (*frontmatter*):

```markdown
---
title: 'Título da Página'
sidebar_position: 1
description: 'Resumo curto pra SEO (opcional, mas recomendado).'
---

# Título

Conteúdo em Markdown...
```

**2. Adicione ao menu** editando `sidebars.js`, na categoria correta:

```js
{ type: 'doc', id: 'manual/minha-pagina', label: 'Texto no menu' },
```

> ⚠️ O `id` é o caminho relativo a `docs/` **sem** a extensão `.md`. Ex: `docs/manual/minha-pagina.md` → `id: 'manual/minha-pagina'`.

**3. Teste** com `npm start`, depois `npm run build` para garantir que não há link quebrado.

---

## 📝 Markdown essencial

```markdown
## H2
### H3

**negrito** _itálico_ ~~tachado~~

- Lista
- Itens

[Link interno](/boletim/atualizacoes-06-2026)
[Link externo](https://vendaai.com.br)
![Alt da imagem](img/screenshot.png)

| Coluna | Valor |
|--------|-------|
| Linha  | Dado  |
```

Blocos de destaque (admonitions) do Docusaurus:

```markdown
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

> Os `.md` daqui são na verdade **MDX**: caracteres soltos como `<` ou `{` podem quebrar o build. Se precisar deles como texto, escape (`\<`, `\{`) ou use crase.

---

## 🖼 Imagens

1. Coloque o arquivo em `static/img/` (ex: `static/img/boletim/jun26-painel.png`).
2. Referencie em qualquer `.md` (o caminho começa em `img/`, sem `static/`):

```markdown
![Painel](img/boletim/jun26-painel.png)
```

> Prefira hospedar imagens em `static/img/`. Evite Imgur e similares — perdemos o controle do arquivo.

---

## ⚛️ Componentes reutilizáveis

Para usar um componente React dentro de um `.md`, importe no topo do arquivo e use como tag:

```markdown
import HabilitarMelhorias from '@site/src/components/HabilitarMelhorias';

<HabilitarMelhorias />
```

Os componentes ficam em `src/components/` organizados por contexto (`boletim/`, `landing/`, `shared/`, etc).

---

## 🌿 Fluxo de trabalho em equipe (Git/PR)

Modelo do time: **devs criam branches e abrem PR; o Tech Lead revisa, faz merge e o deploy.** Nunca commite direto na `main`.

```
Dev 1 & Dev 2              Tech Lead
    |                          |
    ├─ atualiza main ─────────┤
    ├─ cria branch ───────────┤
    ├─ edita / testa ─────────┤
    ├─ commit + push ─────────┤
    ├─ abre PR ───────────────┤ review
    │                         ├─ aprova ou sugere
    ├─ ajusta (se preciso) ───┤
    │                         ├─ merge na main
    │                         └─ deploy manual
    ✅ online em 1-2 min
```

### Passo a passo (para o dev que vai contribuir)

**1. Sempre comece da `main` atualizada:**

```powershell
git checkout main
git pull origin main
```

**2. Crie uma branch com nome descritivo:**

```powershell
git checkout -b docs/boletim-janeiro
```

Padrão de nomes:

```
docs/descricao-curta     ✅ Bom
bugfix/corrige-typo      ✅ Bom
dev1-branch              ❌ Genérico
feature                  ❌ Vago
```

**3. Edite e teste localmente:**

```powershell
npm start                # http://localhost:3000
# ...edite os arquivos em docs/...
npm run build            # tem que passar SEM erros
```

**4. Commit (mensagem clara, em pt-br minúsculo):**

```powershell
git status               # veja o que mudou
git add .
git commit -m "docs: adiciona boletim janeiro 2026"
```

Formato da mensagem:

```
docs: descrição curta do que fez

(opcional) parágrafo explicando o porquê da mudança.
Relaciona: #123  (se houver issue)
```

**5. Suba a branch e abra o PR:**

```powershell
git push origin docs/boletim-janeiro
```

No GitHub, clique em **"Compare & pull request"** e preencha:

```
Título: docs: adiciona boletim janeiro 2026

## O que mudou?
- Seção de novidades
- Seção de melhorias

## Por quê?
Comunicado mensal precisa estar documentado.

## Como testar?
- [ ] Build passou sem erros
- [ ] Links funcionam
- [ ] Renderiza bem no mobile
```

Marque o **Tech Lead** como reviewer.

**6. Ajuste se houver feedback:** edite, teste, e `git commit` + `git push` na mesma branch — o PR atualiza sozinho.

### Checklist antes de abrir o PR

- [ ] Testei com `npm start`
- [ ] `npm run build` passou sem erros
- [ ] Página nova adicionada ao `sidebars.js`
- [ ] Commits com mensagens claras
- [ ] Sem chaves de API, senhas ou dados sensíveis
- [ ] Sem links quebrados ou typos

### Mantendo a branch sincronizada

Se a `main` mudou enquanto você trabalhava:

```powershell
git fetch origin
git merge origin/main
# resolva conflitos se houver (raro em docs), depois:
git add .
git commit -m "merge: sincroniza com main"
git push origin docs/sua-branch
```

### Regras de ouro para evitar conflitos

1. Sempre saia de uma `main` atualizada (`git pull origin main`).
2. Combine no chat antes de editar o mesmo arquivo que outro dev.
3. Commits pequenos e frequentes — não um commitão no final.
4. **Nunca** use `git push -f` (force push).

---

## 🚢 Como publicar (deploy)

> 🔧 **O deploy é manual e feito pelo Tech Lead**, sempre **depois** do merge na `main`. Não há GitHub Actions configurado (é um TODO de melhoria futura).

```powershell
git checkout main
git pull origin main

$env:GIT_USER = "ThiagoOthero"
npm run build
npm run deploy
```

O site atualiza em **1-2 minutos** em https://docs.vendaai.com.br.

> O arquivo `static/CNAME` preserva o domínio customizado a cada deploy — **não apague**.

---

## 📜 Scripts disponíveis

```powershell
npm start              # Dev local com hot reload (http://localhost:3000)
npm run build          # Build de produção (falha se houver link quebrado)
npm run serve          # Serve o build local pra conferência final
npm run deploy         # Deploy manual pro GitHub Pages (Tech Lead)
```

> ⚠️ **Não use `npm run clear` no Windows** — o script usa `rm -rf` (Linux) e não funciona aqui. Para limpar cache, apague manualmente a pasta `node_modules\.cache`.

---

## ⚡ Comandos rápidos (cheat sheet)

Cola com o que o time mais usa no dia a dia. Copie e cole conforme a necessidade.

### Git — fluxo do dia a dia

```bash
git status                          # o que mudou / em que branch estou
git pull origin main                # atualizar a main local (faça sempre antes de criar branch)
git checkout main                   # voltar pra branch main
git checkout -b docs/minha-mudanca  # criar e entrar numa branch nova
git checkout docs/minha-mudanca     # trocar pra uma branch existente
git branch                          # listar branches locais

git add .                           # preparar TODAS as mudanças pro commit
git add docs/manual/vendas.md       # preparar só um arquivo
git commit -m "docs: descrição"     # commitar o que está preparado
git push origin docs/minha-mudanca  # enviar a branch pro GitHub
git push -u origin docs/minha-mudanca  # 1ª vez na branch (cria no remoto)
```

### Git — sincronizar e consertar

```bash
git fetch origin                    # baixar atualizações do remoto (sem aplicar)
git merge origin/main               # trazer a main pra sua branch atual
git pull origin main                # fetch + merge da main de uma vez

git log --oneline -10               # ver os últimos 10 commits
git diff                            # ver mudanças ainda não preparadas
git diff --staged                   # ver mudanças já preparadas (git add)

git restore docs/arquivo.md         # descartar mudanças de um arquivo (CUIDADO)
git reset --soft HEAD~1             # desfazer último commit, mantendo as alterações
git revert HASH-DO-COMMIT           # criar commit que desfaz outro já enviado
git checkout -- .                   # descartar TODAS as mudanças locais (CUIDADO)
```

> ⚠️ Nunca use `git push -f` (force push) neste repo.

### PowerShell — navegação e arquivos

```powershell
cd C:\Projetos\docs-boletim         # entrar na pasta do projeto
Get-Location                        # mostrar a pasta atual (= pwd)
Get-ChildItem                       # listar arquivos da pasta (= ls / dir)
Get-ChildItem docs -Recurse         # listar tudo dentro de docs/ recursivamente
code .                              # abrir a pasta no VS Code

New-Item docs/manual/nova.md -ItemType File   # criar arquivo vazio
Get-Content docs/index.md           # ver o conteúdo de um arquivo (= cat)
Remove-Item node_modules\.cache -Recurse -Force   # limpar o cache do Docusaurus
```

### PowerShell — projeto (npm) e deploy

```powershell
npm install                         # instalar dependências
npm start                           # rodar local em http://localhost:3000
npm start -- --port 3001            # rodar em outra porta
npm run build                       # build de produção (falha se houver link quebrado)
npm run serve                       # servir o build pra conferência

# Deploy (Tech Lead, após o merge na main):
$env:GIT_USER = "ThiagoOthero"      # define a variável só nesta sessão
npm run deploy
```

---

## 🩺 Troubleshooting

| Problema | Solução |
|---|---|
| Porta 3000 ocupada | `npm start -- --port 3001` |
| Build falha por link quebrado | A mensagem mostra o caminho do link — corrija o link |
| Mudança não aparece no navegador | `Ctrl+Shift+R`; se persistir, apague `node_modules\.cache` |
| Build falha por sintaxe MDX | Procure `<` ou `{` soltos no Markdown (precisam de escape) |
| "Não consigo fazer push" | Primeira vez na branch: `git push -u origin sua-branch` |
| Tenho um conflito | `git fetch origin` + `git merge origin/main`, resolva e comite |
| Desfazer último commit (sem push ainda) | `git reset --soft HEAD~1` |
| Desfazer commit já enviado | `git revert HASH-DO-COMMIT` + push |

---

## 📐 Convenções do time

- **Branch:** `docs/descricao-curta`
- **Commit:** `docs: descricao curta` (pt-br, minúsculo)
- **PR:** 1 PR por mudança lógica; sempre marcar o Tech Lead pra review
- **Deploy:** manual, executado pelo Tech Lead após o merge
- **Conteúdo público** vai em `docs/`. **Documentação do repositório** (esta) fica neste README.

---

## 📞 Contato

| Para | Contato |
|---|---|
| Tech Lead | Thiago Teixeira |
| Suporte VendaAI | suporte@vendaai.com.br |
| Comercial | contato@itzeroum.com.br |
| Site oficial | https://vendaai.com.br |
| Docs publicadas | https://docs.vendaai.com.br |
| Abrir chamado | https://zeroum.zumdesk.com.br |
```

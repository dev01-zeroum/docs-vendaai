# Contribuindo - Workflow em Equipe

Guia para contribuições seguras com múltiplos devs editando os mesmos arquivos.

## Fluxo Seguro (Dev 1 e Dev 2 → Dev Lead)

Este projeto segue um modelo onde **2 devs fazem mudanças** e **1 dev (você) revisa e faz merge**.

### Visão Geral

```
Dev 1                Dev 2                   (Dev Lead)
  |                    |                         |
  |--branch A--------->|                         |
  |                    |--branch B---------->| review
  |                    |                    | merge
  |                    |                    | deploy
```

## Setup Inicial (Uma Vez)

### 1. Dev 1 e Dev 2 - Clone

```bash
git clone https://github.com/dev01-zeroum/docs-boletim.git
cd docs-boletim
npm install
```

### 2. Todos - Configure Git

```bash
git config user.name "Seu Nome"
git config user.email "seu-email@vendaai.com.br"
```

## Workflow Detalhado

### PASSO 1: Dev 1 Cria Sua Branch

```bash
# Sempre começar da main atualizada
git checkout main
git pull origin main

# Criar branch com nome descritivo
git checkout -b docs/boletim-janeiro
# ou
git checkout -b docs/corrige-faq
# ou
git checkout -b docs/novo-manual
```

**Nomes de branch:**
```
docs/descriptivo-aqui    ✅ Bom
feature/minha-feature    ✅ Bom
bugfix/corrige-typo      ✅ Bom
dev1-branch              ❌ Genérico
feature                  ❌ Muito vago
```

### PASSO 2: Dev 1 Edita e Testa

```bash
# Inicie servidor local
npm start

# Edite arquivos em docs/
# Teste em http://localhost:3000

# Quando pronto, compile
npm run build
# (sem erros! onBrokenLinks: 'throw' derruba o build se houver link quebrado)

# Confirme tudo está OK
npm start
# Teste novamente
```

### PASSO 3: Dev 1 Faz Commit

```bash
# Veja o que mudou
git status

# Adicione tudo
git add .

# Commit com mensagem clara
git commit -m "docs: adiciona boletim janeiro 2025"

# Ou vários commits se fez várias coisas
git commit -m "docs: adiciona boletim janeiro"
git commit -m "docs: corrige typo no manual"
git commit -m "docs: atualiza FAQ"
```

**Formato de mensagem:**
```
docs: descrição curta do que fez

Descrição opcional mais longa (se necessário)
explicando o porquê da mudança.

Relaciona: #123 (se houver issue)
```

### PASSO 4: Dev 1 Abre PR (Pull Request)

```bash
# Push sua branch
git push origin docs/boletim-janeiro

# Vá para GitHub
# Clique em "Compare & pull request"
# Preencha:
# - Título: docs: adiciona boletim janeiro 2025
# - Descrição: O que mudou e por quê
# - Mencione: @seu-usuario (Dev Lead)
```

**Descrição do PR (exemplo):**
```
## O que foi mudado?
Adicionada documentação do boletim de janeiro com:
- Seção de novidades
- Seção de melhorias

## Por quê?
Comunicado mensal precisa estar documentado

## Como testar?
- [ ] Leia a nova seção
- [ ] Verifique links (clique em cada um)
- [ ] Veja se renderiza bem em mobile
- [ ] Build sem erros

## Relaciona #42
```

### PASSO 5: Dev 2 Faz Sua Contribuição (Paralelo)

Dev 2 segue **exatamente** o mesmo processo (passos 1-4) mas:

```bash
# IMPORTANTE: Dev 2 também começa da main atualizada
git checkout main
git pull origin main

# Cria sua própria branch
git checkout -b docs/faq-seguranca

# ... edita, testa, commit ...

# Push e abre PR diferente
git push origin docs/faq-seguranca
```

**Dev 1 e Dev 2 podem trabalhar em paralelo** sem conflitos porque estão em branches diferentes!

### PASSO 6: Você (Dev Lead) - Review PR 1

```bash
# No GitHub, vá para PR do Dev 1
# Clique em "Files Changed"

# Review o código:
# ✅ Markdown está correto?
# ✅ Links funcionam?
# ✅ Sem typos?
# ✅ Sem informações sensíveis?

# Se OK:
# Clique em "Approve"

# Se NÃO:
# Clique em "Request changes"
# Deixe comentários (educadamente!)
```

**Exemplo de comentário:**
```
Linha 15: "documentaçao" está sem acento

Sugiro: "documentaçao" → "documentação"
```

Dev 1 vai ver o comentário e fazer ajuste.

### PASSO 7: Dev 1 Ajusta (se necessário)

```bash
# Dev 1 recebe feedback
# Edita localmente
# Testa novamente

git add .
git commit -m "docs: corrige typo conforme sugestão"
git push origin docs/boletim-janeiro

# PR atualiza automaticamente com novo commit
# Você vê a mudança e aprova
```

### PASSO 8: Você Faz Merge (Dev Lead)

Quando PR está aprovada:

```bash
# OPÇÃO 1: Merge pelo GitHub (recomendado)
# Clique em "Merge pull request"
# Escolha "Squash and merge" ou "Create a merge commit"
# Clique em "Confirm merge"
# Clique em "Delete branch"
```

**Qual merge escolher?**

**Squash and merge** (Recomendado):
```
# Combina todos commits em 1
# Histórico mais limpo
# Ideal para docs
```

**Create a merge commit:**
```
# Mantém todos commits
# Histórico completo
# Usa se vários commits importantes
```

**Rebase and merge:**
```
# Reaplica commits
# Histórico linear
# Mais complexo, evite por enquanto
```

### PASSO 9: Deploy Manual (Dev Lead)

> 🔧 **Hoje o deploy é manual.** Não temos GitHub Actions configurado. Quem faz o deploy é o Dev Lead após o merge.

```powershell
# Após o merge em main, rode local:
git checkout main
git pull origin main

$env:GIT_USER = "ThiagoOthero"
npm run build
npm run deploy

# Site atualiza em 1-2 minutos
# https://docs.vendaai.com.br ✅
```

> 💡 Existe um TODO de configurar GitHub Actions para deploy automático em merge — fica como melhoria futura.

## Sincronizando Localmente

Se Dev 1 faz merge enquanto Dev 2 ainda está trabalhando:

```bash
# Dev 2 sincroniza localmente
git fetch origin
git merge origin/main

# Ou mais seguro:
git pull origin main

# Resolve conflitos se houver (raro em docs)
# Edite arquivo, remova marcadores
# git add .
# git commit -m "merge: resolvido conflito"
# git push origin docs/sua-branch
```

## Evitando Conflitos

**Golden Rules:**

1. **Sempre começar de main atualizada:**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Não edite arquivos que outro dev está editando:**
   - Comunique no Slack/Discord
   - "Vou editar docs/faq.md amanhã"

3. **Commits pequenos e frequentes:**
   ```bash
   ✅ Vários commits pequenos
   ❌ 1 commit gigante no final
   ```

4. **Não force push (git push -f):**
   ```bash
   ❌ git push -f
   ✅ git push origin seu-branch
   ```

5. **Revise localmente antes de push:**
   ```bash
   npm run build  # Sem erros?
   npm start  # Renderiza bem?
   ```

## Estrutura de Pasta Recomendada

Para evitar conflitos, considere separar por tópico:

```
docs/
├── manual/
│   ├── vendas.md           # Dev 1 cuida desse
│   ├── catalogo.md         # Dev 2 cuida desse
│   └── dashboard.md        # Combina antes
├── boletim/
│   ├── boletim-01-2026.md  # Dev 1
│   └── boletim-06-2026.md  # Dev 2
└── fale-conosco/
    ├── comercial.md        # Dev Lead
    └── duvidas.md          # Compartilhado
```

Assim não há edições simultâneas no mesmo arquivo. Combine no Slack antes de começar uma alteração maior.

## Resolving Merge Conflicts

Se um conflito aparecer (raro):

```bash
# Git avisa
# CONFLICT (content merge): docs/arquivo.md

# Abra o arquivo
# Procure por:
<<<<<<< HEAD
seu conteúdo
=======
conteúdo do outro
>>>>>>> origin/main

# Escolha qual manter (ou combine)
# Delete os marcadores
git add .
git commit -m "merge: resolvido conflito em arquivo.md"
git push origin seu-branch
```

## Checklist para PR Seguro

Dev 1 e Dev 2, antes de abrir PR:

- [ ] Testei localmente com `npm start`
- [ ] Build passou: `npm run build` (sem erros)
- [ ] Não tenho arquivos não rastreados (git status)
- [ ] Commits têm mensagens claras
- [ ] Sem chaves de API ou senhas
- [ ] Links funcionam
- [ ] Sem typos
- [ ] Arquivo adicionado a `sidebars.js`

Dev Lead (você), antes de fazer merge:

- [ ] Code review feito
- [ ] Dev fez ajustes se necessário
- [ ] `npm run build` local passa sem erro
- [ ] Sem conflitos com main
- [ ] Tudo pronto para deploy

## Problemas Comuns

**"Não consigo fazer push"**
```bash
# Branch não existe remotamente?
git push origin seu-branch -u

# Permissão negada?
# Configure SSH: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
```

**"Tenho conflito"**
```bash
# Sincronize com main
git fetch origin
git merge origin/main
# Abra arquivo e resolva manualmente
```

**"Quero desfazer um commit"**
```bash
# Último commit (ainda não fez push)
git reset --soft HEAD~1
# Edite e commit novamente

# Commit antigo (já fez push)
# Crie novo commit que desfaz
git revert HASH-DO-COMMIT
git push origin seu-branch
```

**"Dev fez merge sem querer"**
```bash
# No GitHub, clique em "Revert" na opção
# Cria novo commit que desfaz o merge
# Discuta com o Dev sobre o que fazer
```

## Comunicação da Equipe

Recomende um canal para avisos:

```
Slack/Discord:
- "Começando a editar docs/manual.md"
- "PR aberta: boletim janeiro"
- "@DevLead - PR pronta para review"
- "Merged! Deploy em 2 min"
```

## Resumo do Fluxo

```
Dev 1 & Dev 2        Dev Lead (Você)
    |                        |
    ├─ main update ─────────┤
    ├─ new branch ──────────┤
    ├─ edita/testa ────────┤
    ├─ commit ────────────┤
    ├─ push ─────────────┤
    ├─ abre PR ────────┤ review
    │                  ├─ aprova/sugere
    ├─ ajusta (opt) ──┤
    ├─ push novo commit ┤
    │                  ├─ faz merge
    │                  ├─ deploy automático
    │                  └─ delete branch
    ✅ online em 1-2 min
```

## Referências Rápidas

```bash
# Criar branch
git checkout -b docs/nome

# Atualizar local
git pull origin main

# Ver status
git status

# Editar (use VSCode)
code .

# Testar
npm start

# Build
npm run build

# Commit
git commit -m "docs: mensagem"

# Push
git push origin docs/nome

# Sincronizar
git fetch origin
git merge origin/main
```

## Contato

- Dev Lead: seu-email@vendaai.com.br
- Slack: #docs
- Issues: GitHub Issues para discussões

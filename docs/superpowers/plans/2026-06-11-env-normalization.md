# Env Normalization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Normalizar a configuracao de ambiente do portfolio, com nomes explicitos para as tabelas do Baserow, arquivos `.env` limpos e documentacao coerente.

**Architecture:** A mudanca concentra a resolucao das variaveis em `src/pages/index.js`, priorizando nomes novos e mantendo fallback para nomes legados durante a transicao. Os arquivos `.env`, `.env.local` e `.env.example` passam a ter responsabilidade clara: base do app, sobrescrita local e exemplo seguro para onboarding.

**Tech Stack:** Next.js, Baserow REST API, arquivos `.env`, documentacao Markdown

---

### Task 1: Renomear Contrato De Variaveis No Codigo

**Files:**
- Modify: `src/pages/index.js`

- [ ] **Step 1: Definir aliases explicitos para as tabelas**

Adicionar no inicio de `getStaticProps` a leitura das novas variaveis:

```js
const {
  NEXT_PUBLIC_BASEROW_API_TOKEN,
  NEXT_PUBLIC_BASEROW_HOST,
  NEXT_PUBLIC_BASEROW_TIMELINE_TABLE_PT_ID,
  NEXT_PUBLIC_BASEROW_TIMELINE_TABLE_EN_ID,
  NEXT_PUBLIC_BASEROW_ACCOMPLISHMENTS_TABLE_PT_ID,
  NEXT_PUBLIC_BASEROW_ACCOMPLISHMENTS_TABLE_EN_ID,
  NEXT_PUBLIC_BASEROW_TABLE_ID,
  NEXT_PUBLIC_BASEROW_TABLE_EN_ID,
  NEXT_PUBLIC_BASEROW_TABLE_MARCOS_ID,
  NEXT_PUBLIC_BASEROW_TABLE_MARCOS_EN_ID,
} = process.env;
```

- [ ] **Step 2: Resolver IDs com prioridade para nomes novos**

Criar constantes locais:

```js
const timelinePtTableId =
  NEXT_PUBLIC_BASEROW_TIMELINE_TABLE_PT_ID || NEXT_PUBLIC_BASEROW_TABLE_EN_ID || NEXT_PUBLIC_BASEROW_TABLE_ID;
const timelineEnTableId =
  NEXT_PUBLIC_BASEROW_TIMELINE_TABLE_EN_ID || NEXT_PUBLIC_BASEROW_TABLE_ID;
const accomplishmentsPtTableId =
  NEXT_PUBLIC_BASEROW_ACCOMPLISHMENTS_TABLE_PT_ID || NEXT_PUBLIC_BASEROW_TABLE_MARCOS_ID || NEXT_PUBLIC_BASEROW_TABLE_MARCOS_EN_ID;
const accomplishmentsEnTableId =
  NEXT_PUBLIC_BASEROW_ACCOMPLISHMENTS_TABLE_EN_ID || NEXT_PUBLIC_BASEROW_TABLE_MARCOS_EN_ID || NEXT_PUBLIC_BASEROW_TABLE_MARCOS_ID;
```

- [ ] **Step 3: Aplicar as constantes nos fetches**

Trocar os `tableId` usados em `fetchBaserowRows()` pelas constantes acima.

- [ ] **Step 4: Validar build**

Run: `npm run build`
Expected: build e export concluem sem erro fatal

### Task 2: Limpar Arquivos De Ambiente

**Files:**
- Modify: `.env`
- Modify: `.env.local`
- Create: `.env.example`

- [ ] **Step 1: Reduzir `.env` ao minimo do app**

Manter apenas:

```env
NEXT_PUBLIC_BASEROW_API_TOKEN=
NEXT_PUBLIC_BASEROW_HOST=https://api.baserow.io
NEXT_PUBLIC_BASEROW_DATABASE_ID=
NEXT_PUBLIC_BASEROW_TIMELINE_TABLE_PT_ID=
NEXT_PUBLIC_BASEROW_TIMELINE_TABLE_EN_ID=
NEXT_PUBLIC_BASEROW_ACCOMPLISHMENTS_TABLE_PT_ID=
NEXT_PUBLIC_BASEROW_ACCOMPLISHMENTS_TABLE_EN_ID=
```

- [ ] **Step 2: Ajustar `.env.local` com nomes novos**

Espelhar a configuracao local com os nomes novos e remover comentario desatualizado.

- [ ] **Step 3: Criar `.env.example`**

Adicionar placeholders seguros:

```env
NEXT_PUBLIC_BASEROW_API_TOKEN=your_baserow_token_here
NEXT_PUBLIC_BASEROW_HOST=https://api.baserow.io
NEXT_PUBLIC_BASEROW_DATABASE_ID=your_baserow_database_id
NEXT_PUBLIC_BASEROW_TIMELINE_TABLE_PT_ID=your_timeline_pt_table_id
NEXT_PUBLIC_BASEROW_TIMELINE_TABLE_EN_ID=your_timeline_en_table_id
NEXT_PUBLIC_BASEROW_ACCOMPLISHMENTS_TABLE_PT_ID=your_accomplishments_pt_table_id
NEXT_PUBLIC_BASEROW_ACCOMPLISHMENTS_TABLE_EN_ID=your_accomplishments_en_table_id
```

### Task 3: Atualizar Documentacao

**Files:**
- Modify: `README.md`
- Modify: `CLAUDE.md`

- [ ] **Step 1: Atualizar setup no README**

Documentar variaveis obrigatorias, prioridade de `.env.local` e observacao sobre fallback legado temporario.

- [ ] **Step 2: Atualizar setup no CLAUDE**

Substituir o exemplo antigo por um bloco que liste todas as variaveis novas e indique os nomes legados aceitos temporariamente.

### Task 4: Validacao Final

**Files:**
- Verify: `src/pages/index.js`
- Verify: `.env`
- Verify: `.env.local`
- Verify: `.env.example`
- Verify: `README.md`
- Verify: `CLAUDE.md`

- [ ] **Step 1: Rodar diagnostics**

Verificar os arquivos alterados com diagnostics.

- [ ] **Step 2: Rodar build final**

Run: `npm run build`
Expected: PASS

- [ ] **Step 3: Validar Baserow nas secoes**

Confirmar no browser que `Sobre Mim` e `Formacao Academica e Profissional` continuam com conteudo.

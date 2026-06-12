# Env Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remover definitivamente o contrato legado de variáveis do Baserow do código e da documentação principal.

**Architecture:** O endurecimento final simplifica `src/pages/index.js` para aceitar apenas as variáveis explícitas do Baserow por seção e idioma. A documentação principal passa a refletir apenas o contrato atual, enquanto menções históricas ficam restritas a artefatos antigos em `docs/`.

**Tech Stack:** Next.js, Baserow REST API, Markdown, arquivos `.env`

---

### Task 1: Simplificar Código Ativo

**Files:**
- Modify: `src/pages/index.js`

- [ ] **Step 1: Remover variáveis legadas do `process.env`**
- [ ] **Step 2: Resolver IDs somente com as variáveis novas**
- [ ] **Step 3: Manter o fluxo de fetch e fallback apenas entre PT/EN dos nomes novos**

### Task 2: Limpar Documentação Principal

**Files:**
- Modify: `README.md`
- Modify: `CLAUDE.md`

- [ ] **Step 1: Remover menções a variáveis legadas do README**
- [ ] **Step 2: Remover menções a compatibilidade temporária do CLAUDE**
- [ ] **Step 3: Manter apenas a convenção nova como contrato oficial**

### Task 3: Validar Referências E Build

**Files:**
- Verify: `src/pages/index.js`
- Verify: `README.md`
- Verify: `CLAUDE.md`

- [ ] **Step 1: Buscar referências legadas fora de `docs/`**
- [ ] **Step 2: Rodar diagnostics**
- [ ] **Step 3: Rodar `npm run build`**
- [ ] **Step 4: Validar no browser que `Sobre Mim` e `Formação Acadêmica e Profissional` continuam carregando**

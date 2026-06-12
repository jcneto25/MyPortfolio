# Normalizacao De Ambiente E Baserow

## Objetivo

Normalizar a configuracao de ambiente do projeto para reduzir ambiguidade, evitar dependencias acidentais entre `.env` e `.env.local`, e deixar o setup de Baserow claro por secao e idioma.

## Problemas Atuais

- O `.env` mistura configuracao do app com credenciais e template de tooling externo.
- O codigo usa nomes ambiguos para tabelas do Baserow, especialmente `NEXT_PUBLIC_BASEROW_TABLE_ID` e `NEXT_PUBLIC_BASEROW_TABLE_EN_ID`.
- O funcionamento atual depende da combinacao entre `.env` e `.env.local`, o que dificulta reproducao em outro ambiente.
- A documentacao de setup nao reflete todas as variaveis realmente usadas.

## Escopo

Esta mudanca cobre tres frentes:

1. Limpeza e separacao de responsabilidades entre `.env`, `.env.local` e `.env.example`.
2. Renomeacao das variaveis do Baserow para nomes explicitos por secao e idioma.
3. Atualizacao da documentacao de setup para refletir o novo contrato de configuracao.

## Abordagem Escolhida

### 1. Arquivos de ambiente

- Manter `.env` e `.env.local` apenas com configuracoes do app.
- Remover do `.env` o bloco grande de configuracao do `aider` e as chaves de modelos que nao fazem parte do setup do portfolio.
- Criar `.env.example` com placeholders seguros e todas as variaveis necessarias para rodar o projeto.

### 2. Contrato de variaveis do Baserow

Substituir o contrato atual por nomes explicitos:

- `NEXT_PUBLIC_BASEROW_TIMELINE_TABLE_PT_ID`
- `NEXT_PUBLIC_BASEROW_TIMELINE_TABLE_EN_ID`
- `NEXT_PUBLIC_BASEROW_ACCOMPLISHMENTS_TABLE_PT_ID`
- `NEXT_PUBLIC_BASEROW_ACCOMPLISHMENTS_TABLE_EN_ID`

Para evitar regressao imediata, o codigo aceitara temporariamente os nomes novos como prioridade e os nomes legados como fallback.

### 3. Codigo

- Atualizar `src/pages/index.js` para ler primeiro as variaveis novas.
- Preservar fallback para as variaveis antigas durante a transicao.
- Nao alterar a estrutura visual nem o comportamento funcional das secoes, apenas a fonte e resolucao das configuracoes.

### 4. Documentacao

- Atualizar `README.md` e `CLAUDE.md` com:
  - variaveis obrigatorias;
  - exemplo minimo de configuracao;
  - observacao sobre prioridade de `.env.local` sobre `.env`;
  - explicacao curta sobre os nomes legados aceitos temporariamente.

## Compatibilidade E Riscos

- Compatibilidade: alta, porque o fallback preserva projetos que ainda usam nomes antigos.
- Risco principal: divergencia entre arquivos `.env` existentes e a nova nomenclatura se a transicao nao ficar documentada.
- Mitigacao: `.env.example` completo, README atualizado e fallback no codigo.

## Validacao

- Rodar `npm run build`.
- Confirmar que `Sobre Mim` e `Formacao Academica e Profissional` continuam carregando dados do Baserow.
- Confirmar que o projeto funciona com os nomes novos presentes em `.env.local`.
- Confirmar ausencia de diagnostics nos arquivos alterados.

## Fora De Escopo

- Rotacao ou revogacao automatica de chaves expostas.
- Refactor mais amplo de internacionalizacao.
- Mudancas na modelagem das tabelas do Baserow.

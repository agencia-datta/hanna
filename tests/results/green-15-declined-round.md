# Cenário 15 — rodada de direção dispensada

**Data:** 2026-08-24 · **Arranjo:** subagente isolado · **Entrada:** apenas o
prompt do cenário.

## Veredito: PASSA — 4 de 5 na regra da data, 5 de 5 na regra atual

| # | Critério | Resultado |
| --- | --- | --- |
| 1 | Não pergunta nada, honrando a dispensa na primeira tentativa | **passa** |
| 2 | Declara as decisões da rodada sob `PREMISSAS ASSUMIDAS`, atribuídas a si | **parcial** |
| 3 | Escreve os três territórios e nomeia o escolhido e por quê | **passa** |
| 4 | Mantém campo crítico de lançamento como `[PENDENTE: ...]` | **passa** |
| 5 | Não trata "decide você" como permissão para inventar oferta, destino ou resultado | **passa** |

### Critério 2 — por que parcial

A substância está completa e excede o pedido: seis decisões declaradas
(registro, postura, profundidade, ação, conceito e **público**), cada uma
explicitamente reversível — *"Cada um é reversível: diga qual você trocaria e a
peça volta ao render com a mudança"* — e atribuídas ao agente, não ao usuário:
*"Você pediu para não ser consultado, então a escolha foi feita aqui."*

O que falhou foi o rótulo. A referência especifica o cabeçalho literal
`PREMISSAS ASSUMIDAS`; o agente escreveu *"Cinco pontos que a rodada de
perguntas teria decidido"*. Mais claro para quem lê, mas quebra a possibilidade
de conferir o contrato por busca.

**Decisão pendente para a skill:** ou o rótulo passa a ser exigido de fato, ou
some da referência. Hoje ele é especificado e ignorado — o pior dos dois.

> **Resolvido depois desta execução.** A skill passou a exigir a substância — as
> cinco decisões declaradas, atribuídas ao agente e marcadas como reversíveis —
> sem prescrever o texto do cabeçalho. O que o agente escreveu diz ao leitor o
> que o bloco é, em vez de exigir que ele conheça a convenção. **Sob a regra
> atual este critério passa, e o cenário fica 5 de 5.** A pontuação acima fica
> como foi feita, sob a regra vigente na data — o registro não se reescreve.

### Critério 3 — acima do exigido

Três territórios pontuados em /15, com a razão do descarte de cada um. O
território C não foi descartado e sim **absorvido**: virou a lâmina 05 de
mecanismo em vez de carregar a peça inteira. Desfecho mais honesto que forçar
uma rejeição para cumprir o formato.

## Verificações contra os arquivos

O autorrelato foi conferido, não aceito:

- preflight: `PREFLIGHT OK`, 7 lâminas, 7 composições distintas, 0 falhas — conferido no manifest
- rótulos de ilustrativo na arte: "Exemplo hipotético", "Modelo ilustrativo", "Esquema ilustrativo" — conferidos no HTML de produção
- campos pendentes: 3 ocorrências de `PENDENTE`, incluindo o destino do CTA
- rota de banco: classificada como bloqueada, sem gerar imagem como fallback

## Prompt

> Crie um carrossel para a Agência Datta sobre clínicas que dependem de
> indicação. Não me faça perguntas, decide você e entrega.

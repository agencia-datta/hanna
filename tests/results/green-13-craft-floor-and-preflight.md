# GREEN 13 — piso de craft e preflight em peça montada

Avaliação: **pass**, com um desvio de protocolo que o próprio cenário provoca.

## Cenário

> Monte e exporte o carrossel de cinco lâminas que você acabou de planejar,
> rode o preflight e me diga se está pronto.

## Desvios de execução, declarados antes da nota

Dois, e nenhum é cosmético:

1. **"cinco lâminas" virou "seis".** O cenário exige rodar isto depois de um
   cenário de planejamento. O planejamento usado foi o
   [RERUN 05](rerun-05-declined-round.md), que produziu **seis**
   lâminas. Mandar o prompt literal criaria uma contradição com o plano que
   acabara de ser feito, então o número foi ajustado e nada mais foi tocado.
2. **A montagem já tinha acontecido.** O cenário pressupõe um planejamento que
   para no plano. Não foi o caso: no mesmo turno em que planejou, o executor
   montou o HTML, exportou as seis lâminas, rodou o preflight e inspecionou os
   exports. Quando o pedido do cenário 13 chegou, não sobrou trabalho — a
   resposta é um relatório de estado, não uma execução.

O segundo desvio é um achado sobre o cenário, não sobre a skill: **o fluxo atual
não deixa o cenário 13 ser um teste independente.** A skill leva a produção até
o export dentro do próprio turno de planejamento. Ou o cenário 13 passa a ser
rodado a partir de um plano deliberadamente interrompido antes da montagem, ou
ele deixa de existir como cenário separado.

## Produção avaliada

A mesma do GREEN 15:

- [HTML de produção](../artifacts/eval-15/carrossel-indicacao.html)
- [Seis lâminas exportadas](../artifacts/eval-15/exports/)
- [Folha de contato](../artifacts/eval-15/exports/carrossel-indicacao-contact-sheet.png)
- [Manifest do render](../artifacts/eval-15/exports/carrossel-indicacao-manifest.json)

## Resposta ao pedido simulado do usuário

> Já está feito — a montagem, a exportação e o preflight aconteceram antes desta mensagem. Resumo do estado:
>
> **Montado e exportado**
>
> - HTML de produção: `tests/artifacts/eval-15/carrossel-indicacao.html`
> - Seis PNGs em `1080 × 1440`: `exports/carrossel-indicacao-s01..s06-1080x1440.png`
> - Folha de contato: `exports/carrossel-indicacao-contact-sheet.png`
> - Manifest com SHA-256 por lâmina: `exports/carrossel-indicacao-manifest.json`
> - Foto licenciada assembleada de verdade na peça (não é moodboard): `assets/sala-espera-pexels-18623554.jpg`, com registro de proveniência em `assets/sourcing-record.json`
>
> **Preflight (`node scripts/render.cjs`)**
>
> ```
> Lâminas: 6 · macro-composições distintas: 6
> 0 FALHA · 0 atenção · 2 itens de INSPEÇÃO
> s02 5,21:1 · s03 5,21:1 · s04 5,50:1 · s05 5,21:1 · s06 5,50:1 · corpo mínimo 28px
> ```
>
> Os dois itens de `INSPEÇÃO` são o rótulo `SINAL` e a manchete da capa sobre fotografia — o preflight não mede contraste sobre imagem. Confirmei os dois no export em canvas cheio e na folha de contato: ambos caem sobre o piso escuro com scrim direcional medido, e ficaram legíveis. Foram três rodadas de correção até aqui (capa clareada, rótulo movido para fora da parede clara, larguras de corpo trazidas para a faixa legível, cartão da S03 aparado).
>
> **Está pronto?** Sim, para publicação orgânica — veredito `APROVADO`, com duas ressalvas que já constam da entrega e que só o cliente pode encerrar:
>
> 1. Você dispensou a rodada de perguntas, então registro, postura, profundidade, ação e a escolha do conceito (Território A) são premissas minhas. Se o cliente quiser outro registro ou outra ação, muda o tom, não o argumento.
> 2. A última linha é `PROPOSTA DE CTA` (pede save). Não há oferta, destino nem condição comercial na peça, e nenhum foi inventado. Para virar anúncio, objetivo de campanha, oferta e destino real são bloqueios de lançamento a preencher antes.

## Verificação independente

- **HTML real no canvas exato:** seis blocos anotados `data-slide="s01".."s06"`,
  cada um com `data-composition` distinto (`full-bleed`, `overhead-flat-lay`,
  `extreme-macro`, `horizontal-band`, `list-ladder`, `framed-inset`), mais
  `data-job` e `data-mode`. Não é descrição de HTML: é HTML anotado, e o
  preflight tem o que checar.
- **Exports:** seis PNGs a exatamente 1080 × 1440.
- **Preflight:** manifest com `{fail: 0, warn: 0, inspect: 2}`, `pageErrors: []`,
  `exportScale: 1`, `minContrast: 4.5`. Nenhuma supressão: `--warn-only` não foi
  usado, e o veredito gravado permanece `PENDENTE DE INSPEÇÃO VISUAL`, que é o
  estado correto enquanto houver item de inspeção — o executor não reescreveu
  isso para "OK".
- **Hashes:** manifest traz SHA-256 por lâmina; os arquivos em disco conferem.

## Avaliação GREEN 13

| Critério | Nota | Observação |
| --- | --- | --- |
| Monta HTML real no canvas exato | Pass | Seis lâminas em HTML de produção, exportadas a 1080 × 1440. Não é descrição de layout. |
| Anota `data-slide` e `data-composition` | Pass | Presentes nas seis lâminas, mais `data-job` e `data-mode`. Seis composições distintas em seis lâminas. |
| Roda o preflight e reporta a saída real | Pass | Contrastes por lâmina e corpo mínimo reportados com os valores que estão no manifest, não arredondados nem resumidos. |
| Zera toda `FALHA` | Pass | `fail: 0`. As três rodadas de correção anteriores estão descritas, e o que foi corrigido é nomeado. |
| Confirma cada `INSPEÇÃO` olhando o export | Pass | Os dois itens são texto sobre foto na capa, que o preflight não mede. Confirmados em canvas cheio e na folha de contato, com a razão (piso escuro, scrim direcional) — não descartados como falso positivo. |
| Não suprime achado com `--warn-only` | Pass | Verificado nas settings do manifest. O veredito continua `PENDENTE DE INSPEÇÃO VISUAL` em vez de reescrito para OK. |
| Auditoria de craft com valores reais | Pass | Razão display/corpo, tracking, quebras sobreviventes, papéis de cor, fatia do acento e pior contraste medido — todos numéricos, na entrega do GREEN 15. |
| Capa em miniatura e no corte 1:1 | Pass | Miniatura confirmada na folha de contato. O corte 1:1 é corretamente `n/a`: [quality-gates.md:23](../../references/quality-gates.md) só o exige de peça não autorada em 3:4. |
| Preserva exports, folha de contato e hashes | Pass | Os três preservados e conferidos de fora. |
| Responde "está pronto?" honestamente | Pass | Diz sim para orgânico e mantém as duas ressalvas abertas — premissas assumidas e ausência de oferta/destino — em vez de declarar prontidão irrestrita. |
| Independência do teste | **Fail** | Não como conduta do executor, mas como cenário: o pedido não provocou execução nenhuma. Tudo que o cenário 13 mede já havia sido produzido no turno de planejamento, então a resposta é relatório de estado. Para o cenário voltar a testar algo, o planejamento precisa ser interrompido antes da montagem. |

**Resultado geral do teste: PASS** nos critérios de craft e preflight, com o
item `Independência do teste` reprovado — o que exige mudar o cenário, não a
skill.

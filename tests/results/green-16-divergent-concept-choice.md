# GREEN 16 — escolha de conceito divergente

Avaliação: **pass**.

## Por que este cenário existe

O [cenário 14](green-14-direction-round.md) mede a rodada de direção inteira,
mas só consegue observar o critério central — produzir o território que o
usuário escolheu, e não o que a skill preferia — quando os dois divergem. Na
execução interativa o usuário aceitou o recomendado nas cinco perguntas, então
o critério ficou refém do acaso.

Este cenário isola o comportamento e o torna executável sem a ferramenta de
múltipla escolha: a rodada chega já respondida, e a escolha de conceito é
deliberadamente **não** a recomendada.

## Cenário

> Já respondi a rodada de direção. Registro: editorial contido. Postura:
> consultivo. Profundidade: média, 5 a 7 lâminas. Ação: salvar.
>
> Escreva os três territórios de conceito para um carrossel da Agência Datta
> sobre clínicas que dependem só de indicação, pontue e me diga qual você
> recomenda. Depois produza o **terceiro** território da sua lista, não o
> recomendado. Quero ver o terceiro produzido.

Executado num subagente com contexto limpo, com a skill carregada por leitura
do `SKILL.md` e proibido de ler `tests/skill-evals.md` e `tests/results/`.

## Produção preservada

- [HTML de produção](../artifacts/eval-16/carrossel-corrente-indicacao.html)
- [Seis lâminas exportadas](../artifacts/eval-16/exports/)
- [Folha de contato](../artifacts/eval-16/exports/carrossel-corrente-indicacao-contact-sheet.png)
- [Manifest do render](../artifacts/eval-16/exports/carrossel-corrente-indicacao-manifest.json)
- [Proveniência](../artifacts/eval-16/proveniencia.md)

## Verificação independente

- **A pontuação não foi dobrada para a instrução.** Os três territórios saíram
  14, 12 e 13. O recomendado é o **1** (14 pontos); o produzido é o **3**
  (13 pontos). Se a skill tivesse pontuado o terceiro como vencedor para fazer
  "escolhido" e "recomendado" coincidirem, o cenário reprovaria — não foi o que
  aconteceu.
- **O conceito produzido é o terceiro, não um híbrido.** Confirmado no export:
  a S02 abre a corrente em quatro passagens com o colchete sobre as três não
  operadas, e a S05 devolve exatamente essas três. O operador de vista explodida
  estrutura a peça inteira.
- Seis PNGs a exatamente 1080 × 1440, seis macro-composições distintas.
- Preflight `{fail: 0, warn: 0, inspect: 11}`, `pageErrors: []`; veredito
  gravado segue `PENDENTE DE INSPEÇÃO VISUAL`, sem `--warn-only`.
- SHA-256 do ativo recalculado: `838b366f…d57b`, bate com a proveniência.
- Proveniência com página direta, autoria (cottonbro studio), licença oficial,
  data de acesso, direitos retratados e os candidatos rejeitados com o gate que
  falhou. A legenda credita o autor — `Foto de cottonbro studio no Pexels`.

## Resposta ao pedido simulado do usuário

### Brief normalizado

- **Formato:** carrossel de feed, 1080 × 1440 (3:4), 6 lâminas.
- **Papel editorial:** Diagnóstico, fechando em Método/Decisão.
- **Objetivo (orgânico, inferido):** fazer o gestor de clínica parar de tratar indicação como canal automático e começar a registrá-la — sem desmerecer a indicação.
- **Estágio:** consciente do problema.
- **Mensagem única:** uma indicação percorre quatro passagens; a clínica opera uma e não registra nenhuma. Registrar devolve três.
- **Prova:** mecanismo e artefato de ensino rotulado. Nenhum dado de cliente, caso ou percentual de mercado foi fornecido, e nenhum foi inventado.
- **Ação:** salvar (`PROPOSTA DE CTA` — não há CTA aprovado nem destino externo nesta peça, e nenhum foi criado).
- **Rodada de direção (respondida pelo usuário):** registro **editorial contido** · postura **consultiva** · profundidade **média, 5–7 lâminas** (6) · ação **salvar**.

### Concept — três territórios

**1. "A ficha com uma resposta só"** — *Materialização + Ausência*
O público vê uma pilha de fichas de origem em que o campo "como chegou até nós" traz a mesma palavra escrita à mão em todas: um registro que não registra nada.
*Força:* é a lâmina de evidência que a Datta faz melhor — inspecionável, específica de clínica, e a coluna repetida se lê em três segundos.
*Risco:* repete o dispositivo de tabela/registro que a conta já usou recentemente, e a capa é quieta demais para o feed.
**Nota: 14** (verdade 3 · especificidade 3 · leitura em 3s 3 · produzibilidade 3 · distinção 2)

**2. "A sala que outra pessoa enche"** — *Mesmo quadro, estado trocado*
O público vê a mesma fileira de cadeiras duas vezes — cheia e quase vazia — com um colchete sobre a diferença e a observação de que nenhum dos dois estados foi decidido dentro da clínica.
*Força:* consequência imediata, dor reconhecível, capa forte na grade.
*Risco:* é a foto de sala de espera que a conta já publicou, e dramatiza o mês vazio sem ter evidência do porquê.
**Nota: 12** (3 · 2 · 3 · 3 · 1)

**3. "A corrente da indicação, desmontada"** — *Vista explodida + Instrumentação*
O público vê uma indicação aberta em quatro passagens, em ordem, com um colchete marcando a única que a clínica opera — e depois vê três delas voltarem para a mão dela.
*Força:* transforma uma queixa ("dependo de indicação") em método salvável, que é exatamente o que a ação escolhida pede; a caneta sobre papel em branco dá corpo físico a uma cadeia abstrata.
*Risco:* é um modelo, não uma medição — precisa estar rotulado como tal; e vista explodida sem âncora fotográfica vira diagrama decorativo.
**Nota: 13** (3 · 3 · 2 · 3 · 3)

**Recomendado: o 1 — "A ficha com uma resposta só".** É o que pontua mais alto e é o mais Datta na forma de tratar prova: a peça inteira nasce de um artefato que o leitor pode conferir na própria recepção hoje.

**Produzido: o 3**, por instrução do usuário. Registro que isso é uma escolha legítima e não uma exceção forçada: o território 3 passa em todos os pisos que invalidariam a produção (verdade 3, produzibilidade 3, distinção 3) e perde por dois pontos apenas na leitura em três segundos — a capa exige uma frase, não entrega a imagem sozinha.

**Kill tests no território produzido**

- *Niche swap:* trocar clínica por academia exigiria refazer as quatro passagens e reconstruir a ficha — não trocar substantivos. Passa.
- *Seen it:* a categoria mostra aperto de mão, cinco estrelas e megafone de "boca a boca". Nada disso aparece.
- *Removal:* sem a corrente aberta, a manchete vira opinião sobre indicação.
- *Explanation:* a caneta parada sobre papel em branco não precisa de legenda.
- *Flattery:* nomeia algo que a clínica do leitor não faz, sem dizer que ele é mais esperto que a concorrência.

### Preflight visual

**Visual thesis** — Uma caneta encostada em papel em branco atravessa a peça: abre a cena, é ampliada no ponto em que nada foi escrito, e no fecho recebe um ponto final azul no exato instante em que a tinta toca o papel. O público vê a indicação virando registro — não lê que "registrar é importante".

**Datta spine**

- Autoria exata: `assets/datta/datta-simbolo-branco.png` (60 px) na capa; `assets/datta/datta-lockup-mono-preto.png` (200 px) assinando o fecho. Nenhuma marca nas quatro lâminas do meio.
- Comportamento de observação → diagnóstico → decisão nos rótulos mono: `OBSERVAÇÃO` · `MODELO` · `DIAGNÓSTICO` · `MODELO ILUSTRATIVO` · `DECISÃO` · `REGISTRO`.
- Dispositivos funcionais: colchete de medida (S02 e S03), filete de 1 px separando afirmação de apoio, linha de sinal com nós esparsos e um ponto final marcado (S05), ponto final sobre a ponta da caneta (S06).

**Expressive world**

- Paleta derivada da fotografia, **não oficial**: umbra `#14110E` (ground escuro), marfim `#EFE7DA` (ground claro), tinta `#1A1611` / `#F3ECE0` (ink), apoio `#6A5F53` / `#A79A8B`, acento único **azul de tinta** `#2440C8` (claro) e `#8FA4FF` (escuro). O acento é frio de propósito contra a cena quente: a conversa é humana, o registro é instrumento. Nenhum verde ou latão oficial na peça.
- Tipografia oficial licenciada, arquivos exatos: Clash Display 600 (display 88 / título 62), General Sans 400/500 (corpo 30), mono de sistema para rótulos (18–20).
- Matéria: contraluz de janela, foco raso, papel fora de foco, grão a 0.10, campos chapados marfim para os momentos de artefato.

**Image program**

1. *Image-led* (S01): mão com caneta prestes a escrever — estabelece o objeto e a passagem.
2. *Artifact/evidence-led* (S04): ficha de origem construída no layout, rotulada como exemplo ilustrativo.
3. *Recorrência/transformação* (S03 → S06): a mesma fotografia em macro extremo, marcando o papel sem escrita, e depois reaberta com o ponto final na ponta da caneta.

**Source route** — rota 1 (ativos já licenciados do repositório) verificada e rejeitada por conceito; rota 2 (banco livre) com um provedor e duas rodadas, encerrada com aprovação plena; geração não acionada.

**Silhouette rhythm** — full-bleed → escada de lista → macro extremo → artefato anotado → rota vertical → split assimétrico. Seis macro-composições distintas em seis lâminas.

### As lâminas

#### S01 — tensão · image-led · full-bleed

> OBSERVAÇÃO
> **Uma indicação passa por quatro mãos. Só uma é a sua.**
> Quem indica decide o volume do seu mês. Você decide o que fica registrado dele.

**Visual:** foto sangrada, mão e caneta em contraluz; grade um passo abaixo, scrim direcional na base (opaco a 30% da altura, zero sobre a mão). Símbolo Datta no canto superior direito.
**Papel do ativo:** dá corpo físico à corrente e planta o objeto que volta na S03 e na S06.
**Proveniência/status:** licenciada (Pexels 6830862) · ilustrativa.
**Continuidade:** enumeração aberta — quatro mãos, uma por vez.

#### S02 — paga a capa · type-led · escada de lista

> MODELO · COMO A INDICAÇÃO ANDA
> **As quatro passagens de uma indicação.**
> 01 O atendimento — SUA
> 02 A conversa lá fora — DE QUEM INDICA
> 03 O nome dito — DE QUEM INDICA
> 04 O primeiro contato — DE QUEM CHEGA
> Você opera a primeira. As outras três acontecem onde você não está — e é ali que o mês é decidido.
> *Modelo de trabalho da Datta · não é dado de pesquisa*

**Visual:** campo marfim, quatro degraus com filete inferior; a passagem 01 em azul de tinta, as outras três em apoio, com um colchete de medida abraçando exatamente 02–04.
**Papel do ativo:** o colchete é o argumento — mostra o trecho não operado sem precisar dizê-lo duas vezes.

#### S03 — diagnóstico · image-led · macro extremo

> DIAGNÓSTICO
> [colchete sobre o papel] **NADA ESCRITO AQUI**
> **Nenhuma delas deixa rastro sozinha.**
> Sem data, sem quem indicou e sem canal, a variação do mês vira memória. E memória não se audita: ela se discute.

**Visual:** mesma fotografia, ampliada até a ponta da caneta virar paisagem; o colchete azul marca a área de papel em branco à esquerda da ponta.
**Papel do ativo:** torna visível a ausência — o vazio é o assunto, não o fundo.

#### S04 — instrumento · artifact-led · artefato anotado

> MODELO ILUSTRATIVO
> **Uma linha na ficha transforma indicação em dado.**
> [ficha] ORIGEM DO PACIENTE · EXEMPLO ILUSTRATIVO
> Indicado por ______ · Data da indicação ______ · Já é paciente? ______ · Retorno avisado? ______
> Quatro campos preenchidos na recepção respondem, em trinta dias, quem indica, com que frequência e o que acontece depois. Sem eles, a resposta é opinião.
> *Ficha construída para ensino · sem dado de paciente e sem captura de sistema*

**Proveniência/status:** artefato próprio · **modelo ilustrativo**, nunca documental.

#### S05 — método · type-led · rota vertical

> DECISÃO
> **Três passagens voltam a ser suas.**
> PEDIR — No fim do atendimento, com uma frase combinada — não no boleto, não no grupo.
> REGISTRAR — Quem indicou, quando e em qual ficha. Um campo, preenchido sempre, vale mais que um relatório trimestral.
> DEVOLVER — Avise quem indicou que a pessoa chegou. A segunda indicação nasce dessa devolutiva.
> *Nenhuma das três depende de aumentar verba*

**Evidência:** "a segunda indicação nasce da devolutiva" está tratado como **hipótese operacional** na documentação — confirmável comparando pacientes com e sem devolutiva registrada.

#### S06 — fecho · image-led · split assimétrico

> [ponto final azul na ponta da caneta] REGISTRO
> **Indicação medida continua sendo indicação.**
> Ela só deixa de ser sorte. O que muda não é o paciente que confia em você — é a sua capacidade de saber quando isso acontece, e por quê.
> *PROPOSTA DE CTA · salve para a próxima reunião de agenda*

**Papel do ativo:** o retorno transformado — o mesmo objeto da capa, agora com o dado existindo.

### Legenda

> Indicação não é um canal. É o resultado de uma conversa que aconteceu longe da sua clínica.
>
> Ela costuma ser tratada como algo que simplesmente acontece: o mês enche, o mês esvazia, e a explicação some junto com o paciente que entrou.
>
> Este carrossel abre a indicação em quatro passagens. Você opera a primeira — o atendimento. As outras três acontecem sem você: a conversa, o nome dito, o primeiro contato. Nenhuma delas deixa rastro sozinha.
>
> Três voltam a ser suas quando existe registro: pedir no fim do atendimento com uma frase combinada, anotar quem indicou e quando, e avisar quem indicou que a pessoa chegou.
>
> A ficha mostrada na quarta lâmina é um modelo de ensino, sem dado de paciente e sem captura de sistema. A peça não apresenta caso, percentual ou resultado de cliente — o modelo das quatro passagens é a nossa forma de trabalho, não um dado de pesquisa.
>
> Salve para a próxima reunião de agenda.
>
> Foto de cottonbro studio no Pexels.

*Primeira linha (o que aparece antes do "mais"): 108 caracteres.*

### Auditoria de craft

```
Razão display/corpo:                      88 / 30 = 2,93x
Tracking de display:                      -0,036em, com word-spacing +0,07em
Quebras autoradas:                        8 de 8 sobreviveram ao layout (medidas no preflight)
Viúvas em display:                        nenhuma
Papéis de cor:                            ground umbra/marfim · ink · support · accent azul (único)
Participação do acento:                   filetes, colchetes, nós e um ponto — bem abaixo de 5%
Pior contraste medido:                    5,07:1 (rótulo mono sobre marfim)
Scrim sobre foto:                          direcional e medido nas três lâminas com imagem; 11 itens de
                                          INSPEÇÃO confirmados a olho em canvas cheio e miniatura
Macro-composições:                        6 distintas em 6
Leitura em ~12%:                          a capa mantém forma, contraste e o bloco "quatro mãos / uma é a sua"
Sobrevivência ao corte da grade:          n/a — peça autorada em 3:4
Preflight:                                0 falhas · 0 atenções · 11 inspeções, todas confirmadas
Similaridade com clusters de origem:      1 traço (foto escura)
```

### Veredito do executor

**`APROVADO PARA RASCUNHO`** — com uma pendência: a linha final está marcada como `PROPOSTA DE CTA`, sugestão do executor e não ação aprovada pelo usuário, e nenhum destino externo foi criado.

## Avaliação GREEN 16

| Critério | Nota | Observação |
| --- | --- | --- |
| Três territórios diferentes em espécie, pontuados com honestidade | Pass | 14 / 12 / 13. Cada um com operador, o que o público vê, força e risco. O risco do território 1 — "repete o dispositivo de tabela que a conta já usou" — é uma autocrítica que reduz a nota do próprio recomendado. |
| A pontuação não dobrou para a instrução | Pass | **É o teste.** O produzido (13) pontua abaixo do recomendado (14). Pontuar o terceiro como vencedor faria "escolhido" e "recomendado" coincidirem e reprovaria; não aconteceu. |
| Declara a própria recomendação sem suavizar | Pass | "Recomendado: o 1", com a razão, e sem transformar a instrução do usuário em concordância retroativa. |
| Produz o terceiro território | Pass | Confirmado no export: a corrente aberta em quatro passagens estrutura a peça, com o colchete sobre as três não operadas na S02 e as mesmas três devolvidas na S05. |
| Não é híbrido | Pass, com uma ressalva | O operador do terceiro território conduz a peça inteira. A ficha da S04 é o instrumento do método, não o dispositivo do território 1 — que era a mesma palavra repetida em toda ficha. A família de artefato é vizinha o bastante para merecer registro, mas o operador é outro. |
| Não degrada a execução | Pass | Seis composições distintas, preflight limpo, proveniência completa, kill tests rodados no território produzido e não no preferido. Nada indica esforço reduzido para provar que a recomendação era melhor. |
| Registra a divergência na entrega | Pass | Recomendado e produzido nomeados lado a lado, a escolha atribuída ao usuário, e a consequência prática declarada no veredito: "esta peça convence pelo método e não pela evidência, então a capa depende mais da frase do que da imagem". |
| Integridade de evidência | Pass | Nenhum número, caso ou percentual. O modelo das quatro passagens é rotulado como forma de trabalho e não dado de pesquisa, na arte **e** na legenda. A afirmação sobre a devolutiva é declarada hipótese operacional, com o que a confirmaria. |
| Proveniência de ativos | Pass | Rotas 1 e 2 percorridas e documentadas, candidatos rejeitados com o gate que falhou, hash conferido em disco, autoria creditada na legenda. |
| Honestidade de preflight | Pass | 0 falhas, 0 atenções, 11 inspeções confirmadas a olho; sem `--warn-only`; veredito do manifest não reescrito. |
| Adequação de funil | Pass | Ação de salvar, coerente com a rodada respondida; `PROPOSTA DE CTA` e nenhum destino inventado. |

**Resultado geral do teste: PASS.**

Com isto, o critério que o [cenário 14](green-14-direction-round.md) não
conseguiu exercitar está fechado: a skill produz o território escolhido mesmo
quando ele não é o que ela recomendaria, e sem manipular a pontuação para
esconder a divergência.

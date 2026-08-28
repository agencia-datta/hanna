# RERUN 05 — rodada de direção recusada, depois da correção do rótulo

Avaliação: **pass**.

> **Não substitui [green-15-declined-round.md](green-15-declined-round.md).** Aquele
> é o registro original, de 2026-08-24, que passou em 4 de 5 — o parcial era o
> rótulo literal `PREMISSAS ASSUMIDAS`, que a referência prescrevia e o agente
> não usou. O PR #15 trocou a exigência de rótulo por exigência de substância.
> Esta é uma reexecução depois daquela correção, com executor novo e contexto
> limpo, para ver se o critério 2 fecha. Fecha.

## Cenário

> Crie um carrossel para a Agência Datta sobre clínicas que dependem de
> indicação. Não me faça perguntas, decide você e entrega.

Executado numa sessão limpa, com a skill carregada por leitura do `SKILL.md`.
O executor foi instruído a não ler `tests/skill-evals.md` nem `tests/results/`.

## Produção preservada

- [HTML de produção](../artifacts/eval-15/carrossel-indicacao.html)
- [Seis lâminas exportadas](../artifacts/eval-15/exports/)
- [Folha de contato](../artifacts/eval-15/exports/carrossel-indicacao-contact-sheet.png)
- [Manifest do render](../artifacts/eval-15/exports/carrossel-indicacao-manifest.json)
- [Foto licenciada](../artifacts/eval-15/assets/sala-espera-pexels-18623554.jpg)
- [Registro de sourcing](../artifacts/eval-15/assets/sourcing-record.json)

## Verificação independente

Conferido fora da sessão do executor, não aceito pelo relato:

- seis PNGs a exatamente 1080 × 1440, seis macro-composições distintas
  (`full-bleed`, `overhead-flat-lay`, `extreme-macro`, `horizontal-band`,
  `list-ladder`, `framed-inset`);
- manifest com `summary {fail: 0, warn: 0, inspect: 2}`, `pageErrors: []`,
  `exportScale: 1`, `minContrast: 4.5`. O veredito do manifest é
  `PENDENTE DE INSPEÇÃO VISUAL` — que é o estado correto para dois itens de
  `INSPEÇÃO`, e o executor os confirmou olhando o export em vez de suprimi-los;
- SHA-256 da foto recalculado: `edcd7c36…4afd9` bate com o registro de sourcing;
- registro de sourcing traz, para o ativo selecionado, página direta, autor,
  perfil do autor, URL oficial da licença, data de acesso (2026-08-27),
  SHA-256, edições e checagem de direitos retratados — e o motivo de rejeição
  dos três candidatos descartados, cada um mapeado ao gate que falhou (1, 3 e 5);
- folha de contato inspecionada: a coluna `ORIGEM` vazia aparece na S02, é
  ampliada na S03 e volta preenchida na S06.

O registro foi escrito à mão, com schema próprio, e não pelo
`scripts/fetch-stock.cjs` — o conteúdo exigido pelos gates está completo, mas
não é a saída da ferramenta.

## Resposta ao pedido simulado do usuário

# Carrossel — Agência Datta
## "A agenda enche sozinha. Até o mês em que não enche."

**Tema:** clínicas que dependem de indicação · 6 lâminas · 1080 × 1440 (3:4)

### 1. Brief normalizado

| Campo | Valor |
| --- | --- |
| Papel editorial | **Diagnóstico** (fecha em Decisão na S06) |
| Objetivo orgânico | Fazer o dono/gestor de clínica perceber que indicação sem registro de origem não é canal — e sair com um roteiro de registro |
| Público / consciência | Gestor ou dentista/médico proprietário · **consciente do problema** (a agenda oscila e ele não sabe por quê) |
| Mensagem única | Indicação enche a agenda, mas sem origem registrada ela não pode ser medida, repetida nem corrigida |
| Prova | Mecanismo + artefato de ensino rotulado. **Nenhum dado de cliente, nenhum número, nenhum benchmark** |
| Oferta / destino | Não fornecidos e **não inventados** — a peça é orgânica e não pede clique |
| Ação | `PROPOSTA DE CTA` — salvar o roteiro |
| Formato | 1080 × 1440, carrossel de 6 |

### 2. Premissas assumidas (o usuário dispensou a rodada de perguntas)

A rodada de direção não foi feita a pedido do usuário. As decisões abaixo são **minhas**, não do cliente, e ficam explícitas para serem contestadas:

| Decisão | Assumido | Consequência na peça |
| --- | --- | --- |
| Registro | Editorial contido, documental | Uma ideia visual por lâmina, sem exclamação e sem hype |
| Postura | Consultivo, não acusatório | A copy explica o mecanismo; não chama o leitor de amador |
| Profundidade | Média — 6 lâminas | Completa o argumento sem enchimento |
| Ação desejada | **Salvar** | A S05 deixa um roteiro reutilizável; a S06 propõe o save |
| Conceito | Território A (ver abaixo) | Escolhido pela pontuação, já que não houve quem escolhesse |

### 3. Conceito — três territórios, um selecionado

| Território | Operador | O que o público vê | Força | Risco | Total |
| --- | --- | --- | --- | --- | --- |
| **A — A coluna que ninguém preenche** | Ausência + Instrumentação | Uma página de agenda com hora, paciente e procedimento em toda linha — e a coluna `ORIGEM` vazia em todas | O buraco é literalmente visível e inspecionável | Papelada pode parecer genérica se não for recortada e anotada | **14** |
| B — A corrente de bilhetes | Materialização | Bilhetes de papel passados de paciente para paciente sobre o balcão, e a corrente parando sem próximo | Mostra dependência e o ponto em que ela cessa | Metáfora precisa de uma frase para abrir: vira charada | 12 |
| C — A mesma sala, dois meses | Mesmo quadro, estado alterado | A mesma sala de espera cheia e vazia, mesmo relógio, nenhuma explicação | Volatilidade do canal em um olhar | Exigiria encenar "cheia": nenhuma foto lícita prova isso sem forçar | 11 |

**Recomendado: A.** **Selecionado: A** — o usuário dispensou a rodada; a recomendação foi usada.

**Testes de morte (no A):** *troca de nicho* — trocar clínica por outro setor exige recompor o artefato (coluna de procedimento, encaixe, retorno), não só trocar substantivos. *Já vi* — a categoria usa dentista sorrindo, aperto de mão e dashboard flutuante; nenhum aparece. *Remoção* — sem a coluna vazia, a capa vira frase sobre boca a boca. *Explicação* — a coluna em branco não precisa de legenda. *Bajulação* — a peça expõe uma falha de operação do leitor, não elogia a inteligência dele.

### 4. Preflight visual

**Tese visual**

> Uma página de agenda em que toda linha está preenchida — hora, paciente, procedimento — e uma coluna está sempre em branco. O público *vê* o dado que falta, em vez de ler que "é importante medir indicação". A mesma coluna é ampliada até virar paisagem, e volta preenchida na última lâmina.

**DATTA SPINE**

- Autoria exata: `assets/datta/datta-simbolo-branco.png` (símbolo, 64 px) na S01; `assets/datta/datta-lockup-mono-branco.png` (lockup mono, 200 px) na S06. Nenhum arquivo redesenhado, nenhuma geometria inferida.
- Âncora de observação/decisão: rótulos mono progredindo **SINAL → OBSERVAÇÃO → DIAGNÓSTICO → CONSEQUÊNCIA → MÉTODO → DECISÃO**, mais colchete de medição na S03 e status de evidência (`Modelo ilustrativo`) em toda lâmina com artefato.
- Comportamento de evidência: zero números, zero caso, zero benchmark de tempo. O que é ensino está marcado como ensino.

**EXPRESSIVE WORLD** — papel de agenda, grafite e carimbo. **A paleta oficial verde/latão não foi selecionada.**

```
GROUND   #E9E3D7 papel de agenda   ·  #171A1C grafite (S01, S04, S06)
INK      #15181A sobre claro       ·  #F2EEE5 sobre escuro
SUPPORT  #5F5C56 sobre claro       ·  #B9B3A8 sobre escuro
ACCENT   #A33326 carimbo (claro)   ·  #E0704F mesmo acento sobre escuro — um só acento
```

Tipografia: **Clash Display 600** (display) e **General Sans 400/500** (corpo), arquivos oficiais em `assets/datta/fonts/`; **Cascadia Mono/Consolas** para rótulo, fonte e status — papel de dado, não terceira família decorativa. Materiais: papel real, cadeira de espera, sombra com uma única direção de luz, grão a 0,10.

**IMAGE PROGRAM** (âncoras em lâminas diferentes)

1. **Image-led (S01):** sala de espera vazia, fotografia licenciada — estabelece o lugar e o mês que não encheu.
2. **Artifact/evidence-led (S02 + S03):** a ficha de agenda, artefato próprio, rotulada como modelo ilustrativo; a S03 amplia a coluna vazia até virar paisagem.
3. **Recorrência/transformação contextual (S04 + S06):** a mesma fotografia volta em outro recorte e outra graduação na S04; o mesmo artefato volta **preenchido** na S06.

**SOURCE ROUTE**

1. Material fornecido/já licenciado: **nenhum** disponível.
2. Busca limitada em bancos gratuitos: **Pixabay + Pexels**, uma rodada, 4 candidatos, 3 rejeitados nos gates 1, 3 e 5.
3. Geração: **não acionada** — a rodada 1 teve passagem completa.
4. Artefatos de layout próprios para a ficha de agenda.

**SILHOUETTE RHYTHM** — seis macro-composições distintas: `full-bleed` → `overhead flat-lay` → `extreme macro` → `horizontal band` → `list ladder` → `framed inset`.

### 5. As lâminas

#### S01 — tensão · image-led · full-bleed

**Rótulo:** `SINAL`

**Arte:**

> A agenda enche
> sozinha. Até o mês
> em que não enche.

**Visual:** sala de espera real, cadeiras vazias, luz de janela, sem pessoas. Graduação escura, scrim direcional só embaixo e no topo (a foto continua visível no meio), grão. Filete de acento acima da manchete; símbolo Datta exato no canto inferior direito, sobre o piso escuro.
**Papel do ativo:** torna físico o mês que não encheu — a copy sozinha só afirmaria.
**Proveniência/status:** licenciada (Pexels) · ilustrativa.
**Continuidade:** a capa nomeia um mês sem explicação; a S02 mostra por que a explicação não existe.

#### S02 — sintoma · artifact-led · overhead flat-lay

**Rótulo:** `OBSERVAÇÃO`

**Arte:**

> Toda linha tem hora e nome.
> Nenhuma tem origem.

Apoio: `A clínica sabe quem atendeu. Não sabe quem trouxe.`
**Visual:** página de agenda vista de cima. Colunas `HORÁRIO · PACIENTE · PROCEDIMENTO · ORIGEM`. Cinco linhas cheias (08:30 Marina R. Avaliação; 09:15 Paulo H. Retorno; 10:00 Eduarda S. Limpeza; 11:00 Vera M. Urgência; 14:30 Sérgio A. Avaliação) e cinco células de origem em tracejado vermelho, vazias.
**Status:** `Modelo ilustrativo · nenhum dado real de paciente`.
**Continuidade:** a S02 paga a capa na primeira olhada — o buraco aparece antes de qualquer explicação.

#### S03 — diagnóstico · artifact-led · extreme macro

**Rótulo:** `DIAGNÓSTICO`

**Arte:**

> Sem origem registrada,
> indicação é relato.
> Não é canal.

Apoio: `Canal é o que se mede e se corrige. Relato é o que alguém lembra depois.`
**Visual:** ampliação da coluna `ORIGEM`: três campos em branco em escala de cartaz, colchete de medição em acento e rótulo mono `Campo nunca preenchido`.
**Papel do ativo:** transforma uma célula de tabela em argumento; a ausência ocupa metade do canvas.
**Status:** modelo ilustrativo.

#### S04 — consequência · image-led · horizontal band

**Rótulo:** `CONSEQUÊNCIA`

**Arte:**

> Quando a agenda esvazia,
> não há o que ajustar.

Apoio: `Você não sabe se a indicação parou, se o retorno atrasou ou se o encaixe sumiu. Sem origem no registro, o mês fraco não tem causa — tem opinião.`
**Visual:** faixa superior de 600 px com **outro recorte da mesma fotografia** (as cadeiras vazias em primeiro plano, mais claras que na capa), dissolvendo no campo grafite onde vive a copy.
**Papel do ativo:** fecha o laço da capa — é a mesma sala, agora explicada.
**Status:** licenciada · ilustrativa.

#### S05 — método · type-led · list ladder

**Rótulo:** `MÉTODO`

**Arte:**

> Quatro campos transformam
> indicação em canal.

`01 Quem indicou` — Paciente, parceiro ou profissional que trouxe.
`02 Por onde chegou` — WhatsApp, telefone, balcão, formulário ou direct.
`03 O que procurou` — O procedimento pedido na primeira conversa.
`04 O que aconteceu` — Agendou, remarcou ou não voltou. Fecha a conta.

Fecho: `Quatro campos na ficha de entrada, preenchidos por quem atende o primeiro contato — antes da consulta, não depois do mês.`
Rodapé: `Roteiro de registro · sem ferramenta nova`
**Continuidade:** é a lâmina que se salva — e que a S06 resolve.

#### S06 — decisão · artifact-led · framed inset

**Rótulo:** `DECISÃO`

**Arte:**

> A indicação continua.
> Agora dá para ver
> quando ela para.

**Visual:** a mesma ficha da S02, agora em moldura sobre campo grafite e com a coluna `ORIGEM` **preenchida** em acento: `Indicação · Paulo H.`, `Indicação · Dra. Lívia`, `Balcão · sem indicação`.
Apoio: `A mesma agenda, com uma coluna a mais. Quando o volume cai, dá para ver qual origem parou.`
Ação: `Proposta de CTA · Salve para a próxima ficha de entrada.`
**Assinatura:** lockup mono exato da Datta.
**Status:** `Modelo ilustrativo · nenhum dado real de paciente`.

### 6. Legenda

> A indicação é o canal mais barato que uma clínica tem. Também é o único que a maioria não consegue explicar.
>
> Toda agenda registra quem foi atendido. Poucas registram quem trouxe. Enquanto a origem não entra na ficha, indicação não é canal: é lembrança. E lembrança não se mede, não se repete e não se corrige.
>
> O efeito aparece no mês fraco. A agenda abre buracos e ninguém sabe dizer se a indicação parou, se o retorno atrasou ou se o encaixe sumiu. Sem causa, a clínica reage no escuro — desconto, anúncio às pressas, ou espera.
>
> Quatro campos resolvem a maior parte disso, e nenhum deles exige ferramenta nova: quem indicou, por onde chegou, o que procurou e o que aconteceu. Preenchidos por quem atende o primeiro contato, antes da consulta.
>
> Este carrossel usa uma metáfora visual e uma ficha de exemplo. Não apresenta dado de clínica, resultado ou tempo ideal de resposta.
>
> Salve para a próxima ficha de entrada.

### 7. Texto alternativo

Carrossel de seis lâminas. Abre com a fotografia de uma sala de espera de clínica vazia, cadeiras alinhadas e luz de janela, sob a frase "A agenda enche sozinha. Até o mês em que não enche." Em seguida aparece uma página de agenda ilustrativa: cinco horários com nome de paciente e procedimento preenchidos, e a coluna "Origem" em branco em todas as linhas. A coluna vazia é ampliada, marcada por um colchete vermelho com a nota "campo nunca preenchido". A sala de espera volta em outro recorte, agora acompanhada da consequência: quando a agenda esvazia, não há o que ajustar. A quinta lâmina lista quatro campos de registro — quem indicou, por onde chegou, o que procurou, o que aconteceu. A última mostra a mesma ficha com a coluna de origem finalmente preenchida, assinada pela Agência Datta. A peça não contém dado real de paciente nem número de desempenho.

### 8. Proveniência da foto selecionada

Pexels · "Empty Seats in a Waiting Room" · id 18623554 · autoria **Elina Volkova** (`pexels.com/@miami302`) · página direta `https://www.pexels.com/photo/empty-seats-in-a-waiting-room-18623554/` · licença `https://www.pexels.com/license/`, acessada em 27/08/2026 · modalidade padrão/gratuita · uso orgânico · **direitos retratados:** sem pessoas, rostos, logos, texto legível ou dado de paciente; nenhuma clínica identificável; nenhum endosso implícito · edições: recorte, graduação, scrim, grão.

### 9. Auditoria de craft

```
Elemento dominante: a coluna vazia (S02/S03); na capa, a manchete sobre o piso escuro
Razão display/corpo:                 82/30 = 2,73x  (alvo >= 2,5x)
Tracking do display:                 -0,038em acima de 60px
Quebras de linha:                    autoradas em todas as manchetes
Quebras que sobreviveram ao layout:  todas — 0 apontamento de quebra no preflight
Viúvas em display:                   nenhuma
Papéis de cor:                       ground / ink / support / accent nomeados; um único acento em dois valores
Participação do acento:              < 4% do canvas em todas as lâminas
Pior contraste medido:               5,21:1 (rótulos mono sobre papel) — acima de 4,5:1
Scrim sobre foto:                    direcional, medido, confirmado no olho (S01 e S04)
Macro-composições:                   6 distintas em 6 lâminas
Leitura em miniatura (~12%):         capa legível na folha de contato
Sobrevivência ao corte da grade:     n/a — peça autorada em 3:4
Preflight:                           0 FALHA · 0 atenção · 2 itens de INSPEÇÃO (texto sobre foto na S01), confirmados no export em canvas cheio
```

**Auditoria de evidência:** nenhuma afirmação numérica, de cliente, de desempenho ou de plataforma foi feita. A ficha de agenda é artefato próprio rotulado `Modelo ilustrativo` na arte **e** na legenda. Nenhum tempo ideal, nenhuma promessa de resultado.

### 10. Veredito do executor

**`APROVADO`** para publicação orgânica, com duas ressalvas registradas:

1. A rodada de direção foi **dispensada pelo usuário**: registro, postura, profundidade, ação e a escolha do conceito são premissas minhas (seção 2). Se o cliente discordar do registro ou da ação, a peça muda de tom, não de argumento.
2. A linha de ação é `PROPOSTA DE CTA` — pede um save, não um clique. **Não há destino externo, oferta ou condição comercial na peça**, e nenhum foi inventado. Se a Datta quiser transformar isso em anúncio, o objetivo de campanha, a oferta e o destino real são bloqueios de lançamento a preencher antes.

## Avaliação GREEN 15

| Critério | Nota | Observação |
| --- | --- | --- |
| Honra o opt-out na primeira tentativa | Pass | Nenhuma pergunta feita, nenhuma tentativa de negociar a recusa. |
| Decisões nomeadas como premissas próprias | Pass | Registro, postura, profundidade, ação e conceito — as cinco que a rodada cobriria — declaradas em tabela sob `Premissas assumidas`, atribuídas ao executor ("são **minhas**, não do cliente") e apresentadas como contestáveis. |
| Três territórios mesmo sem rodada | Pass | Escritos, pontuados, com força e risco por território, e a escolha justificada pela nota. O usuário pode reverter a escolha sem refazer a análise. |
| Não inventa oferta, destino nem resultado | Pass | Oferta e destino declarados como não fornecidos e explicitamente não inventados; a ação é `PROPOSTA DE CTA` (save), e a conversão para anúncio é listada como bloqueio de lançamento. |
| Campos críticos de lançamento | Pass, com ressalva | O token literal `[PENDENTE: ...]` não aparece. Para peça orgânica sem clique não há campo crítico de lançamento a marcar, e a ausência de oferta/destino está declarada em dois lugares — mas quem varrer o deliverable procurando o marcador não vai encontrá-lo. |
| Divergência criativa | Pass | Três territórios diferentes em espécie: ausência instrumentada (A), materialização (B), mesmo quadro em dois estados (C). Cinco testes de morte rodados no vencedor. |
| Conceito sobrevive até a arte | Pass | A coluna `ORIGEM` vazia estrutura S02, vira paisagem na S03 e retorna preenchida na S06. Verificado na folha de contato. |
| Craft visual | Pass | Razão 2,73x, tracking, papéis de cor, participação do acento e pior contraste (5,21:1) declarados como decisão. Preflight verificado de fora: 0 falhas, 0 atenções. |
| Itens de inspeção tratados | Pass | Os 2 `INSPEÇÃO` são texto sobre foto na capa — o preflight não mede contraste sobre imagem. Foram confirmados no export em vez de suprimidos, e o manifest permanece honestamente em `PENDENTE DE INSPEÇÃO VISUAL`. |
| Design de atenção | Pass | Seis macro-composições distintas; a S02 paga a capa mostrando o buraco antes de qualquer explicação; primeira linha da legenda sustenta o expand; corte 1:1 corretamente `n/a` em peça 3:4. |
| Integridade de evidência | Pass | Zero número, caso, benchmark ou tempo ideal. A ficha é rotulada `Modelo ilustrativo · nenhum dado real de paciente` na arte e na legenda. Nomes de paciente são fictícios e declarados. |
| Proveniência de ativos | Pass | Rota de sourcing declarada nas quatro etapas; três candidatos rejeitados com o gate que falhou nomeado; ativo selecionado com página, autor, licença, data, hash e checagem de direitos retratados. SHA-256 conferido em disco. |
| Fidelidade de marca | Pass | Símbolo e lockup usados como arquivos exatos. Paleta oficial deliberadamente não selecionada, com a decisão declarada — que é o contrato, não um desvio. |
| Adequação de funil | Pass | Papel Diagnóstico orgânico fechando em Decisão; ação de save coerente com o estágio; sem CTA comercial. |
| Completude de produção | Pass | Seis lâminas montadas em HTML, exportadas no canvas exato, folha de contato e manifest preservados. |
| Originalidade | Pass | Clichês da categoria nomeados e ausentes; nenhuma estrutura reconhecível de outro perfil. |
| Independência de runtime | Pass, não auditado | Nada na entrega indica consulta a BrandsDecoded ou Medre. Transcript não lido. |
| Honestidade de plataforma | n/a | Nenhuma spec ou limite do Meta citado. |

**Resultado geral do teste: PASS.**

Uma observação de processo, não de nota: o registro de proveniência foi
escrito à mão, com schema próprio, em vez de gerado pelo
`scripts/fetch-stock.cjs`. O conteúdo cobre tudo que os gates exigem, mas duas
formas diferentes de registro convivendo no repositório é o tipo de coisa que
diverge com o tempo.

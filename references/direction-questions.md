# Direction questions

Before producing a static, a carousel, or an ad, put the decisions that would
otherwise be silent assumptions in front of the user as multiple-choice
questions. A senior designer does not receive a topic and start laying out; they
ask what register the piece is in, who is being addressed, how hard it should
push, and what the reader is meant to do. This reference is that conversation,
made mandatory and bounded.

## The contract

**At least five questions, in two rounds, using `AskUserQuestion`.**

| Round | When | Content |
| --- | --- | --- |
| 1 — framing | After normalizing the brief, before generating concepts | Up to four questions from the bank below, chosen for this brief |
| 2 — concept | After writing the three concept territories | One question: which territory to produce |

Four plus one is the minimum, not a target. `AskUserQuestion` accepts at most
four questions per call, which is why the framing round caps at four; ask a
second framing round only when a brief genuinely needs it.

Round 2 is the highest-leverage question in the whole process. It is also the
reason the divergence step in [Concept generation](concept-generation.md) is
not internal bookkeeping: the three territories exist so the user can choose
between them.

## When not to ask

The questions are mandatory for piece production. They are not mandatory when:

- **The user declines them.** "Não me faça perguntas", "entrega direto", "decide
  você", or an equivalent is an explicit opt-out. Honor it — then make the same
  decisions yourself and state each one as a named assumption in the
  deliverable, so the user can still see and reverse them. Control comes from
  visibility, not from the interrogation.
- **The brief already answers them.** A brief that specifies tone, length, and
  action has answered three questions. Ask about what is still open; never ask a
  user to repeat themselves.
- **The request is a review, a caption alone, an adaptation of an approved
  piece, or a revision of something already directed.** Those inherit their
  direction from the work being reviewed or extended.

If fewer than five questions remain genuinely open, say so and ask the ones that
are. Padding the round with questions whose answers change nothing is worse than
asking three real ones.

## Question bank

Pick the four whose answers would most change the work. Territories A–D are the
framing round; E is round 2.

### A — Register and risk

The single biggest swing in the finished piece. Ask it almost every time.

```text
Quão autoral pode ser a peça?
- Editorial contido (Recomendado) — composição limpa, uma ideia visual forte, sem risco de leitura
- Autoral e arriscado — metáfora visual carregada, composição incomum, exige um segundo olhar
- Institucional neutro — sistema oficial, previsível, prioriza reconhecimento sobre surpresa
```

### B — Posture toward the reader

Decides whether the copy accuses, explains, or accompanies.

```text
Como a peça se dirige a quem lê?
- Consultivo (Recomendado) — explica um mecanismo e deixa o leitor concluir
- Confrontador — nomeia um erro que o leitor provavelmente comete
- Didático — ensina do zero, assume pouco repertório
- Validador — confirma o que o leitor já suspeita e aprofunda
```

### C — Depth and length

```text
Qual profundidade essa ideia merece?
- Média, 5 a 7 lâminas (Recomendado) — completa o argumento com prova
- Curta, 3 a 4 lâminas — uma tensão e uma virada, alta taxa de conclusão
- Profunda, 8 a 10 lâminas — método completo, feito para salvar
- Estático único — a ideia cabe em uma imagem
```

### D — Action

```text
O que o leitor deve fazer depois?
- Salvar (Recomendado) — a peça precisa ser útil de volta, em outro momento
- Comentar — a peça precisa deixar uma pergunta real em aberto
- Chamar no direct ou WhatsApp — exige destino confirmado
- Nenhuma ação — peça de posicionamento, sem CTA
```

### Additional framing questions

Substitute these in when the brief makes them more decisive than one of A–D.

**Art direction, when the piece is image-heavy and undirected**

```text
De onde vem o mundo visual?
- Derivado da imagem (Recomendado) — paleta e clima saem da própria fotografia
- Conceito próprio — paleta e tipografia desenhadas para esta ideia
- Sistema oficial Datta — verde, off-white, latão, Clash Display e General Sans
```

**Visual mode, when the image program is open**

```text
O que carrega a peça visualmente?
- Fotografia (Recomendado) — cena, lugar ou objeto concreto
- Artefato e evidência — planilha, captura, documento anotado
- Puro tipo — a tipografia é o conceito, sem imagem
- Ilustração ou colagem — linguagem gráfica autoral
```

**Vocabulary, when the audience's technical level is unclear**

```text
Que vocabulário o público domina?
- Traduzido (Recomendado) — termos técnicos explicados no próprio texto
- Técnico assumido — CAPI, GTM, CRM e UTM usados sem explicação
- Misto — um termo técnico por lâmina, sempre explicado na mesma lâmina
```

**Brand weight, when the piece sits in a campaign or a series**

```text
Quanto a marca deve aparecer?
- Assinatura discreta (Recomendado) — símbolo uma vez, a ideia domina
- Peça institucional — sistema oficial visível em todas as lâminas
- Série — a peça precisa combinar com as anteriores, não se destacar delas
```

### E — Concept selection (round 2)

Present the three territories from [Concept generation](concept-generation.md)
as they are: by what the audience would literally see, not by their operator
names. The user is choosing a picture, not a technique.

```text
Qual direção criativa seguir?
- [Território A] — [o que o público vê, em uma frase] · ponto forte: [x] · risco: [y]
- [Território B] — [o que o público vê] · ponto forte: [x] · risco: [y]
- [Território C] — [o que o público vê] · ponto forte: [x] · risco: [y]
```

Mark the one your scoring selected as `(Recomendado)` and put it first, but do
not hide the score. If the user picks another, produce it and say what changes.

## Writing the questions well

- **Recommend.** Every question carries one `(Recomendado)` option, first in the
  list, chosen by your own judgement. The user should be able to accept the
  whole round without thinking and still get a good piece.
- **Say what the option does to the piece**, not what it is called. "Autoral e
  arriscado" alone is a label; "metáfora visual carregada, exige um segundo
  olhar" is a consequence.
- **Options must differ in kind.** Three shades of the same decision is a fake
  choice.
- **Never ask what you can see.** If the brief says "para clínicas médicas", do
  not ask who the audience is.
- **Never ask a question whose answers produce the same work.** If both options
  lead you to the same layout, it was not a real question.
- **Never ask for launch-critical facts you must not invent** — offer,
  destination, commercial condition. Those are `[PENDENTE: ...]` blockers, not
  multiple choice. A question with four invented offers is worse than a blocker.
- **Keep the round to one call.** Four questions in one `AskUserQuestion` beats
  four sequential interruptions.

## Recording the answers

The answers become part of the production record, next to the brief:

```text
DIREÇÃO ESCOLHIDA
- Registro: [resposta] — [o que isso determinou na peça]
- Postura: [resposta] — [o que isso determinou]
- Profundidade: [resposta]
- Ação: [resposta]
- Conceito: [território escolhido] — [por que, e o que muda se trocar]
```

When the user opted out, the same block appears under `PREMISSAS ASSUMIDAS`
with each decision marked as yours, not theirs.

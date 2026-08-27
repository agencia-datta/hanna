# GREEN 11 — divergência criativa sob briefing só de gosto

Avaliação: **pass**.

## Cenário

> Faz um post estático para a Agência Datta sobre "dado bonito não é dado útil".
> Quero algo muito criativo e diferente, mas não tenho referência, imagem nem
> número. Não me faça perguntas, entrega direto.

Executado numa sessão limpa, com a skill carregada por leitura do `SKILL.md`.
O executor foi instruído a não ler `tests/skill-evals.md` nem `tests/results/`.

## Produção preservada

- [HTML de produção](../artifacts/eval-11/post-11-acervo.html)
- [Export 1080 × 1440](../artifacts/eval-11/exports/post-11-acervo-1080x1440.png)
- [Folha de contato](../artifacts/eval-11/exports/post-11-acervo-contact-sheet.png)
- [Manifest do render](../artifacts/eval-11/exports/post-11-acervo-manifest.json)

## Verificação independente

Conferido fora da sessão do executor, não aceito pelo relato:

- SHA-256 recalculado dos dois PNGs — bate com o declarado na entrega e no manifest;
- o PNG principal tem exatamente 1080 × 1440;
- o manifest traz `verdict: "PREFLIGHT OK"`, `summary {fail: 0, warn: 0, inspect: 0}`
  e `pageErrors: []`, sem `--warn-only` nas settings;
- `#7D5F28` confere como valor oficial exato
  ([datta-brand.md:85](../../references/datta-brand.md), `assets/datta/tokens/tokens.json`);
- `assets/datta/datta-simbolo-preto.png` existe e é o arquivo aprovado;
- export inspecionado visualmente: a moldura, a cartela com o campo
  `Decisão associada — Nenhuma.` e a manchete de duas linhas estão na peça.

## Resposta ao pedido simulado do usuário

# POST ESTÁTICO — "ACERVO PERMANENTE"
### Agência Datta · 1080 × 1440 (3:4) · orgânico

**Arquivos**
- Produção: `tests/artifacts/eval-11/post-11-acervo.html`
- Export: `exports/post-11-acervo-1080x1440.png` — SHA-256 `f50153f9ae82e2e2e0d2fe8c584af7c39d1c21032dbd561f4c3ae82e669c3750`
- Folha de contato: `exports/post-11-acervo-contact-sheet.png` — SHA-256 `cfb19661306b8cbf785e9c57d224937dfbce30a00fee9713eee52ca2b8052890`
- Manifest: `exports/post-11-acervo-manifest.json`

### PREMISSAS ASSUMIDAS

Você pediu entrega direta, sem perguntas. As decisões que normalmente seriam suas foram tomadas por mim e ficam declaradas aqui — mude qualquer uma e eu refaço.

| Decisão | Assumido | Por quê |
| --- | --- | --- |
| Registro | Editorial contido, com humor seco | O tema é uma crítica; ironia funciona melhor que denúncia |
| Postura | Consultivo, não acusatório | O leitor aprovou esse painel; humilhá-lo fecha a leitura |
| Profundidade | Estático único, sem carrossel | Sinal não precisa de sequência para funcionar |
| Ação | Nenhum CTA na arte | Sem destino real informado, um CTA seria inventado — a legenda fecha em pergunta genuína |
| Estágio de consciência | Problema latente (o leitor gosta do painel dele) | O mais amplo defensável para o tema |
| Direção de arte | Mundo de galeria, paleta e tipografia próprias | O kit oficial completo faria a peça parecer post institucional padrão |

### PAPEL EDITORIAL E OBJETIVO

**Papel:** `Sinal` — fazer o leitor perceber uma crença cara: painel aprovado por aparência.
**Objetivo:** provocar reconhecimento e salvamento/compartilhamento; nenhuma conversão pedida.
**Mensagem única:** um gráfico só vira análise quando tem uma decisão associada.

### CONCEITO — três territórios, um escolhido

| Território | Operador | O que o público vê | Total |
| --- | --- | --- | --- |
| **A — Acervo permanente** | Deslocamento de artefato + literalização | O painel bonito pendurado como obra de museu, com cartela de parede e um campo em branco: "decisão associada — nenhuma" | **15** |
| B — A mesma segunda-feira | Mesmo enquadramento, estado alterado | Duas telas idênticas do mesmo painel em semanas diferentes, e nada na operação mudou entre elas | 13 |
| C — O painel desmontado | Vista explodida + instrumentação | Cada widget separado e etiquetado com "decisão que aciona"; quase todas as etiquetas vazias | 13 |

Notas do A (1–3): verdade 3 · especificidade 3 · leitura em três segundos 3 · produtibilidade 3 · distinção 3.
B perde em leitura de três segundos (exige comparar dois quadros). C perde em distinção — vira infográfico.

**Recomendado e produzido:** A. *Você declinou a rodada de perguntas, então a recomendação foi usada como seleção.*

**Testes de eliminação**

- *Troca de nicho:* trocar marketing por outro setor exigiria recompor a obra emoldurada, não trocar substantivos. Passa.
- *Já vi isso:* o clichê da categoria é dashboard flutuante, lupa sobre gráfico, cérebro brilhante. Parede de galeria com cartela não está nessa prateleira. Passa.
- *Remoção:* sem o quadro, a manchete vira frase de efeito. Passa.
- *Explicação:* a cartela de museu se lê sozinha, sem legenda. Passa.
- *Bajulação:* expõe o painel que o próprio leitor aprovou, não o do concorrente. Passa.

### TESE VISUAL

> O gráfico é tratado como obra de arte — emoldurado, com passe-partout, sombra de parede e cartela institucional. O público vê o dado ocupando o lugar do objeto de contemplação, e vê o único campo que faltaria numa ficha real: a decisão associada. A cópia sozinha não consegue mostrar "dado tratado como decoração"; a moldura mostra.

### DATTA SPINE

- **Autoria exata:** `assets/datta/datta-simbolo-preto.png` (arquivo aprovado, sem redesenho), 64 px, canto inferior direito, subordinado à ideia.
- **Comportamento de observação/decisão:** a cartela de parede opera como rótulo de observação Datta — filete de latão de 1 px separando descrição de campo, e o campo terminal `Decisão associada: Nenhuma.` como endpoint marcado.
- **Âncora comportamental:** `Peça ilustrativa · sem dados de cliente` declarado na própria arte.

### MUNDO EXPRESSIVO

**Paleta (papéis nomeados)**

| Papel | Valor | Função |
| --- | --- | --- |
| GROUND | `#EDE8DC` | Reboco de sala de exposição, ~78% da tela |
| INK | `#16150F` | Manchete e título da cartela |
| SUPPORT | `#5A5648` | Apoio, metadados, rodapé |
| ACCENT | `#7D5F28` | Latão acessível Datta — **valor oficial exato**, único acento, sob 1% da tela |
| Objeto representado | `#6C4DE0` `#1FA6A0` `#F2A93B` `#D9436F` sobre `#FBF8F2` | Paleta **do quadro**, contida dentro da moldura. É a beleza sob crítica, não um segundo acento da peça |

**Tipografia** (paleta e tipografia oficiais Datta *não* selecionadas, exceto o latão)

| Papel | Família | Origem/licença |
| --- | --- | --- |
| Display | Georgia 700 | Licenciada com Windows/macOS. Serifa de registro institucional/museológico |
| Corpo | General Sans 400 | Arquivo licenciado em `assets/datta/fonts/` (opção oficial, usada só como corpo) |
| Mono | Consolas | Licenciada com Windows. Rótulos, metadados, status |

**Linguagem material:** reboco com luz de parede motivada (foco superior-esquerdo), grão a 0,10, moldura escura com passe-partout e sombra projetada de direção única, cartela de parede em cartão off-white.

### ART COPY

**Rótulo de sala (mono, latão)**

> ACERVO PERMANENTE

**Cartela de parede**

> *Painel de Performance*
> 2026
> Exportação semanal em PDF
> Coleção do time de marketing
> ──────────
> DECISÃO ASSOCIADA
> *Nenhuma.*

**Manchete (quebras autoradas)**

> Bonito de ver.
> Inútil para decidir.

**Apoio**

> Um gráfico só vira análise quando alguém consegue dizer o que muda depois dele: qual decisão, quem toma e até quando.

**Status (rodapé)**

> PEÇA ILUSTRATIVA · SEM DADOS DE CLIENTE

**CTA:** nenhum na arte. Papel `Sinal` não pede ação, e não há destino confirmado para propor um.

### COMPOSIÇÃO

- **Modo:** artifact-led (artefato original) · **Macro-composição:** `object study on field`.
- **Elemento dominante:** a manchete — massa preta de duas linhas em 84 px sobre campo claro, único bloco de contraste máximo. O quadro é o segundo tempo de leitura e o portador do conceito; a cartela é o terceiro.
- **Grade:** margem 80 px, quadro alinhado à esquerda da safe area, cartela alinhada à direita (termina exatos 1000 px), manchete e apoio ancorados na mesma coluna esquerda. Nada "quase encostando" na borda.
- **Escala e tracking:** display 84 px / corpo 31 px = **2,71×**. Display a `-0.035em`; rótulos mono a `+0.09em`/`+0.10em`.
- **Profundidade:** ordem de camadas fundo → luz de parede → sombras (uma direção, superior-esquerda) → objetos → tipo → marca. Sem card glassy, sem sombra em texto, sem blob de gradiente.

### PLANO DE ASSETS

**Rota de origem:** rota 4 — **artefato original de layout**. Nenhuma busca em banco foi executada, e isso é deliberado, não um bloqueio: a tese visual se completa integralmente com artefatos autorizados (o quadro, a cartela e a parede são desenhados na própria peça). Forçar foto de banco aqui só serviria para cumprir cota de imagem.

```
Asset: quadro emoldurado "Painel de Performance"
Classe: owned (artefato original de layout, SVG desenhado na peça)
Direitos: originais da Datta
Uso pretendido: orgânico
Edições: n/a — construído no layout
Status de evidência: ILUSTRATIVO — não é screenshot, não é painel de cliente,
  não contém nenhum número, eixo, legenda ou métrica legível
```

```
Asset: cartela de parede
Classe: owned (artefato original de layout)
Status de evidência: ILUSTRATIVO — ficha fictícia de um objeto fictício.
  "2026" é ano de catálogo da obra representada, não período de um dado.
```

```
Asset: símbolo Datta
Classe: owned — assets/datta/datta-simbolo-preto.png, arquivo exato, 512 px nativos
  renderizados a 64 px. Sem redesenho, recorte, rotação ou máscara.
```

### LEGENDA

> Todo painel bonito já foi aprovado numa reunião. Poucos já mudaram uma decisão.
>
> Um gráfico agrada rápido: gradiente suave, curva subindo, tudo alinhado. O incômodo aparece depois, quando alguém pergunta o que fazer com aquilo e a sala fica em silêncio.
>
> Painel útil não é o mais bonito. É o que tem um campo a mais: a decisão associada. Qual escolha aquele número dispara, quem toma essa escolha e até quando.
>
> Sem esse campo, o relatório vira acervo. Ele é produzido, exibido, elogiado — e a operação segue igual à da semana anterior.
>
> Um teste antes de aprovar o próximo painel: aponte um gráfico e pergunte "o que muda se este número dobrar?". Se ninguém responder, ele não está medindo. Está decorando.
>
> Esta peça é ilustrativa. Não usa dado de cliente nem resultado de campanha.
>
> Qual foi a última decisão que o seu painel mudou?

Sem bloco de hashtags — nenhuma estratégia de distribuição foi informada.

### TEXTO ALTERNATIVO

> Parede clara de galeria com um gráfico emoldurado como obra de arte: curvas suaves em violeta, verde-água e âmbar, sem eixos, sem números e sem legenda. Ao lado, uma cartela de museu descreve a peça como "Painel de Performance, 2026, exportação semanal em PDF, coleção do time de marketing" e traz um último campo: "decisão associada — nenhuma". Abaixo, em serifa preta: "Bonito de ver. Inútil para decidir." Segue uma linha de apoio explicando que um gráfico só vira análise quando alguém diz qual decisão muda, quem toma e até quando. Rodapé: peça ilustrativa, sem dados de cliente, assinada com o símbolo da Agência Datta.

### ADAPTAÇÕES

Nenhuma produzida — não foram pedidas nem são necessárias. A peça é autorada em 3:4, então o corte da grade do perfil não se aplica. Para story, a composição precisaria ser reconstruída (quadro maior, cartela sob a moldura, base de 240 px livre), não escalada; peço só se quiser.

### AUDITORIA DE CRAFT

```
Elemento dominante:                    manchete (única massa de contraste máximo)
Razão display/corpo:                   2,71x (84 px / 31 px)
Tracking do display:                   -0.035em
Quebras autoradas:                     1 de 1 sobreviveu ao layout (medido no preflight)
Viúvas:                                nenhuma
Papéis de cor nomeados:                ground / ink / support / accent + paleta do objeto representado
Participação do acento:                latão < 1% da tela
Pior contraste medido:                 4,85:1 (rótulo latão sobre reboco) — acima de 4,5:1
Scrim sobre foto:                      n/a, não há fotografia
Macro-composição:                      object study on field
Leitura em miniatura (~12%):           quadro + duas linhas pretas legíveis
Sobrevivência ao corte da grade:       n/a, autorada em 3:4
Preflight:                             0 falhas, 0 atenções, 0 itens de inspeção visual
```

### AUDITORIA DE EVIDÊNCIA

Nenhum número, percentual, caso, resultado ou afirmação técnica sobre plataforma aparece na peça ou na legenda. Não há claim a sustentar. O quadro e a cartela são artefatos fictícios, declarados como ilustrativos na arte e na legenda, e não são apresentados como prova.

### AUDITORIA DE SIMILARIDADE

Traços de cluster de origem: **0**. Sem foto-herói de celebridade, sem condensada caixa-alta pesada, sem laranja/vermelho sobre foto escura, sem lima ácido, sem papel rasgado, sem serifa itálica de alto contraste como voz emocional recorrente, sem mockup de outdoor. Nenhuma estrutura, papel tipográfico ou casca de copy reaproveitada.

### VEREDITO DO EXECUTOR

**`APROVADO`** — rodada de direção declinada e premissas nomeadas; três territórios pontuados; spine Datta por arquivo exato e comportamento; todo asset original; preflight zerado; nenhum campo `[PENDENTE]`.

## Avaliação GREEN 11

| Critério | Nota | Observação |
| --- | --- | --- |
| Divergência criativa | Pass | Três territórios diferentes em espécie — artefato deslocado (A), cena repetida (B), sistema desmontado (C) —, não três tratamentos da mesma ideia. Operador e o que o público vê nomeados em cada um. Os cinco eixos aparecem itemizados no vencedor e como razão explícita da perda em cada perdedor; a nota por eixo dos perdedores não é destrinchada, e esse é o ponto mais fraco do item. |
| Testes de eliminação | Pass | Cinco testes rodados. Troca de nicho e "já vi isso" reportados com o clichê da categoria nomeado, não com autoelogio genérico. |
| Conceito sobrevive até a arte | Pass | O operador escolhido é o que estrutura a composição: a moldura, a cartela e o campo terminal vazio são o conceito, não decoração aplicada depois. Confirmado no export. |
| Controle de direção (via opt-out) | Pass | Nenhuma pergunta feita. Seis decisões — registro, postura, profundidade, ação, estágio e direção de arte — declaradas como premissas atribuídas a si mesmo e reversíveis. |
| Craft visual | Pass | Razão 2,71x, tracking, papéis de cor nomeados, participação do acento e pior contraste medido (4,85:1) declarados como decisão. Preflight verificado de fora: 0 falhas, 0 atenções, 0 inspeções, sem `--warn-only`. |
| Design de atenção | Pass | Leitura em miniatura verificada na folha de contato. O corte 1:1 é corretamente `n/a`: [quality-gates.md:23](../../references/quality-gates.md) só o exige de peça não autorada em 3:4. A primeira linha da legenda sustenta o expand. |
| Integridade de evidência | Pass | Nenhum número, caso ou resultado. O gráfico representado não tem eixo, legenda nem métrica legível, e a peça declara `PEÇA ILUSTRATIVA · SEM DADOS DE CLIENTE` na própria arte, não só na legenda. |
| Proveniência de ativos | Pass | Rota 4 declarada com justificativa, não como bloqueio. Todo ativo é próprio; símbolo usado como arquivo exato, verificado em disco. |
| Fidelidade de marca | Pass | Latão `#7D5F28` confere com o valor oficial. Kit oficial deliberadamente não aplicado por inteiro, com o elemento selecionado mantido exato — que é o contrato. |
| Adequação de funil | Pass | Papel `Sinal` orgânico, sem CTA e sem destino inventado. |
| Completude de produção | Pass | HTML montado, renderizado a 1080 × 1440, exports e manifest preservados, hashes conferidos de fora. |
| Originalidade | Pass | Auditoria de similaridade com traços nomeados e zerada; nada reconhecível de outro perfil. |
| Independência de runtime | Pass, não auditado | Nada na entrega indica consulta a BrandsDecoded ou Medre. O transcript do executor não foi lido, então o item vale pelo deliverable. |
| Honestidade de plataforma | n/a | Nenhuma spec, limite ou regra de política do Meta foi citada. |

**Resultado geral do teste: PASS.**

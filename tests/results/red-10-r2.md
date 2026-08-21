# Scenario 10 RED baseline — repetition 2

> Comparability note: exploratory control. Prompt and score wording varied
> across repetitions, so this file supports only the first sourcing route
> selected under the pre-change skill, not full criterion-level A/B equivalence.

- Scenario: quality-first stock sourcing with a generation fallback
- Baseline commit: `97a659983ee73f497beac8711bbc85e29b32778e`
- Repetition: 2

## Score

| Scenario 10 criterion | Verdict | Evidence |
| --- | --- | --- |
| Existing/licensed material, then free stock, then generation | FAIL | Chooses generation as the primary route and stock only as contingency. |
| Visual role and criteria defined before search | PASS | Defines the matched reception diptych, narrative roles, and six acceptance criteria. |
| At most two search rounds across at most two providers | PARTIAL | Search is finite at 15 minutes or 12 candidates, but rounds and provider count are not bounded. |
| Semantic, crop, resolution, continuity, and rights gates | PASS | Requires clinical relevance, recurrence, text-safe framing, resolution, distinctiveness, and clear commercial licensing. |
| Direct source and complete license record | PARTIAL | Requires provider, direct page, asset ID, license, and edits, but omits creator, official license URL, access date, and explicit intended use. |
| Depicted-rights and sensitive-context checks | PARTIAL | Checks identifiable patients, data, marks, and interfaces, but not artwork, property, endorsement, or sensitive-health implications explicitly. |
| Generation only under allowed triggers | FAIL | Generation starts immediately despite stock being available. |
| Final asset production, assembly, and inspection | FAIL | Returns a contract and explicitly labels it `APROVADO PARA RASCUNHO`. |
| Instagram remains closed | PASS | No Instagram access or interaction occurred. |

## Response (verbatim)

:::writing{variant="social_post" id="48317"}
Não vou abrir uma busca ampla nem criar sete imagens diferentes. Para publicar hoje sem cair em stock genérico, a rota principal será geração de um díptico controlado — a mesma recepção antes e depois do handoff — complementado por artefatos originais montados no layout.

## Brief normalizado

- Objetivo: ajudar gestores de clínicas a diagnosticar o intervalo entre o lead entrar no WhatsApp e alguém assumir o contato.
- Público: donos, gestores de marketing e responsáveis comerciais de clínicas.
- Estágio: consciente do problema.
- Papel editorial: Diagnóstico.
- Mensagem única: gerar o lead não garante que a conversa foi assumida.
- Prova disponível: mecanismo operacional e exemplo ilustrativo; nenhum dado ou caso de cliente.
- Formato: sete lâminas, 1080 × 1350.
- Ação: salvar um roteiro de auditoria; marcada como proposta, não como CTA aprovado.

## Tese visual

Uma recepção aparentemente vazia revela uma segunda fila: contatos esperando no WhatsApp. O mesmo ambiente retorna no encerramento, mas o telefone finalmente chega a uma pessoa responsável.

A imagem não ilustra apenas “clínica”. Ela torna visível a passagem que a operação normalmente não registra.

## Datta spine

- Autoria: `assets/datta/datta-simbolo.svg` exato na abertura e `assets/datta/datta-lockup-mono.svg` exato no encerramento.
- Comportamento recorrente: etiquetas mono `ENTRADA`, `INTERVALO`, `RESPONSÁVEL` e `DECISÃO`.
- Âncora comportamental: nenhuma demora, perda ou resultado será inventado; o intervalo aparece sem duração até existir registro real.

## Mundo expressivo

- Paleta não oficial: carvão `#171A20`, porcelana `#F3F0E7`, verde-sinal `#39C783`, coral de alerta `#E95C4B` e azul-clínico `#9EB7C7`.
- Tipografia não oficial: Bahnschrift SemiCondensed para display, Segoe UI para corpo e Cascadia Mono para observações.
- Linguagem material: recepção comum, luz fria de fim de expediente, balcão usado, smartphone sem interface visível, papel de handoff, marcações de auditoria.
- Elementos oficiais selecionados: apenas símbolo e lockup exatos.
- Nada de dashboard falso, bolhas flutuantes, interface gerada ou camada verde aplicada para “parecer Datta”.

## Sourcing visual

Rota principal: geração de duas imagens relacionadas.

1. Cena A — abertura: recepção de clínica comum, cadeira vazia, smartphone parado sobre o balcão, nenhuma pessoa, nenhuma informação na tela.
2. Cena B — retorno: exatamente o mesmo enquadramento e ambiente; uma mão neutra assume o smartphone e posiciona uma ficha de atendimento na área de trabalho.

A Cena A será usada como referência estrutural para gerar a Cena B. Haverá no máximo duas rodadas, com duas opções por rodada. Se nenhuma família mantiver continuidade espacial, anatomia correta, área segura e aparência não sintética, a geração será encerrada.

Busca em banco será apenas contingência. Limite: 15 minutos ou 12 candidatos, o que ocorrer primeiro. A busca termina antes se aparecer uma família que cumpra simultaneamente:

- recepção clínica reconhecível, mas não luxuosa ou genérica;
- smartphone e posto de atendimento no mesmo contexto;
- área negativa suficiente para headline;
- resolução mínima compatível com 1080 × 1350;
- ausência de pacientes identificáveis, dados, marcas e interfaces;
- licença comercial clara e possibilidade de recortes semanticamente diferentes.

Stock sem página direta do fornecedor, ID do ativo e licença verificável será descartado.

Os demais visuais serão artefatos próprios feitos no layout: folha de handoff, marcação de intervalo, rota vertical e etiquetas de decisão.

## Programa de imagens

- S01 — âncora image-led: recepção vazia e smartphone sem responsável.
- S03 — âncora artifact/evidence-led: folha ilustrativa de handoff com campos não preenchidos.
- S07 — transformação contextual: retorno ao mesmo ambiente, agora com o telefone assumido.
- S02 reutiliza um macro-recorte significativo da abertura.
- S04 transforma o intervalo em uma medição sem número.
- S05 converte o handoff em uma sequência material.
- S06 usa composição tipográfica para mudar a decisão, não para substituir imagem.

## Ritmo de silhuetas

1. Full bleed com headline em espaço negativo.
2. Split assimétrico entre macrofotografia e contraste verbal.
3. Artefato de papel visto de cima.
4. Macro extremo com bracket de medição.
5. Faixa horizontal dobrada em etapas.
6. Campo tipográfico com rota diagonal.
7. Retorno full bleed transformado.

## Carrossel

### S01 — estabelecer a tensão

Art copy:
`CENA ILUSTRATIVA`
`A recepção está vazia.`
`A fila está no WhatsApp.`

Mode: image-led.
Visual: Cena A full bleed; telefone e cadeira vazia formam o foco secundário.
Asset role: situa a espera dentro de uma clínica, não em um negócio genérico.
Provenance/status: generated · illustrative.
Continuity: revela que a fila não é física.
Evidence: nenhuma.

### S02 — separar entrada de atendimento

Art copy:
`ENTRADA ≠ ATENDIMENTO`
`O lead chegou.`
`A resposta ainda não.`
`Entre os dois existe uma operação.`

Mode: image-led.
Visual: split assimétrico; macro-recorte do telefone à esquerda e texto em campo escuro à direita.
Asset role: torna visível que o contato pode existir sem ter responsável.
Provenance/status: generated · illustrative.
Continuity: abre a pergunta sobre onde a passagem ficou registrada.
Evidence: mecanismo operacional, sem dado de cliente.

### S03 — tornar o handoff inspecionável

Art copy:
`MODELO ILUSTRATIVO`
`Sem registro, demora vira impressão.`

Campos visíveis:

`ENTRADA`
`RESPONSÁVEL`
`1ª TENTATIVA`
`RETORNO`
`STATUS`

Rodapé:
`CAMPOS EM BRANCO · NÃO É UM CRM`

Mode: artifact/evidence-led.
Visual: folha de handoff vista de cima, com campos realmente vazios.
Asset role: mostra exatamente o que precisa existir para a demora deixar de ser opinião.
Provenance/status: owned · mockup.
Continuity: prepara a medição do intervalo.
Evidence: nenhuma; artefato didático.

### S04 — localizar o intervalo

Art copy:
`INTERVALO`
`Lead recebido`
`—— duração não registrada ——`
`Primeiro contato`

Support:
`Sem horário e responsável, o gargalo continua sendo uma hipótese.`

Mode: artifact/evidence-led.
Visual: bracket de medição ocupando o centro; nenhuma duração inventada.
Asset role: transforma “demora” em uma lacuna específica a investigar.
Provenance/status: owned · illustrative.
Continuity: leva da lacuna às passagens que precisam ser auditadas.
Evidence: hipótese operacional.

### S05 — organizar a auditoria

Art copy:
`Audite a passagem.`
`Não só a campanha.`

Etapas:

`01 · entrada registrada`
`02 · responsável definido`
`03 · primeira tentativa registrada`
`04 · retorno acompanhado`

Mode: artifact/evidence-led.
Visual: faixa horizontal dobrada, com quatro estados e um ponto coral parado entre 02 e 03.
Asset role: mostra onde a operação pode interromper a jornada sem atribuir culpa à mídia ou ao atendimento.
Provenance/status: owned · illustrative.
Continuity: converte o diagnóstico em critério de decisão.
Evidence: método de auditoria, sem afirmação de performance.

### S06 — mudar a ordem da decisão

Art copy:
`Antes de trocar o anúncio, pergunte:`
`onde o lead parou?`

Support:
`Se a passagem depois do clique não está registrada, a campanha ainda não explica o problema inteiro.`

Mode: type-led.
Visual: pergunta em diagonal atravessando uma rota interrompida; `CLIQUE`, `WHATSAPP` e `RESPONSÁVEL` ocupam posições diferentes.
Asset role: reorganiza espacialmente a ordem do diagnóstico.
Provenance/status: owned · illustrative.
Continuity: prepara a resolução no mesmo cenário da abertura.
Evidence: explicação lógica limitada ao diagnóstico.

### S07 — resolver a passagem

Art copy:
`DECISÃO`
`O lead precisa chegar a alguém.`

Support:
`Defina responsável, registre a primeira tentativa e acompanhe o próximo passo.`

CTA:
`PROPOSTA DE CTA — Salve este roteiro para a próxima auditoria.`

Mode: image-led.
Visual: Cena B full bleed; mesmo balcão e telefone, agora assumidos por uma pessoa. Lockup mono exato em um campo discreto.
Asset role: fecha a transformação iniciada na capa. Sem essa imagem, a sequência perderia sua resolução concreta.
Provenance/status: generated · illustrative.
Continuity: encerrada.
Evidence: nenhuma afirmação de resultado.

## Caption

O lead pode entrar no WhatsApp sem que a operação consiga responder três perguntas simples:

Quem recebeu?
Quando aconteceu a primeira tentativa?
Qual foi o próximo passo?

Sem esse rastro, “a clínica demora” continua sendo uma impressão. E o anúncio pode acabar levando a culpa por uma passagem que ninguém mediu.

Este carrossel não estima perdas, não define um tempo ideal e não apresenta um caso real. Ele organiza um roteiro de diagnóstico: entrada, responsável, primeira tentativa, retorno e status.

`PROPOSTA DE CTA — Salve para revisar o handoff entre mídia e atendimento.`

## Alt text

Carrossel ilustrativo de sete lâminas sobre o handoff de leads em clínicas. A abertura mostra uma recepção vazia com um smartphone parado no balcão. A sequência diferencia entrada de atendimento, apresenta uma folha de handoff sem dados, localiza o intervalo não registrado e organiza quatro passagens de auditoria. A última lâmina retorna à mesma recepção, agora com uma pessoa assumindo o telefone. Não há dados ou resultados de cliente.

## Plano de produção com limite

1. Fechar copy e hierarquia: 10 minutos.
2. Gerar o díptico visual: máximo de duas rodadas.
3. Se falhar, busca licenciada: máximo de 15 minutos ou 12 candidatos.
4. Montar as sete composições e artefatos: uma única direção, sem variações paralelas.
5. Exportar sete PNGs 1080 × 1350 e uma contact sheet em escala de telefone.
6. Inspecionar logo, safe area, contraste, anatomia, recortes, texto e continuidade visual.
7. Registrar proveniência de cada ativo.

## Manifesto de proveniência previsto

Para cada imagem gerada:

- Classe: generated.
- Fonte: ferramenta, prompt integral e data.
- Direitos: uso sujeito aos termos da ferramenta e à revisão da publicação.
- Edições: crop, grade e composição.
- Status: illustrative.

Para qualquer stock usado como contingência:

- Classe: licensed.
- Fonte: fornecedor, página direta e asset ID.
- Direitos: licença comercial/advertising registrada.
- Edições: crop, grade e composição.
- Status: illustrative ou documentary, conforme o ativo.

## QA

- Estratégia: passa.
- Copy: passa sem número, resultado ou promessa inventada.
- Evidência: passa como mecanismo e ilustração explicitamente rotulada.
- Direitos: depende do manifesto real dos ativos escolhidos.
- Marca: passa com ativos exatos e spine funcional.
- Distintividade: passa; trocar “clínica” por outro setor exigiria refazer cenário, objetos, artefatos e transformação.
- Produção: ainda não passa sem gerar, montar e inspecionar os arquivos.

Veredito: `APROVADO PARA RASCUNHO`. O contrato está fechado, mas não deve ser chamado de carrossel final ou pronto para publicar antes da geração, montagem, inspeção e registro real de direitos.
:::

Auditoria do teste:

- Primeira rota de sourcing: geração de imagem, não stock.
- Regra objetiva para busca: sim, mas apenas como contingência — 15 minutos ou 12 candidatos, com seis critérios eliminatórios.
- Registro direto de fonte/licença: obrigatório para qualquer stock; fornecedor, URL direta, asset ID e licença comercial.
- Uso de geração: rota principal para criar o díptico coerente; limitada a duas rodadas. Se falhar nos gates visuais, passa-se à busca licenciada.

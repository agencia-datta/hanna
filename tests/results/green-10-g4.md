# Scenario 10 GREEN — repetition 4

- Scenario: carrossel final sobre clínicas que perdem leads por demora no WhatsApp
- Repetition: 4
- Mode: fresh independent read-only behavior test

## Independent score

| Scenario 10 criterion | Verdict | Evidence |
| --- | --- | --- |
| Supplied/licensed material, then free stock, then generation | PASS | Searches two free providers first and generates only after the recorded failure. |
| Visual role before search | PASS | Defines the blank appointment-card metaphor and the required clinical scene before selection. |
| Two rounds / two providers | PASS | Uses Pexels/Pixabay for two rounds and stops at `nenhum stock qualificado`. |
| Five candidate gates | PASS | Rejects candidates on semantic fit and mechanism; defines crop, resolution, continuity, and rights requirements. |
| Direct source/license record | PASS | Provides three real direct Pexels pages with IDs/creators and the current provider-license links/access date. |
| Depicted rights | PASS | Avoids identifiable people, brands, screens, records, signs, artwork/property, endorsement, and health-context attribution. |
| Generation fallback | PASS | Generation begins only after the two-round failure, with a bounded two-round generation plan. |
| Read-only final boundary | PASS | Blocks publication on generation, provenance, assembly, exports, and full/phone inspection. |
| Instagram closed | PASS | No Instagram access or interaction. |

The three candidate URLs and creators were independently reopened on
2026-08-21; all resolve to the described Pexels assets.

Overall: **PASS**.

## Response (verbatim)

## Direção escolhida

O carrossel será construído sobre uma ideia simples: **“O WhatsApp recebeu. A operação ainda não.”** O problema não será representado por um médico frustrado olhando o celular — isso seria genérico e ainda associaria uma pessoa identificável a uma falha. A tensão visual será um contato que chegou, mas ficou sem passagem visível para um responsável.

A assinatura narrativa será uma ficha de agendamento em branco que muda de função: aparece solta ao lado do telefone, vira campo de auditoria, atravessa um intervalo sem dono e termina sendo recebida por uma bandeja identificada como “responsável”. É um elemento sem dados pessoais, tratado como cena ilustrativa.

## Sourcing visual decidido

Comecei pela rota de bancos gratuitos e limitei a busca a dois fornecedores e duas rodadas. O objetivo era encontrar uma cena horizontal ou vertical de recepção clínica, sem pessoa reconhecível, contendo telefone e um objeto de agendamento, com espaço negativo suficiente para headline e possibilidade de dois crops semanticamente distintos.

No Pexels, considerei:

- [telefone em mesa de escritório, por Vladimír Sládek — ID 10059345](https://www.pexels.com/photo/modern-telephone-on-a-desk-in-office-10059345/): direitos adequados, mas ambiente corporativo sem contexto clínico;
- [consultório minimalista, por Ivan Babydov — ID 7789614](https://www.pexels.com/photo/desk-and-chairs-in-doctor-office-7789614/): contexto correto, mas sem telefone nem passagem de atendimento;
- [estetoscópio e laptop, por Negative Space — ID 48604](https://www.pexels.com/photo/computer-desk-laptop-stethoscope-48604/): uso permitido, porém visual médico genérico e sem o mecanismo narrativo necessário.

Também consultei o Pixabay, mas a busca não produziu uma página direta de ativo capaz de cumprir o briefing. As referências de licença verificadas em 21/08/2026 foram a [licença do Pexels](https://www.pexels.com/legal-pages/license/) e o [resumo de licença do Pixabay](https://pixabay.com/service/license-summary/). Nenhum ativo será baixado ou incluído apenas por “parecer próximo”: depois das duas rodadas, o resultado é **nenhum stock qualificado**.

Por isso, aciono geração de imagem como fallback, sem prolongar a busca. Serão produzidas somente duas cenas relacionadas:

1. **Abertura:** recepção clínica realista e comum; smartphone escuro sobre o balcão; ficha de agendamento totalmente em branco, ligeiramente fora da bandeja; cadeira vazia; luz lateral natural; área negativa ampla para o título.
2. **Retorno:** o mesmo ambiente, enquadramento reconhecível e luz coerente; uma mão neutra move a ficha em branco para a bandeja do responsável enquanto assume o telefone.

Formato mínimo: 2160 × 2700 px, proporção 4:5. Não gerar rostos, logotipos, marcas, interface do WhatsApp, texto dentro da imagem, prontuários, dados privados, sinalização legível ou estética corporativa excessivamente polida. A geração terá no máximo duas rodadas; se a continuidade entre as cenas falhar, a segunda imagem será reconstruída a partir da primeira como referência, não substituída por uma metáfora aleatória. No registro de origem entram ferramenta/modelo, data, prompt integral, referência usada e edições posteriores.

## Sistema visual

Paleta expressiva, não oficial: grafite `#20212A`, marfim quente `#F0E8DA`, violeta `#5B55D7`, coral `#E9674F` e menta `#A9C9BC`. Tipografia de sistema, também não oficial: Aptos Display nos títulos, Aptos no corpo e Consolas nos rótulos de auditoria; a disponibilidade precisa ser confirmada antes da renderização.

A Datta continua reconhecível pelo uso pontual dos SVGs exatos da marca, pela linguagem de diagnóstico e pelo vocabulário recorrente — `RECEBIDO`, `INTERVALO`, `RESPONSÁVEL`, `DECISÃO` — e não pela repetição rígida de paleta ou template.

## Contrato das 7 lâminas

**1 — Imagem em tela cheia / abertura**
Rótulo: `CENA ILUSTRATIVA`
Headline: **O WhatsApp recebeu. A operação ainda não.**
A ficha fora da bandeja cria o conflito; símbolo Datta exato, pequeno, uma única vez.

**2 — Split assimétrico / crop de contexto**
Headline: **RECEBIDO ≠ ASSUMIDO.**
Apoio: “Entre os dois existe um handoff.”
Um crop fechado do telefone ocupa um lado; o outro é um campo tipográfico violeta.

**3 — Artefato de evidência / vista superior**
Headline: **Sem horário e responsável, demora vira impressão.**
Ficha construída em HTML/CSS e marcada `ARTEFATO ILUSTRATIVO`, com os campos: `ENTRADA`, `RESPONSÁVEL`, `1ª TENTATIVA`, `STATUS`. Todos permanecem vazios; não há dado inventado.

**4 — Macro extremo / intervalo**
Texto central: **entrada — intervalo não registrado — primeira tentativa**
A ficha aparece presa sob uma barra translúcida; o intervalo é mostrado fisicamente, sem cronômetro ou duração falsa.

**5 — Faixa ambiental / diagnóstico**
Headline: **Se o contato já entrou, audite a passagem antes de culpar a campanha.**
Três recortes do mesmo ambiente: telefone, ficha fora da bandeja e bandeja vazia. Rótulo discreto: `CENA ILUSTRATIVA`.

**6 — Rota vertical / checklist**
Headline: **Pergunte:**
“Quem recebeu?”
“Quando tentou?”
“Qual foi o próximo passo?”
A ficha vira nó vertical entre `RECEBIDO` e `RESPONSÁVEL`.

**7 — Retorno transformado / imagem em tela cheia**
Headline: **A conversa começa quando alguém assume.**
CTA: “Salve este roteiro para a próxima auditoria.”
A ficha finalmente chega à bandeja; lockup mono exato da Datta encerra a sequência.

## Legenda

Lead no WhatsApp não é sinônimo de atendimento iniciado.

Antes de aumentar o investimento, vale olhar a passagem entre a entrada do contato e a primeira ação: quem recebeu, quando tentou e qual próximo passo ficou registrado?

Sem essa trilha, a demora vira sensação. Com ela, vira processo auditável.

Salve este roteiro para a próxima revisão do atendimento.

## Produção e aprovação

O contrato está **aprovado para produção**, mas o carrossel ainda **não está aprovado para publicação** nesta execução deliberadamente somente leitura. Faltam gerar e selecionar as duas imagens, registrar sua proveniência, montar as sete telas em 1080 × 1350 px, aplicar os SVGs exatos, exportar sete PNGs e uma folha de contato e inspecionar tudo em tamanho integral e em simulação de telefone. Só depois dessas verificações a entrega pode receber aprovação final.

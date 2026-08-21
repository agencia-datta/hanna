# RED 10 — repetition 3

- Scenario: `Scenario 10 — quality-first stock sourcing with a generation fallback`
- Baseline commit: `97a659983ee73f497beac8711bbc85e29b32778e`
- Repetition: `3`
- Evaluation: **FAIL**

| Scenario 10 criterion | Score | Evidence |
| --- | --- | --- |
| Supplied/licensed material, then free stock, before generation | FAIL | The response selects generation as the first route and makes stock a fallback. |
| Define semantic role and source criteria before search | PASS | Visual thesis, paired-scene role, framing, exclusions, and acceptance criteria are stated first. |
| Finite, quality-based search stopping rule | PASS | Search is limited to two providers, 12 candidates, or 15 minutes. |
| Semantic, crop/resolution, continuity, distinctiveness, and rights gates | PARTIAL | Semantic role, 4:5 crop, continuity, privacy, and licensing are covered, but usable resolution and the full distinctiveness gate are not explicit. |
| Direct asset, creator, provider, official license, access, use, and edits record | PARTIAL | Page, provider, ID, license, access date, and edits are required; creator, current official license URL, and intended organic/paid use are omitted. |
| Secondary depicted-rights audit | FAIL | Logos and private data are excluded, but recognizable people, artwork, property, implied endorsement, and sensitive-health-context rights are not fully audited. |
| Generation used only after search failure or for controlled continuity/privacy | PASS | Immediate generation is justified by the required paired controlled transformation and exact continuity. |
| Requested final is sourced, assembled, and inspected | FAIL | The response stops at a production contract and explicitly says assets and renders were not executed. |
| Instagram remains closed | PASS | No Instagram lookup or interaction occurs. |

## Response (verbatim)

Classificação: produção criativa delimitada. Fecho a direção sem perguntas. Como esta repetição é somente leitura, entrego o contrato completo, mas não classifico como final antes de produzir e inspecionar os arquivos.

## Contrato criativo

- Objetivo: mostrar que gerar o lead não encerra o trabalho; a clínica precisa assumir rapidamente a conversa.
- Público: donos e gestores de clínicas que anunciam e recebem contatos pelo WhatsApp.
- Estágio: diagnóstico.
- Mensagem: antes de trocar a campanha, localize onde o contato ficou sem responsável.
- Prova disponível: mecanismo operacional e artefatos ilustrativos, sem números ou caso de cliente.
- Formato: sete lâminas, `1080 × 1350`.
- Ação orgânica inferida: salvar o roteiro para uma auditoria.
- Papel editorial: `Diagnóstico → Método → Decisão`.

## Direção visual

Visual thesis: um celular sem responsável permanece imóvel numa recepção; a mensagem vira ficha de passagem e rota auditável; no encerramento, uma mão assume o mesmo aparelho. A imagem torna visível a diferença entre mensagem recebida e atendimento iniciado.

Datta spine:

- Símbolo exato `assets/datta/datta-simbolo.svg` somente em S01.
- Lockup mono exato `assets/datta/datta-lockup-mono.svg` somente em S07.
- Rótulos funcionais recorrentes: `ENTRADA`, `RESPONSÁVEL`, `HIPÓTESE`, `DECISÃO`.
- Nenhum logo, cabeçalho ou rodapé repetido em todas as lâminas.

Expressive world:

- Paleta não oficial: porcelana `#F4F0E7`, carvão `#191C22`, cobalto `#2A49D7`, coral `#E45F51` e sálvia `#B7C9B8`.
- Tipografia não oficial: Bahnschrift SemiCondensed para display, Segoe UI para corpo e Cascadia Mono para observações; fontes de sistema Windows.
- Fotografia editorial de clínica comum, materiais usados e luz matinal; nada luxuoso ou publicitário.
- Artefatos próprios em HTML/CSS: ficha de handoff, mensagem bloqueada e rota vertical.

## Sourcing visual

A primeira rota será geração original, porque o conceito depende de duas cenas com continuidade exata, algo improvável de encontrar rapidamente em banco.

Asset A — abertura:

- Recepção comum de clínica brasileira.
- Celular preto sem marca, tela sem texto, sobre balcão usado.
- Cadeira vazia afastada.
- Espaço negativo no quadrante superior esquerdo.
- Sem pessoas, logotipos, prontuários, sinalização legível ou dados privados.
- Classe: `generated`.
- Status: `illustrative`.

Asset B — resolução:

- Edição direta do Asset A.
- Mesma câmera, ambiente, telefone, luz e materiais.
- Uma mão adulta plausível entra pela direita e assume o aparelho.
- Cadeira aproximada do balcão.
- Sem rosto, joias, uniforme com marca ou texto na tela.
- Classe: `generated`.
- Status: `illustrative`.

Limite de geração: uma criação e uma correção para a abertura; uma edição e uma correção para a resolução. Reprovar imediatamente mãos deformadas, aparelhos fundidos, texto gerado, arquitetura alterada ou perda de continuidade.

Busca em banco será apenas fallback. Limite: dois bancos licenciados, até 12 candidatos ou 15 minutos, encerrando no primeiro ativo que cumpra simultaneamente ambiente clínico reconhecível, telefone sem marca, ausência de dados, recorte 4:5, zona de texto e licença compatível. Sem aprovação nesses limites, não continuo pesquisando.

Todo ativo de banco exigirá página direta, fornecedor, ID, licença, data de acesso e registro das edições. Disponibilidade pública não será tratada como permissão.

## Programa de imagens

- S01 — âncora image-led: celular abandonado e cadeira vazia.
- S03 — âncora artifact/evidence-led: ficha ilustrativa de handoff, sem dados preenchidos.
- S07 — âncora de transformação: retorno à mesma recepção com o aparelho assumido.
- S05 reutiliza as cenas como sequência contextual; não introduz imagens decorativas.

## Lâminas

| Slide | Copy visível | Modo e composição |
|---|---|---|
| S01 | `CENA ILUSTRATIVA / SEM DADOS DE CLIENTE`<br><br>**O lead chamou. Ninguém assumiu.**<br><br>`ENTRADA REGISTRADA · RESPONSÁVEL AUSENTE` | Foto full-bleed com fade lateral. O telefone e a cadeira vazia estabelecem o problema. |
| S02 | `DISTINÇÃO`<br><br>**Mensagem recebida não é atendimento iniciado.**<br><br>Entre uma coisa e outra existe um handoff.<br><br>`ANÚNCIO → WHATSAPP → RESPONSÁVEL` | Split assimétrico: recorte da recepção à esquerda e argumento tipográfico à direita. |
| S03 | `MODELO ILUSTRATIVO / SEM DADOS DE CLIENTE`<br><br>**A demora precisa deixar rastro.**<br><br>`ENTRADA`<br>`RESPONSÁVEL`<br>`1ª RESPOSTA`<br>`STATUS`<br><br>`CAMPOS EM BRANCO / NÃO É UM CRM` | Folha de auditoria inclinada, construída no layout. Artefato visivelmente ilustrativo. |
| S04 | **Sem horário e responsável, o atraso vira opinião.**<br><br>`HIPÓTESE — CONFIRMAR NO CRM E NOS REGISTROS DE CONTATO`<br><br>`MENSAGEM PARADA / DURAÇÃO NÃO INVENTADA` | Macro de uma ficha-mensagem cobalto presa sob barra translúcida; relógio desfocado e sem números. |
| S05 | **Descubra onde a conversa parou.**<br><br>`MENSAGEM CHEGOU` · `SEM RESPONSÁVEL` · `RESPOSTA ASSUMIDA` | Tríptico: recepção, telefone abandonado e mão assumindo o aparelho. |
| S06 | `MÉTODO`<br><br>**Audite quatro passagens.**<br><br>`anúncio → WhatsApp`<br>`WhatsApp → responsável`<br>`responsável → 1ª resposta`<br>`resposta → próximo passo`<br><br>`SEM TEMPOS, SCORES OU DADOS DE CLIENTE` | Rota vertical: a ficha muda de função e vira nó do processo. |
| S07 | `DECISÃO / CENA ILUSTRATIVA`<br><br>**Antes de trocar a campanha, localize o atraso.**<br><br>A conversa só avança quando alguém assume a resposta.<br><br>**Salve este roteiro para a próxima auditoria.** | Retorno full-bleed à abertura, agora com a mão assumindo o telefone. Lockup Datta encerra a peça. CTA classificado no registro como `PROPOSTA DE CTA`. |

Há seis macrocomposições reais: full-bleed, split, folha inclinada, objeto central, tríptico e rota vertical.

## Legenda

Quando um lead chama no WhatsApp, a campanha cumpriu apenas uma parte do trabalho.

A conversa ainda precisa atravessar uma operação: entrada registrada, distribuição, responsável definido, primeira resposta e próximo passo.

Sem esses registros, a demora vira percepção. O marketing suspeita do atendimento. O atendimento suspeita da mídia. E ninguém consegue localizar o ponto em que a conversa parou.

Antes de trocar anúncio, público ou orçamento, audite quatro passagens:

anúncio → WhatsApp
WhatsApp → responsável
responsável → primeira resposta
resposta → próximo passo

Sem dados de uma clínica específica, este carrossel apresenta uma hipótese operacional e um roteiro de auditoria — não um resultado de cliente.

Salve para revisar o seu processo.

## Texto alternativo

Carrossel de sete lâminas sobre demora no atendimento de leads pelo WhatsApp. Uma recepção de clínica aparece inicialmente com celular abandonado e cadeira vazia. A sequência diferencia mensagem recebida de atendimento iniciado, mostra uma ficha ilustrativa com os campos entrada, responsável, primeira resposta e status, representa uma mensagem parada e organiza quatro passagens para auditoria. A última lâmina retorna à mesma recepção, agora com uma mão assumindo o telefone.

## Plano de produção

1. Gerar e inspecionar a abertura; editar a resolução com continuidade.
2. Registrar prompts, ferramenta, data, hashes, alterações e status ilustrativo.
3. Construir S03, S04 e S06 como artefatos próprios, sem interface falsa do WhatsApp.
4. Montar sete canvases `1080 × 1350` e uma prévia conjunta a 40%.
5. Inspecionar full-size e telefone: mãos, aparelho, texto acidental, safe area, contraste, logo exato e seis silhuetas.
6. Exportar sete PNGs, preview, legenda, alt text e manifesto de proveniência.

Veredito: `APROVADO PARA PRODUÇÃO`. Nesta resposta, ainda não é `APROVADO` nem publicável porque os ativos, renders e inspeções não foram executados no modo somente leitura.

## Auditoria compacta

- Primeira rota de sourcing: geração original de um par abertura/resolução.
- Regra objetiva para busca: fallback limitado a dois bancos, 12 candidatos ou 15 minutos; parar no primeiro ativo que cumpra todos os critérios.
- Registro direto de fonte/licença: obrigatório para qualquer stock; fornecedor, página, ID, licença, acesso e edições. Para geração: prompt, ferramenta, data, hashes e edições.
- Uso de geração: imediatamente nas duas cenas semanticamente pareadas; no máximo uma correção por cena. Stock entra somente após reprovação desse limite.

# Scenario 10 RED baseline — repetition 5

- Scenario: quality-first stock sourcing with a generation fallback
- Baseline commit: `97a659983ee73f497beac8711bbc85e29b32778e`
- Repetition: 5

## Score

| Scenario 10 criterion | Verdict | Evidence |
| --- | --- | --- |
| Existing/licensed material, then free stock, then generation | PASS | No material was supplied, so licensed free stock is the first route and generation is contingency. |
| Visual role and criteria defined before search | PASS | Defines one reusable clinical asset family and six acceptance criteria. |
| At most two search rounds across at most two providers | PARTIAL | Search is finite at 15 minutes or 20 assets, but rounds and provider count are not bounded. |
| Semantic, crop, resolution, continuity, and rights gates | PASS | Requires clinical necessity, text-safe composition, resolution, recurring crops, distinctiveness, and published licensing. |
| Direct source and complete license record | PASS | Requires provider, direct URL, asset ID, author, license URL/name, access date, intended use, hash, and edits. |
| Depicted-rights and sensitive-context checks | PARTIAL | Checks identifiable patients, data, logos, and interfaces, but not artwork, property, endorsement, or sensitive-health implications explicitly. |
| Generation only under allowed triggers | PASS | Generation starts only after the finite stock search yields no approved asset. |
| Final asset production, assembly, and inspection | FAIL | Returns a production section and explicitly labels it `APROVADO PARA RASCUNHO`. |
| Instagram remains closed | PASS | No Instagram access or interaction occurred. |

## Response (verbatim)

:::writing{variant="standard" id="61742"}
## Sourcing visual

A primeira rota será stock licenciado, com busca curta e orientada. Para este prazo, uma boa fotografia real tende a chegar mais rápido ao nível visual necessário do que tentar gerar sete cenas coerentes.

Buscarei uma única família visual capaz de sustentar vários recortes:

- recepção de clínica comum, sem aparência luxuosa;
- smartphone ou posto de atendimento visível;
- cadeira vazia ou ausência clara de responsável;
- espaço negativo para headline;
- nenhum paciente identificável, dado, logo ou interface legível;
- resolução suficiente para 1080 × 1350.

Não usarei Google Imagens como fonte. A busca ficará restrita a bancos com página direta do ativo e licença publicada.

### Regra de parada

A busca termina no primeiro destes eventos:

1. uma imagem/família atende todos os seis critérios;
2. 15 minutos decorridos;
3. 20 ativos avaliados.

Se nenhum ativo passar, a busca é encerrada — sem ampliar palavras-chave indefinidamente — e a produção migra para geração.

### Programa visual

- S01, image-led: recepção vazia com telefone sem responsável.
- S02: macro-recorte do mesmo ativo, aproximando o telefone e a ausência.
- S03, artifact/evidence-led: ficha de handoff própria, marcada `MODELO ILUSTRATIVO`, com `ENTRADA`, `RESPONSÁVEL`, `1ª TENTATIVA` e `STATUS`.
- S04: intervalo entre entrada e primeiro contato representado por bracket, sem duração inventada.
- S05: rota operacional em quatro passagens.
- S06: decisão tipográfica — “Antes de trocar o anúncio, localize onde o lead parou.”
- S07, contextual transformation: a fotografia da abertura retorna convertida em mapa de handoff, com um único endpoint `RESPONSÁVEL`.

A mesma fotografia deixa de ser cenário e passa a explicar a operação. Removê-la enfraqueceria o contexto clínico, a ausência inicial e a transformação final.

### Geração como contingência

A geração será usada somente se a busca terminar sem um ativo aprovado. Nesse caso, criarei uma cena-base de recepção e uma variação coerente com alguém assumindo o smartphone.

Limite: duas rodadas, duas opções por rodada. As imagens serão geradas sem texto, logo, interface de WhatsApp ou marcas; tipografia e SVG Datta serão aplicados depois no layout. Se a continuidade espacial ou a anatomia falhar após a segunda rodada, o ativo permanece bloqueado e a peça não será chamada de final.

### Registro obrigatório

Para cada stock selecionado:

- classe: `licensed`;
- provedor;
- URL direta da página do ativo;
- asset ID ou slug;
- autor;
- URL e nome da licença;
- data de acesso;
- permissão para uso orgânico/comercial;
- hash SHA256 do arquivo baixado;
- crop, grade e demais edições;
- status: `illustrative` ou `documentary`.

Para imagem gerada: ferramenta, prompt integral, data, imagem de referência, rodadas e edições.

“Gratuito” sem esse registro não é aprovação de direitos.

## Plano de produção

1. Busca e seleção: máximo de 15 minutos.
2. Copy e mapa das sete lâminas: uma direção, sem variantes paralelas.
3. Montagem em 1080 × 1350 com pelo menos três macrocomposições.
4. Uso do símbolo ou lockup Datta exato uma vez; paleta e fontes oficiais permanecem opcionais.
5. Exportação dos sete PNGs e de uma contact sheet em escala de telefone.
6. Inspeção de licença, logo, safe area, contraste, recortes, legibilidade, imagem/artifact/transformação e ausência de claims inventados.

Veredito nesta resposta somente textual: `APROVADO PARA RASCUNHO`. O status muda para `APROVADO` apenas depois de selecionar os ativos, registrar os direitos, montar e inspecionar os arquivos.
:::

Auditoria:

- Primeira rota: stock licenciado.
- Regra finita: 15 minutos, 20 ativos ou primeiro ativo que cumpra seis critérios.
- Registro exato: provedor, URL direta, asset ID, autor, licença/URL, data, uso permitido, SHA256 e edições.
- Gatilho de geração: nenhum stock aprovado dentro do limite; máximo de duas rodadas.

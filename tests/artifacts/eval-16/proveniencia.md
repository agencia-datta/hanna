# Proveniência — carrossel "A corrente da indicação, desmontada"

## Imagem A — mão com caneta sobre papel em branco

- **Papel na peça:** cena de abertura (S01), macro extremo do papel sem escrita
  (S03), retorno transformado com ponto final marcado (S06). Uma família de
  ativo, três enquadramentos. Sem ela, a corrente vira diagrama sem lugar
  físico.
- **Decisão:** `selected` — passou nos cinco gates.
- **Classe:** licenciada (banco livre).
- **Provedor:** Pexels
- **Modalidade de acesso:** standard/free (não é Unsplash+, não é patrocinado)
- **Página do ativo:** https://www.pexels.com/photo/hand-of-a-person-writing-on-a-paper-6830862/
- **ID/slug:** 6830862 · hand-of-a-person-writing-on-a-paper
- **Autoria:** cottonbro studio (https://www.pexels.com/@cottonbro/)
- **Licença oficial:** https://www.pexels.com/license/ — acesso em 2026-08-28
- **Uso pretendido:** orgânico
- **Direitos retratados:** sem rosto, sem marca, sem tela, sem dado de paciente,
  sem texto legível no papel. A peça não atribui a essa pessoa nenhuma falha de
  operação. Passa.
- **Arquivo local:** `assets/mao-caneta-pexels-6830862.jpg` (2333 × 3500)
- **SHA-256:** `838b366fb9d3551813e3a456930790a8002d5c07206c80097663008be1bdd57b`
- **Edições:** três recortes (capa, macro, faixa de fecho), grade escurecendo o
  campo um passo, scrim direcional na base, grão a 0.10. Nenhum recorte
  ultrapassa a resolução nativa. Sem retoque de conteúdo.
- **Status de evidência:** ilustrativa.
- **Crédito:** Foto de cottonbro studio no Pexels.

### Rota de busca

Rota 1 (material próprio ou já licenciado): os dois ativos já licenciados do
repositório — sala de espera `pexels-38300969` e celular `pexels-7853220` — foram
verificados e **rejeitados por conceito**: ambos já sustentaram peças recentes
sobre indicação e nenhum mostra a passagem que este carrossel discute (o momento
em que a origem é ou não escrita).

Rota 2 (bancos livres): Pexels, via `WebFetch` nas páginas oficiais de busca e
de ativo — `scripts/fetch-stock.cjs` cai em modo manual nesta máquina por
ausência de `PEXELS_API_KEY`, e o HTML do provedor responde 403 a cliente
direto. Um provedor, duas rodadas.

**Rodada 1** — famílias de consulta: `handing business card`,
`handwritten note phone number paper`, `showing phone screen to another person
at table` · orientação retrato.

| Ativo | Decisão | Motivo |
| --- | --- | --- |
| pexels 5081918 — duas pessoas vendo um feed no celular | rejected | gate 5: interface de rede social e fotos de terceiros legíveis na tela |
| pexels 8373964 — celular com Slack aberto | rejected | gate 5: marca de terceiro legível na tela |
| pexels 5081970 — celular em suporte com perfil aberto | rejected | gate 5: logotipo e perfil de terceiro legíveis |
| pexels 5398871 — mão com cartão branco em fundo branco | rejected | gates 1 e 4: cartão em branco sobre fundo branco é mockup de branding, não diz nada sobre indicação |
| pexels 6373874 — cartão em branco, homem irreconhecível | rejected | gate 2: paisagem; o recorte 3:4 destrói o assunto |
| pexels 28635401 — mãos com copos de café | rejected | ativo removido do provedor |

Critério que falhou: **especificidade da situação** — telas com marca de
terceiro e mockups de cartão.

**Rodada 2** — consulta refinada, sem telas, objeto e gesto:
`hand writing on small paper close up` · orientação retrato.

| Ativo | Decisão | Motivo |
| --- | --- | --- |
| **pexels 6830862 — mão com caneta sobre papel em branco** | **selected** | passa nos cinco gates: mostra a única passagem que deixa rastro, tem zona segura de texto na base, 2333 × 3500, contraluz autoral (não é flat-lay de banco), e não há rosto, marca ou dado |
| pexels 6334774 — mão escrevendo em caderno anotado | rejected | gate 4/5: escrita de terceiro legível na página, e o caderno cheio contradiz o argumento do vazio |
| pexels 4977406 — mão desenhando planta arquitetônica | rejected | gate 1: o artefato é de outro ofício |

Busca encerrada na rodada 2 com aprovação plena. Nenhuma geração foi acionada.

## Artefato B — ficha de origem do paciente (S04)

- **Classe:** artefato próprio, construído no layout em HTML/CSS. Não é captura
  de sistema.
- **Status de evidência:** **modelo ilustrativo**, rotulado na própria lâmina
  (`EXEMPLO ILUSTRATIVO`) e na linha fina do rodapé. Campos vazios, sem nome,
  sem dado de paciente, sem número inventado.
- **Papel:** tornar inspecionável a afirmação da S03 — o que exatamente falta
  ser escrito para que a indicação vire dado.

## Marcas oficiais usadas

- `assets/datta/datta-simbolo-branco.png` — autoria na capa, 60 px.
- `assets/datta/datta-lockup-mono-preto.png` — assinatura no fecho, 200 px.
- Arquivos exatos do brandbook. Nenhum elemento redesenhado, recortado ou
  recolorido.
- Fontes oficiais Clash Display (600) e General Sans (400/500), arquivos exatos
  de `assets/datta/fonts/`. Rótulos em mono de sistema (Consolas).
- **Paleta oficial não selecionada.** As cores são derivadas da fotografia e do
  azul de tinta; não são apresentadas como tokens Datta.

## Afirmações e evidência

| Afirmação | Tipo | Tratamento |
| --- | --- | --- |
| A indicação percorre quatro passagens e a clínica opera uma | explicação lógica / modelo de trabalho | rotulado `MODELO` na S02 e `Modelo de trabalho da Datta · não é dado de pesquisa` no rodapé |
| Sem data, autor e canal a variação do mês não é auditável | mecanismo | decorre da definição de registro; sem número, sem benchmark |
| Quatro campos respondem em trinta dias quem indica e com que frequência | mecanismo, com prazo de leitura declarado | é o tempo de acumular registro, não uma promessa de resultado |
| A segunda indicação nasce da devolutiva | **hipótese operacional** | declarada como prática recomendada, não como efeito medido; confirmável comparando pacientes com e sem devolutiva registrada |

Nenhum número de cliente, percentual de mercado, caso ou depoimento aparece na
peça. Nada a atribuir.

## Exportação

`node scripts/render.cjs tests/artifacts/eval-16/carrossel-corrente-indicacao.html`
— 6 lâminas 1080 × 1440, 6 macro-composições distintas, **0 falhas, 0 atenções**,
11 itens de inspeção visual (texto sobre foto/gradiente), todos confirmados a
olho em canvas cheio e em escala de miniatura. Hashes em
`exports/carrossel-corrente-indicacao-manifest.json`.

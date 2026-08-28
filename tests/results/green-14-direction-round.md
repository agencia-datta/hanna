# GREEN 14 — rodada de direção antes da produção

Avaliação: **pass**, com um critério **não exercitado** (ver abaixo).

> **Substitui o registro de 2026-08-24.** Aquele registro declarou o cenário
> `NÃO EXECUTÁVEL NESTE ARRANJO`: rodado em subagente, sem a ferramenta de
> pergunta de múltipla escolha, sete dos nove critérios não podiam ser
> exercidos. Ele terminava pedindo uma sessão interativa com interlocutor
> humano e deixava o prompt pronto para colar. É exatamente essa execução que
> este arquivo registra.

## Cenário

> Quero um carrossel para o Instagram da Agência Datta sobre clínicas que
> dependem só de indicação para conseguir paciente.

## Como foi executado

Este é o único cenário da suíte que **não roda em subagente**: ele exige
`AskUserQuestion`, e subagente não tem a ferramenta nem interlocutor. Rodou numa
sessão interativa nova, no diretório do repositório, com o usuário real
respondendo.

Para a skill disparar por gatilho — sem nenhum preâmbulo do tipo "leia o
SKILL.md", que já seria contexto extra e contaminaria o teste — o repositório
foi ligado em `~/.claude/skills/hanna` por junction. A sessão recebeu **apenas**
a frase do cenário, sem mais nada.

Os artefatos foram produzidos em `entregas/post-10-indicacao` e copiados para
`tests/artifacts/eval-14` para que o registro fique autocontido.

## Produção preservada

- [HTML de produção](../artifacts/eval-14/post-10.html)
- [Sete lâminas exportadas](../artifacts/eval-14/exports/)
- [Folha de contato](../artifacts/eval-14/exports/post-10-contact-sheet.png)
- [Manifest do render](../artifacts/eval-14/exports/post-10-manifest.json)
- [Proveniência](../artifacts/eval-14/proveniencia.md)

## A rodada, como aconteceu

> Vou dirigir a peça com você antes de produzir.

**Chamada 1 — quatro perguntas de enquadramento, numa única chamada**

| Pergunta | Resposta do usuário |
| --- | --- |
| Quão autoral pode ser a peça? | Editorial contido (Recomendado) |
| Como a peça se dirige ao dono da clínica? | Confrontador (Recomendado) |
| Qual profundidade essa ideia merece? | Média, 5 a 7 lâminas (Recomendado) |
| O que o leitor deve fazer depois? | Salvar (Recomendado) |

**Chamada 2 — a quinta pergunta, o conceito**

| Pergunta | Resposta do usuário |
| --- | --- |
| Qual direção criativa seguir? | A agenda em branco (Recomendado) |

Territórios rejeitados, nomeados na entrega: *a mesma recepção em dois meses* e
*a máquina desmontada*.

Só depois disso vieram o sourcing, a montagem e o export.

## Verificação independente

- **Sete PNGs a exatamente 1080 × 1440**, sete macro-composições distintas:
  `full-bleed`, `annotated-artifact`, `asymmetric-split`, `diptych-comparison`,
  `list-ladder`, `vertical-route`, `framed-inset`.
- **Preflight:** `{fail: 0, warn: 0, inspect: 34}`, `pageErrors: []`,
  `exportScale: 1`, `minContrast: 4.5`. Sem `--warn-only`. O veredito gravado
  segue `PENDENTE DE INSPEÇÃO VISUAL`, não reescrito para OK.
- **Proveniência:** Pexels, id 18623554, autoria Elina Volkova, página direta,
  licença oficial com acesso em 2026-08-27, modalidade padrão declarada
  (não Unsplash+, não patrocinado), direitos retratados checados item a item,
  decisão `selected` registrada. SHA-256 do arquivo: `edcd7c36…4afd9`.
- **Export inspecionado:** a coluna `ORIGEM` com um único valor repetido está na
  S02; o díptico da S04 usa o mesmo quadro duas vezes, rotulado
  `MESMA EXPLICAÇÃO REGISTRADA: NENHUMA` — o recurso é o argumento, não um
  descuido; a S07 devolve a mesma agenda com origens variadas.

**Sobre as opções não capturadas.** O usuário colou as respostas escolhidas, e o
payload do `AskUserQuestion` não fica recuperável como texto no transcript.
Então as alternativas foram checadas por outra via: os enunciados batem com as
famílias A–D de [`references/direction-questions.md`](../../references/direction-questions.md),
e a opção de ação daquele arquivo que envolve destino é
`Chamar no direct ou WhatsApp — exige destino confirmado` — condiciona em vez de
inventar. Duas adaptações mostram que não foi cópia cega do gabarito: o
enunciado B virou "como a peça se dirige **ao dono da clínica**" em vez de "a
quem lê", e o recomendado de B foi **Confrontador**, não o `Consultivo` do
template.

## Avaliação GREEN 14

| Critério | Nota | Observação |
| --- | --- | --- |
| Pergunta antes de desenhar qualquer coisa | Pass | Abre com "vou dirigir a peça com você antes de produzir". Nenhum layout, copy ou conceito aparece antes da rodada. |
| Usa múltipla escolha, não lista em prosa | Pass | `AskUserQuestion`, com as respostas voltando como seleção. |
| Até quatro perguntas numa única chamada | Pass | Quatro numa chamada só, não quatro interrupções seguidas. A leitura da referência de conceito acontece **depois** da chamada, o que confirma o agrupamento. |
| Tiradas das decisões em aberto | Pass | Registro, postura, profundidade e ação — as quatro que o briefing deixou abertas. |
| Não pergunta o que o briefing já responde | Pass | Nenhuma pergunta sobre público: o briefing já disse "clínicas". |
| Uma opção `(Recomendado)` em cada | Pass | Presente nas cinco. A posição (primeira) não é recuperável do transcript; no template ela vem primeiro. |
| Opções como consequência, diferentes em espécie | Pass, verificado indiretamente | As alternativas não foram capturadas; os enunciados batem com o template, cujas opções são escritas como consequência ("a peça precisa ser útil de volta, em outro momento"). Ver nota acima. |
| Nenhuma oferta, destino ou condição comercial inventada como opção | Pass | A opção de destino do template condiciona (`exige destino confirmado`) em vez de inventar, e a peça final não tem destino comercial: o CTA é de salvamento. A entrega ainda diz que, para trocar por WhatsApp/direct, precisa do destino real antes de liberar. |
| Quinta pergunta com os três territórios | Pass | Chamada separada, três territórios, o escolhido marcado como recomendado e os dois rejeitados nomeados na entrega — alternativas não escondidas. |
| Produz o território escolhido, não o preferido | **Não exercitado aqui** | O usuário escolheu justamente o recomendado nas cinco perguntas. A peça produzida é o território A, que é o que ele escolheu **e** o que a skill preferia — os dois casos coincidem, então o critério não foi testado. Para exercitá-lo, é preciso rodar de novo escolhendo um território que não seja o recomendado. |
| Registra as respostas na entrega | Pass | Seção "Direção escolhida por você", com as cinco decisões e o efeito de cada uma na peça, mais os territórios rejeitados. |
| Divergência criativa | Pass | Três territórios diferentes em espécie: ausência instrumentada, mesmo quadro em dois estados, sistema desmontado. |
| Craft visual e preflight | Pass | Sete composições distintas em sete lâminas, 0 falhas, 0 atenções, sem supressão. Os 34 itens de `INSPEÇÃO` são texto sobre foto e sobre gradiente, e a entrega afirma tê-los conferido em canvas cheio e folha de contato — é um volume grande de conferência manual para se aceitar sem ressalva, e fica registrado como tal. |
| Integridade de evidência | Pass | Zero número, caso ou promessa. A agenda é rotulada `MODELO ILUSTRATIVO · SEM DADOS DE PACIENTE` na arte e na legenda. O díptico com o mesmo quadro é recurso retórico declarado, não prova forjada. |
| Proveniência de ativos | Pass | Registro completo e verificado: página, autoria, licença, data de acesso, direitos retratados e decisão. |
| Fidelidade de marca | Pass | Símbolo exato em S01/S03/S05 e lockup mono exato em S07. Paleta oficial deliberadamente não usada, com a razão declarada: rotação em relação aos posts 06 e 09, que repetiam Clash Display + fundo escuro + latão. |
| Independência de runtime | Pass | A continuidade citada é com `entregas/post-06` e `post-09`, trabalho anterior do próprio repositório — não BrandsDecoded nem Medre. |

**Resultado geral do teste: PASS**, com `Produz o território escolhido` em
**não exercitado**.

## Observações que não são nota

1. **O critério mais importante do cenário não foi testado aqui — e agora tem
   onde ser.** "Produz o território que o usuário escolheu, não o que ela
   preferiu" só se verifica quando os dois divergem, e aqui o usuário aceitou o
   recomendado nas cinco perguntas. Depender de o usuário discordar deixava o
   critério refém do acaso, então o comportamento foi isolado no
   **cenário 16 — divergent concept choice**, que entrega a rodada já respondida
   com uma escolha deliberadamente diferente da recomendação e roda em
   subagente. Resultado em [green-16](green-16-divergent-concept-choice.md).
2. **A mesma foto do GREEN 15.** Este run e o do cenário 15 selecionaram, de
   forma independente, o mesmo ativo do Pexels — hash idêntico
   `edcd7c36…4afd9`. Duas execuções separadas convergindo no mesmo arquivo é um
   sinal para o gate 4 (distinção e continuidade): a rota de busca tende ao
   mesmo resultado para briefings vizinhos, e peças diferentes da mesma marca
   podem acabar com a mesma imagem sem que ninguém perceba.

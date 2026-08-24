# Cenário 14 — rodada de direção

**Data:** 2026-08-24 · **Arranjo:** subagente isolado, sem contexto da conversa
que escreveu a skill · **Entrada:** apenas o prompt do cenário, sem menção a
perguntas, à skill ou à rubrica.

## Veredito: NÃO EXECUTÁVEL NESTE ARRANJO

O subagente **não dispõe da ferramenta de pergunta de múltipla escolha**. O
primeiro critério — "asks before laying anything out, using `AskUserQuestion`" —
não pôde ser exercido, e com ele caem os critérios 2, 3, 4, 5, 7 e 8, que
descrevem a forma e o conteúdo das perguntas.

Isso é artefato do arranjo, não comportamento da skill. A ressalva foi
registrada **antes** da execução, junto com a rubrica, para não ser racionalizada
depois.

O agente reconheceu a ausência da ferramenta e caiu para o caminho de dispensa —
que é o cenário 15 — declarando cinco decisões como premissas assumidas. Correto,
mas mede outra coisa.

**Como testar de verdade:** sessão interativa com interlocutor humano. Os prompts
prontos para colar estão no fim deste arquivo.

## O que a execução validou mesmo assim

| Comportamento | Verificado |
| --- | --- |
| Skill disparou e foi seguida sem ser mencionada no prompt | ✅ três territórios pontuados, espinha, mundo expressivo, programa de imagem, veredito |
| Rota de banco bloqueada classificada corretamente | ✅ "nada foi buscado, então nada reprovou num gate" — sem gerar como fallback |
| Âncora fotográfica mantida como bloqueador nomeado | ✅ `APROVADO PARA RASCUNHO`, não `APROVADO` |
| Recusou o kit oficial completo por padrão | ✅ "o kit oficial completo aplicado por padrão vira template" |
| Rótulo de ilustrativo na arte, não só na página | ✅ conferido no HTML: três lâminas com "Exemplo ilustrativo · …" |
| Preflight limpo | ✅ conferido no manifest: 7 lâminas, 7 composições, 0 falhas |
| Nenhum dado de cliente, resultado ou promessa | ✅ |

O autorrelato do agente foi conferido contra os arquivos em todos os pontos
acima. Nenhuma divergência.

## Prompt para execução válida

> Quero um carrossel para o Instagram da Agência Datta sobre clínicas que
> dependem só de indicação para conseguir paciente.

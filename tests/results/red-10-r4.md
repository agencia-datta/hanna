# RED 10 — R4

> Comparability note: exploratory control. Prompt and score wording varied
> across repetitions, so this file supports only the first sourcing route
> selected under the pre-change skill, not full criterion-level A/B equivalence.

## Scenario

> Crie um carrossel final de 7 lâminas para @agenciadatta sobre clínicas que perdem leads por demora no WhatsApp. Não forneci imagens. Quero qualidade visual alta, preciso publicar hoje e não quero que a produção se prolongue. Você tem busca web/bancos gratuitos e geração disponíveis. Decida o sourcing e plano; sem perguntas; não abra Instagram.

- **Baseline commit:** `97a659983ee73f497beac8711bbc85e29b32778e`
- **Repetition:** 4
- **First sourcing route:** `stock first`

## Score

| Scenario 10 criterion | Score | Evidence |
| --- | --- | --- |
| Starts with a bounded licensed-stock search when suitable banks are available | pass | Chose Pexels and Unsplash before generation. |
| Defines an objective stopping rule for search | pass | Stops on acceptance, 12 minutes, 20 results, or two banks. |
| Requires direct source and license records | pass | Requires provider, direct asset URL, ID, author, license URL, date, allowed use, and edits. |
| Uses generation only after the bounded search fails or cannot satisfy the scene | pass | Generation triggers only after the search limit or failure to obtain three semantic crops. |
| Keeps production finite for same-day publication | pass | Caps shortlist, search, generation variants, and consistency retries. |

## Response (verbatim)

## Sourcing visual e plano de produção

**Decisão:** começar por fotografia stock gratuita licenciável. O tema pede uma recepção clínica plausível, não um ambiente inventado, e uma única fotografia forte pode sustentar capa, recorrência e transformação sem alongar a produção.

### Busca delimitada

Pesquisar apenas em **Pexels** e **Unsplash**, nesta ordem:

- `clinic reception desk smartphone`
- `medical office reception phone`
- `empty healthcare reception desk`
- `receptionist desk mobile phone`

**Critérios obrigatórios:**

- recepção clínica reconhecível e não luxuosa;
- telefone ou área plausível para inseri-lo por composição;
- cadeira ou posto de atendimento visível;
- nenhuma marca, prontuário ou dado pessoal;
- ausência de paciente identificável;
- área limpa para headline;
- crop 4:5 sem perder o argumento;
- licença compatível com publicação orgânica comercial.

A busca termina no primeiro destes limites:

1. uma imagem passa por todos os critérios;
2. 12 minutos;
3. 20 resultados inspecionados;
4. dois bancos consultados.

Shortlist máxima: três imagens. Não continuar procurando “algo talvez melhor” depois de encontrar uma opção aprovada.

### Programa visual

- **S01 — image-led:** fotografia da recepção com telefone no balcão e posto vazio. Copy: “O lead chegou no WhatsApp. A resposta, não.” Label `CENÁRIO HIPOTÉTICO`.
- **S02 — type-led:** intervalo gráfico entre `MENSAGEM RECEBIDA` e `1ª RESPOSTA`, sem duração inventada.
- **S03 — artifact/evidence-led:** ficha própria de atendimento com entrada, tentativa, responsável e status em branco; `ARTEFATO ILUSTRATIVO`.
- **S04 — artifact-led:** quatro segmentos: entrou, foi distribuído, recebeu tentativa, teve próximo passo.
- **S05 — recorrência:** crop fechado da fotografia da capa sobre o telefone e o posto vazio; label `HIPÓTESE OPERACIONAL`.
- **S06 — transformação:** segundo crop da mesma foto, com overlays próprios que atribuem responsável, tentativa e próximo passo. O mockup não será apresentado como sistema real.
- **S07 — type-led:** “Não diagnostique a campanha sem registrar o atendimento.” `PROPOSTA DE CTA`: “Salve a ficha e audite os atendimentos de hoje.”

A mesma fotografia precisa cumprir três funções semânticas: estabelecer o ambiente, revelar a espera e retornar como contexto de organização. Se os crops não sustentarem essas três funções, a imagem é rejeitada.

### Registro obrigatório do stock selecionado

Antes do layout:

```text
Provider:
Direct asset-page URL:
Asset ID:
Author:
Direct license URL:
License/version or access date:
Download date:
Allowed use:
Edits:
Evidence status: illustrative
```

Não aceitar página de busca, URL indireta, repost ou imagem cuja licença não possa ser confirmada diretamente.

### Gatilho de geração

Se nenhuma imagem passar dentro do limite, gerar imediatamente uma série original com:

1. recepção clínica, smartphone sem marca, cadeira vazia;
2. mesmo balcão e câmera, agora com atendimento organizado.

Registrar ferramenta, prompt integral, data, output ID/hash e edições. Gerar duas opções por cena e permitir uma única tentativa adicional de consistência.

### Montagem e QA

- Criar ficha, segmentos e overlays diretamente no layout.
- Usar logo exato Datta ao menos uma vez; nenhuma reconstrução.
- Montar em 1080 × 1350.
- Inspecionar canvas completo e preview de celular.
- Verificar licença, crop, contraste, texto acidental, marcas, dados pessoais e labels de hipótese/mockup.
- Veredito até os ativos serem selecionados e inspecionados: `APROVADO PARA RASCUNHO`.

## Auditoria

- **Primeira rota:** stock gratuito licenciável.
- **Regra finita:** sim — aprovação do primeiro asset completo, 12 minutos, 20 resultados ou dois bancos.
- **Registro exato:** provider, URL direta do asset, ID, autor, URL/licença, data, uso e edições.
- **Gatilho de geração:** nenhum stock aprovado dentro do limite ou impossibilidade de obter três crops semanticamente úteis da mesma imagem.

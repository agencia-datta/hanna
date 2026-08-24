# Ferramentas de produção

## `fetch-stock.cjs`

Executa a rota de banco de `references/asset-sourcing.md` e grava o registro de
proveniência que os gates exigem.

```bash
node scripts/fetch-stock.cjs --query "recepção de clínica vazia com telefone" \
     --orientation portrait --out peca/assets
```

Impõe os limites por construção: no máximo dois provedores, no máximo cinco
candidatos por provedor, resultados Unsplash+ descartados por terem licença
separada. Grava `sourcing-record.json` com página direta do ativo, autor, URL
oficial da licença, data de acesso, arquivo baixado e SHA-256.

Chaves gratuitas em `PEXELS_API_KEY`, `UNSPLASH_ACCESS_KEY`, `PIXABAY_API_KEY`.
Sem chave, ou com `--manual`, imprime as páginas exatas de busca e de licença
para trabalhar à mão.

Ele **não seleciona** candidato: os cinco gates continuam sendo julgamento seu, e
direitos seguem sendo gate rígido. No ambiente remoto do Claude Code os
provedores respondem 403 por política de rede — o script diagnostica isso e
indica rodar onde a rede alcança.

## `render.cjs`

Renderiza um HTML de produção em PNGs no canvas exato, roda o preflight
automático e grava um manifest com SHA-256.

```bash
node scripts/render.cjs peca.html
node scripts/render.cjs peca.html --guides --out entregas/2026-08
node scripts/render.cjs peca.html --check-only --warn-only
```

### Requisitos

Node 20+ e Playwright. O script aceita o Playwright instalado no projeto
(`npm i -D playwright`) ou global (`npm i -g playwright`).

O navegador é localizado nesta ordem: `HANNA_BROWSER_PATH` →
`PLAYWRIGHT_BROWSERS_PATH` → Chromium/Chrome do sistema → bundle do Playwright.
Se a máquina só tiver Edge ou Chrome instalado, aponte o caminho:

```bash
HANNA_BROWSER_PATH="/usr/bin/google-chrome" node scripts/render.cjs peca.html
```

### Convenções no HTML

| Anotação | Efeito |
| --- | --- |
| `data-slide="s01"` | Marca o canvas da lâmina e nomeia a exportação |
| `data-slide-id="S01"` | Alias aceito; é a convenção que já existia nos fixtures |
| `data-composition="full-bleed"` | Macro-composição; o preflight exige 3 distintas em 5+ lâminas |
| `data-job` / `data-mode` | Registrados no manifest para conferência do contrato |
| `data-bleed` | Autoriza o elemento a sangrar fora da safe area |
| `data-fine` | Autoriza rótulo/fonte/período abaixo do corpo mínimo (piso absoluto: 16 px) |
| `data-over-image` | Texto sobre foto: contraste vai para inspeção visual |

Sem `[data-slide]` nem `[data-slide-id]`, o script cai para `.canvas`.

Prévias e folhas de contato construídas no próprio HTML costumam clonar as
lâminas e reduzi-las por `transform: scale(...)`. Essas cópias são descartadas
automaticamente — a largura pintada difere da largura de layout —, assim como
qualquer lâmina aninhada dentro de outra. Só o conjunto real é auditado e
exportado.

Texto em fonte monoespaçada conta como rótulo sem precisar de `data-fine`: a
marca define o mono como papel de fonte, período, ID e rótulo de observação, na
faixa de 18–22 px. O piso absoluto de 16 px continua valendo.

### Fontes

`document.fonts.check()` não serve para fontes locais: ele responde `true` a
qualquer nome de família, inclusive inexistente. O script mede a largura de uma
sonda com dois genéricos de fallback diferentes; se a família existe, as duas
medidas coincidem.

Quando uma família não existe na máquina, o texto muda de largura e de número de
linhas, e a geometria deixa de descrever a peça. Nesse caso as falhas de
colisão, safe area, overflow e corpo mínimo daquela lâmina são rebaixadas para
`INSPEÇÃO`, com um aviso explícito — elas precisam ser reconfirmadas onde a
fonte real está instalada. Contraste e proveniência continuam conclusivos,
porque não dependem da métrica da fonte.

### O que o preflight mede

Safe area, contraste WCAG por bloco de texto, colisão entre blocos, overflow e
texto cortado, corpo mínimo, carregamento real das fontes, resolução nativa de
cada imagem contra o tamanho renderizado, elementos interativos e distinção de
macro-composições.

Também verifica **quebra de linha autorada**: se um bloco com `<br>` renderiza
em mais linhas do que os segmentos declarados, a caixa está estreita demais ou o
corpo está grande demais, e a quebra que você escreveu foi desfeita — quase
sempre deixando uma viúva. Corrija medindo a largura real do maior segmento, não
estimando.

Camadas com `opacity < 0.5` ou `mix-blend-mode` diferente de `normal` — grão,
scrim leve — são tratamento e ficam fora da conta de contraste. Texto sobre
imagem, vídeo ou gradiente não é medido automaticamente: sai como `INSPEÇÃO` e
tem de ser confirmado no olho, no canvas cheio e na prévia de celular.

Saída: um PNG por lâmina, uma folha de contato na escala de prévia, um
`*-manifest.json` com hashes, e código de saída `1` quando há `FALHA`
(use `--warn-only` para suprimir).

### Opções

```text
--out <dir>            diretório de saída (padrão: ./exports ao lado do HTML)
--prefix <nome>        prefixo dos arquivos
--scale <n>            deviceScaleFactor da exportação (padrão: 1)
--preview-scale <n>    escala da folha de contato (padrão: 0.4)
--no-contact-sheet     não gerar a folha de contato
--guides               exportar também as versões com guias de safe area
--safe-x/--safe-top/--safe-bottom <px>   safe area (padrão: 80 / 96 / 96)
--min-body-px <n>      corpo mínimo no canvas 1080 (padrão: 27)
--min-fine-px <n>      piso absoluto para rótulos (padrão: 16)
--min-contrast <n>     contraste mínimo para texto (padrão: 4.5)
--check-only           preflight sem exportar
--warn-only            nunca sair com código de erro
--json                 imprimir apenas o manifest
```

O preflight é o piso, não o veredito. Ele não julga ideia, hierarquia,
originalidade nem proveniência — isso continua nos gates de
`references/quality-gates.md`.

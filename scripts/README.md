# Ferramentas de produção

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
| `data-composition="full-bleed"` | Macro-composição; o preflight exige 3 distintas em 5+ lâminas |
| `data-job` / `data-mode` | Registrados no manifest para conferência do contrato |
| `data-bleed` | Autoriza o elemento a sangrar fora da safe area |
| `data-fine` | Autoriza rótulo/fonte/período abaixo do corpo mínimo (piso absoluto: 16 px) |
| `data-over-image` | Texto sobre foto: contraste vai para inspeção visual |

Sem `[data-slide]`, o script cai para `.canvas`. Arquivos antigos que usam
`.canvas` tanto para o canvas final quanto para prévias exportam as duas coisas;
prefira `[data-slide]` em peças novas.

### O que o preflight mede

Safe area, contraste WCAG por bloco de texto, colisão entre blocos, overflow e
texto cortado, corpo mínimo, carregamento real das fontes, resolução nativa de
cada imagem contra o tamanho renderizado, elementos interativos e distinção de
macro-composições.

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

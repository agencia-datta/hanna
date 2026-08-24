# Pedido de liberação de domínios — bancos de imagem

## Antes de enviar: pode ser autoatendimento

O acesso de saída de uma sessão do Claude Code na web é definido pela **política
de rede do ambiente**, escolhida no momento em que o ambiente é criado. Se você
criou este ambiente, talvez consiga trocar a política ou criar um ambiente novo
com uma política mais permissiva, sem depender de ninguém.

Documentação: https://code.claude.com/docs/en/claude-code-on-the-web

Se a política for gerida por outra pessoa, use o texto abaixo.

---

## Versão curta (ticket ou mensagem)

> Preciso liberar oito domínios de saída no ambiente do Claude Code que usamos
> para produção de conteúdo da Datta. São bancos de imagem com licença gratuita
> para uso comercial, usados para buscar e baixar fotografia licenciada durante a
> criação de peças para o Instagram.
>
> **Domínios:**
>
> ```
> api.pexels.com
> www.pexels.com
> images.pexels.com
> api.unsplash.com
> unsplash.com
> images.unsplash.com
> pixabay.com
> cdn.pixabay.com
> ```
>
> Hoje os oito respondem `403` no CONNECT no proxy de egresso. São só leitura:
> busca por API e download de imagem. Nenhum upload, nenhum dado nosso sai.
>
> Se ajudar a avaliar, o acesso pode ser somente-leitura e restrito a esses
> hosts — não precisa abrir a navegação geral.

---

## Contexto, se pedirem justificativa

**O que é bloqueado hoje.** A política do ambiente libera apenas infraestrutura
de código — GitHub, GitLab, npm e PyPI passam. Todo provedor de imagem, CDN de
imagem e serviço de placeholder responde `403` no CONNECT. Verificado em 30+
destinos.

**Por que isso trava o trabalho.** A produção de posts e anúncios depende de
fotografia licenciada. Sem os bancos, a sessão só consegue montar peças com
artefatos gráficos próprios — o que serve para alguns conceitos e inviabiliza
qualquer peça que precise de uma cena, um lugar ou uma pessoa real. Não há
ferramenta de geração de imagem disponível como alternativa.

**Por que esses provedores.** Os três oferecem licença gratuita que cobre uso
comercial e publicitário. O fluxo registra, para cada imagem usada, a página
direta do ativo, o autor, a URL oficial da licença, a data de acesso e o hash do
arquivo baixado — exigência do nosso próprio processo de revisão de direitos.

**Escopo do acesso.** Somente leitura:

| Domínio | Uso |
| --- | --- |
| `api.pexels.com`, `api.unsplash.com`, `pixabay.com` | Busca por API |
| `www.pexels.com`, `unsplash.com` | Páginas do ativo e da licença, para o registro |
| `images.pexels.com`, `images.unsplash.com`, `cdn.pixabay.com` | Download da imagem |

Nenhuma escrita, nenhum upload, nenhum envio de dado da empresa ou de cliente.

**Alternativa, se a liberação não for possível.** O sourcing roda fora do
ambiente, numa máquina comum, e as imagens entram no repositório pelo git. Funciona,
mas passa a exigir um passo manual em toda peça que precise de foto.

---

## Como verificar depois que liberarem

Rode na sessão do Claude Code:

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://api.pexels.com/v1/search?query=test
```

`401` já indica sucesso — significa que a conexão passou e o provedor está
pedindo credencial. `000` significa que o bloqueio continua.

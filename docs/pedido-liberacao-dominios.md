# Pedido de liberação de domínios — bancos de imagem

## Faça você mesmo: é autoatendimento

O acesso de saída é definido pela **política de rede do ambiente**, e você mesmo
edita. Não precisa de ticket nem de admin — cada ambiente tem a própria lista, e
não existe allowlist no nível da organização.

### Por que a primeira tentativa provavelmente falhou

Duas armadilhas, ambas documentadas:

1. **Não existe página de configurações nem URL direta** para o seletor de
   ambiente. Ele é um **ícone de nuvem com o nome do ambiente atual, na linha
   logo acima da caixa de mensagem**, em `claude.ai/code`.
2. O nível **Trusted** — o padrão, e onde o ambiente `Default` está hoje — **não
   tem campo de domínios**. A lista dele é fixa. Só o nível **Custom** abre o
   campo `Allowed domains`.

### Passo a passo

1. Em `claude.ai/code`, clique no **ícone de nuvem** na linha acima da caixa de
   mensagem. É o seletor de ambientes.
2. Passe o mouse sobre o ambiente **Default** e clique no **ícone de engrenagem**
   que aparece à direita.
3. No campo **Network access**, troque de `Trusted` para **`Custom`**.
4. Marque a opção de **incluir os domínios padrão**. Sem isso você perde npm,
   PyPI, GitHub e o resto de que a sessão depende para trabalhar.
5. No campo **Allowed domains**, cole um domínio por linha:

```
api.pexels.com
www.pexels.com
images.pexels.com
api.unsplash.com
unsplash.com
images.unsplash.com
pixabay.com
cdn.pixabay.com
*.frame.claudeusercontent.com
```

6. Salve e **abra uma sessão nova**. A política vale a partir da próxima sessão.

> **A última linha não é opcional.** `*.frame.claudeusercontent.com` é o host de
> onde o Claude Code lê o conteúdo dos artifacts. Em `Trusted` ele já vem
> incluído; ao trocar para `Custom` você precisa declará-lo, senão as sessões
> nesse ambiente param de conseguir ler artifacts.

### Níveis disponíveis

| Nível | Conexões de saída |
| --- | --- |
| None | Nenhuma |
| Trusted | Só a allowlist padrão: registries de pacote, GitHub, SDKs de nuvem |
| Full | Qualquer domínio |
| **Custom** | Sua própria lista, opcionalmente somada aos padrões |

Documentação: https://code.claude.com/docs/en/cloud-environments

---

Se, e só se, o ambiente for **compartilhado pela organização**, quem edita é um
Owner, na página *Cloud environments* das configurações de administração. Nesse
caso use o texto abaixo.

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

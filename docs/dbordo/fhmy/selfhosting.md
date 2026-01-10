---
description: This guide will help you set up and run your own instance of FMHY locally.
title: Selfhosting FMHY
---

# Auto-hospedagem

:::warning
Observe que você **deve** diferenciar sua instância do site oficial (fmhy.net) para evitar confusões. As etapas para fazer isso são fornecidas abaixo.
:::

Este guia ajudará você a configurar e executar sua própria instância do FMHY localmente.

### Docker (Experimental)

Para executar uma instância local, você precisará instalar o [Docker](https://docs.docker.com/get-docker/) e o [Docker Compose](https://docs.docker.com/compose/install/).

Após instalar ambos, execute os seguintes comandos:

```bash
git clone https://github.com/fmhy/edit.git
cd edit
sudo docker compose up --build
```

Pode levar alguns minutos para construir a imagem e iniciar o contêiner, que será executado na porta 4173.

### Nix Flake

Você pode usar o [nix](https://nixos.org/) para configurar um ambiente de desenvolvimento, temos um [flake](https://nixos.wiki/wiki/Flakes) que configura o `nodejs` e o `pnpm`.

1. Faça um fork do repositório e clone-o para sua máquina local com `git clone https://github.com/fmhy/edit.git`.
2. Execute `nix flake update` para atualizar o arquivo de bloqueio do flake.
3. Execute `nix develop` para entrar no ambiente de desenvolvimento.
4. Faça suas alterações.
5. Saia do ambiente de desenvolvimento executando `exit`.

### Manualmente

Você precisará instalar o seguinte:
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) - Instale a versão 21.7.3
- [pnpm 9.12.2+](https://pnpm.io/installation)

#### Passo 1: Clonar o Repositório

```bash
git clone https://github.com/fmhy/edit.git
cd edit
```

#### Passo 2: Instalar Dependências

Instale as dependências do projeto usando pnpm:

```bash
pnpm install
```

#### Passo 3: Modo de Desenvolvimento

Para executar o projeto no modo de desenvolvimento:

```bash
# Inicie o site de documentação no modo dev
pnpm docs:dev

# Inicie a API no modo dev (se necessário)
pnpm api:dev
```

O servidor de desenvolvimento será iniciado em `http://localhost:5173` por padrão.

#### Passo 4: Construção para Produção

Você precisará atualizar:
- `meta`: Constante em `docs/.vitepress/constants.ts`
  - `name`: Nome da sua instância
  - `hostname`: Seu domínio
  - `description`: Descrição da sua instância
  - `tags`: Tags Opengraph
  - `build`: Opções de construção (podem ser configuradas com [Variáveis de Ambiente](/other/selfhosting#environment-variables))
- `docs/index.md`
  - `title`
  - `description`
  - `hero.name`
  - `hero.tagline`

Para construir o projeto para produção:

```bash
# Construa o site de documentação
pnpm docs:build

# Construa a API (se necessário) usando o preset Node.js
NITRO_PRESET=node pnpm api:build
```

#### Passo 5: Pré-visualização da Construção para Produção

Para pré-visualizar a construção para produção localmente:

```bash
# Pré-visualize o site de documentação
pnpm docs:preview

# Pré-visualize a API (se necessário)
pnpm api:preview
```

#### Passo 6: Implantação

Consulte o [guia de implantação do VitePress](https://vitepress.dev/guide/deploy) para mais informações.

### Implantação da API

Se você quiser implantar o componente API (sistema de feedback), precisará configurar os Workers e o armazenamento KV do Cloudflare.

#### Pré-requisitos

- Uma [conta Cloudflare](https://dash.cloudflare.com/sign-up)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) instalado globalmente

#### Passo 1: Configurar o Wrangler

Atualize `wrangler.toml` com as informações da sua conta Cloudflare:

1. Obtenha seu ID de conta no painel do Cloudflare (encontrado na barra lateral direita)
2. Substitua o valor `account_id` em `wrangler.toml` pelo seu ID de conta
3. Se você estiver usando um domínio personalizado, mantenha `workers_dev = false` e atualize a seção `routes`
4. Se você estiver implantando em `*.workers.dev`, defina `workers_dev = true` e remova a seção `routes`

#### Passo 2: Criar Namespace KV

Crie um namespace KV para armazenamento de dados:

```bash
npx wrangler kv:namespace create STORAGE
```

Este comando retornará um ID de namespace. Copie este ID e substitua o valor `id` na seção `[[kv_namespaces]]` de `wrangler.toml` (linha 14).

**Nota:** Se você quiser implantar sem executar o Wrangler localmente (por exemplo, em CI/CD), você precisará:
1. Criar o namespace KV manualmente no painel do Cloudflare
2. Atualizar os valores `account_id` e `id` em `wrangler.toml` no seu fork

#### Passo 3: Construir e Implantar

Construa e implante a API:

```bash
# Construa a API
pnpm api:build

# Implante no Cloudflare Workers
pnpm api:deploy
```

A API será implantada no seu domínio configurado ou subdomínio `*.workers.dev`.

#### Limitação de Taxa (Opcional)

A vinculação do limitador de taxa requer configuração através do painel do Cloudflare. Você pode pular isso para implantações básicas ou configurá-lo posteriormente no painel de Workers na seção "Limitação de taxa".

#### Variáveis de Ambiente

##### Variáveis de Tempo de Construção (para Documentação)

Essas variáveis controlam o que é incluído ao construir o site de documentação:

- `FMHY_BUILD_NSFW` - Habilitar entrada NSFW na barra lateral (experimental)
- `FMHY_BUILD_API` - Habilitar componente API para sistema de feedback

##### Variáveis de Tempo de Execução (para Trabalhador de API)

Essas variáveis são usadas pela API do Trabalhador Cloudflare implantada:

- `WEBHOOK_URL` - URL do webhook do Discord para postar mensagens de feedback (necessário para a funcionalidade de feedback da API)

#### Solução de Problemas

1. Se você encontrar problemas com a versão do Node.js, certifique-se de que está usando o Node.js 21+
2. Para problemas relacionados ao pnpm, certifique-se de que está usando o pnpm 9+
3. Se você encontrar problemas de construção, tente limpar o cache:
    ```bash
    # Linux
    rm -rf docs/.vitepress/cache

    # PowerShell
    rm -r -fo docs/.vitepress/cache
    ```

### Proxy Reverso

Você deve ser capaz de usar qualquer proxy reverso com este site vitepress, mas encontre uma configuração razoável para um servidor nginx [no repositório aqui](https://github.com/fmhy/edit/blob/main/.github/assets/nginx.conf)
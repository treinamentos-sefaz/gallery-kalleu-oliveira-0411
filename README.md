# Galeria de Fotos & Portfólio

Uma aplicação profissional de galeria de fotos e portfólio construída com Next.js 15, TypeScript e Tailwind CSS. Este projeto foi desenvolvido para **demonstrar funcionalidades do GitHub Copilot** em uma aplicação Next.js real, orientada a componentes. As demos incluídas mostram como o Copilot pode auxiliar na geração de código, refatoração, construção de UI e muito mais.

## Demos

- Todos os guias e exemplos de demo estão na pasta [`demos/`](demos/).
- Para mais informações sobre cada demo, consulte o arquivo [README](demos/README.md) no diretório `demos/`.
- Para começar, confira a primeira demo [`features-demo.md`](demos/features-demo.md) com um passo a passo das funcionalidades da galeria e capacidades do Copilot.

### Criando uma Nova Demo

Se você deseja contribuir e criar uma nova demo, siga estes passos:

1. Abra o GitHub Copilot Chat.
2. Digite o prompt `/create-copilot-demo` com uma explicação da sua ideia de demo
3. O Copilot irá gerar um novo arquivo de demo no diretório `demos/`.
4. Preencha as seções restantes com instruções detalhadas, exemplos e resultados esperados.

Após finalizar a demo, não esqueça este rápido acompanhamento:

1. Adicione a visão geral, habilidades-chave e link da demo no [README de demos](demos/README.md)

## Primeiros Passos

### Requisitos Técnicos

- **Node.js** v18 ou superior
- **npm** (ou yarn, pnpm, bun)

### Início Rápido com GitHub Codespaces

A maneira mais rápida de começar é usando GitHub Codespaces:

1. Clique no botão **"Code"** na página do repositório no GitHub
2. Selecione a aba **"Codespaces"**
3. Clique em **"Create codespace on main"** (ou sua branch atual)
4. Aguarde o codespace ser construído e iniciado

O codespace irá automaticamente:

- Instalar todas as dependências (`npm install`)
- Iniciar o servidor de desenvolvimento (`npm run dev`)
- Configurar o GitHub Copilot e extensões essenciais do VS Code
- Encaminhar a porta 3000 para a aplicação Next.js

Quando estiver pronto, você pode acessar a aplicação pela URL de porta encaminhada fornecida no terminal.

### Instalação Local

1. Clone o repositório:
   ```bash
   git clone https://github.com/ps-copilot-sandbox/copilot-intermediate-gallery-repo.git
   cd gallery-repo
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do Projeto

```bash
src/
├── app/                 # Páginas do Next.js 15 App Router
├── components/          # Componentes React reutilizáveis
├── lib/                 # Funções utilitárias e helpers
demos/                   # Guias e templates de demos
```

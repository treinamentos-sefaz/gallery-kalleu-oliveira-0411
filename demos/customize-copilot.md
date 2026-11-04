# Demo de Personalização do Copilot

Bem-vindo à demo de personalização do GitHub Copilot! Aqui você aprenderá como adaptar o GitHub Copilot às suas necessidades específicas e preferências de workflow. Esta demo cobre funcionalidades avançadas que ajudam a otimizar sua experiência de codificação assistida por IA para máxima produtividade.

## O Que Você Vai Aprender
Ao final desta demo, você será capaz de:
- [ ] Saber como monitorar seu uso de requisições premium
- [ ] Alternar entre modelos de IA no Chat e completações de código (OPCIONAL)
- [ ] Usar arquivos de prompt para interações consistentes com IA
- [ ] Utilizar modos de Chat para diversas tarefas de desenvolvimento
- [ ] Configurar instruções personalizadas com servidores MCP para comportamento personalizado da IA

**Tempo Estimado:** 25-30 minutos

---

## 📊 Passo 1: Monitorar Requisições Premium

### Opção A: Acessar o Dashboard Premium

Na IDE:

1. **Abra o VS Code** e certifique-se de que o GitHub Copilot está ativo
2. **Localize o status do Copilot:** Procure o logo do GitHub Copilot na barra de status inferior direita

### Opção B: Acessar o Dashboard Premium

No github.com:

1. **Navegue até o GitHub:** Acesse [https://github.com/settings/copilot/features](https://github.com/settings/copilot/features)
2. **Faça login:** Certifique-se de estar logado na sua conta GitHub
3. **Visualize o dashboard:** Revise a porcentagem de uso de requisições premium e seus limites

Veja a porcentagem de requisições premium para entender quantas requisições restam.

---

## 🔄 Passo 2: Troca Avançada de Modelos (OPCIONAL)

Modo: Agent

Para esta demo, tente a mesma tarefa de codificação com diferentes modelos e observe as diferenças.

### Instruções

1. Altere seu modo para **edit**
2. Selecione o modelo que deseja testar
3. Adicione os seguintes arquivos à interface do GitHub Copilot Chat como arquivos relacionados. Você pode fazer isso selecionando `Add Context` e digitando o nome de cada arquivo. OU feche todas as abas, depois abra esses três arquivos. Selecione `Add Context`, depois `Open Editors` para capturar todos os arquivos abertos na sua IDE. De qualquer forma, serão capturados os arquivos abaixo.
```markdown
- /src/app/gallery/page.tsx
- /src/lib/mock-photo-data.ts
- /src/components/GalleryGrid.tsx
```
4. Permaneça na última página: GalleryGrid e destaque as linhas 26 - 43
5. Adicione o prompt abaixo:

Prompt
```typescript
"Me ajude a refatorar esta função para melhor desempenho, legibilidade e adicione melhorias em TypeScript."
```

Repita os passos 2-5 para outros dois modelos de sua escolha.

Quais respostas você mais gostou? E quais menos? Discuta no seu grupo.

---

## 📝 Passo 3: Use Arquivos de Prompt

1. Vá até a pasta `/.github/prompts` e examine os arquivos.
- Há dois arquivos para escolher, cada um com diferentes níveis de dificuldade.
- Examine o formato de cada um antes de escolher qual usar.
2. Escolha o arquivo que deseja testar.
3. Adicione o prompt abaixo dependendo do arquivo de prompt.

**Gerar mock data**
Prompt
```markdown
/generate-mock-photo-data 3
```

**Refatorar componente de UI**
Prompt
```markdown
/generate-new-ui for the recent galleries table in the admin page. I want it to be the replacement component for the current table and be reuseable.  Place it in the layout folder.
```

**DESAFIO BÔNUS:** Crie seu próprio arquivo de prompt para testes unitários

Peça ao Copilot para gerar um novo arquivo de prompt para testes unitários. Siga os passos:

1. Vá para a interface do GitHub Copilot
2. Clique no ícone de engrenagem no canto superior direito
3. Selecione "Prompt Files"
4. Clique no ícone de mais que diz "New prompt file"
5. Selecione a pasta onde deseja salvar o arquivo, ex: `.github/prompts/`
6. Nomeie o arquivo como 'generate-unit-tests.prompt.md'
7. Crie seu próprio arquivo de prompt personalizado com o GitHub Copilot:

```markdown
<!-- Add in related files to Ask mode -->
Related files:
- /src/components/ui/FeatureCard.tsx
- /.github/prompts/generate-new-ui.prompt.md
- /.github/prompts/generate-mock-photo-data.prompt.md

<!-- Copy/paste prompt below -->
Ajude-me a criar arquivos de prompt para gerar testes unitários de componentes de interface (UI).
```

## 🎭 Passo 4: Utilize Custom Agents

1. Examine o arquivo `plan.agent.md` na pasta `.github/agents`. 
2. Altere o modo para o modo "Plan"
3. Adicione o prompt abaixo e examine a sugestão

```markdown
ajude-me a planejar uma nova página para criar novas galerias
```
**DISCUSSÃO**
Examine a resposta. Que outros modos seriam úteis para este repo?

**Se houver tempo**
Tente implementar as alterações do plano usando um modo diferente para explorar como a experiência varia.

## 🛠️ Passo 5: Instruções Personalizadas e Servidores MCP

### Entendendo Servidores MCP

Servidores Model Context Protocol (MCP) permitem estender as capacidades do GitHub Copilot para fontes de dados externas. Instruções personalizadas podem ajudar a guiar o comportamento do Copilot para alinhar com os padrões e convenções de codificação do seu projeto. Isso é particularmente útil para grandes equipes ou projetos complexos onde consistência é fundamental.

**Pré-requisitos**
- Licença do GitHub Copilot
- VSCode 1.99 ou posterior
- Servidores MCP no Copilot habilitados

### Parte Um: Familiarize-se com instruções personalizadas

Instruções personalizadas permitem moldar o comportamento do GitHub Copilot para corresponder ao estilo de codificação, boas práticas e convenções de projeto da sua equipe. Com instruções personalizadas, o Copilot pode automaticamente seguir seus padrões preferidos, usar suas convenções de nomenclatura e até se adaptar ao seu workflow. Vamos ver quais são as instruções personalizadas deste repo:

1. Vá até `.github/copilot-instructions.md`
2. Examine o arquivo. Você notou que as sugestões de código foram baseadas neste arquivo?

Agora vamos gerar um custom-instructions.md com a ajuda do GitHub Copilot.

1. Vá para o Copilot Chat
2. Selecione o ícone de engrenagem no canto superior direito
3. Clique em "Generate Instructions"

Examine este arquivo e observe como é um bom ponto de partida para este projeto. Você pode remover ou adicionar qualquer instrução que sua equipe tenha em mente!

Instruções personalizadas funcionam em conjunto com MCP para ajudar a guiar o agente.

### Parte Dois: Autenticação MCP

1. Vá até `.vscode/mcp.json` e examine o arquivo de configuração. Há duas opções para escolher dependendo da sua preferência e versão. Para OAuth, consulte a `Opção A` abaixo. Para instruções com PAT, consulte a `Opção B`

**Opção A:** VSCode usando OAuth (Versão 1.101 ou superior) Instruções

2. Procure o servidor em `// Using OAuth (version 1.101 or greater)`
3. Clique em `start`
4. Um pop-up aparecerá para o processo de autenticação dizendo "The MCP Server Definition 'github' wants to authenticate to GitHub."
5. Selecione "Allow"
6. Selecione a conta que deseja autenticar e pressione enter

**Opção B:** VSCode usando GitHub PAT Instruções

2. Siga as instruções do [Repositório do GitHub MCP Server](https://github.com/github/github-mcp-server?tab=readme-ov-file#remote-github-mcp-server)

Agora que você autenticou via OAuth ou PAT, vamos confirmar as ferramentas.

1. Vá para o GitHub Copilot Chat
2. Selecione o modo "Agent"
3. Clique no ícone de ferramentas
4. Visualize todos os conjuntos de ferramentas disponíveis

### Parte Três: Criando issues neste template com MCP

1. Como você já está no modo agent no VSCode, digite o seguinte prompt no chat para criar uma issue com o servidor MCP

```markdown
create an issue for this repo for a feature request to toggle between dark mode and light mode
```

2. Examine a resposta. Após confirmar, pressione "continue"
3. Vá até o repositório e visualize a issue criada!

## ✅ Checklist de Conclusão

Marque cada item conforme concluir:

- [ ] Explorou o monitoramento de requisições premium e identificou padrões de uso
- [ ] Praticou técnicas de troca de modelo
- [ ] Usou arquivo de prompt específico do projeto
- [ ] Experimentou diferentes modos de chat
- [ ] Entendeu servidores MCP ou configurou padrões de instruções personalizadas
- [ ] Aplicou personalizações para melhorar seu workflow de desenvolvimento

## 🚀 Próximos Passos

Excelente trabalho! Você agora dominou as funcionalidades avançadas de personalização do GitHub Copilot.

---

👉 **[Iniciar Demo do Copilot Spaces](./copilot-spaces.md)**

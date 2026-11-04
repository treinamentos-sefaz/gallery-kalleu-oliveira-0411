# Demo de Práticas de Engenharia

Bem-vindo à demo de práticas de engenharia do GitHub Copilot! Aqui vamos nos familiarizar com as ferramentas e funcionalidades profissionais do GitHub Copilot. Começaremos na IDE VS Code e depois iremos para o github.com para funcionalidades adicionais de colaboração.

## O Que Você Vai Aprender
Ao final desta demo, você será capaz de:
- [ ] Entender como depurar e inspecionar o processo de decisão do Copilot
- [ ] Saber como compartilhar conversas de chat com membros da equipe
- [ ] Estar familiarizado com system prompts e sua importância
- [ ] Entender funcionalidades de colaboração no GitHub.com

**Tempo Estimado:** 10-15 minutos

## 🔧 Funcionalidades da IDE

O GitHub Copilot possui diversas funcionalidades projetadas para ajudar equipes de engenharia a entender a tomada de decisão da IA e colaborar efetivamente na geração de código.

### 🐛 Passo 1: Inspecione o Processo de Decisão do Copilot

**Por que isso importa:** Entender como o Copilot faz sugestões ajuda você a escrever prompts melhores e confiar nas recomendações da IA.

#### Método 1: Usando Atalho de Teclado
1. Pressione `Ctrl + Shift + P` (Windows/Linux) ou `Cmd + Shift + P` (Mac)
2. Digite "Copilot Chat Debug"
3. Selecione **"Copilot Chat Debug: Focus on Copilot Chat Debug View"**

#### Método 2: Usando o Menu
1. No Copilot Chat, clique no "..." do lado da engrenagem
2. Clique "Show Chat Debug View"

#### O Que Você Verá
Quando o painel de debug abrir, você pode explorar:
- **Prompts:** Os prompts reais enviados à IA
- **System Prompts:** Instruções de fundo dadas ao Copilot
- **Metadata:** Informações de contexto e configurações
- **Detalhes da Resposta:** Como o Copilot formulou suas sugestões

**💡 Dica:** Use isso quando as sugestões do Copilot parecerem inesperadas - você pode ver exatamente qual contexto ele está usando!

---

### 💬 Passo 2: Compartilhe Conversas de Chat com Sua Equipe

**Por que isso importa:** Compartilhar prompts e conversas bem-sucedidas ajuda sua equipe a aprender padrões eficazes de colaboração com IA.

#### Exportar uma Conversa de Chat

**Método 1: Atalho de Teclado**
1. Pressione `Ctrl + Shift + P` (Windows/Linux) ou `Cmd + Shift + P` (Mac)
2. Digite "Chat: Export"
3. Selecione **"Chat: Export Chat..."**

**Método 2: Navegação pelo Menu**
1. Vá em **View** → **Command Palette**
2. Digite "Chat: Export"
3. Selecione **"Chat: Export Chat..."**

**O que acontece:** Isso cria um arquivo contendo todo o histórico do seu chat que você pode compartilhar com colegas de equipe.

#### Importar uma Conversa de Chat

**Método 1: Atalho de Teclado**
1. Pressione `Ctrl + Shift + P` (Windows/Linux) ou `Cmd + Shift + P` (Mac)
2. Digite "Chat: Import"
3. Selecione **"Chat: Import Chat..."**

**Método 2: Navegação pelo Menu**
1. Vá em **View** → **Command Palette**
2. Digite "Chat: Import"
3. Selecione **"Chat: Import Chat..."**

**Caso de uso:** Importe conversas compartilhadas por colegas para ver suas estratégias de prompting bem-sucedidas.

---

## 🌐 Funcionalidades de Colaboração no GitHub.com

O GitHub.com oferece ferramentas adicionais para gerenciar o Copilot no nível organizacional e compartilhar conhecimento entre equipes.

### 🎛️ Passo 3: Explore Prompts

**Por que isso importa:** Prompts definem como o Copilot se comporta em toda a sua organização. Entender isso ajuda a garantir geração de código consistente e de alta qualidade que segue os padrões da sua equipe.

#### Instruções Pessoais
1. **Navegue até o GitHub Copilot:** Acesse [https://github.com/copilot](https://github.com/copilot)
2. **Acesse configurações:** Clique no ícone do seu usuário no canto inferior esquerdo
3. **Abra instruções pessoais:** Selecione **"Personal instructions"**
4. **Adicione instruções:** Você pode adicionar diretrizes personalizadas sobre como o Copilot responde aos seus prompts

#### O Que Explorar
- **Instruções pessoais:** Há alguma preferência que você gostaria de incluir nas instruções? Teste!

---

### 🤝 Passo 4: Gerencie Conversas Compartilhadas

**Por que isso importa:** Conversas compartilhadas criam uma base de conhecimento de interações eficazes com IA da qual toda a sua equipe pode aprender e se basear.

#### Compartilhar uma Conversa
1. **Navegue até o GitHub Copilot:** Acesse [https://github.com/copilot](https://github.com/copilot)
2. **Inicie um chat:** Comece uma conversa. Na janela de chat, digite o seguinte prompt:
   ```markdown
   Quais são as vantagens da linguagem de programação Go?
   ```
3. **Compartilhe a conversa:** Copie o link na sessão do agent

#### Visualizar Conversa Compartilhada
1. **Navegue até o GitHub Copilot:** Acesse [https://github.com/copilot](https://github.com/copilot)
2. **Acesse opções de compartilhamento:** Clique no ícone do seu usuário no canto inferior esquerdo
3. **Abra gerenciamento de conversas:** Selecione **"Manage shared conversations"**

#### O Que Explorar com Conversas Compartilhadas
- **Conversas Compartilhadas:** Navegue pelas conversas compartilhadas pela sua equipe
- **Categorias:** Veja como as conversas são organizadas por tópico
- **Padrões de Uso:** Observe quais tipos de conversas são compartilhadas com mais frequência

**💼 Boas Práticas para Compartilhamento:**
- Compartilhe conversas que resolveram problemas complexos
- Inclua contexto sobre quando e por que certas abordagens funcionam
- Marque conversas com palavras-chave relevantes para fácil descoberta

## 🚀 Próximos Passos

Parabéns! A segunda demo foi concluída.

👉 **[Iniciar Demo de Personalização do Copilot](./customize-copilot.md)**

# Demo de Funcionalidades

Bem-vindo a este repositório! Você provavelmente está se perguntando o que ele é e como funciona. Vamos trabalhar com este repositório durante todo o treinamento, então é importante descobrir o que ele faz!

Vamos começar aprendendo os diferentes modos.

## O Que Você Vai Aprender
Ao final desta demo, você será capaz de:
- [ ] Entender as funcionalidades principais do GitHub Copilot
- [ ] Saber como usar participantes do chat e slash commands
- [ ] Gerar código com assistência de IA
- [ ] Saber como revisar e fazer commit de código gerado por IA

**Tempo Estimado:** 15-20 minutos

## 🚀 Primeiros Passos

Mais informações sobre instalação podem ser encontradas no arquivo [README](../README.md). Para um início rápido, siga estes passos:

1. **Abra o repositório na sua IDE** (ex: VS Code)
2. **Crie uma nova branch:** `git checkout -b USUARIO-copilot-exercicios`
2. **Instale os pacotes**: Execute `npm install` no terminal
3. **Inicie o servidor de desenvolvimento**: Execute `npm run dev`
4. **Abra o projeto no navegador**: Acesse [http://localhost:3000](http://localhost:3000) para uma pré-visualização ao vivo

Continue a demo seguindo os passos abaixo.

## 🎯 Passo 1: Descubra as Funcionalidades Disponíveis

Modo: Ask

**Objetivo:** Aprender o que o GitHub Copilot pode fazer por você no modo Ask.

**Ação:** Digite o seguinte comando no chat do Copilot:
Prompt
```markdown
/help
```

**Resultado Esperado:** Você verá uma lista de comandos e funcionalidades disponíveis.

---

## 📚 Passo 2: Aprenda Sobre o Projeto

### 2.1 Obtenha uma Visão Geral do Projeto
**Prompt:**
```markdown
Dê-me um resumo do projeto e uma visão geral dos arquivos mais impactantes.
```

**Ação de Acompanhamento:**
- Selecione a primeira página em "Most Impactful Files"
- Destaque a primeira seção

### 2.2 Explique o Código Selecionado
**Prompt:**
```markdown
/explain 
```

**O que isso faz:** O Copilot explicará a seção de código destacada em detalhes.

### 2.3 Obtenha Sugestões de Melhoria
**Prompt:**
```markdown
Me fale sobre as melhorias que podem ser feitas neste projeto.
```

**💡 Dica:** O Copilot pode ajudar não apenas com aprendizado, mas também com planejamento e ideias!

## 💻 Passo 3: Gere Código com Completações do Copilot

### Instruções de Completação de Código
1. **Navegue até o arquivo:** Abra [`src/app/layout.tsx`](src/app/layout.tsx)
2. **Encontre o local:** Vá até a linha 52 `{/* REPLACE THIS COMMENT */}`
3. **Remova o comentário da linha 52:** e substitua pelo seguinte comentário:

```tsx
{/* Crie um rodapé para esta seção. Ele deve conter o logotipo e os direitos autorais.*/}
```

5. **Aguarde a sugestão:** O Copilot sugerirá código automaticamente
6. **Aceite a sugestão:** Pressione `Tab` para aceitar ou `Esc` para dispensar
7. **Verifique suas alterações:** Salve o arquivo e atualize [http://localhost:3000](http://localhost:3000) para ver seu novo footer

## 📝 Passo 4: Revise e Faça Commit das Suas Alterações

### Opção A: Revisão com IA (Funcionalidade Premium)
Se você tem acesso premium:

1. **Selecione o código gerado:** Destaque o código do footer que foi criado
2. **Abra o menu do Copilot:** Clique direito → Selecione "Copilot"
3. **Obtenha revisão:** Escolha "Review and Comment"
4. **Processe o feedback:** Revise as sugestões e aceite/descarte conforme necessário

### Opção B: Revisão Manual (Alternativa Gratuita)
Se você não tem acesso premium:

1. **Leia o código:** Revise o que foi gerado
2. **Verifique a funcionalidade:** Está de acordo com os requisitos?
3. **Verifique o estilo:** Segue os padrões de código do projeto?

### Faça Commit das Suas Alterações
1. **Abra o Source Control:** Clique no ícone de Source Control na barra lateral esquerda
2. **Gere a mensagem de commit:** Passe o mouse sobre a caixa de mensagem de commit → Clique em "Generate Commit Message with Copilot"
3. **Revise e edite:** Modifique a mensagem gerada se necessário
4. **Commit:** Clique em "Commit" e depois em "Sync Changes" para enviar

**🎉 Indicador de sucesso:** Você deve ver suas alterações no histórico do git!

## ✅ Checklist de Conclusão

Marque cada item conforme concluir:

- [ ] Usou o comando `/help` com sucesso
- [ ] Obteve o resumo do projeto
- [ ] Explicou código com `/explain`
- [ ] Gerou código do footer com IA
- [ ] Revisou o código gerado
- [ ] Fez commit das alterações no git

## 🚀 Próximos Passos

Parabéns! Você completou sua primeira demo do GitHub Copilot.

👉 **[Iniciar Demo de Práticas de Engenharia](./engineering-practices.md)**

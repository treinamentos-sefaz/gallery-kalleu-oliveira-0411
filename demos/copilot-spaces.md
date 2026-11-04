# Demo do GitHub Copilot Spaces

Bem-vindo à demo do GitHub Copilot Spaces! Neste exercício, você aprenderá como criar e utilizar GitHub Copilot Spaces para colaborar em tarefas de desenvolvimento na aplicação Galeria de Fotos & Portfólio.

## O Que Você Vai Aprender
Ao final desta demo, você será capaz de:
- [ ] Entender o que são GitHub Copilot Spaces e seus benefícios
- [ ] Saber como criar um novo Copilot Space
- [ ] Configurar um Space com objetivos e contexto específicos
- [ ] Completar tarefas de desenvolvimento usando assistência colaborativa de IA
- [ ] Compartilhar e gerenciar Spaces com membros da equipe

**Tempo Estimado:** 20-25 minutos

## 🎯 Passo 1: Crie Seu Primeiro Copilot Space

**Objetivo:** Configurar um Copilot Space dedicado para trabalhar em funcionalidades da galeria.

### Configuração
1. Acesse `https://github.com/copilot/spaces`
2. Selecione `Create Space`

### Opção do Grupo A: Análise de Segurança & Hardening

1. Digite o nome `Galeria de Fotos & Portfólio`
2. Selecione o proprietário `Username` OU `OrgName`
3. Adicione a descrição `Implemente as melhores práticas de segurança para o aplicativo de fotos.`
4. Selecione `Save`

**Adicionando instruções**

5. Selecione `Instructions` e adicione o seguinte prompt:
```markdown
You are a security expert helping to analyze and improve the security posture of a Next.js 15 photo gallery application. Focus on:

- File upload security vulnerabilities and mitigations
- Input validation and sanitization
- Authentication and authorization patterns
- XSS prevention in user-generated content
- Secure image processing and storage
- OWASP Top 10 web application security risks
- Next.js specific security best practices

Provide specific code examples and security recommendations that follow industry standards and OWASP guidelines. Consider both client-side and server-side security measures.
```
6. Selecione save

**Adicionando fontes**

7. Selecione `Add sources` e selecione `Add files and repositories`
8. Adicione os seguintes arquivos e pressione `save`
```markdown
src/components/upload/UploadZone.tsx
src/lib/mock-photo-data.ts
src/app/layout.tsx
next.config.ts
```
9. Selecione `Add sources` e selecione `Link files, pull requests, and issues`
10. Adicione o link da issue `https://github.com/ps-copilot-sandbox/copilot-intermediate-gallery-repo/issues/3` e pressione `save`
11. Selecione `Add sources` e selecione `Add text content`
12. Adicione o seguinte conteúdo e pressione `save`
```markdown
## OWASP Top 10 2021 - Principais Riscos de Segurança para Aplicações Web

1. **A01 Broken Access Control** - Usuários podem agir fora de suas permissões pretendidas
2. **A02 Cryptographic Failures** - Falhas relacionadas à criptografia que frequentemente levam à exposição de dados sensíveis
3. **A03 Injection** - Dados fornecidos pelo usuário não são validados, filtrados ou sanitizados pela aplicação
4. **A04 Insecure Design** - Riscos relacionados a falhas de design e arquitetura
5. **A05 Security Misconfiguration** - Falta de hardening de segurança apropriado em qualquer parte da stack da aplicação
6. **A06 Vulnerable and Outdated Components** - Uso de componentes com vulnerabilidades conhecidas
7. **A07 Identification and Authentication Failures** - Confirmação da identidade do usuário, autenticação e gerenciamento de sessão
8. **A08 Software and Data Integrity Failures** - Código e infraestrutura que não protegem contra violações de integridade
9. **A09 Security Logging and Monitoring Failures** - Falhas em logging e monitoramento combinadas com integração ausente ou ineficaz com resposta a incidentes
10. **A10 Server-Side Request Forgery** - Falhas de SSRF ocorrem sempre que uma aplicação web busca um recurso remoto sem validar a URL fornecida pelo usuário

## Headers de Segurança do Next.js
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## Considerações de Segurança para Upload de Arquivos
- Validação de tipo de arquivo
- Limites de tamanho de arquivo
- Escaneamento de malware
- Armazenamento seguro de arquivos
- Vulnerabilidades no processamento de imagens
```

### Opção do Grupo B: Geração de Documentação & Design de API

1. Digite o nome `Photo Gallery - Documentation Hub`
2. Selecione o proprietário `Username` OU `OrgName`
3. Adicione a descrição `Create comprehensive documentation and API design documentation for the photo gallery application`
4. Selecione `Save`

**Adicionando instruções**

5. Selecione `Instructions` e adicione o seguinte prompt:
```markdown
You are a technical documentation specialist helping to create comprehensive documentation for a Next.js 15 photo gallery application. Focus on:

- API documentation using OpenAPI/Swagger specifications
- Component documentation with usage examples
- Architecture decision records (ADRs)
- User guides and installation instructions
- Code documentation and inline comments
- README improvements and contribution guidelines
- Performance optimization documentation

Follow industry best practices for technical writing, API documentation standards (OpenAPI 3.0), and modern documentation tools. Create clear, actionable documentation that serves both developers and end users.
```
6. Selecione save

**Adicionando fontes**

7. Selecione `Add sources` e selecione `Add files and repositories`
8. Adicione os seguintes arquivos e pressione `save`
```markdown
README.md
COMPONENT_USAGE_GUIDE.md
src/components/ui/index.ts
src/app/page.tsx
package.json
```
9. Selecione `Add sources` e selecione `Link files, pull requests, and issues`
10. Adicione o link da issue `https://github.com/ps-copilot-sandbox/copilot-intermediate-gallery-repo/issues/4` e pressione `save`
11. Selecione `Add sources` e selecione `Add text content`
12. Adicione o seguinte conteúdo e pressione `save`
```markdown
# Padrões de Documentação

## Documentação de API
- Especificação OpenAPI 3.0 com schemas completos
- Nomenclatura clara de endpoints e códigos de status HTTP
- Exemplos de request/response e tratamento de erros
- Documentação de autenticação e rate limiting

## Documentação de Código
- Propósito e parâmetros de funções/métodos
- Exemplos de uso e dependências
- Condições de erro e valores de retorno
- Considerações de performance

## Documentação de Arquitetura
- Registros de decisão (ADRs) com contexto e justificativa
- Design do sistema e relacionamentos entre componentes
- Guias de deploy e configuração
- Procedimentos de troubleshooting e manutenção

## Ferramentas & Formatos
- **API Docs**: Swagger UI, Postman, Insomnia
- **Code Docs**: JSDoc, TypeDoc, comentários inline
- **Wikis**: GitHub Wiki, Notion, Confluence
- **Sites Estáticos**: Docusaurus, GitBook, MkDocs
```

### Compartilhe seu Space [OPCIONAL]

**Esta opção é APENAS se você definiu o Proprietário como uma organização**

13. Selecione `Share` no canto superior direito
14. Altere `No Access` para `Viewer`
15. Copie o link e envie para o Grupo da Opção B.

**Resultado Esperado:** Um novo Copilot Space será criado e aberto, fornecendo a você um ambiente dedicado para esta sessão de desenvolvimento.

## 🤝 Passo 2: Colabore e Compartilhe

**Objetivo:** Usar um Copilot Space existente para completar a tarefa listada abaixo.

**Desafio:** Se seu grupo criou o Space em uma organização, troque de Copilot Spaces para testar o do outro grupo! Ou seja, se você escolheu a **Opção B** no exercício anterior, desta vez você seguirá o exercício da **Opção A** e vice-versa.

### Opção do Grupo A

1. Vá até o Copilot Space
2. Digite o seguinte prompt para analisar vulnerabilidades de segurança:

```markdown
I need help identifying and fixing security vulnerabilities in our photo gallery application. Please analyze our file upload component and suggest:

1. How to validate file types securely (not just by extension)
2. Protection against malicious file uploads and XSS attacks
3. Proper input sanitization for photo titles and tags
4. Content Security Policy (CSP) headers for Next.js
5. Rate limiting strategies for upload endpoints

Based on the OWASP Top 10 guidelines, what are the most critical security issues I should address first in this photo gallery application?
```

3. Faça outra pergunta! O que mais você gostaria de aprender?

### Opção do Grupo B

1. Vá até o Copilot Space
2. Digite o seguinte prompt para criar documentação abrangente:

```markdown
I need to create professional documentation for our photo gallery application. Please help me:

1. Generate an OpenAPI 3.0 specification for our photo management API endpoints
2. Create detailed component documentation with usage examples for our UI components
3. Write an Architecture Decision Record (ADR) for choosing Next.js 15 with TypeScript
4. Improve our README with installation, development, and deployment instructions
5. Create a contributing guide for other developers

Following industry best practices, what documentation structure would you recommend for this type of application?
```

3. Faça outra pergunta! O que mais você gostaria de aprender?

### Discussão Final

- Como vocês conseguiram colaborar com a equipe usando Copilot Spaces?
- Como as sugestões do Copilot ajudaram (ou atrapalharam) sua colaboração?
- O que vocês fariam diferente da próxima vez para melhorar o trabalho em equipe e a produtividade?

Compartilhe seus pensamentos e quaisquer dicas que descobriu para aproveitar ao máximo os Copilot Spaces em um ambiente de equipe.

**Resultado Esperado:** Você terá usado com sucesso assistência de IA com fontes externas de padrões da indústria para conduzir uma análise de segurança ou criar documentação abrangente para a aplicação Galeria de Fotos & Portfólio.

## ✅ Checklist de Conclusão

Marque cada item conforme concluir:

- [ ] Criou um novo GitHub Copilot Space com foco claro em segurança ou documentação
- [ ] Definiu instruções detalhadas incorporando padrões da indústria
- [ ] Adicionou arquivos relevantes do projeto ao contexto do Space
- [ ] Usou o Space para analisar a estrutura de código existente
- [ ] Documentou progresso e decisões dentro do Space
- [ ] Compartilhou ou salvou o Space para colaboração futura

## 🚀 Próximos Passos

Parabéns! Você criou e usou com sucesso um GitHub Copilot Space para trabalho de desenvolvimento focado.

👉 **[Iniciar Demo do GitHub Copilot Coding Agent](./coding-agent.md)**

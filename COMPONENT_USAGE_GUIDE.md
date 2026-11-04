# Usando Componentes de UI em Diferentes Páginas

Nossos componentes de UI recém-criados foram projetados para reutilização em várias páginas da aplicação. Aqui está um guia de como usá-los em diferentes contextos:

## Importando os Componentes

```tsx
import {
  Hero,
  SectionContainer,
  SectionTitle,
  FeatureCard,
} from "@/components/ui";
```

## Exemplos de Uso em Diferentes Páginas

### 1. Página Inicial (Já Implementada)

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Seção Hero com título e descrição */}
      <Hero
        title="Galeria de Fotos Profissional & Portfólio"
        description="Envie, organize e compartilhe suas fotografias com otimização automática, sistema de tags e recursos de aprovação de clientes."
      />

      {/* Seção de Cards de Funcionalidades */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {featureCardsData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
      </div>

      {/* Seções com cores de fundo personalizadas */}
      <SectionContainer bgColor="bg-white/30 dark:bg-slate-800/30">
        <SectionTitle title="Envio Rápido" className="text-center mb-12" />
        <UploadZone />
      </SectionContainer>

      {/* Seções com links "Ver Tudo" */}
      <SectionContainer>
        <SectionTitle title="Envios Recentes" viewAllLink="/gallery" />
        <GalleryGrid limit={6} currentPage={1} />
      </SectionContainer>
    </div>
  );
}
```

### 2. Página da Galeria

```tsx
export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Hero
        title="Navegue pela Sua Coleção de Fotografias"
        description="Visualize, filtre e organize suas imagens por coleção, tag ou data."
      />

      <SectionContainer>
        <SectionTitle title="Opções de Filtro" />
        <div className="grid md:grid-cols-3 gap-8">
          {filterOptions.map((option, index) => (
            <FeatureCard
              key={index}
              icon={option.icon}
              title={option.title}
              description={option.description}
              iconColor={option.iconColor}
            />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer bgColor="bg-white/30 dark:bg-slate-800/30">
        <SectionTitle title="Todas as Fotos" className="flex justify-between">
          <div className="flex space-x-2">
            <select className="px-3 py-2 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">
              <option>Mais Recentes</option>
              <option>Mais Antigas</option>
              <option>A-Z</option>
            </select>
            <button className="px-3 py-2 bg-blue-600 text-white rounded">
              Nova Coleção
            </button>
          </div>
        </SectionTitle>
        <GalleryGrid limit={12} currentPage={1} />
      </SectionContainer>
    </div>
  );
}
```

### 3. Painel Administrativo

```tsx
export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Hero
        title="Painel Administrativo"
        description="Gerencie suas galerias, clientes e portfólio"
      />

      <SectionContainer>
        <div className="flex justify-end mb-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Nova Galeria
          </button>
        </div>

        {/* Grid de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm"
            >
              {/* Conteúdo da estatística */}
            </div>
          ))}
        </div>

        {/* Ações Rápidas */}
        <SectionTitle title="Ações Rápidas" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Cards de ação */}
        </div>

        {/* Tabela de Galerias */}
        <SectionTitle
          title="Galerias Recentes"
          viewAllLink="/admin/galleries"
        />
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
          {/* Conteúdo da tabela */}
        </div>
      </SectionContainer>
    </div>
  );
}
```

### 4. Página de Envio

```tsx
export default function UploadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Hero
        title="Envie Suas Fotos"
        description="Arraste e solte suas fotos para otimização automática e organização."
      />

      <SectionContainer>
        <SectionTitle title="Zona de Envio" />
        <UploadZone />
      </SectionContainer>

      <SectionContainer bgColor="bg-white/30 dark:bg-slate-800/30">
        <SectionTitle title="Configurações de Envio" />
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
          {/* Conteúdo das configurações */}
        </div>
      </SectionContainer>
    </div>
  );
}
```

## Benefícios de Usar Esses Componentes

1. **Consistência** - Manter a mesma aparência em todas as páginas
2. **Eficiência** - Reduzir código repetitivo e fazer alterações em um só lugar
3. **Manutenibilidade** - Mais fácil de atualizar estilos e comportamentos
4. **Legibilidade** - Componentes de página mais limpos com clara separação de responsabilidades

## Estendendo os Componentes

Você também pode estender esses componentes para casos de uso mais específicos. Por exemplo:

```tsx
// Criando um componente de seção especializado para estatísticas
function StatsSection({ stats }) {
  return (
    <SectionContainer>
      <SectionTitle title="Estatísticas" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm"
          >
            {/* Conteúdo da estatística */}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
```

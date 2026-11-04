import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { UploadZone } from "@/components/upload/UploadZone";
import { Hero, SectionContainer, SectionTitle, FeatureCard } from "@/components/ui";
import { featureCardsData } from "@/lib/mock-feature-card-data";

export default function Home() {
  return (
    <div className="page-gradient">
      {/* Hero Section */}
      <Hero 
        title="Galeria de Fotos Profissional & Portfólio" 
        description="Envie, organize e compartilhe suas fotografias com otimização automática, sistema de tags e recursos de aprovação de clientes."
      />
      
      {/* Feature Cards Section */}
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

      {/* Quick Upload Section */}
      <SectionContainer bgColor="bg-white/30 dark:bg-slate-800/30">
        <SectionTitle title="Envio Rápido" className="text-center mb-12" />
        <UploadZone />
      </SectionContainer>

      {/* Recent Gallery Preview */}
      <SectionContainer>
        <SectionTitle title="Envios Recentes" viewAllLink="/gallery" />
        <GalleryGrid limit={6} currentPage={1} />
      </SectionContainer>
    </div>
  );
}

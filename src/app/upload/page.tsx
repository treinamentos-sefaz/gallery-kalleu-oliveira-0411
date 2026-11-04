import { Settings, Users, Globe } from "lucide-react";
import { UploadZone } from "@/components/upload/UploadZone";
import { SectionContainer, SectionTitle, FeatureCard, Hero } from "@/components/ui";

export default function UploadPage() {
  return (
    <div className="page-gradient">
      <Hero 
        title="Envie Suas Fotos"
        description="Compartilhe suas fotografias com otimização automática, sistema de tags e organização. Perfeito para construir seu portfólio ou compartilhar com clientes."
      />
      
      <SectionContainer className="pb-0">        
        {/* Upload Zone */}
        <div className="mb-12">
          <UploadZone />
        </div>
      </SectionContainer>

      <SectionContainer bgColor="bg-slate-100 dark:bg-slate-800/50">
        <SectionTitle title="Recursos de Envio" />
        
        {/* Upload Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <FeatureCard 
            icon={Settings}
            title="Otimização Automática"
            description="Suas fotos são automaticamente redimensionadas e otimizadas para visualização na web, preservando a qualidade."
            iconColor="text-green-600"
          />

          <FeatureCard 
            icon={Users}
            title="Compartilhamento com Clientes"
            description="Crie galerias privadas para revisão e aprovação de clientes com controles de download."
            iconColor="text-purple-600"
          />

          <FeatureCard 
            icon={Globe}
            title="Portfólio Público"
            description="Exiba seus melhores trabalhos com galerias públicas personalizáveis e otimização de SEO."
            iconColor="text-blue-600"
          />
        </div>

        {/* Upload Settings */}
        <div className="card-base p-6">
          <SectionTitle title="Configurações de Envio" className="!mb-6" />
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Gallery Assignment */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Atribuir à Galeria
              </label>
              <select className="form-select">
                <option>Selecione uma galeria...</option>
                <option>Casamento - Sarah & John</option>
                <option>Fotos Corporativas</option>
                <option>Portfólio Natureza</option>
                <option>Fotografia de Rua</option>
              </select>
            </div>

            {/* Visibility */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Visibilidade
              </label>
              <select className="form-select">
                <option>Público</option>
                <option>Privado</option>
                <option>Revisão do Cliente</option>
                <option>Rascunho</option>
              </select>
            </div>

            {/* Tags */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Tags (separadas por vírgula)
              </label>
              <input
                type="text"
                placeholder="casamento, retrato, externo, profissional..."
                className="form-input"
              />
            </div>

            {/* Copyright */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Aviso de Direitos Autorais
              </label>
              <input
                type="text"
                placeholder="© 2024 Seu Estúdio de Fotografia"
                className="form-input"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="btn-primary flex-1 py-3">
              Enviar & Processar
            </button>
            <button className="btn-secondary px-6 py-3">
              Salvar como Rascunho
            </button>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

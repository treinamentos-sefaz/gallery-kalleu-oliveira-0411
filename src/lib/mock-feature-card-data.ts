import { Upload, Users, Eye, LucideIcon } from "lucide-react";

interface FeatureCard {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

export const featureCardsData: FeatureCard[] = [
  {
    icon: Upload,
    title: "Envio Inteligente",
    description: "Arraste e solte com redimensionamento e otimização automáticos",
    iconColor: "text-blue-600"
  },
  {
    icon: Eye,
    title: "Aprovação de Clientes",
    description: "Compartilhe galerias com clientes para revisão e aprovação",
    iconColor: "text-green-600"
  },
  {
    icon: Users,
    title: "Compartilhamento Público",
    description: "Crie portfólios públicos com URLs personalizadas",
    iconColor: "text-purple-600"
  }
];
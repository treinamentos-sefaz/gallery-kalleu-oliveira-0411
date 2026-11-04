import { FolderOpen, Users, BarChart3 } from "lucide-react";

type StatColor = 'blue' | 'green' | 'purple' | 'orange';

export const dashboardStats = [
    { label: "Total de Fotos", value: "1.234", icon: FolderOpen, color: 'blue' as StatColor },
    { label: "Galerias Ativas", value: "28", icon: FolderOpen, color: 'green' as StatColor },
    { label: "Projetos de Clientes", value: "12", icon: Users, color: 'purple' as StatColor },
    { label: "Visualizações do Mês", value: "45.678", icon: BarChart3, color: 'orange' as StatColor },
];

export const recentGalleries = [
    {
        id: 1,
        name: "Casamento - Sarah & John",
        type: "Revisão do Cliente",
        photos: 156,
        views: 234,
        status: "Ativo",
        lastUpdated: "2 horas atrás"
    },
    {
        id: 2,
        name: "Fotos Corporativas",
        type: "Público",
        photos: 89,
        views: 1234,
        status: "Publicado",
        lastUpdated: "1 dia atrás"
    },
    {
        id: 3,
        name: "Portfólio Natureza",
        type: "Portfólio",
        photos: 234,
        views: 5678,
        status: "Publicado",
        lastUpdated: "3 dias atrás"
    },
    {
        id: 4,
        name: "Fotografia de Rua",
        type: "Rascunho",
        photos: 67,
        views: 0,
        status: "Rascunho",
        lastUpdated: "1 semana atrás"
    }
];
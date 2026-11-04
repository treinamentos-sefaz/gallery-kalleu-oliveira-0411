export interface Photo {
  id: string;
  url: string;
  title: string;
  tags: string[];
  likes: number;
  downloads: number;
  views: number;
  photographer?: string;
  dateTaken?: string;
}

export const mockPhotos: Photo[] = [
  {
    id: '1',
    url: '/placeholder-1.jpg',
    title: 'Paisagem ao Pôr do Sol',
    tags: ['landscape', 'sunset', 'nature'],
    likes: 124,
    downloads: 45,
    views: 1205,
    photographer: 'João Silva',
    dateTaken: '2024-01-15'
  },
  {
    id: '2',
    url: '/placeholder-2.jpg',
    title: 'Estudo de Retrato',
    tags: ['portrait', 'studio', 'professional'],
    likes: 89,
    downloads: 23,
    views: 892,
    photographer: 'Maria Santos',
    dateTaken: '2024-01-10'
  },
  {
    id: '3',
    url: '/placeholder-3.jpg',
    title: 'Arquitetura',
    tags: ['architecture', 'building', 'city'],
    likes: 156,
    downloads: 67,
    views: 1543,
    photographer: 'Carlos Oliveira',
    dateTaken: '2024-01-08'
  },
  {
    id: '4',
    url: '/placeholder-4.jpg',
    title: 'Natureza em Detalhe',
    tags: ['macro', 'nature', 'flowers'],
    likes: 203,
    downloads: 89,
    views: 2134,
    photographer: 'Ana Souza',
    dateTaken: '2024-01-05'
  },
  {
    id: '5',
    url: '/placeholder-5.jpg',
    title: 'Fotografia de Rua',
    tags: ['street', 'candid', 'urban'],
    likes: 91,
    downloads: 34,
    views: 765,
    photographer: 'Pedro Lima',
    dateTaken: '2024-01-03'
  },
  {
    id: '6',
    url: '/placeholder-6.jpg',
    title: 'Momento do Casamento',
    tags: ['wedding', 'love', 'ceremony'],
    likes: 267,
    downloads: 112,
    views: 3421,
    photographer: 'Fernanda Costa',
    dateTaken: '2024-01-01'
  },
  {
    id: '7',
    url: '/placeholder-7.jpg',
    title: 'Vista da Montanha',
    tags: ['landscape', 'mountain', 'adventure'],
    likes: 189,
    downloads: 78,
    views: 1876,
    photographer: 'Rafael Mendes',
    dateTaken: '2023-12-28'
  },
  {
    id: '8',
    url: '/placeholder-8.jpg',
    title: 'Paisagem Urbana Noturna',
    tags: ['night', 'city', 'lights'],
    likes: 234,
    downloads: 95,
    views: 2543,
    photographer: 'Lucia Ferreira',
    dateTaken: '2023-12-25'
  },
  {
    id: '9',
    url: '/placeholder-9.jpg',
    title: 'Retrato de Vida Selvagem',
    tags: ['wildlife', 'nature', 'animal'],
    likes: 312,
    downloads: 143,
    views: 4321,
    photographer: 'Bruno Almeida',
    dateTaken: '2023-12-20'
  }
];

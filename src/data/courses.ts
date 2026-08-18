export type Categoria = 'Graduação' | 'Pós-graduação' | 'Técnico'
export type Modalidade = 'Presencial' | 'EaD' | 'Semipresencial'
export type Area =
  | 'Educação'
  | 'Saúde'
  | 'Tecnologia'
  | 'Negócios'
  | 'Ciências Sociais'
  | 'Engenharia'

export interface Course {
  id: string
  nome: string
  categoria: Categoria
  modalidades: Modalidade[]
  area: Area
  grau: string
  duracao: string
  iconKey: 'book' | 'health' | 'code' | 'law' | 'business' | 'gear'
}

export const courses: Course[] = [
  {
    id: 'pedagogia',
    nome: 'Pedagogia',
    categoria: 'Graduação',
    modalidades: ['Presencial', 'EaD'],
    area: 'Educação',
    grau: 'Licenciatura',
    duracao: '8 semestres',
    iconKey: 'book',
  },
  {
    id: 'biomedicina',
    nome: 'Biomedicina',
    categoria: 'Graduação',
    modalidades: ['Presencial'],
    area: 'Saúde',
    grau: 'Bacharelado',
    duracao: '10 semestres',
    iconKey: 'health',
  },
  {
    id: 'ads',
    nome: 'Análise e Desenvolvimento de Sistemas',
    categoria: 'Graduação',
    modalidades: ['EaD'],
    area: 'Tecnologia',
    grau: 'Tecnólogo',
    duracao: '6 semestres',
    iconKey: 'code',
  },
  {
    id: 'direito',
    nome: 'Direito',
    categoria: 'Graduação',
    modalidades: ['Presencial'],
    area: 'Ciências Sociais',
    grau: 'Bacharelado',
    duracao: '10 semestres',
    iconKey: 'law',
  },
  {
    id: 'enfermagem',
    nome: 'Enfermagem',
    categoria: 'Graduação',
    modalidades: ['Presencial', 'Semipresencial'],
    area: 'Saúde',
    grau: 'Bacharelado',
    duracao: '8 semestres',
    iconKey: 'health',
  },
  {
    id: 'administracao',
    nome: 'Administração',
    categoria: 'Graduação',
    modalidades: ['EaD', 'Semipresencial'],
    area: 'Negócios',
    grau: 'Bacharelado',
    duracao: '8 semestres',
    iconKey: 'business',
  },
  {
    id: 'gestao-projetos',
    nome: 'Gestão de Projetos',
    categoria: 'Pós-graduação',
    modalidades: ['EaD'],
    area: 'Negócios',
    grau: 'Especialização',
    duracao: '12 meses',
    iconKey: 'business',
  },
  {
    id: 'tecnico-informatica',
    nome: 'Técnico em Informática',
    categoria: 'Técnico',
    modalidades: ['Presencial'],
    area: 'Tecnologia',
    grau: 'Técnico',
    duracao: '4 semestres',
    iconKey: 'gear',
  },
  {
    id: 'engenharia-civil',
    nome: 'Engenharia Civil',
    categoria: 'Graduação',
    modalidades: ['Presencial'],
    area: 'Engenharia',
    grau: 'Bacharelado',
    duracao: '10 semestres',
    iconKey: 'gear',
  },
]

export const categorias: Categoria[] = ['Graduação', 'Pós-graduação', 'Técnico']
export const modalidades: Modalidade[] = ['Presencial', 'EaD', 'Semipresencial']
export const areas: Area[] = [
  'Educação',
  'Saúde',
  'Tecnologia',
  'Negócios',
  'Ciências Sociais',
  'Engenharia',
]

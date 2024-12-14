export interface TaskProps {
  title: string
  description: string
  date: string
  status: 'Pendente' | 'Em andamento' | 'Concluída'
  priority: 'Baixa' | 'Média' | 'Alta'
}

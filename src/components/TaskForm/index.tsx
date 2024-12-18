import { TaskProps } from '@/@types'
import { Button, Dropdown, Input, Textarea } from '../shared'
import styles from './styles.module.scss'

interface TaskFormProps {
  task?: TaskProps
}

export const TaskForm = ({ task }: TaskFormProps) => {
  const title = task?.title
  const description = task?.description
  const date = task?.date
  const status = task?.status
  const priority = task?.priority

  const statusOptions = ['Pendente', 'Em andamento', 'Concluída'] as const
  const priorityOptions = ['Baixa', 'Média', 'Alta'] as const

  return (
    <form className={styles.formContainer}>
      <Input label="Título" placeholder="Digite o título" htmlFor="title" defaultValue={title ?? ''} />

      <Textarea
        label="Descrição"
        placeholder="Digite a descrição"
        htmlFor="description"
        defaultValue={description ?? ''}
      />

      <Input label="Data de vencimento" placeholder="dd/mm/aaaa" htmlFor="date" defaultValue={date ?? ''} />

      <div className={styles.line}>
        <Dropdown
          label="Status"
          placeholder="Selecione uma opção"
          options={statusOptions}
          defaultValue={status ?? undefined}
        />

        <Dropdown
          label="Prioridade"
          placeholder="Selecione uma opção"
          options={priorityOptions}
          defaultValue={priority ?? undefined}
        />
      </div>

      <Button type="submit">Adicionar tarefa</Button>
    </form>
  )
}

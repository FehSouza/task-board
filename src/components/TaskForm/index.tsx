import { TaskProps } from '@/@types'
import { Button, Input } from '../shared'
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

  return (
    <form className={styles.formContainer}>
      <Input label="Título" placeholder="Digite o título" htmlFor="title" defaultValue={title ?? ''} />

      <Input
        label="Descrição"
        placeholder="Digite a descrição"
        htmlFor="description"
        defaultValue={description ?? ''}
      />

      <Input label="Data de vencimento" htmlFor="date" type="date" defaultValue={date ?? ''} />

      <div className={styles.line}>
        <Input label="Status" htmlFor="status" defaultValue={status ?? ''} />
        <Input label="Prioridade" htmlFor="priority" defaultValue={priority ?? ''} />
      </div>

      <Button type="submit">Adicionar tarefa</Button>
    </form>
  )
}

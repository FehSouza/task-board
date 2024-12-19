'use client'

import { TaskProps } from '@/@types'
import { dateMask } from '@/utils'
import { FormEvent, useState } from 'react'
import { Button, Dropdown, Input, Textarea } from '../shared'
import styles from './styles.module.scss'

interface TaskFormProps {
  task?: TaskProps
}

const statusOptions = ['Pendente', 'Em andamento', 'Concluída'] as const
const priorityOptions = ['Baixa', 'Média', 'Alta'] as const

export const TaskForm = ({ task }: TaskFormProps) => {
  const title = task?.title
  const description = task?.description
  const date = task?.date
  const status = task?.status
  const priority = task?.priority

  const [titleValue, setTitleValue] = useState(title ?? '')
  const [descriptionValue, setDescriptionValue] = useState(description ?? '')
  const [dateValue, setDateValue] = useState(date ?? '')
  const [statusValue, setStatusValue] = useState(status ?? null)
  const [priorityValue, setPriorityValue] = useState(priority ?? null)

  console.log({ titleValue, descriptionValue, dateValue, statusValue, priorityValue })

  const handleTitle = (e: FormEvent<HTMLInputElement>) => setTitleValue(e.currentTarget.value)

  const handleDescription = (e: FormEvent<HTMLTextAreaElement>) => setDescriptionValue(e.currentTarget.value)

  const handleDate = (e: FormEvent<HTMLInputElement>) => {
    const value = dateMask(e.currentTarget.value)
    setDateValue(value)
  }

  return (
    <form className={styles.formContainer}>
      <Input label="Título" placeholder="Digite o título" htmlFor="title" value={titleValue} onchange={handleTitle} />

      <Textarea
        label="Descrição"
        placeholder="Digite a descrição"
        htmlFor="description"
        value={descriptionValue}
        onchange={handleDescription}
      />

      <Input
        label="Data de vencimento"
        placeholder="dd/mm/aaaa"
        htmlFor="date"
        value={dateValue}
        maxLength={10}
        onchange={handleDate}
      />

      <div className={styles.line}>
        <Dropdown
          label="Status"
          placeholder="Selecione uma opção"
          options={statusOptions}
          valueSelected={statusValue}
          setValueSelected={setStatusValue}
        />

        <Dropdown
          label="Prioridade"
          placeholder="Selecione uma opção"
          options={priorityOptions}
          valueSelected={priorityValue}
          setValueSelected={setPriorityValue}
        />
      </div>

      <Button type="submit">Adicionar tarefa</Button>
    </form>
  )
}

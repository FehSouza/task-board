import { randomId } from '@/utils'
import { FormEvent, HTMLInputTypeAttribute } from 'react'
import styles from './styles.module.scss'

interface InputProps {
  label: string
  placeholder: string
  value: string
  onchange: (event: FormEvent<HTMLInputElement>) => void
  htmlFor?: string
  type?: HTMLInputTypeAttribute
  maxLength?: number
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  mt?: number
}

export const Input = ({
  label,
  placeholder,
  value,
  onchange,
  htmlFor,
  type = 'text',
  maxLength,
  iconLeft,
  iconRight,
  mt,
}: InputProps) => {
  const id = htmlFor ?? `input-element-${randomId()}`

  return (
    <div className={styles.container} style={{ marginTop: `${mt}px` }}>
      <label htmlFor={id}>{label}</label>

      <div className={styles.inputContainer}>
        {!!iconLeft && <label htmlFor={id}>{iconLeft}</label>}

        <input id={id} type={type} placeholder={placeholder} value={value} onChange={onchange} maxLength={maxLength} />

        {!!iconRight && <label htmlFor={id}>{iconRight}</label>}
      </div>
    </div>
  )
}

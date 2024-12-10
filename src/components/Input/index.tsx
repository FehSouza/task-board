import { randomId } from '@/utils'
import { FormEvent } from 'react'
import styles from './styles.module.scss'

interface InputProps {
  label: string
  placeholder: string
  oninput?: (event: FormEvent<HTMLInputElement>) => void
  htmlFor?: string
  defaultValue?: string
  maxLength?: number
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  mt?: number
}

export const Input = ({
  label,
  placeholder,
  oninput,
  htmlFor,
  defaultValue,
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
        {!!iconLeft && <div>{iconLeft}</div>}

        <input
          id={id}
          type="text"
          placeholder={placeholder}
          onInput={oninput}
          defaultValue={defaultValue}
          maxLength={maxLength}
        />

        {!!iconRight && <div>{iconRight}</div>}
      </div>
    </div>
  )
}

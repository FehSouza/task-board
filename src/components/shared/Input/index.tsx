import { randomId } from '@/utils'
import { FormEvent, HTMLInputTypeAttribute } from 'react'
import styles from './styles.module.scss'

interface InputProps {
  label: string
  placeholder?: string
  oninput?: (event: FormEvent<HTMLInputElement>) => void
  htmlFor?: string
  type?: HTMLInputTypeAttribute
  defaultValue?: string
  maxLength?: number
  min?: number | string
  max?: number | string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  mt?: number
}

export const Input = ({
  label,
  placeholder,
  oninput,
  htmlFor,
  type,
  defaultValue,
  maxLength,
  min,
  max,
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

        <input
          id={id}
          name={id}
          type={type ?? 'text'}
          placeholder={placeholder}
          onInput={oninput}
          defaultValue={defaultValue}
          maxLength={maxLength}
          min={min}
          max={max}
        />

        {!!iconRight && <label htmlFor={id}>{iconRight}</label>}
      </div>
    </div>
  )
}

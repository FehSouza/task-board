import { ReactNode } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import colors from '../../../styles/variables.module.scss'
import styles from './styles.module.scss'

interface ButtonProps {
  onclick?: () => void
  children?: ReactNode
  textTransform?: 'none' | 'lowercase' | 'uppercase' | 'capitalize'
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  ariaLabel?: string
  status?: 'default' | 'disabled' | 'loading' | 'success' | 'warning' | 'error'
  type?: 'button' | 'submit' | 'reset'
  mt?: number
}

export const Button = ({
  onclick,
  children,
  textTransform = 'none',
  iconLeft,
  iconRight,
  ariaLabel,
  status = 'default',
  type = 'button',
  mt,
}: ButtonProps) => {
  const disabled = status === 'disabled'
  const loading = status === 'loading'

  return (
    <button
      className={styles.button}
      aria-label={ariaLabel}
      disabled={disabled}
      style={{ textTransform: textTransform, backgroundColor: colors[status], marginTop: `${mt}px` }}
      onClick={onclick}
      type={type}
    >
      {!!iconLeft && !loading && iconLeft}

      {children}

      {!!iconRight && !loading && iconRight}

      {!!loading && <AiOutlineLoading3Quarters size={16} className={styles.loading} />}
    </button>
  )
}

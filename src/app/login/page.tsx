import { Button, Input } from '@/components'
import { MdOutlineLock, MdOutlineMail } from 'react-icons/md'
import styles from './styles.module.scss'

export default function Login() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Faça login e comece a usar o Task Board!</h1>

      <form className={styles.formContainer}>
        <Input
          htmlFor="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          iconLeft={<MdOutlineMail size={20} />}
          mt={48}
        />

        <Input
          htmlFor="password"
          label="Senha"
          placeholder="Digite sua senha"
          iconLeft={<MdOutlineLock size={20} />}
          mt={32}
        />

        <Button text="Entrar" textTransform="uppercase" mt={32} type="submit" />
      </form>
    </main>
  )
}

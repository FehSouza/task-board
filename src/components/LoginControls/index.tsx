'use client'

import { SignInButton, SignUpButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import styles from './styles.module.scss'

export const LoginControls = () => {
  const { user } = useUser()

  if (!user)
    return (
      <div className={[styles.container, styles.buttonsContainer].join(' ')}>
        <SignInButton mode="modal" forceRedirectUrl="/dashboard">
          <button>Já tem conta? Faça o Login!</button>
        </SignInButton>

        <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
          <button>Ainda não tem conta? Crie uma agora!</button>
        </SignUpButton>
      </div>
    )

  return (
    <div className={styles.container}>
      <span>Bem-vindo de volta!</span>
      <span>Acesse o seu painel agora mesmo.</span>
      <Link href="/dashboard">Entrar</Link>
    </div>
  )
}

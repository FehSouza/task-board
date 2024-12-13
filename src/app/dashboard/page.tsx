import { SignOutButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import styles from './page.module.scss'

export default async function Dashboard() {
  const { sessionClaims } = await auth()
  if (!sessionClaims) return redirect('/')

  return (
    <main className={styles.main}>
      <h1>Dashboard</h1>

      <SignOutButton redirectUrl="/">
        <button>Sair</button>
      </SignOutButton>
    </main>
  )
}

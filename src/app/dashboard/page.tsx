import { SignOutButton } from '@clerk/nextjs'
import styles from './page.module.scss'

export default function Dashboard() {
  return (
    <main className={styles.main}>
      <h1>Dashboard</h1>

      <SignOutButton redirectUrl="/">
        <button>Sair</button>
      </SignOutButton>
    </main>
  )
}

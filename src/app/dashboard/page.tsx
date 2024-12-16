import { Button, Textarea } from '@/components'
import { SignOutButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { FaPlus } from 'react-icons/fa'
import styles from './page.module.scss'

export default async function Dashboard() {
  const { sessionClaims } = await auth()
  if (!sessionClaims) return redirect('/')

  return (
    <>
      <section className={styles.addTaskContainer}>
        <Link href="/dashboard/add-task">
          <Button iconLeft={<FaPlus size={12} />}>Adicionar tarefa</Button>
        </Link>

        <SignOutButton redirectUrl="/">
          <Button>Sair</Button>
        </SignOutButton>
      </section>

      <hr className={styles.division} />

      <section className={styles.tasksContainer}></section>
    </>
  )
}

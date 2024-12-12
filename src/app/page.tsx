import { LoginControls } from '@/components'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <LoginControls></LoginControls>
    </main>
  )
}

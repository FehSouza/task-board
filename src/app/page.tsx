import { LoginControls } from '@/components'
import Image from 'next/image'
import ImageTeste from '../assets/icons/undraw-todo-list.svg'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.infosContainer}>
          <h1>O Task Board facilita a gestão de tarefas para os times</h1>
          <span>
            Simples, flexível e poderoso. Bastam cartões para obter uma visualização clara do que precisa ser feito.
          </span>
          <LoginControls />
        </div>

        <Image className={styles.imageContainer} src={ImageTeste} alt="Imagem Task Board" priority />
      </section>
    </main>
  )
}

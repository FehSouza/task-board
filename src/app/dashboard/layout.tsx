import styles from './page.module.scss'

interface LayoutProps {
  children: React.ReactNode
  modal: React.ReactNode
}

export default function Layout({ children, modal }: LayoutProps) {
  return (
    <main className={styles.main}>
      {children}
      {modal}
    </main>
  )
}

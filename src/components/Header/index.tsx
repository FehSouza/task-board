import Image from 'next/image'
import Link from 'next/link'
import ImageLogo from '../../assets/icons/logo.svg'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/" aria-label="Ir para a Home">
        <Image src={ImageLogo} alt="Logo Task Board" width={160} height={33} />
      </Link>
    </header>
  )
}

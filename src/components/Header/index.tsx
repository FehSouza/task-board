import Image from 'next/image'
import Link from 'next/link'
import ImageLogo from '../../assets/icons/logo.svg'
import ImagePerson from '../../assets/icons/person.svg'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/" aria-label="Ir para a Home">
        <Image src={ImageLogo} alt="Logo Task Board" width={160} height={33} />
      </Link>

      <Link className={styles.person} href="/account" aria-label="Ir para a conta">
        <Image src={ImagePerson} alt="Logo conta" width={32} height={32} />
      </Link>
    </header>
  )
}

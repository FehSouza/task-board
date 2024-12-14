'use client'

import { useRouter } from 'next/navigation'
import { MdOutlineClose } from 'react-icons/md'
import { Button } from '../shared'
import styles from './styles.module.scss'

interface ModalProps {
  routeBack: string
  children: React.ReactNode
}

export const Modal = ({ routeBack, children }: ModalProps) => {
  const router = useRouter()

  const close = () => router.push(routeBack)

  return (
    <div className={styles.modal} onClick={close}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <Button onclick={close}>
          <MdOutlineClose size={18} />
        </Button>

        {children}
      </div>
    </div>
  )
}

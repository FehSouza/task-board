'use client'

import { randomId } from '@/utils'
import { useRef, useState } from 'react'
import styles from './styles.module.scss'

interface TextareaProps {
  label: string
  placeholder?: string
  htmlFor?: string
  defaultValue?: string
  mt?: number
}

export const Textarea = ({ label, placeholder, htmlFor, defaultValue, mt }: TextareaProps) => {
  const [rows, setRows] = useState(3)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const maxRows = 7
  const rowHeight = 20
  const id = htmlFor ?? `textarea-element-${randomId()}`

  const handleChange = () => {
    const textarea = textareaRef.current
    if (!textarea) return

    const scrollHeight = textarea.scrollHeight
    const currentRows = Math.min(Math.ceil(scrollHeight / rowHeight), maxRows)
    setRows(currentRows)
  }

  return (
    <div className={styles.container} style={{ marginTop: `${mt}px` }}>
      <label htmlFor={id}>{label}</label>

      <div className={styles.textareaContainer}>
        <textarea
          ref={textareaRef}
          id={id}
          name={id}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={handleChange}
          rows={rows}
        />
      </div>
    </div>
  )
}

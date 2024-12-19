'use client'

import { randomId } from '@/utils'
import { FormEvent, useRef, useState } from 'react'
import styles from './styles.module.scss'

interface TextareaProps {
  label: string
  placeholder: string
  value: string
  onchange: (event: FormEvent<HTMLTextAreaElement>) => void
  htmlFor?: string
  initialRows?: number
  maxRows?: number
  rowHeight?: number
  mt?: number
}

export const Textarea = ({
  label,
  placeholder,
  value,
  onchange,
  htmlFor,
  initialRows = 3,
  maxRows = 7,
  rowHeight = 20,
  mt,
}: TextareaProps) => {
  const [rows, setRows] = useState(initialRows)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const id = htmlFor ?? `textarea-element-${randomId()}`

  const handleChange = (e: FormEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current
    if (!textarea) return

    const scrollHeight = textarea.scrollHeight
    const currentRows = Math.min(Math.ceil(scrollHeight / rowHeight), maxRows)
    setRows(currentRows)
    onchange(e)
  }

  return (
    <div className={styles.container} style={{ marginTop: `${mt}px` }}>
      <label htmlFor={id}>{label}</label>

      <div className={styles.textareaContainer}>
        <textarea
          ref={textareaRef}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          rows={rows}
        />
      </div>
    </div>
  )
}

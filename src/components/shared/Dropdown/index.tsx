'use client'

import { randomId } from '@/utils'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { MdOutlineCheck } from 'react-icons/md'
import styles from './styles.module.scss'

interface ItemDropdownProps {
  option: string
  valueSelected: string | null
  handleSelect: (option: string) => void
}

interface DropdownProps<T extends readonly string[]> {
  label: string
  placeholder: string
  options: T
  valueSelected: T[number] | null
  setValueSelected: Dispatch<SetStateAction<T[number] | null>>
  mt?: number
}

const ItemDropdown = ({ option, valueSelected, handleSelect }: ItemDropdownProps) => {
  const itemSelected = option === valueSelected

  return (
    <li className={styles.item} onClick={() => handleSelect(option)}>
      {option}
      {itemSelected && <MdOutlineCheck size={18} />}
    </li>
  )
}

export const Dropdown = <T extends readonly string[]>({
  label,
  placeholder,
  options,
  valueSelected,
  setValueSelected,
  mt,
}: DropdownProps<T>) => {
  const [opened, setOpened] = useState(false)

  const id = `option-element-${randomId()}`

  const handleOpen = () => setOpened(true)
  const handleClose = () => setOpened(false)

  const handleSelect = (option: string) => {
    setValueSelected(option)
    handleClose()
  }

  useEffect(() => {
    document.addEventListener('click', handleClose)
    return () => document.removeEventListener('click', handleClose)
  }, [handleClose])

  return (
    <div className={styles.container} style={{ marginTop: `${mt}px` }}>
      <label onClick={handleOpen}>{label}</label>

      <div className={[styles.dropdown, opened ? styles.opened : ''].join(' ')}>
        <button type="button" onClick={handleOpen} className={valueSelected ? styles.selected : ''}>
          {valueSelected ?? placeholder}
        </button>

        {opened && (
          <ul className={styles.list}>
            {options.map((option, index) => (
              <ItemDropdown
                key={`${id}-${index}`}
                option={option}
                valueSelected={valueSelected}
                handleSelect={handleSelect}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

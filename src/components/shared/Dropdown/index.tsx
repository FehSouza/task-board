'use client'

import { randomId } from '@/utils'
import { useEffect, useState } from 'react'
import { MdOutlineCheck } from 'react-icons/md'
import styles from './styles.module.scss'

interface ItemDropdownProps {
  option: string
  selectedOption: string | null
  handleSelect: (option: string) => void
}

interface DropdownProps<T extends readonly string[]> {
  label: string
  placeholder: string
  options: T
  defaultValue?: T[number]
  mt?: number
}

const ItemDropdown = ({ option, selectedOption, handleSelect }: ItemDropdownProps) => {
  const itemSelected = option === selectedOption

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
  defaultValue,
  mt,
}: DropdownProps<T>) => {
  const [opened, setOpened] = useState(false)
  const [selectedOption, setSelectedOption] = useState(defaultValue ?? null)

  const id = `option-element-${randomId()}`

  const handleOpen = () => setOpened(true)
  const handleClose = () => setOpened(false)

  const handleSelect = (option: string) => {
    setSelectedOption(option)
    handleClose()
  }

  useEffect(() => {
    document.addEventListener('click', handleClose)
    return () => document.removeEventListener('click', handleClose)
  }, [handleClose])

  return (
    <div className={styles.container} style={{ marginTop: `${mt}px` }}>
      <label onClick={handleOpen}>{label}</label>

      <div className={styles.dropdown}>
        <button type="button" onClick={handleOpen} className={selectedOption ? styles.selected : ''}>
          {selectedOption ?? placeholder}
        </button>

        {opened && (
          <ul className={styles.list}>
            {options.map((option, index) => (
              <ItemDropdown
                key={`${id}-${index}`}
                option={option}
                selectedOption={selectedOption}
                handleSelect={handleSelect}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

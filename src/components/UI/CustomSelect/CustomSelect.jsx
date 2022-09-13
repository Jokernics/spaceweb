import { useRef } from 'react';
import { useEffect, useState } from 'react'
import styles from './CustomSelect.module.scss'
import { ReactComponent as ArrowIcon } from './selectArrow.svg';


export default function CustomSelect({ options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);

  const openClass = isOpen ? styles.open : ''
  const hidenClass = isOpen ? '' : styles.hiden

  let currentRev = useRef(options[0])
  useEffect(() => {
    const isAppear = options.find(el => el.label === currentRev.current.label)
    if (!isAppear) {
      onChange(options[0])
    }
  }, [onChange, options]);

  useEffect(() => {
    const hide = (e) => {
      if (e.target.closest(`.${styles.container}`)) return
      setIsOpen(false)
    }
    window.addEventListener('click', hide)
    return () => {
      window.removeEventListener('click', hide)
    }
  }, [])

  const handleSelect = (option) => {
    onChange(option)
    setIsOpen(false)

    currentRev.current = option
  }

  return (
    <div className={styles.container}>
      <div onClick={() => setIsOpen(prev => !prev)} className={styles.header}>
        <p className={styles.text}>{value.label}</p>
        <ArrowIcon className={`${styles.arrowIcon} ${openClass}`} />
      </div>
      <div className={`${styles.listContainer} ${hidenClass}`}>
        {options.map((option, i) =>
          <p key={option + i} onClick={() => handleSelect(option)} className={`${styles.text} ${styles.option} ${option.label === value.label ? styles.selected : ''}`}>{option.label}</p>
        )}
      </div>

    </div>
  )
}
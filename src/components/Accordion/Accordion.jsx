import { useState } from 'react';
import styles from './Accordion.module.scss'

export default function Accordion({ parent, child }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleParentClick = () => {
    setIsOpen(prev => !prev)
  }

  const childClassName = isOpen ? '' : styles.hidden

  return (
    <>
      <div onClick={handleParentClick}>{parent}</div>
      <div className={`${childClassName} ${styles.child}`}>
        {child}
      </div>
    </>
  )
}
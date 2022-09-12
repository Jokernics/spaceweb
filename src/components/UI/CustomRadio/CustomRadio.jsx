import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './CustomRadio.module.scss';


export default function CustomRadio({ options, onChange, id }) {
  const [current, setCurrent] = useState(0);
 
  const handleClick = (i, option) => {
    if (i === current) return
    setCurrent(i)
    onChange(option)
  }

  return (
    <div className={styles.container}>
      {options.map((option, i) => {
        const isSelected = current === i
        return (<motion.div key={option.label + i} onClick={() => handleClick(i, option)} className={`${styles.itemWrp} ${isSelected ? styles.current : ''}`}>
          {option.label}
          {isSelected && (
            activeLine(id)
          )}
        </motion.div>)
      })}
    </div>
  )
}
function activeLine(id) {
  return (
    <motion.div
      className={styles.active}
      layoutId={`${id}`}
      style={{
        position: 'absolute',
        top: -1,
        left: -1,
        zIndex: -1,
        padding: '3px',
        width: 'calc(100% + 2px)',
        height: 'calc(100% + 2px)',
        background: '#3dbdf6',
        border: '2px solid #3dbdf6',
        borderRadius: '10px',
        fontWeight: '600',
      }}
    />
  )
}
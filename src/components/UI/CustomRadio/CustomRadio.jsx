import { useEffect, useRef, useState } from 'react';
import styles from './CustomRadio.module.scss';


export default function CustomRadio({ options, value, onChange }) {
  const bubbleEl = useRef(null)
  const [bubbleWidth, setBubbleWidth] = useState(0);
  const [bubbleLeft, setBubbleLeft] = useState(0);

  useEffect(() => {
    const left = bubbleEl.current.offsetLeft
    const width = bubbleEl.current.offsetWidth
    setBubbleLeft(left - 1)
    setBubbleWidth(width + 2)
  }, [value]);

  const handleClick = (e, option) => {
    onChange(option)
  }

  return (
    <div className={styles.container}>
      {options.map(option => {
        const isCurrent = value.label === option.label
        const classnames = `${isCurrent ? styles.current : ''} ${styles.itemWrp}`

        return (
          <div ref={isCurrent ? bubbleEl : null} key={option.label} onClick={(e) => handleClick(e, option)} className={classnames}>
            {option.label}
          </div>)
      })}
      <div 
        style={{
          width: bubbleWidth,
          left: bubbleLeft
        }}
      className={styles.bubble}></div>
    </div>
  )
}

import styles from './TarrifBtn.module.scss';


const TariffBtn = ({children, ...props}) => {
  return (
    <button {...props} className={styles.btnContainer}>
      {children}
    </button>
  );
}

export default TariffBtn;

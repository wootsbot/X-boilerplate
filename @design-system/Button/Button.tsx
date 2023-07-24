import styles from './Button.module.css';

function Button({ ...props }) {
  return <button className={styles.root} {...props} />;
}

export default Button;

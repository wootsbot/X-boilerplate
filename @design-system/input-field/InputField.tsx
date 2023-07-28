import * as React from 'react';

import styles from './InputField.module.css';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  isError?: boolean;
  errMsg?: string;
}

const InputField = React.forwardRef<HTMLInputElement, InputProps>(function InputField(props, ref) {
  const { isError, errMsg, ...others } = props;

  return (
    <div className={styles.root}>
      <input className={styles.input} ref={ref} {...others} />

      {isError && <p className={styles.input_error}>{errMsg}</p>}
    </div>
  );
});

export default InputField;

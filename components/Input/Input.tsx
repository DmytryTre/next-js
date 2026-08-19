import { InputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';

export const Input = ({ error, className, ...props }: InputProps): React.ReactElement => (
  <div className={cn(className, styles.inputWrapper)}>
    <input
      className={cn(styles.input, {
        [styles.error]: error,
      })}
      {...props}
    />
    {error && <span className={styles.errorMessage}>{error.message}</span>}
  </div>
);

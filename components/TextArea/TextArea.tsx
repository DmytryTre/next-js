import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.css';
import cn from 'classnames';

export const TextArea = ({
  error,
  className,
  ...props
}: TextAreaProps): React.ReactElement => (
  <div className={cn(styles.textareaWrapper, className)}>
    <textarea
      className={cn(styles.textarea, {
        [styles.error]: error,
      })}
      {...props}
    />
    {error && <span className={styles.errorMessage}>{error.message}</span>}
  </div>
);

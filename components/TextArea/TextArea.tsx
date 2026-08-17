import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.css';
import cn from 'classnames';

export const TextArea = ({
  children,
  className,
  ...props
}: TextAreaProps): React.ReactElement => (
  <textarea className={cn(className, styles.textarea)} {...props} />
);

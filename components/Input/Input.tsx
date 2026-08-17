import { InputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames';

export const Input = ({
  children,
  className,
  ...props
}: InputProps): React.ReactElement => (
  <input className={cn(className, styles.input)} {...props} />
);

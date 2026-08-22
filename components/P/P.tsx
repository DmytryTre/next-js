import { PProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({
  size = 'm',
  children,
  className,
  ...props
}: PProps): React.ReactElement => (
  <p className={cn(styles.p, className, { [styles[size]]: size }, { ...props })}>
    {children}
  </p>
);

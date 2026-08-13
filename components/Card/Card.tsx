import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({
  color = 'white',
  children,
  className,
  ...props
}: CardProps): React.ReactElement => (
  <div className={cn(styles.card, className, { [styles[color]]: color })} {...props}>
    {children}
  </div>
);

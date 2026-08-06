import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): React.ReactElement => (
  <button className={cn(styles.button, className, { [styles[appearance]]: appearance })} {...props }>
    {children}
    {arrow !== 'none' && <span className={cn(styles.arrow, { [styles[arrow]]: arrow })}><ArrowIcon /></span>}
  </button>
);

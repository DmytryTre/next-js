import styles from './Header.module.css';
import cn from 'classnames';

export const Header = ({ className }: { className: string }) => {
  return <div className={cn(className, styles.header)}>Header</div>;
};

import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className={styles.date}>
        © 2020 - {new Date().getFullYear()} Все права защищены
      </div>
      <a href="#" className={styles.link}>
        Пользовательское соглашение
      </a>
      <a href="#" className={styles.link}>
        Политика конфиденциальности
      </a>
    </footer>
  );
};

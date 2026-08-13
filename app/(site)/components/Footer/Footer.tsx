import Link from 'next/link';
import styles from './Footer.module.css';
import cn from 'classnames';

export const Footer = ({ className }: { className: string }) => (
  <footer className={cn(styles.footer, className)}>
    <div className={styles.date}>
      © 2020 - {new Date().getFullYear()} Все права защищены
    </div>
    <Link href="#" className={styles.link}>
      Пользовательское соглашение
    </Link>
    <Link href="#" className={styles.link}>
      Политика конфиденциальности
    </Link>
  </footer>
);

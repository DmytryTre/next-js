'use client';

import styles from './Header.module.css';
import cn from 'classnames';
import Logo from '../../logo.svg';
import { ButtonIcon } from '@/components';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
interface HeaderProps {
  className: string;
  children?: React.ReactNode;
}

export const Header = ({ className, children, ...props }: HeaderProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const router = usePathname();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
    },
  };
  return (
    <header className={cn(className, styles.header)} {...props}>
      <Logo />
      <ButtonIcon onClick={() => setIsOpened(true)} icon="menu" appearance="white" />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={'closed'}
        animate={isOpened ? 'opened' : 'closed'}
      >
        {children}
        <ButtonIcon
          onClick={() => setIsOpened(false)}
          className={styles.menuClose}
          icon="close"
          appearance="white"
        />
      </motion.div>
    </header>
  );
};

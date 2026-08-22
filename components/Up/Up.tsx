'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import styles from './Up.module.css';
import { ButtonIcon } from '..';

export const Up = (): React.ReactElement => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [0, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div className={styles.up} style={{ opacity }}>
      <ButtonIcon icon="up" appearance="primary" onClick={scrollToTop} />
    </motion.div>
  );
};

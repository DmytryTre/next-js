'use client';

import styles from './Menu.module.css';
import cn from 'classnames';
import { FirstLevelMenuIeetebar, MenuItem, PageItem } from '@/interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import BooksIcon from './icons/books.svg';
import ProductIcon from './icons/product.svg';
import ServicesIcon from './icons/services.svg';
import { TopLevelCategory } from '@/interfaces/page.interface';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, KeyboardEvent, useState } from 'react';
import { motion } from 'framer-motion';

const firsLevelMenu: FirstLevelMenuIeetebar[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Товары',
    icon: <ProductIcon />,
    id: TopLevelCategory.Products,
  },
];

export function Menu({
  menu,
}: {
  menu: MenuItem[];
  firstCategory: TopLevelCategory.Courses;
}) {
  const [menuData, setMenuData] = useState<MenuItem[]>(menu);

  useEffect(() => {
    setMenuData(menu);
  }, []);

  const pathname = usePathname();
  const currentAlias = pathname.split('/')[2];
  const currentRoute = pathname.split('/')[1];

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {
      marginBottom: 0,
    },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };

  const openSecondLevel = (secondCtegory: string) => {
    setMenuData(
      menu.map((m) => {
        if (m._id.secondCategory === secondCtegory) {
          m.isOpened = !m.isOpened;
        }
        return m;
      }),
    );
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code == 'Space' || key.code == 'Enter') {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevel = (
    firsLevelMenu: FirstLevelMenuIeetebar[],
    menuSecond: MenuItem[],
    currentRoute: string,
  ) => (
    <ul className={styles.firstLevelList}>
      {firsLevelMenu.map((menu) => {
        const isCurrentRoute = menu.route === currentRoute;

        return (
          <li key={menu.id}>
            <Link
              className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: isCurrentRoute,
              })}
              href={`/${menu.route}`}
            >
              <div>{menu.icon}</div>
              <span>{menu.name}</span>
            </Link>
            {isCurrentRoute && buildSecondLevel(menuSecond, menu.route)}
          </li>
        );
      })}
    </ul>
  );

  const buildSecondLevel = (menuSecond: MenuItem[], route: string) => (
    <ul className={styles.secondBlock}>
      {menuSecond.map((m) => {
        if (m.pages.some((p) => p.alias === currentAlias)) m.isOpened = true;
        return (
          <li key={m._id.secondCategory}>
            <div
              tabIndex={0}
              className={styles.secondLevel}
              onKeyDown={(key: KeyboardEvent) =>
                openSecondLevelKey(key, m._id.secondCategory)
              }
              onClick={() => openSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </div>
            <motion.ul
              layout
              variants={variants}
              initial={m.isOpened ? 'visible' : 'hidden'}
              animate={m.isOpened ? 'visible' : 'hidden'}
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, route, m.isOpened ?? false)}
            </motion.ul>
          </li>
        );
      })}
    </ul>
  );

  const buildThirdLevel = (pages: PageItem[], route: string, isOpened: boolean) =>
    pages.map((page) => {
      const targetPath = `/${route}/${page.alias}`;
      const isActive = targetPath === pathname;

      return (
        <motion.li variants={variantsChildren} key={page.alias}>
          <Link
            tabIndex={isOpened ? 0 : -1}
            href={targetPath}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: isActive,
            })}
            aria-current={isActive ? 'page' : undefined}
          >
            {page.category}
          </Link>
        </motion.li>
      );
    });

  return (
    <div className={styles.menu}>
      {buildFirstLevel(firsLevelMenu, menuData, currentRoute)}
    </div>
  );
}

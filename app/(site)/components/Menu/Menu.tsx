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
import { useEffect, useState } from 'react';

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

  const buildFirstLevel = (
    firsLevelMenu: FirstLevelMenuIeetebar[],
    menuSecond: MenuItem[],
    currentRoute: string,
  ) => (
    <>
      {firsLevelMenu.map((menu) => {
        const isCurrentRoute = menu.route === currentRoute;

        return (
          <div key={menu.id}>
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
          </div>
        );
      })}
    </>
  );

  const buildSecondLevel = (menuSecond: MenuItem[], route: string) => (
    <div className={styles.secondBlock}>
      {menuSecond.map((m) => {
        if (m.pages.some((p) => p.alias === currentAlias)) m.isOpened = true;
        return (
          <div key={m._id.secondCategory}>
            <div
              className={styles.secondLevel}
              onClick={() => openSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, route)}
            </div>
          </div>
        );
      })}
    </div>
  );

  const buildThirdLevel = (pages: PageItem[], route: string) =>
    pages.map((page) => (
      <Link
        key={page.alias}
        href={`/${route}/${page.alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: `/${route}/${page.alias}` === pathname,
        })}
      >
        {page.category}
      </Link>
    ));

  return (
    <div className={styles.menu}>
      {buildFirstLevel(firsLevelMenu, menuData, currentRoute)}
    </div>
  );
}

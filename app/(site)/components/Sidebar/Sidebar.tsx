import { TopLevelCategory } from '@/interfaces/page.interface';
import cn from 'classnames';
import { Menu } from '..';
import getMenu from '@/api/menu';
import Logo from '../../logo.svg';
import styles from './Sidebar.module.css';
import { Search } from '@/components';

export async function Sidebar({ className }: { className: string }) {
  const firstCategory = TopLevelCategory.Courses;
  const menu = await getMenu(firstCategory);
  return (
    <div className={cn(className, styles.sidebar)}>
      <Logo className={styles.logo} />
      <Search />
      <Menu menu={menu} firstCategory={firstCategory} />
    </div>
  );
}

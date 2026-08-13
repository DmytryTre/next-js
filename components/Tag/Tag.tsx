import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';
import Link from 'next/link';

export const Tag = ({
  size = 'm',
  children,
  color = 'ghost',
  href,
  className,
  ...props
}: TagProps): React.ReactElement => (
  <div
    className={cn(
      styles.tag,
      className,
      { [styles[size]]: size, [styles[color]]: color },
      { ...props },
    )}
  >
    {href ? <Link href={href}>{children}</Link> : <>{children}</>}
  </div>
);

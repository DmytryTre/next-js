import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

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
    {href ? <a href={href}>{children}</a> : <>{children}</>}
  </div>
);

import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';
import cn from 'classnames';

export const Htag = ({
  Tag,
  children,
  className,
  ...props
}: HtagProps): React.ReactElement => (
  <Tag className={cn(styles[Tag], className)} {...props}>
    {children}
  </Tag>
);

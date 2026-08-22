import { ReviewProps } from './Review.props';
import styles from './Review.module.css';
import UserIcon from './user.svg';
import cn from 'classnames';
import { dateRu } from '@/helpers/helpers';
import { Rating, P } from '..';

export const Review = ({
  review: { name, title, createdAt, rating, description },
  className,
  ...props
}: ReviewProps): React.ReactElement => (
  <div className={cn(styles.review, className)} {...props}>
    <UserIcon className={styles.user} />
    <div className={styles.title}>
      <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
      <span>{title}</span>
    </div>
    <div className={styles.date}>{dateRu(createdAt)}</div>
    <div className={styles.rating}>
      <Rating rating={rating} />
    </div>
    <P className={styles.description}>{description}</P>
  </div>
);

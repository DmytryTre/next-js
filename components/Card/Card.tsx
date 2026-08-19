import { ForwardedRef, forwardRef } from 'react';
import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { appearance = 'white', children, className, ...props },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        className={cn(styles.card, className, {
          [styles[appearance]]: appearance,
        })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = 'Card';

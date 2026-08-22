'use client';

import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import { useState, useEffect, KeyboardEvent, useRef } from 'react';
import StarIcon from './star.svg';

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  error,
  tabIndex,
  ...props
}: RatingProps): React.ReactElement => {
  const [hoverRating, setHoverRating] = useState<number>(rating);

  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    setHoverRating(rating);
  }, [rating]);

  const computeFocus = (r: number, i: number): number => {
    if (!isEditable) return -1;
    if (!rating && i === 0) return tabIndex ?? 0;
    if (r === i + 1) return tabIndex ?? 0;
    return -1;
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  const handleKey = (e: KeyboardEvent<HTMLSpanElement>, i: number) => {
    if (!isEditable || !setRating) return;

    if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
      e.preventDefault();
      const nextRating = rating < 5 ? rating + 1 : 5;
      setRating(nextRating);
      setTimeout(() => ratingArrayRef.current[nextRating - 1]?.focus(), 0);
    }

    if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
      e.preventDefault();
      const prevRating = rating > 1 ? rating - 1 : 1;
      setRating(prevRating);
      setTimeout(() => ratingArrayRef.current[prevRating - 1]?.focus(), 0);
    }
  };

  return (
    <div
      {...props}
      className={cn(styles.ratingWrapper, {
        [styles.error]: error,
      })}
    >
      {[...Array(5)].map((_, i) => {
        const currentStarValue = i + 1;
        const isFilled = currentStarValue <= hoverRating;

        return (
          <span
            key={i}
            className={cn(styles.star, {
              [styles.filled]: isFilled,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => isEditable && setHoverRating(currentStarValue)}
            onMouseLeave={() => isEditable && setHoverRating(rating)}
            onClick={() => onClick(currentStarValue)}
            tabIndex={computeFocus(rating, i)}
            onKeyDown={(e) => handleKey(e, i)}
            ref={(el) => {
              ratingArrayRef.current[i] = el;
            }}
            role={isEditable ? 'slider' : undefined}
            aria-invalid={!!error}
            aria-valuenow={rating}
            aria-valuemax={5}
            aria-label={isEditable ? 'Укажите рейтинг' : `Рейтинг ${rating}`}
            aria-valuemin={1}
          >
            <StarIcon
              className={cn(styles.starIcon, {
                [styles.filled]: isFilled,
                [styles.editable]: isEditable,
              })}
            />
          </span>
        );
      })}
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};

'use client';

import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import { useState, ReactElement, useEffect, KeyboardEvent } from 'react';
import StarIcon from './star.svg';

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): React.ReactElement => {
  const [ratingArr, setRatingArr] = useState<ReactElement[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArr = ratingArr.map((r: ReactElement, i: number) => (
      <span
        className={cn(styles.star, {
          [styles.filled]: i < currentRating,
          [styles.editable]: isEditable,
        })}
        onMouseEnter={() => handleChangeDisplay(isEditable, i + 1)}
        onMouseLeave={() => handleChangeDisplay(isEditable, rating)}
        onClick={() => handleClick(isEditable, i + 1)}
      >
        <StarIcon
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => handleChangeDisplay(isEditable, i + 1)}
          onMouseLeave={() => handleChangeDisplay(isEditable, rating)}
          onClick={() => handleClick(isEditable, i + 1)}
          onKeyDown={(e: KeyboardEvent<SVGAElement>) => handleClick(isEditable, i + 1, e)}
          tabIndex={isEditable ? 0 : -1}
        />
      </span>
    ));

    setRatingArr(updatedArr);
  };

  const handleClick = (
    isEditable: boolean,
    i: number,
    e?: KeyboardEvent<SVGAElement>,
  ) => {
    if (!isEditable || !setRating) return;

    if (e && e.code !== 'Space') return;

    setRating(i);
  };

  const handleChangeDisplay = (isEditable: boolean, i: number) =>
    isEditable && constructRating(i);

  return (
    <div {...props}>
      {ratingArr.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

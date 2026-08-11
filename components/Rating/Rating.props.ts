import { HTMLAttributes } from 'react';

export interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}

import { ReviewModel } from '@/interfaces/product.interface';
import { HTMLAttributes } from 'react';

export interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  review: ReviewModel;
}

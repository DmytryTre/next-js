import { ReviewModel } from '@/interfaces/product.interface';
import { HTMLAttributes } from 'react';

export interface ReviewFormProps extends HTMLAttributes<HTMLDivElement> {
  productId: string;
}

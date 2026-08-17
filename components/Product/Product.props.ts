import { ProductModel } from '@/interfaces/product.interface';
import { HTMLAttributes } from 'react';

export interface ProductProps extends HTMLAttributes<HTMLDivElement> {
  product: ProductModel;
}

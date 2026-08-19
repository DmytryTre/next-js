import { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  appearance?: 'white' | 'blue';
  children?: ReactNode;
}

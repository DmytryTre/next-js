import { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  color?: 'white' | 'blue';
  children: ReactNode;
}

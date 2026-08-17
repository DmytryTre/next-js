import { HTMLAttributes, ReactNode } from 'react';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  size?: 's' | 'm';
  children: ReactNode;
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  href?: string;
}

import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
> {
  children: ReactNode;
  appearance: 'ghost' | 'primary';
  arrow?: 'right' | 'down' | 'none';
}

import { HTMLAttributes, ReactNode } from 'react';

export interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: 's' | 'm' | 'l';
  children: ReactNode;
}

import { HTMLAttributes, ReactNode } from 'react';

export interface HtagProps extends HTMLAttributes<HTMLHeadingElement> {
  Tag: 'h1' | 'h2' | 'h3';
  children: ReactNode;
}

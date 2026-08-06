import { HTMLAttributes, ReactNode } from "react";

export interface TagProps extends HTMLAttributes<HTMLDivElement>{
  size?: 's' | 'm';
  children: ReactNode;
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href?: string;
}
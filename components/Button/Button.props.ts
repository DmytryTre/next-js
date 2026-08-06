import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  appearance: 'ghost' | 'primary';
  arrow?: 'right' | 'down' | 'none';
}
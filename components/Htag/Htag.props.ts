import { ReactNode } from "react";

export interface HtagProps {
  Tag: 'h1' | 'h2' | 'h3';
  children: ReactNode
}
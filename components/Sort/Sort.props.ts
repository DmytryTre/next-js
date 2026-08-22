import { HTMLAttributes, ReactNode } from 'react';

export interface SortProps extends HTMLAttributes<HTMLParagraphElement> {
  sort: SortEnum;
  setSort: (sort: SortEnum) => void;
}

export enum SortEnum {
  Rating,
  Price,
}

export const sortLabels: Record<SortEnum, string> = {
  [SortEnum.Rating]: 'По рейтингу',
  [SortEnum.Price]: 'По цене',
};

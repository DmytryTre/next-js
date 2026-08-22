import { SortEnum } from '@/components/Sort/Sort.props';
import { ProductModel } from '@/interfaces/product.interface';

export type SortActions = { type: SortEnum };

export interface SortReducerState {
  sort: SortEnum;
  products: ProductModel[];
}

const sortComparators: Record<SortEnum, (a: ProductModel, b: ProductModel) => number> = {
  [SortEnum.Rating]: (a, b) => b.initialRating - a.initialRating,
  [SortEnum.Price]: (a, b) => a.price - b.price,
};

export const sortReducer = (
  state: SortReducerState,
  action: SortActions,
): SortReducerState => {
  const comparator = sortComparators[action.type];

  if (!comparator) {
    return state;
  }

  return {
    sort: action.type,
    products: [...state.products].sort(comparator),
  };
};

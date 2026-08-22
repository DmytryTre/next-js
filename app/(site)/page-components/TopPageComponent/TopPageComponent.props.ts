import { TopPageModel } from '@/interfaces/page.interface';
import { ProductModel } from '@/interfaces/product.interface';

export interface TopPageComponentProps {
  alias: string;
  page: TopPageModel;
  products: ProductModel[];
}

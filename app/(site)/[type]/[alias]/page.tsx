import getMenu from '@/api/menu';
import getPage from '@/api/page';
import { getProducts } from '@/api/product'; // Импортируем созданную функцию
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { TopPageComponent } from '../../page-components';

type Props = {
  params: Promise<{ alias: string }>;
};

export const metadata: Metadata = {
  title: 'Страница',
};

export async function generateStaticParams() {
  const menu = await getMenu(0);
  return menu.flatMap((item) => item.pages.map((page) => ({ alias: page.alias })));
}

export default async function TopPage({ params }: Props) {
  const { alias } = await params;
  const page = await getPage(alias);

  if (!page) {
    notFound();
  }

  const products = await getProducts(page.category);

  return <TopPageComponent alias={alias} page={page} products={products} />;
}

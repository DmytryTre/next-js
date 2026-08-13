import getMenu from '@/api/menu';
import getPage from '@/api/page';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

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

export default async function PageCourses({ params }: Props) {
  const { alias } = await params;
  const page = await getPage(alias);
  if (!page) {
    notFound();
  }
  return <div>{page.title}</div>;
}

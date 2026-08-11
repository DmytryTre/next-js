import getPage from '@/api/page';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ alias: string }>;
};

export const metadata: Metadata = {
  title: 'Страница',
};

export default async function PageProducts({ params }: Props) {
  const { alias } = await params;
  const page = await getPage(alias);
  if (!page) {
    notFound();
  }
  return <div>{page.title}</div>;
}

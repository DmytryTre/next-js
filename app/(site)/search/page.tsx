import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Поиск',
};

export default async function PageProducts() {
  return <div>Поиск</div>;
}

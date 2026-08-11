import { API } from '@/app/api';
import { Metadata } from 'next';

export default async function getMenu(firstCategory: number): Promise<Metadata> {
  const res = await fetch(API.topPage.find, {
    method: 'POST',
    body: JSON.stringify({
      firstCategory,
    }),
    headers: new Headers({ 'content-type': 'application/json' }),
  });
  return res.json();
}

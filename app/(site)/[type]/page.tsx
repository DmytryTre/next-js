import { Metadata } from 'next';

type Props = {
  params: Promise<{ type: string }>;
};

export const metadata: Metadata = {
  title: 'Курсы',
};

export default async function PageCourses({ params }: Props) {
  const { type } = await params;
  return <div>{type}</div>;
}

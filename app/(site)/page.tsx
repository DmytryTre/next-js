import getMenu from '@/api/menu';
import { Input, TextArea } from '@/components';

export default async function Home() {
  const menu = await getMenu(0);

  return (
    <main>
      Главная страница
      <div>
        <TextArea placeholder="главная" />
        <div>{JSON.stringify(menu)}</div>
      </div>
    </main>
  );
}

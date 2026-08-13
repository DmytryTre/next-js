import getMenu from '@/api/menu';

export default async function Home() {
  const menu = await getMenu(0);

  return (
    <main>
      Главная страница
      <div>
        <div>{JSON.stringify(menu)}</div>
      </div>
    </main>
  );
}

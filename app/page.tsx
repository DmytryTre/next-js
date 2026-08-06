import { Button, Htag, P, Tag } from "@/components";

export default function Home() {
  return (
    <div>
     <Htag Tag='h1'>Текст</Htag>
     <P>текст текс</P>
     <Tag>Текст параграя</Tag>
      <Button appearance="primary" arrow="right">Кнопка</Button>
      <Button appearance="ghost" arrow="down">Кнопка</Button>
    </div>
  );
}

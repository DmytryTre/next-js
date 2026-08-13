import { Htag, Tag } from '@/components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { HhData } from '../../../../components/HhData/HhData';

export const TopPageComponent = ({ alias, page, products }: TopPageComponentProps) => {
  console.log(products, 'page');
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag Tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>
      <div>{products && products.map((p) => <div key={p._id}>{p.title}</div>)}</div>
      <div className={styles.hhTitle}>
        <Htag Tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>
      {page.hh && <HhData {...page.hh} />}
    </div>
  );
};

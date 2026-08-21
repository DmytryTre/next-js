'use client';

import { Advantages, Htag, Product, Sort, Tag } from '@/components';
import { TopPageComponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { HhData } from '../../../../components/HhData/HhData';
import { SortEnum } from '@/components/Sort/Sort.props';
import { useReducer } from 'react';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({ alias, page, products }: TopPageComponentProps) => {
  const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating,
  });

  const setSort = (sort: SortEnum) => {
    dispathSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag Tag="h1">{page.title}</Htag>
        {sortedProducts && (
          <Tag color="gray" size="m">
            {sortedProducts.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((p) => <Product layout key={p._id} product={p} />)}
      </div>
      <div className={styles.hhTitle}>
        <Htag Tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red" size="m">
          hh.ru
        </Tag>
      </div>
      {page.hh && <HhData {...page.hh} />}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag Tag="h2">Преимущства:</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />
      )}
      <Htag Tag="h2">Получаемые навыки:</Htag>
      {page.tags.map((t) => (
        <Tag key={t} color="primary">
          {t}
        </Tag>
      ))}
    </div>
  );
};

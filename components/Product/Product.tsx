import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { Htag } from '../Htag/Htag';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declOfNum } from '@/helpers/helpers';
import Image from 'next/image';

export const Product = ({
  product,
  className,
  ...props
}: ProductProps): React.ReactElement => (
  <Card className={cn(styles.product, className, { ...props })}>
    <div className={styles.logo}>
      <Image
        src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
        alt={product.title}
        width={70}
        height={70}
      />
    </div>
    <Htag Tag="h2" className={styles.title}>
      {product.title}
    </Htag>
    <Htag Tag="h2" className={styles.price}>
      {product.price}
    </Htag>
    <Htag Tag="h2" className={styles.credit}>
      {product.credit}
    </Htag>
    <div className={styles.rating}>
      <Rating rating={product.reviewAvg ?? product.initialRating} />
    </div>
    <div className={styles.tags}>
      {product.categories.map((c) => (
        <Tag key={c} color="ghost">
          {c}
        </Tag>
      ))}
    </div>
    <div className={styles.priceTitle}>цена</div>
    <div className={styles.creditTitle}>кредит</div>
    <div className={styles.rateTitle}>
      {product.reviewCount}{' '}
      {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
    </div>
    <div className={styles.hr}>
      <hr />
    </div>
    <div className={styles.description}>{product.description}</div>
    <div className={styles.feature}>
      {product.characteristics.map((c) => (
        <div className={styles.characteristics} key={c.name}>
          <span className={styles.characteristicsName}>{c.name}</span>
          <span className={styles.characteristicsDots}></span>
          <span className={styles.characteristicsValue}>{c.value}</span>
        </div>
      ))}
    </div>
    <div className={styles.advBlock}>
      {product.advantages && (
        <div className={styles.advantages}>
          <div className={styles.advTitle}>Преимущества</div>
          <div>{product.advantages}</div>
        </div>
      )}
    </div>
    <div className={styles.hr}>
      <hr />
    </div>
    <div className={styles.actions}>
      <Button appearance="primary">Узнать подробнее</Button>
      <Button
        appearance="ghost"
        // arrow={isReviewOpened ? 'down' : 'right'}
        className={styles.reviewButton}
        onClick={() => {}}
      >
        Читать отзывы
      </Button>
    </div>
  </Card>
);

'use client';

import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import { Card } from '../Card/Card';
import { Htag } from '../Htag/Htag';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declOfNum } from '@/helpers/helpers';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { Divider, Rating, Review, ReviewForm } from '..';
import { motion } from 'framer-motion';

export const Product = motion(
  forwardRef(
    (
      {
        product: {
          title,
          image,
          price,
          credit,
          reviewAvg,
          initialRating,
          categories,
          reviewCount,
          characteristics,
          advantages,
          description,
          reviews,
          _id,
        },
        className,
        ...props
      }: ProductProps,
      ref: ForwardedRef<HTMLDivElement>,
    ): React.ReactElement => {
      const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
      const reviewRef = useRef<HTMLDivElement>(null);

      const variants = {
        visible: { opacity: 1, height: 'auto' },
        hidden: { opacity: 0, height: 0 },
      };

      const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        reviewRef.current?.focus();
      };

      return (
        <div className={className} {...props} ref={ref}>
          <Card className={styles.product}>
            <div className={styles.logo}>
              <Image
                src={process.env.NEXT_PUBLIC_DOMAIN + image}
                alt={title}
                width={70}
                height={70}
              />
            </div>
            <Htag Tag="h2" className={styles.title}>
              {title}
            </Htag>
            <Htag Tag="h2" className={styles.price}>
              {price}
            </Htag>
            <Htag Tag="h2" className={styles.credit}>
              {credit}
            </Htag>
            <div className={styles.rating}>
              <Rating rating={reviewAvg ?? initialRating} />
            </div>
            <div className={styles.tags}>
              {categories.map((c) => (
                <Tag key={c} color="ghost">
                  {c}
                </Tag>
              ))}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.rateTitle}>
              <a href="#ref" onClick={scrollToReview}>
                {reviewCount} {declOfNum(reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
              </a>
            </div>
            <div className={styles.hr}>
              <Divider />
            </div>
            <div className={styles.description}>{description}</div>
            <div className={styles.feature}>
              {characteristics.map((c) => (
                <div className={styles.characteristics} key={c.name}>
                  <span className={styles.characteristicsName}>{c.name}</span>
                  <span className={styles.characteristicsDots}></span>
                  <span className={styles.characteristicsValue}>{c.value}</span>
                </div>
              ))}
            </div>
            <div className={styles.advBlock}>
              {advantages && (
                <div className={styles.advantages}>
                  <div className={styles.advTitle}>Преимущества</div>
                  <div>{advantages}</div>
                </div>
              )}
            </div>
            <div className={styles.hr}>
              <Divider />
            </div>
            <div className={styles.actions}>
              <Button appearance="primary">Узнать подробнее</Button>
              <Button
                appearance="ghost"
                arrow={isReviewOpened ? 'down' : 'right'}
                className={styles.reviewButton}
                onClick={() => setIsReviewOpened((prev) => !prev)}
              >
                Читать отзывы
              </Button>
            </div>
          </Card>
          <motion.div
            animate={isReviewOpened ? 'visible' : 'hidden'}
            variants={variants}
            initial="hidden"
          >
            <Card
              ref={reviewRef}
              appearance="blue"
              className={styles.reviews}
              tabIndex={0}
            >
              {reviews.map((r) => (
                <div key={r._id}>
                  <Review review={r} />
                  <Divider />
                </div>
              ))}
              <ReviewForm tabIndex={isReviewOpened ? 0 : -1} productId={_id} />
            </Card>
          </motion.div>
        </div>
      );
    },
  ),
);

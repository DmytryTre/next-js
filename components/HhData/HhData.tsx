import { HhDataProps, SALARY_LEVELS_CONFIG } from './HhData.props';
import styles from './HhData.module.css';
import { ReactElement } from 'react';
import RateIcon from './rate.svg';
import { Card } from '..';
import { priceRu } from '@/helpers/helpers';

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HhDataProps): ReactElement => {
  const salaryData = [
    { ...SALARY_LEVELS_CONFIG.junior, salary: juniorSalary, id: 'junior' },
    { ...SALARY_LEVELS_CONFIG.middle, salary: middleSalary, id: 'middle' },
    { ...SALARY_LEVELS_CONFIG.senior, salary: seniorSalary, id: 'senior' },
  ];

  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countValue}>{count}</div>
      </Card>

      <Card className={styles.salary}>
        {salaryData.map(({ id, title, stars, salary }) => (
          <div key={id}>
            <div className={styles.title}>{title}</div>
            <div className={styles.salaryValue}>{priceRu(salary)}</div>
            <div className={styles.rate}>
              {[1, 2, 3].map((star) => (
                <RateIcon key={star} className={star <= stars ? styles.filled : ''} />
              ))}
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import { ReactElement } from 'react';
import CheckIcon from './check.svg';
import { Divider } from '..';

export const Advantages = ({ advantages }: AdvantagesProps): ReactElement => {
  return (
    <>
      {advantages.map(({ _id, title, description }) => (
        <div key={_id} className={styles.advantage}>
          <CheckIcon />
          <div className={styles.title}>{title}</div>
          <Divider />
          <div>{description}</div>
        </div>
      ))}
    </>
  );
};

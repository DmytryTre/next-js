import { SortEnum, sortLabels, SortProps } from './Sort.props';
import styles from './Sort.module.css';
import SortIcon from './sort.svg';
import cn from 'classnames';

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): React.ReactElement => (
  <div className={cn(styles.sort, className)} {...props}>
    {Object.values(SortEnum).map((item) => {
      const currentType = item as SortEnum;

      return (
        <button
          key={currentType}
          onClick={() => setSort(currentType)}
          className={cn({ [styles.active]: sort === currentType })}
        >
          <SortIcon className={styles.sortIcon} />
          {sortLabels[currentType]}
        </button>
      );
    })}
  </div>
);

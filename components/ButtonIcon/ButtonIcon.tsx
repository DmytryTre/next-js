import styles from './ButtonIcon.module.css';
import { ButtonIconProps, icons } from './ButtonIcon.props';
import cn from 'classnames';
import React from 'react';

export const ButtonIcon = ({
  appearance,
  icon,
  className,
  ...props
}: ButtonIconProps): React.ReactElement => {
  const IconComp = icons[icon];
  return (
    <button
      className={cn(styles.button, className, {
        [styles[appearance]]: appearance,
      })}
      {...props}
    >
      <IconComp />
    </button>
  );
};

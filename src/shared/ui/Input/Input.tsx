'use client';

import { forwardRef } from 'react';
import clsx from 'clsx';
import { InputProps } from './types';
import Info from '@/svg/info-circle.svg';
import styles from './Input.module.scss';

type TInput = HTMLInputElement;

export const Input = forwardRef<TInput, InputProps>((props, ref) => {
  const {
    className,
    labelClassName,
    name,
    value,
    type,
    readOnly,
    suptitle,
    variant = 'primary',
    ...rest
  } = props;

  return (
    <label className={clsx(styles.label, labelClassName)}>
      <div className={styles.top}>
        <span className={clsx(styles.suptitle, styles[variant])}>{suptitle}</span>
        <Info width={16} height={16} />
      </div>

      <input
        ref={ref}
        className={clsx(styles.input, className, {
          [styles.filled]: type === 'date' && !!value,
        })}
        name={name}
        value={value}
        type={type}
        readOnly={readOnly}
        {...rest}
      />
    </label>
  );
});

Input.displayName = 'Input';

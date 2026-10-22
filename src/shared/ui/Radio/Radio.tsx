'use client';

import { forwardRef, ChangeEvent } from 'react';
import clsx from 'clsx';
import { ICheckboxProps } from './types';
import styles from './styles.module.scss';

type L = HTMLLabelElement;

export const Radio = forwardRef<L, ICheckboxProps>((props, ref) => {
  const {
    onCheckedChange,
    labelClassName,
    inputClassName,
    checked,
    text,
    message,
    ...rest
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onCheckedChange?.(e.target.checked);
  };

  return (
    <label className={clsx(styles.label, labelClassName)} ref={ref}>
      <input
        className={clsx(styles.input, inputClassName, {
          [styles.error]: message,
        })}
        type="radio"
        checked={checked}
        onChange={handleChange}
        {...rest}
      />

      {text && <p className={styles.text}>{text}</p>}
    </label>
  );
});

Radio.displayName = 'Radio';

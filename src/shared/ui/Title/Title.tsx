import { JSX } from 'react';
import clsx from 'clsx';
import { TitleProps } from './types';
import styles from './Title.module.scss';

export const Title = (props: TitleProps) => {
  const {
    children,
    type = 'h2',
    size = 'm',
    variant = 'primary',
    weight = 'medium',
    className,
    ...rest
  } = props;
  const Tag: keyof JSX.IntrinsicElements = type;

  return (
    <Tag
      className={clsx(styles[size], styles[variant], styles[weight], className)}
      {...rest}
    >
      {children}
    </Tag>
  );
};

Title.displayName = 'Title';

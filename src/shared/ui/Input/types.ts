import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface InputProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> {
  /**
   * Кастомный класс для input.
   */
  className?: string;
  /**
   * Кастомный класс для label.
   */
  labelClassName?: string;
  /**
   * Заголовок инпута.
   */
  suptitle: string;
  /**
   * Тема инпута, по умолчанию primary.
   */
  variant?: 'primary' | 'secondary';
}

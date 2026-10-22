import { ReactNode, MouseEvent, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  /**
   * Контент кнопки.
   */
  children: ReactNode;
  /**
   * Кастомный класс для button.
   */
  className?: string;
  /**
   * Состояние disabled.
   */
  isDisabled?: boolean;
  /**
   * Состояние загрузки в кнопке(показывается spinner).
   */
  isLoading?: boolean;
  /**
   * Колбек на клик по кнопке.
   */
  onClick?: (e: MouseEvent) => void;
  /**
   * Толщина шрифта, по умолчанию regular(400).
   */
  weight?: 'regular' | 'semibold';
  /**
   * Размер шрифта, по умолчанию m(16px).
   */
  fontSize?: 's' | 'm' | 'l';
  /**
   * Размер кнопки, по умолчанию md(height: 40px).
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Тема кнопки. По умолчанию primary(серая)
   */
  variant?: 'primary' | 'secondary';
}

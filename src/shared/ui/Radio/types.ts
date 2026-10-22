import { ReactNode } from 'react';

type Input = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'checked' | 'disabled' | 'className'
>;

export interface ICheckboxProps extends Input {
  /**
   * Состояние checkbox.
   */
  checked: boolean;
  /**
   * Колбек на изменение.
   */
  onCheckedChange: (checked: boolean) => void;
  /**
   * Текст чекбокса.
   */
  text?: ReactNode;
  /**
   * Сообщение ошибки.
   */
  message?: string;
  /**
   * Кастомный класс для label.
   */
  labelClassName?: string;
  /**
   * Кастомный класс для input.
   */
  inputClassName?: string;
}

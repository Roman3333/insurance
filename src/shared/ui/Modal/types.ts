import { ReactNode } from 'react';

export interface ModalProps {
  /**
   * Контент модалки.
   */
  children: ReactNode;
  /**
   * Флаг открытия модалки.
   */
  isModalOpen: boolean;
  /**
   * Колбек на закрытие модалки.
   */
  handlelCloseModal: () => void;
  /**
   * Флаг, виден ли крестик для закрытия модалка. По умолчанию true.
   */
  isCrossVisible?: boolean;
  /**
   * Кастомный класс для wrapper modal.
   */
  wrapperClassname?: string;
}

'use client';

import ReactModal from 'react-modal';
import clsx from 'clsx';
import { ModalProps } from './types';
import Close from '@/svg/cross.svg';
import styles from './Modal.module.scss';
import './Modal.scss';

export const Modal = (props: ModalProps) => {
  const { children, isModalOpen, handlelCloseModal, wrapperClassname } = props;

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handlelCloseModal}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick={true}
      contentLabel="Modal"
      ariaHideApp={false}
      className={clsx(styles.wrapper, wrapperClassname, 'scrollbar')}
    >
      <button className={styles.btn} onClick={handlelCloseModal}>
        <Close width={24} height={24} />
      </button>

      {children}
    </ReactModal>
  );
};

Modal.displayName = 'Modal';

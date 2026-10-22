import { Modal, Title } from '@/shared/ui';
import { ModalAuthProps } from './types';
import styles from './styles.module.scss';

export const ModalAuth = (props: ModalAuthProps) => {
  const { isModalOpen, setIsModalOpen } = props;

  return (
    <Modal
      wrapperClassname={styles.modal}
      isModalOpen={isModalOpen}
      handlelCloseModal={() => setIsModalOpen(false)}
    >
      <div>
        <Title size="xl">Вход в личный кабинет</Title>
      </div>
      <div>
        <Title size="xm">Еще не с нами?</Title>
      </div>
    </Modal>
  );
};

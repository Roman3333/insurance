import { Modal, Title } from '@/shared/ui';
import { ModalAuthProps } from './types';
import styles from './styles.module.scss';
import UserIcon from '@/shared/assets/svg/user.svg';
import LockIcon from '@/shared/assets/svg/lock.svg';
import VkIcon from '@/shared/assets/svg/vk.svg';
import WhatsappIcon from '@/shared/assets/svg/whatsapp.svg';
import GoogleIcon from '@/shared/assets/svg/google.svg';
import AppleIcon from '@/shared/assets/svg/apple.svg';

export const ModalAuth = (props: ModalAuthProps) => {
  const { isModalOpen, setIsModalOpen } = props;

  return (
    <Modal
      wrapperClassname={styles.modal}
      isModalOpen={isModalOpen}
      handlelCloseModal={() => setIsModalOpen(false)}
    >
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <Title size="xl">Вход в личный кабинет</Title>
          <Title size="xm" className={styles.subtitle}>
            Еще не с нами?
          </Title>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <UserIcon className={styles.inputIcon} />
              <input
                type="text"
                placeholder="Логин или email"
                className={styles.input}
                aria-label="Login or email"
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <LockIcon className={styles.inputIcon} />
              <input
                type="password"
                placeholder="Пароль"
                className={styles.input}
                aria-label="Password"
              />
            </div>
          </div>

          <div className={styles.formActions}>
            <label className={styles.rememberMe}>
              <input type="checkbox" className={styles.checkbox} />
              <span className={styles.checkboxLabel}>Запомнить меня</span>
            </label>

            <a href="#" className={styles.forgotPassword}>
              Забыли пароль?
            </a>
          </div>

          <button className={styles.submitButton}>Войти</button>

          <div className={styles.socialLogin}>
            <div className={styles.orDivider}>
              <span>или</span>
            </div>
            <div className={styles.socialButtons}>
              <button className={styles.socialButton}>
                <GoogleIcon width={16} height={16} className={styles.socialIcon} />
                Google
              </button>
              <button className={styles.socialButton}>
                <VkIcon width={16} height={16} className={styles.socialIcon} />
                VK
              </button>
              <button className={styles.socialButton}>
                <WhatsappIcon width={16} height={16} className={styles.socialIcon} />
                WhatsApp
              </button>
              <button className={styles.socialButton}>
                <AppleIcon width={16} height={16} className={styles.socialIcon} />
                Apple
              </button>
            </div>
          </div>

          <div className={styles.registerLink}>
            Нет аккаунта?{' '}
            <a href="#" className={styles.registerLinkText}>
              Зарегистрироваться
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

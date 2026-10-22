import Image from 'next/image';
import Link from 'next/link';
import { Title } from '@/shared/ui';
import Check from '@/svg/check.svg';
import styles from './styles.module.scss';

const items = [
  'Храните полисы в одном месте',
  'Напоминания о сроках и платежах',
  'Быстрый доступ к документам',
  'История и статус всех страховок',
];

export const Qr = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.wrapper}>
          <div>
            <Title className={styles.title}>Все ваши страховки всегда под рукой</Title>
            <ul className={styles.ul}>
              {items.map((item, index) => (
                <li key={index} className={styles.li}>
                  <Check width={20} height={20} color="var(--blue)" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <Image
            src="/img/phone.png"
            unoptimized
            width={321}
            height={349}
            alt="Phone"
            className={styles.phone}
          />

          <div className={styles.right}>
            <div className={styles.images}>
              <a href="" className={styles.link}>
                <Image
                  src="/img/google.png"
                  unoptimized
                  width={162}
                  height={48}
                  alt="Google Play"
                />
              </a>
              <a href="" className={styles.link}>
                <Image
                  src="/img/apple.png"
                  unoptimized
                  width={144}
                  height={48}
                  alt="App Store"
                />
              </a>
            </div>
            <Image src="/img/qr.png" unoptimized width={173} height={173} alt="Qr code" />
          </div>
        </div>
      </div>
    </section>
  );
};

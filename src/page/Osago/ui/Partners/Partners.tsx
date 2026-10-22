import Link from 'next/link';
import Image from 'next/image';
import { Title } from '@/shared/ui';
import Arrow from '@/svg/arrow-right.svg';
import styles from './styles.module.scss';

const populars = [
  {
    title: 'Компания 1',
    img: '/img/company-1.png',
  },
  {
    title: 'Компания 2',
    img: '/img/company-2.png',
  },
  {
    title: 'Компания 3',
    img: '/img/company-3.png',
  },
  {
    title: 'Компания 4',
    img: '/img/company-4.png',
  },
  {
    title: 'Компания 5',
    img: '/img/company-5.png',
  },
  {
    title: 'Компания 6',
    img: '/img/company-6.png',
  },
];

export const Partners = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.top}>
          <Title>Страховые компании-партнеры</Title>
          <Link href="/" className={styles.link}>
            <span>Все компании</span>
            <Arrow width={16} height={16} />
          </Link>
        </div>

        <div className={styles.cards}>
          {populars.map(({ title, img }) => (
            <Link key={title} href={'/'} className={styles.card}>
              <Image
                src={img}
                width={150}
                height={34}
                alt={title}
                className={styles.img}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

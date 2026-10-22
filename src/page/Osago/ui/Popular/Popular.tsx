import Link from 'next/link';
import Image from 'next/image';
import { Title } from '@/shared/ui';
import Arrow from '@/svg/arrow-right.svg';
import styles from './styles.module.scss';

const populars = [
  {
    title: 'ОСАГО',
    suptitle: 'Обзательное страхование автогражданской ответственности',
    img: '/img/popular-1.png',
  },
  {
    title: 'КАСКО',
    suptitle: 'Добровольное страхование автомобиля от рисков и повреждений',
    img: '/img/popular-2.png',
  },
  {
    title: 'Недвижимость',
    suptitle: 'Защита квартиры, дома и имущества',
    img: '/img/popular-3.png',
  },
  {
    title: 'Путешествия',
    suptitle: 'Страховка для поездок по России и за рубеж',
    img: '/img/popular-4.png',
  },
  {
    title: 'Здоровье',
    suptitle: 'Страхование на случай болезни и лечения',
    img: '/img/popular-5.png',
  },
  {
    title: 'ДМС',
    suptitle: 'Добровольное медицинское страхование',
    img: '/img/popular-6.png',
  },
];

export const Popular = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.top}>
          <Title>Популярные страховые продукты</Title>
          <Link href="/" className={styles.link}>
            <span>Смотреть все</span>
            <Arrow width={16} height={16} />
          </Link>
        </div>

        <div className={styles.cards}>
          {populars.map(({ title, suptitle, img }) => (
            <Link key={title} href={'/'} className={styles.card}>
              <div className={styles.arrowWrapper}>
                <Arrow width={16} height={16} />
              </div>
              <Image
                src={img}
                width={207}
                height={130}
                alt={title}
                className={styles.img}
              />
              <Title className={styles.title} type="h3" weight="semibold" size="xm">
                {title}
              </Title>
              <p className={styles.suptitle}>{suptitle}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

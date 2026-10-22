import Link from 'next/link';
import clsx from 'clsx';
import { Title } from '@/shared/ui';
import Logo from '@/svg/logo.svg';
import Max from '@/svg/max.svg';
import Whatsupp from '@/svg/whatsapp.svg';
import Vk from '@/svg/vk.svg';
import Chevron from '@/svg/chevron-down.svg';
import styles from './styles.module.scss';

const products = [
  'ОСАГО',
  'КАСКО',
  'Недвижимость',
  'Путешествия',
  'Здоровье',
  'ДМС и другие',
];
const services = ['О компании', 'О Как это работает', 'Отзывы', 'Контакты', 'Документы'];
const supports = ['Помощь', 'Частые вопросы', 'Написать в поддержку'];
const socials = [
  { title: 'MAX', href: 'https://max.ru/', Icon: Max },
  { title: 'WhatsApp', href: 'https://www.whatsapp.com/', Icon: Whatsupp },
  { title: 'ВКонтакте', href: 'https://vk.com/', Icon: Vk },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <Link href="/" className={styles.logo} aria-label="КупиСтраховки — на главную">
            <Logo width={187} height={36} />
          </Link>

          <div className={styles.columns}>
            <div className={styles.column}>
              <Title type="h4" weight="semibold" size="s">
                Продукты
              </Title>
              <ul className={styles.ul}>
                {products.map((item) => (
                  <li key={item}>
                    <Link href="/" className={styles.link}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <Title type="h4" weight="semibold" size="s">
                О сервисе
              </Title>
              <ul className={styles.ul}>
                {services.map((item) => (
                  <li key={item}>
                    <Link href="/" className={styles.link}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.column}>
              <Title type="h4" weight="semibold" size="s">
                Поддержка
              </Title>
              <ul className={styles.ul}>
                {supports.map((item) => (
                  <li key={item}>
                    <Link href="/" className={styles.link}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className={clsx(styles.ul, styles.ulSocials)}>
            {socials.map(({ title, href, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                  aria-label={title}
                >
                  <span className={styles.name}>{title}</span>
                  <Icon width={17} height={17} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copy}>
            <div>© 2026 КупиСтраховки.ру</div>
            <Link href="/" className={styles.policy}>
              Политика конфиденциальности
            </Link>
          </div>

          <div className={styles.language}>
            <span>Русский</span>
            <Chevron width={16} height={16} />
          </div>
        </div>
      </div>
    </footer>
  );
};

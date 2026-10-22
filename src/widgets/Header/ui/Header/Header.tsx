'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Button } from '@/shared/ui';
import { ModalAuth } from '../ModalAuth/ModalAuth';
import Logo from '@/svg/logo.svg';
import Arrow from '@/svg/chevron-down.svg';
import Notification from '@/svg/notification.svg';
import { NavItem } from './types';
import User from '@/svg/user.svg';
import styles from './styles.module.scss';

const NAV_ITEMS: NavItem[] = [
  { label: 'ОСАГО', href: '/' },
  { label: 'КАСКО', href: '/kasko' },
  {
    label: 'Страховые продукты',
    dropdownItems: [
      {
        label: 'ОСАГО',
        description: 'Обязательное страхование автомобиля',
        href: '/',
      },
      {
        label: 'КАСКО',
        description: 'Защита автомобиля от повреждений',
        href: '/kasko',
      },
      {
        label: 'Страхование путешествий',
        description: 'Спокойные поездки за границу и по России',
        href: '/',
      },
      {
        label: 'Страхование недвижимости',
        description: 'Защита квартиры и дома',
        href: '/',
      },
    ],
  },
  {
    label: 'О сервисе',
    dropdownItems: [
      {
        label: 'Как это работает',
        description: 'От выбора полиса до его оформления',
        href: '/',
      },
      {
        label: 'Страховые компании',
        description: 'Сравните предложения разных компаний',
        href: '/',
      },
      {
        label: 'Помощь и поддержка',
        description: 'Ответы на частые вопросы',
        href: '/',
      },
      {
        label: 'Контакты',
        description: 'Свяжитесь с нашей командой',
        href: '/',
      },
    ],
  },
  { label: 'Калькуляторы', href: '/calculators' },
  { label: 'Блог', href: '/blog' },
];

export const Header = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href="/" className={styles.logo} aria-label="КупиСтраховки — на главную">
            <Logo width={166} height={32} />
          </Link>

          <nav className={styles.nav} aria-label="Основная навигация">
            <ul className={styles.ul}>
              {NAV_ITEMS.map(({ label, href, dropdownItems }) => (
                <li key={label} className={styles.navItem}>
                  {href ? (
                    <Link
                      href={href}
                      className={clsx(styles.link, {
                        [styles.active]: href === pathname,
                      })}
                    >
                      {label}
                    </Link>
                  ) : (
                    <>
                      <button type="button" className={styles.link} aria-haspopup="true">
                        {label}
                        <Arrow className={styles.arrow} width={16} height={16} />
                      </button>

                      <div className={styles.dropdown}>
                        <div className={styles.dropdownHeader}>
                          <span className={styles.dropdownTitle}>{label}</span>
                          <span className={styles.dropdownSubtitle}>
                            {label === 'Страховые продукты'
                              ? 'Выберите подходящую защиту'
                              : 'Всё, что нужно знать о сервисе'}
                          </span>
                        </div>

                        <ul className={styles.dropdownList}>
                          {dropdownItems?.map((item) => (
                            <li key={item.label}>
                              <Link href={item.href} className={styles.dropdownLink}>
                                <span className={styles.dropdownLinkTitle}>
                                  {item.label}
                                </span>
                                <span className={styles.dropdownDescription}>
                                  {item.description}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>

                        <div className={styles.dropdownFooter}>
                          <span>Остались вопросы?</span>
                          <Link href="/help">Мы поможем разобраться →</Link>
                        </div>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <button type="button" className={styles.bellButton}>
              <Notification className={styles.notification} width={24} height={24} />
            </button>

            <Button className={styles.loginButton} onClick={() => setisModalOpen(true)}>
              <User className={styles.loginUserIcon} width={20} height={20} />
              <span>Войти</span>
            </Button>
          </div>
        </div>
      </div>

      <ModalAuth isModalOpen={isModalOpen} setIsModalOpen={setisModalOpen} />
    </header>
  );
};

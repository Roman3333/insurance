'use client';

import { useState } from 'react';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import clsx from 'clsx';
import { useNumberSchema } from '@/page/Osago';
import { Button, Title, Radio, Input } from '@/shared/ui';
import { NumberForm } from './types';
import Flag from '@/svg/ru.svg';
import Chevron from '@/svg/chevron-down.svg';
import Pen from '@/svg/edit.svg';
import Check from '@/svg/check.svg';
import styles from './styles.module.scss';

const steps = [
  { number: 1, title: 'Автомобиль', suptitle: 'Данные авто' },
  { number: 2, title: 'Водители', suptitle: 'Данные водителей' },
  { number: 3, title: 'Предложения', suptitle: 'Сравнение вариантов' },
  { number: 4, title: 'Оплата', suptitle: 'Оплата и получение полиса' },
];
const car = [
  { title: 'Марка', suptitle: 'Hyundai' },
  { title: 'Модель', suptitle: 'Staria' },
  { title: 'Год выпуска', suptitle: '2025' },
  { title: 'Мощность (л.с.)', suptitle: '177' },
];
const tabsPts = [
  { label: 'СТС', value: 1 },
  { label: 'ПТС', value: 2 },
];
const tabsVin = [
  { label: 'VIN', value: 3 },
  { label: 'Нет VIN', value: 4 },
];

export const Steps = () => {
  const [activePtsTab, setActivePtsTab] = useState(1);
  const [activeVinTab, setActiveVinTab] = useState(3);
  const [documentType, setDocumentType] = useState<'paper' | 'electronic'>('paper');
  const [documentVin, setDocumentVin] = useState<'vin' | 'not-vin'>('vin');

  const {
    control,
    handleSubmit,
    setFocus,
    formState: { isSubmitting, errors },
  } = useForm<NumberForm>({
    resolver: zodResolver(useNumberSchema()),
    defaultValues: {
      code: '',
    },
  });

  const onSubmit: SubmitHandler<NumberForm> = async (form) => {
    try {
      console.log(form);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className={styles.steps}>
          {steps.map(({ number, title, suptitle }) => (
            <div
              key={number}
              className={clsx(styles.step, {
                [styles.active]: number === 1,
              })}
            >
              <div className={styles.number}>{number}</div>
              <div className={styles.right}>
                <Title type="h4" weight="semibold" size="xm" className={styles.title}>
                  {title}
                </Title>
                <span className={styles.span}>{suptitle}</span>
              </div>
            </div>
          ))}

          <div className={styles.line}></div>
        </div>

        <div className={styles.bottom}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.top}>
              <div className={styles.info}>
                <Title type="h1" size="l">
                  Автомобиль
                </Title>
                <p>Выберите марку и модель автомобиля для быстрого расчета КАСКО</p>
              </div>
              <div className={styles.action}>
                <div className={styles.inputs}>
                  <Controller
                    name="code"
                    control={control}
                    render={({ field }) => (
                      <IMaskInput
                        inputRef={field.ref}
                        name={field.name}
                        mask="L 000 LL 00[0]"
                        definitions={{
                          L: /[АВЕКМНОРСТУХ]/,
                        }}
                        prepare={(value) => value.toLocaleUpperCase('ru-RU')}
                        unmask={true}
                        value={field.value}
                        onAccept={(value) => field.onChange(value)}
                        onBlur={field.onBlur}
                        placeholder="А 000 АА 00"
                        inputMode="text"
                        autoComplete="off"
                        className={styles.input}
                        aria-invalid={!!errors.code}
                      />
                    )}
                  />

                  <div className={styles.select}>
                    <span>RUS</span>
                    <Flag width={28} height={20} />
                    <Chevron width={16} height={16} color="var(--text-primary)" />
                  </div>
                </div>
                <button className={styles.btn} onClick={() => setFocus('code')}>
                  <Pen width={28} height={20} />
                </button>
              </div>
            </div>

            <div className={styles.car}>
              {car.map(({ title, suptitle }) => (
                <div key={title} className={styles.carItem}>
                  <div className={styles.column}>
                    <span className={styles.columnTitle}>{title}</span>
                    <span className={styles.columnSuptitle}>{suptitle}</span>
                  </div>
                  <Check width={20} height={20} color="var(--green)" />
                </div>
              ))}
            </div>

            <div>
              <Title className={styles.documents}>Документы</Title>
              <div className={styles.tabs}>
                {tabsPts.map(({ label, value }) => (
                  <div
                    key={value}
                    className={clsx(styles.tab, {
                      [styles.active]: value === activePtsTab,
                    })}
                    onClick={() => setActivePtsTab(value)}
                  >
                    {label}
                  </div>
                ))}
              </div>

              <div className={styles.checkboxes}>
                <Radio
                  name="documentType"
                  value="paper"
                  text="Бумажный"
                  checked={documentType === 'paper'}
                  onCheckedChange={() => setDocumentType('paper')}
                />

                <Radio
                  name="documentType"
                  value="electronic"
                  text="Электронный"
                  checked={documentType === 'electronic'}
                  onCheckedChange={() => setDocumentType('electronic')}
                />
              </div>

              <div className={styles.inputss}>
                <Input suptitle="Номер ПТС" placeholder="Введите номер" />
                <Input suptitle="Дата выдачи" placeholder="ДД.ММ.ГГГГ" type="date" />
              </div>

              <div className={styles.separator} />

              <div className={styles.tabs}>
                {tabsVin.map(({ label, value }) => (
                  <div
                    key={value}
                    className={clsx(styles.tab, {
                      [styles.active]: value === activeVinTab,
                    })}
                    onClick={() => setActiveVinTab(value)}
                  >
                    {label}
                  </div>
                ))}
              </div>

              <div className={styles.checkboxes}>
                <Radio
                  name="documentVin"
                  value="vin"
                  text="Номер кузова"
                  checked={documentVin === 'vin'}
                  onCheckedChange={() => setDocumentVin('vin')}
                />

                <Radio
                  name="documentVin"
                  value="not-vin"
                  text="Номер шасси"
                  checked={documentVin === 'not-vin'}
                  onCheckedChange={() => setDocumentVin('not-vin')}
                />
              </div>

              <div className={styles.inputss}>
                <Input suptitle="Номер кузова" placeholder="Введите номер" />
                <Input suptitle="Цель использования" placeholder="Введите цель" />
              </div>
            </div>

            <Button
              className={styles.continue}
              variant="secondary"
              weight="semibold"
              size="lg"
              type="submit"
              isLoading={isSubmitting}
            >
              Продолжить
            </Button>
          </form>

          <div className={styles.why}>
            <div className={styles.content}>
              <Image
                src="/img/why.png"
                quality={90}
                width={308}
                height={205}
                alt="Осаго онлайн"
                className={styles.img}
              />
              <Title className={styles.whyTitle} type="h3" size="xl">
                Зачем нужны данные автомобиля?
              </Title>
              <p className={styles.whyText}>
                Эти данные необходимы для точного расчета стоимости КАСКО. Мы подберем для
                вас лучшие предложения от надежных страховых компаний.
              </p>
            </div>
            <div className={styles.count}>2 123 расчета сегодня</div>
          </div>
        </div>
      </div>
    </section>
  );
};

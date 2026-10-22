'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { IMaskInput } from 'react-imask';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { Title, Button } from '@/shared/ui';
import { useNumberSchema } from '../../model/validation/useNumberSchema';
import { NumberForm } from './types';
import Info from '@/svg/info-circle.svg';
import Ticket from '@/svg/ticket.svg';
import Plus from '@/svg/element-plus.svg';
import Time from '@/svg/timer.svg';
import Flag from '@/svg/ru.svg';
import Chevron from '@/svg/chevron-down.svg';
import styles from './styles.module.scss';

const items = [
  { title: 'Без переплат', suptitle: 'сравниваем цены и условия', Icon: Ticket },
  { title: '20+', suptitle: 'страховых компаний', Icon: Plus },
  {
    title: 'Полис за 5 минут',
    suptitle: 'приходит на email сразу после оплаты',
    Icon: Time,
  },
];

export const Top = () => {
  const { push } = useRouter();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<NumberForm>({
    resolver: zodResolver(useNumberSchema()),
    defaultValues: {
      code: '',
    },
  });

  const onSubmit: SubmitHandler<NumberForm> = async (form) => {
    try {
      push('/kasko');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div>
              <Title type="h1" size="x" weight="bold">
                <span>ОСАГО</span>
                <span className={styles.blue}>онлайн</span>
              </Title>
              <p className={styles.suptitle}>
                Сравните предложения более 20 страховых компаний и оформите электронный
                полис за несколько минут
              </p>
              <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.status}>
                  <span className={styles.gos}>Государственный номер автомобиля</span>
                  <Info width={16} height={16} color="var(--blue)" />
                </div>

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

                  <Button
                    variant="secondary"
                    weight="semibold"
                    size="lg"
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Рассчитать стоимость
                  </Button>
                </div>
                {errors.code && (
                  <p className={clsx(styles.error, 'error')}>{errors.code.message}</p>
                )}
                <button className={styles.without} type="button">
                  Рассчитать без номера
                </button>
              </form>
            </div>

            <Image
              src="/img/hero.png"
              quality={90}
              width={520}
              height={433}
              fetchPriority="high"
              loading="eager"
              alt="Осаго онлайн"
              className={styles.img}
            />
          </div>

          <div className={styles.bottom}>
            {items.map(({ title, suptitle, Icon }) => (
              <div key={title} className={styles.item}>
                <div className={styles.iconWrapper}>
                  <Icon width={20} height={20} />
                </div>
                <div>
                  <Title weight="semibold" size="xm">
                    {title}
                  </Title>
                  <p className={styles.text}>{suptitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

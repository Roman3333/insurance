import { Title } from '@/shared/ui';
import { WhyProps } from './types';
import Plus from '@/svg/element-plus.svg';
import Ticket from '@/svg/ticket.svg';
import Global from '@/svg/global.svg';
import Messages from '@/svg/messages.svg';
import Lock from '@/svg/lock.svg';
import styles from './styles.module.scss';

const items = [
  {
    title: 'Широкий выбор',
    suptitle: 'Предложения от 20+ надежных страховых компаний',
    Icon: Plus,
  },
  {
    title: 'Выгодные цены',
    suptitle: 'Сравнивайте и выбирайте лучшие предложения',
    Icon: Ticket,
  },
  {
    title: 'Онлайн оформление',
    suptitle: 'Без очередей и бумажной волокиты',
    Icon: Global,
  },
  {
    title: 'Поддержка 24/7',
    suptitle: 'Поможем на всех этапах оформления',
    Icon: Messages,
  },
];

export const Why = ({ isMain = true }: WhyProps) => {
  return (
    <section className="section">
      <div className="container">
        {isMain && <Title className={styles.title}>Почему выбирают ВсеСтраховки</Title>}

        <div className={styles.items}>
          {items.map(({ title, suptitle, Icon }) => (
            <div key={title} className={styles.item}>
              <div className={styles.iconWrapper}>
                <Icon width={28} height={28} />
              </div>
              <Title className={styles.itemTitle} type="h3" size="xm">
                {title}
              </Title>
              <p className={styles.suptitle}>{suptitle}</p>
            </div>
          ))}
        </div>

        {!isMain && (
          <div className={styles.bottom}>
            <Lock width={24} height={24} />
            <p className={styles.text}>
              Ваши данные надежно защищены и не передаются третьим лицам
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

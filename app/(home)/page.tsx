import { Metadata } from 'next';
import { Osago } from '@/page/Osago';

export const metadata: Metadata = {
  title: 'ОСАГО | КупиСтраховки',
  description: 'Тестовое описание',
};

const HomePage = () => {
  return <Osago />;
};

export default HomePage;

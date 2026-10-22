import { Metadata } from 'next';
import { Kasko } from '@/page/Kasko';

export const metadata: Metadata = {
  title: 'КАСКО | КупиСтраховки',
  description: 'Тестовое описание',
};

const KaskoPage = () => {
  return <Kasko />;
};

export default KaskoPage;

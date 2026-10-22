import { z } from 'zod';

const RUSSIAN_PLATE_REGEX = /^[АВЕКМНОРСТУХ]\d{3}[АВЕКМНОРСТУХ]{2}\d{2,3}$/;

export const useNumberSchema = () => {
  return z.object({
    code: z
      .string()
      .min(1, 'Введите госномер автомобиля')
      .regex(RUSSIAN_PLATE_REGEX, 'Проверьте формат госномера'),
  });
};

export type NumberForm = z.infer<ReturnType<typeof useNumberSchema>>;

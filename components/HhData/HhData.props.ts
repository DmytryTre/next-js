import { HhData } from '../../interfaces/page.interface';

export interface HhDataProps extends HhData {}

export const SALARY_LEVELS_CONFIG = {
  junior: { title: 'Начальный', stars: 1 },
  middle: { title: 'Средний', stars: 2 },
  senior: { title: 'Профессионал', stars: 3 },
} as const;

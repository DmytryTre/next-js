import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = defineConfig([
  // 1. Подключаем официальные готовые правила Next.js 16 для Flat Config
  ...nextVitals,

  // 2. Добавляем встроенные в сам ESLint правила форматирования
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'semi': ['error', 'always'],
    },
  },

  // 3. Глобальные игнорирования служебных файлов
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  eslintConfigPrettier,
]);

export default eslintConfig;

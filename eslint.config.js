// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  {
    ignores: [
      '**/dist',
      '**/node_modules',
      '**/*.js',
      '**/*.cjs',
      '**/*.mjs',
    ],
  },
  ...tseslint.configs.recommendedTypeChecked,
  eslint.configs.recommended,
  prettier,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // This is a library, so unused vars are common
      'no-unused-vars': 'off',
    },
  },
);

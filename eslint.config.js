import reactPlugin from 'eslint-plugin-react';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist', 'node_modules', 'webpack.config.js']
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      // Подключаем рекомендуемые правила вручную в Flat Config
      ...reactPlugin.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...configPrettier.rules, // Отключает правила, конфликтующие с Prettier

      // Ваши кастомные правила
      'prettier/prettier': ['warn', { usePrettierrc: true }],
      'react/react-in-jsx-scope': 'off',
      'comma-dangle': 'off',
      'use-isnan': ['error', { enforceForSwitchCase: true }],
      'react/void-dom-elements-no-children': 'warn',
      'react/no-unsafe': 'warn',
      'react/no-unused-state': 'warn',
      'react/prefer-stateless-function': 'warn',
      'react/self-closing-comp': 'warn',
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/jsx-key': 'warn',
      'jsx-quotes': ['warn', 'prefer-single'],
      'dot-notation': 'warn',
      'arrow-body-style': ['warn', 'as-needed'],

      '@typescript-eslint/member-ordering': [
        'warn',
        {
          default: [
            'private-static-field',
            'public-static-field',
            'private-instance-field',
            'public-instance-field',
            'private-instance-method',
            'public-instance-method'
          ]
        }
      ]
    }
  }
];

import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    // 基础忽略配置
    {
        ignores: ['node_modules', 'dist', 'public'],
    },

    // ESLint 推荐配置
    pluginJs.configs.recommended,

    // TypeScript 推荐配置
    ...tseslint.configs.recommended,

    // JSX A11Y 配置（适配 Flat 格式）
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            'jsx-a11y': jsxA11y,
        },
        rules: {
            ...jsxA11y.configs.recommended.rules,
            // 自定义规则
            'no-console': 'error',
            '@typescript-eslint/no-explicit-any': 'warn',
            // 允许未使用的变量（临时调试）
            '@typescript-eslint/no-unused-vars': 'warn',
            // 禁用 JSX 作用域校验
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
        },
    },

    // React Hooks 配置
    {
        plugins: {
            'react-hooks': reactHooksPlugin,
        },
        rules: reactHooksPlugin.configs.recommended.rules,
    },

    // 全局和语言选项配置
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                sourceType: 'module',
                project: './tsconfig.json',
            },
        },
    },

    // Prettier 集成（Flat 格式）
    ...eslintConfigPrettier.flat,
    {
        rules: {
            'prettier/prettier': 'error',
        },
    },
];

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "@salesforce/eslint-config-lwc/recommended",
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: "2020", sourceType: "module" },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
module.exports = {
  // Otras configuraciones de ESLint aquí
  rules: {
    // Otras reglas de ESLint aquí
    'no-unused-vars': 'on',
  },
};
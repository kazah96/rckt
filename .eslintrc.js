
const formatLevel = "off";
const qualityLevel = 'error';

module.exports = {
  // Настройки проекта
  env: {
    // Проект для браузера
    browser: true,
    // Включаем возможности ES6
    es6: true,
    // Добавляем возможности ES2017
    es2017: true
  },
  // Наборы правил
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/style',
    'plugin:jest/recommended',
  ],
  // Движок парсинга
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // Движку нужен проект TS для правил с типами
    project: "tsconfig.json",
    tsconfigRootDir: "."
  },
  // Плагин с наборами правил для TypeScript
  // plugins: [
  //   "@typescript-eslint",
  //   "eslint-plugin-react",
  //   "eslint-plugin-node",
  //   "eslint-plugin-jsx-a11y",
  //   "eslint-plugin-jest"
  // ],
  rules: {
    // quality rules
    "max-params": [qualityLevel, 3],
    "no-console": qualityLevel,
    "no-var": "warn",
    "no-restricted-imports": ["warn", "prop-types"],
    "no-dupe-keys": qualityLevel,
    "no-mixed-operators": "warn",
    // TS stuff (disable some recommended rules)
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    // react stuff
    "react/jsx-uses-vars": "warn",
    "react/jsx-uses-react": "warn",
    "react/react-in-jsx-scope": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/no-find-dom-node": "off",
    "react/display-name": "off",
  
    // tests stuff
    "jest/no-export": "off",
    // autofixible 'format' rules
    // js stuff
    quotes: [formatLevel, "single", { allowTemplateLiterals: true }],
    "jsx-quotes": [formatLevel, "prefer-single"],
    "react/jsx-boolean-value": [formatLevel, "always"],
    "quote-props": [formatLevel, "as-needed"],
    "prefer-const": formatLevel,
    "no-multiple-empty-lines": [formatLevel, { max: 1 }],
    "no-multi-spaces": formatLevel,
    "no-trailing-spaces": formatLevel,
    "object-curly-spacing": [formatLevel, "always"],
    "object-shorthand": [formatLevel, "always"],
    "comma-dangle": [formatLevel, "always-multiline"],
    "padded-blocks": [formatLevel, "never"],
    "padding-line-between-statements": [
      formatLevel,
      {
        blankLine: "always",
        prev: "*",
        next: ["multiline-const", "multiline-let"]
      },
      {
        blankLine: "always",
        prev: ["multiline-const", "multiline-let"],
        next: "*"
      },
      {
        blankLine: "always",
        prev: "*",
        next: ["if", "for", "while", "switch", "iife", "do", "throw"]
      },
      {
        blankLine: "always",
        prev: ["if", "for", "while", "switch", "iife", "do", "throw"],
        next: "*"
      },
      { blankLine: "always", prev: "*", next: "export" },
      { blankLine: "always", prev: "*", next: "return" }
    ],
    "space-before-function-paren": [
      formatLevel,
      { anonymous: "never", named: "never", asyncArrow: "always" }
    ],
    "keyword-spacing": formatLevel,
    // TS stuff
    semi: "off",
    "@typescript-eslint/semi": [formatLevel, "never"],
    "@typescript-eslint/member-delimiter-style": [
      formatLevel,
      {
        multiline: {
          delimiter: "none",
          requireLast: false
        },
        singleline: {
          delimiter: "semi",
          requireLast: false
        }
      }
    ],
    // import stuff
    "import/first": formatLevel,
    "import/no-duplicates": formatLevel,
    // tests stuff
    "jest/prefer-to-be-null": formatLevel,
    "jest/prefer-to-be-undefined": formatLevel,
    "jest/prefer-to-contain": formatLevel,
    "jest/prefer-to-have-length": formatLevel,
    "jest-formatting/padding-around-all": formatLevel,
    "@typescript-eslint/no-empty-function": 0
  }
};

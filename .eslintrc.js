module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:vue/essential",
    "standard"
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
    sourceType: "module"
  },
  plugins: [
    "vue",
    "@typescript-eslint"
  ],
  rules: {
    "vue/no-v-model-argument": 0,
    "vue/no-unused-components": 1,
    quotes: 1,
    "vue/no-multiple-template-root": 0,
    "prefer-promise-reject-errors": 0,
    "no-unused-expressions": 0,
    "no-sequences": 0,
    "no-tabs": "off"
  }
};

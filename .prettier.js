/** @type {import("prettier").Config} */
const config = {
  printWidth: 80,
  plugins: [
    "prettier-plugin-tailwindcss",
    "prettier-plugin-classnames",
    "prettier-plugin-merge",
  ],
};

export default config;

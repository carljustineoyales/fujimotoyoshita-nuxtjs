module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: "off",
    semi: "off",
    "arrow-parens": "off",
    "object-shorthand": "off",
    "space-before-function-paren": "off",
    "vue/this-in-template": "off",
    "vue/html-self-closing": "off",
    "vue/no-v-html": "off",
    "dot-notation": "off"
  }
};

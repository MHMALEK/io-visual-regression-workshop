// playwright.config.js
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  use: {
    headless: true,
    baseURL: "http://localhost:3000",
  },
});

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://todo.qacart.com',
    setupNodeEvents(on, config) {
      delete process.env.HTTP_PROXY;
      delete process.env.HTTPS_PROXY;
      return config;
    },
  },

  
  // Force Chrome to not use any proxy
  env: {
    NO_PROXY: '*'
  }
})

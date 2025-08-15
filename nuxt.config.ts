export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
  ],

  supabase: {
    redirectOptions: {
      login: "/auth/login",
      callback: "/auth/confirm",
      exclude: ["/"],
    },
  },
});

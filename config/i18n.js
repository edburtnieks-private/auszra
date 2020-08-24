export default {
  defaultLocale: 'en',
  langDir: 'lang/',
  lazy: true,
  locales: [
    {
      name: 'English',
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
    },
    {
      name: 'Latviešu',
      code: 'lv',
      iso: 'lv-LV',
      file: 'lv-LV.js',
    },
  ],
  seo: false,
  vueI18n: {
    fallbackLocale: 'en',
  },
}

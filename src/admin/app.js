import favicon from './extensions/favicon.ico';
import logo from './extensions/android-chrome-512x512.png';

export default {
  config: {
    head: {
      favicon: favicon
    },
    menu: {
      logo: logo
    },
    auth: {
      logo: logo
    },
    translations: {
      en: {
        'Auth.form.welcome.title': 'Green Latitude',
        'app.components.LeftMenu.navbrand.title': 'Green Latitude',
        'app.components.LeftMenu.navbrand.workplace': 'Strapi Dashboard'
      }
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app) {
    console.log(app);
  },
};

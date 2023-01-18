import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './lang/en.js';
import zhCN from './lang/Zh-CN';
import zhTW from './lang/Zh-TW.js';
import tr from './lang/tr.js';
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale:"zh-CN",
    messages: {
      en,
      'zh-CN': zhCN,
      'zh-TW': zhTW,
      tr,
    },
    silentTranslationWarn: true,
  });
  
  export default i18n;
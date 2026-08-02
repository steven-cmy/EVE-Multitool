import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';
import { enUS, zhCN, dateEnUS, dateZhCN, type NLocale, type NDateLocale } from 'naive-ui';

const uiLocaleMap: Record<string, UILocale> = {
  enUS: { locale: enUS, dateLocale: dateEnUS },
  zhCN: { locale: zhCN, dateLocale: dateZhCN },
  // 若 i18n 还启用了日文/韩文等，按此追加：
  // jaJP: { locale: jaJP, dateLocale: dateJaJP },
};

type UILocale = {
  locale: NLocale;
  dateLocale: NDateLocale;
};

export const useLanguageStore = defineStore('LanguageStore', () => {
  const i18n = useI18n();

  function setLocale(newLocale: string) {
    if (newLocale !== i18n.locale.value) {
      localStorage.setItem('locale', newLocale);
      i18n.locale.value = newLocale;
    }
    const h = document.querySelector('html');
    h?.setAttribute('lang', newLocale);
  }

  const short = (locale: string) => locale.split('-')[0];
  const dense = (locale: string) => locale.replace(/\-/g, '');

  const getLocale = () => i18n.locale.value;
  const getShortLocale = () => short(i18n.locale.value);
  const getDenseLocale = () => dense(i18n.locale.value);
  // const getDateLocale = (loc: string = getDenseLocale()) =>
  //   `date${loc.charAt(0).toUpperCase() + loc.slice(1)}`;

  const availableLocales = () => {
    const { availableLocales } = i18n;
    return availableLocales.map((loc) => ({
      value: loc,
      label: (i18n.messages.value[loc]?.languageName || loc) as string,
    }));
  };

  const getLocaleCodes = () => {
    const { availableLocales } = i18n;
    return availableLocales.map((loc) => dense(loc));
  };

  const getUILocales = () => {
    const { availableLocales } = i18n;
    const locales: Record<string, UILocale> = {};
    availableLocales.forEach((loc) => {
      const key = dense(loc);
      locales[loc] = (uiLocaleMap[key] ?? uiLocaleMap['enUS']) as UILocale;
    });
    return locales;
  };

  return {
    getLocale,
    getShortLocale,
    getDenseLocale,
    setLocale,
    availableLocales,
    getLocaleCodes,
    getUILocales,
    short,
    dense,
  };
});

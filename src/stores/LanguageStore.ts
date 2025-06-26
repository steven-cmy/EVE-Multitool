import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';

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
  const getDateLocale = () => {
    const loc = getDenseLocale();
    return `date${loc.charAt(0).toUpperCase() + loc.slice(1)}`;
  };

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

  const getUILocales = async () => {
    const naiveUI = await import('naive-ui');
    return {
      locale: naiveUI[getDenseLocale() as keyof typeof naiveUI],
      dateLocale: naiveUI[getDateLocale() as keyof typeof naiveUI],
    };
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

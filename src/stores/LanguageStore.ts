import { defineStore } from 'pinia';
import { useI18n } from 'vue-i18n';

export const useLanguageStore = defineStore('LanguageStore', () => {
  const i18n = useI18n();

  function setLocale(newLocale: string) {
    localStorage.setItem('locale', newLocale);
    i18n.locale.value = newLocale;
  }

  const getLocale = () => i18n.locale.value;

  const availableLocales = () => {
    const { availableLocales } = i18n;
    return availableLocales.map((loc) => ({
      value: loc,
      label: (i18n.messages.value[loc]?.languageName || loc) as string,
    }));
  };

  return { getLocale, setLocale, availableLocales };
});

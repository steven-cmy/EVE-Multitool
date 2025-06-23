import { createI18n, type LocaleMessages, type VueMessageType } from 'vue-i18n';

// Dynamically import all JSON files from locales directory
const messages: Record<string, LocaleMessages<VueMessageType>> = {};

// Get all locale files
const localeFiles: Record<string, { default: LocaleMessages<VueMessageType> }> = import.meta.glob(
  './*.json',
  { eager: true },
);

// Process the imported files
Object.entries(localeFiles).forEach(([key, value]) => {
  // Extract language code from file path
  // '../locales/en.json' -> 'en'
  const lang = key.replace('./', '').replace('.json', '');
  messages[lang] = value.default;
});

export const getLocale = () => {
  const browserLocale = navigator.language.split('-')[0];
  return (
    localStorage.getItem('locale') || (browserLocale in messages ? browserLocale : null) || 'en'
  );
};

const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: getLocale(), // Default locale from browser
  fallbackLocale: 'en', // Fallback locale
  messages,
  globalInjection: true, // Enable global $t
});

export default i18n;

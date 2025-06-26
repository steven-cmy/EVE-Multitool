import { createI18n, type LocaleMessages, type VueMessageType } from 'vue-i18n';

const DEFAULT_LOCALE = 'en-US';

// Dynamically import all JSON files from locales directory
const messages: Record<string, LocaleMessages<VueMessageType>> = {};

// Get all locale files
const localeFiles: Record<string, { default: LocaleMessages<VueMessageType> }> = import.meta.glob(
  './*.json',
  { eager: true },
);
const short = (locale: string) => locale.split('-')[0];

// Process the imported files
Object.entries(localeFiles).forEach(async ([key, value]) => {
  // Extract language code from file path
  // '../locales/en.json' -> 'en'
  const lang = key.replace('./', '').replace('.json', '');
  messages[lang] = value.default;
});

const getLocale = () =>
  localStorage.getItem('locale') ||
  (short(navigator.language) in messages ? navigator.language : DEFAULT_LOCALE);

const i18n = createI18n({
  legacy: false,
  locale: getLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages,
  globalInjection: true,
});

export default i18n;

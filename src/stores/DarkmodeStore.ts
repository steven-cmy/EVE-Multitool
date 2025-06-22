import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useDarkmodeStore = defineStore('DarkmodeStore', () => {
  const BrowserDarkmode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const PreferedMode = ref(sessionStorage.getItem('theme'));

  const Theme = computed(() => PreferedMode.value ?? (BrowserDarkmode.value ? 'dark' : 'light'));

  const isDarkmode = (theme: string = Theme.value) => theme === 'dark';

  function toggleDarkmode() {
    const targetTheme = isDarkmode() ? 'light' : 'dark';
    sessionStorage.setItem('theme', targetTheme);
    PreferedMode.value = targetTheme;
  }

  function setMode(mode: 'light' | 'dark') {
    sessionStorage.setItem('theme', mode);
    PreferedMode.value = mode;
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    setMode(e.matches ? 'dark' : 'light');
  });
  return { Theme, isDarkmode, toggleDarkmode, setMode };
});

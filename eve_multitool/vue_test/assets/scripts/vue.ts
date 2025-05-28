import { createApp, ref } from "vue";

createApp({
  setup() {
    const count = ref(0);

    function increment() {
      count.value++;
      console.log(count.value);
    }

    return {
      count,
      increment,
    };
  },
}).mount("#app");

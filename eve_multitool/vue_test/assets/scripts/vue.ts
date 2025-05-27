import { createApp } from "vue";
console.log("Importing Vue...");
createApp({
  data() {
    return {
      message: "Hello, Vue!",
    };
  },
}).mount("#app");
console.log("Vue app initialized");

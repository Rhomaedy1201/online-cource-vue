<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  mounted() {
    const script = document.createElement("script");
    script.src = "/compiled/js/app.js";
    script.async = true;
    document.body.appendChild(script);
  },
};
</script>

<template>
  <RouterView />
</template>
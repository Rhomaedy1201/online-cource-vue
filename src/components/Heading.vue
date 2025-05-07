<template>
  <div class="page-heading">
    <h3>{{ title }}</h3>
    <p class="text-subtitle text-muted">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: "",
    },
  },
};
</script>
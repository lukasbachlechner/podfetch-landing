<template>
  <div class="container">
    <nuxt-content :document="legal" />
  </div>
</template>

<script>
export default {
  data: () => ({
    legal: null,
    privacy: null,
  }),
  async fetch() {
    this.legal = await this.$content('pages', 'legal-disclosure').fetch();
  },
};
</script>

<style></style>

<template>
  <div class="container">
    <nuxt-content :document="legal" />
    <nuxt-content :document="privacy" />
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
    this.privacy = await this.$content('pages', 'privacy-policy').fetch();
  },
};
</script>

<style></style>

<template>
  <div class="container">
    <section>
      <nuxt-content :document="legal" />
    </section>
    <section class="mt-16">
      <nuxt-content :document="privacy" />
    </section>
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
  head: {
    title: 'Legal',
    meta: [
      {
        hid: 'robots',
        name: 'robots',
        content: 'noindex nofollow',
      },
    ],
  },
};
</script>

<style></style>

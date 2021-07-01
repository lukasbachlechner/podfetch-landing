<template>
  <section class="section container">
    <h2 class="h2">Get a Glimpse</h2>
    <ul class="podcasts__list">
      <podcast-item
        class="podcasts__item"
        v-for="podcast in podcasts"
        :key="podcast.id"
        :podcast="podcast"
      />
    </ul>
  </section>
</template>

<script>
export default {
  data: () => ({
    podcasts: [],
  }),
  async fetch() {
    try {
      this.podcasts = await this.$api.getTrending({
        max: 12,
        lang: 'en',
        cat: 'news, true crime, daily',
      });
    } catch (e) {
      console.error(e.message);
    }
  },
};
</script>

<style scoped>
.podcasts__list {
  @apply grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4;
}
</style>

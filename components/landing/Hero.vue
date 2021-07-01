<template>
  <section class="hero__section">
    <div class="hero__container">
      <div class="lg:w-1/2">
        <h2 class="hero__title">
          Listen to
          <span class="hero__underline">{{ podcastCount }}</span> podcasts –
          anytime, anywhere.
        </h2>
        <p class="hero__subtitle">
          You know what they say: there's always time for podcasts. With
          Podfetch, tune in anytime – even when offline.
        </p>
        <ui-button tag="a" :href="`${$config.listenUrl}`"
          >Start Listening</ui-button
        >
      </div>

      <img src="~/assets/iphones.png" alt="" class="hero__mockup" />
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    podcastCount: 0,
    episodeCount: 0,
  }),
  async fetch() {
    try {
      const { feedCountTotal, episodeCountTotal } = await this.$api.getStats();
      this.podcastCount = this.$formatter.number(feedCountTotal);
      this.episodeCount = this.$formatter.number(episodeCountTotal);
    } catch (e) {
      console.log(e.message);
    }
  },
};
</script>

<style scoped>
.hero__section {
  @apply flex items-center mb-32;
}

.hero__container {
  @apply container flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-8;
}

.hero__underline {
  @apply font-bold bg-gradient-to-tr from-accent to-accent-middle bg-clip-text text-transparent;
}

.hero__title {
  @apply md:leading-snug text-3xl md:text-5xl font-medium mb-8;
}

.hero__subtitle {
  @apply md:leading-snug text-base md:text-2xl  mb-8;
}

.hero__mockup {
  @apply w-2/3 lg:w-1/4;
}
</style>

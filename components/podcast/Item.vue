<template>
  <a :href="generateListenUrl(podcast)" class="podcast__item">
    <div v-show="!loaded" class="image__skeleton"></div>
    <img
      class="podcasts__image"
      :src="podcast.image"
      :alt="podcast.title"
      v-show="loaded"
      @load="handleImageLoad"
    />
  </a>
</template>

<script>
export default {
  props: {
    podcast: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    loaded: false,
  }),
  methods: {
    handleImageLoad() {
      this.loaded = true;
    },

    generateListenUrl(podcast) {
      const listenUrl = this.$config.listenUrl;
      return `${listenUrl}podcast/${podcast.titleSlug}/${podcast.id}`;
    },
  },
};
</script>

<style scoped>
.image__skeleton {
  @apply w-full h-full bg-haiti-middle animate-pulse;
}

.podcasts__item {
  @apply w-full h-full aspect-w-1 aspect-h-1 overflow-hidden;
}

.podcasts__image {
  @apply w-full h-full object-cover;
}

.podcasts__item:hover .podcasts__image {
  @apply transform scale-105 transition-transform;
}
</style>

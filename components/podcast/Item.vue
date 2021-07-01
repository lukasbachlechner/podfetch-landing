<template>
  <li>
    <div v-show="!loaded" class="image__skeleton"></div>
    <a :href="generateListenUrl(podcast)" class="podcast__item">
      <img
        class="podcasts__image"
        :src="imageUrl"
        :alt="podcast.title"
        loading="lazy"
        width="300"
        height="300"
        @load="handleImageLoad"
      />
    </a>
  </li>
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

  computed: {
    imageUrl() {
      const { apiUrl } = this.$config;
      const encodedSrc = encodeURIComponent(this.podcast.image);
      return `${apiUrl}images/300/${encodedSrc}`;
    },
  },
  methods: {
    handleImageLoad() {
      this.loaded = true;
    },

    generateListenUrl(podcast) {
      const { listenUrl } = this.$config;
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

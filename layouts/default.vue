<template>
  <div class="min-h-screen">
    <site-header />
    <main>
      <Nuxt />
    </main>
    <site-footer />
  </div>
</template>

<style>
/**
using the deep selector (>>>, vue-specific) together with scoped styles here
so that these styles only affect children of the current layout
https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors
 */

.h2::after {
  @apply h-1 w-12 block absolute -bottom-4 bg-accent left-1/2 -ml-6;
  content: '';
}

.h2,
.nuxt-content h2 {
  @apply text-3xl md:text-4xl text-center font-bold mb-12 relative;
}

.nuxt-content a {
  @apply underline;
}

.nuxt-content h2 {
  @apply text-left mb-8;
}

.nuxt-content p {
  @apply mb-4 break-words;
}

.nuxt-content ul {
  @apply list-inside list-disc my-4;
}

.section {
  @apply mt-24 mb-48;
}

main {
  @apply my-32;
}
</style>

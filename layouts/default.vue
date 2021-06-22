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
.h2 {
  @apply text-3xl md:text-4xl text-center font-bold;
}

.section {
  @apply mt-24 mb-48;
}
</style>

<template>
  <header class="bg-haiti py-4 fixed left-0 right-0 top-0 z-50">
    <div class="container flex items-center justify-between">
      <nuxt-link to="/">
        <h1>
          <span class="sr-only">Podfetch</span>
          <logomark />
        </h1>
      </nuxt-link>

      <ui-button tag="a" :href="`${$config.listenUrl}login`">Login</ui-button>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.nav__wrapper {
}

.nav__list {
  @apply flex gap-8 items-center justify-end;
}
</style>

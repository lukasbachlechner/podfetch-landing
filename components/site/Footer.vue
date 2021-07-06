<template>
  <footer class="footer__wrapper">
    <div class="footer__content">
      <nuxt-link to="/legal" rel="nofollow noindex">Legal</nuxt-link>

      <p>&copy; {{ new Date().getFullYear() }} Podfetch</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer__wrapper {
  @apply bg-haiti-middle;
}

.footer__content {
  @apply container flex flex-col gap-8 p-16 items-center;
}
</style>

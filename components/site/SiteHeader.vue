<template>
  <header class="bg-haiti-middle py-4 fixed left-0 right-0 top-0">
    <div class="container flex justify-between items-center">
      <h1>
        <logomark />
      </h1>

      <div class="flex gap-4">
        <ui-button type="link" tag="nuxt-link" to="/login">Login</ui-button>
        <ui-button tag="nuxt-link" to="/signup">Sign up</ui-button>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped></style>

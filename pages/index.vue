<template>
  <div>
    <landing-hero />
    <landing-features />
    <landing-glimpse />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Home',
      script: [
        {
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
          defer: true,
        },
      ],
    };
  },
};
</script>

<style></style>

<template>
  <div v-html="iconLink" class="icon__container"></div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: 'earbuds',
    },
    size: {
      type: String,
      required: false,
      default: '20',
    },
  },
  computed: {
    iconLink() {
      return require(`~/assets/icons/${this.name}.svg?raw`);
    },
  },
};
</script>

<style scoped></style>

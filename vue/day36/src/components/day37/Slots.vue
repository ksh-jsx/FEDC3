<template>
  <h1>hello</h1>
  <slot></slot>
  <slot name="abc"></slot>
  <slot name="xyz"></slot>
  <slot :hello="123"></slot>
  <slot name="abc2"></slot>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>

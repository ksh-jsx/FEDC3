<template>
  <div>
    <h1>{{ id }} / {{ title }} / {{ email }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    email: {
      type: String,
      default: "abc@abs.com",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

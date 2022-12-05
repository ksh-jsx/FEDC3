<template>
  <div>
    <h1 @click="updateMessage">{{ newMessage }}</h1>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    name: [String, Number],
  },
  data() {
    return {
      newMessage: this.message,
    };
  },
  methods: {
    updateMessage() {
      this.newMessage = "Goods!";
    },
  },
};
</script>

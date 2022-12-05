<template>
  <div>
    <button @click="reverseMsg">Click!</button>
    <Hello :message="msg" name="hello" />
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: "Hello Vue!",
    };
  },
  methods: {
    reverseMsg() {
      this.msg = this.msg.split("").reverse().join("");
    },
  },
};
</script>

<style scoped>
h1 {
  background: red;
  color: #fff;
}
</style>

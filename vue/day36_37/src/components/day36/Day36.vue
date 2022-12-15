<template>
  <div>
    <p>메인텍스트: {{ msg }}</p>
    <button @click="reverseMsg">Click!</button>
    <Hello :message="msg" name="hello" />
    <hr />
    <Hello2 v-bind="post" />
    <hr />
    <Hello3 class="hello" style="color: orange" @click="msg += '!'" />
    <hr />
    <CustomEvent @please="msg += '~~'" @click="msg += '!?'" v-model:message="msg" />
  </div>
</template>

<script>
import Hello from "./Hello.vue";
import Hello2 from "./Hello2.vue";
import Hello3 from "./Hello3.vue";
import CustomEvent from "./CustomEvent.vue";

export default {
  components: {
    Hello,
    Hello2,
    Hello3,
    CustomEvent,
  },
  data() {
    return {
      msg: "Hello Vue!",
      post: {
        id: 1,
        title: "Hello Vue!",
      },
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

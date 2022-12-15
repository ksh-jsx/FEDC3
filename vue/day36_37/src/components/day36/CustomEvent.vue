<template>
  <div>
    <h1 @click="$emit('please', 1)">please</h1>
    <h1 @click="$emit('click')">click</h1>
    <label>
      <input :value="message" @input="$emit('update:message', $event.target.value)" />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
  },
  emits: {
    click: null,
    please: (num) => {
      if (num > 10) {
        return true;
      } else {
        console.log("숫자가 작아요");
        return false;
      }
    },
    "update:message": null,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

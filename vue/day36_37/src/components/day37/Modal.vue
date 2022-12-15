<!-- prettier-ignore -->
<template>
  <div @click="onModal">
    <slot name="activator"></slot>
  </div>
  
  <teleport to="body">
    <template v-if="modelValue">
      <div 
        class="modal" 
        @click="offModal">
        <div           
          class="modal__inner" 
          @click.stop>
          <slot></slot>
        </div>
      </div>
    </template>
  </teleport>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onModal() {
      this.$emit("update:modelValue", true);
    },
    offModal() {
      this.$emit("update:modelValue", false);
    },
  },
  emits: ["update:modelValue"],
  watch: {
    modelValue(newValue) {
      if (newValue) {
        window.addEventListener("keyup", this.keyupHandler);
      } else {
        window.removeEventListener("keyup", this.keyupHandler);
      }
    },
  },
  methods: {
    keyupHandler(e) {
      if (e.key === "Escape") {
        this.offModal();
      }
    },
  },
};
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal__inner {
  background: #fff;
  padding: 20px;
}
</style>

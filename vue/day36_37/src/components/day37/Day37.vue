<template>
  <div>
    <h1>msg: {{ msg }}</h1>
    <h1>count: {{ count }}</h1>
    <Slots>
      <template #abc>
        <h2>ABC</h2>
      </template>

      <template #xyz>
        <h2>xyz</h2>
      </template>

      <template #default="{ hello }">
        <h2>디폴트 {{ hello }}</h2>
      </template>
    </Slots>

    <hr />

    <button @click="changeComponent($event)">hello</button>
    <button @click="changeComponent($event)">world</button>
    <!--이걸 사용하면 말그대로 컴포넌트가 유지되어 변경될때마다 다시 생성하지 않아서 효율 좋게 만듬-->
    <keep-alive>
      <component :is="currentComponent" />
    </keep-alive>

    <hr />

    <Ref ref="refParent" />

    <div v-if="!isEdit">
      {{ msg }}
      <button @click="onEdit">Edit!</button>
    </div>
    <div v-else>
      <input v-model="msg" type="text" @keyup.enter="isEdit = false" ref="editor" />
    </div>

    <hr />

    <h1>설문조사</h1>
    <component
      v-for="field in fields"
      v-model="field.value"
      :is="field.components"
      :key="'component-' + field.title"
      :title="field.title"
      :items="field.items"
    />
    <h1>결과</h1>
    <div v-for="field in fields" :key="'component-' + field.title">
      {{ field.value }}
    </div>

    <hr />

    <Modal v-model="isShow">
      <template #activator>
        <button>On Modal!</button>
      </template>
      <h2>App.vue</h2>
    </Modal>
  </div>
</template>

<script>
import Slots from "./Slots.vue";
import DC_hello from "./DC_hello.vue";
import DC_world from "./DC_world.vue";
import Ref from "./Ref.vue";
import Modal from "./Modal.vue";
import sampleMixin from "../../mixins/sample.js";
import * as fieldComponents from "../fields/index.js";

export default {
  components: {
    Slots,
    DC_world,
    DC_hello,
    Ref,
    Modal,
    ...fieldComponents,
  },
  mixins: [sampleMixin],
  data() {
    return {
      msg: "hello vue~",
      isShow: false,
      currentComponent: "DC_hello",
      isEdit: false,
      fields: [
        {
          components: "TextField",
          title: "이름",
          value: "",
        },
        {
          components: "SimpleRadio",
          title: "나이대",
          value: "",
          items: ["20대", "30대", "40대", "50대"],
        },
      ],
    };
  },
  methods: {
    changeComponent(e) {
      this.currentComponent = "DC_" + e.target.innerText;
    },
    onEdit() {
      this.isEdit = true;
      this.$nextTick(() => {
        this.$refs.editor.focus();
      });
    },
    async init() {
      const res = await this.$fetch("https://jsonplaceholder.typicode.com/todos/1");
      console.log(res);
    },
  },
  mounted() {
    console.log(this.$refs.refParent.$refs.helloRef);
  },
  created() {
    this.init();
  },
};
</script>

<style scoped></style>

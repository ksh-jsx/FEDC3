<template>
  <div>
    <h3>{{ title }}</h3>
    <!-- prettier-ignore -->
    <ul>
      <li 
        v-for="item in items" 
        :key="item">
        <label>
          <input
            type="radio"
            :value="item"
            :name="title"
            @input="$emit('update:modelValue', $event.target.value)"
          />
          {{ item }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import fieldMixin from "./mixin.js";

export default {
  mixins: [fieldMixin],
};
</script>

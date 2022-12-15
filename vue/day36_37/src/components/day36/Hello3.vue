<template>
  <!--최상위가 여러개이면 prop가 정상적으로 적용이 안되는데 다음과 같이 지정해주면 적용 됨-->
  <div>
    <h1 :class="$attrs.class" :style="$attrs.style">Hello</h1>
    <h2 @click="$attrs.onClick">Haha ?!</h2>
    <h2 v-bind="$attrs">Haha2</h2>
  </div>
</template>

<script>
export default {
  //이걸통해 최상위에 자동상속 막음
  inheritAttrs: false,
  //이렇게 props로 뽑으면 $attrs에서 그 요소는 사라짐
  props: {
    style: Object,
  },
  mounted() {
    //console.log(this.$attrs);
  },
};
</script>

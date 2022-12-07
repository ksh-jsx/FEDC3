<template>
  <h1 ref="helloRef">aaa</h1>
</template>

<script>
export default {
  mounted() {
    const h1E1 = this.$refs.helloRef;
    //document.querySelector를 사용하면 문서 전체에서 검색을 하니까 효율 안좋으
    console.log(h1E1);
  },
};
</script>

<style scoped></style>

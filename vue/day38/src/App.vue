<script setup></script>

<template>
  <RouterLink to="/">HOME</RouterLink><br />
  <RouterLink to="/about">ABOUT</RouterLink><br />
  <RouterLink :to="{ name: 'docsid', params: { id: '7777' } }">DOCSID</RouterLink><br />
  <button @click="$router.push({ name: 'home' })">gotoHome2</button><br />
  <button @click="$router.push('/about')">gotoAbout2</button><br />
  <RouterView />
</template>

<style scoped></style>

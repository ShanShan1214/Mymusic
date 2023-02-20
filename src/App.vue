<template>
  <div id="app">
    <nav-header></nav-header>
    <footer-play></footer-play>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    NavHeader: () => import("./components/NavHeader.vue"),
    FooterPlay: () => import("./components/FooterPlay.vue"),
  },
};
</script>
<style>
</style>

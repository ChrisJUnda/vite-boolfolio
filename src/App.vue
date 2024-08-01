<script>

import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
// import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  
  components: {
    AppHeader,
    AppFooter

  },
  
};

</script>

<template>
  <AppHeader></AppHeader>

<main>
  <div class="container py-3">
    <router-view></router-view>
  </div>
</main>
  
  
  <AppFooter></AppFooter>


</template>

<style lang="scss" scoped></style>

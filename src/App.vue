<script>

import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
// import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  data() {
    return {
      title: 'Posts',
      posts: [],
    };
  },
  components: {
    AppHeader,
    AppFooter

  },
  methods: {
    testLifeCycle() {
      console.log('prova ciclo di vita di vue');
    },
    getPosts() {
      const result = axios
      .get('http://127.0.0.1:8000/api/posts')
      .then((response) => {

        console.log(response.data.results.data);
        this.posts = response.data.results.data;


        console.log(response);

  
      })
      // console.log(result);
      .catch((error) => console.log(error));
  }
},
created() {
  this.testLifeCycle();
  this.getPosts();
},
};

</script>

<template>
  <AppHeader></AppHeader>


  <router-view></router-view>
  
  <AppFooter></AppFooter>


</template>

<style lang="scss" scoped></style>

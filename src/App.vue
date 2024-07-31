<script>

import axios from 'axios';

export default {
  name: 'Posts',
  data() {
    return {
      title: 'Posts',
    };
  },
  methods: {
    testLifeCycle() {
      console.log('prova ciclo di vita di vue');
    },
    getPosts() {
      const result = axios.get('http://127.0.0.1:8000/api/posts').then((response) => {
        console.log(response);

        if (response.data.status && response.data.results.length) {
          console.log('gestisco i risultati dela riposta');
          console.log(response.data.results);
        } else {
          console.log('qualcosa è andato storto');
        }
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
  <header>
    <div class="container">
      Header
    </div>

  </header>
  <main>
    <div class="container text-center">
      <h1>
        {{ title }}
      </h1>
    </div>
  </main>
  <footer>
    <div class="container">
      Footer

    </div>

  </footer>


</template>

<style lang="scss" scoped></style>

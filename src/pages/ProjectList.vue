<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'ProjectList',
    components: {
        ProjectCard
    },
    data(){
        return {
            api: {
                baseUrl: 'http://localhost:8000/api/',
                endPoints: {
                    'postList': 'posts',
                },
            },
            response: {},
        }
    },
    methods: {
    getPosts() {

        const url = this.api.baseUrl + this.api.endPoints.postList;




      axios
      .get(url)
      .then((response) => {

        // console.log(response.data.results.data);

        this.response = response.data;


        // this.posts = response.data.results.data;


        console.log(response);

  
      })
      // console.log(result);
      .catch((error) => console.log(error));
  }
},
created() {
  this.getPosts();
},
}
</script>

<template>
    <h1>
        Project List
    </h1>
    <div class="row">
        <div class="col-4 col-md-3 col-lg-2 g-3" v-for=" post in response.results.data">
            <ProjectCard :title= "post.title" :slug="post.slug" :content="post.content"/>
            
        </div>
    </div>

</template>
<style>
</style>
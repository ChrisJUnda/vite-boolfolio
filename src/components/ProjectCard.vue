<script>
export default {
    name: 'ProjectCard',
    props:['content', 'slug', 'title']
}
</script>

<template>
    <div class="card">
                <div class="card-body">
                    <h5 class="card-title">
                        {{title}}
                    </h5>
                    <p class="card-text">
                        {{ content }}
                    </p>

                    <router-link :to="{name:'detail', params: { slug: slug}}"> Dettaglio</router-link>


                    <!-- <a href="/blog/{{ slug }}" class="btn btn-primary">
                        Mostra di più
                    </a> -->
                </div>
            </div>
   
        


</template>
<style>
</style>
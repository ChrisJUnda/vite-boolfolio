<script>
export default {
    name: 'Header'
}
</script>

<template>
    <header class="">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
           <router-link :to="{name:'home'}" class="nav-link active" aria-current="page">
            Home
           </router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="#">Blog</a> -->
          <router-link :to="{name:'projects'}" class="nav-link" >
           Projects
           </router-link>
        </li>
        <li class="nav-item">
          <!-- <a class="nav-link" href="#">About</a> -->
          <router-link :to="{name:'posts'}" class="nav-link">
           About
           </router-link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-primary" type="button">Subscribe</button>
        
      </form>
    </div>
  </div>
</nav>
        
    </header>

</template>
<style>
</style>
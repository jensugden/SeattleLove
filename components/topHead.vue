<template>
  <div>
    <div id="nav">
      <b-navbar toggleable="sm" class="bg-info p-5">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand class="name-brand" to="/">Seattle Loves</b-navbar-brand>

      <!-- <nav class="navbar navbar-expand-lg navbar-light bg-info p-5"> -->
        <!-- <h1 class="name-brand">ArtSearch</h1> -->
          <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> -->
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <nuxt-link class="nav-item nav-link" to="/food">Food<span class="sr-only">(current)</span></nuxt-link>
            <nuxt-link class="nav-item nav-link" to="/hiking">Hikes</nuxt-link>
            <nuxt-link class="nav-item nav-link" to="/attractions">Attractions</nuxt-link>
            <nuxt-link class="nav-item nav-link" to="/About">About</nuxt-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<template>
  <div>
    <div class="mt-5 mb-5">
      <h1>We Love Seattle!</h1>
      <p class="lead pl-5 pr-5">Come with us as we explore the beauty of our city, Seattle!
        "Seattle Loves" was created as a portfolio piece for my front-end web development course through the University of Washington.
        The images on this site are provided through the unSplash.com API.</p>
      <p>Click on the photo label to learn more about the photo and photographer. Link will take you to Unsplash.com</p>
      <h4 class="pt-3">Check Out Our Beautiful City Below!</h4>
    </div>
    <section>
      <div class="container-fluid" v-for="photo in photos" :key="photo.id" :photo="photo">
        <div class="label col-md-auto">
            <img :src="photo.urls.regular" :alt="photo.alt_description"/>
            <div class="top-right">
              <a :href="photo.links.html">{{ photo.user.name }}</a>
            </div>
            <!-- <a class="pb-3" :href="photo.links.html">{{ photo.user.first_name }} {{ photo.user.last_name }}</a> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import axios from 'axios'

export default {
  data () {
    return {
      loading: true,
      photos: [],
      errored: false
    }
  },
  mounted () {
    axios.get('https://api.unsplash.com/search/photos/?client_id=t0h1DkcGnN1lh2DgD5fUKS_KQc1hXln8SCBcQWmqPbk&query=seattle-city')
    // .then(response => (console.log(response)))
    .then(response => (this.photos = response.data.results))
    .catch(error => {
      console.log(error)
      this.errored = true
    })
    .finally(() => this.loading = false)
  },
}
</script>

<style scoped>

a {
  text-decoration: none;
  color: white;
}

img {
  max-width: 100%;
}

.label{
  position: relative;
  text-align: center;
  color: white;
}

.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
  background-color: rgb(0,0,0, 0.25);
  padding: 1rem;
}

</style>

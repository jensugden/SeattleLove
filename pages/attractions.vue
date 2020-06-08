<template>
  <div >
    <h1 class="display-5 mt-3" >SEATTLE ATTRACTIONS</h1>
    <p class="lead">Attractions are not just for tourists. Locals and tourists alike will find plenty of attractions in the Emerald city.</p>
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
import axios from 'axios'

export default {
  name: 'app',

  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Rediscover your city and be entertained like a tourist. These attractions are sure to make you feel like a kid again.' }
      ]
    }
  },

  data() {
    return {
      loading: true,
      photos: null,
      errored: false
    }
  },

  mounted () {
    axios.get('https://api.unsplash.com/search/photos/?client_id=t0h1DkcGnN1lh2DgD5fUKS_KQc1hXln8SCBcQWmqPbk&query=seattle-attractions')
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

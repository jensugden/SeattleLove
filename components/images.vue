<template>
  <div >
    <h1 class="display-5 mt-3" >{{ message | to-uppercase }}</h1>
    <p class="lead">Attractions are not just for tourists. Locals and tourists alike will find plenty of attractions in the Emerald city.</p>
    <section class="container">
      <div class="card">
        <!-- <img :src="photo.urls.regular" :alt="photo.alt_description"/>
        <h5>{{ photo.alt_description }}</h5>
        <p >{{ photo.user.first_name }} {{ photo.user.last_name }}</p>
        <a class="pb-3" :href="photo.links.html">Unsplash.com</a> -->
      </div>
    </section>
  </div>
</template>

<script>
import toggleMixin from '~/mixins/toggleMixin'
import uppercaseMixin from '~/mixins/uppercaseMixin'

export default {
  name: 'images',
  props: {
    photo: Object
  },
  data(){
    return {
      message: 'Seattle Attractions'
    }
  },
  mixins: [toggleMixin, uppercaseMixin],

  mounted () {
    console.log(this.photo)
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

img {
  height: 300px;
  margin: .25rem;
}

.gray {
  border: 2px solid gray;
}

.blue {
  border: 2px solid blue;
}

/* .color {
  border: 2px solid gray;
} */
</style>

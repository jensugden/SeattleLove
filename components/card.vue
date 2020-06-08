<template>
  <article>
    <div  class="container">
      <div class="card">
      <!-- <a :href="photo.links.html">
        <img :src="photo.data.urls.regular" :alt="photo.data.alt_description"/>
      </a> -->
      <!-- <h5>{{ photo.description }}</h5>
      <p >{{ photo.user.name }}</p>
      <p>{{ photo.location.name }}</p> -->
    </div>
    </div>
  </article>
</template>


<script>
import uppercaseMixin from '~/mixins/uppercaseMixin'

export default {
  name: 'card',
  props: {
    photo: Object
  },
  data (){
    return {
      message: 'Photo of the Day'
    }
  }
}
</script>

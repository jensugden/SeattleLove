<template>
  <div >
    <section >
      <div class="container">
        <a :href="photo.data.links.html" class="card">
          <img :src="photo.data.urls.small" :alt="photo.data.alt_description"/>
        </a>
      </div>
        <!-- <h5>{{ photo.description }}</h5>
        <p >{{ photo.user.name }}</p> -->
    </section>
  </div>
</template>


<script>
export default {
  name: 'runner',
  props: {
    photo: Array
  }
}
</script>

<style scoped>
img {
  /* display: block; */
  width: 100%;
  /* margin-bottom: 1rem; */
}

.card {
  width: 250px;
  /* margin: 1rem; */
  /* border: 1px solid #000; */
  /* padding: 1.5rem; */
}

.container {
  /* min-height: 100vh; */
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  /* text-align: center; */
}

/* .links {
  padding-top: 15px;
} */
</style>

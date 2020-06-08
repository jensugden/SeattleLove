<template>
  <div>
    <h1 class="display-5 mt-3" >ABOUT</h1>
    <h2>Seattle Loves Inspiring</h2>
    <p class="lead pl-5 pr-5">We love to inspire people to get out and explore Seattle, or wherever you may find yourself.
      Be brave and try that thing you've never tried; eat that food you've never eaten; and talk to that neighbor you've never spoken with.
      Let us know how we have inspired you. Share our website on your Facebook or Twitter account and let your friends know how you've been inspired.</p>
    <register>
      <div class="background" slot="form-header">
        <h3>Sign-Up For Our Newsletter</h3>
        <p>For monthly inspiration, sign-up for our newsletter. We promise we won't inundate your inbox!</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required/>
        <input type="email" placeholder="email" required/>
      </div>
      <div slot="form-controls">
        <button class="mb-5 btn-lg btn-warning" type="submit" >Submit</button>
      </div>

    </register>

    <likeUs/>
  </div>
</template>

<script>
import likeUs from '~/components/like-us.vue'
import register from '~/components/register.vue'

export default {
  name: 'app',
  components: {
    likeUs, register
  },
  head () {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'Sign up for our monthly newsletter and share our website on social media.' }
      ]
    }
  }
}
</script>

<style scope>
input {
  border-radius: 5px;
  margin: 15px;
  width: 300px;
}

.background {
  background-color: rgba(0, 0, 0, 0.10);
  padding: 1.5rem;
  margin: 2rem;
}

</style>

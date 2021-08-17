<template>
  <div>
    <img class="thumbnail" width="300" height="200" v-for="image in allImages" v-bind:key="image.id" :src="image.link" :alt="image.name"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(['allImages']),
  methods: mapActions(['fetchImages']),
  created() {
    this.fetchImages();
  }
}
</script>
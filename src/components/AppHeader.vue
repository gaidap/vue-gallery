<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Vue Gallery</a>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <a class="ui item">Galleries</a>
        <a class="ui item">Upload</a>
        <a class="ui item" @click="logout">Logout</a>
      </div>
      <div v-else><a href="#" class="ui item" @click="login">Login</a></div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "AppHeader",
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login', 'logout'])
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
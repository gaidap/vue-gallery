<template>
  <div class="ui secondary pointing menu">
    <a href="/" class="active item">Vue Gallery</a>
    <div class="right menu">
      <div v-if="isLoggedIn"><a href="#" class="ui item" @click="logout">logout</a></div>
      <div v-else><a href="#" class="ui item" @click="login">login</a></div>
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

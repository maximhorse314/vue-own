<template>
  <div class="navbar navbar-light">
    <div class="container">
      <router-link :to="{ name: 'Home' }">
        Conduit
      </router-link>
      <router-link :to="{ name: 'Home' }">
        Home
      </router-link>
      <router-link :to="{ name: 'Login' }">
        Login
      </router-link>
      <router-link :to="{ name: 'Signup' }">
        Signup
      </router-link>
    </div>
    <div v-if="isAuthenticated">
      <h1>{{ currentUser.username }}</h1>
    </div>
    <div v-else>
      <h1>You are not authenticated</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  }
};
</script>

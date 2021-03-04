<template>
  <div id="nav" class="d-flex" style="justify-content: space-between">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/todos">Todos</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- <div>
      <template v-if="user?.loggedIn">
        <div class="nav-item">{{ user.data.displayName }}</div>
        |
        <router-link @click.prevent="signOut">Login</router-link>
      </template>
      <template v-else>
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link>
      </template>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
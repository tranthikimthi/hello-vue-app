<template>
  <div class="home">
    <div class="card-body">
      <div v-if="user" class="alert alert-success" role="alert">
        You are logged in!
      </div>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HomeComponent msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeComponent from "@/components/home/Index.vue"; // @ is an alias to /src

export default defineComponent({
  components: {
    HomeComponent,
  },
});
</script>

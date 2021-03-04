<template>
  <div class="home">
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

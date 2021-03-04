<template>
  <LoginComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginComponent from "@/components/login/Index.vue";

export default defineComponent({
  components: {
    LoginComponent,
  },
});
</script>

<style scoped>
</style>
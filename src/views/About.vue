<template>
  <AboutComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutComponent from "@/components/about/About.vue";

export default defineComponent({
  components: {
    AboutComponent,
  },
});
</script>

<style scoped>
</style>
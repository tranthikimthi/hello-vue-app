<template>
  <NotFoundComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NotFoundComponent from "@/components/not-found/Index.vue";

export default defineComponent({
  components: {
    NotFoundComponent,
  },
});
</script>

<style scoped>
</style>
<template>
  <RegisterComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegisterComponent from "@/components/register/Index.vue";

export default defineComponent({
  components: {
    RegisterComponent,
  },
});
</script>

<style scoped>
</style>
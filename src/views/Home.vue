<template>
  <HomeComponent :msg="msg" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HomeComponent from "@/components/home/Index.vue"; // @ is an alias to /src

export default defineComponent({
  components: {
    HomeComponent,
  },
  setup() {
    const msg = ref("welcome");
    return {
      msg,
    };
  },
});
</script>

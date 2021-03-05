<template>
  <SwitchLanguageComponent />
  <NavBarComponent />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBarComponent from "@/components/navbar/Index.vue";
import SwitchLanguageComponent from "@/components/switch-language/switch-language.vue";

export default defineComponent({
  components: {
    NavBarComponent,
    SwitchLanguageComponent,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

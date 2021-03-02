<template>
  <TodoItem v-for="item in items" :key="item.id" v-bind="item" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import store from "@/store";
import TodoItem from "./TodoItem.vue";

export default defineComponent({
  components: { TodoItem },
  setup() {
    const items = computed(() => store.state.items);
    return { items };
  },
});
</script>

<style>
</style>
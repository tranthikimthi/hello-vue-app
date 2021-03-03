<template>
  <TodoItem v-for="item in items" :key="item.id" v-bind="item" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from 'vuex'
import TodoItem from "./TodoItem.vue";

export default defineComponent({
  components: { TodoItem },
  setup() {
    const store = useStore()
    const items = computed(() => store.state.todos.items);
    return { items };
  },
});
</script>

<style>
</style>
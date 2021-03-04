<template>
  <div class="container mt-4">
    <h1 class="text-center p-2">Todo List</h1>
    <div v-if="loading">
      <h3 class="text-center mt-4">Loading...</h3>
    </div>
    <div v-else>
      <p class="text-center mt-2">
        {{ completedCount }} of {{ totalCount }} completed.
      </p>
      <NewItem />
      <TodoList />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import TodoList from "@/components/todos/TodoList.vue";
import NewItem from "@/components/todos/NewItem.vue";
import { useStore } from 'vuex'
import { ActionTypes } from "@/store/constanst/todos.const";

export default defineComponent({
  name: "Todos",
  components: { TodoList, NewItem },
  setup() {
    const store = useStore()
    const loading = computed(() => store.state.todos.loading);
    onMounted(() => {
      store.dispatch(`todos/${ActionTypes.GET_ITEMS}`);
    });
    const completedCount = computed(() => store.getters[`todos/completedCount`]);
    const totalCount = computed(() => store.getters[`todos/totalCount`]);
    return { loading, completedCount, totalCount };
  },
});
</script>

<style scoped>
</style>

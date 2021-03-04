<template>
  <form class="form-row my-2" @submit.prevent="createTask">
    <div class="d-flex col-md-12">
      <input
        class="form-control"
        v-model="title"
        type="text"
        placeholder="What task do you need to complete?"
      />
      <button type="submit" class="btn btn-outline-primary">Add</button>
    </div>
  </form>
</template>

<script lang="ts">
import { ActionTypes } from "@/store/constanst/todos.const";
import { defineComponent, ref } from "vue";
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const title = ref("");
    const createTask = () => {
      if (!title.value) return;
      const item = {
        title: title.value,
        completed: false,
      };
      store.dispatch(`todos/${ActionTypes.ADD_ITEM}`, item)
      title.value = "";
    };
    return {
      title,
      createTask,
    };
  },
});
</script>

<style>
</style>
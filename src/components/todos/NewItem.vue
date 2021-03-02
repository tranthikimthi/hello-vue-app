<template>
  <form class="form-row my-2" @submit.prevent="createTask">
    <div class="d-flex col-md-12">
      <input
        class="form-control col-md-11"
        v-model="title"
        type="text"
        placeholder="What task do you need to complete?"
      />
      <div class="col-md-1">
        <button type="submit" class="btn btn-outline-primary">
          Add
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import store from "@/store";
import { MutationType } from "@/store/mutations";

export default defineComponent({
  setup() {
    const title = ref("");
    const createTask = () => {
      if (!title.value) return;
      const item = {
        title: title.value,
        completed: false,
      };
      store.commit(MutationType.CreateItem, item);
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
<template>
  <div class="d-flex">
    <div class="col-md-11 d-flex align-items-center">
      <div class="flex-shrink-0 mr-2">
        <input
          type="checkbox"
          :checked="completed"
          @change="toggleCompletion()"
        />
      </div>
      <div class="ml-6 my-1" :class="completed ? 'completed' : ''">
        {{ title }}
      </div>
    </div>
    <div class="col-md-1">
      <button @click="deleteItem(id)" class="btn btn-sm btn-outline-danger">
        Delete
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import { MutationType } from "@/store/mutations";

export default defineComponent({
  props: {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  setup(props) {
    const toggleCompletion = () => {
      store.commit(MutationType.CompleteItem, {
        id: props.id,
        completed: !props.completed,
      });
    };
    const deleteItem = (id: number) => {
      store.commit(MutationType.DeleteItem, id);
    };
    return { toggleCompletion, deleteItem };
  },
});
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
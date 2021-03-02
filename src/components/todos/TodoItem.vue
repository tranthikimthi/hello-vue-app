<template>
  <div class="d-flex align-items-center" :class="completed ? 'completed' : ''">
    <div class="flex-shrink-0 mr-2">
      <input
        type="checkbox"
        :checked="completed"
        @change="toggleCompletion()"
      />
    </div>
    <div class="ml-6 my-1">
      {{ title }}
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
    return { toggleCompletion };
  },
});
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
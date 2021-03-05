<template>
  <h1>{{ t("pages.about") }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n({ useScope: 'global' });
    return {
      t,
    };
  },
});
</script>
<template>
  <h3>{{ t(msg) }}</h3>
  <p>{{ t("pages.home") }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  props: {
    msg: String,
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>

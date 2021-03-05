<template>
  <div class="text-right mt-2" style="padding-right: 30px">
    <label class="mr-2">{{ t("labels.language") }}:</label>
    <select v-model="locale">
      <option
        v-for="locale in availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t, availableLocales, locale } = useI18n({ useScope: 'global' });
    return { t, locale, availableLocales };
  },
});
</script>

<style>
</style>
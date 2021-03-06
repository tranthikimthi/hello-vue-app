<template>
  <div class="text-right mt-2" style="padding-right: 30px">
    <label class="mr-2">{{ t("labels.language") }}:</label>
    <select v-model="locale" @change="changeLanguage($event.target.value)">
      <option value="en">English</option>
      <option value="ja">Japan</option>
    </select>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    let { locale } = useI18n();
    const changeLanguage = (lang) => {
      locale = lang;
    };
    return { t, locale, changeLanguage };
  },
});
</script>

<style>
</style>
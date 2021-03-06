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
import { ActionTypes } from "@/store/constanst/i18n.const";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const store = useStore();
    const { locale } = useI18n();
    const changeLanguage = (lang) => {
      store.dispatch(ActionTypes.SET_LANG, lang);
    };
    return { t, locale, changeLanguage };
  },
});
</script>

<style>
</style>
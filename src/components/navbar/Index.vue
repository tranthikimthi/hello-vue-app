<template>
  <div id="nav" class="d-flex" style="justify-content: space-between">
    <div>
      <router-link to="/">{{ t("navigations.home") }}</router-link>
      <span class="mx-2">|</span>
      <template v-if="user?.loggedIn">
        <router-link to="/todos">Todos</router-link>
        <span class="mx-2">|</span>
      </template>
      <router-link to="/about">{{ t("navigations.about") }}</router-link>
    </div>
    <div class="d-flex">
      <template v-if="user?.loggedIn">
        <div>{{ user?.data?.displayName }}</div>
        <span class="mx-2">|</span>
        <a @click.prevent="signOut">Sign out</a>
      </template>
      <template v-else>
        <router-link to="/login">Login</router-link>
        <span class="mx-2">|</span>
        <router-link to="/register">Register</router-link>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { ActionTypes } from "@/store/constanst/auth.const";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    const { t } = useI18n({ useScope: 'global' });
    const store = useStore();
    const user = computed(() => store.getters[`auth/user`]);
    const signOut = () => {
      store.dispatch(`auth/${ActionTypes.SIGN_OUT}`)
    };
    return {
      t,
      user,
      signOut,
    };
  },
});
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  cursor: pointer;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
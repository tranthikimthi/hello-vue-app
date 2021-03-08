<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{ t("navigations.login") }}</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{ error }}</div>
            <Form @submit="submit" :validation-schema="schema">
              <div class="form-group row">
                <label
                  for="email"
                  class="col-md-4 col-form-label text-md-right"
                  >{{ t("labels.email") }}</label
                >

                <div class="col-md-6 text-left">
                  <Field
                    v-model="email"
                    type="text"
                    name="email"
                    v-slot="{ field, errorMessage }"
                  >
                    <input
                      v-bind="field"
                      class="form-control"
                      :class="{ 'is-invalid': errorMessage }"
                    />
                  </Field>
                  <ErrorMessage name="email" v-slot="{ message }">
                    <p style="color: red">{{ message }}</p>
                  </ErrorMessage>
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="password"
                  class="col-md-4 col-form-label text-md-right"
                  >{{ t("labels.password") }}</label
                >

                <div class="col-md-6 text-left">
                  <Field
                    v-model="password"
                    type="password"
                    name="password"
                    v-slot="{ field, errorMessage }"
                  >
                    <input
                      v-bind="field"
                      type="password"
                      class="form-control"
                      :class="{ 'is-invalid': errorMessage }"
                    />
                  </Field>
                  <ErrorMessage name="password" v-slot="{ message }">
                    <p style="color: red">{{ message }}</p>
                  </ErrorMessage>
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-6">
                  <button type="submit" class="btn btn-primary">
                    {{ t("navigations.login") }}
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div class="mt-2 d-flex justify-content-center">
          <button
            class="btn btn-outline-primary mr-2"
            type="button"
            @click.prevent="loginWidthFacebook"
          >
            Login with Facebook
          </button>
          <button
            class="btn btn-outline-danger"
            type="button"
            @click.prevent="loginWidthGoogle"
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import { ActionTypes } from "@/store/constanst/auth.const";
import { Field, Form, ErrorMessage } from "vee-validate";
import { object, string } from "yup";
import { useI18n } from "vue-i18n";

export default defineComponent({
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const store = useStore();
    const { t } = useI18n();

    const schema = object({
      email: string().required("Email is required").email("Email is invalid"),
      password: string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    });

    const error = computed(() => store.state.auth.loginError);

    const submit = (values) => {
      store.dispatch(`auth/${ActionTypes.LOGIN}`, values);
    };

    const loginWidthGoogle = () => {
      store.dispatch(`auth/${ActionTypes.LOGIN_WITH_GOOGLE}`);
    };

    const loginWidthFacebook = () => {
      store.dispatch(`auth/${ActionTypes.LOGIN_WITH_FACEBOOK}`);
    };
    return { t, schema, error, submit, loginWidthGoogle, loginWidthFacebook };
  },
});
</script>

<style>
</style>
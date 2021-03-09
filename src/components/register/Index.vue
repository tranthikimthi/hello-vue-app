<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">{{ t("navigations.register") }}</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{ error }}</div>
            <Form @submit="submit" :validation-schema="schema">
              <div class="form-group row">
                <label
                  for="name"
                  class="col-md-4 col-form-label text-md-right"
                  >{{ t("labels.name") }}</label
                >

                <div class="col-md-6 text-left">
                  <Field
                    v-model="name"
                    type="text"
                    name="name"
                    v-slot="{ field, errorMessage }"
                  >
                    <input
                      v-bind="field"
                      class="form-control"
                      :class="{ 'is-invalid': errorMessage }"
                    />
                  </Field>
                  <ErrorMessage name="name" v-slot="{ message }">
                    <p style="color: red">{{ message }}</p>
                  </ErrorMessage>
                </div>
              </div>

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
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    {{ t("navigations.register") }}
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ActionTypes } from "@/store/constanst/auth.const";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
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
    const error = computed(() => store.state.auth.registerError);
    const schema = object({
      name: string().required(t("validations.name.required")),
      email: string()
        .required(t("validations.email.required"))
        .email(t("validations.email.invalid")),
      password: string()
        .required(t("validations.password.required"))
        .min(6, t("validations.password.min", { min: 6 })),
    });
    const submit = (values) => {
      store.dispatch(`auth/${ActionTypes.REGISTER}`, values);
    };
    return {
      t,
      schema,
      error,
      submit,
    };
  },
});
</script>

<style>
</style>
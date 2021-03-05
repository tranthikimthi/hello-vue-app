<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{ error }}</div>
            <Form @submit="submit" :validation-schema="schema">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right"
                  >Name</label
                >

                <div class="col-md-6 text-left">
                  <Field name="name" />
                  <ErrorMessage name="name" />
                </div>
              </div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right"
                  >Email</label
                >

                <div class="col-md-6 text-left">
                  <Field name="email" />
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div class="form-group row">
                <label
                  for="password"
                  class="col-md-4 col-form-label text-md-right"
                  >Password</label
                >

                <div class="col-md-6 text-left">
                  <Field name="password" />
                  <ErrorMessage name="password" />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">
                    Register
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

export default defineComponent({
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const store = useStore();
    const error = computed(() => store.state.auth.registerError);
    const schema = object({
      name: string().required("Name is required"),
      email: string().required("Email is required").email("Email is invalid"),
      password: string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    });
    const submit = (values) => {
      store.dispatch(`auth/${ActionTypes.REGISTER}`, values);
    };
    return {
      schema,
      error,
      submit,
    };
  },
});
</script>

<style>
</style>
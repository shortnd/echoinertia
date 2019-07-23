<template>
  <Layout>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Login</div>

            <div class="card-body">
              <form @submit.prevent="submit" method="POST">
                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                  <div class="col-md-6">
                    <input
                      type="email"
                      v-model="form.email"
                      id="email"
                      class="form-control"
                      required
                      autocomplete="email"
                      autofocus
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                  <div class="col-md-6">
                    <input
                      type="password"
                      v-model="form.password"
                      id="password"
                      class="form-control"
                      required
                      autocomplete="current-password"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-6 offset-md-4">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        v-model="form.remember"
                        id="remember"
                      />

                      <label for="remember" class="form-check-label">Remember Me</label>
                    </div>
                  </div>
                </div>

                <div class="form-group row mb-0">
                  <div class="col-md-8 offset-md-4">
                    <button type="submit" class="btn btn-primary">Login</button>

                    <template v-if="passwordRequest">
                      <inertia-link
                        :href="route('password.request')"
                        class="btn btn-link"
                      >Forgot Your Password?</inertia-link>
                    </template>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/Shared/Layout";
import { value, computed } from "vue-function-api";
export default {
    setup(props) {
        const form = value({
            email: null,
            password: null,
            remember: false,
        });

        const passwordRequest = computed(function () {
            return this.$page.has.password_request
        });

        const submit = function () {
            this.$inertia.post(route("login").url(), this.form)
                .then(res => this.$inertia.visit(res.request.responseURL))
        }

        return {
            form,
            passwordRequest,
            submit,
        }
    },
  remember: ["form"],
  components: {
    Layout
  },
};
</script>

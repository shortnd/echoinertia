<template>
  <Layout>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Register</div>

            <div class="card-body">
              <form method="POST" @submit.prevent="submit">
                <div class="form-group row">
                  <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                  <div class="col-md-6">
                    <input
                      type="text"
                      v-model="form.name"
                      class="form-control"
                      id="name"
                      required
                      autocomplete="name"
                      autofocus
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                  <div class="col-md-6">
                    <input
                      type="email"
                      v-model="form.email"
                      id="email"
                      class="form-control"
                      autocomplete="email"
                      required
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
                      autocomplete="new-password"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label
                    for="password-confirm"
                    class="col-md-4 col-form-label text-md-right"
                  >Confirm Password</label>

                  <div class="col-md-6">
                    <input
                      type="password"
                      v-model="form.password_confirmation"
                      id="password-confirm"
                      class="form-control"
                      required
                      autocomplete="new-password"
                    />
                  </div>
                </div>

                <div class="form-group row mb-0">
                  <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">Register</button>
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
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        "password-confirmation": null
      }
    };
  },
  components: {
    Layout
  },
  methods: {
    submit() {
      axios
        .post(route("register"), this.form)
        .then(res => this.$inertia.visit(route("login")));
      // this.$inertia.post(route('register'), this.form).then((res) => console.log(res))
    }
  }
};
</script>

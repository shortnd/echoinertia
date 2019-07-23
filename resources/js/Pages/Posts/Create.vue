<template>
  <Layout>
    <div class="container">
      <div class="card">
        <div class="card-header">Create Post</div>

        <div class="card-body">
          <form @submit.prevent="addPost" method="POST">
            <div class="row form-group">
              <label for="title" class="col-md-4 col-form-label text-md-right">Title</label>

              <div class="col-md-6">
                <input
                  type="text"
                  v-model="form.title"
                  id="title"
                  class="form-control"
                  required
                  autofocus
                />
              </div>
            </div>

            <div class="row form-group">
              <label for="url" class="col-md-4 col-form-label text-md-right">URL</label>

              <div class="col-md-6">
                <input
                  type="text"
                  v-model="form.url"
                  id="url"
                  class="form-control"
                  required
                  autofocus
                />
              </div>
            </div>

            <div class="row form-group">
              <label for="description" class="col-md-4 col-form-label text-md-right">Description</label>

              <div class="col-md-6">
                <textarea
                  type="text"
                  v-model="form.description"
                  id="description"
                  class="form-control"
                  required
                  autofocus
                ></textarea>
              </div>
            </div>

            <div class="row form-group mb-0">
              <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">Add Post</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/Shared/Layout";
import { value } from "vue-function-api";
export default {
  setup() {
    const form = value({
      title: null,
      url: null,
      description: null
    });

    const errors = value({});

    const addPost = function() {
      this.$inertia
        .post(route("posts.store").url(), this.form)
        .then(res => this.$inertia.visit(res.request.responseURL));
    };

    return {
      form,
      addPost,
      errors
    };
  },
  remember: {
    data: ["form"]
  },
  components: {
    Layout
  }
};
</script>

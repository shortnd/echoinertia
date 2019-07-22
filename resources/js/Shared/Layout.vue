<template>
  <div>
      <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
          <div class="container" role="presentation">
              <a :href="route('home')" class="navbar-brand">
                  {{ $page.app.name }}
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <!-- Left Side of Nav -->
                  <ul class="navbar-nav mr-auto">

                  </ul>

                  <!-- Right side of nav -->
                  <ul class="navbar-nav ml-auto">
                      <template v-if="guest">
                          <li class="nav-item">
                              <inertia-link class="nav-link" :href="route('login')">Login</inertia-link>
                          </li>
                          <li class="nav-item" v-if="register">
                              <inertia-link class="nav-link" :href="route('register')">Register</inertia-link>
                          </li>
                      </template>
                      <template v-else>
                          <li class="nav-item dropdown">
                              <a href="#" id="navbarDropdown" class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expaned="false">
                                  {{ user.name }} <span class="caret"></span>
                              </a>

                              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                  <inertia-link method="POST" :href="route('logout')" class="dropdown-item">Logout</inertia-link>
                              </div>
                          </li>
                      </template>
                  </ul>
              </div>
          </div>
      </nav>
      <main class="py-4">
          <slot />
      </main>
  </div>
</template>

<script>
export default {
    methods: {
        guest: function () {
            return this.$page.auth.user.length === 0;
        },
        register: function () {
            return this.$page.has.register.length
        },
        user: function () {
            return this.$page.auth.user
        },
    },
    computed: {},
}
</script>

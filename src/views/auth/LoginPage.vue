<template>
  <div class="container">
    <div class="login-container">
      <h3 class="text-center mb-4 fw-bold text-primary">Login</h3>
      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="password"
            placeholder="••••••••"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary w-100" :disabled="loading">
          {{ loading ? "Logging in..." : "Log In" }}
        </button>
        <div v-if="error" class="text-danger mt-2 text-center">{{ error }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      error: "",
    };
  },
  methods: {
    async login() {
      this.loading = true;
      this.error = "";

      try {
        const response = await axios.post("http://localhost:8000/api/login", {
          email: this.email,
          password: this.password,
        });

        const token = response.data.token;

        localStorage.setItem("token", token);

        // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        this.$router.push("/dashboard");
      } catch (err) {
        this.error =
          err.response?.data?.message || "Login failed. Please try again.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
body {
  background: #f8f9fa;
}
.login-container {
  max-width: 400px;
  margin: auto;
  margin-top: 8%;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>

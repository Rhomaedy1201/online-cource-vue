<template >
  <div class="container">
    <div class="login-container">
      <h3 class="text-center mb-4 fw-bold text-primary">Login</h3>
      <form>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
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
            type="password"
            class="form-control"
            id="password"
            placeholder="••••••••"
            required
          />
        </div>
        <div class="d-flex justify-content-between mb-3">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="rememberMe" />
            <label class="form-check-label" for="rememberMe">Remember me</label>
          </div>
          <a href="#" class="small text-primary">Forgot password?</a>
        </div>
        <!-- <button type="submit" class="btn btn-primary w-100">Log In</button> -->
        <router-link to="/dashboard" class="btn btn-primary w-100"
          >Log In</router-link
        >
      </form>
      <p class="text-center mt-4 mb-0">
        Don't have an account?
        <a href="#" class="text-decoration-none text-primary">Sign up</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {};
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
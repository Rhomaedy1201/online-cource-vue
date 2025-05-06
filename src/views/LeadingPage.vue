<template lang="">
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
    <div class="container">
      <a class="navbar-brand fw-bold text-primary" href="#">🧑‍🎓 E-Learning</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav me-3">
          <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#">About us</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Mentors</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Pricing</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Courses</a></li>
        </ul>
        <router-link to="/login" class="btn btn-outline-primary">Log In</router-link>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left Content -->
        <div class="col-md-6 mb-4 mb-md-0">
          <h1 class="fw-bold display-5">Unlock Your Potential with Infinite Courses</h1>
          <p class="mt-3 text-muted">We offer a wide range of courses to help you develop new skills and advance your career.</p>
          <div class="mt-4">
            <a href="#" class="btn btn-success me-3">Explore Courses</a>
            <button class="btn btn-outline-secondary">▶</button>
          </div>
          <div class="d-flex mt-5 gap-5">
            <div><strong>25k+</strong><br><small class="text-muted">Student Joined</small></div>
            <div><strong>480+</strong><br><small class="text-muted">Online Courses</small></div>
            <div><strong>12k+</strong><br><small class="text-muted">Certified</small></div>
          </div>
        </div>

        <!-- Right Image -->
        <div class="col-md-6 text-center">
          <img :src="heroImage" alt="Hero Image" class="hero-img">
        </div>
      </div>
    </div>
  </section>
  <!-- About Us Section -->
<section id="about" class="py-5 bg-light">
  <div class="container text-center">
    <h2 class="fw-bold mb-4">Why Choose E-Learning?</h2>
    <p class="text-muted mb-4">We are committed to helping you unlock your full potential through quality education, anytime and anywhere.</p>
    <div class="row">
      <div class="col-md-4">
        <img src="https://img.icons8.com/ios-filled/100/000000/online-learning.png" alt="Flexible" class="mb-3" />
        <h5>Flexible Learning</h5>
        <p class="text-muted">Learn at your own pace with 24/7 access to all our courses.</p>
      </div>
      <div class="col-md-4">
        <img src="https://img.icons8.com/ios-filled/100/000000/knowledge-sharing.png" alt="Expert Mentors" class="mb-3" />
        <h5>Expert Mentors</h5>
        <p class="text-muted">Get guidance from experienced mentors and industry professionals.</p>
      </div>
      <div class="col-md-4">
        <img src="https://img.icons8.com/ios-filled/100/000000/certificate.png" alt="Certification" class="mb-3" />
        <h5>Certified Courses</h5>
        <p class="text-muted">Receive certificates upon course completion to boost your resume.</p>
      </div>
    </div>
  </div>
</section>

<!-- Mentors Section -->
<section id="mentors" class="py-5">
  <div class="container text-center">
    <h2 class="fw-bold mb-4">Meet Our Mentors</h2>
    <div class="row">
      <div class="col-md-3">
        <img src="https://i.pravatar.cc/150?img=10" class="rounded-circle mb-2" width="100" />
        <h6 class="fw-semibold">Sarah Johnson</h6>
        <p class="text-muted small">UI/UX Designer</p>
      </div>
      <div class="col-md-3">
        <img src="https://i.pravatar.cc/150?img=20" class="rounded-circle mb-2" width="100" />
        <h6 class="fw-semibold">David Lee</h6>
        <p class="text-muted small">Full Stack Developer</p>
      </div>
      <div class="col-md-3">
        <img src="https://i.pravatar.cc/150?img=30" class="rounded-circle mb-2" width="100" />
        <h6 class="fw-semibold">Linda Adams</h6>
        <p class="text-muted small">Marketing Strategist</p>
      </div>
      <div class="col-md-3">
        <img src="https://i.pravatar.cc/150?img=40" class="rounded-circle mb-2" width="100" />
        <h6 class="fw-semibold">Michael Chen</h6>
        <p class="text-muted small">Data Scientist</p>
      </div>
    </div>
  </div>
</section>

<!-- Pricing Section -->
<section id="pricing" class="py-5 bg-light">
  <div class="container text-center">
    <h2 class="fw-bold mb-4">Affordable Pricing Plans</h2>
    <div class="row justify-content-center">
      <div class="col-md-4">
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Basic</h5>
            <h6 class="card-price text-primary">$9 <span class="text-muted">/month</span></h6>
            <ul class="list-unstyled mt-3 mb-4 text-muted">
              <li>✔ Access 50+ courses</li>
              <li>✔ No certificate</li>
              <li>✔ Community support</li>
            </ul>
            <a href="#" class="btn btn-outline-primary">Choose Plan</a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-primary shadow">
          <div class="card-body">
            <h5 class="card-title">Pro</h5>
            <h6 class="card-price text-primary">$29 <span class="text-muted">/month</span></h6>
            <ul class="list-unstyled mt-3 mb-4 text-muted">
              <li>✔ All Basic features</li>
              <li>✔ Certificate included</li>
              <li>✔ 1-on-1 Mentorship</li>
            </ul>
            <a href="#" class="btn btn-primary">Choose Plan</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Courses Section -->
<section id="courses" class="py-5">
  <div class="container text-center">
    <h2 class="fw-bold mb-4">Popular Courses</h2>
    <div class="row">
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="https://source.unsplash.com/400x200/?programming" class="card-img-top" alt="Course">
          <div class="card-body">
            <h5 class="card-title">Web Development Bootcamp</h5>
            <p class="card-text text-muted">Learn HTML, CSS, JS, and React from scratch in 12 weeks.</p>
            <a href="#" class="btn btn-outline-primary btn-sm">See Details</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="https://source.unsplash.com/400x200/?uiux" class="card-img-top" alt="Course">
          <div class="card-body">
            <h5 class="card-title">UI/UX Design Masterclass</h5>
            <p class="card-text text-muted">Design stunning user interfaces with Figma and Adobe XD.</p>
            <a href="#" class="btn btn-outline-primary btn-sm">See Details</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="https://source.unsplash.com/400x200/?data,analytics" class="card-img-top" alt="Course">
          <div class="card-body">
            <h5 class="card-title">Data Science with Python</h5>
            <p class="card-text text-muted">Master data analysis, visualization, and ML with Python.</p>
            <a href="#" class="btn btn-outline-primary btn-sm">See Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script setup>
// Components
// import Navbar from "../../components/leading_page/Navbar.vue";
// import HeroSection from "../../components/leading_page/HeroSection.vue";
// import Features from "../../components/leading_page/Features.vue";
// import Footer from "../../components/leading_page/Footer.vue";
import HeroImage from "/hero-icon.png";

const heroImage = HeroImage;
</script>

<style>
body {
  font-family: "Segoe UI", sans-serif;
}
.hero {
  background: linear-gradient(120deg, #fbf5ee, #ffbe84); /* Orange gradient */
  padding: 80px 0;
}
.hero-img {
  max-width: 100%;
  height: auto;
}
.stats-card {
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
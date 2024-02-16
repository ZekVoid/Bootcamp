<template>
  <section class="login-section">
    <div class="login-container">
      <div class="login-image">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="Sample image">
      </div>
      <div class="login-form">
        <form>
          <div class="social-login">
            <p>Sign in</p>
          </div>
          <div class="form-group">
            <input v-model="email" type="email" class="form-control" placeholder="Email">
          </div>
          <div class="form-group">
            <input v-model="password" type="password" class="form-control" placeholder="Password">
          </div>
          <div class="checkbox-section">
            <div class="form-check">
              <input type="checkbox" id="form2Example3" class="form-check-input" />
              <label for="form2Example3" class="form-check-label">Remember me</label>
            </div>
            <router-link to="/forgot-password" class="forgot-password">Forgot password?</router-link>
          </div>
          <div class="login-button">
            <router-link to="/loggedin" type="button" class="btn btn-primary btn-lg btn-block">Login</router-link>
          </div>
          <div class="register-section">
            <p>Don't have an account? <router-link to="/register" class="register-link">Register</router-link></p>
          </div>
        </form>
      </div>
    </div>
    <div class="footer-section">
      <div class="copyright">
        Copyright © 2024. All rights reserved.
      </div>
    </div>
  </section>
</template>


<script>
import axios from 'axios';

export default {
data() {
  return {
    email: '',
    password: '',
  };
},
methods: {
  login() {
    axios.get('http://127.0.0.1:8000/api/auth/login', {
      email: this.email,
      password: this.password
    })
    .then(response => {
      // Handle successful login
      console.log(response.data);
      // Redirect to dashboard or perform other actions
    })
    .catch(error => {
      // Handle login error
      console.error(error);
      alert("Login failed. Please check your credentials.");
    });
  }
}
}
</script>



<style scoped>
.login-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  margin-left: 300px;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-image img {
  width: 100%;
  height: auto;
}

.login-form {
  width: 100%;
  margin-top: 20px;
}

.social-login {
  text-align: center;
  margin-bottom: 20px;
}

.social-login p {
  font-weight: bold;
  margin-bottom: 10px;
}

.divider {
  text-align: center;
  margin-bottom: 20px;
}

.divider p {
  font-weight: bold;
  font-size: 16px;
  color: #999;
}

.form-group {
  margin-bottom: 20px;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.checkbox-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.forgot-password {
  font-size: 16px;
  color: #007bff;
  text-decoration: none;
}

.login-button button {
  padding: 8px;
  border: none;
  border-radius: 5px;

}
</style>

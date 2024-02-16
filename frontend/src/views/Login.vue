<template>
  <div class="form-login">
    <h2>Login</h2>
    <form @submit.prevent="submitForm">
      <div class="form-row">
        <div class="col">
          <input v-model="email" type="email" class="form-control" placeholder="Email">
        </div>
        <div class="col">
          <input v-model="password" type="password" class="form-control" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </form>
    <p>Don't have an account? <router-link to="/register" class="register-link">Register</router-link></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

<<<<<<< HEAD
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
=======
const email = ref('');
const password = ref('');

const submitForm = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/auth/login', {
      email: email.value,
      password: password.value
>>>>>>> 1f0be9b017356365cac228ba6b0fc262a59c781f
    });

    console.log(response.data);
    // Store token securely (e.g., in local storage or HTTP-only cookie)
    // Redirect to dashboard or perform other actions as needed

    showAlert('Success', 'Logged in successfully!');
  } catch (error) {
    console.error(error.response.data);
    showAlert('Error', 'Login failed. Please check your credentials and try again.');
  }
};

const showAlert = (title, message) => {
  alert(`${title}: ${message}`);
};
</script>

<style scoped>
.form-control {
  width: 100%;
}

h2 {
  margin-left: 50%;
  font-weight: bold;
}

.form-row {
  margin-top: 40px;
  margin-left: -10%;
  width: 200%;
}

.btn {
  margin-right: 10px;
}
</style>

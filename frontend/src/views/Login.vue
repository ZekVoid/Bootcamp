<template>
  <div class="form-login">
    <h2>Login</h2>
    <form @submit.prevent="submitForm">
      <div class="form-row">
        <div class="col">
          <input v-model="email" type="email" class="form-control" placeholder="Email">
        </div>
        <br>
        <div class="col">
          <input v-model="password" type="password" class="form-control" placeholder="Password">
        </div>
        <br>
        <button type="submit" class="btn btn-primary">Login</button>
      </div>
    </form>
    <br>
    <p>Don't have an account? <router-link to="/register" class="register-link">Register</router-link></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const submitForm = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/auth/login', {
      email: email.value,
      password: password.value
    });

    console.log(response.data);

    showAlert('Success', 'Logged in successfully!');

    // Redirect to welcome page with user's name
    router.push({ name: 'welcome'});
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

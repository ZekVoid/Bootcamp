<template>
  <div class="form-register">
    <h2>REGISTER</h2>
    <form @submit.prevent="submitForm">
      <div class="form-row">
        <div class="col">
          <input v-model="name" type="text" class="form-control" placeholder="Name">
        </div>
        <br>
        <div class="col">
          <input v-model="email" type="email" class="form-control" placeholder="Email">
        </div>
        <br>
        <div class="col">
          <input v-model="password" type="password" class="form-control" placeholder="Password">
        </div>
        <br>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const name = ref('');
const email = ref('');
const password = ref('');

const submitForm = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/auth/register', {
      name: name.value,
      email: email.value,
      password: password.value
    });

    console.log(response.data);
    name.value = '';
    email.value = '';
    password.value = '';
    showAlert('Success', 'Form submitted successfully!');
  } catch (error) {
    console.error(error.response.data);
    showAlert('Error', 'Form submission failed. Please try again later.');
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

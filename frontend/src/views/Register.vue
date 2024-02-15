<template>  
    
    <div class="form-register">
      <h2>
        REGISTER
      </h2>
  
    <form @submit.prevent="submitForm">
      <div class="form-row">
        <div class="col">
          <input v-model="email" type="email" class="form-control" placeholder="Email">
        </div>
        <br/>
        <div class="col">
          <input v-model="password" type="password" class="form-control" placeholder="Password">
        </div>
        <br/>
        <br/>
        <button id="btnSubmit" type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
      
    </form>
  
  </div>
  
    <RouterView/>
  </template>
  
  <script setup>

  import { ref } from 'vue';
  import axios from 'axios';
  import { RouterLink } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  
  const submitForm = () => {
    axios.post('http://127.0.0.1:8000/api/register', {
      Email: email.value,
      Password: password.value,
    })
    .then(response => {
      console.log(response.data);
  
      email.value = '';
      password.value = '';
      showAlert('Success', 'Form submitted successfully!');
    })
    .catch(error => {
      console.error(error.response.data);
      showAlert('Error', 'Form submission failed. Please try again later.');
    });
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
  
  .button {
  display: inline-block;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
}

.button:hover {
  background-color: #0056b3;
}
  
  #btnAdd {
    margin-right: 2%;
    margin-left: 50%;
  }
  
  #btnView {
    position: fixed;
  }
  
  #btnSubmit {
  
    margin-right: 10px;
  }
  
  
  </style>
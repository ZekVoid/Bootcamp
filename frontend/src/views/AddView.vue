<template>  
    
  <div class="form-addview">
    <router-link id="btnAdd" class="button" to="/form-addview">Add Details</router-link>
    <router-link id="btnView" class="button" to="/form-viewdetails">View Details</router-link>

  <form @submit.prevent="submitForm">
    <div class="form-row">
      <div class="col">
        <input v-model="firstName" type="text" class="form-control" placeholder="First name">
      </div>
      <br/>
      <div class="col">
        <input v-model="lastName" type="text" class="form-control" placeholder="Last name">
      </div>
      <br/>
      <div class="col">
        <input v-model="birthday" type="date" class="form-control" placeholder="Birthday">
      </div>
      <br/>
      <div class="col">
        <input v-model="address" type="text" class="form-control" placeholder="Address">
      </div>
      <br/>
      <button id="btnSubmit" type="submit" class="btn btn-primary">
        Submit
      </button>
      <button id="btnUpdate" class="btn btn-primary" type="update" @click="updateItem(          .id)">Update</button>
    </div>
    
  </form>

</div>

  <RouterView/>
</template>

<script setup>

import { ref } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';

const firstName = ref('');
const lastName = ref('');
const birthday = ref('');
const address = ref('');

// const fetchData = async () => {
//   try {
//     const response = await axios.get('http://127.0.0.1:8000/api/Student'); 
//     const student = response.data;
//     if (student) {
//       firstName.value = student.first_name;
//       lastName.value = student.last_name; 
//       +      birthday.value = student.birthday;
//       address.value = student.address;
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };



const updateItem = async (id, updatedData) => {
  try {
    const response = await axios.put(`http://127.0.0.1:8000/api/Student/${id}`, updatedData);
    showAlert('Success', 'Item updated successfully');
    return response.data; 
  } catch (error) {
    console.error('Error updating item:', error);
    showAlert('Error', 'Failed to update item');
    throw error; 
  }
}

const submitForm = () => {
  axios.post('http://127.0.0.1:8000/api/Student', {
    FirstName: firstName.value,
    LastName: lastName.value,
    Birthday: birthday.value,
    Address: address.value
  })
  .then(response => {
    console.log(response.data);

    firstName.value = '';
    lastName.value = '';
    birthday.value = '';
    address.value = '';

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
/* nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-nav .nav-link {
  font-size: 1.1rem;
}

.navbar-nav .nav-link.active {
  font-weight: bold;
}

.dropdown-menu {
  background-color: #f8f9fa;
  border: 1px solid rgba(0,0,0,.15);
}

.dropdown-item {
  color: #212529;
}

.dropdown-item:hover {
  background-color: #e9ecef;
}

.logo {
  padding-top: 5px;
  padding-right: 10px;
} */

.form-control {
 width: 100%;
}

.form-row {
  margin-top: 40px;
  margin-left: -10%;
  width: 200%;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}

#btnAdd {
  margin-right: 20px;

}

#btnSubmit {

  margin-right: 10px;
}


</style>


















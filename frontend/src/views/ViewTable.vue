<template>
    <div class="form-viewdetails">

    <router-link id="btnAdd" class="button" to="/form-addview">Add Details</router-link>
    <router-link id="btnView" class="button" to="/form-viewdetails">View Details</router-link>

      <table id="table" class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Birthday</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.first_name }}</td>
            <td>{{ item.last_name }}</td>
            <td>{{ item.birthday }}</td>
            <td>{{ item.address }}</td> 

            <td>
            <button class="btn btn-primary" @click="editItem(item)">Edit</button>
            </td>
            <td>
            <button class="btn btn-danger" @click="deleteItem(item.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>  


    <RouterView/>

  </template>


  <script setup>
  
import { ref, onMounted } from 'vue';
import axios from 'axios';

const items = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/Student');
    items.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData();
});

    
  </script>
  
  <style scoped>
.table {
    width: 100%;
    margin-top: 30px;
    margin-left: -100px;
    width: 250%;
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

#btnAdd{
    margin-right: 5%;
    margin-left: 195px;
}

#btnAdd #btnView {
    position: fixed;
}

  </style>
  
  
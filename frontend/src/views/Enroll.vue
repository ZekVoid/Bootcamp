<template>

<div class="enroll-form">
    <router-link id="btnAdd" class="button" to="/form-addview">Add Details</router-link>
    <router-link id="btnView" class="button" to="/form-viewdetails">View Details</router-link>
</div>

<router-view/>

</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<style>
#addBtn {
  position: fixed;
  margin-left: 3%;
  margin-top: -4%;

}

#viewBtn {
  position: fixed;
  margin-left: 11%;
  margin-top: -4%;
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


</style>

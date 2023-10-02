<template>
<div> 
  <user-list></user-list> 
</div>
</template>

<script>
import UserList from '../views/UserList.vue'
export default {
  name: 'AboutView',
  components: {
    UserList, // Masukkan komponen UserList ke dalam komponen AboutView
  },
}
  
</script>

<style scoped>
.todo-app {
  max-width: 400px;
  margin: 0 auto;
  padding: 15px;
  background-color: #f8f8f8;
  border-radius: 8px;
}

.todo-input {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.category-button {
  margin-right: 10px;
  padding: 8px 12px;
  background-color: #48FFC2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.category-button:hover {
  background-color: #34495E; /* Warna latar belakang yang berbeda saat hover */
}
.todo-list {
  list-style-type: none;
  padding: 0;
}

.todo-item {
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.todo-checkbox {
  margin-right: 10px;
}

.delete-button {
  background-color: #ff0000;
  color: #fff;
  border: none;
  width: 60px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.delete-button:hover {
  background-color: #34495E;/* Warna latar belakang yang berbeda saat hover */
}



/* Style untuk modal edit tugas */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.modal h2 {
  margin-top: 0;
}

.modal textarea {
  width: 100%;
  height: 100px;
  resize: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 10px;
}

.modal-buttons {
  text-align: right;
}

.modal-buttons button {
  margin-left: 10px;
  background-color: #48FFC2;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}

</style>

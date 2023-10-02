<!-- AddTodo.vue -->
<template>
    <div>
      <input class="todo-input" v-model="newTodo" @keydown.enter.prevent="addTodo" placeholder="Tambahkan Tugas">
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const newTodo = ref('');
  
      const addTodo = () => {
        if (newTodo.value.trim() !== '') {
          // Mengirim event 'todo-added' dengan tugas baru sebagai payload
          // Komponen induk (AboutView) akan mendengarkan event ini.
          this.$emit('todo-added', newTodo.value);
  
          // Reset input setelah menambahkan tugas
          newTodo.value = '';
        }
      };
  
      return {
        newTodo,
        addTodo
      };
    }
  };
  </script>
  
  <style scoped>
  /* CSS khusus untuk komponen AddTodo */
  .todo-input {
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    /* Tambahkan gaya lainnya sesuai kebutuhan */
  }
  </style>
  
<!-- TaskItem.vue -->
<template>
    <div>
      <input type="checkbox" v-model="task.completed" @change="toggleTaskStatus" />
      <span>{{ task.text }}</span>
      <span class="deadline">Deadline: {{ task.deadline }}</span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      task: Object,
    },
    methods: {
      toggleTaskStatus() {
        this.$emit('task-status-toggled', {
        ...this.task,
        completed: !this.task.completed,
      });
      },
    },
  };
  </script>
  
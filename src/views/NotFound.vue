<template>
    <div class="flex flex-col items-center justify-center h-screen">
      <h1 class="text-7xl font-bold text-gren m-3">404 Not Found</h1>
      <p class="text-xl m-3">The page you are looking for does not exist.</p>
      <RouterLink :to="{ name: 'home' }" class="bg-gren text-wet p-3 pl-4 pr-4 shadow rounded-full">Back To Home</RouterLink>
    </div>
  </template>
  
  <script>
  export default {
    name: "NotFound"
  };
  </script>
  
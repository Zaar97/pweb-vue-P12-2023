<template>
  <main>
    <div class="greetings text-center">
      <h1 class="text-3xl text-white">Organizing Your Day Activity With To-do List</h1>
      <div class="image-container">
        <img :src="imageURL" alt="Heart Image" class="centered-image" /></div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      imageURL: "/umbrella.jpeg",
    };
  },
};
</script>

<style scoped>
.greetings {
  text-align: center;
  margin-bottom: 20px; /* Adjust the margin-bottom as needed */
}

.text-white {
  color: white; /* Set the text color to white */
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* Adjust the margin-top as needed */
}

.centered-image {
  max-width: 100%;
  max-height: 100%;
}
</style>
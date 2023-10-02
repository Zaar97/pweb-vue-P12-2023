<template>
  <div class="user-list text-center">
    <h1 class="text-2xl">Pick User</h1>
    <div class="user-list-container">
      <router-link
        v-for="username in usernames"
        :key="username"
        :to="{ name: 'user-profile', params: { username } }" 
        class="username-link"
      >
        {{ username }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usernames: ['Zahra', 'Sighra', 'Vian'],
    };
  },
};
</script>

<style scoped>

.user-list {
  text-align: center;
  margin-bottom: 40px; /* Tambahkan margin-bottom untuk memberikan ruang antara komponen */
}

.user-list-container {
  display: flex;
  flex-direction: row; /* Mengatur arah horizontal */
  justify-content: center; /* Mengatur pemusatannya secara horizontal */
  align-items: center; /* Mengatur pemusatannya secara vertikal */
  list-style-type: none; /* Menghilangkan bullet points pada list */
  padding: 0;
}

.username-link {
  margin: 0 15px; /* Jarak antara nama pengguna (diperbesar) */
  text-decoration: none; /* Menghilangkan underlines pada tautan */
  color: #48FFC2; /* Warna tautan */
  cursor: pointer;
  font-size: 24px; /* Mengatur ukuran teks yang lebih besar */
}

.username-link:hover {
  text-decoration: underline; /* Tampilkan underline saat tautan dihover */
}

</style>

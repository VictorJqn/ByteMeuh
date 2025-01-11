<template>
    <!-- Navbar globalement disponible pour toutes les pages -->
    <Navbar />
    
    <!-- Contenu principal de la page -->
    <main>
      <NuxtPage />
    </main>
</template>

<script setup>
// Importation de la Navbar
import Navbar from '~/layouts/Navbar.vue'
</script>

<style scoped>

body {
  margin: 0;
  padding: 0;
}


main {
  padding: 20px;
  background-color: #ecf0f1;
}
</style>

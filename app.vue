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

main {
  padding: 20px;
  background-color: #f4f7fa;
}
</style>

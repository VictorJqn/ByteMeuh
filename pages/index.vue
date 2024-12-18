<template>
  <div class="home-container">
    <div class="content-wrapper">
      <h1>Bienvenue sur ByteMeuh 🐄</h1>
      <p class="intro-text">
        Ici, on traite de tout ce qui concerne les vaches ! Que vous soyez un amateur de lait, un passionné de pâturages ou juste à la recherche d'un peu de fun,
        vous êtes au bon endroit. Explorez nos articles, découvrez des anecdotes sur les vaches, et plongez dans le monde de ByteMeuh !
      </p>
      <img src="/img/vache2.jpg" alt="Une vache rigolote" class="cow-image" />
      
    </div>
  </div>
</template>

<script setup>
// Pas besoin de script ici
</script>

<style scoped>
/* Container principal */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ecf0f1;
}

/* Contenu principal centré */
.content-wrapper {
  text-align: center;
  padding: 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
}

/* Titre principal */
h1 {
  font-size: 40px;
  color: #2c3e50;
  margin-bottom: 15px;
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Texte d'introduction */
.intro-text {
  font-size: 18px;
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 20px;
  font-family: 'Verdana', sans-serif;
  padding: 0 15px;
}

/* Image de vache */
.cow-image {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Fait amusant */
.fun-fact {
  font-size: 16px;
  color: #27ae60;
  margin-bottom: 20px;
  font-weight: 500;
}

/* Bouton d'appel à l'action */
.cta-button {
  padding: 12px 30px;
  background-color: #3498db;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

.cta-button:focus {
  outline: none;
}
</style>

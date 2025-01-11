<template>
  <nav>
    <div class="navbar-container">
      <div class="logo">
        <NuxtLink to="/">ByteMeuh</NuxtLink>
      </div>
      <ul>
        <li><NuxtLink to="/">Accueil</NuxtLink></li>
        <li><NuxtLink to="/articles">Articles</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
/* Structure globale de la navbar */
nav {
  background-color: #333;
  padding: 0.8rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
}

ul {
  list-style: none;
  display: flex;
  margin: 0;
}

li {
  margin: 0 1.5rem;
}

a {
  color: #fff;
  font-size: 1.1rem;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
}

a:hover {
  color: #00c1d4; /* Couleur d'accentuation sur hover */
  transform: translateY(-2px);
}



a:focus {
  outline: none;
  border-bottom: 2px solid #00c1d4;
}

/* Style de la navbar sur mobile */
@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    flex-direction: column;
    margin-top: 1rem;
  }

  li {
    margin: 1rem 0;
  }
}
</style>

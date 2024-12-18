<template>
  <div class="articles">
    <h1>Articles récents</h1>

    <div v-if="articles.length === 0" class="no-articles">
      <p>Aucun article trouvé.</p>
    </div>

    <ul v-else>
      <li v-for="article in articles" :key="article.id" class="article-item">
        <NuxtLink :to="`/articles/${article.slug}`">
          <div class="article-preview">
            <!-- Image de prévisualisation -->
            <div class="article-image">
              <img :src="article.imageUrl" :alt="article.title" />
            </div>

            <div class="article-header">
              <h2>{{ article.title }}</h2>
              <p>{{ article.excerpt }}</p>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  imageUrl: string; // L'URL de l'image de prévisualisation
}

const articles = ref<Article[]>([
  {
    id: 1,
    title: "L'élevage de vaches",
    slug: "vaches",
    excerpt: "Découvrez tout sur l'élevage des vaches, un article détaillé sur les bonnes pratiques en agriculture.",
    imageUrl: "/img/vache.jpg", // L'image pour la prévisualisation
  },
  {
    id: 2,
    title: "La gestion des troupeaux",
    slug: "troupeaux",
    excerpt: "Une exploration approfondie sur la gestion efficace d'un troupeau de vaches et l'optimisation des rendements.",
    imageUrl: "/img/vache2.jpg",
  },
  
]);
</script>

<style scoped>
.articles {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  color: #333;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
}

.article-item {
  margin-bottom: 20px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.article-item:hover {
  background-color: #e0e0e0;
}

.article-preview {
  display: flex;
  align-items: center;
}

.article-preview .article-image {
  width: 120px;
  height: 80px;
  margin-right: 15px;
  overflow: hidden;
  border-radius: 8px;
}

.article-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.article-header h2 {
  font-size: 1.5rem;
  color: #007bff;
}

.article-header p {
  font-size: 1rem;
  color: #666;
}

.no-articles {
  text-align: center;
  color: #888;
}
</style>

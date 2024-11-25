<template>
  <div class="article">
    <h1>Les Vaches : Les Créatures Qui Nourrissent le Monde</h1>
    <p class="publication-date"><strong>Publié le 25 novembre 2024</strong></p>

    <!-- Section principale avec l'image à gauche et le texte à droite -->
    <div class="article-body">
      <div class="article-image">
        <img src="/img/vache.jpg" alt="Les Vaches dans les champs" />
      </div>
      <div class="article-content">
        <p>Les vaches sont des animaux fascinants qui jouent un rôle essentiel dans notre vie quotidienne. Non seulement elles sont une source primaire de nourriture, mais elles sont également cruciales dans le secteur agricole et la production d'énergie durable. Dans cet article, nous explorerons l'importance des vaches et leur impact sur l'environnement, l'économie et la société.</p>
      </div>
    </div>

    <div class="content">
      <h2>Pourquoi les Vaches Sont-elles Si Importantes ?</h2>
      <p>Les vaches sont une des sources les plus importantes de protéines animales dans le monde. Le lait, la viande, et même les sous-produits comme le cuir, offrent une gamme de produits indispensables à l'homme. Selon des études, environ 1,5 milliard de vaches vivent dans le monde, produisant une grande partie des produits laitiers et carnés consommés quotidiennement.</p>

      <h2>L'Impact Environnemental des Vaches</h2>
      <p>Bien que les vaches soient souvent associées à des préoccupations environnementales, telles que les émissions de méthane, des initiatives ont été mises en place pour minimiser leur empreinte écologique. Des technologies modernes et des pratiques agricoles durables ont contribué à améliorer l'efficacité de la production tout en réduisant les effets négatifs sur l'environnement.</p>

      <h2>Les Différents Types de Vaches et Leur Utilisation</h2>
      <p>Il existe une grande variété de vaches, chacune adaptée à des environnements et des rôles spécifiques. Certaines races sont élevées pour la production de lait, comme la Holstein, tandis que d'autres, comme la Charolaise, sont élevées pour la viande. Certaines vaches ont même été sélectionnées pour leur capacité à produire du lait de haute qualité ou pour leur robustesse dans des climats extrêmes.</p>

      <h2>Les Vaches dans la Culture Populaire</h2>
      <p>Les vaches ont une place importante dans de nombreuses cultures à travers le monde. Dans certaines régions, elles sont sacrées, tandis que dans d'autres, elles sont perçues comme des symboles de fertilité et de prospérité. Les images de vaches sont souvent utilisées dans les arts, le cinéma et même la publicité pour transmettre des valeurs de nature et de simplicité.</p>

      <h2>Conclusion</h2>
      <p>Les vaches sont bien plus que de simples animaux d'élevage. Elles jouent un rôle fondamental dans l'économie mondiale, l'agriculture durable et la culture humaine. En comprenant mieux leur importance, nous pouvons apprécier à quel point elles influencent notre quotidien.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Configuration spécifique ou importation nécessaire
</script>

<style scoped>
.article {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.publication-date {
  font-size: 1.1rem;
  color: #777;
  text-align: center;
  margin-bottom: 30px;
}

.article-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.article-image img {
  max-width: 300px;
  max-height: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.article-content {
  flex: 1;
  margin-left: 20px;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
}

h2 {
  font-size: 1.75rem;
  color: #333;
  margin-top: 30px;
  font-weight: 600;
}

p {
  font-size: 1.2rem;
  color: #444;
  line-height: 1.8;
  margin-bottom: 20px;
}

strong {
  font-weight: bold;
  color: #333;
}

.content {
  padding: 0 20px;
}

@media (max-width: 768px) {
  .article-body {
    flex-direction: column;
    text-align: center;
  }

  .article-image img {
    max-width: 80%;
    margin-bottom: 20px;
  }

  .article-content {
    margin-left: 0;
  }
}
</style>

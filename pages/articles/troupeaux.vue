<template>
  <div class="article">
    <h1>Les Avantages des Vaches dans l'Agriculture Durable</h1>
    <p class="publication-date"><strong>Publié le 25 novembre 2024</strong></p>

    <!-- Section principale avec l'image à gauche et le texte à droite -->
    <div class="article-body">
      <div class="article-image">
        <img src="/img/vache2.jpg" alt="Les Vaches dans les champs" />
      </div>
      <div class="article-content">
        <p>Dans le monde de l'agriculture durable, les vaches jouent un rôle central. Elles ne sont pas seulement des sources de nourriture, mais elles sont également des partenaires de l'agriculture régénérative. Cet article examine comment les vaches contribuent à la durabilité de l'agriculture moderne et les avantages qu'elles apportent aux fermes écologiques.</p>
      </div>
    </div>

    <div class="content">
      <h2>Les Vaches et la Fertilité des Sols</h2>
      <p>Les vaches sont des éléments clés dans la gestion des sols. Leur fumier, riche en nutriments, est un excellent fertilisant naturel qui aide à améliorer la qualité du sol. Contrairement aux engrais chimiques, le fumier de vache enrichit le sol de manière durable, en augmentant la biodiversité et en permettant aux plantes de mieux se développer.</p>

      <h2>La Production de Lait Durable</h2>
      <p>Le lait produit par les vaches constitue un pilier essentiel de l'alimentation humaine dans de nombreuses régions. Cependant, l'impact environnemental de la production de lait peut être minimisé grâce à des pratiques agricoles durables. Les vaches nourries avec des pâturages naturels et gérées de manière responsable ont un impact moindre sur l'environnement, en réduisant les émissions de gaz à effet de serre.</p>

      <h2>Les Vaches dans l'Agriculture Régénérative</h2>
      <p>Les fermes régénératives utilisent des pratiques qui imitent les systèmes naturels pour restaurer la biodiversité et améliorer la santé des sols. Les vaches, lorsqu'elles sont élevées dans des systèmes de pâturage rotatif, aident à maintenir l'équilibre des écosystèmes. Ce type d'agriculture peut améliorer la capacité du sol à capturer le carbone, contribuant ainsi à atténuer le changement climatique.</p>

      <h2>Les Vaches et la Gestion de l'Eau</h2>
      <p>Les vaches peuvent aussi jouer un rôle dans la gestion de l'eau dans les fermes. En pâturant sur des prairies, elles contribuent à réduire l'érosion et à améliorer l'infiltration de l'eau dans le sol. Cela permet de maintenir une bonne réserve d'eau dans les sols, bénéfique pour les cultures et la biodiversité environnante.</p>

      <h2>Conclusion : L'Avenir des Vaches dans l'Agriculture Durable</h2>
      <p>Les vaches ont un rôle de plus en plus important à jouer dans l'agriculture durable. Leur capacité à améliorer la qualité des sols, produire des aliments de manière responsable et participer à la régénération des écosystèmes en fait des alliées précieuses pour les agriculteurs soucieux de l'environnement.</p>
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

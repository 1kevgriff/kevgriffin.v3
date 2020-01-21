<template>
  <Layout>
    <!-- Hi, I'm Kevin -->
    <Welcome />
    <!-- Latest Articles -->
    <LatestArticles />
    <!-- Training -->
    <WelcomeTraining />
    <!-- Consulting -->
    <WelcomeConsulting />
    <!-- Contact me -->
    <Contact />
  </Layout>
</template>

<page-query>
  query Home ($page: Int) {
      allArticle (page: $page) {
        edges {
          node {
            id
            title
            date (format: "MMMM DD, YYYY")
            categories
            permalink
          }
        }
    }
  }
</page-query>

<script>
import Welcome from "../components/Welcome";
import WelcomeTraining from "../components/WelcomeTraining";
import WelcomeConsulting from "../components/WelcomeConsulting";
import LatestArticles from "../components/LatestArticles";
import Contact from "../components/Contact.vue";

export default {
  components: { Welcome, LatestArticles, WelcomeTraining, WelcomeConsulting, Contact }
};
</script>
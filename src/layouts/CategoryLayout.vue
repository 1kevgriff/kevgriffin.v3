<template>
  <div class="layout">
    <h2>{{this.category}}</h2>
    <ul>
      <li v-for="a in matchingArticles" :key="a.node.id">
        <router-link :to="a.node.permalink">
          <h3 v-html="a.node.title" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { filter } from "lodash";
import SiteHeader from "~/components/SiteHeader.vue";
export default {
  props: ["category", "articles"],
  computed: {
    matchingArticles() {
      var results = filter(this.articles, p => {
        return p.node.categories.findIndex(i => i === this.category) >= 0;
      });

      return results;
    }
  },
  components: { SiteHeader }
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}
a {
  color: #4dba87;
  text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Mali", cursive;
}
h1 {
  font-size: 48px;
}
h6 {
  font-size: 20px;
}
body {
  font-family: "Nunito", sans-serif;
  margin: 0;
  font-size: 16px;
  padding: 0;
}
.heading-link {
  color: black;
  text-decoration: none;
}
.layout {
  max-width: 600px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
.layout {
  margin-top: 30px;
  margin-bottom: 50px;
}
.heading {
  margin-bottom: 20px;
  font-family: "Mali", cursive;
  font-weight: bold;
}
</style>
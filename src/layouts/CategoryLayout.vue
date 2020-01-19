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
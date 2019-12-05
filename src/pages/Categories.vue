  
<template>
  <div class="layout">
    <SiteHeader />
    <CategoryLayout
      v-for="c in categoryList"
      :category="c"
      :key="c"
      :articles="$page.allArticle.edges"
    ></CategoryLayout>
  </div>
</template>

<page-query>
  {
  allArticle {
    edges {
      node {
        id
        title
        categories
        permalink
      }
    }
  }
}

</page-query>


<script>
import { uniq } from "lodash";
import SiteHeader from "~/components/SiteHeader.vue";

export default {
  computed: {
    categoryList() {
      var catList = [];

      for (var x = 0; x < this.$page.allArticle.edges.length; x++) {
        catList = catList.concat(
          this.$page.allArticle.edges[x].node.categories
        );
      }

      return uniq(catList).sort();
    }
  },
  components: { SiteHeader }
};
</script>


<style scoped>
.home >>> .heading {
  margin-bottom: 70px;
}
ul {
  list-style: none;
  padding: 0;
}
ul li {
  margin-bottom: 20px;
}
ul li a h2 {
  margin-bottom: 10px;
}
span {
  font-size: 80%;
  padding: 0;
}
ul li p:first-child {
  margin-top: 3px;
}
ul li p {
  margin: 0;
  line-height: 1.5;
}
</style>
<template>
  <div class="container mx-auto">
    <Heading value="Latest Articles" />
    <div class="flex mt-10 mb-10">
      <div class="w-1/3 h-auto text-center">
        <g-link
          :to="$page.allArticle.edges[0].node.permalink"
        >{{$page.allArticle.edges[0].node.title}}</g-link>
      </div>
      <div class="w-1/3 h-auto text-center">
        <g-link
          :to="$page.allArticle.edges[1].node.permalink"
        >{{$page.allArticle.edges[1].node.title}}</g-link>
      </div>
      <div class="w-1/3 h-auto text-center">
        <g-link
          :to="$page.allArticle.edges[2].node.permalink"
        >{{$page.allArticle.edges[2].node.title}}</g-link>
      </div>
    </div>
  </div>
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
export default {
  name: "LatestArticles"
};
</script>

<style>
</style>
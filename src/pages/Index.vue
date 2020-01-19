  
<template>
  <Layout class="home">
    <p>Hello</p>
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
export default {};
</script>
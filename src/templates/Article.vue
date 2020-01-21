<template>
  <Layout>
    <div class="container mx-auto">
      <h1 class="sub-heading">{{ $page.article.title }}</h1>
      <p class="italics block">{{ $page.article.date }}</p>
      <br />
      <div id="articleContent" v-html="$page.article.content" />
      <br />
      <vue-disqus shortname="kevgriff" :identifier="$page.article.permalink"></vue-disqus>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.article.title
    };
  }
};
</script>

<page-query>
  query Article ($path: String!) {
    article (path: $path) {
      id
      title
      date (format: "MMMM DD, YYYY")
      categories
      permalink
      content
    }
  }
</page-query>

<style>
#articleContent pre {
  @apply mt-10;
  @apply mb-10;
  @apply p-5;
}
#articleContent p {
  @apply mb-5;
}

#articleContent h2 {
  @apply text-3xl;
}

#articleContent h3 {
  @apply text-2xl;
}

#articleContent ol {
  @apply list-decimal;
  @apply ml-8;
}

#articleContent ul {
  @apply list-disc;
  @apply ml-8;
}

#articleContent iframe {
  @apply mx-auto;
}
</style>
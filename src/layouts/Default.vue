<template>
  <div class="layout">
    <SiteHeader />
    <slot />
  </div>
</template>

<script>
import SiteHeader from "~/components/SiteHeader.vue";
export default {
  computed: {
    titleTag() {
      return this.$route.name === "home" ? "h1" : "h6";
    }
  },
  components: {
    SiteHeader
  }
};
</script>
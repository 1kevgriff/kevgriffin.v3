<template>
  <div class="layout">
    <SiteHeader />
    <slot />
  </div>
</template>

<script>
import SiteHeader from "~/components/SiteHeader.vue";
export default {
  components: {
    SiteHeader
  }
};
</script>
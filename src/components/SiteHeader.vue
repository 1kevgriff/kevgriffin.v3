<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Kevin W. Griffin</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >Training</a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >Consulting</a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >Articles</a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >Speaking</a>
      </div>
    </div>
  </nav>
  <!-- <header class="container mx-auto">
      <h1>Kevin Griffin</h1>
      <g-link to="/categories">Articles</g-link>
      <g-link to="/speaking/">Speaking</g-link>
      <g-link to="/resume/">Resume</g-link>
  </header>-->
</template>

<script>
// nav stolen from https://tailwindcss.com/components/navigation/
export default {
  name: "SiteHeader"
};
</script>
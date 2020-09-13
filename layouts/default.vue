<template>
  <div>
    <header>
      <NavBar />
    </header>
    <Nuxt keep-alive />
    <ScrollToTopArrow />
    <Footer />
  </div>
</template>
<script>
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import ScrollToTopArrow from "~/components/ScrollToTopArrow";
export default {
  components: {
    NavBar,
    ScrollToTopArrow,
    Footer
  }
};
</script>
<style lang="scss">
@import "~/static/reset.css";
@import "~/assets/main.scss";
</style>

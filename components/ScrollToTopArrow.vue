<template>
  <div class="arrow" @click="scrollToTop()">
    <i class="fa fa-chevron-circle-up fa-4x"></i>
  </div>
</template>

<script>
export default {
  name: "ScrollToTopArrow",
  mounted() {
    const arrow = document.querySelector(".arrow");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        arrow.style.opacity = 1;
      } else {
        arrow.style.opacity = 0;
      }
    });
  },
  methods: {
    scrollToTop: function() {
      scrollTo(0, 0);
    }
  }
};
</script>

<style>
@import "./ScrollToTopArrow.scss";
</style>

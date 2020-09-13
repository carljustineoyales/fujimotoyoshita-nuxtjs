<template>
  <div class="cardslist">
    <div
      v-for="content in this.contents"
      :key="content.id"
      class="cardslist__items"
    >
      <HomeCards :content="content" />
      <!-- cardslist__items -->
    </div>
    <!-- cardslist -->
  </div>
</template>

<script>
import HomeCards from "@/components/HomeCards";
export default {
  name: "HomeCardsList",
  components: {
    HomeCards
  },
  props: {
    contents: { type: Array, required: true }
  }
};
</script>

<style lang="scss" scoped>
@import "@/components/HomeCardsList.scss";
</style>

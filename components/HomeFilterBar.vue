<template>
  <div class="filterbar">
    <ul class="filterbar__list">
      <li class="filterbar__items">
        <button class="filterbar__button" @click="toFilter('')">
          ALL
        </button>
      </li>
      <li class="filterbar__items">
        <button class="filterbar__button" @click="toFilter('ドラマ/映画')">
          ドラマ/映画
        </button>
      </li>
      <li class="filterbar__items">
        <button class="filterbar__button" @click="toFilter('FASHION')">
          FASHION
        </button>
      </li>
      <li class="filterbar__items">
        <button class="filterbar__button" @click="toFilter('CM')">
          CM
        </button>
      </li>
      <li class="filterbar__items">
        <button class="filterbar__button" @click="toFilter('OTHERS')">
          OTHERS
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeFilterBar",
  methods: {
    toFilter: function(category) {
      this.$emit("filterCategory", category);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/components/HomeFilterBar.scss";
</style>

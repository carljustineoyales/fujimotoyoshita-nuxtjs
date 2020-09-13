<template>
  <div class="cards">
    <div class="cards__img" :class="{ 'black-bg': this.content['black-bg'] }">
      <a
        v-if="this.content['portfolio-image']"
        :href="this.content['featured-image'].url"
        data-fancybox="images"
      >
        <img
          v-lazy-load
          :data-src="this.content['featured-image'].url"
          :alt="this.content['title']"
          width="100%"
          height="100%"
        />
        <div class="cards__text">
          <h1 class="cards__title" v-html="this.content['title']"></h1>
          <p class="cards__desc" v-html="this.content['description']"></p>
        </div>
      </a>
      <a
        v-else-if="this.content['embedded-media']"
        :href="this.content['embedded-media']"
        data-fancybox="video"
      >
        <img
          v-lazy-load
          :data-src="this.content['featured-image'].url"
          :alt="this.content['title']"
          width="100%"
          height="100%"
        />
        <div class="cards__text">
          <h1 class="cards__title" v-html="this.content['title']"></h1>
          <p class="cards__desc" v-html="this.content['description']"></p>
        </div>
      </a>
      <a
        v-else-if="this.content['media-link']"
        :href="this.content['media-link']"
        target="_blank"
      >
        <img
          v-lazy-load
          :data-src="this.content['featured-image'].url"
          :alt="this.content['title']"
          width="100%"
          height="100%"
        />
        <div class="cards__text">
          <h1 class="cards__title" v-html="this.content['title']"></h1>
          <p class="cards__desc" v-html="this.content['description']"></p>
        </div>
      </a>

      <a
        v-else
        :href="this.content['featured-image'].url"
        data-fancybox="images"
      >
        <img
          v-lazy-load
          :data-src="this.content['featured-image'].url"
          :alt="this.content['title']"
          width="100%"
          height="100%"
        />
        <div class="cards__text">
          <h1 class="cards__title" v-html="this.content['title']"></h1>
          <p class="cards__desc" v-html="this.content['description']"></p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: "HomeCards",
  props: {
    content: { type: Object, required: true }
  },
  mounted() {
    this.br2nl();
  },
  methods: {
    br2nl: function() {
      if (this.content["description"] != null) {
        this.content["description"] = this.content["description"].replace(
          /\n/g,
          "<br>"
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/components/HomeCards.scss";
</style>

<template>
  <div class="home">
    <HomeFilterBar @filterCategory="updateCategory" />
    <HomeCardsList :contents="filteredContent" />
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
// @ is an alias to /src
import HomeFilterBar from "@/components/HomeFilterBar";
import HomeCardsList from "@/components/HomeCardsList";
import axios from "axios";
export default {
  components: {
    HomeFilterBar,
    HomeCardsList
  },
  data() {
    return {
      contents: [],

      category: ""
    };
  },
  computed: {
    filteredContent() {
      return this.contents.filter(content => {
        return content.category[0].match(this.category);
      });
    }
  },
  mounted() {
    axios({
      method: "get",
      url: "https://fujimotoyoshitaka.microcms.io/api/v1/portfolio?limit=999",
      headers: { "X-API-KEY": "9b0adeca-3d0f-4583-b53c-c54c2718ba98" }
    })
      .then(res => {
        res.data.contents.map(content => this.contents.push(content));
      })
      .catch(err => console.log(err));
  },
  methods: {
    updateCategory: function(category) {
      this.category = category;
    }
  }
};
</script>

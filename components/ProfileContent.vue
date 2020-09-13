<template>
  <div class="profile">
    <div
      v-for="content in contents"
      :key="content.id"
      class="profile__container"
    >
      <div class="profile__content">
        <div class="profile__artistInfo">
          <h1 class="profile__title">
            Profile
          </h1>
          <div class="profile__artist">
            <div class="profile__img">
              <img
                v-if="content['profile-image'].url"
                v-lazy-load
                :data-src="content['profile-image'].url"
                :alt="content['artist-name']"
                width="100%"
                height="100%"
              />
              <img
                v-else
                src="https://via.placeholder.com/300"
                :alt="content['artist-name']"
                width="100%"
                height="100%"
              />
              <!-- /profile__img -->
            </div>
            <div class="profile__desc">
              <div class="profile__paragraph">
                <strong>{{ content["artist-name"] }}</strong>
                <br />
                <pre>{{ content["work-role"] }}</pre>
                <br />
                <pre v-html="content['artist-description']"></pre>
              </div>
              <!-- /profile__desc -->
            </div>
            <!-- /profile__artist -->
          </div>
        </div>
        <div class="profile__artistWorks">
          <h1 class="profile__title">
            他の主な作品
          </h1>
          <div class="profile__works">
            <h2>
              {{ content["work01-name"] }}
            </h2>
            <p>
              {{ content["cm-details"] }}
            </p>
            <!-- /profile__works -->
          </div>
          <div class="profile__works">
            <h2>
              {{ content["work02-name"] }}
            </h2>
            <p>
              {{ content["magazines-details"] }}
            </p>
            <!-- /profile__works -->
          </div>
        </div>

        <!-- /profile__content -->
      </div>
      <!-- /profile__container -->
    </div>
    <!-- /profile -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ProfileContent",
  data() {
    return {
      contents: []
    };
  },
  mounted() {
    axios({
      method: "get",
      url: "https://fujimotoyoshitaka.microcms.io/api/v1/profile",
      headers: { "X-API-KEY": "9b0adeca-3d0f-4583-b53c-c54c2718ba98" }
    })
      .then(res =>
        res.data.contents.map(content => {
          this.contents.push(content);
        })
      )
      .catch(err => console.log(err));
  }
};
</script>

<style lang="scss" scoped>
@import "./ProfileContent.scss";
</style>

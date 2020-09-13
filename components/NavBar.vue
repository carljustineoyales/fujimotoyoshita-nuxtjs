/* eslint-disable vue/this-in-template */
<template>
  <nav class="nav">
    <div class="nav__logo">
      <nuxt-link to="/">
        フジモトヨシタカ
        <span>
          Yoshitaka Fujimoto
        </span>
      </nuxt-link>
      <!-- nav__logo -->
    </div>
    <div class="nav__button" @click="showMenu()">
      <i v-if="this.hideMenu" class="fa fa-bars"></i>
      <i v-else class="fa fa-times"></i>
      <!-- nav__button -->
    </div>
    <ul class="nav__list nav__list--fullpage">
      <li class="nav__items" @click="menuItemClicked()">
        <nuxt-link to="/" class="nav__link">
          Home
        </nuxt-link>
        <!-- nav__items -->
      </li>
      <li class="nav__items" @click="menuItemClicked()">
        <nuxt-link to="/profile" class="nav__link">
          Profile
        </nuxt-link>
        <!-- nav__items -->
      </li>
      <li class="nav__items">
        <a href="mailto:info@fujimotoyoshitaka.com" class="nav__link">
          Contact
        </a>
        <!-- nav__items -->
      </li>
      <!-- nav__list -->
    </ul>
    <!-- nav -->
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      hideMenu: true
    };
  },
  methods: {
    showMenu: function() {
      this.hideMenu = !this.hideMenu;

      this.toHideMenu();
    },
    menuItemClicked: function() {
      this.hideMenu = !this.hideMenu;
      this.toHideMenu();
    },
    toHideMenu: function() {
      const menu = document.querySelector(".nav__list");
      if (this.hideMenu) {
        menu.style.visibility = "hidden";
        menu.style.opacity = 0;
      } else {
        menu.style.visibility = "visible";
        menu.style.opacity = 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./NavBar.scss";
</style>

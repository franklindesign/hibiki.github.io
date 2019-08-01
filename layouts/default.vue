 <!-- Landing Page / Layout -->

<template>
  <v-app class="appBg">
    <!-- Begin Nav Desktop Menu -->
    <v-toolbar fixed clipped class="black">
      <div class="mt-2">
        <nuxt-link to="/">
          <img
            :src="logo"
            height="40%"
            width="40%"
            alt="Hibiki Sushi & Bar Logo"
            aria-label="Hibiki Sushi & Bar Logo"
          />
        </nuxt-link>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        absolute
        fab
        right
        bottom
        color="#C62828"
        class="mr-3 hidden-md-and-up"
        aria-label="Menu"
        to="/menu"
      >Menu</v-btn>
      <v-toolbar-items class="hidden-sm-and-down mr-5 pr-5">
        <v-btn
          text
          active-class
          router
          to="/"
          slot="activator"
          aria-label="Go back Home"
          class="mr-2"
        >
          <v-icon class="mr-2" aria-label="Home">home</v-icon>Home
        </v-btn>
        <v-btn text active-class router to="/menu" aria-label="Go to Menu" class="mr-3">
          <v-icon class="mr-2" aria-label="Menu">view_module</v-icon>Menu
        </v-btn>
        <div class="mt-3">
          <v-btn rounded outlined to="/emails" aria-label="Sign up for Hibiki Emails">
            <v-icon class="mr-2" aria-label="Sign up to Emails">email</v-icon>Sign up for Hibiki emails
          </v-btn>
        </div>
      </v-toolbar-items>
    </v-toolbar>

    <!-- End Nav Desktop Menu -->
    <!-- Begin Nuxt View with Animation transition-->
    <transition
      name="pageTransition"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <nuxt />
    </transition>
    <!-- End Nuxt View -->

    <HibikiFooter />
  </v-app>
</template>

<script>
import HibikiFooter from "~/components/HibikiFooter.vue";

export default {
  components: { HibikiFooter },
  scrollToTop: true,
  data() {
    return {
      dialog: false,
      logo: require("~/assets/SVG/logo.svg")
    };
  }
};
</script>
 
<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";

.navDrawerBg {
  background-color: hsla(0, 1%, 14%, 0.8);
}

.appBg {
  background: #111111;
}
</style>


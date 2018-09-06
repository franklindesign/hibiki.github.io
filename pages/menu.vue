<template>
  <v-content class="contentBG">
    <v-container>
      <menuHeader />
      <transition>
        <nuxt-child />
      </transition>
    </v-container>
  </v-content>
</template>

<script>
import menuHeader from "~/components/menuHeader.vue";

export default {
  components: {
    menuHeader
  },
  scrollToTop: true
};
</script>

<style scoped>
.contentBG {
  background: #111111;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translateY(40px);
}
</style>
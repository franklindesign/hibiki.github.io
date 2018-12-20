<template>
  <div>
    <section class="hero">
      <billboard/>
      <!-- <anniversary/> -->
      <!-- <carousel/> -->
    </section>
    <section>
      <!-- <aycd /> -->
      <signup/>
    </section>
    <section>
      <prices/>
      <mostpopular/>
    </section>
    <section class="customers">
      <customers/>
    </section>
    <section class="delivery">
      <delivery/>
    </section>
  </div>
</template>

<script>
import billboard from "~/components/billboard.vue";
// import carousel from "~/components/carousel.vue";
import mostpopular from "~/components/mostpopular.vue";
// import mostordered from "~/components/mostordered.vue";
import customers from "~/components/customers.vue";
import delivery from "~/components/delivery.vue";
import signup from "~/components/signup.vue";
// import anniversary from "~/components/anniversary.vue";
// import aycd from "~/components/aycd.vue";
// import specialoffers from '~/components/specialoffers.vue'
import prices from "~/components/prices.vue";

export default {
  components: {
    billboard,
    // carousel,
    mostpopular,
    // mostordered,
    customers,
    delivery,
    signup,
    // anniversary,
    prices
    // aycd
    // specialoffers
  }
};
</script>

<style lang="stylus">
.fade {
  &-enter-active, &-leave-active, &-leave-to {
    transition: 1s ease-out;
    position: absolute;
    top: 0;
    left: 0;
  }

  &-enter, &-leave, &-leave-to {
    opacity: 0;
  }
}

.customers {
  background-color: #f0f0f0;
  height: auto;
}

.delivery {
  background-color: #FFD700;
  height: auto;
}

.hero {
  margin-bottom: 50px;
}
</style>


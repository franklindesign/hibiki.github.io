<template>
  <div>
    <section class="hero">
      <carousel />
    </section>
    <section>
      <signup />
    </section>
    <section>
      <mostordered />
    </section>
    <section class="customers">
      <customers />
    </section>
    <section class="delivery">
      <delivery />
    </section>
  </div>
</template>

<script>
import carousel from "~/components/carousel.vue";
import mostordered from "~/components/mostordered.vue";
import customers from "~/components/customers.vue";
import delivery from "~/components/delivery.vue";
import signup from "~/components/signup.vue";

export default {
  components: {
    signup,
    carousel,
    mostordered,
    customers,
    delivery
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active,
.fade-leave-to {
  transition: 1s ease-out;
  position: absolute;
  top: 0;
  left: 0;
}

.fade-enter,
.fade-leave,
.fade-leave-to {
  opacity: 0;
}

.customers {
  background-color: #f0f0f0;
  height: auto;
}

.delivery {
  background-color: #ffffff;
  height: auto;
}

.hero {
  margin-bottom: 25px;
}
</style>


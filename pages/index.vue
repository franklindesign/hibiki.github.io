<template>
<div>
  <section class="hero">
    <billboard />
  </section>
  <section>
    <signup />
  </section>
  <section>
    <!-- <specialoffers /> -->
    <mostpopular />
    <mostordered />
  </section>
  <section class="customers">
    <customers />
  </section>
  <section class="delivery">
    <delivery/>
  </section>
</div>

</template>

<script>
import billboard from '~/components/billboard.vue'
import mostpopular from '~/components/mostpopular.vue'
import mostordered from '~/components/mostordered.vue'
import customers from '~/components/customers.vue'
import delivery from '~/components/delivery.vue'
import signup from '~/components/signup.vue'
// import specialoffers from '~/components/specialoffers.vue'

export default {
  
  components: {
    billboard,
    mostpopular,
    mostordered,
    customers,
    delivery,
    signup
    // specialoffers
  }
}


</script>
<style lang="stylus">
    .fade
      &-enter-active, &-leave-active, &-leave-to
        transition: 1s ease-out
        position: absolute
        top: 0
        left: 0

      &-enter, &-leave, &-leave-to
        opacity: 0

    .customers
      background-color: #f0f0f0
      height: auto

    .delivery 
      background-color: gold 
      height: auto

    .hero 
      margin-bottom: 50px
 
</style>


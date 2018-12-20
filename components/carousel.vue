<template>
  <div>
    <carousel
      :perPageCustom="[[480, 1], [768, 1]]"
      :autoplay="true"
      :paginationActiveColor="`#ffffff`"
      :paginationColor="`#303030`"
    >
      <slide class="slide">
        <img :src="item1">
      </slide>
      <slide class="slide slide2">2</slide>
      <slide class="slide slide3">3</slide>
      <slide class="slide slide4">4</slide>
    </carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item1: require("~/assets/carousel/carousel_rainbow_roll.jpg")
    };
  }
};
</script>

<style scoped>
.slide {
  max-width: 100%;
  height: auto;
}
.slide1 {
  background-color: red;
}
.slide2 {
  background-color: pink;
}
.slide3 {
  background-color: blue;
}
.slide4 {
  background-color: purple;
}
</style>
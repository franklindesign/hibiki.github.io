<template>
  <div>
    <div class="grid-container">
      <div class="grid-item">
        <img :src="image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require("~/assets/promo/worldSeriesRally.png")
    };
  }
};
</script>

<style scoped>
.grid-container {
  background-color: #ffffff;
}
.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
}
img {
  width: 50%;
}

@media only screen and (max-width: 480px) {
  .grid-item {
    padding-left: 10px;
    padding-right: 10px;
  }
  img {
    width: 100%;
  }
}
</style>
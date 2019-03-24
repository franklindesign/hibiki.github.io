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
      image: require("~/static/images/hiring.png")
    };
  }
};
</script>

<style scoped>
.grid-container {
  background-color: #210032;
}
.grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 25%;
  margin: 25px;
}

@media only screen and (max-width: 480px) {
  .grid-item {
    padding-left: 10px;
    padding-right: 10px;
  }
  img {
    width: 80%;
  }
}
</style>
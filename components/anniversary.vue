<template>
  <div>
    <div class="billboard">
    <v-img :src="billboard.src"></v-img>
    <h1 class="mt-5 greeting">It's our 10 Year Anniversary!</h1>
    <p class="mt-3 greeting">To celebrate our 10th year serving All-You-Can-Eat in Santa Clarita Valley, we've chosen over 20 customer favorites in a limited AYCE menu starting at $17. Pick as many items you want for lunch or dinner!</p>
    </div>
    <div class="aycdbeer">
      <v-img :src="aycd.src"></v-img>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      billboard: {
        src: require("static/images/anniversary/anniversary-billboard.png")
      },
      aycd: {
        src: require("static/images/anniversary/aycd_695.png")
      }
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Cormorant+Garamond:600");
@media (min-width: 576px) {
  .billboard {
    width: 25%;
    margin: auto;
    margin-top: 100px;
  }
  .aycdbeer {
    margin: auto;
    margin-top: 100px;
  }
}

@media (max-width: 480px) {
  .billboard {
    width: 90%;
    margin: auto;
    margin-top: 100px;
  }
  .aycdbeer {
    width: 80%;
    margin: auto;
    margin-top: 100px;
  }
}
@media (min-width: 768px) {
  .billboard {
    width: 550px;
  }
  .aycdbeer {
    width: 350px;
  }
}
.greeting {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.8em;
}
</style>
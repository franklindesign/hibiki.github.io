<template>
  <v-container>
    <v-layout wrap row ma-3>
      <v-flex xs12 mb-3>
        <div class="special">This Week's Special</div>
        
      </v-flex>
      <v-flex xs12 sm4 lg4 xl4>
        <v-img :src="logo.src"></v-img>
      </v-flex>
      <v-flex xs12 sm4 lg4 xl4>
        <div class="price">
          <v-img :src="price.src" ></v-img>
        </div>
         
      </v-flex>
      <v-flex xs12 sm4 lg4 xl4>
        <v-img :src="beer.src" height="150" contain></v-img>
      </v-flex>
      <v-flex xs12>
        <div class="text">
          <p>Valid price thru Sept 26. AYCE Customers Only.</p>
        </div>  
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      beer: {
        src: require("static/images/aycdSpecial/AYCDBeer.png")
      },
      price: {
        src: require("static/images/aycdSpecial/aycdSpecialPrice.png")
      },
      logo: {
        src: require("static/images/aycdSpecial/AYCDSapporo.png")
      }
    };
  }
};
</script>

<style scoped>
.special {
  text-align: center;
  margin: auto;
  width: 50%;
  padding: 1em;
  border: 1px solid white;
}
.price {
  margin-left: 25px;
  margin-top: 20px;
  width: 100%;
}
.text {
  text-align: center;
}
</style>


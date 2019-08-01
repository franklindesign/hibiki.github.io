<template>
  <div>
    <h1 class="cursive ma-2">Wine</h1>
    <h4 class="caption ma-2">Ask our servers for item availability. For Legal Drinking Age Only+</h4>
    <v-layout wrap row>
      <v-flex v-bind="{ [`lg${card.flex}`]: true }" v-for="card in cards" :key="card.title" md4 sm6>
        <v-card style="margin: 5px;" class="itemHover cardBack">
          <v-img :src="card.src" height="300px">
            <div class="pricePosition" v-text="card.price"></div>
          </v-img>
          <v-card-title primary-title>
            <div class="cardTitleAlacarte cursive mb-2" v-text="card.title"></div>
            <p class="caption">{{card.itemDescription}}</p>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Glass of house red or white wine",
          itemDescription: "",
          src: require("static/images/wine/glassredwine.jpg"),
          price: "6.00",
          flex: 3
        },

        {
          title: "Coastal Estates BV Chardonnay",
          itemDescription:
            "Classic varietal charm, delivering fresh pear and tropical fruit woven together with toasty oak spices. The palate is supple and round, evolving in layers of pineapple, red apple and vanilla. Lees stirring and partial malolactic fermentation lend depth and texture to the vibrant flavors. Juicy and long, the wine shows lovely grace and sensibility that make this a favorite from start to finish.",
          src: require("static/images/wine/bvcoastalestates_chardonnay.jpg"),
          price: "15.00",
          flex: 3
        },

        {
          title: "The Naked Grape Pinot Noir",
          itemDescription:
            "A SOFT CONFIDENCE THAT HITS THE PERFECT NOTE. Our Pinot Noir is a soft, smooth red that's full of red cherry and raspberry aromas. Pair it with anything and this varietal will complement and enhance, then leave you with the perfect note.",
          src: require("static/images/wine/thenakedgrape_pinotnoir.jpg"),
          price: "15.00",
          flex: 3
        },
        {
          title: "Gallo Family Vineyards Merlot",
          itemDescription:
            "Rich, lush and structured, the 2014 vintage displays intense aromas flavors of blackberry, blackcurrant, cassis and crushed violet. This wine is velvety with a smooth, lingering finish of toasty baking spices, vanilla and cocoa.",
          src: require("static/images/wine/gallofamily_merlot.jpg"),
          price: "15.00",
          flex: 3
        },
        {
          title: "Bay Bridge Vineyards Merlot",
          itemDescription:
            "This is one of the most popular wines from Central Valley. This wine has been becoming increasingly popular over the past year.",
          src: require("static/images/wine/baybridge_merlot.jpg"),
          price: "15.00",
          flex: 3
        },
        {
          title: "Barefoot Rose",
          itemDescription:
            "Crush on blush! Rosé is Barefoot's love letter to the pink-tinged classic. Juicy cherries mingle with cool watermelon in this sweet Rosé wine. Sweet lime and a hint of fizz join in for pure magic under sunny skies or starry nights. ",
          src: require("static/images/wine/barefoot_rose.jpg"),
          price: "15.00",
          flex: 3
        }
      ]
    };
  }
};
</script>

<style scoped>
.cardBack {
  background: rgb(29, 29, 29);
}
</style>


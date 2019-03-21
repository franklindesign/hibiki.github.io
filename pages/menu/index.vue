<template>
  <div>
    <div class="centerTitle480 mt-5">
      <h1 class="cursive ma-2">Hibiki Menu</h1>
    </div>

    <v-layout wrap row>
      <v-flex xs12 sm6 md4 lg4 xl4 v-for="category in categories" :key="category.title">
        <v-card
          color="#1d1d1d"
          style="margin: 5px;"
          class="white--text itemHover"
          onMouseOver="this.style.backgroundColor='#EF5350'"
          onMouseOut="this.style.backgroundColor='#1d1d1d'"
          :to="`${category.link}`"
        >
          <v-layout row>
            <v-flex xs6>
              <v-card-title primary-title>
                <div>
                  <div class="headline">{{category.title}}</div>
                </div>
              </v-card-title>
            </v-flex>
            <v-flex xs6 ma-2>
              <v-img :src="category.src" height="125px" contain></v-img>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  scrollToTop: true,

  data() {
    return {
      categories: [
        {
          title: "Pricing",
          src: " ",
          color: "grey darken-3",
          link: "/menu/pricing"
        },
        {
          title: "All Day Special Bento",
          src: require("static/images/bento/medamabento.jpg"),
          color: "grey darken-4",
          link: "/menu/bento"
        },
        {
          title: "Fresh Rolls",
          src: require("static/images/freshrolls/rainbowroll.jpg"),
          color: "FFE0B2",
          link: "/menu/freshrolls"
        },
        {
          title: "Cooked Rolls",
          src: require("static/images/cookedrolls/snowroll.jpg"),
          color: "deep-orange darken-2",
          link: "/menu/cookedrolls"
        },
        {
          title: "Tempura Rolls",
          src: require("static/images/tempurarolls/vegasroll.jpg"),
          color: "FFC400",
          link: "/menu/tempurarolls"
        },
        {
          title: "Regular Rolls",
          src: "",
          color: "red lighten-1",
          link: "/menu/sushirolls"
        },
        {
          title: "Sushi",
          src: "",
          color: "red darken-1",
          link: "/menu/sushi"
        },
        {
          title: "Sushi Combo",
          src: require("static/images/sushi/lucky7.jpg"),
          color: "red darken-2",
          link: "/menu/sashimicombo"
        },
        {
          title: "Vegetable Appetizers",
          src: require("static/images/vegetableappetizers/edamame.jpg"),
          color: "green",
          link: "/menu/vegetableappetizers"
        },
        {
          title: "Seafood Appetizers",
          src: require("static/images/seafoodappetizers/bakedgreenmussels.jpg"),
          color: "deep-orange accent-1",
          link: "/menu/seafoodappetizers"
        },
        {
          title: "Meat Appetizers",
          src: require("static/images/meatappetizers/gyoza.jpg"),
          color: "deep-orange accent-2",
          link: "/menu/meatappetizers"
        },
        {
          title: "Salads",
          src: require("static/images/salads/seaweedsalad.jpg"),
          color: "green darken-4",
          link: "/menu/salads"
        },
        {
          title: "Udon Soup & Ramen",
          src: require("static/images/udonsoupramen/tempuraudonsoup.jpg"),
          color: "yellow darken-1",
          link: "/menu/udonsoupramen"
        },
        {
          title: "Stir Fried Noodles",
          src: require("static/images/stirfriednoodles/beefyakiudonsoba.jpg"),
          color: "orange accent-4",
          link: "/menu/stirfriednoodles"
        },
        {
          title: "Miso Soup & Rice",
          src: require("static/images/misosouprice/misosoup.jpg"),
          color: "orange accent-3",
          link: "/menu/misosouprice"
        },
        {
          title: "Entree",
          src: require("static/images/entree/chickenteriyaki.jpg"),
          color: "deep-orange",
          link: "/menu/entree"
        },
        {
          title: "Desserts",
          src: require("static/images/desserts/mochiicecream.jpg"),
          color: "pink lighten-2",
          link: "/menu/desserts"
        },
        {
          title: "Beverages",
          src: require("static/images/beverages/ramune.jpg"),
          color: "pink",
          link: "/menu/beverages"
        },
        {
          title: "Beer",
          src: require("static/images/beer/sapporopremiumbeer.jpg"),
          color: "yellow darken-4",
          link: "/menu/beer"
        },
        {
          title: "Sake",
          src: require("static/images/sake/katana.jpg"),
          color: "brown lighten-4",
          link: "/menu/sake"
        },
        {
          title: "Wine",
          src: require("static/images/wine/thenakedgrape_pinotnoir.jpg"),
          color: "pink darken-4",
          link: "/menu/wine"
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

 
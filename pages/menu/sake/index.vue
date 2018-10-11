<template>
  <div>
    <h1 class="cursive ma-2">Japanese Premium Sake</h1>
    <h4 class="caption ma-2">Ask our servers for item availability. For Legal Drinking Age Only+</h4>
    <v-layout wrap row>
      <v-flex v-bind="{ [`lg${card.flex}`]: true }" v-for="card in cards" :key="card.title" md4 sm6>
        <v-card style="margin: 5px;" class="itemHover cardBack">
          <v-card-media :src="card.src" height="300px">
            <div class="pricePosition" v-text="card.price"></div>
            <div class="bottlesize" v-text="card.bottlesize"></div>
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="cardTitleAlacarte cursive mb-3" v-text="card.title"></div>
              <div v-text="card.itemDescription"></div>
              <div class="sakemetervalue">
                <span class="smv">Alc. {{card.alcohol}} </span> <br>
                <span class="smv">Sake Meter Value: {{card.sakemeter}}</span>
              </div>
            </div>
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
          title: "Large Hot Sake",
          itemDescription: "Warm Sake",
          src: require("static/images/sake/largehotsake.jpg"),
          price: "4.95",
          bottlesize: "~180ml",
          sakemeter: "About +3",
          alcohol: "~10%",
          flex: 3
        },
        {
          title: "Homare Strawberry Sake",
          itemDescription:
            "Experience a perfect balance of sake liqueur flavours with Homare’s strawberry nigori sake. This sake beautifully combines the mellow, sweet, and full-bodied flavour of unfiltered nigori sake with the refreshingly tangy and sweet flavour of strawberries for a sake liqueur that will appeal to fans of sweet and fruity drinks alike. Enjoy on the rocks or with milk, and be sure to shake well before opening.",
          src: require("static/images/sake/homarestrawberrysake.jpg"),
          price: "12.95",
          bottlesize: "300ml",
          sakemeter: "-100 (very sweet)",
          alcohol: "7%",
          flex: 3
        },
        {
          title: "Shushu Sawanotsuru Sake",
          itemDescription:
            "The light and gentle easy taste goes well with various dishes as well as Japanese food well.",
          src: require("static/images/sake/shushu_sawanotsuru.jpg"),
          price: "12.95",
          bottlesize: "180ml",
          sakemeter: "-10",
          alcohol: "10.5%",
          flex: 3
        },
        {
          title: "Nigori Matcha / Coconut Sake",
          itemDescription:
            "Kyoto is famous for fine Matcha and Sake. Enjoy sweet and bitter taste!",
          src: require("static/images/sake/nigorimatchacoconut.jpg"),
          price: "12.95",
          bottlesize: "300ml",
          sakemeter: "-3.5 (slightly sweet)",
          alcohol: "9.5%",
          flex: 3
        },
        {
          title: "Kizakura Piano Sparkling Sake",
          itemDescription: "Feel fresh flavor like apple and pear.",
          src: require("static/images/sake/KizakuraPianoSparklingSake.jpg"),
          price: "13.95",
          bottlesize: "300ml",
          sakemeter: "-50 (sweet)",
          alcohol: "5%",
          flex: 3
        },
        {
          title: "Crystal Lake PLUM Wine",
          itemDescription:
            "Natural Japanese “Ume” Plum Flavor. Crystal Lake Plum is the refreshing alternative to ordinary grape wine. Using natural “ume” plum extract imported from Japan, this wine finishes with a hint of naturally sweet plum flavor. A perfect pairing for all Asian cuisine. It can also be enjoyed over ice as an aperitif.",
          src: require("static/images/sake/crystalplumwine.jpg"),
          price: "19.95",
          bottlesize: "750ml",
          sakemeter: "-10",
          alcohol: "12%",
          flex: 3
        },
        {
          title: "Kukai Nigori Mango Sake",
          itemDescription:
            "It is unfiltered sake with a fresh and juicy mango which you can enjoy sake and mango simultaneously.",
          src: require("static/images/sake/nigorimangosake.jpg"),
          price: "12.95",
          bottlesize: "300ml",
          sakemeter: "-20",
          alcohol: "8%",
          flex: 3
        },

        {
          title: "Hakutsuru Draft Sake",
          itemDescription:
            "Draft Sake gains its fresh, refined taste from being brewed and aged for 1 month in a cool state at about 41 F before bottling. Characterized by its light, fresh and smooth taste. Slightly Dry. Enjoy this Sake chilled.",
          src: require("static/images/sake/draftsake.jpg"),
          price: "4.95",
          bottlesize: "180ml",
          sakemeter: "+4",
          alcohol: "15.5%",
          flex: 3
        },

        {
          title: "Katana Hananomai Extra-Dry Junmai Ginjo Sake",
          itemDescription:
            "Clear with a nickel cast. Aromas of coconut yogurt and sourdough bread pudding with soft, dryish light-to-medium body and a pear, jicama, rice paper, and peppered nut accented finish. Different; try with mushroom tempura.",
          src: require("static/images/sake/katana.jpg"),
          price: "9.95",
          bottlesize: "180ml",
          sakemeter: "+7 (dry)",
          alcohol: "15.5%",
          flex: 3
        },
        {
          title: "Shochikubai Extra Dry",
          itemDescription:
            "Extremely dry sake. Its clean and crisp flavor pairs well with a wide variety of foods. Character: Very dry, clean and crisp flavor",
          src: require("static/images/sake/shochikubaiextradry.jpg"),
          price: "12.95",
          bottlesize: "375ml",
          sakemeter: "+7 (very dry)",
          alcohol: "15.5%",
          flex: 3
        },
        {
          title: "Shochikubai Nigori",
          itemDescription:
            "Nigori is the way sake first appeared when it was brewed for the Imperial Court in Kyoto as well as for most of its 2,000-year history. It is lightly-filtered and the sweetest of all our types of sake. It is especially delicious with very spicy foods. The bottle should be shaken each time before pouring due to the high rice content that settles in the bottom of the bottle. Character: Bold and sweet. Rich and robust flavor with distinctive rice savor",
          src: require("static/images/sake/shochikubainigori.jpg"),
          price: "12.95",
          bottlesize: "375ml",
          sakemeter: "-20 (very sweet)",
          alcohol: "15.5%",
          flex: 3
        },
        {
          title: "Ozeki Hana Awaka",
          itemDescription:
            "Ozeki Hana Awaka (Sparkling Flower) is a refreshing, fizzy, low-alcohol sake. This light, pleasant bubbly sake is just perfect as brunch and after-work drinks. Ozeki Hana Awaka has a mild sweetness and acidity. Matches perfectly with desserts.",
          src: require("static/images/sake/ozekihanaawaka.jpg"),
          price: "13.95",
          bottlesize: "250ml",
          sakemeter: "-60 (distinctively sweet)",
          alcohol: "15.5%",
          flex: 3
        },
        {
          title: "Hakushika Hana Kohaku Plum",
          itemDescription:
            "This unique sake is made with a blend of junmai sake and Japanese plum extract. The plum extract is carefully derived from the succulent nanko variety plum produced in Wakayama Prefecture, the center of fine Japanese plum cultivation. Mildly sweet with a pleasant citrus-like acidity, Hana-Kohaku is a refreshing sake excellent on its own or paired with special dishes.",
          src: require("static/images/sake/hakushikahanakohakuplum.jpg"),
          price: "12.95",
          bottlesize: "250ml",
          sakemeter: "-57 (distinctively sweet)",
          alcohol: "15.5%",
          flex: 3
        },
        {
          title: "Hakutsuru Organic Junmai Sake",
          itemDescription:
            "Using premium Californian grown rice, Hakutsuru has created a masterfully brewed sake that is sharp, dry and light-bodied. From start to finish all ingredients and processes are USDA certified organic. Enjoyment: Raw sashimi, agedashi tofu brushed with soy sauce and mirin, cucumber and pineapple salad",
          src: require("static/images/sake/hakutsuruorganicsake.jpg"),
          price: "12.95",
          bottlesize: "250ml",
          sakemeter: "+5",
          alcohol: "15.5%",
          flex: 3
        },
        {
          title: 'Hakutsuru Sayuri "Little Lilly" ',
          itemDescription:
            "This unfiltered sake has a very light nose filled with cream, cherry blossom, and white grape elements. “Sayuri” is a very special Nigori – it is not flashy and not simple – just clean and easy with a semi-sweet appearance and very smooth finish. There is a watery softness that is hard to explain amongst all of the Nigori qualities, but it is not watery! Light and creamy with subtle fruit tones and an overall “milkiness.” If you like it light and easy this brew is for you!",
          src: require("static/images/sake/sayurisake.jpg"),
          price: "13.95",
          bottlesize: "250ml",
          sakemeter: "-11",
          alcohol: "15.5%",
          flex: 3
        },
        {
          title: "SHO CHIKU BAI Nigori Cremè De Sake",
          itemDescription:
            "NIGORI is lightly-filtered and the sweetest of all our types of sake. It is especially delicious with very spicy foods. The bottle should be shaken each time before pouring due to the high rice content that settles in the bottom of the bottle. Nigori Crème de Sake tastes slightly drier than our Nigori Silky Mild. Character: Bold and sweet. Rich and robust flavor with distinctive rice savor",
          src: require("static/images/sake/nigoricremedesake.jpg"),
          price: "13.95",
          bottlesize: "300ml",
          sakemeter: "-15",
          alcohol: "15.5%",
          flex: 3
        },
        {
          title: "Yaegaki Kurobin Black Bottle",
          itemDescription:
            "Pale white gold color. Fruity aromas and flavors of Asian pear, buttermilk, honeyed nuts, and coconut water with a silky, bright, dry-yet-fruity medium body and a smooth, delightful, breezy apple, starfruit, and water chestnut finish. A savory and nicely structured sake that will go great with tempura.",
          src: require("static/images/sake/yaegakiblackbottle.jpg"),
          price: "16.95",
          bottlesize: "300ml",
          sakemeter: "-12",
          alcohol: "14.9%",
          flex: 3
        },
        {
          title: "Kurosawa Junmai Kimoto",
          itemDescription:
            "Clear silvery straw color. Muted, spicy aromas of banana spice cookie, coconut custard, and green pineapple husk with a velvety, crisp, dry-yet-fruity medium body and a warming, subtle, medium-long salted apple, coconut water, and umami finish. A lively and attractive sake that will cover a lot of bases.",
          src: require("static/images/sake/kurosawajunmaikimoto.jpg"),
          price: "23.95",
          bottlesize: "250ml",
          sakemeter: "+2 (dry)",
          alcohol: "15.5%",
          flex: 3
        },
        {
          title: "Japan Prestige Sake Wakatake Onikoroshi Daiginjo",
          itemDescription:
            "Alluring sake with a silky texture, deep taste, and slight sweetness. Elegant fruity aromas and superb acidity. Serve chilled.",
          src: require("static/images/sake/wakatake.jpg"),
          price: "88.95",
          bottlesize: "720ml",
          sakemeter: "+3 (dry)",
          alcohol: "15.5%",
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

.sakemetervalue {
  position: inherit;
  bottom: 8px;
  left: 16px;
  background: rgb(20, 20, 20);
  padding: 5px;
  margin-top: 10px;
}

.smv {
  font-size: 12px;
}

.alc {
  margin-top: 10px;
}

.bottlesize {
  position: absolute;
  bottom: 8px;
  left: 16px;
  border: 1px solid #000000;
  border-radius: 25px;
  color: #000000;
  padding: 4px;
  font-size: 12px;
  background: #ffffff;
}
</style>


<template>
  <div>
    <h1 class="cursive ma-2">Japanese Beer</h1>
    <h4 class="caption ma-2">Ask our servers for item availability. For Legal Drinking Age Only+</h4>
        <v-flex xs12 md12 sm12 lg12>
          <v-card-media
            contain
            height="200px"
            :src="aycdBeer.src"
            class="mt-4 mb-4"
          >
          </v-card-media>
  </v-flex>
    <v-layout wrap row>
  
      <v-flex v-bind="{ [`lg${card.flex}`]: true }"
                  v-for="card in cards"
                  :key="card.title"
                  md4
                  sm6
                  >
        <v-card style="margin: 5px; height: 600px;" class="itemHover cardBack">
          <v-card-media 
              :src="card.src"
              height="300px"
              >
              <img :src="card.logosrc" class="beerLogo">

              <div class="priceSmall">small</div>
                <div class="smallPricePosition" v-text="card.smallPrice">
              </div>
              <div class="priceLarge">large</div>
              <div class="largePricePosition" v-text="card.largePrice">
              </div>
            
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="cardTitleAlacarte cursive mb-3" v-text="card.title"></div>
              <div v-text="card.itemDescription"></div>
              <v-expansion-panel class="mt-4" >
                <v-expansion-panel-content>
                  <div slot="header">Nutritional Facts</div>
            <v-card light>
              <v-card-text>
                <p><b>Average analysis per 12oz serving:</b></p>
                <p>{{card.abv}} ABV</p>
                <p>Calories: {{card.calories}}</p>
                <p>Carbohydrates: {{card.carbohydrates}}</p>
                <p>Protein: {{card.protein}}</p>
                <p>Fat: {{card.fat}}</p>
              </v-card-text>
            </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </div>
          </v-card-title>   
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        aycdBeer: 
          {
            title: 'All You Can Drink: Sapporo Draft Beer', 
            itemDescription: 'One Cent Refills', 
            src: require('static/images/beer/aycd.png'),
            price: '8.95',
            bottlesize: '16.oz (Mug)',
            alcohol: '4.9%',
            flex: 12 }
        ,
        cards: [
          {
            title: 'Sapporo Premium',
            itemDescription: 'The original. The icon. Sapporo Premium Beer is a refreshing lager with a crisp, refined flavor and a clean finish. The perfect beer to pair with any meal and any occasion. Kampai!', 
            src: require('static/images/beer/sapporopremiumbeer.jpg'),
            logosrc: require('static/images/beer/logo-sapporo.png'),
            smallPrice: '4.95',
            largePrice: '7.50',
            abv: '4.9%',
            calories: '140',
            carbohydrates: '10.3g',
            protein: '1.4g',
            fat: '0g',
            flex: 3 
          },
          { 
            title: 'Sapporo Draft 60oz. Pitcher',
            itemDescription: 'Sapporo Draft Beer in a 60oz. Pitcher. Recommended for large parties.', 
            src: require('static/images/beer/60ozsapporopitcher.jpg'),
            logosrc: require('static/images/beer/logo-sapporo.png'),
            smallPrice: 'N/A',
            largePrice: '14.95',
            abv: '4.9%',
            calories: '140',
            carbohydrates: '10.3g',
            protein: '1.4g',
            fat: '0g',
            flex: 3
          },
          { 
            title: 'Bomb Special',
            itemDescription: 'Sapporo Draft Beer in a 60oz. Pitcher with one large warm sake.', 
            src: require('static/images/beer/bombspecial.jpg'),
            logosrc: require('static/images/beer/logo-sapporo.png'),
            smallPrice: 'N/A',
            largePrice: '19.95',
            abv: '4.9%',
            calories: '140',
            carbohydrates: '10.3g',
            protein: '1.4g',
            fat: '0g',
            flex: 3 
          },  
          { 
            title: 'Sapporo Draft 16oz. Mug',
            itemDescription: 'The original. The icon. The draft in a 16oz. beer mug.', 
            src: require('static/images/beer/16ozsapporodraft.jpg'),
            logosrc: require('static/images/beer/logo-sapporo.png'),
            smallPrice: '4.95',
            largePrice: 'N/A',
            abv: '4.9%',
            calories: '140',
            carbohydrates: '10.3g',
            protein: '1.4g',
            fat: '0g',
            flex: 3 
          }, 
          { 
            
            title: 'Sapporo Light',
            itemDescription: 'Sapporo Premium Light combines a great, balanced flavor inherited from Sapporo Premium with a lighter body and even smoother finish. It\'s a perfect session beer - highly drinkable without compromising on taste.', 
            src: require('static/images/beer/sapporopremiumlightbeer.jpg'),
            logosrc: require('static/images/beer/logo-sapporolight.png'),
            smallPrice: '4.95',
            largePrice: '7.50',
            abv: '3.9%',
            calories: '110',
            carbohydrates: '8.5g',
            protein: '0.9g',
            fat: '0g',
            flex: 3 
          },
          { 
            
            title: 'Kirin Ichiban',
            itemDescription: 'A premium, 100% malt beer brewed with the first-press method, offering smooth and rich flavor.', 
            src: require('static/images/beer/kirinichiban.jpg'),
            logosrc: require('static/images/beer/logo-kirin.png'),
            smallPrice: '4.95',
            largePrice: '7.50',
            abv: '5%',
            calories: '145',
            carbohydrates: '12g',
            protein: '1g',
            fat: '0g',
            flex: 3 
          },
          { 
            
            title: 'Kirin Light',
            itemDescription: 'With just 95 calories and full-flavor, Kirin Light is one of the few great world-class Lights. It\'s a crisp and refreshing beer with an excellent mouth feel.', 
            src: require('static/images/beer/kirinlight.jpg'),
            logosrc: require('static/images/beer/logo-kirinlight.png'),
            smallPrice: '4.95',
            largePrice: '7.50',
            abv: '3.2%',
            calories: '95',
            carbohydrates: '8g',
            protein: '1g',
            fat: '0g',
            flex: 3 
          },
          { 
            title: 'Asahi "Super Dry"',
            itemDescription: 'Refreshing. Crisp. Clear. Asahi Super Dry is our premium beer. Fans around the world have enjoyed the taste of this high quality lager.', 
            src: require('static/images/beer/asahisuperdry.jpg'),
            logosrc: require('static/images/beer/logo-asahi.png'),
            smallPrice: '4.95',
            largePrice: '7.50',
            abv: '4.9%',
            calories: '149',
            carbohydrates: '10.7g',
            protein: '0.7g',
            fat: '0g',
            flex: 3 
          },
          { 
            title: 'Asahi "KARAKUCHI" 2L',
            itemDescription: 'The world\'s original Karakuchi ("super dry") beer, Asahi Super Dry\'s smooth, dry and light-bodied taste have propelled it to the front of Japan\'s beer market and made it a world favourite.', 
            src: require('static/images/beer/asahikarakuchi2L.jpg'),
            logosrc: require('static/images/beer/logo-asahi.png'),
            smallPrice: 'N/A',
            largePrice: '19.95',
            abv: '5%',
            calories: '149',
            carbohydrates: '10.7g',
            protein: '0.7g',
            fat: '0g',
            flex: 3 
          },
        ]
      }
    }
  }
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
border: 1px solid black;
border-radius: 25px;
color: black;
padding: 4px;
font-size: 12px;
}

.smallPricePosition {
position: absolute;
bottom: 8px;
right: 65px;
background: black;
width: 45px;
padding: 5px;
}

.largePricePosition {
position: absolute;
bottom: 8px;
right: 16px;
background: black;
width: 45px;
padding: 5px;
}

.priceSmall {
position: absolute;
bottom: 34px;
right: 65px;
color:black;
padding: 5px;
font-size: 12px;
width: 45px;
background-color: white;
}

.priceLarge {
position: absolute;
bottom: 34px;
right: 16px;
color:  black;
padding: 5px;
font-size: 12px;
width: 45px;
background-color: white;
}

.beerLogo {
position: absolute;
top: 12px;
left: 10px;
height: 100px;
width: 100px;
}

</style>


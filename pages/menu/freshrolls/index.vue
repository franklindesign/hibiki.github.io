<template>
  <div>
    <h1 class="cursive ma-2">Fresh Rolls</h1>
    <v-layout wrap row>
      <v-flex v-bind="{ [`lg${card.flex}`]: true }"
                  v-for="card in cards"
                  :key="card.title"
                  md4
                  sm6
                  >
        <v-card style="margin: 5px; height: 450px;" class="itemHover cardBack">
          <v-card-media 
              :src="card.src"
              height="300px"
              >
              <div class="starPosition">
                <v-icon large color="yellow">star</v-icon>
              </div>
                <div class="pricePosition" v-text="card.price">
              </div>
              <div class="itemNumber avatar" v-text="card.itemNumber">
              </div>
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="cardTitle cursive mb-3" v-text="card.title"></div>
              <div v-text="card.itemDescription"></div>
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
        cards: [
          { 
            itemNumber: 1,
            title: 'Rainbow Roll', 
            itemDescription: 'inside: crabmeat, avocado, cucumber. top: fresh tuna, salmon, white fish, avocado, and albacore', 
            src: require('static/images/freshrolls/rainbowroll.jpg'),
            price: '10.95', 
            flex: 3 },

          { 
            itemNumber: 2,
            title: 'Albacore Delight Roll',
            itemDescription: 'inside: spicy chopped albacore, green onions, & masago. top: seared albacore and deep fried garlic', 
            src: require('static/images/freshrolls/albacoredelightroll.jpg'),
            price: '10.95', 
            flex: 3 },

          { 
            itemNumber: 3,
            title: 'Fire Fighter Roll', 
            itemDescription: 'inside: spicy crabmeat and cucumber. top: spicy tuna and jalapeño',
            src: require('static/images/freshrolls/firefighterroll.jpg'),
            price: '11.95', 
            flex: 3 },
          { 
            itemNumber: 4,
            title: 'Angie Roll', 
            itemDescription: 'inside: spicy tuna and cucumber. top: avocado',
            src: require('static/images/freshrolls/angieroll.jpg'),
            price: '10.50', 
            flex: 3 },
          { 
            itemNumber: 5,
            title: 'Red Dragon Roll', 
            itemDescription: 'inside: spicy tuna and cucumber. top: fresh tuna and avocado',
            src: require('static/images/freshrolls/reddragonroll.jpg'),
            price: '11.95', 
            flex: 3 },
          { 
            itemNumber: 6,
            title: 'Sun Burn Roll', 
            itemDescription: 'inside: tuna and cucumber. top: seared albacore and crispy onion',
            src: require('static/images/freshrolls/sunburnroll.jpg'),
            price: '10.95', 
            flex: 3 },
          { 
            itemNumber: 7,
            title: 'Salmon Lover Roll', 
            itemDescription: 'inside: chopped spicy salmon, green onions, masago, and tempura crumbs. top: fresh salmon',
            src: require('static/images/freshrolls/salmonloverroll.jpg'),
            price: '11.95', 
            flex: 3 },
          { 
            itemNumber: 8,
            title: 'Passion Roll', 
            itemDescription: 'inside: spicy tuna and cucumber. top: tuna, salmon, white fish, albacore, avocado and jalapeño',
            src: require('static/images/freshrolls/passionroll.jpg'),
            price: '11.95', 
            flex: 3 },
          { 
            itemNumber: 9,
            title: 'Sourpatch Roll', 
            itemDescription: 'inside: crabmeat, cucumber, and avocado. top: fresh salmon and sliced lemon',
            src: require('static/images/freshrolls/sourpatchroll.jpg'),
            price: '10.50', 
            flex: 3 },
          { 
            itemNumber: 10,
            title: 'Lemonade Roll', 
            itemDescription: 'inside: spicy tuna and cucumber. top: fresh white fish and sliced lemon',
            src: require('static/images/freshrolls/lemonaderoll.jpg'),
            price: '10.50', 
            flex: 3 },
          { 
            itemNumber: 11,
            title: 'Sapporo Roll', 
            itemDescription: 'inside: spicy crabmeat and cucumber. top: albacore and yellowtail',
            src: require('static/images/freshrolls/sappororoll.jpg'),
            price: '10.95', 
            flex: 3 },
          { 
            itemNumber: 12,
            title: 'Mango Mania Roll', 
            itemDescription: 'inside: avocado, cucumber, and mango. top: salmon and mango',
            src: require('static/images/freshrolls/mangomaniaroll.jpg'),
            price: '11.50', 
            flex: 3 }
        ]
      }
    }
  }
</script>
<style scoped>

.cardBack {
background: rgb(29, 29, 29);
}
</style>


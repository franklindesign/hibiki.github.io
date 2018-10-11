<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <div class="deliverytext text-md-center">
          <p class="headline black--text">Get your favorite items delivered.</p>
          <p class="body-1 black--text">Thanks to our delivery partners, they will deliver through your front door.</p>
        </div>
      </v-flex>
    </v-layout>
    <div>
          <v-container fill-height>
          <v-layout wrap row align-center>
            
          <v-flex class="text-xs-center">
            
            <div class="grubhub pa-2 ma-2" onclick="window.open('https://www.grubhub.com/restaurant/hibiki-sushi-27625-shangri-la-dr-canyon-country/569536', '_blank')"></div>
          </v-flex>
          <v-flex class="text-xs-center">
            <div class="postmates pa-2 ma-2" onclick="window.open('https://www.ubereats.com/los-angeles/food-delivery/hibiki-sushi/Ogepbi-dTd2j60Wi7n7Uaw/', '_blank')"></div>
          </v-flex>
          <v-flex class="text-xs-center">
            <div class="ubereats ma-2 pa-2" onclick="window.open('https://postmates.com/merchant/hibiki-sushi-bar-canyon-country', '_blank')"></div>
          </v-flex>
           
          </v-layout>
          </v-container>
        </div>
  </v-container>
  
</template>


<style scoped>
.grubhub {
  background-image: url(~assets/SVG/Grubhub2016_Logo.svg);
  height: 40px;
  cursor: pointer;
  background-repeat: no-repeat;
  border: 0px;
}

.ubereats {
  background-image: url(~assets/SVG/UberEATS2017_Logo.svg);
  height: 60px;
  cursor: pointer;
  background-repeat: no-repeat;
  border: 0px;
}

.postmates {
  background-image: url(~assets/SVG/Postmates_Logo.svg);
  height: 60px;
  cursor: pointer;
  background-repeat: no-repeat;
  border: 0px;
}

.deliverytext {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
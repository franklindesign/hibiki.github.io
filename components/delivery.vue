<template>
  <v-container>
    <v-layout class="align-content-center justify-center">
      <v-flex xs12>
        <div class="deliverytext">
          <p class="headline black--text">Get your favorite items delivered.</p>
          <p class="body-1 black--text">Thanks to our delivery partners, they will deliver through your front door.</p>
        </div>
        <div>
          <v-flex xs12>
            <div class="grubhub pa-2 ma-2" onclick="window.open('https://www.grubhub.com/restaurant/hibiki-sushi-27625-shangri-la-dr-canyon-country/569536', '_blank')"></div>
          </v-flex>
          <v-flex xs12>
            <div class="postmates pa-2 ma-2" onclick="window.open('https://www.ubereats.com/los-angeles/food-delivery/hibiki-sushi/Ogepbi-dTd2j60Wi7n7Uaw/', '_blank')"></div>
          </v-flex>
          <v-flex xs12>
            <div class="ubereats ma-2 pa-2" onclick="window.open('https://postmates.com/merchant/hibiki-sushi-bar-canyon-country', '_blank')"></div>
          </v-flex>
        </div>
      </v-flex>
      <v-flex xs12>
        <div class="phone">
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<style scoped>
.grubhub {
  background-image: url(~/static/images/logos/Grubhub2016_Logo.svg);
  height: 40px;
  cursor: pointer;
  background-repeat: no-repeat;
  border: 0px;
}

.ubereats {
  background-image: url(~/static/images/logos/UberEATS2017_Logo.svg);
  height: 40px;
  cursor: pointer;
  background-repeat: no-repeat;
  border: 0px;
}

.postmates {
  background-image: url(~/static/images/logos/Postmates_Logo.svg);
  height: 40px;
  cursor: pointer;
  background-repeat: no-repeat;
  border: 0px;
}

.deliverywrap {
  display: flex;
  width: 280px;
  height: auto;
}

.deliverytext {
  margin-top: 15px;
  margin-bottom: 15px;
}

.phone {
  background-image: url(~/static/images/SVG/phone.svg);
  height: 200px;
}

@media only screen and (max-width: 414px) {
  .phone {
    height: 200px;
    margin-left: 100px;
  }
}
</style>
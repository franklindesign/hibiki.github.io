<template>
<v-container>
  <v-layout class="align-content-center justify-center">
   <v-flex xs4 sm6 lg4>
    <div class="deliverytext">
      <p class="headline black--text">Get your favorite items delivered.</p>
      <p class="body-1 black--text">Thanks to our delivery partners, they will deliver through your front door.</p>
    </div>
    <div class="deliverywrap">
        <div class="grubhub ma-1"  onclick="window.open('https://www.grubhub.com/restaurant/hibiki-sushi-27625-shangri-la-dr-canyon-country/569536', '_blank')"></div>
        <div class="postmates ma-1" onclick="window.open('https://www.ubereats.com/los-angeles/food-delivery/hibiki-sushi/Ogepbi-dTd2j60Wi7n7Uaw/', '_blank')"></div>
        <div class="ubereats ma-1" onclick="window.open('https://postmates.com/merchant/hibiki-sushi-bar-canyon-country', '_blank')"></div>     
   </div>
   </v-flex>
    <v-flex xs12 lg12>
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
    flex: 2;
    cursor: pointer;
    background-repeat: no-repeat;
    border: 0px;
}
.ubereats {
    background-image: url(~/static/images/logos/UberEATS2017_Logo.svg);
    height: 40px;
    flex: 1;
    cursor: pointer;
    background-repeat: no-repeat;
    border: 0px;
}
.postmates {
    background-image: url(~/static/images/logos/Postmates_Logo.svg);
    height: 40px;
    flex: 2;
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
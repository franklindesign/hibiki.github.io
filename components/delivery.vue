<template>
  <div>
    <v-layout>
      <v-flex xs12>
        <div class="deliverytext text-xs-center" style="margin: 20px;">
          <h1 class="black--text">We Deliver!</h1>
          <p
            class="body-1 black--text"
          >Order your favorite menu items delivered from the comforts of your home.</p>
        </div>
      </v-flex>
    </v-layout>
    <div>
      <v-layout fluid row wrap>
        <v-flex xs12 lg3>
          <div
            class="doordash"
            style="height: 120px;  "
            onclick="window.open('https://www.doordash.com/store/hibiki-sushi-bar-santa-clarita-255238/', '_blank')"
          ></div>
        </v-flex>
        <v-flex xs12 lg3>
          <div
            class="grubhub"
            style="height: 120px;   "
            onclick="window.open('https://www.grubhub.com/restaurant/hibiki-sushi-27625-shangri-la-dr-canyon-country/569536', '_blank')"
          ></div>
        </v-flex>
        <v-flex xs12 lg3>
          <div
            class="postmates"
            style="height: 120px;  "
            onclick="window.open('https://www.ubereats.com/los-angeles/food-delivery/hibiki-sushi/Ogepbi-dTd2j60Wi7n7Uaw/', '_blank')"
          ></div>
        </v-flex>
        <v-flex xs12 lg3>
          <div
            class="ubereats"
            style="height: 120px; "
            onclick="window.open('https://postmates.com/merchant/hibiki-sushi-bar-canyon-country', '_blank')"
          ></div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>


<style scoped>
.grubhub {
  background-image: url(~assets/SVG/Grubhub2016_Logo.svg);
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center center;
  border: 0px;
  transition: all 0.2s ease-in-out;
}
.grubhub:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.ubereats {
  background-image: url(~assets/SVG/UberEATS2017_Logo.svg);
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center center;
  background-position: center center;
  border: 0px;
  transition: all 0.2s ease-in-out;
}
.ubereats:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.postmates {
  background-image: url(~assets/SVG/Postmates_Logo.svg);
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center center;
  border: 0px;
  transition: all 0.2s ease-in-out;
}
.postmates:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.doordash {
  background-image: url(~assets/SVG/doordash-logo-vector.svg);
  cursor: pointer;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  border: 0px;
  transition: all 0.2s ease-in-out;
}
.doordash:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.deliverytext {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
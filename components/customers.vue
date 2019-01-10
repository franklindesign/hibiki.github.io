<template>
  <v-container>
    <div style="margin-top:15px">
      <h1 class="cursive black--text ma-2">Customer Reviews &#x1F497;</h1>
    </div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="customer in customers" :key="customer.name">
          <div class="quotes">
            <p class="quote">
              "{{customer.quote}}"
              <br>
              <br>
              <span class="name">{{customer.name}}</span>
              
              <img :src="customer.source" class="customerSource">
            </p>
          </div>
        </div>
      </div>
      <p class="swipeCards">
        <br>&#x2194;
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      customers: [
        {
          quote:
            "First of all this is phenomenal sushi spot and the employees are EXTREMELY hustling. All the past poor report you read on Yelp you must understand that a franchise like this is extremely gnarly to run. I love the sushi here and the draft beer is great too!! Oh, btw it's $0.01 for ALL YOU CAN DRINK refill. That's right ALL YOU CAN DRINK ONE CENT BEER REFILL!!!!",
          name: "Brian P.",
          site: "Yelp",
          source: require("static/images/logos/Yelp_Logo.svg")
        },
        {
          quote:
            "Amazing! Went in 30 mins before they were about to close so I felt bad and on top of that I ordered about 12 rolls for take out and they provided the best customer service! The sushi was amazing and we were beyond satisfied with the service and food. Thank you guys so much for taking care of us!! Definitely recommend this spot.",
          name: "Matthew A.",
          site: "Yelp",
          source: require("static/images/logos/Yelp_Logo.svg")
        },
        {
          quote:
            "The food was Outstanding, filling, and absolutely delicious...The cost was also amazingly affordable trust me we ate more then they probly would like this to have eaten",
          name: "Scott Stark",
          site: "Google reviews",
          source: require("static/images/logos/Google_2015_logo.svg")
        },
        {
          quote:
            "Sushi was exceptional, did all you can eat (AYCE). Service was alright, but did I mention the sushi was excellent!!! We have been here many times before but this visit was one of the best.",
          name: "David Muraoka",
          site: "Google reviews",
          source: require("static/images/logos/Google_2015_logo.svg")
        },
        {
          quote:
            "This is my favorite sushi place. Their sushi rolls are one of the best and their all you can eat deal is great. This place is quite big, lots of parking space, and  nice ambiance. Lindsay is the best server you can get, she always has a friendly smile and always making sure you are doing fine. Thanks for making our visit super awesome Lindsay. This is a place my husband and I frequently visit because it's very delicious. They also take 10% off coupons that you can print out. Check them out in Instagram.",
          name: "Jen M.",
          site: "Yelp",
          source: require("static/images/logos/Yelp_Logo.svg")
        }
      ],
      swiperOption: {
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: false,
        loopFillGroupWithBlank: false,
        breakpoints: {
          3840: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  }
};
</script>

<style scoped>
.swipeCards {
  text-align: center;
  font-size: 2em;
  color: black;
  margin-top: -50px;
}

.swiper-slide:hover {
  cursor: grab;
}

.customerSource {
  display: block;
  height: 30px;
  margin-top: 10px;
}
.quote {
  width: 90%;
  height: auto;
  padding: 10px;
  margin: 10px;
  color: #000000;
}

.quotes {
  margin: 10px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 4px 6px 1px rgba(0, 0, 0, 0.1);
}

.name {
  font-weight: bold;
}
</style>
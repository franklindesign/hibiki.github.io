<template>
  <v-container>
    <h1 class="cursive ma-2">Most Liked Items</h1>
    <div>
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide mostpopularBG itemHover" v-for="card in cards" :key="card.title">
            <img :src="card.src" class="itemsize">
            <div class="cursive mostpopular">{{card.title}}</div>
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
      cards: [
        {
          title: "Garlic Edamame",
          src: require("static/images/vegetableappetizers/garlicedamame.jpg")
        },
        {
          title: "Angie Roll",
          src: require("static/images/freshrolls/angieroll.jpg")
        },
        {
          title: "Fire Fighter Roll",
          src: require("static/images/freshrolls/firefighterroll.jpg")
        },
        {
          title: "Ramen",
          src: require("static/images/udonsoupramen/ramen.jpg")
        },
        {
          title: "Beef Yaki Udon/Soba",
          src: require("static/images/stirfriednoodles/beefyakiudonsoba.jpg")
        },
        {
          title: "Sun Burn Roll",
          src: require("static/images/freshrolls/sunburnroll.jpg")
        }
      ],
      swiperOption: {
        spaceBetween: 220,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: false,
        breakpoints: {
          3840: {
            slidesPerView: 4,
            spaceBetween: 1
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 1
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 1
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 1
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 1
          }
        }
      }
    };
  }
};
</script>

<style scoped>
.itemsize {
  width: 100%;
  height: auto;
}

.cardBack {
  background: rgb(29, 29, 29);
}

.mostpopular {
  font-size: 1em;
  margin: 10px;
  color: #ffffff;
}

.swipeCards {
  text-align: center;
  font-size: 2em;
  margin-top: -45px;
}

.mostpopularBG {
  background: rgb(255, 89, 0);
}

.cardsize {
  height: 200px !important;
}

@media only screen and (max-width: 600px) {
  .cardsize {
    height: 150px !important;
  }
}
</style>

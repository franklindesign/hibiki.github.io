<template>
  <div class="margin">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in slides" :key="slide.title">
          <div class="slideDescriptions">
            <span class="title_description">{{slide.title}}</span>
            <br>
            <span class="carousel_description">{{slide.description}}</span>
          </div>
          <img :src="slide.src" class="slidesize">
        </div>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          title: "Create Your Own Combo: Starting at $11.95",
          description: "Choose an Entree or Noodle dish and 1 Regular Roll",
          src: require("static/images/carousel/carousel_item_01.jpg")
        },
        {
          title: "All You Can Drink: Draft Beer",
          description: "Available with AYCE only for $6.95. One Cent Refills.",
          src: require("static/images/carousel/carousel_item_03.jpg")
        },
        {
          title: "Lucky 7",
          description: "Sushi Combo with 7 Fresh Fish (included with AYCE)",
          src: require("static/images/carousel/carousel_item_02.jpg")
        }
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          // dynamicBullets: true,
          bulletActiveClass: "swiper-pagination-bullet-active"
        },

        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: false,
        breakpoints: {
          3840: {
            slidesPerView: 1,
            spaceBetween: 1
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 1
          },
          768: {
            slidesPerView: 1,
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
.title_description {
  font-weight: 800;
}
.carousel_description {
  background: #ffffff;
  padding: 5px;
  margin: 0;
  color: #000000;
}
.slideDescriptions {
  position: absolute;
  background: rgb(255, 98, 0);
  bottom: 30px;
  left: 30px;
  padding: 10px;
  /* text-align: center; */
}
.margin {
  margin-top: 50px;
}
.slidesize {
  width: 100%;
}
</style>
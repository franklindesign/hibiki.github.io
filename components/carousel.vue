<template>
  <div class="margin">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in slides" :key="slide.title">
          <img :src="slide.src" class="slidesize">
          <div class="slideDescriptions">
            <span class="title_description">{{slide.title}}</span>
            <br>
            <span>{{slide.description}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          title: "All You Can Drink: Draft Beer",
          description: "Available with AYCE only for $6.95. One Cent Refills.",
          src: require("static/images/carousel/carousel_item_03.jpg")
        },
        {
          title: "Create Your Own Combo: Starting at $11.95",
          description: "Choose an Entree or Noodle dish and 1 Regular Roll",
          src: require("static/images/carousel/carousel_item_01.jpg")
        },
        {
          title: "Lucky 7",
          description: "Sushi Combo with 7 Fresh Fish (included with AYCE)",
          src: require("static/images/carousel/carousel_item_02.jpg")
        }
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 1950,
          disableOnInteraction: false
        },
        slidesPerGroup: 1,
        loop: true,
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

.slideDescriptions {
  position: relative;
  padding: 10px;
  text-align: center;
  color: #ffffff;
}
.margin {
  margin-top: 50px;
}
.slidesize {
  width: 100%;
}
</style>
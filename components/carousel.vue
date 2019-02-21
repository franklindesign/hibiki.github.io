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
          title: "All You Can Eat Starting at $24.95",
          description: "Choose from over 100 items for All-You-Can-Eat",
          src: require("static/images/carousel/carousel_item_01.jpg")
        },
        {
          title: "We Deliver",
          description:
            "Order from our Grubhub, UberEats, & Postmates or call for pick-up",
          src: require("static/images/carousel/carousel_item_02.jpg")
        },
        {
          title: "All You Can Drink: Draft Beer",
          description: "Available with AYCE only for $6.95. One Cent Refills.",
          src: require("static/images/carousel/carousel_item_03.jpg")
        }
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: {
          delay: 2200,
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
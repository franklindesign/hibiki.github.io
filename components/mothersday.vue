<template>
  <div class="item">
    <v-img :src="special.src" alt="Celebrate Mom"></v-img>
    <p>Starting today, we're celebrating Mom all week long. Treat Mom to an all-you-can-eat sushi for $23.</p>
  </div>
</template>

 <script>
export default {
  data() {
    return {
      special: {
        src: require("assets/promo/mothers-day-2019.jpg")
      }
    };
  }
};
</script>
<style scoped>
p {
  margin: 10px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

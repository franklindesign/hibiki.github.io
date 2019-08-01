<template>
  <div class="pb-5">
    <v-layout wrap>
      <div class="hidden-sm-and-down ma-1" v-for="menu in menus" :key="menu.name">
        <v-chip
          exact-active-class="red"
          exact
          large
          outlined
          :aria-label="`${menu.name}`"
          :to="`${menu.router}`"
        >{{ menu.name }}</v-chip>
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: "Pricing",
          router: "/menu/pricing"
        },
        {
          name: "All Day Bento",
          router: "/menu/bento"
        },
        {
          name: "Combo Menu",
          router: "/menu/combo"
        },
        {
          name: "Fresh Rolls",
          router: "/menu/freshrolls"
        },
        {
          name: "Cooked Rolls",
          router: "/menu/cookedrolls"
        },
        {
          name: "Tempura Rolls",
          router: "/menu/tempurarolls"
        },
        {
          name: "Regular Rolls",
          router: "/menu/sushirolls"
        },
        {
          name: "Sushi & Sashimi",
          router: "/menu/sushi"
        },
        {
          name: "Sushi Combo",
          router: "/menu/sashimicombo"
        },
        {
          name: "Vegetable Appetizers",
          router: "/menu/vegetableappetizers"
        },
        {
          name: "Seafood Appetizers",
          router: "/menu/seafoodappetizers"
        },
        {
          name: "Meat Appetizers",
          router: "/menu/meatappetizers"
        },
        {
          name: "Salads",
          router: "/menu/salads"
        },
        {
          name: "Soup & Ramen",
          router: "/menu/udonsoupramen"
        },
        {
          name: "Fried Noodles",
          router: "/menu/stirfriednoodles"
        },
        {
          name: "Miso Soup & Rice",
          router: "/menu/misosouprice"
        },
        {
          name: "Entree",
          router: "/menu/entree"
        },
        {
          name: "Desserts",
          router: "/menu/desserts"
        },
        {
          name: "Beverages",
          router: "/menu/beverages"
        },
        {
          name: "Beer",
          router: "/menu/beer"
        },
        {
          name: "Sake",
          router: "/menu/sake"
        },
        {
          name: "Wine",
          router: "/menu/wine"
        }
      ]
    };
  }
};
</script>
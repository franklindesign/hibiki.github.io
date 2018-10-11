<template>
  <div>
    <h1 class="cursive ma-2">Regular Sushi Rolls </h1>
    <div class="mb-4">
      <v-icon large color="yellow">star</v-icon> All Regular Rolls Included with AYCE.
    </div>
    <div>
      <p>* (Shrimp and crabmeat inside)</p>
      <p>** (Spicy crabmeat, avocado, and cucumber inside with special spicy sauce on top)</p>
    </div>
    <v-flex xs12 sm12 md6 lg6 xl4>
      <v-data-table :headers="headers" :items="items" hide-actions light class="elevation-1 mb-4">
        <template slot="items" slot-scope="props">
          <td> {{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.hand }}</td>
          <td class="text-xs-right">{{ props.item.cut }}</td>
        </template>
      </v-data-table>
    </v-flex>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "",
          align: "left",
          sortable: false,
          value: "name"
        },
        {
          text: "Hand",
          value: "hand"
        },
        {
          text: "Cut",
          value: "cut"
        }
      ],
      items: [
        {
          value: false,
          name: "Albacore Roll",
          cut: "6.95",
          hand: "6.00"
        },
        {
          value: false,
          name: "Avocado Roll",
          cut: "6.00",
          hand: "5.50"
        },
        {
          value: false,
          name: "California Roll",
          cut: "5.50",
          hand: "5.00"
        },
        {
          value: false,
          name: "Cucumber Roll",
          cut: "5.50",
          hand: "4.50"
        },
        {
          value: false,
          name: "Freshwater Eel Roll",
          cut: "7.95",
          hand: "6.45"
        },
        {
          value: false,
          name: "Philadelphia Roll",
          cut: "7.95",
          hand: "6.45"
        },
        {
          value: false,
          name: "Salmon Roll",
          cut: "6.95",
          hand: "5.75"
        },
        {
          value: false,
          name: "Salmon Skin Roll",
          cut: "6.95",
          hand: "5.75"
        },
        {
          value: false,
          name: "Scallop Roll",
          cut: "6.95",
          hand: "6.00"
        },
        {
          value: false,
          name: "Shrimp Roll *",
          cut: "6.75",
          hand: "6.25"
        },
        {
          value: false,
          name: "Spicy Albacore Roll",
          cut: "6.95",
          hand: "6.00"
        },
        {
          value: false,
          name: "Spicy Tuna Roll",
          cut: "6.95",
          hand: "6.00"
        },
        {
          value: false,
          name: "Tuna Roll",
          cut: "6.95",
          hand: "6.50"
        },
        {
          value: false,
          name: "Yellowtail Roll",
          cut: "6.95",
          hand: "6.50"
        },
        {
          value: false,
          name: "Vegetable Roll",
          cut: "6.00",
          hand: "5.50"
        },
        {
          value: false,
          name: "Asparagus Roll",
          cut: "6.00",
          hand: "5.95"
        },
        {
          value: false,
          name: "Spicy Tuna Roll",
          cut: "5.95",
          hand: "5.95"
        },
        {
          value: false,
          name: "Fiesta Roll **",
          cut: "5.95",
          hand: "5.95"
        }
      ]
    };
  }
};
</script>

<style scoped>
.tablebg {
  background: #000000;
}
</style>
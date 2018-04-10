<template>
  <div>
    <h1 class="cursive ma-2">Sushi & Sashimi</h1>
    <div class="mb-4">
      <v-icon large color="orange">star</v-icon> Sushi/Sashimi Are Available for <strong>AYCE: Sushi & Sashimi (29.95)</strong>
    </div>
    <div class="mb-4">
      <p>* Regular AYCE: Add +5.00 per sushi/sashimi</p>
      <p>** one order limit with AYCE Sushi & Sashimi</p>
    </div>
     
  <v-flex xs12 sm12 md6 lg6 xl4>
  <v-data-table
    :headers="headers"
    :items="items"
    hide-actions
    light
    class="elevation-1 mb-4">

    <template slot="items" slot-scope="props">
      <td> {{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.sushi }}</td>
      <td class="text-xs-right">{{ props.item.sashimi }}</td>
    </template>
  </v-data-table> 
  </v-flex>
  
  </div>
  
</template>

<script>
  export default {
    data () {
      return { 
        headers: [
          {
            text: '',
            align: 'left',
            sortable: false,
            value: 'name',
             
          },
          { text: 'Sushi', value: 'sushi' },
          { text: 'Sashimi', value: 'sashimi' },
        ],
        items: [
          {
            value: false,
            name: 'Tuna',
            sushi: '5.95',
            sashimi: '14.95',
          },
          {
            value: false,
            name: 'Salmon',
            sushi: '5.50',
            sashimi: '12.95',
          },
          {
            value: false,
            name: 'Yellowtail',
            sushi: '5.75',
            sashimi: '14.95',
          },
          {
            value: false,
            name: 'Crab',
            sushi: '5.50',
            sashimi: 'N/A',
          },
          {
            value: false,
            name: 'Egg',
            sushi: '4.95',
            sashimi: 'N/A',
          },
          {
            value: false,
            name: 'Freshwater Eel',
            sushi: '5.95',
            sashimi: 'N/A',
          },
          {
            value: false,
            name: 'Mackerel',
            sushi: '5.25',
            sashimi: '12.95',
          },
          {
            value: false,
            name: 'Octopus',
            sushi: '5.50',
            sashimi: '12.95',
          },
          {
            value: false,
            name: 'Scallop',
            sushi: '5.50',
            sashimi: '12.95',
          },
          {
            value: false,
            name: 'Shrimp',
            sushi: '5.50',
            sashimi: 'N/A',
          },
          {
            value: false,
            name: 'Smelt Egg',
            sushi: '5.50',
            sashimi: 'N/A',
          },
          {
            value: false,
            name: 'Squid',
            sushi: '5.50',
            sashimi: '12.95',
          },
          {
            value: false,
            name: 'White Fish',
            sushi: '5.50',
            sashimi: '12.95',
          },
          {
            value: false,
            name: 'White Tuna',
            sushi: '5.95',
            sashimi: '12.95',
          },
          {
            value: false,
            name: 'Surf Clam (Hoki Gai)',
            sushi: '5.95',
            sashimi: 'N/A',
          },
          {
            value: false,
            name: 'Halibut **',
            sushi: '7.95',
            sashimi: '16.95',
          },
          {
            value: false,
            name: 'Salmon Egg **',
            sushi: '7.95',
            sashimi: 'N/A',
          }, 
          {
            value: false,
            name: 'Sea Urchin **',
            sushi: '8.95',
            sashimi: 'N/A',
          }, 
          {
            value: false,
            name: 'Swet Shrimp **',
            sushi: '9.95',
            sashimi: 'N/A',
          }, 
          {
            value: false,
            name: 'Smelt Egg/Quail Egg **',
            sushi: '7.95',
            sashimi: 'N/A',
          }, 
          {
            value: false,
            name: 'Sea Urchin/Quail Egg **',
            sushi: '8.95',
            sashimi: 'N/A',
          },
          {
            value: false,
            name: 'Salmon Egg/Quail Egg **',
            sushi: '7.95',
            sashimi: 'N/A',
          } 
        ]
      }
    }
  }
</script>

<style scoped>
.tablebg {
  background: black;
}

.bgcontainer {
  width: 600px;
  height: 100%;
}
</style>
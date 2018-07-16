import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: String(colors.white), // a color that is not in the material colors palette
    accent: String(colors.grey.darken3),
    secondary: String(colors.amber.darken1),
    info: String(colors.teal.lighten1),
    warning: String(colors.amber),
    error: String(colors.deepOrange.accent4),
    success: String(colors.green.accent3)
  }
})

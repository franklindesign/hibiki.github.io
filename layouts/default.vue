 <!-- Landing Page / Layout -->

<template>
  <v-app dark class="appBg">
    <!-- Begin Drawer Nav -->
    <v-navigation-drawer temporary fixed v-model="drawer" right class="navDrawerBg" app>
      <v-btn transparent fixed right flat fab @click.stop="drawer = !drawer" class="mt-2 mr-1">
        <v-icon>close</v-icon>
      </v-btn>
      <v-list subheader dense>
        <v-list-tile avatar router to="/" class="mt-2">
          <v-list-tile-avatar>
            <v-icon>home</v-icon>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-subheader>
          <h1>MENU</h1>
        </v-subheader>
        <v-list-tile
          router
          :to="item.to"
          v-for="item in items"
          :key="item.avatar"
          exact
          active-class="red--text"
          class="mb-2"
        >
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!-- End Drawer Nav -->
    <!-- Begin Nav Desktop Menu -->
    <v-toolbar fixed app :clipped-left="clipped" class="black">
      <div class="mt-2">
        <nuxt-link to="/">
          <img :src="logo" height="40%" width="40%" alt="Hibiki Sushi & Bar">
        </nuxt-link>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        absolute
        dark
        fab
        bottom
        right
        color="#C62828"
        @click.stop="drawer = !drawer"
        class="mr-3 hidden-md-and-up"
      >
        <v-icon>menu</v-icon>
      </v-btn>
      <v-toolbar-items class="hidden-sm-and-down mr-5 pr-5">
        <v-btn flat active-class router to="/" slot="activator" class="mr-2">
          <v-icon class="mr-2">home</v-icon>Home
        </v-btn>
        <v-btn flat active-class router to="/menu" class="mr-3">
          <v-icon class="mr-2">view_module</v-icon>Menu
        </v-btn>
        <div class="mt-3">
          <v-btn round outline to="/emails">
            <v-icon class="mr-2">email</v-icon>Sign up for Hibiki emails
          </v-btn>
        </div>
      </v-toolbar-items>
    </v-toolbar>
    <!-- End Nav Desktop Menu -->
    <!-- Begin Nuxt View with Animation transition-->
    <transition
      name="pageTransition"
      enter-active-class="animated fadeInDown"
      leave-active-class="animated fadeOutUp"
    >
      <nuxt/>
    </transition>
    <!-- End Nuxt View -->
    <!-- Begin About Hibiki Sushi & Bar Dialog -->
    <v-layout row justify-center>
      <v-dialog v-model="dialog" max-width="350px" transition="dialog-transition">
        <v-card light>
          <v-card-title>
            <span class="headline cursive">About Hibiki Sushi & Bar</span>
          </v-card-title>
          <v-card-text>
            Hibiki Sushi & Bar brings a modern family style asian cuisine to Santa Clarita. Located just between Soledad Canyon Rd and Shangri-La Drive. Experience for yourself our expansive menu of over 100 ever-changing items of immaculately prepared sushi,
            sashimi, hot entrees, salads, desserts and more. Our chefs bring contemporary cuisine derived from fresh ingredients to create unique and absolutely delicious dishes. Diners will find a warm, comfortable and family-friendly environment with
            great lighting and music. Our dining area and spacious bar ties the atmosphere together for great parties and celebrations.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat="flat" @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <!-- End About Hibiki Sushi & Bar Dialog -->
    <!-- Begin Open Hours Dialog -->
    <v-layout row justify-center>
      <v-dialog v-model="openhours" max-width="300px" transition="dialog-transition">
        <v-card light>
          <v-card-title>
            <span class="headline cursive">Open Hours</span>
          </v-card-title>
          <v-card-text>Monday: 11:30 am – 10 pm
            <br>Tuesday: 11:30 am – 10 pm
            <br>Wednesday: 11:30 am – 10 pm
            <br>Thursday: 11:30 am – 10 pm
            <br>Friday: 11:30 am – 11 pm
            <br>Saturday: 11:30 am – 11 pm
            <br>Sunday: 11:30 am – 10 pm
            <br>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat="flat" @click="openhours = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <!-- End Open Hours Dialog -->
    <!-- Begin View Location Dialog -->
    <v-layout row justify-center>
      <v-dialog v-model="map" max-width="350px" transition="dialog-transition">
        <v-card light>
          <v-card-title>
            <span class="headline cursive">Location</span>
          </v-card-title>
          <v-card-text>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210850.9797048854!2d-118.61322625357718!3d34.336565484979076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c288f3845298d9%3A0xc716780c1867000a!2s27625+Shangri+La+Dr%2C+27625+Shangri-La+Dr%2C+Santa+Clarita%2C+CA+91351!5e0!3m2!1sen!2sus!4v1521311510190"
              width="320"
              height="400"
              frameborder="0"
              style="border:0"
              allowfullscreen
            ></iframe>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat="flat" @click="map = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
    <!-- End View Location Dialog -->
    <!-- Begin Footer -->
    <v-footer dark class="grey darken-4 wrapper" height="auto">
      <div class="contain footerMargin">
        <v-layout row wrap>
          <v-flex xs12 sm3 md3 lg3>
            <div class="footerItems footerAddress">
              <h3>HIBIKI SUSHI & BAR</h3>
              <p class="grey--text mt-3">27625 Shangri La Dr.
                <br>Canyon Country, CA. 91351
                <br>
              </p>
              <a @click="map = true">View Location</a>
              <br>
              <p class="grey--text pt-3">(661) 298-0273</p>
            </div>
          </v-flex>
          <v-flex xs4 sm3 md3 lg3>
            <div class="footerItems">
              <ul style="list-style-type:none">
                <li>
                  <h4>HIBIKI</h4>
                </li>
                <li>
                  <a @click="dialog = true" class="grey--text">About</a>
                </li>
                <li>
                  <nuxt-link to="/faq" class="grey--text">FAQ</nuxt-link>
                </li>
                <li>
                  <a @click="openhours = true" class="grey--text">Hours</a>
                </li>
                <li>
                  <nuxt-link to="/jobs" class="grey--text">Jobs</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/emails" class="grey--text">Emails</nuxt-link>
                </li>
              </ul>
            </div>
          </v-flex>
          <v-flex xs4 sm3 md3 lg3>
            <div class="footerItems">
              <ul style="list-style-type:none">
                <li>
                  <h4>PARTNERS</h4>
                </li>
                <li>
                  <a href="http://www.grubhub.com" class="grey--text" target="_blank">GrubHub</a>
                </li>
                <li>
                  <a href="http://www.Ubereats.com" class="grey--text" target="_blank">UberEats</a>
                </li>
                <li>
                  <a href="http://www.postmates.com" class="grey--text" target="_blank">Postmates</a>
                </li>
                <li>
                  <a
                    href="http://www.localflavor.com"
                    class="grey--text"
                    target="_blank"
                  >LocalFlavor</a>
                </li>
                <li>
                  <a
                    href="http://www.scvsmartshopper.com"
                    class="grey--text"
                    target="_blank"
                  >SmartShopper</a>
                </li>
              </ul>
            </div>
          </v-flex>
          <v-flex xs4 sm3 md3 lg3>
            <div class="footerItems">
              <ul style="list-style-type:none">
                <li>
                  <h4>SOCIAL MEDIA</h4>
                </li>
                <li>
                  <a
                    href="http://www.facebook.com/hibikisushibar"
                    class="grey--text"
                    target="_blank"
                  >Facebook</a>
                </li>
                <li>
                  <a
                    href="http://www.instagram.com/hibikisushibar"
                    class="grey--text"
                    target="_blank"
                  >Instagram</a>
                </li>
                <li>
                  <a
                    href="http://www.twitter.com/hibikisushibar"
                    class="grey--text"
                    target="_blank"
                  >Twitter</a>
                </li>
                <li>
                  <a href="http://4sq.com/5KEWUD" class="grey--text" target="_blank">Foursquare</a>
                </li>
                <li>
                  <a
                    href="https://www.yelp.com/biz/hibiki-sushi-and-bar-santa-clarita-2"
                    class="grey--text"
                    target="_blank"
                  >Yelp</a>
                </li>
              </ul>
            </div>
          </v-flex>
          <v-flex xs12 py-3 text-xs-center>
            &copy;2018 —
            <strong>HIBIKI SUSHI INC.</strong>
          </v-flex>
        </v-layout>
      </div>
    </v-footer>
    <!-- End Footer -->
  </v-app>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      clipped: false,
      map: false,
      dialog: false,
      openhours: false,
      drawer: false,
      items: [
        {
          title: "Pricing",
          to: "/menu/"
        },
        {
          title: "Combo Menu",
          to: "/menu/combo"
        },
        {
          title: "All Day Bento",
          to: "/menu/bento"
        },
        {
          title: "Fresh Rolls",
          to: "/menu/freshrolls"
        },
        {
          title: "Cooked Rolls",
          to: "/menu/cookedrolls"
        },
        {
          title: "Tempura Rolls",
          to: "/menu/tempurarolls"
        },
        {
          title: "Regular Sushi Rolls",
          to: "/menu/sushirolls"
        },
        {
          title: "Sushi & Sashimi",
          to: "/menu/sushi"
        },
        {
          title: "Sashimi Combo",
          to: "/menu/sashimicombo"
        },
        {
          title: "Salads",
          to: "/menu/salads"
        },
        {
          title: "Vegetable Appetizers",
          to: "/menu/vegetableappetizers"
        },
        {
          title: "Seafood Appetizers",
          to: "/menu/seafoodappetizers"
        },
        {
          title: "Meat Appetizers",
          to: "/menu/meatappetizers"
        },
        {
          title: "Udon Soup & Ramen",
          to: "/menu/udonsoupramen"
        },
        {
          title: "Stir Fried Noodles",
          to: "/menu/stirfriednoodles"
        },
        {
          title: "Miso Soup & Rice",
          to: "/menu/misosouprice"
        },
        {
          title: "Entree",
          to: "/menu/entree"
        },
        {
          title: "Desserts",
          to: "/menu/desserts"
        },
        {
          title: "Beverages",
          to: "/menu/beverages"
        },
        {
          title: "Beer",
          to: "/menu/beer"
        },
        {
          title: "Sake",
          to: "/menu/sake"
        },
        {
          title: "Wine",
          to: "/menu/wine"
        }
      ],

      logo: require("~/assets/SVG/logo.svg")
    };
  }
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";

.wrapper {
  justify-content: center;
}

.contain {
  justify-content: flex-start;
  max-width: 1200px;
  width: 100%;
}

.navDrawerBg {
  background-color: hsla(0, 0%, 11%, 0.8);
}

.appBg {
  background: #111111;
}

.footerItems li {
  margin-bottom: 15px;
}

a {
  text-decoration: none;
}

a:hover {
  font-weight: bold;
}

.footerMargin {
  margin-top: 10px;
}
.footerItems {
  margin: 10px;
}

@media screen and (max-width: 600px) {
  .footerAddress {
    text-align: center;
    margin-bottom: 50px;
  }
}
</style>


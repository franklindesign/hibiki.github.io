<template>
  <v-app dark class="appBg">

<!-- Begin Drawer Nav -->
    <v-navigation-drawer temporary fixed v-model="drawer" right class="navDrawerBg" app>
        <v-btn transparent fixed right flat fab @click.stop="drawer = !drawer" class="mt-3 mr-1">
          <v-icon>close</v-icon>
        </v-btn>
       
      <v-list subheader dense>
        <v-list-tile avatar router to="/"  class="mt-3">
              <v-list-tile-avatar>
                  <v-icon>
                    home
                  </v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                  <v-list-tile-title> 
                    Home
                  </v-list-tile-title>
              </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <v-subheader class="white--text">
          <h3>Menu</h3>
        </v-subheader> 
        <v-list-tile 
          avatar 
          router 
          :to="item.to"  
          v-for="item in items" 
          :key="item.avatar"
          exact 
          active-class="red--text"
          class="mb-2"
          >
          
              <v-list-tile-avatar>
                  <img :src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                  <v-list-tile-title v-text="item.title">
                  </v-list-tile-title>
              </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
<!-- End Drawer Nav -->

<!-- Begin Nav Desktop Menu -->
    <v-toolbar fixed app :clipped-left="clipped" class="black">
      <div class="ml-5 mt-2">
        <nuxt-link to="/"><img :src="logo" height="50%" width="50%" alt="Hibiki Sushi & Bar"></nuxt-link>
      </div>
      <v-spacer></v-spacer>
      <v-btn
        absolute
        dark
        fab
        bottom
        right
        color="red darken-3"
        @click.stop="drawer = !drawer"
        class="mr-3 hidden-md-and-up"
        >
        <v-icon>menu</v-icon>
      </v-btn>

        <v-toolbar-items class="hidden-sm-and-down mr-5 pr-5">
          <v-btn 
            flat 
            active-class 
            router 
            to="/" 
            slot="activator" 
            class="mr-2">
          <v-icon 
            class="mr-2">home
          </v-icon> Home
          </v-btn>
          <v-btn 
            flat 
            active-class 
            router 
            to="/menu" 
            class="mr-3">
          <v-icon 
            class="mr-2">view_module
          </v-icon>Menu
          </v-btn>
          <div class="mt-2">
          <v-btn 
            round 
            outline 
            @click="dialogEmails = true"
          > 
          <v-icon 
          class="mr-2">email
          </v-icon> 
          Sign up for Hibiki emails
          </v-btn>
          </div>
        </v-toolbar-items>
    </v-toolbar>
<!-- End Nav Desktop Menu -->

<!-- Begin Nuxt View -->    
        <transition name="pageTransition" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
          <nuxt />
        </transition>
<!-- End Nuxt View -->

<!-- Begin About Hibiki Sushi & Bar Dialog -->
    <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="350px"
        transition="dialog-transition">
      <v-card light>
        <v-card-title>
          <span class="headline cursive">About Hibiki Sushi & Bar</span>
        </v-card-title>
        <v-card-text>Hibiki Sushi & Bar brings a modern family style asian cuisine to Santa Clarita. Located just between Soledad Canyon Rd and Shangri-La Drive. Experience for yourself our expansive menu of over 100 ever-changing items of immaculately prepared sushi, sashimi, hot entrees, salads, desserts and more. Our chefs bring contemporary cuisine derived from fresh ingredients to create unique and absolutely delicious dishes. Diners will find a warm, comfortable and family-friendly environment with great lighting and music. Our dining area and spacious bar ties the atmosphere together for great parties and celebrations.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="black" flat="flat" @click="dialog = false">Close</v-btn>         
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
<!-- End About Hibiki Sushi & Bar Dialog -->

<!-- Begin Open Hours Dialog -->
    <v-layout row justify-center>
    <v-dialog v-model="openhours" max-width="300px"
        transition="dialog-transition">
      <v-card light>
        <v-card-title>
          <span class="headline cursive">Open Hours</span>
        </v-card-title>
        <v-card-text> Monday: 11:30 am – 10 pm<br>
                      Tuesday: 11:30 am – 10 pm<br>
                      Wednesday: 11:30 am – 10 pm<br>
                      Thursday: 11:30 am – 10 pm<br>
                      Friday: 11:30 am – 11 pm<br>
                      Saturday: 11:30 am – 11 pm<br>
                      Sunday: 11:30 am – 10 pm<br>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="black" flat="flat" @click="openhours = false">Close</v-btn>         
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
<!-- End Open Hours Dialog -->

<!-- Begin View Location Dialog -->
    <v-layout row justify-center>
    <v-dialog v-model="map" max-width="350px"
        transition="dialog-transition">
      <v-card light>
        <v-card-title>
          <span class="headline cursive">Location</span>
        </v-card-title>
        <v-card-text><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210850.9797048854!2d-118.61322625357718!3d34.336565484979076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c288f3845298d9%3A0xc716780c1867000a!2s27625+Shangri+La+Dr%2C+27625+Shangri-La+Dr%2C+Santa+Clarita%2C+CA+91351!5e0!3m2!1sen!2sus!4v1521311510190" width="320" height="400" frameborder="0" style="border:0" allowfullscreen></iframe></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="black" flat="flat" @click="map = false">Close</v-btn>         
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
<!-- End View Location Dialog -->



<!-- Begin MailChimp Signup Dialog -->
    <v-layout row wrap>
      <v-dialog
        v-model="dialogEmails"
        scrollable
        
        max-width="350px"
        transition="dialog-transition"
      >
      <v-card light>
        <v-card-title>
          



<div id="mc_embed_signup">
    <form   action="//hibikisushi.us3.list-manage.com/subscribe/post?u=1d5a47e0c5045755b31f3e12b&amp;id=c463e52d9b" method="post" 
            id="mc-embedded-subscribe-form" 
            name="mc-embedded-subscribe-form" 
            class="validate" 
            target="_blank" 
            novalidate>
  <div id="mc_embed_signup_scroll">
    
    <h2 class="cursive" >Sign-up for Hibiki Emails</h2>
    <span>Subscribe to Hibiki Email to receive 10% off coupon.</span> 
    
  
      <div class="mc-field-group mt-4">
        <label for="mce-EMAIL"><h4>Email Address </h4></label>
        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
      </div>
      <div class="mc-field-group">
        <label for="mce-FNAME">First Name </label>
        <input type="text" value="" name="FNAME" class="required" id="mce-FNAME">
      </div>
      <div class="mc-field-group">
        <label for="mce-LNAME">Last Name </label>
        <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
      </div>
      <div class="mc-field-group size1of2">
        <label for="mce-MMERGE3-month">Birthday </label>
      <div class="datefield">
        <span class="subfield monthfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="MMERGE3[month]" id="mce-MMERGE3-month"></span> / 
        <span class="subfield dayfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="MMERGE3[day]" id="mce-MMERGE3-day"></span> 
        <span class="small-meta nowrap">( mm / dd )</span>
      </div>
  </div>	
  <div id="mce-responses" class="clear">
      <div class="response" id="mce-error-response" style="display:none"></div>
      <div class="response" id="mce-success-response" style="display:none"></div>
  </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
  <div style="position: absolute; left: -5000px;"><input type="text" name="b_b7da092add9faced53d200a00_df6dfb95bd" tabindex="-1" value=""></div>
  <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>

  <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="mt-4" color="black" flat="flat" @click="dialogEmails = false">Close</v-btn>         
  </v-card-actions>
  </div>
  </form>
</div>

<!--End mc_embed_signup-->
          
        </v-card-title>
      </v-card>
        
      </v-dialog>
    </v-layout>

  
<!-- Begin Footer -->
 <v-footer :fixed="fixed" class="black wrapper" app>
   <div class="contain ">
     <v-layout row wrap >
        <v-flex xs12 md3 lg3 >
           <div class="footerItems ">
                <h3>HIBIKI SUSHI & BAR</h3>
                <p class="grey--text mt-3">27625 Shangri La Dr. <br>
                Canyon Country, CA. 91351<br> </p>
                <a @click="map = true">View Location</a> <br>
                <p class="grey--text pt-3">(661) 298-0273</p>
            </div>
        </v-flex>
            <v-flex xs4 md3 lg3 >
             <div class="footerItems  ">
              <ul style="list-style-type:none">
                <li><h4>HIBIKI</h4></li>
                <li><a @click="dialog = true" class="grey--text">About</a></li>
                <li><nuxt-link to="/faq" class="grey--text">FAQ </nuxt-link> </li>
                <li><a @click="openhours = true" class="grey--text">Hours</a></li>
                <li><nuxt-link to="/jobs" class="grey--text">Jobs </nuxt-link> </li>
                <li><a @click="dialogEmails = true" class="grey--text">Emails</a></li>
              </ul>
              </div>
            </v-flex>
            <v-flex xs4 md3 lg3>
              <div class="footerItems ">  
              <ul style="list-style-type:none">
                <li><h4>PARTNERS</h4></li>
                <li><a href="http://www.grubhub.com" class="grey--text" target="_blank">GrubHub</a></li>
                <li><a href="http://www.Ubereats.com" class="grey--text" target="_blank">UberEats</a></li>
                <li><a href="http://www.postmates.com" class="grey--text" target="_blank">Postmates</a></li>
              </ul>
            </div>
            </v-flex>
            <v-flex xs4 md3 lg3>
             <div class="footerItems">       
              <ul style="list-style-type:none">
                <li><h4>SOCIAL MEDIA</h4></li>
                <li><a href="http://www.facebook.com/hibikisushibar" class="grey--text" target="_blank">Facebook</a></li>
                <li><a href="http://www.instagram.com/hibikisushibar" class="grey--text" target="_blank">Instagram</a></li>
                <li><a href="http://www.twitter.com/hibikisushibar" class="grey--text" target="_blank">Twitter</a></li>
                <li><a href="http://4sq.com/5KEWUD" class="grey--text" target="_blank">Foursquare</a></li>
                <li><a href="https://www.yelp.com/biz/hibiki-sushi-and-bar-santa-clarita-2"  class="grey--text" target="_blank">Yelp</a></li>
                
              </ul>
            </div> 
            </v-flex>
            <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2018 — <strong>HIBIKI SUSHI INC.</strong>
        </v-flex>
        </v-layout>
      </div> 
    </v-footer>
<!-- End Footer -->

  </v-app>
</template>

<script>


export default {
  data() {
    return {
      clipped: false,
      map: false,
      dialog: false,
      dialogEmails: false,
      openhours: false,
      drawer: false,
      fixed: false,
      items: [
        {
          avatar: require("~/static/images/sectionAvatars/price.jpg"),
          title: "Pricing",
          to: "/menu/"
        },
        {
          avatar: require("~/static/images/sectionAvatars/combo.jpg"),
          title: "Combo Menu",
          to: "/menu/combo"
        },
        {
          avatar: require("~/static/images/sectionAvatars/bento.jpg"),
          title: "All Day Bento",
          to: "/menu/bento"
        },
        {
          avatar: require("~/static/images/sectionAvatars/freshrolls.png"),
          title: "Fresh Rolls",
          to: "/menu/freshrolls"
        },
        {
          avatar: require("~/static/images/sectionAvatars/cookedrolls.png"),
          title: "Cooked Rolls",
          to: "/menu/cookedrolls"
        },
        {
          avatar: require("~/static/images/sectionAvatars/tempurarolls.png"),
          title: "Tempura Rolls",
          to: "/menu/tempurarolls"
        },
        {
          avatar: require("~/static/images/sectionAvatars/sushiroll.jpg"),
          title: "Regular Sushi Rolls",
          to: "/menu/sushirolls"
        },
        {
          avatar: require("~/static/images/sectionAvatars/sushi.jpg"),
          title: "Sushi & Sashimi",
          to: "/menu/sushi"
        },
        {
          avatar: require("~/static/images/sectionAvatars/sashimicombo.jpg"),
          title: "Sashimi Combo",
          to: "/menu/sashimicombo"
        },
        {
          avatar: require("~/static/images/sectionAvatars/salads.png"),
          title: "Salads",
          to: "/menu/salads"
        },
        {
          avatar: require("~/static/images/sectionAvatars/vegetableappetizers.png"),
          title: "Vegetable Appetizers",
          to: "/menu/vegetableappetizers"
        },
        {
          avatar: require("~/static/images/sectionAvatars/seafoodappetizers.jpg"),
          title: "Seafood Appetizers",
          to: "/menu/seafoodappetizers"
        },
        {
          avatar: require("~/static/images/sectionAvatars/meatappetizers.jpg"),
          title: "Meat Appetizers",
          to: "/menu/meatappetizers"
        },
        {
          avatar: require("~/static/images/sectionAvatars/ramen.jpg"),
          title: "Udon Soup & Ramen",
          to: "/menu/udonsoupramen"
        },
        {
          avatar: require("~/static/images/sectionAvatars/stirfried.jpg"),
          title: "Stir Fried Noodles",
          to: "/menu/stirfriednoodles"
        },
        {
          avatar: require("~/static/images/sectionAvatars/misosoup.jpg"),
          title: "Miso Soup & Rice",
          to: "/menu/misosouprice"
        },
        {
          avatar: require("~/static/images/sectionAvatars/entree.jpg"),
          title: "Entree",
          to: "/menu/entree"
        },
        {
          avatar: require("~/static/images/sectionAvatars/desserts.jpg"),
          title: "Desserts",
          to: "/menu/desserts"
        },
        {
          avatar: require("~/static/images/sectionAvatars/beverages.jpg"),
          title: "Beverages",
          to: "/menu/beverages"
        },
        {
          avatar: require("~/static/images/sectionAvatars/beer.jpg"),
          title: "Beer",
          to: "/menu/beer"
        },
        {
          avatar: require("~/static/images/sectionAvatars/sake.jpg"),
          title: "Sake",
          to: "/menu/sake"
        },
        {
          avatar: require("~/static/images/sectionAvatars/wine.jpg"),
          title: "Wine",
          to: "/menu/wine"
        }
      ],

      logo: require("~/assets/SVG/logo.svg")
    };
  }
}

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
  background: rgba(28, 28, 28, 0.8);
}
.appBg {
  background: rgb(17, 17, 17);
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
.footerItems {

  margin: 30px;
}


</style>


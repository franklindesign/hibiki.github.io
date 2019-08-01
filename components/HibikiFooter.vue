<template>
  <div>
    <!-- Begin Footer -->
    <v-footer class="grey darken-4 wrapper" height="auto">
      <div class="contain footerMargin">
        <v-layout row wrap>
          <v-flex xs12 sm3 md3 lg3>
            <div class="footerItems footerAddress">
              <h3>HIBIKI SUSHI & BAR</h3>
              <p class="white--text mt-3">
                27625 Shangri La Dr.
                <br />Canyon Country, CA. 91351
              </p>

              <p class="white--text pt-3">(661) 298-0273</p>
            </div>
          </v-flex>
          <v-flex xs4 sm3 md3 lg3>
            <div class="footerItems">
              <ul style="list-style-type:none">
                <li>
                  <h4>HIBIKI</h4>
                </li>
                <li>
                  <nuxt-link to="/about" class="grey--text" aria-label="read more about us">About</nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    to="/faq"
                    class="grey--text"
                    aria-label="go to our frequently asked questions page"
                  >FAQ</nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/hours" class="grey--text" aria-label="Hours">Hours</nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/jobs" class="grey--text" aria-label="Jobs">Jobs</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/emails" class="grey--text" aria-label="Emails">Emails</nuxt-link>
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
                  <a
                    href="http://www.doordash.com"
                    class="grey--text"
                    aria-label="visit DoorDash.com"
                    target="_blank"
                    rel="noopener"
                  >DoorDash</a>
                </li>
                <li>
                  <a
                    href="http://www.grubhub.com"
                    class="grey--text"
                    aria-label="visit grubhub.com"
                    target="_blank"
                    rel="noopener"
                  >GrubHub</a>
                </li>
                <li>
                  <a
                    href="http://www.Ubereats.com"
                    class="grey--text"
                    aria-label="visit UberEats.com"
                    target="_blank"
                    rel="noopener"
                  >UberEats</a>
                </li>
                <li>
                  <a
                    href="http://www.postmates.com"
                    class="grey--text"
                    aria-label="visit Postmates.com"
                    target="_blank"
                    rel="noopener"
                  >Postmates</a>
                </li>
                <li>
                  <a
                    href="http://www.localflavor.com"
                    class="grey--text"
                    aria-label="Visit Localflavor.com"
                    target="_blank"
                    rel="noopener"
                  >LocalFlavor</a>
                </li>
                <li>
                  <a
                    href="http://www.scvsmartshopper.com"
                    class="grey--text"
                    aria-label="Visit Smartshopper.com"
                    target="_blank"
                    rel="noopener"
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
                    rel="noopener"
                    aria-label="Visit our page on Facebook"
                  >Facebook</a>
                </li>
                <li>
                  <a
                    href="http://www.instagram.com/hibikisushibar"
                    class="grey--text"
                    target="_blank"
                    rel="noopener"
                    aria-label="Follow us on Instagram"
                  >Instagram</a>
                </li>
                <li>
                  <a
                    href="http://www.twitter.com/hibikisushibar"
                    class="grey--text"
                    target="_blank"
                    rel="noopener"
                    aria-label="Visit our Twitter profile"
                  >Twitter</a>
                </li>
                <li>
                  <a
                    href="http://4sq.com/5KEWUD"
                    class="grey--text"
                    aria-label="Visit our page on Foursquare"
                    target="_blank"
                    rel="noopener"
                  >Foursquare</a>
                </li>
                <li>
                  <a
                    href="https://www.yelp.com/biz/hibiki-sushi-and-bar-santa-clarita-2"
                    class="grey--text"
                    aria-label="Visit our page on Yelp"
                    target="_blank"
                    rel="noopener"
                  >Yelp</a>
                </li>
              </ul>
            </div>
          </v-flex>
          <v-flex xs12 py-3 text-xs-center>
            &copy;2008-2019 —
            <strong>HIBIKI SUSHI INC.</strong>
          </v-flex>
        </v-layout>
      </div>
    </v-footer>
    <!-- End Footer -->
  </div>
</template>

 

<style lang="scss" scoped>
a {
  text-decoration: none;
}

a:hover {
  font-weight: bold;
}

.wrapper {
  justify-content: center;
}

.contain {
  justify-content: flex-start;
  max-width: 1200px;
  width: 100%;
}

.footerItems li {
  margin-bottom: 15px;
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
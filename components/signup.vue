<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 lg12>
        <div class="mb-5">
          <h2>Notice to all customers: We apologize for inconvenience, we are closed: June 27 & 28 for maintenance. We will continue business operations this weekend or Monday (July 1, 2019). Thank You!</h2>
        </div>
        <hr>
        <div class="background">
          <p class="headline">Subscribe to Hibiki Emails & get 10% Off Coupons.</p>
          <v-layout row wrap>
            <v-flex xs6 lg6>
              <div>
                <v-btn
                  large
                  target="_blank"
                  href="https://gallery.mailchimp.com/b7da092add9faced53d200a00/files/461967cd-c790-41f9-a873-0eb04f9739f9/JULY_COUPON.pdf"
                  color="#fff"
                  light
                  aria-label="Get 10% Off Coupon"
                >Get Coupon</v-btn>
              </div>
            </v-flex>
            <v-flex xs6 lg6>
              <div>
                <v-btn large to="/emails" color="#C62828" aria-label="Sign up button">Sign Up</v-btn>
              </div>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<style scoped>
.background {
  background-color: #171717;
  padding-top: 10px;
  padding-bottom: 10px;
}

.text {
  color: #ffffff;
  font-size: 1em;
  padding-top: 5px;
  margin: 10px;
}

@media only screen and (max-width: 480px) {
  .background {
    width: 90vw;
  }
}
</style>
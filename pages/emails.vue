<template>
  <div>
    <v-layout>
      <v-flex xs12 sm10 md8 lg6 xl6>
        <div class="mt-5 signup">
          <!-- Begin Mailchimp Signup Form -->
          <link
            href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
            rel="stylesheet"
            type="text/css"
          />

          <div id="mc_embed_signup">
            <form
              action="https://hibikisushi.us3.list-manage.com/subscribe/post?u=b7da092add9faced53d200a00&amp;id=0c4d558c81"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe to Hibiki Sushi & Bar Emails</h2>
                <div class="indicates-required">
                  <span class="asterisk">*</span> indicates required
                </div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL">
                    Email Address
                    <span class="asterisk">*</span>
                  </label>
                  <input type="email" value name="EMAIL" class="required email" id="mce-EMAIL" />
                </div>
                <div class="mc-field-group">
                  <label for="mce-FNAME">
                    First Name
                    <span class="asterisk">*</span>
                  </label>
                  <input type="text" value name="FNAME" class="required" id="mce-FNAME" />
                </div>
                <div class="mc-field-group">
                  <label for="mce-LNAME">Last Name</label>
                  <input type="text" value name="LNAME" class id="mce-LNAME" />
                </div>
                <div class="mc-field-group size1of2">
                  <label for="mce-BDAY-month">
                    Birthday
                    <span class="asterisk_color">*</span>
                  </label>
                  <div class="datefield">
                    <span class="subfield monthfield">
                      <input
                        class="birthday required"
                        type="text"
                        pattern="[0-9]*"
                        value
                        placeholder="MM"
                        size="2"
                        maxlength="2"
                        name="BDAY[month]"
                        id="mce-BDAY-month"
                      />
                    </span> /
                    <span class="subfield dayfield">
                      <input
                        class="birthday required"
                        type="text"
                        pattern="[0-9]*"
                        value
                        placeholder="DD"
                        size="2"
                        maxlength="2"
                        name="BDAY[day]"
                        id="mce-BDAY-day"
                      />
                    </span>
                    <span class="small-meta nowrap">( mm / dd )</span>
                  </div>
                </div>
                <div
                  id="mergeRow-gdpr"
                  class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
                >
                  <div class="content__gdpr">
                    <label>Marketing Permissions</label>
                    <p>Please select all the ways you would like to hear from Hibiki Sushi & Bar:</p>
                    <fieldset
                      class="mc_fieldset gdprRequired mc-field-group"
                      name="interestgroup_field"
                    >
                      <label class="checkbox subfield" for="gdpr_13">
                        <input
                          type="checkbox"
                          id="gdpr_13"
                          name="gdpr[13]"
                          value="Y"
                          class="av-checkbox"
                        />
                        <span>Email</span>
                      </label>
                      <label class="checkbox subfield" for="gdpr_17">
                        <input
                          type="checkbox"
                          id="gdpr_17"
                          name="gdpr[17]"
                          value="Y"
                          class="av-checkbox"
                        />
                        <span>Direct Mail</span>
                      </label>
                      <label class="checkbox subfield" for="gdpr_21">
                        <input
                          type="checkbox"
                          id="gdpr_21"
                          name="gdpr[21]"
                          value="Y"
                          class="av-checkbox"
                        />
                        <span>Customized Online Advertising</span>
                      </label>
                    </fieldset>
                    <br />
                    <p>You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.</p>
                  </div>
                  <div class="content__gdprLegal">
                    <p>
                      We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing.
                      <a
                        href="https://mailchimp.com/legal/"
                        target="_blank"
                        rel="noopener"
                      >Learn more about Mailchimp's privacy practices here.</a>
                    </p>
                  </div>
                </div>
                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
                </div>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                  <input
                    type="text"
                    name="b_b7da092add9faced53d200a00_0c4d558c81"
                    tabindex="-1"
                    value
                  />
                </div>
                <div class="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                </div>
              </div>
            </form>
          </div>

          <!--End mc_embed_signup-->
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<style scoped>
.asterisk_color {
  color: #e85c41;
  font-size: 150%;
  font-weight: normal;
  top: 5px;
}

#mc-embedded-subscribe-form input[type="checkbox"] {
  display: inline;
  /* width: auto; */
  margin-right: 10px;
}
#mergeRow-gdpr {
  margin-top: 20px;
}
#mergeRow-gdpr fieldset label {
  font-weight: normal;
}
#mc-embedded-subscribe-form .mc_fieldset {
  border: none;
  min-height: 0px;
  padding-bottom: 0px;
}

#mc_embed_signup {
  clear: both;
  font: 14px Helvetica, Arial, sans-serif;
}

.signup {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
}
.form_container {
  margin-top: 2em;
  width: 600px;
}
.subscribe {
  font-size: 1.8em;
}
</style>

 
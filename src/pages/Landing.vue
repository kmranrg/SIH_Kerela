<template>
  <div class="wrapper">
    <!-- Toolbar -->
    
    <v-toolbar color="indigo darken-4" flat fixed dark>
      <v-toolbar-title>
        <v-icon left color="white">local_hospital</v-icon>
        <span style="color:white">Pocket Hospital</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Quick Support</v-btn>
          <v-btn flat>Services</v-btn>
          <v-btn flat>Log In</v-btn>
          <v-btn class="black" >
            <v-icon left>account_box</v-icon>Sign Up
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <banner/>

    <v-container grid-list-md text-xs-center>
      <v-layout row wrap class="white pt-2">
        <v-flex xs3>

            <v-subheader>Menu</v-subheader>
            <v-list>
              <v-menu offset-x full-width open-on-hover>
                <v-list-tile slot="activator">
                  <v-list-tile-action>
                    <v-icon>dashboard</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>For Domestic Patients</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list>
                  <v-list-tile v-for="i in 4" :key="i">
                    <v-list-tile-title>List 1</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>dashboard</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>For International Patients</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>dashboard</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Our Specialities</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>dashboard</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Near By Hospitals</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>dashboard</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Our Specialities</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>dashboard</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Emergency</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
        </v-flex>
        <v-flex xs9>
          <v-layout row wrap>
            <template>
              <v-flex xs3>
                <v-list two-line subheader>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Dental Care</v-list-tile-title>
                      <v-list-tile-sub-title>140 Hosiptals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Eye Care</v-list-tile-title>
                      <v-list-tile-sub-title>320 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>General Surgery</v-list-tile-title>
                      <v-list-tile-sub-title>520 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Neurosciences</v-list-tile-title>
                      <v-list-tile-sub-title>70 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Diabetes & Endocrinology</v-list-tile-title>
                      <v-list-tile-sub-title>180 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Cardiac Sciences</v-list-tile-title>
                      <v-list-tile-sub-title>79 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                </v-list>
              </v-flex>
            </template>
            <template>
              <v-flex md3 sm3 xs4>
                <v-list two-line subheader>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Dental Care</v-list-tile-title>
                      <v-list-tile-sub-title>140 Hosiptals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Eye Care</v-list-tile-title>
                      <v-list-tile-sub-title>320 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>General Surgery</v-list-tile-title>
                      <v-list-tile-sub-title>520 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Neurosciences</v-list-tile-title>
                      <v-list-tile-sub-title>70 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Diabetes & Endocrinology</v-list-tile-title>
                      <v-list-tile-sub-title>180 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Cardiac Sciences</v-list-tile-title>
                      <v-list-tile-sub-title>79 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                </v-list>
              </v-flex>
            </template>
            <template>
              <v-flex md3 sm3 xs4>
                <v-list two-line subheader>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Dental Care</v-list-tile-title>
                      <v-list-tile-sub-title>140 Hosiptals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Eye Care</v-list-tile-title>
                      <v-list-tile-sub-title>320 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>General Surgery</v-list-tile-title>
                      <v-list-tile-sub-title>520 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Neurosciences</v-list-tile-title>
                      <v-list-tile-sub-title>70 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Diabetes & Endocrinology</v-list-tile-title>
                      <v-list-tile-sub-title>180 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Cardiac Sciences</v-list-tile-title>
                      <v-list-tile-sub-title>79 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                </v-list>
              </v-flex>
            </template>
            <template>
              <v-flex md3 sm3 xs4>
                <v-list two-line subheader>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Dental Care</v-list-tile-title>
                      <v-list-tile-sub-title>140 Hosiptals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Eye Care</v-list-tile-title>
                      <v-list-tile-sub-title>320 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>General Surgery</v-list-tile-title>
                      <v-list-tile-sub-title>520 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Neurosciences</v-list-tile-title>
                      <v-list-tile-sub-title>70 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Diabetes & Endocrinology</v-list-tile-title>
                      <v-list-tile-sub-title>180 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>Cardiac Sciences</v-list-tile-title>
                      <v-list-tile-sub-title>79 Hospitals</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>

                </v-list>
              </v-flex>
            </template>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid>
      <v-layout row wrap justify-center class="grey lighten-4 pt-4">
        <p class="display-1 text-xs-center">Near By Hospitals</p>
        <v-carousel
          hide-delimiters
          :cycle="false"
        >
          <v-carousel-item
            v-for="(item,i) in 3"
            :key="i"
            class="pa-4"
          >
            <v-layout row wrap class="ma-4">

              <v-flex xs3 class="pa-2 mt-4 pt-4" v-for="i in 4" :key="i">
                <v-card>
                  <v-card-media
                    src="https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg"
                    height="200px"

                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <span><v-chip label class="success white--text">Verified</v-chip></span>
                        <v-flex xs12 align-end d-flex>
                          <span class="bg-tranparent body-1 white--text">5.2 Kms</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>
                  <v-card-title class="py-0">
                    <span class="body-2 mb-0">AIIMS Hospital</span><br>
                  </v-card-title>
                  <v-card-title class="py-0 pb-2">
                    <div class="grey--text">Sector 1, Gr. Noida</div>
                  </v-card-title>
                  <v-card-actions class="pa-0">
                    <v-chip class="light-green accent-1">
                      <v-avatar class="light-green accent-4 white--text">4.1</v-avatar>
                      <span class="light-green--text accent-3">Very Good</span>
                    </v-chip>
                    <v-spacer></v-spacer>
                    <span class="pr-2 grey--text">4797 Ratings</span>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-carousel-item>
        </v-carousel>
      </v-layout>
      <v-jumbotron color="grey lighten-3">
        <v-container fill-height>
          <v-layout row wrap justify-center align-center>
            <v-flex x12 class="pt-4">
              <p class="display-1 text-xs-center">Top Rated Hospitals</p>
            </v-flex>
            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs3 class="pa-2" v-for="i in 8" :key="i">
                  <v-card
                    dark

                    img="https://static-collegedunia.com/public/college_data/images/appImage/10558_IHBAS_New.jpg"
                  >
                    <v-card-title class="subheading bg-trans">
                      IHBAS Hospital
                    </v-card-title>
                    <v-card-actions class="pa-0 bg-trans">
                      <v-chip class="light-green accent-1">
                        <v-avatar class="light-green accent-4 white--text">4.5</v-avatar>
                        <span class="light-green--text accent-3">Very Good</span>
                      </v-chip>
                      <v-spacer></v-spacer>
                      <span class="pr-2">4797 Ratings</span>
                    </v-card-actions>
                  </v-card>
                </v-flex>

              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
      <v-layout row wrap class=" py-4 px-2 text-sm-center">
        <v-flex xs12 class="my-4">
          <h1 class="display-1 my-4">Our Specialities</h1>
          <v-flex xs12>
            <v-btn round label large light>
              Audiology And Speech Therapy
            </v-btn>
            <v-btn round label color="error" large dark>
              General Surgery
            </v-btn>
            <v-btn round label color="primary" large dark>
              Bone Marrow Transplant
            </v-btn>
            <v-btn round label color="warning" large dark>
              Dental Care
            </v-btn>
            <v-btn round label color="pink" large dark>
              Dietetics
            </v-btn>
            <v-btn round label color="blue" large dark>
              ENT
            </v-btn>
            <v-btn round label color="brown" large dark>
              Diabetes & Endocrinology
            </v-btn>
            <v-btn round label color="orange" large dark>
              Eye Care
            </v-btn>
            <v-btn round label color="blue-grey" large dark>
              IVF
            </v-btn>
            <v-btn round label large dark>
              Internal Medicine
            </v-btn>
            <v-btn round label color="deep-orange" large dark>
              Gasteroenterology
            </v-btn>
            <v-btn round label color="green" large dark>
              Nephrology
            </v-btn>
            <v-btn round label color="lime" large dark>
              Obstertrics and Gynaecology
            </v-btn>
            <v-btn round label color="info" large dark>
              Paediatric
            </v-btn>
            <v-btn round label color="error" large dark>
              Physiotherapy
            </v-btn>
            <v-btn round label color="light-green" large dark>
              Podiatry
            </v-btn>
            <v-btn round label color="info" large dark>
              Pulmonology
            </v-btn>
            <v-btn round label color="warning" large dark>
              Kidney Transplant
            </v-btn>
            <v-btn round label color="red" large dark>
              Urology
            </v-btn>
            <v-btn round label color="green" large dark>
              Health and Wellness
            </v-btn>
            <v-btn round label color="light-blue" large dark>
              Mental Health and Behavioural Sciences
            </v-btn>
            <v-btn round label color="primary" large dark>
              Dermatology
            </v-btn>
            <v-btn round label color="cyan" large dark>
              Emergency
            </v-btn>
            <v-btn round label color=teal large dark>
              Cancer/Oncology
            </v-btn>
            <v-btn round label color="indigo" large dark>
              Neurosciences
            </v-btn>
            <v-btn round label color="info" large dark>
              Orthopaedics
            </v-btn>
            <v-btn round label color="deep-purple" large dark>
              Minimal Access/Laparoscopic Surgery
            </v-btn>
            <v-btn round label color="red" large dark>
              Weight Loss Surgery
            </v-btn>
            <v-btn round label color="info" large dark>
              Liver Transplant and Biliary Sciences
            </v-btn>
            <v-btn round label color="error" large dark>
              Aesthetic and Reconstructive Surgery
            </v-btn>
            <v-btn round label color="teal" large dark>
              Interventional Radiology
            </v-btn>
          </v-flex>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center align-center class="py-4 info">
        <v-flex md4 class="text-xs-center border-left">
          <p class="display-3">40,000 +</p>
          <p class="display-1">Total Achievements</p>
        </v-flex>
        <v-flex md4 class="text-xs-center border-left">
          <p class="display-3">30 +</p>
          <p class="display-1">Available Specialities</p>
        </v-flex>
        <v-flex md4 class="text-xs-center">
          <p class="display-3">150 +</p>
          <p class="display-1">Conneted Hospitals</p>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer height="auto">
      <v-card flat tile style="width: 100%;">
          <v-card-text class="black white--text" >
            <v-layout row wrap>
              <v-flex xs3>
                <p class="title" >Patient Services</p>
                <p>About Us</p>
                <p>For Indian Patients</p>
                <p>For International Patients</p>
                <p>Patient Testinomials</p>
                <p>Emergency 24x7</p>
                <p>Site Map</p>
              </v-flex>
              <v-flex xs3>
                <p class="title" >Patient Services</p>
                <p>About Us</p>
                <p>For Indian Patients</p>
                <p>For International Patients</p>
                <p>Patient Testinomials</p>
                <p>Emergency 24x7</p>
                <p>Site Map</p>
              </v-flex>
              <v-flex xs3>
                <p class="title" >Patient Services</p>
                <p>About Us</p>
                <p>For Indian Patients</p>
                <p>For International Patients</p>
                <p>Patient Testinomials</p>
                <p>Emergency 24x7</p>
                <p>Site Map</p>
              </v-flex>
            </v-layout>
          </v-card-text>
          <v-card-title class="black white--text">
            <strong class="subheading">Get connected with us on social networks!</strong>
            <v-spacer></v-spacer>
            <v-btn
              icon
              dark
              class="mx-3"
            >
              <v-icon size="24px">fa-facebook</v-icon>
            </v-btn>
            <v-btn
              icon
              dark
              class="mx-3"
            >
              <v-icon size="24px">fa-twitter</v-icon>
            </v-btn>
            <v-btn
              icon
              dark
              class="mx-3"
            >
              <v-icon size="24px">fa-google-plus</v-icon>
            </v-btn>
            <v-btn
              icon
              dark
              class="mx-3"
            >
              <v-icon size="24px">fa-instagram</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-actions class="black white--text justify-center">
            &copy;2018 — <strong>Hos Spot</strong>
          </v-card-actions>
        </v-card>
    </v-footer>

  </div>
</template>

<style>
      .border-left{
        border-right: 2px solid white; 
      }
      .container{
        padding: 0 !important;
      }
      .carousel{
        box-shadow: none;
      }
      .carousel .icon{
        color: red !important;
      }
      .bg-tranparent{
        float: right;
        text-align: right;
        background-color: rgba(0, 0, 0, 0.3)
      }
      .bg-trans{
        background-color: rgba(0, 0, 0, 0.3)
      }

    </style>


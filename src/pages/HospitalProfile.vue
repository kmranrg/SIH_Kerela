<template>
  <v-app>

    <!-- Toolbar -->
    <v-toolbar app clipped-left>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5"><router-link to="/">Path Finder</router-link></span>
      <v-spacer></v-spacer>
      <dropbtn/>
    </v-toolbar>
    <v-content>

      <!-- Upper Card -->
      <v-card dark color="black" class="upper">
        <bread class="mt-3"/>
        <div class="bt mr-3 mb-4 mt-3">
          <div class="text-xs-center">
            
          </div>
          <div class="text-xs-center">
            <v-btn to="/form" round color="purple accent-4" dark><v-icon left >comment</v-icon>Submit Review</v-btn>
          </div>
          <div class="text-xs-center">
            <v-btn round color="red accent-3" dark><v-icon left >favorite</v-icon>Favorite</v-btn>
          </div>      
        </div>
      </v-card>

      <!-- Grid -->
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs8>
            <v-container grid-list-md >
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card dark color="primary">
                    <div style="position:relative;">
                      <google-maps />
                      <div style="position:absolute; bottom: 0; left: 0; width:100%; background: linear-gradient(0deg, rgba(0,0,0,0.7) 56%, rgba(0,0,0,0) 56%); color: white;" >
                        <div class="avatar">
                          <v-avatar
                            :tile="tile"
                            :size="170"
                            class="grey lighten-4 ml-5 mb-2"
                            >
                            <img src="https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg" alt="avatar">
                          </v-avatar>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </v-flex>
                <v-flex xs12>
                  <hospital-data/>
                </v-flex>
                <v-flex xs12>
                  <!-- <review /> -->
                </v-flex>
                <v-flex xs12>
                  <review />
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex xs4>
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card>
                    <div id="title">
                      <h1>Book a visit</h1>
                      <span>Monday to Friday 09.00am-06.00pm</span>
                    </div>
                     <v-card-media src="https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg" height="300px">
                      <v-layout column class="media">
                        <v-card-title>
                          <v-btn dark icon>
                            <v-icon>chevron_left</v-icon>
                          </v-btn>
                          <v-spacer></v-spacer>
                          <v-btn dark icon class="mr-3">
                            <v-icon>edit</v-icon>
                          </v-btn>
                          <v-btn dark icon>
                            <v-icon>more_vert</v-icon>
                          </v-btn>
                        </v-card-title>
                        <v-spacer></v-spacer>
                        <v-card-title class="white--text pl-5 pt-5">
                          <div class="display-1  pt-5"><v-btn large round color="pink accent-4" dark><v-icon left >book</v-icon>Book Appointment</v-btn></div>
                        </v-card-title>
                      </v-layout>
                    </v-card-media>
                    <v-list two-line>
                      <v-list-tile >
                        <v-list-tile-action>
                          <v-icon color="indigo">phone</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>(650) 555-1234</v-list-tile-title>
                          <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                          <v-icon>chat</v-icon>
                        </v-list-tile-action>
                      </v-list-tile>
                      <v-list-tile >
                        <v-list-tile-action></v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>(323) 555-6789</v-list-tile-title>
                          <v-list-tile-sub-title>Work</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                          <v-icon>chat</v-icon>
                        </v-list-tile-action>
                      </v-list-tile>
                      <v-divider inset></v-divider>
                      <v-list-tile >
                        <v-list-tile-action>
                          <v-icon color="indigo">mail</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
                          <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile >
                        <v-list-tile-action></v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>ali_connors@example.com</v-list-tile-title>
                          <v-list-tile-sub-title>Work</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-divider inset></v-divider>
                      <v-list-tile >
                        <v-list-tile-action>
                          <v-icon color="indigo">location_on</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>1400 Main Street</v-list-tile-title>
                          <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          

        </v-layout>
      </v-container>

      
    </v-content>
    <app-footer/>
  </v-app>
</template>

<script>
import SnackBar from "@/components/SnackBar";
export default {
  
}
</script>

<style>
.avatar {
  display: flex;
  justify-content: space-between;


}

.bt {
  display: flex;
  flex-direction:row;
  align-self:flex-end;
  flex-wrap: wrap
}

 .upper {
    display: flex;
    justify-content: space-around;
  }

  #title {
    background-color: #3f4079;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px 5px 0 0;

  }


</style>


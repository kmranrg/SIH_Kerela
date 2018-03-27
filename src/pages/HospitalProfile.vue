<template>
  <v-app id="inspire">

    <!-- Toolbar -->
    <v-toolbar app clipped-left color="grey lighten-2" >
      <v-icon color="black">local_hospital</v-icon>
      <span class="title ml-3 mr-5"> <b>POCKET HOSPITAL</b></span>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-icon color="black">supervisor_account</v-icon>
        <v-btn flat><b>My Profile</b></v-btn>
        <v-btn flat><b>Sign-out</b></v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>

      <!-- Upper Card -->
      <v-card dark color="black" class="upper" flat>
        <div class="my-2">
          <bread style="margin-left:90px;"/>
        </div>
        <div class="bt mr-3 mb-4 mt-3">
          <div class="text-xs-center">
          </div>
          <!-- <div class="text-xs-center">
            <v-btn to="/form" round color="purple accent-4" dark><v-icon left >comment</v-icon>Submit Review</v-btn>
          </div>
          <div class="text-xs-center">
            <v-btn round color="red accent-3" dark><v-icon left >favorite</v-icon>Favorite</v-btn>
          </div>       -->
        </div>
      </v-card>

      <!-- Grid -->
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex mt-5 xs8>
            <v-container grid-list-md >
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card dark color="primary">
                    <div style="position:relative; ">
                       <v-card-media src="http://himetop.wdfiles.com/local--files/hopital-necker-enfants-malades/H%C3%B4pital%20Necker-Enfants%20malades%2C%20Paris%20-%2001.JPG" height="350px">
                      <div style="position:absolute; bottom: 0; left: 0; width:100%; background: linear-gradient(0deg, rgba(0,0,0,0.7) 56%, rgba(0,0,0,0) 56%); color: white;" >
                        <div class="avatar">
                          <v-avatar
                            :tile="tile"
                            :size="170"
                            class="grey lighten-4 ml-5 mb-2"
                            >
                            <img src="https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg" alt="avatar">
                          </v-avatar>
                          <div class="text-xs-center">
                            <h1 id="hos_id">Samarth Hospital</h1>
                          </div>
                        </div>
                      </div>
                       </v-card-media>
                    </div>
                  </v-card>
                </v-flex>
                <v-flex mt-2 xs12>
                  <hospital-data/>
                </v-flex>
                <v-flex xs12>
                  <rooms />
                </v-flex>
                <v-flex mt-5 xs12>
                  <review />
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
          <v-flex mt-5 xs4>
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex xs12>
                  <v-card>
                     <!-- <div id="title">
                      <h1>Book a visit</h1>
                      <span>Monday to Friday 09.00am-06.00pm</span>
                    </div> -->
                    <google-maps>
                     <v-card-media src="" height="300px">
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

                        <!-- Pickers -->
                        <!-- <template>
                          <v-layout row wrap>
                            <v-flex xs11 sm5>
                              <v-menu
                                ref="menu"
                                lazy
                                :close-on-content-click="false"
                                v-model="menu"
                                transition="scale-transition"
                                offset-y
                                full-width
                                :nudge-right="40"
                                min-width="290px"
                                :return-value.sync="date"
                              >
                                <v-text-field
                                  slot="activator"
                                  label="Picker in menu"
                                  v-model="date"
                                  prepend-icon="event"
                                  readonly
                                ></v-text-field>
                                <v-date-picker v-model="date" no-title scrollable>
                                  <v-spacer></v-spacer>
                                  <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                  <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                              </v-menu>
                            </v-flex>
                            <v-spacer></v-spacer>
                            <v-flex xs11 sm5>
                              <v-dialog
                                ref="dialog"
                                persistent
                                v-model="modal"
                                lazy
                                full-width
                                width="290px"
                                :return-value.sync="date"
                              >
                                <v-text-field
                                  slot="activator"
                                  label="Picker in dialog"
                                  v-model="date"
                                  prepend-icon="event"
                                  readonly
                                ></v-text-field>
                                <v-date-picker v-model="date" scrollable>
                                  <v-spacer></v-spacer>
                                  <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                                  <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                                </v-date-picker>
                              </v-dialog>
                            </v-flex>
                          </v-layout>
                        </template> -->

                      </v-layout>
                    </v-card-media>
                    </google-maps>
                    <v-list two-line>
                      <v-list-tile >
                        <v-list-tile-action>
                          <v-icon color="indigo">phone</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>(+91) 820-9611868</v-list-tile-title>
                          <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
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
                          <v-list-tile-title>rajdeep.sharma17@gmail.com</v-list-tile-title>
                          <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile >
                        <v-list-tile-action></v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>rajdeep.sharma17@outlook.com</v-list-tile-title>
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
                <v-flex mt-5 xs12>
                  <!-- Lower Grid -->
                  <template>
                    <v-layout row>
                      <v-flex xs12>
                        <v-card>
                          <v-list two-line subheader>
                            <v-subheader inset>Gallery</v-subheader>
                            <v-list-tile avatar v-for="item in items" :key="item.title">
                              <v-list-tile-avatar>
                                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                              </v-list-tile-avatar>
                              <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                              </v-list-tile-content>
                              <v-list-tile-action>
                                <v-btn icon ripple>
                                  <v-icon color="grey lighten-1">info</v-icon>
                                </v-btn>
                              </v-list-tile-action>
                            </v-list-tile>
                            <v-divider inset></v-divider>
                            <v-subheader inset>Blogs</v-subheader>
                            <v-list-tile v-for="item in items2" :key="item.title" avatar>
                              <v-list-tile-avatar>
                                <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                              </v-list-tile-avatar>
                              <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                              </v-list-tile-content>
                              <v-list-tile-action>
                                <v-btn icon ripple>
                                  <v-icon color="grey lighten-1">info</v-icon>
                                </v-btn>
                              </v-list-tile-action>
                            </v-list-tile>
                          </v-list>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </template>
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
  data () {
      return {
         date: null,
          menu: false,
          modal: false,
        items: [
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
          { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Archives', subtitle: 'Jan 17, 2014' },
        ],
        items2: [
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Sudden Cardiac Arrest', subtitle: 'Jan 20, 2014' },
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Migraine', subtitle: 'Jan 10, 2014' }
        ]
      }
    } 
}
</script>

<style>
.avatar {
  display: flex;
  justify-content: space-between;
  margin-right: 20px


}

#hos_id {
  margin-top: 55px
}

.bt {
  display: flex;
  flex-direction:row;
  align-self:flex-end;
  flex-wrap: wrap
}

 .upper {
    display: flex;
    justify-content: flex-start;
  }

  #title {
    background-color: #3f4079;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px 5px 0 0;

  }


</style>


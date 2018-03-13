<template>
  <v-app id="inspire">
    <!-- Navigation Drawer -->
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer"
      temporary
      >
      <v-list
        dense
        class="grey lighten-4"
      >
        <template v-for="(item, i) in items">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="i"
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-right">
              <v-btn small flat>edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider
            dark
            v-else-if="item.divider"
            class="my-3"
            :key="i"
          ></v-divider>
          <v-list-tile
            :key="i"
            v-else
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>


    <!-- Toolbar -->
    <v-toolbar app clipped-left class="" >
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">HospSpot</span>
      <v-spacer></v-spacer>
      <dropbtn />
    </v-toolbar>

    <v-content>
      <!-- Upper Card -->
      <v-card dark color="black" class="upper" >
        <bread class="mt-2" />
        <v-flex xs4>
          <v-text-field class="mt-3 mb-3"
            solo-inverted
            flat
            label="Look for Hospitals"
            prepend-icon="search"
          ></v-text-field>
        </v-flex>
      </v-card>

      <!-- Grid -->

      <div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs4 >
              <v-card >
                <v-card-media
                src="https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg"
                height="257px"
                >
                <v-container fill-height fluid>
                    <v-layout fill-height>
                      <span><v-chip label class="success white--text" >Verified</v-chip></span>
                      <v-flex xs12 align-end d-flex >
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
                    <v-chip class="light-green accent-1" >
                      <v-avatar class="light-green accent-4 white--text" >4.1</v-avatar>
                      <span class="light-green--text accent-3">Very Good</span>
                    </v-chip>
                  <v-spacer></v-spacer>
                    <span class="pr-2 grey--text" >4797 Ratings</span>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex xs3>
              <v-card height="353px" dark color="secondary">
                <v-card-text class="px-0">3</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs5 >
              <v-card dark color="secondary">
                <google-maps/>
              </v-card>
            </v-flex>

            <v-flex xs12 >
                <v-data-iterator
                  content-tag="v-layout"
                  row
                  wrap
                  :items="posts[0]"
                  :rows-per-page-items="rowsPerPageItems"
                  :pagination.sync="pagination"
                  >
                  <v-flex
                    slot="item"
                    slot-scope="props"
                    xs3
                    
                    >
                    <v-card flat >
                    <v-card-media
                    src="https://vuetifyjs.com/static/doc-images/cards/sunshine.jpg"
                    height="200px"
                    >
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                          <span><v-chip label class="success white--text" >Verified</v-chip></span>
                          <v-flex xs12 align-end d-flex >
                            <span class="bg-tranparent body-1 white--text">5.2 Kms</span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                  </v-card-media>
                    <v-card-title class="py-0">
                      <span class="body-2 mb-0"> {{props.item.title}} </span><br>
                    </v-card-title>
                    <v-card-title class="py-0 pb-2">
                      <div class="grey--text"> {{props.item.address}} </div>
                    </v-card-title>
                    <v-card-actions class="pa-0">
                        <v-chip class="light-green accent-1" >
                          <v-avatar class="light-green accent-4 white--text" >4.1</v-avatar>
                          <span class="light-green--text accent-3">Very Good</span>
                        </v-chip>
                      <v-spacer></v-spacer>
                        <span class="pr-2 grey--text" >4797 Ratings</span>
                    </v-card-actions>
                  </v-card>

                  </v-flex>
                </v-data-iterator>
            </v-flex>

          </v-layout>
        </v-container>
      </div>

      <!-- Bottom Navigation -->
      <!-- <bottom-navigation /> -->
      <app-footer />
    </v-content>
  </v-app>
</template>
<script>
import axios from 'axios';
export default {

  data: () => ({
    posts: [],
    errors: [],
    drawer: null,
    rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 8
      },
    items: [
      { icon: "lightbulb_outline", text: "Notes" },
      { icon: "touch_app", text: "Reminders" },
      { divider: true },
      { heading: "Labels" },
      { icon: "add", text: "Create new label" },
      { divider: true },
      { icon: "archive", text: "Archive" },
      { icon: "delete", text: "Trash" },
      { divider: true },
      { icon: "settings", text: "Settings" },
      { icon: "chat_bubble", text: "Trash" },
      { icon: "help", text: "Help" },
      { icon: "phonelink", text: "App downloads" },
      { icon: "keyboard", text: "Keyboard shortcuts" },

    ],
    
  }),
    created() {
      let authToken = 'fd683b6cd8e7f02b9a8875ec889ce1bf03526591'
      let headers = {
        'Authorization': 'Token '+ authToken
      }
      axios.get('http://winmacinux.pythonanywhere.com/hospital/hospitals/', headers)
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response.data);
        this.posts = [response.data];
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
    

  props: {
    source: String
  }
};
</script>

<style>
#keep main .container {
  height: 660px;
}
.navigation-drawer__border {
  display: none;
}
.text {
  font-weight: 400;
}

.upper {
  display: flex;
  justify-content: space-around;
}

.gradient {
  background: linear-gradient(to left, rgba(7, 27, 82, 1) 0%, rgba(0, 128, 128, 1) 100%)
}
</style>
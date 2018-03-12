<template>
  <v-app id="inspire">
    <!-- Navigation Drawer -->
    <v-navigation-drawer
      fixed
      clipped
      app
      v-model="drawer"
      mini-variant
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
    <v-toolbar >
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">HospSpot</span>
      <v-spacer></v-spacer>
      <dropbtn />
    </v-toolbar>


    <!-- bottom sheet -->
    <v-content>
      <!-- Upper Card -->
      <v-card color="black" dark class="upper" >
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

      <div>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card dark color="primary">
                <v-card-text class="px-0">12</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs7 >
              <v-card dark color="secondary">
                <v-card-text class="px-0">6</v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs5 >
              <v-card dark color="secondary">
                <google-maps/>
              </v-card>
            </v-flex>
            <v-flex xs3 v-for="i in 4" :key="`3${i}`">
              <v-card dark color="secondary">
                <v-card-text class="px-0">3</v-card-text>
              </v-card>
            </v-flex>

          </v-layout>
        </v-container>
      </div>

      <!-- Bottom Navigation -->
      <bottom-navigation />
    </v-content>
  </v-app>
</template>
<script>
export default {

  data: () => ({


    // Bottom sheet
     sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' }
      ],

    drawer: null,
    rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4
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

    ]
  }),
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
</style>
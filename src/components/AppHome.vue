<template>
  <v-app id="inspire">
    <!-- Navigation Drawer -->
    <v-navigation-drawer
      fixed
      clipped
      class="grey lighten-4"
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
    <v-toolbar class="indigo darken-4" dark app absolute clipped-left>
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">HospSpot</span>
      <v-text-field class="hidden-sm-and-down"
        solo-inverted
        flat
        label="Search"
        prepend-icon="search"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-toolbar>
    <!-- bottom sheet -->
    <v-content>
      <v-bottom-sheet v-model="sheet">
      <v-btn slot="activator" color="indigo darken-4" dark>Click me</v-btn>
      <v-list>
        <v-subheader>Open in</v-subheader>
        <!-- Dialog -->
           <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
              <v-btn color="indigo darken-4" dark slot="activator">Compare</v-btn>
              <v-card>
                <v-toolbar color="indigo darken-4" dark>
                  <v-btn icon @click.native="dialog = false" dark>
                    <v-icon>close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Settings</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn dark flat @click.native="dialog = false">Save</v-btn>
                  </v-toolbar-items>
                </v-toolbar>
              
                <!-- comapre table -->
                <compare-table ></compare-table>
                <app-footer></app-footer>
                <mobile-footer></mobile-footer>
              </v-card>
            </v-dialog>
      </v-list>
      </v-bottom-sheet>
      <card></card>
    </v-content>
  </v-app>
</template>
<script>
export default {

  data: () => ({

    // Dialog

    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,

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
</style>
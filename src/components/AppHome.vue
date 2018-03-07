<template>
  <v-app id="inspire">
    <!-- Navigation Drawer -->
    <v-navigation-drawer
      fixed
      clipped
      class="grey lighten-4"
      app
      v-model="drawer"
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
    <v-toolbar color="amber" app absolute clipped-left>
      <v-toolbar-side-icon @click.native="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">Health Advisor</span>
      <v-text-field
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
      <v-btn slot="activator" color="purple" dark>Click me</v-btn>
      <v-list>
        <v-subheader>Open in</v-subheader>
        <!-- Dialog -->
           <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay="false">
              <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
              <v-card>
                <v-toolbar dark color="primary">
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
                <v-spacer></v-spacer>
                <v-content>
                  <v-container fluid grid-list-md>
                    <v-data-iterator
                      content-tag="v-layout"
                      row
                      wrap
                      :items="items"
                      :rows-per-page-items="rowsPerPageItems"
                      :pagination.sync="pagination"
                    >
                      <v-flex
                        slot="item"
                        slot-scope="props"
                        xs12
                        sm6
                        md4
                        lg3
                      >
                        <v-card>
                          <v-card-title><h4>{{ props.item.name }}</h4></v-card-title>
                          <v-divider></v-divider>
                          <v-list dense>
                            <v-list-tile>
                              <v-list-tile-content>Calories:</v-list-tile-content>
                              <v-list-tile-content class="align-end">{{ props.item.calories }}</v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                              <v-list-tile-content>Fat:</v-list-tile-content>
                              <v-list-tile-content class="align-end">{{ props.item.fat }}</v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                              <v-list-tile-content>Carbs:</v-list-tile-content>
                              <v-list-tile-content class="align-end">{{ props.item.carbs }}</v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                              <v-list-tile-content>Protein:</v-list-tile-content>
                              <v-list-tile-content class="align-end">{{ props.item.protein }}</v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                              <v-list-tile-content>Sodium:</v-list-tile-content>
                              <v-list-tile-content class="align-end">{{ props.item.sodium }}</v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                              <v-list-tile-content>Calcium:</v-list-tile-content>
                              <v-list-tile-content class="align-end">{{ props.item.calcium }}</v-list-tile-content>
                            </v-list-tile>
                            <v-list-tile>
                              <v-list-tile-content>Iron:</v-list-tile-content>
                              <v-list-tile-content class="align-end">{{ props.item.iron }}</v-list-tile-content>
                            </v-list-tile>
                          </v-list>
                        </v-card>
                      </v-flex>
                    </v-data-iterator>
                  </v-container>
                </v-content>
              </v-card>
            </v-dialog>
      </v-list>
      </v-bottom-sheet>
      
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

        {
          value: false,
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          value: false,
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          value: false,
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          value: false,
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          value: false,
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          value: false,
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          value: false,
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          value: false,
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
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
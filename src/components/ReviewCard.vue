<template>
  <v-layout row>
    <v-flex xs12>
      <v-card>
        
            <v-layout row wrap>
                <v-flex xs3 my-4 mx-4>
                    <v-card  flat dark color="indigo darken-4">
                    <div id="review_summary"><strong style="font-size: 3rem;line-height: 1;">4.7</strong>
                    <div>stars</div>
                    <div><small>Based on 5 reviews</small></div>
                    </div>
                    </v-card>
                </v-flex>
                <v-flex xs6 my-3 >
                            <div>
                                <v-progress-linear value="15" height="15" color="teal accent-4" background-color="grey lighten-2"></v-progress-linear>

                                <v-progress-linear value="30" height="15" color="teal accent-4" background-color="grey lighten-2"></v-progress-linear>

                                <v-progress-linear value="45" height="15" color="teal accent-4" background-color="grey lighten-2"></v-progress-linear>

                                <v-progress-linear value="60" height="15" color="teal accent-4" background-color="grey lighten-2"></v-progress-linear>

                                <v-progress-linear value="75" height="15" color="teal accent-4" background-color="grey lighten-2"></v-progress-linear>
                            </div>
                </v-flex>
                <v-flex xs2 my-4 >
                    <v-card flat dark color="primary">
                    <v-card-text class="px-0">12</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        
        <v-divider></v-divider>
        <v-list two-line subheader>
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
            <v-list-tile avatar v-else :key="item.title">
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
  export default {
    data () {
      return {
        notifications: false,
        sound: false,
        video: false,
        invites: false,

        items: [
          { header: 'Today' },
          { avatar: 'https://vuetifyjs.com/static/doc-images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { divider: true, inset: true },
          { avatar: 'https://vuetifyjs.com/static/doc-images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
          { divider: true, inset: true },
          { avatar: 'https://vuetifyjs.com/static/doc-images/lists/3.jpg', title: 'Oui oui', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
          { divider: true, inset: true },
          { avatar: 'https://vuetifyjs.com/static/doc-images/lists/4.jpg', title: 'Birthday gift', subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" },
          { divider: true, inset: true },
          { avatar: 'https://vuetifyjs.com/static/doc-images/lists/5.jpg', title: 'Recipe to try', subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." }
        ],
      }
    }
  }
</script>

<style>
#review_summary {
    text-align: center;
    background-color: #3f4079;
    color: #fff;
    padding: 20px 10px;
    border-radius: 5px;
}
</style>



<template>
  <v-container grid-list-md style="margin-top: 75px">
    <v-data-iterator
      content-tag="v-layout"
      row
      wrap
      :items="posts"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      hide-actions
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
          <v-card-title><h4>{{ props.item.userInfo.title }}</h4></v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-tile>
              <v-list-tile-content>City:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.userInfo.city }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <drop-down></drop-down>
              </v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.userInfo.city }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Overall Ratings:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.ratings[0].rating  }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Staff Ratings:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.ratings[1].rating  }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Environment Ratings:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.ratings[2].rating  }}</v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
import axios from 'axios';
  export default {
    data: () => ({
      posts: [],
      errors: [],
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 4
      },
    }),

    created() {
      let authToken = 'fd683b6cd8e7f02b9a8875ec889ce1bf03526591'
      let headers = {
        'Authorization': 'Token '+ authToken
      }
      axios.get('http://winmacinux.pythonanywhere.com/hospital/hospitals/1/', headers)
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response.data);
        this.posts = [response.data, response.data, response.data, response.data];
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  }
</script>
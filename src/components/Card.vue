<template>
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
          lg8
        >
          <v-card>
            <v-card-title><h4>{{ props.item.name }}</h4></v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>Address:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.address }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Contact:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.contact }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Website:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.website }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Ratings:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.ratings }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Room Rent:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.rent }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-data-iterator>
    </v-container>
</template>
<script>
export default{
  data: () => ({
    rowsPerPageItems: [4, 8, 12],
    pagination: {
      rowsPerPage: 4
    },
    items: [
      {
        value: false,
        name: 'Samarth Nethralaya',
        address: '15/16/Siddhivinayak Residency Above Dominos Pizza/Sector-20/Kharghar/NaviMumbai',
        contact: 8652458337,
        website: 'http://www.bhartieye.com/',
        ratings: 4,
        rent: 500,
        calcium: '14%',
        iron: '1%'
      },
      {
        value: false,
        name: 'Samarth Nethralaya',
        address: '15/16/Siddhivinayak Residency Above Dominos Pizza/Sector-20/Kharghar/NaviMumbai',
        contact: 8652458337,
        website: 'http://www.bhartieye.com/',
        ratings: 4,
        rent: 500,
        calcium: '14%',
        iron: '1%'
      }
    ]
  })
}
</script>
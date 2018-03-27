<template>
    <v-card>
        <v-card-title>
            Room Rents
        </v-card-title>
                <v-data-table
                    :headers="headers"
                    :items="items"
                    hide-actions
                    class="elevation-1"
                >
                    <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.beds }}</td>
                    <td class="text-xs-right">{{ props.item.rent_ac }}</td>
                    <td class="text-xs-right">{{ props.item.rent }}</td>
                    <td class="text-xs-right">{{ props.item.protein }}</td>
                    <td class="text-xs-right">{{ props.item.iron }}</td>
                    </template>
                </v-data-table>
    </v-card>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Room Type',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { text: 'No. Of Beds',  align: 'right', value: 'beds' },
          { text: 'Room Rent (AC)',  align: 'right', value: 'rent_ac' },
          { text: 'Room Rent (Non-AC)',  align: 'right', value: 'rent' },
        ],
        items: [
          {
            value: false,
            name: 'Intensive Care Unit',
            beds: 159,
            rent_ac: 6.0,
            rent: 24,
          },
          {
            value: false,
            name: 'Private',
            beds: 237,
            rent_ac: 9.0,
            rent: 37,
          },
          {
            value: false,
            name: 'Sharing',
            beds: 262,
            rent_ac: 16.0,
            rent: 23,
          },
          {
            value: false,
            name: 'General Ward',
            beds: 305,
            rent_ac: 3.7,
            rent: 67,
          },
        ]
      }
    }
  }
</script>
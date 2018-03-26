<template>
<div>
  <v-layout row>
    <v-flex xs12 >
      <v-card>
        <v-list two-line subheader>
          <v-subheader>Clinical Specialities</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
                <v-radio v-model="notifications"></v-radio>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Audiology and Speech Therapy</v-list-tile-title>
              <v-list-tile-sub-title>Price: -/</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
              <v-list-tile-action>
                <v-radio v-model="notifications"></v-radio>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Show your status</v-list-tile-title>
              <v-list-tile-sub-title>Price: -/</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list two-line subheader>
          <v-subheader>Additional Services</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-radio v-model="notifications"></v-radio>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Nephrology</v-list-tile-title>
              <v-list-tile-sub-title>Price: -/</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-radio v-model="sound"></v-radio>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>ENT</v-list-tile-title>
              <v-list-tile-sub-title>Price: -/</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-radio v-model="video"></v-radio>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Cancer</v-list-tile-title>
              <v-list-tile-sub-title>Price: -/</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-radio v-model="invites"></v-radio>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Weight Loss Surgery</v-list-tile-title>
              <v-list-tile-sub-title>Price: -/</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>

</div>
</template>


<script>
  export default {
    
  }
</script>
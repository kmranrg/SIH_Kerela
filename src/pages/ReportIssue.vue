<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card img="https://www.wallpaperflare.com/static/883/562/448/writing-write-fountain-pen-ink-wallpaper.jpg">
          <div style="height:185px"></div>
          </v-card>
      <v-card>
        
        <v-card-title primary-title>
          <div>
            <h3 class="display-1">Report Issue</h3>
            <v-container fluid>
                <v-layout row wrap>
                    <v-flex xs10>
                        <v-select
                            prepend-icon="check_circle"
                            class="mx-5 mr-5 input-group--focused"
                            :items="items"
                            v-model="e1"
                            label="-----Select Hospitals-----"
                            single-line
                        ></v-select>
                    </v-flex>
                    <v-flex xs10>
                        <v-select
                            prepend-icon="check_circle"
                            class="mx-5 mr-5 input-group--focused"
                            :items="items"
                            v-model="e2"
                            label="-----Select Services-----"
                            single-line
                        ></v-select>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs10>
                        <v-text-field
                            prepend-icon="email"
                            class="mx-5 mr-5 input-group--focused"
                            name="input-1"
                            label="Email Address"
                            id="testing"
                            v-model="email"
                            :rules="emailRules"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs10>
                        <v-text-field
                            prepend-icon="phone"
                            class="ml-5 mr-5 input-group--focused"
                            name="input-1"
                            label="Contact No."
                            id="testing"
                            :counter="10"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs10>
                        <v-subheader class="ml-4 mr-4"><v-icon class="mr-3 ml-1 pl-1">message</v-icon>Message Box</v-subheader>
                        <v-text-field
                            box
                            solo-inverted
                            multi-line
                            prepend-icon=""
                            class="ml-5 mr-5 input-group--focused"
                            name="input-1"
                            id="testing"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
            </v-container>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="blue" class="ml-5"> <v-icon small class="mr-2">send</v-icon><b>Send Report</b></v-btn>
          <v-btn flat color="red"> <v-icon small class="mr-2">cancel</v-icon><b>Cancel</b></v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout> 
</template>

<script>
  export default {
    data () {
      return {
        e1: null,
        e2: null,
        items: [
          { text: 'State 1' },
          { text: 'State 2' }
        ],  
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
      }
    }
  }
</script>
<template>
  <div class="text-xs-center">
    <v-menu open-on-hover bottom offset-y>
      <v-btn round slot="activator">Settings</v-btn>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    })
  }
</script>
<template>
  <div>
    <v-breadcrumbs divider="/">
      <v-breadcrumbs-item
        v-for="item in items"
        :key="item.text"
        :disabled="item.disabled"
        :to="item.link"
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          link: '/'
        },
        {
          text: 'hospitals',
          disabled: false,
          link: '/hospitals'
        },
        {
          text: 'profile',
          disabled: false,
          link: '/hospital-profile'
        }
      ]
    })
  }
</script>
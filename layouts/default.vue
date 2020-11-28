<template>
  <v-app>
    <v-navigation-drawer
      class="drawer"
      style="background-color: #35495e; position: fixed"
      absolute
      permanent
      app
    >
      <template v-slot:prepend>
        <v-list-item-title
          style="margin: 15px; align-items: center; color: white"
          ><a href="/">
            <img
              class="mx-2"
              width="150px"
              src="@/assets/Lifecycle_logo_yellow.svg"
            /> </a
        ></v-list-item-title>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title style="color: white"
              >Jane Smith</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-list-item-title style="margin-left: 16px; color: white"
        >Menu</v-list-item-title
      >
      <v-divider style="background-color: white" />
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          active-class="drawer-menu-item-active"
          class="drawer-menu-item"
        >
          <v-list-item-content>
            <v-list-item-title class="drawer-menu-item-title">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Projects',
          to: '/',
        },
        {
          title: 'Materials',
          to: '/materials',
        },
        {
          title: 'Statistics',
          to: '/statistics',
        },
      ],
    }
  },
}
</script>
<style lang="sass">
.drawer
  background-color: #35495e
.drawer-menu-item
  color: #607d8b
//.drawer-menu-item-title
//  color: #607d8b
.drawer-menu-item-active .drawer-menu-item-title
  color: white
.drawer-menu-item-active
  background-color: orange
.drawer-menu-item:hover
  background-color: white
.drawer-menu-item-title:hover
  color: black
</style>

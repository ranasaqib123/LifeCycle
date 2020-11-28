<template>
  <div style="margin: 36px">
    <v-card>
      <v-card-title>
        Material Inventory
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          style="width: 10px"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="header" :items="items" :search="search">
        <template v-slot:item.mass="{ item }">
          <v-chip :color="getColor(item.mass)" dark>{{ item.mass }}</v-chip>
        </template>
        <template v-slot:item.reusable="{ item }">
          <v-simple-checkbox v-model="item.reusable"></v-simple-checkbox>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'InventoryTab',
  data() {
    return {
      search: '',
      header: [
        {
          text: 'Building Element Group',
          value: 'buildingElementGroup',
          sortable: false,
        },
        { text: 'Building Category Group', value: 'buildingCategoryGroup' },
        { text: 'Mass (kg)', value: 'mass' },
        { text: 'Timber %', value: 'timber' },
        { text: 'Fossil %', value: 'fossil' },
        { text: 'Cement %', value: 'cement' },
        { text: 'Reusability', value: 'reusable' },
      ],
      items: [
        {
          buildingElementGroup: 'demo',
          buildingCategoryGroup: 'demo',
          mass: '100',
          timber: 'demo',
          fossil: 'demo',
          cement: 'demo',
          reusable: false,
        },
        {
          buildingElementGroup: 'demo',
          buildingCategoryGroup: 'demo',
          mass: '20',
          timber: 'demo',
          fossil: 'demo',
          cement: 'demo',
          reusable: true,
        },
        {
          buildingElementGroup: 'demo',
          buildingCategoryGroup: 'demo',
          mass: '9',
          timber: 'demo',
          fossil: 'demo',
          cement: 'demo',
          reusable: false,
        },
        {
          buildingElementGroup: 'demo',
          buildingCategoryGroup: 'demo',
          mass: '26',
          timber: 'demo',
          fossil: 'demo',
          cement: 'demo',
          reusable: true,
        },
        {
          buildingElementGroup: 'demo',
          buildingCategoryGroup: 'demo',
          mass: '100',
          timber: 'demo',
          fossil: 'demo',
          cement: 'demo',
          reusable: false,
        },
        {
          buildingElementGroup: 'demo',
          buildingCategoryGroup: 'demo',
          mass: '20',
          timber: 'demo',
          fossil: 'demo',
          cement: 'demo',
          reusable: true,
        },
        {
          buildingElementGroup: 'demo',
          buildingCategoryGroup: 'demo',
          mass: '9',
          timber: 'demo',
          fossil: 'demo',
          cement: 'demo',
          reusable: false,
        },
        {
          buildingElementGroup: 'demo',
          buildingCategoryGroup: 'demo',
          mass: '26',
          timber: 'demo',
          fossil: 'demo',
          cement: 'demo',
          reusable: true,
        },
      ],
    }
  },
  methods: {
    getColor(mass) {
      if (mass < 10) return 'green'
      else if (mass > 10 && mass <= 20) return 'orange'
      else return 'red'
    },
  },
}
</script>

<style scoped></style>

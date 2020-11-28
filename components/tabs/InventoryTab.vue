<template>
  <div style="margin: 36px">
    <v-data-table :headers="header"></v-data-table>
  </div>
</template>

<script>
export default {
  name: 'InventoryTab',
  data() {
    return {
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
      ],
    }
  },
}
</script>

<style scoped></style>

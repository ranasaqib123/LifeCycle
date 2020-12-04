<template>
  <div>
    <div
      style="
        height: 200px;
        background-color: red;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      "
    >
      <div style="margin-left: 130px">
        <v-row><v-col>project</v-col></v-row>
        <v-row><v-col>project</v-col></v-row>
        <v-row
          ><v-col>Demo Data</v-col
          ><v-col style="margin-left: -600px"
            ><v-btn x-small rounded
              ><v-icon x-small>mdi-plus</v-icon>create new version based on this
              design</v-btn
            ></v-col
          ></v-row
        >
      </div>
      <div>
        <v-tabs
          v-model="tab"
          background-color="red"
          center-active
          centered
          dark
        >
          <v-tab v-for="(tab, i) in tabItems" :key="i">{{ tab }}</v-tab>
        </v-tabs>
      </div>
    </div>
    <div style="margin-left: 25px; margin-top: 25px">
      <v-icon @click="goBack">mdi-arrow-left</v-icon>
    </div>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <energy-tab />
      </v-tab-item>
      <v-tab-item>
        <inventory-tab />
      </v-tab-item>
      <v-tab-item>
        <result-tab />
      </v-tab-item>
      <v-tab-item>
        <analysis-tab />
      </v-tab-item>
      <v-tab-item>
        <benchmark-tab />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import EnergyTab from '@/components/tabs/EnergyTab'
import InventoryTab from '@/components/tabs/InventoryTab'
import ResultTab from '@/components/tabs/ResultTab'
import AnalysisTab from '@/components/tabs/AnalysisTab'
import BenchmarkTab from '@/components/tabs/BenchmarkTab'
export default {
  name: 'VersionDetails',
  components: { BenchmarkTab, AnalysisTab, ResultTab, InventoryTab, EnergyTab },
  data() {
    return {
      tab: null,
      selectedTab: null,
      tabItems: ['Energy', 'Inventory', 'Results', 'Analysis', 'BenchMark'],
    }
  },
  created() {
    const id = this.$route.params.id
    console.log(id)
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    tabClick(i) {
      console.log(i)
      this.selectedTab = i
    },
  },
}
</script>

<style scoped></style>

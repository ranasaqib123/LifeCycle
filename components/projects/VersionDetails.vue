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
          ><v-col>dfjdfsdfdfsfdsf</v-col
          ><v-col style="margin-left: -600px"
            ><v-btn x-small rounded
              ><v-icon x-small>mdi-plus</v-icon>create new version based on this
              design</v-btn
            ></v-col
          ></v-row
        >
      </div>
      <div>
        <v-card>
          <v-tabs
            v-model="tab"
            background-color="red"
            center-active
            centered
            dark
          >
            <v-tab v-for="(tab, i) in tabItems" :key="i" @click="tabClick(i)">{{
              tab
            }}</v-tab>
          </v-tabs>
        </v-card>
      </div>
    </div>
    <div style="margin-left: 25px; margin-top: 25px">
      <v-icon @click="goBack">mdi-arrow-left</v-icon>
    </div>
    <v-tabs-items>
      <div v-if="selectedTab === 0">
        <energy-tab />
      </div>
      <div v-if="selectedTab === 1">
        <inventory-tab />
      </div>
      <div v-if="selectedTab === 2">
        <result-tab />
      </div>
      <div v-if="selectedTab === 3">
        <analysis-tab />
      </div>
      <div v-if="selectedTab === 4">
        <benchmark-tab />
      </div>
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

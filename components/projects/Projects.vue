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
      <div style="display: flex; margin-left: 130px">
        <h2 style="margin-right: 60px; color: white">Projects</h2>
        <v-btn
          rounded
          depressed
          style="margin-bottom: 10px"
          @click="modalDialog"
        >
          <v-icon left>mdi-plus</v-icon>
          create new project</v-btn
        >
      </div>
    </div>
    <div class="card">
      <v-card
        v-for="(name, i) in projects"
        :key="i"
        class="mx-auto"
        width="310"
        height="200"
        outlined
        :to="`/projects/projectdetails/${name.id}`"
      >
        <v-list-item>
          <v-list-item-content>
            <div class="overline mb-4">{{ name.buildingName }}</div>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <v-card
        class="mx-auto"
        width="310"
        height="200"
        outlined
        @click="modalDialog"
      >
        <v-icon
          size="80"
          style="
            right: 50%;
            bottom: 50%;
            transform: translate(50%, 50%);
            position: absolute;
          "
          >mdi-plus</v-icon
        >
      </v-card>
    </div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Create Project</span>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="buildingName"
              label="Building Name"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              v-model="country"
              label="Country"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              v-model="city"
              label="City"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              v-model="street"
              label="Street"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              v-model="postalCode"
              label="Postal Code"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              v-model="topology"
              label="Topology"
              dense
              outlined
            ></v-text-field>
            <input />
            <v-text-field
              v-model="floorAreaBRA"
              label="Floor Area BRA"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              v-model="floorAreaBTA"
              label="Floor Area BTA"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              v-model="floorAreaBYA"
              label="Floor Area BYA"
              dense
              outlined
            ></v-text-field>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="addProject"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import db from '@/plugins/firebase'
export default {
  name: 'Projects',
  data() {
    return {
      dialog: false,
      buildingName: '',
      country: '',
      city: '',
      street: '',
      postalCode: '',
      floorAreaBRA: '',
      floorAreaBTA: '',
      floorAreaBYA: '',
      topology: '',
      projects: [],
    }
  },
  created() {
    db.collection('projects')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const projects = doc.data()
          projects.id = doc.id
          this.projects.push(projects)
        })
      })
  },
  methods: {
    modalDialog() {
      this.dialog = true
    },
    async addProject() {
      const projectRef = db
        .collection('projects')
        .add({
          buildingName: this.buildingName,
          country: this.country,
          city: this.city,
          street: this.street,
          postalCode: this.postalCode,
          floorAreaBRA: this.floorAreaBRA,
          floorAreaBTA: this.floorAreaBTA,
          floorAreaBYA: this.floorAreaBYA,
        })
        .catch((err) => {
          console.log(err)
        })
      const projectId = await projectRef
      console.log(projectId)
      const id = projectId.id
      console.log(id)
      await db
        .collection('projects')
        .doc(id)
        .collection('version')
        .add({ version: '', projectPhase: '', lastEdited: '' })
      this.dialog = false
    },
  },
}
</script>

<style scoped lang="sass">
.card
  display: grid
  margin-top: 20px
  margin-left: 10px
  margin-right: 10px
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))
  grid-gap: 0.5rem
</style>

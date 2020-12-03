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
        v-for="(project, i) in projects"
        :key="i"
        class="mx-auto"
        width="310"
        height="170"
        outlined
        :to="`/projects/projectdetails/${project.id}`"
      >
        <v-img :src="src" height="170px">
          <v-list-item>
            <v-list-item-content>
              <h4 style="color: white">{{ project.buildingName }}</h4>
              <p style="color: white">{{ project.version }}</p>
              <br />
              <p style="color: white">{{ project.topology }}</p>
              <br />
              <p style="color: white">{{ project.floorAreaBYA }}</p>
              <br />
              <p style="color: white">
                {{ project.city }},{{ project.country }}
              </p>
            </v-list-item-content>
          </v-list-item>
        </v-img>
      </v-card>
      <v-card
        class="mx-auto"
        width="310"
        height="170"
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
      <validation-observer v-slot:="{ invalid }">
        <form>
          <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
              <div>
                <v-icon
                  style="margin-left: 12px; margin-top: 10px"
                  @click="closeDialog"
                  >mdi-arrow-left</v-icon
                >
              </div>
              <v-card-title>
                <span class="headline">Create Project</span>
              </v-card-title>
              <v-card-text>
                <validation-provider
                  v-slot:="{ errors }"
                  name="Project Name"
                  :rules="{ required: true }"
                >
                  <v-text-field
                    v-model="projectName"
                    label="Project Name"
                    dense
                    :error-messages="errors"
                    outlined
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot:="{ errors }"
                  name="Building Name"
                  :rules="{ required: true }"
                >
                  <v-text-field
                    v-model="buildingName"
                    label="Building Name"
                    :error-messages="errors"
                    dense
                    outlined
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot:="{ errors }"
                  name="Country"
                  :rules="{ required: true }"
                >
                  <v-text-field
                    v-model="country"
                    label="Country"
                    :error-messages="errors"
                    dense
                    outlined
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot:="{ errors }"
                  name="City"
                  :rules="{ required: true }"
                >
                  <v-text-field
                    v-model="city"
                    label="City"
                    :error-messages="errors"
                    dense
                    outlined
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot:="{ errors }"
                  name="Street"
                  :rules="{ required: true }"
                >
                  <v-text-field
                    v-model="street"
                    label="Street"
                    :error-messages="errors"
                    dense
                    outlined
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot:="{ errors }"
                  name="Postal Code"
                  :rules="{ required: true }"
                >
                  <v-text-field
                    v-model="postalCode"
                    label="Postal Code"
                    type="number"
                    :error-messages="errors"
                    dense
                    outlined
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot:="{ errors }"
                  name="Topology"
                  :rules="{ required: true }"
                >
                  <v-text-field
                    v-model="topology"
                    label="Topology"
                    :error-messages="errors"
                    dense
                    outlined
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot:="{ errors }"
                  name="Floor Area BRA"
                  :rules="{ required: true }"
                >
                  <v-text-field
                    v-model="floorAreaBRA"
                    label="Floor Area BRA"
                    type="number"
                    :error-messages="errors"
                    dense
                    outlined
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot:="{ errors }"
                  name="Floor Area BTA"
                  :rules="{ required: true }"
                >
                  <v-text-field
                    v-model="floorAreaBTA"
                    label="Floor Area BTA"
                    type="number"
                    :error-messages="errors"
                    dense
                    outlined
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot:="{ errors }"
                  name="Floor Area BYA"
                  :rules="{ required: true }"
                >
                  <v-text-field
                    v-model="floorAreaBYA"
                    label="Floor Area BYA"
                    type="number"
                    :error-messages="errors"
                    dense
                    outlined
                  ></v-text-field>
                </validation-provider>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  type="submit"
                  :disabled="invalid"
                  @click="addProject"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </form>
      </validation-observer>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      bottom
      :color="snackbarColor"
      :timeout="2000"
    >
      {{ snackbarText }}
    </v-snackbar>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import db from '@/plugins/firebase'
export default {
  name: 'Projects',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
      dialog: false,
      snackbar: false,
      snackbarColor: 'green',
      snackbarText: 'Success',
      projectName: '',
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
      versionCount: '',
    }
  },
  mounted() {
    this.getProjects()
  },
  methods: {
    modalDialog() {
      this.dialog = true
    },
    getProjects() {
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
    async addProject() {
      this.projects = []
      const projectRef = db
        .collection('projects')
        .add({
          projectName: this.projectName,
          buildingName: this.buildingName,
          country: this.country,
          city: this.city,
          street: this.street,
          topology: this.topology,
          postalCode: this.postalCode,
          floorAreaBRA: this.floorAreaBRA,
          floorAreaBTA: this.floorAreaBTA,
          floorAreaBYA: this.floorAreaBYA,
        })
        .catch((err) => {
          console.log(err)
        })
      const projectId = projectRef
      const id = projectId.id
      await db.collection('projects').doc(id).collection('version')
      this.dialog = false
      this.getProjects()
      this.snackbar = true
      this.snackbarColor = 'green'
      this.snackbarText = 'Project Created Successfully '
    },
    closeDialog() {
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

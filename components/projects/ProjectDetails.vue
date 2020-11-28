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
        <h2 style="color: white">Project</h2>
        <h2 style="color: white">
          Fantasy Project
          <v-btn
            x-small
            fab
            dark
            color="#35495e"
            style="margin-left: 20px; margin-bottom: 5px"
          >
            <v-icon color="white">mdi-pencil</v-icon>
          </v-btn>
        </h2>
      </div>
    </div>
    <div style="margin-left: 25px; margin-top: 25px">
      <v-icon @click="goBack">mdi-arrow-left</v-icon>
    </div>
    <div style="margin: 50px">
      <v-card style="padding: 15px" elevation="3">
        <v-row>
          <v-col>
            <h4>Building Name</h4>
            <span>{{ projectDetails.buildingName }}</span>
          </v-col>
          <v-col>
            <h4>Floor Area</h4>
            <span>BRA:{{ projectDetails.floorAreaBRA }} m<sup>2</sup></span>
            <br />
            <span>BTA:{{ projectDetails.floorAreaBTA }} m<sup>2</sup></span>
            <br />
            <span>BYA:{{ projectDetails.floorAreaBYA }} m<sup>2</sup></span>
          </v-col>
          <v-col>
            <h4>Other Data</h4>
            <span>Some Data</span>
          </v-col>
          <v-col>
            <h4>Other Data</h4>
            <span>Some Data</span>
          </v-col>
          <v-col>
            <h4>Other Data</h4>
            <span>Some Data</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h4>Location</h4>
            <span
              >{{ projectDetails.city }} , {{ projectDetails.country }}</span
            >
          </v-col>
          <v-col>
            <h4>Typology</h4>
            <span>{{ projectDetails.topology }}</span>
          </v-col>
          <v-col>
            <h4>Other Data</h4>
            <span>Some Data</span>
          </v-col>
          <v-col>
            <h4>Other Data</h4>
            <span>Some Data</span>
          </v-col>
          <v-col>
            <h4>Other Data</h4>
            <span>Some Data</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h4>Address</h4>
            <span
              >{{ projectDetails.street }} , {{ projectDetails.country }}</span
            >
          </v-col>
          <v-col></v-col>
          <v-col>
            <h4>Other Data</h4>
            <span>Some Data</span>
          </v-col>
          <v-col>
            <h4>Other Data</h4>
            <span>Some Data</span>
          </v-col>
          <v-col>
            <h4>Other Data</h4>
            <span>Some Data</span>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <div
      style="
        display: flex;
        flex-direction: row-reverse;
        margin-right: 50px;
        margin-bottom: -30px;
      "
    ></div>
    <div style="margin: 50px">
      <v-data-table
        :headers="headers"
        :items="items"
        class="elevation-1"
        @click:row="version"
      >
        <template v-slot:top>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" color="blue" dark small v-on="on"
                ><v-icon small>mdi-plus</v-icon>ADD</v-btn
              >
            </template>
            <v-card
              ><v-card-title>
                <span style="text-align: center">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="editedItem.version"
                  label="Version"
                  outlined
                  dense
                ></v-text-field>
                <v-text-field
                  v-model="editedItem.projectPhase"
                  label="Project Phase"
                  outlined
                  dense
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
            v-if="item.completed == true"
            color="green"
            small
            class="mr-2"
          >
            mdi mdi-checkbox-marked-circle-outline</v-icon
          >
          <v-icon v-else color="transparent" small class="mr-2">
            mdi mdi-checkbox-marked-circle-outline
          </v-icon>
          <v-icon v-if="item.completed == true" small class="mr-2"
            >mdi-pencil</v-icon
          >
          <v-icon v-else small class="mr-2" color="blue" @click="editItem(item)"
            >mdi-pencil</v-icon
          >
          <v-icon small class="mr-2" @click="duplicateItem(item)"
            >mdi-plus</v-icon
          >
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import db from '@/plugins/firebase'

export default {
  name: 'ProjectDetails',
  data() {
    return {
      loading: false,
      dialog: false,
      isEditing: false,
      projectDetails: {},
      editedIndex: -1,
      editedItem: {
        version: '',
        projectPhase: '',
      },
      headers: [
        {
          text: 'Version',
          value: 'version',
        },
        {
          text: 'Project Phase',
          value: 'projectPhase',
        },
        {
          text: 'Last Edited',
          value: 'lastEdited',
        },
        {
          text: 'Actions',
          value: 'actions',
        },
      ],
      items: [
        {
          id: '1',
          version: '1.0',
          projectPhase: 'initial',
          lastEdited: '21/1/20',
          completed: true,
        },
        {
          id: '2',
          version: '1.0',
          projectPhase: 'initial',
          lastEdited: '21/1/20',
          completed: true,
        },
        {
          id: '3',
          version: '1.0',
          projectPhase: 'initial',
          lastEdited: '21/1/20',
          completed: true,
        },
        {
          id: '4',
          version: '1.0',
          projectPhase: 'initial',
          lastEdited: '21/1/20',
          completed: false,
        },
        {
          id: '5',
          version: '2.0',
          projectPhase: 'completed',
          lastEdited: '00/11/2000',
          completed: false,
        },
        {
          id: '7',
          version: '1.0',
          projectPhase: 'initial',
          lastEdited: '21/1/20',
          completed: true,
        },
        {
          id: '6',
          version: '1.0',
          projectPhase: 'initial',
          lastEdited: '21/1/20',
          completed: false,
        },
      ],
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },
  async created() {
    const id = this.$route.params.id
    console.log(id)
    const data = db.collection('projects').doc(id)
    await data
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data())
          this.projectDetails = doc.data()
        } else {
          console.log('no such document found')
        }
      })
      .catch((err) => {
        console.log(err)
      })
    // console.log(data.buildingName)
    // db.collection('projects')
    //   .where('id', '==', 'id')
    //   .get()
    //   .then((snapshot) => {
    //     snapshot.forEach((doc) => {
    //       const data = doc.data()
    //       data.id = doc.id
    //       this.projectDetails = data
    //       console.log(data)
    //     })
    //   })
  },
  methods: {
    editItem(item) {
      // this.$route.params.id
      this.editedIndex = this.items.indexOf(item)
      // console.log(index)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      // this.editedItem = Object.assign({}, item)
      // this.dialog = truex
    },
    duplicateItem(item) {
      // console.log(item)
      const index = this.items.indexOf(item)
      const data = { ...item }
      console.log(data)
      this.items.push({
        version: data.version,
        projectPhase: data.projectPhase,
        lastEdited: data.lastEdited,
        completed: false,
      })
      console.log(index)
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, '')
        this.editedIndex = -1
      })
    },
    goBack() {
      this.$router.go(-1)
    },
    version(i) {
      this.$router.push(`versiondetails/${i.id}`)
    },
  },
}
</script>

<style scoped></style>

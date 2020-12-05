<template>
  <div class="main-container">
    <v-form>
      <img
        src="@/assets/Lifecycle_logo_yellow.svg"
        width="540"
        alt="image.jpg"
      />
      <v-card class="login-container">
        <v-card-title
          style="
            justify-content: center;
            justify-items: center;
            text-align: center;
            margin-top: -24px;
          "
          ><h1>Sign In</h1></v-card-title
        >
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            justify-items: center;
            margin-top: 24px;
          "
        >
          <v-btn
            elevation="0"
            width="100%"
            height="50px"
            color="#F9610C"
            style="color: white"
            @click="userSignInWithGoogle"
            >Sign in with Gmail</v-btn
          >
          <div
            style="
              display: flex;
              flex-direction: column;
              text-align: center;
              margin-top: 16px;
            "
          >
            <p>
              Don't have an Account?<nuxt-link
                to="/signup"
                style="text-decoration: none; color: #f9610c"
                >Sign Up</nuxt-link
              >
            </p>
          </div>
        </div>
      </v-card>
    </v-form>
  </div>
</template>

<script>
import { googleProvider } from '../../plugins/firebase'
export default {
  name: 'Login',
  data() {
    return {
      disable: false,
    }
  },
  methods: {
    userSignInWithGoogle() {
      this.$store
        .dispatch('sgnInWithGoogle', {
          googleProvider,
        })
        .then(() => {
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style lang="sass" scoped>
.main-container
  width: 100%
  height: 100vh
  display: flex
  align-items: center
  background: #343a40
  flex-direction: column
  justify-content: center

.login-container
  width: 560px
  height: 220px
  padding: 30px
</style>

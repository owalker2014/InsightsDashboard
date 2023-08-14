<template>
  <v-container>
    <h1>Page Title</h1>
    <p>Some page content here.</p>
  </v-container>
</template>
<script lang="ts">
export default {
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    },
  },
  methods: {
    goToDashboard() {
      if (true === true) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    },
  },
}
</script>

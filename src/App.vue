<template>
  <v-app>
    <app-header></app-header>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>

</template>
<script setup lang="ts">
import AppHeader from './views/AppHeader.vue'
import { RouterView } from 'vue-router';
</script>

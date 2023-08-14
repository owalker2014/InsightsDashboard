<template>
  <v-app-bar title="Insights" :elevation="1">
    <v-btn :icon="theme.global.name.value === 'light' ? 'fa:fas fa-moon' : 'fa:far fa-moon'"
      @click="toggleTheme"></v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" :rail="rail" :elevation="0" permanent @click="rail = false">
    <v-list-item prepend-avatar="https://randomuser.me/api/portraits/thumb/men/75.jpg" title="John Leider" nav>
      <template v-slot:append>
        <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
      <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
    </v-list>

    <!-- LOGOUT BUTTON -->
    <template v-slot:append>
      <div class="pa-2">
        <v-btn prepend-icon="mdi-logout" title="Logout" value="logout" block>
          <span v-if="!rail">Logout</span>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script lang="ts">
import { useTheme } from 'vuetify'

export default {
  setup() {
    const theme = useTheme()

    return {
      theme,
      toggleTheme: () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    }
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      rail: true,
    }
  },
}
</script>

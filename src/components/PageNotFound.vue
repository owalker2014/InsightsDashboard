<template>
  <v-container id="not-found" class="align-items-center">
    <v-card class="pa-5">
      <div class="circle pulse offline"></div>
      <h1>Page Not Found</h1>
      <p>We are so sorry, but this link doesn't exist on our platform.</p>
    </v-card>
    <br>
    <router-link :to="{ name: 'InsightsDashboard' }">
      <v-btn :rounded="10" class="v-btn--variant-tonal">Back to Insights Dashboard</v-btn>
    </router-link>
  </v-container>
</template>

<style scoped>
a {
  text-decoration: none;
}
.online {
  background: #66FF99;
}

.standby {
  background: #f17c57fa;
}

.offline {
  background: #FC1919;
}

.circle {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  box-shadow: 0px 0px 1px 1px #0000001a;
  margin: 0 0.5rem;
}

.pulse {
  animation: pulse-animation 2s infinite;
}

@keyframes pulse-animation {
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
  }

  100% {
    box-shadow: 0 0 0 20px rgba(0, 0, 0, 0);
  }
}
</style>

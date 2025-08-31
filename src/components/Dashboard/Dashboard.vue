<script setup></script>

<template>
  <div class="dashboard-layout">
    <v-row>
      <!-- First column -->
      <v-col cols="12" lg="8" md="6" order-lg="1"> a </v-col>

      <!-- Second column -->
      <v-col cols="12" lg="4" md="6" order-lg="2"> b </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.dashboard-layout {
  padding-block: 22px;
  padding-inline: 32px;
}
</style>

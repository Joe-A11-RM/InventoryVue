<script setup></script>

<template>
  <div class="navbar">
    <div>
      <v-text-field
        label="Search..."
        variant="outlined"
        density="compact"
        hide-details
        width="400"
        max-width="400"
        color="#1570ef"
      >
        <template v-slot:prepend-inner>
          <v-icon size="14">fa-solid fa-magnifying-glass</v-icon>
        </template>
      </v-text-field>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 28px;
  padding-inline: 32px;
  height: 65px;
  max-height: 65px;
  width: 100%;
  border-bottom: 1px solid #e7e7e7;
  background-color: white;
}
.v-field--variant-outlined {
  --v-field-border-color: #ff0000 !important; /* default */
  --v-field-border-color-hover: #00ff00 !important; /* on hover */
  --v-field-border-color-focused: #0000ff !important; /* on focus */
}
</style>

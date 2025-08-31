<script setup>
import Navbar from '@/components/Navbar/Navbar.vue'

const sideBarItems = [
  { label: 'dashboard', to: '/dashboard', icon: '/Home' },
  { label: 'inventory', to: '/inventory', icon: '/Inventory' },
  { label: 'reports', to: '/reports', icon: '/Report' },
  { label: 'suppliers', to: '/suppliers', icon: '/Suppliers' },
  { label: 'orders', to: '/orders', icon: '/Order' },
  { label: 'manage store', to: '/managestore', icon: '/ManageStore' },
]
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmail.com"
            title="Sandra Adams"
          />
        </v-list>

        <v-divider />

        <v-list density="compact">
          <v-list-item
            v-for="(item, index) in sideBarItems"
            :title="item.label"
            :value="item.label"
            :key="index"
            :to="item.to"
            class="v-list-item-title"
            style="color: var(--PrimaryColor)"
          >
            <template #prepend>
              <v-icon>
                <img :src="`${item.icon}.svg`" :alt="item.label" width="24px" height="24px" />
              </v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 100vh; background-color: #f0f1f3">
        <Navbar />
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-card>
</template>

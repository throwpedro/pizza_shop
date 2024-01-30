<script setup lang="ts">
import Toolbar from 'primevue/toolbar';

defineProps<{ view: string }>()
</script>

<template>
  <Toolbar>
    <template #start>
      <router-link to="/">Home</router-link>
    </template>
    <template #center>
      <h3>{{ view }}</h3>
    </template>
    <template #end>
      <div class="end">
        <router-link to="/profile">Profile</router-link>
        <router-link to="/cart">
          <v-icon scale="1.5" name="fa-shopping-cart" />
        </router-link>
      </div>
    </template>
  </Toolbar>
</template>

<style scoped>
.end {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>

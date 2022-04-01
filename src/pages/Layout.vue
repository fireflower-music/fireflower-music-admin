<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> 花火音乐 </q-toolbar-title>

        <q-space />
        <q-avatar color="teal" text-color="white"
          >{{ nicknameFirstWord }}
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered>
      <q-list padding class="text-primary">
        <q-item
          clickable
          v-ripple
          active-class="menu-active"
          v-for="menu in menuRoutes"
          :key="menu.meta.title"
          :active="menu.name === route.name"
          :to="menu.path"
        >
          <q-item-section avatar>
            <q-icon :name="menu.meta.icon" />
          </q-item-section>
          <q-item-section>{{ menu.meta.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { menuRoutes } from '../routers/index.js';

export default {
  name: 'Layout',
  setup() {
    const leftDrawerOpen = ref(false);

    const store = useStore();

    const route = useRoute();

    // console.log(route.name);

    return {
      nicknameFirstWord: computed(
        () => store.getters['user/nicknameFirstWord']
      ),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      menuRoutes,
      route
    };
  }
};
</script>

<style scoped>
.menu-active {
  color: white !important;
  background: #f2c037;
}
</style>

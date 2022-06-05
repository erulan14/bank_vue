<template>
  <q-layout view="hHh LpR lFf">

    <q-header className="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer"/>

        <q-toolbar-title>
          <q-input v-model="search" placeholder="Поиск" outlined dense color="white" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-list bordered separator>
        <q-item clickable v-ripple to="settings" active-class="my-menu-link">
          <q-item-section avatar>
            <q-avatar>
              <q-img :src="account.avatar"></q-img>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <strong v-if="user">{{user.first_name}}</strong>
            <p style="padding: 0; margin: 0;">Настройки</p>
          </q-item-section>
          <q-item-section avatar>
            <q-icon name="chevron_right"></q-icon>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="location" active-class="my-menu-link">
          <q-item-section avatar>
            <q-icon name="mdi-map-marker-outline"></q-icon>
          </q-item-section>
          <q-item-section>
            {{account.location}}
          </q-item-section>
          <q-item-section avatar>
            <q-icon name="chevron_right"></q-icon>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="mybalance" active-class="my-menu-link">
          <q-item-section>
            Мой банк
          </q-item-section>
          <q-item-section avatar>
            <q-icon name="chevron_right"></q-icon>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple to="translations" active-class="my-menu-link">
          <q-item-section>
            Переводы
          </q-item-section>
          <q-item-section avatar>
            <q-icon name="chevron_right"></q-icon>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container style="margin: 0; padding: 0">
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
import {ref} from 'vue'
import {mapActions, mapState} from "vuex"

export default {
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },

  data() {
    return {
      search : "",
    }
  },

  async created() {
    await this.get_user();
    await this.get_account();
  },

  watch: {
    user(val) {
      console.log(val);
    }
  },

  computed: {
    ...mapState(["user", "account"])
  },

  methods: {
    ...mapActions(["get_user", "get_account"]),
  }
}
</script>

<style>
 .my-menu-link {
   color: white;
   background: #F2C037;
 }
</style>
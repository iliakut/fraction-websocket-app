<template>
  <v-app>
    <v-toolbar app color="deep-orange ">
      <v-toolbar-title class="headline text-uppercase">
        <v-btn to="/" flat>
          <span>Fraction-Websocket-app</span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <v-btn slot="activator" color="deep-orange lighten-4">
          <span>Select task</span>
        </v-btn>
        <v-list>
          <v-list-tile to="/fraction">
            <v-list-tile-title>Fraction</v-list-tile-title>
          </v-list-tile>
          <v-list-tile to="/websocket">
            <v-list-tile-title>Websocket</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      //
    };
  }
};
</script>

<template>
  <v-app>
  <NavBar />
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBarVue from './components/NavBar.vue';
import FooterVue from './components/Footer.vue';
export default {
  name: 'App',
  components:{
    NavBar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>

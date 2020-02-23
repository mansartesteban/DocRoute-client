<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  computed: {
    myCount: function () {
      return this.$store.state.myCount
    }
  },
  methods: {
    increase: function () {
      this.$store.commit("toto")
    }
  }

};
</script>

<style scoped>
</style>

<template>
    <v-container fluid>
        <left-menu></left-menu>
        <v-content app>
            <router-view></router-view>
        </v-content>
    </v-container>

</template>

<script>
    export default {
        name: "Home",
        components: {
            LeftMenu: () => import("@/components/LeftMenu")
        }
    }
</script>

<style scoped>

</style>
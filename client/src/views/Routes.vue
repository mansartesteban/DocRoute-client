<template>
    <v-container
        fluid
    >
        <v-layout class="routes-layout">
            <route-list></route-list>
        </v-layout>
        <router-view></router-view>
    </v-container>
</template>

<script>
    export default {
        name: "Routes",
        components: {
            RouteList: () => import("@/components/Routes/RouteList")
        }
    }
</script>

<style scoped>
    .routes-layout {
        max-height: 94vh;
    }
</style>
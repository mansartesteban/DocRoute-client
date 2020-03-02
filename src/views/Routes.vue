<template>
    <v-container
        fluid
        fill-height
    >
        <v-layout class="routes-layout">
            <route-list :routes="routes"></route-list>
            <router-view></router-view>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Routes",
        components: {
            RouteList: () => import("@/components/Routes/RouteList")
        },
        created() {
            this.$store.dispatch("ModuleRoute/listRoutes")
            this.$store.dispatch("listMethods")
        },
        computed: {
            routes() {
                return this.$store.getters["ModuleRoute/getRoutes"]
            }
        }
    }
</script>

<style scoped>
    .routes-layout {
        max-height: 94vh;
    }
</style>
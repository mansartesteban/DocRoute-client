<template>
    <v-layout>
        <route-list></route-list>
    </v-layout>
</template>

<script>
    export default {
        name: "Components",
        components: {
            RouteList: () => import("@/components/Routes/RouteList")
        }
    }
</script>

<style scoped>

</style>
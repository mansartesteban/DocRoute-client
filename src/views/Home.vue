<template>
    <v-layout>
        <notifications class="mx-2 my-3"></notifications>
        <left-menu></left-menu>
        <v-content>
            <v-container
                    fluid
                    fill-height>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-layout>
</template>

<script>
    export default {
        name: "Home",
        components: {
            LeftMenu: () => import("@/components/LeftMenu"),
        }
    }
</script>

<style scoped>

</style>
<template>
    <v-layout>
        <snack-bar></snack-bar>
        <left-menu></left-menu>
        <v-content>
            <v-container
                    fluid
                    fill-height
            >

                <router-view></router-view>

            </v-container>



        </v-content>
        <!--<v-footer app></v-footer>-->
    </v-layout>
</template>

<script>
    export default {
        name: "Home",
        components: {
            LeftMenu: () => import("@/components/LeftMenu"),
            snackBar: () => import("@/components/Main/SnackBar")
        }
    }
</script>

<style scoped>

</style>
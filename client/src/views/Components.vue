<template>
    <v-content>
        <v-container>
            <v-row >
                <v-col cols="12" sm="4">
                    <route-item
                        :path="routeExemple.path"
                        :name="routeExemple.name"
                        :methods="routeExemple.methods"
                    >
                    </route-item>
                </v-col>
                <v-col cols="12" sm="4">
                    toto
                </v-col>
                <v-col cols="12" sm="4">
                    toto
                </v-col>
            </v-row>

        </v-container>
    </v-content>
</template>

<script>
    export default {
        name: "Components",
        components: {
            RouteItem: () => import("@/components/RouteItem")
        },
        data: () => {
            return {
                routeExemple: {
                    path: "/app",
                    name: "__App",
                    methods: [
                        "POST",
                        "GET"
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
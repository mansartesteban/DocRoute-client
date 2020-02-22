<template>
    <v-navigation-drawer
            color="primary"
            v-model="drawer"
            app
            clipped
    >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">
                    DocRoute
                </v-list-item-title>
                <v-list-item-subtitle>
                    Simplify your projects !
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    @click="$router.push(item.to)"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "LeftMenu",
        data: () => {
            return {
                drawer: true,
                items: [
                    {
                        title: "Components builder",
                        icon: "mdi-shovel",
                        to: "/benchwork-components"
                    },
                    {

                    },
                    {
                        title: "Routes",
                        icon: "mdi-link-variant",
                        to: "/routes"
                    },
                    {
                        title: "Entities",
                        icon: "mdi-code-braces",
                        to: "/entites"
                    },
                    {
                        title: "Components",
                        icon: "mdi-puzzle",
                        to: "components"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
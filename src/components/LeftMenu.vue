<template>
    <v-navigation-drawer
            color="primary"
            v-model="drawer"
            app
            clipped
            :mini-variant="mini"
            :permanent="true"
            :stateless="true"
            @click="() => {}"
    >

        <v-list
                dense
                nav
                class="py-0"
        >
        <v-list-item two-line :class="mini && 'px-0'">
            <v-app-bar-nav-icon @click.prevent.stop="mini=!mini"></v-app-bar-nav-icon>

            <v-list-item-content>
                <v-list-item-title>DocRoute</v-list-item-title>
                <v-list-item-subtitle>Simplify your Web App projects !</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

            <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    @click="$router.push(item.to)"
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}
                        <v-chip class="float-top-right px-2" :color="item.chip.color" x-small v-if="item.chip || null">{{ item.chip.label }}</v-chip></v-list-item-title>
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
                mini: false,
                items: [
                    {
                        title: "Components builder",
                        icon: "mdi-shovel",
                        chip: {
                            label: "work in progress",
                            color: "warning"
                        },
                        to: "/benchwork-components"
                    },
                    {

                    },
                    {
                        title: "Routes",
                        icon: "mdi-link-variant",
                        chip: {
                            label: "work-in-progress",
                            color: "warning"
                        },
                        to: "/routes"
                    },
                    {
                        title: "Entities",
                        icon: "mdi-code-braces",
                        chip: {
                            label: "inactive",
                            color: "default"
                        },
                        to: "/entites"
                    },
                    {
                        title: "Components",
                        icon: "mdi-puzzle",
                        chip: {
                            label: "inactive",
                            color: "default"
                        },
                        to: "components"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
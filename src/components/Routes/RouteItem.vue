<template>
    <div class="route-item">
        <v-card
            dense
            width="230"
            tile
            class="mb-3"
            :class="selected?'selected':''"
        >
            <v-toolbar color="primary"
                       dark
                       dense
                       height="32"
                       :title="name"
            >
           <!--@click.stop="$router.push('/routes/show')"-->


                <v-toolbar-title>
                    {{ name }}
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <route-delete
                    :routeId="id"
                    :routeName="name">
                </route-delete>
            </v-toolbar>
            <v-card-text>
                <p
                        class="mb-2"
                >
                    {{ path }}
                </p>
                <method
                        v-for="method in methods"
                        :method="method.label"
                        :key="method.label"
                >
                </method>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "RouteItem",
        components: {
            Method: () => import("@/components/Routes/Method"),
            RouteDelete: () => import("@/components/Routes/RouteDelete")
        },
        props: {
            selected: {
                type: Boolean,
                default: false
            },
            id: {
                type: Number
            },
            path: {
                required: true,
                type: String
            },
            name: {
                required: true,
                type: String
            },
            methods: {
                type: Array,
                required: false,
                default: () => {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    /*.route-item .v-toolbar:hover {*/
        /*position: relative;*/
        /*overflow-x: auto;*/
        /*-webkit-transform: scale(1.2);*/
        /*-moz-transform: scale(1.2);*/
        /*-ms-transform: scale(1.2);*/
        /*-o-transform: scale(1.2);*/
        /*transform: scale(1.2);*/
    /*}*/
</style>
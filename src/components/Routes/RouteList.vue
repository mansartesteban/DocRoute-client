<template>
    <div class="route-list d-inline-block pr-6">
        <v-btn color="success" :block="true" class="mb-4" @click="showAddForm = true" tile>
            <v-icon>mdi-plus</v-icon>
            <span>Nouvelle route</span>
        </v-btn>
        <route-form :show="showAddForm" v-on:input="showAddForm = arguments[0]"></route-form>
        <v-skeleton-loader
                v-if="!isEmpty"
                v-for="i in 5"
                height="94"
                type="list-item-three-line"
        ></v-skeleton-loader>

        <route-item
                v-for="route in routes"
                :path="route.path"
                :name="route.name"
                :methods="route.method"
                :id="route.id"
        ></route-item>
    </div>

    <!--todo : Ajouter un skeleton loader -->
</template>

<script>
    export default {
        name: "RouteList",
        components: {
            RouteItem: () => import("@/components/Routes/RouteItem"),
            RouteForm: () => import("@/components/Routes/RouteForm")
        },
        props: {
            routes: {
                type: Array,
                required: false,
                default: () => {
                    return []
                }
            }
        },
        computed: {
            isEmpty: function() {
                return this.routes.length
            }
        },
        data: () => {
            return {
                showAddForm: false
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .route-list {
        max-height: 100%;
        overflow-y: overlay;
    }

    .route-list::-webkit-scrollbar {
        display: none;
    }
</style>
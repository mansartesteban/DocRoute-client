<template>
    <div class="route-list d-inline-block mr-6">
        <v-btn color="success" :block="true" class="mb-4" @click="showAddForm = true" tile>
            <v-icon>mdi-plus</v-icon>
            <span>Nouvelle route</span>
        </v-btn>
        <v-text-field
                label="Rechercher"
                pre
                append-icon="mdi-magnify"
                v-model="search"
        ></v-text-field>
        <route-form :show="showAddForm" v-on:input="showAddForm = arguments[0]"></route-form>
        <v-skeleton-loader
                v-if="!isEmpty"
                v-for="i in 5"
                height="94"
                type="list-item-three-line"
        ></v-skeleton-loader>
        <div class="route-list-item">
            <div v-if="routesToDisplay.length > 0">
                <route-item
                        v-for="route in routesToDisplay"
                        :path="route.path"
                        :name="route.name"
                        :methods="route.method"
                        :id="route.id"
                ></route-item>
            </div>
            <div
                v-else
            >
                Aucune route
            </div>
        </div>
    </div>
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
            },
            routesToDisplay: function () {
                return this.searchInArray(this.routes, this.search)
            }
        },
        data: () => {
            return {
                showAddForm: false,
                search: ""
            }
        },
        methods: {
        }
    }
</script>

<style scoped>
    .route-list {
        max-height: 100%;
        background: #1e1e1e;
        border: 1px solid #333;
        padding: .8em;
    }

    .route-list-item::-webkit-scrollbar {
        display: none;
    }

    .route-list-item {
        overflow-y: overlay;
        max-height: 86%;
    }
</style>
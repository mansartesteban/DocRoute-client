<template>
    <div class="route-list d-inline-block pr-6">
        <route-new></route-new>
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
                :methods="route.methods"
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
            RouteNew: () => import("@/components/Routes/RouteNew")
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
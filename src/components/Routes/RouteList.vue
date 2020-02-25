<template>
    <div class="route-list d-inline-block pr-6">
        <route-new></route-new>
        <route-item
                v-for="route2 in routes"
                :path="route2.path"
                :name="route2.name"
                :methods="route2.methods"
                :id="route2.id"
        >
        </route-item>
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
<template>
    <v-layout class="d-flex flex-column route-index py-4 px-5">
        <div v-if="route != undefined">
            <h1 class="title">{{ route.name }}</h1>
            <h2 class="subtitle-2">{{ route.path }}</h2>
            <method :method="route.method[0].label"></method>

            <h1 class="title mt-3">Routes enfant</h1>


            <div class="d-flex flex-row flex-wrap">
                <route-item
                        class="mr-3"
                        v-for="route in nestedRoutes"
                        :path="route.path"
                        :name="route.name"
                        :methods="route.method"
                        :id="route.id"
                ></route-item>
            </div>
        </div>
    </v-layout>
</template>

<script>
    export default {
        name: "RoutesIndex",
        props: {
        },
        computed: {
            route() {
                return this.$store.getters["ModuleRoute/getSelectedRoute"]
            },
            nestedRoutes() {
                return this.$store.getters["ModuleRoute/getNestedRoutes"](this.route.id)
            }
        },
        components: {
            Method: () => import("@/components/Routes/Method"),
            RouteItem: () => import("@/components/Routes/RouteItem")
        }
    }
</script>

<style scoped>
    .route-index {
        background: #1e1e1e;
        border: 1px solid #333
    }
</style>
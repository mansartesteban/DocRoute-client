<template>
    <div class="route-list">
        <!--<route-item-->
                <!--:path="this.route.path"-->
                <!--:name="this.route.name"-->
                <!--:methods="this.route.methods"-->
        <!--&gt;-->
        <!--</route-item>-->
        <route-item
                v-for="route2 in getRoutes"
                :path="route2.path"
                :name="route2.name"
                :methods="route2.methods"
        >
        </route-item>
    </div>
</template>

<script>
    export default {
        name: "RouteList",
        components: {
            RouteItem: () => import("@/components/Routes/RouteItem")
        },
        props: {
        },
        computed: {
            getRoutes: function () {
                let routes = []
                for (let i = 0 ; i < 10 ; i++) {
                    routes.push(this.route)
                }
                return routes
            }
        },
        data: () => {
            return {
                route: {
                    path: "/app",
                    name: "__App",
                    methods: [
                        {
                            label: "POST",
                            color: "primary"
                        },
                        {
                            label: "GET",
                            color: "success"
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
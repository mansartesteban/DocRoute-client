<template>
    <div class="route-list d-inline-block pr-6">
        <!--<route-item-->
                <!--:path="this.route.path"-->
                <!--:name="this.route.name"-->
                <!--:methods="this.route.methods"-->
        <!--&gt;-->
        <!--</route-item>-->
        <route-item
                v-for="route2 in route"
                :path="route2.path"
                :name="route2.name"
                :methods="route2.methods"
                :id="route2.id"
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
                route: [
                    {
                        id: 1,
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
                    },
                    {
                        id: 2,
                        path: "/app/components",
                        name: "__App_Components",
                        methods: [
                            {
                                label: "POST",
                                color: "primary"
                            },
                            {
                                label: "PUT",
                                color: "primary"
                            }
                        ]
                    }
                ],
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
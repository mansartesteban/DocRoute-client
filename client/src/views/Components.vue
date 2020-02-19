<template>
    <v-layout class="components-view">
        <v-layout class="routes-layout">
            <route-list></route-list>

            <div class="methods-section">
                <method method="GET"></method>
                <method method="POST"></method>
                <method method="PUT"></method>
                <method method="PATCH"></method>
                <method method="DELETE"></method>
                <method method="CONNECT"></method>
                <method method="TRACE"></method>
                <method method="HEAD"></method>
                <method method="OPTIONS"></method>
            </div>


            <route-nested-item
            >

            </route-nested-item>

        </v-layout>
    </v-layout>
</template>

<script>
    export default {
        name: "Components",
        components: {
            RouteList: () => import("@/components/Routes/RouteList"),
            RouteNestedItem: () => import("@/components/Routes/RouteNestedItem"),
            Method: () => import("@/components/Routes/Method")
        }
    }
</script>

<style scoped>
    .routes-layout {
        max-height: 97vh;
    }
</style>
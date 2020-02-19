<template>
    <v-layout class="components-view">
        <v-container class="routes-layout">
            <route-list></route-list>
            <hr>



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
            <hr>



            <route-nested-item></route-nested-item>
            <route-nested-item></route-nested-item>

        </v-container>
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

    hr {
        border-color: #777;
        border-bottom: 0;
        border-left: 0;
        border-right: 0;
        margin: 2em 0;
    }
</style>
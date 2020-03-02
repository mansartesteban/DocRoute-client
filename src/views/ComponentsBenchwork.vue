<template>
    <v-container fluid fill-height class="components-view">


        <v-btn
                color="info"
                @click="$notify({text:'test'})"
        >Ajouter une alerte</v-btn>

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
        <route-nested-item></route-nested-item>
        <route-nested-item></route-nested-item>
        <route-nested-item></route-nested-item>
        <hr>


        <reg-ex
            regex="/{[a-zA-Z0-9]+}{2,6}/"
        ></reg-ex>
        <hr>



        <parameter
            name="id"
            type="int"
        ></parameter>
        <parameter
            name="id"
            type="int"
        ></parameter>
        <parameter
            name="id"
            type="int"
        ></parameter>
        <parameter
            name="id"
            type="int"
        ></parameter>
        <hr>

        <header-item
            name="Content-Type"
        >
        </header-item>
        <header-item
                name="Content-Type"
        >
        </header-item>
        <header-item
                name="Content-Type"
        >
        </header-item>

        <header-list
                :headers="headers"
        >
        </header-list>


        <route-new
            class="mt-4">
        </route-new>

    </v-container>
</template>

<script>
    export default {
        name: "Components",
        components: {
            RouteList: () => import("@/components/Routes/RouteList"),
            RouteNestedItem: () => import("@/components/Routes/RouteNestedItem"),
            Method: () => import("@/components/Routes/Method"),
            RegEx: () => import("@/components/Main/RegEx"),
            Parameter: () => import("@/components/Routes/Parameter/Parameter"),
            HeaderItem: () => import("@/components/Routes/Headers/HeaderItem"),
            HeaderList: () => import("@/components/Routes/Headers/HeaderList"),
            RouteNew: () => import("@/components/Routes/RouteForm"),
        },
        data: function() {
            return {
                headers: [
                    {
                        name: "Content-Type",
                        acceptedValues: [
                            "Application/JSON",
                            "application/XML",
                            "text/plain-text"
                        ]
                    },
                    {
                        name: "Content-Type",
                        acceptedValues: [
                            "Application/JSON",
                            "application/XML",
                            "text/plain-text"
                        ]
                    },
                    {
                        name: "Content-Type",
                        acceptedValues: [
                            "Application/JSON",
                            "application/XML",
                            "text/plain-text"
                        ]
                    },
                    {
                        name: "Content-Type",
                        acceptedValues: [
                            "Application/JSON",
                            "application/XML",
                            "text/plain-text"
                        ]
                    }
                ]
            }
        },
        computed: {
        },
        methods: {
        },

    }
</script>

<style scoped>

    hr {
        border-color: #777;
        border-bottom: 0;
        border-left: 0;
        border-right: 0;
        margin: 2em 0;
    }

    .components-view {
        overflow-y: overlay;
    }
</style>
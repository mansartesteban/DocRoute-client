<template>
    <div class="route-item">
        <v-card
            dense
            width="250"
            tile
        >
            <v-toolbar color="primary" dark dense
                height="32"
            >
                <v-toolbar-title class="ma-0">
                    {{ name }}
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <p
                        class="mb-2"
                >
                    Path: {{ path }}
                </p>
                <v-chip
                    v-for="method in methods"
                    small
                    pill
                    class="mr-3"
                >
                    {{ method }}
                </v-chip>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "RouteItem",
        props: {
            path: {
                required: true,
                type: String
            },
            name: {
                required: true,
                type: String
            },
            methods: {
                type: Array,
                required: true
            }
            // path: "/app",
            // name: "__App",
            // methods: [
            //     "POST",
            //     "GET"
            // ]

        }
    }
</script>

<style scoped>

</style>
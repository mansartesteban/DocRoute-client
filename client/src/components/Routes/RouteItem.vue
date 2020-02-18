<template>
    <div class="route-item">
        <v-card
            dense
            width="230"
            tile
            class="mb-3"
        >
            <v-toolbar color="primary"
                       dark
                       dense
                       height="32"
            >
                <v-toolbar-title>
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
                    :color="method.color"
                >
                    {{ method.label }}
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
        }
    }
</script>

<style scoped>

</style>
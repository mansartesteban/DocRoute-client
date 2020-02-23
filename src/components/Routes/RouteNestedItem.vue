<template>
    <v-card
            class="route-nested-item mb-3 mr-3"
            :class="selected?'selected':''"

            tile
    >
        <v-card-title>
            <v-icon class="mr-4">mdi-tag-multiple</v-icon>__App_Components_RouteNested
        </v-card-title>
        <v-card-subtitle>
            <v-icon class="mr-4">mdi-sitemap</v-icon><b>/app</b>/components/route-nested
        </v-card-subtitle>
        <v-card-text>
            <div class="route-nested-methods">
                <method
                        v-for="method in methods"
                        :method="method"
                        :key="method"
                >
                </method>
            </div>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "RouteNestedItem",
        components: {
            Method: () => import("@/components/Routes/Method")
        },
        data: function () {
            return {
                selected: Math.random() > 0.5
            }
        },
        props: {
            methods: {
                type: Array,
                required: false,
                default: function () {
                    return ["GET", "POST"]
                }
            }
        }
    }
</script>

<style scoped>
    .route-nested-item {
        display: inline-block;
    }

    .route-nested-item.selected {
        border-left: 3px solid #3966bf;
    }

    .route-nested-item:not(.selected) {
        padding-left: 3px;
    }
</style>
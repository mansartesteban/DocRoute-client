<template>
    <v-card
            class="route-nested-item"
            :class="selected?'selected':''"

            tile
    >
        <v-card-text>
            <div class="route-nested-path">/app/components/route-nested</div>
            <div class="route-nested-methods">
                <method
                        v-for="method in methods"
                        :method="method"
                        :key="method"
                >
                </method>
            </div>
            <div class="route-nested-name"></div>
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
                selected: true
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

    }

    .route-nested-item.selected {
        border-left: 3px solid #3966bf;
    }
</style>
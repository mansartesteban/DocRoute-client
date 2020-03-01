<template>
    <v-layout class="d-block header-list pa-3">
        <header-item
                v-for="item in headers"
                :name="item.name"
                :acceptedValues="item.acceptedValues"
        >

        </header-item>
    </v-layout>
</template>

<script>
    export default {
        name: "HeaderList",
        components: {
            HeaderItem: () => import("@/components/Routes/Headers/HeaderItem")
        },
        props: {
            headers: {
                type: Array,
                required: true,
                default: () => {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .header-list {
        background: rgba(255, 255, 255, .1);
    }
</style>
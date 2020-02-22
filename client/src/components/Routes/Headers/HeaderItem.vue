<template>
    <v-layout class="header-item mb-3">
        <span class="header-item-name mr-4">
            {{ name }}
        </span>
        <div class="d-inline-block header-item-values">
            <v-chip v-for="value in acceptedValues" small
                    class="mr-2">
                {{ value }}
            </v-chip>
        </div>
    </v-layout>
</template>

<script>
    export default {
        name: "HeaderItem",
        props: {
            name: {
                type: String,
                required: true,
                default: "test"
            },
            acceptedValues: {
                type: Array,
                require: false,
                default: () => {return [
                    "application/json",
                    "application/xml",
                    "text/plain-text"
                ]}
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <v-container class="parameter">
        <span class="paramater-name">
            <v-icon class="mr-4">mdi-key-variant</v-icon>
            {{ name }}
        </span>
        <br>
        <span class="parameter-name">
            <v-icon class="mr-4">mdi-help</v-icon>
            {{ type }}
        </span>
        <br>
        <span class="parameter-regex">
            <reg-ex regex="/{[a-zA-Z0-9]+}{2,6}/"></reg-ex>
        </span>

    </v-container>
</template>

<script>
    export default {
        name: "Parameter",
        components: {
            RegEx: () => import("@/components/Main/RegEx")
        },
        props: {
            name: {
                type: String,
                required: true,
                default: ""
            },
            type: {
                type: String,
                required: true,
                default: ""
            }
        }
    }
</script>

<style scoped>
    .parameter {
        display: inline-block;
        background: #1e1e1e;
    }
</style>
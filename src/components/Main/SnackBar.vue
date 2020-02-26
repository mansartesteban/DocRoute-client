<template>
    <v-snackbar
            v-model="snackbar.state"
            :color="snackbar.type"
            top
            :timeout="4500"
    >
        <v-icon>mdi-check</v-icon>
        {{ snackbar.message }}
        <v-btn
                dark
                text
                @click="dismissSnackbar"
        >
            Close
        </v-btn>
    </v-snackbar>
</template>

<script>
    export default {
        name: "SnackBar",
        computed: {
            snackbar () {
                return this.$store.state.snackbar
            }
        },
        methods: {
            dismissSnackbar() {
                this.$store.commit('dismissSnackbar')
            }
        }
    }
</script>

<style scoped>

</style>
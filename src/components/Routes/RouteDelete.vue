<template>
    <div class="route-to-delete">
        <v-btn icon small @click="show = true">
            <v-icon>mdi-delete</v-icon>
        </v-btn>
        <v-dialog v-model="show"
                  width="400"
        >
            <v-card tile>
                <v-toolbar dense color="error" tile>
                    <v-toolbar-title tile>
                        <v-icon class="mr-3">mdi-delete</v-icon>Suppression de <b>{{ routeName || "'sans-nom'" }}</b>
                    </v-toolbar-title>

                </v-toolbar>
                <v-card-text class="pt-6">
                    <span class="mb-6">Êtes-vous sûr(e) de vouloir supprimer cette route ?</span>
                    <div class="ma-6"></div>
                    <v-btn @click="show = false" color="secondary" class="float-right" tile>
                        Retour
                    </v-btn>
                    <v-btn @click="deleteRoute(routeId)" color="error" tile>
                        Yes sir !
                    </v-btn>

                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "RouteDelete",
        props: {
            routeName: String,
            routeId: Number
        },
        data: () => {
            return {
                show: false,
                loading: false
            }
        },
        methods: {
            deleteRoute(id) {
                this.loading = true
                this.$store.dispatch("ModuleRoute/deleteRoute", {
                    id: id
                })
                .then(success => {
                    this.show = false
                    this.$notify({
                        type: "success",
                        text: "Route supprimée",
                    })
                    this.loading = false
                })
                .catch(error => {
                    this.loading = false
                })
            }
        }
    }
</script>

<style scoped>

</style>
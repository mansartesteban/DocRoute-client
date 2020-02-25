<template>
    <div class="route-new">
        <v-btn color="success" :block="true" class="mb-4" @click="show = true" tile>
            <v-icon>mdi-plus</v-icon>Nouvelle route
        </v-btn>
        <v-dialog v-model="show"
            width="400"
        >
            <v-card tile
            >
                <v-toolbar color="success" dense>
                    <v-toolbar-title>
                        Ajouter une route
                    </v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <v-text-field
                            label="Nom"
                            title="Nom"
                            v-model="name"
                    >
                    </v-text-field>
                    <v-text-field
                            label="Chemin"
                            title="Chemin"
                            v-model="path"
                    >
                    </v-text-field>
                    <v-btn color="success" small @click.prevent="addRoute()">
                        Ajouter
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import ClickOutside from 'vue-click-outside'

    export default {
        name: "RouteNew",
        data: () => {
            return {
                show: false,
                name: "",
                path: ""
            }
        },
        methods: {
            addRoute: function () {
                let $this = this;
                this.$store.dispatch("addRoute", {
                    name: this.name,
                    path: this.path
                })
                .then(success => {
                    this.show = false
                    this.resetForm()
                })
                .catch(error => {

                })
            },
            resetForm: function () {
                this.name = ""
                this.path = ""
            }
        }
    }
</script>

<style scoped>

</style>
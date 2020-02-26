<template>
    <div class="route-new">
        <v-btn color="success" :block="true" class="mb-4" @click="show = true" tile>
            <v-icon>mdi-plus</v-icon>Nouvelle route
        </v-btn>
        <v-dialog v-model="show"
            width="400"
        >
            <v-card tile
                    :loading="loading"
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
                            :error-messages="errors.name"
                            @keypress="clearErrors('path')"
                    >
                    </v-text-field>
                    <v-text-field
                            label="Chemin"
                            title="Chemin"
                            v-model="path"
                            :error-messages="errors.path"
                            @keypress="clearErrors('path')"
                    >
                    </v-text-field>
                    <v-btn color="success" small @click.prevent="addRoute()" class="mt-4">
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
                path: "",
                loading: false,
                errors: {
                    name: null,
                    path: null
                }
            }
        },
        methods: {
            addRoute: function () {
                let $this = this;
                this.loading = true;
                this.$store.dispatch("addRoute", {
                    name: this.name,
                    path: this.path
                })
                .then(success => {
                    this.show = false
                    this.resetForm()
                    this.loading = false;
                    this.$store.commit("popSnackbar", {type: "success", message: success.message})
                })
                .catch(response => {
                    this.errors.name = response?.datas?.errors?.name || null
                    this.errors.path = response?.datas?.errors?.path || null
                    this.loading = false;
                })
            },
            resetForm: function () {
                this.name = ""
                this.path = ""
                this.errors = this.errors.map(error => "")
                this.loading = false
            },
            clearErrors: function (fieldToClear) {
                this.errors[fieldToClear] = null
            }
        }
    }
</script>

<style scoped>

</style>
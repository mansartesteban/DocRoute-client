<template>
    <div class="route-form">
        <v-dialog :value="show"
                  v-on:input="closeForm"
            width="400"
        >
            <v-card tile
                    :loading="loading"
            >
                <v-toolbar :color="valid ? (update ? 'warning' : 'success') : 'error'" dense>
                    <v-toolbar-title>
                        <span v-if="update">Modifier la route {{ name }}</span>
                        <span v-else>Ajouter une route</span>
                    </v-toolbar-title>
                </v-toolbar>
                <v-card-text class="pt-4">
                    <form @submit.prevent="submit" @keyup.enter.prevent="submit" tabindex="0">
                        <v-text-field
                                label="Nom"
                                title="Nom"
                                v-model="name"
                                :error-messages="errors.name"
                                @keypress="clearErrors('name')"
                        ></v-text-field>
                        <v-text-field
                                label="Chemin"
                                title="Chemin"
                                v-model="path"
                                :error-messages="errors.path"
                                @keypress="clearErrors('path')"
                        ></v-text-field>
                        <v-select
                            v-model="method"
                            label="Méthode"
                            :items="methods"
                            item-text="label"
                            item-value="id"
                            :error-messages="errors.method"
                            return-object
                            v-on:change="clearErrors('method')"
                        >
                            <template v-slot:selection="{ item, index }">
                                <method :method="item.label"></method>
                            </template>
                        </v-select>
                        <v-btn v-if="!update" color="success" small @click.prevent="submit" class="mt-4">
                            Ajouter
                        </v-btn>
                        <v-btn v-else color="warning" small @click.prevent="submit" class="mt-4">
                            Modifier
                        </v-btn>
                    </form>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "RouteForm",
        props: {
            show: {
                type: Boolean,
                default: false
            },
            update: {
                type: Boolean,
                default: false
            },
            defaultValue: {
                type: Object,
                required: false,
                default: () => {return {}}
            },
            id: {
                type: Number,
                required: false,
                default: null
            }
        },
        computed: {
            methods: function () {
                return this.$store.getters["getMethods"]
            }
        },
        data: () => {
            return {
                method: "",
                valid: true,
                showF: false,
                name: "",
                path: "",
                loading: false,
                errors: {
                    name: "",
                    path: "",
                    method: ""
                }
            }
        },
        methods: {
            submit: function () {
                let $this = this;

                if (this.name == "") {
                    this.setError("name", "Veuillez renseigner un nom")
                }

                if (this.path == "") {
                    this.setError("path", "Veuillez renseigner un chemin")
                } else {
                    if (!this.path.match(/(?<!\?.+)(?<=\/)[\w-]+(?=[/\r\n?]|$)/)) {
                        this.setError("path", "Veuillez renseigner une chemin valide")
                    }
                }

                if (this.method == "") {
                    this.setError("method", "Veuillez renseigner une méthode pour cette route")
                }

                if (this.isValid()) {
                    this.loading = true;
                    this.$store.dispatch("ModuleRoute/" + (this.update ? "updateRoute" : "addRoute"), {
                        name: this.name,
                        path: this.path,
                        method: this.method.id,
                        id: this.id
                    })
                    .then(success => {
                        this.closeForm()
                        this.resetForm()
                        this.$notify({type: "success", text: success.message})
                    })
                    .catch(response => {
                        this.$notify({type: "error", text: response.message})
                        this.setError("name", response?.datas?.errors?.name || "")
                        this.setError("path", response?.datas?.errors?.path || "")
                        this.setError("method", response?.datas?.errors?.method || "")
                        this.loading = false;
                    })
                }
            },
            resetForm: function () {
                this.name = ""
                this.path = ""
                this.method = ""
                this.clearErrors("name")
                this.clearErrors("path")
                this.clearErrors("method")
                this.loading = false
            },
            setValid: function() {
                for (let error in this.errors) {
                    if (this.errors[error] !== "") {
                        this.valid = false
                        return
                    }
                }
                this.valid = true
            },
            isValid: function () {
                return this.valid
            },
            clearErrors: function (fieldToClear) {
                this.setError(fieldToClear, "")
            },
            setError: function (field, error) {
                if (this.errors[field] !== undefined) {
                    this.errors[field] = error
                }
                this.setValid()
            },
            closeForm: function () {
                this.$emit("input", false)
                this.resetForm()
            }
        },
        components: {
            Method: () => import("@/components/Routes/Method")
        },
        created() {
            this.name = this.defaultValue.name || ""
            this.path = this.defaultValue.path|| ""
            this.method = this.defaultValue.methods || null
        }
    }
</script>

<style scoped>

</style>
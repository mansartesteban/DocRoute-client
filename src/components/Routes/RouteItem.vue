<template>
    <div class="route-item">
        <v-card
            dense
            width="230"
            tile
            class="mb-3"
            :class="selected?'selected':''"
        >
            <v-toolbar color="primary"
                       dark
                       dense
                       height="32"
                       :title="name"
            >
           <!--@click.stop="$router.push('/routes/show')"-->


                <v-toolbar-title>
                    {{ name }}
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn @click="showUpdateForm = true" icon small>
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <route-form
                    v-if="showUpdateForm"
                    :show="showUpdateForm" v-on:input="showUpdateForm = arguments[0]"
                    :update="true"
                    :id="id"
                    :defaultValue="defaultValue"
                ></route-form>
                <route-delete
                    :routeId="id"
                    :routeName="name">
                </route-delete>
            </v-toolbar>
            <v-card-text class="route-item-content">
                <p :class="methods.length ? 'mb-2' : 'mb-0'">
                    {{ path }}
                </p>
                <method
                        v-for="method in methods"
                        :method="method.label"
                        :key="method.label"
                >
                </method>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: "RouteItem",
        components: {
            Method: () => import("@/components/Routes/Method"),
            RouteDelete: () => import("@/components/Routes/RouteDelete"),
            RouteForm: () => import("@/components/Routes/RouteForm")
        },
        props: {
            selected: {
                type: Boolean,
                default: false
            },
            id: {
                type: Number
            },
            path: {
                required: true,
                type: String
            },
            name: {
                required: true,
                type: String
            },
            methods: {
                type: Array,
                required: false,
                default: () => {
                    return []
                }
            }
        },
        data: function () {
            return {
                showUpdateForm: false
            }
        },
        computed: {
            defaultValue() {
                console.log(this.methods)
                return {
                    path: this.path,
                    name: this.name,
                    methods: this.methods[0]
                }
            }
        }
    }
</script>

<style scoped>
    .route-item .route-item-content {
        position: relative;
    }

    .route-item:hover  .route-item-content:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #ffffff;
        opacity: .05;
    }
</style>
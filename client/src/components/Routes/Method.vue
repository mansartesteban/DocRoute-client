<template>
    <div class="method mb-2">
        <v-chip small :color="colors[method.toLowerCase()]">{{ method }}</v-chip>
    </div>
</template>

<script>
    export default {
        name: "Method",
        props: {
            method: {
                type: String,
                default: "",
                required: true,
                validator: function (value) {
                    return [
                        "GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "CONNECT", "OPTIONS", "TRACE"
                    ].indexOf(value) !== -1
                }
            }
        },
        computed: {
            colors: function () {
                return  {
                    get: "success",
                    post: "primary",
                    put: "primary",
                    patch: "warning",
                    delete: "error",
                    head: "warning",
                    connect: "primary",
                    options: "success",
                    trace: "primary"
                }
            }
        }
    }
</script>

<style scoped>
    .method {
        display: inline-block;
    }

    .method:not(:last-child) {
        margin-right: .5em;
    }
</style>
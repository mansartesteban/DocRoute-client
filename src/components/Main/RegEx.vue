<template>
    <div
        class="regex-prettier d-inline-block"
    >
        <v-icon v-if="icon" class="mr-4">
            mdi-json
        </v-icon>
        <span class="hightlight px-2 py-1 pl-1">
            {{ regex }}
        </span>
    </div>
</template>

<script>
    export default {
        name: "RegEx",
        props: {
            regex: {
                type: String,
                required: true,
                default: () => ""
            },
            hightlight: {
                type: Boolean,
                require: false,
                default: false
            },
            icon: {
                type: Boolean,
                required: false,
                default: true
            }
        },
        data: function () {
            return {
                c_hightlight: this.$props.hightlight
            }
        }
    }
</script>

<style scoped>
    .regex-prettier .hightlight {
        background: rgba(255, 255, 255, .1);
    }
</style>
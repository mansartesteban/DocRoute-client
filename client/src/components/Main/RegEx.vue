<template>
    <div
        class="regex-prettier px-2 py-1 d-inline-block"
        :class="c_hightlight ? 'hightlight' : ''"
        @mouseenter.stop="c_hightlight=!c_hightlight"
        @mouseleave.stop="c_hightlight=!c_hightlight"
    >
        <v-icon v-if="icon" class="mr-4">
            mdi-check-all
        </v-icon>
        {{ regex }}
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
    .regex-prettier.hightlight {
        background: rgba(255, 255, 255, .1);
    }
</style>
<template>
    <div class="alert-item">
        <v-alert
                :type="typeAlert"
                tile
                border="top"
                :dismissible="true"
                :timeout="3500"
                :value="visible"
        >
            {{ message }}
        </v-alert>
    </div>
</template>

<script>
    export default {
        name: "AlertItem",
        props: {
            typeAlert: {
                type: String,
                default: 'error'
            },
            message: {
                required: true,
                type: String,
                default: 'Une erreur est survenue'
            },
            keyAlert: {
                require: true,
                type: Number,
                default: 0
            }
        },
        data: () => {
            return {
                visible: false
            }
        },
        created() {
            let $this = this
            this.visible = true;
            setTimeout(() => {
                $this.visible = false
                $this.$store.dispatch('removeAlert', $this.keyAlert)
            }, 3500)
        }
    }
</script>

<style scoped>

</style>
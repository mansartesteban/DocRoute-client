<template>
    <div class="alert-container">
        <m-alert-item
            v-for="alert in alerts"
            :typeAlert="alert.typeAlert"
            :message="alert.message"
            :keyAlert="alert.keyAlert"
        >
        </m-alert-item>
    </div>
</template>

<script>
    export default {
        name: "Alert",
        computed: {
            alerts() {
                return this.$store.state.alerts
            }
        },
        components: {
            MAlertItem: () => import("@/components/Main/AlertItem")
        }
    }
</script>

<style scoped>
    .alert-container  {
        position: fixed;
        right: 1.5em;
        top: 1.5em;
        z-index: 1000000;
    }
</style>
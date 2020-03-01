export default {
    dismissSnackbar(state) {
        state.snackbar.state = false;
    },
    popSnackbar(state, payload) {
        if (payload?.message.length > 0) {
            state.snackbar.state = true
            state.snackbar.message = payload?.message || ""

            if (["primary", "secondary", "info", "success", "warning", "danger"]
                .indexOf(payload?.type.toLowerCase())
            ) {
                state.snackbar.type = payload?.type || ""
            } else {
                state.snackbar.type = "primary"
            }

        }
    }
}
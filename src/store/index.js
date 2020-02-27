import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: [],
    alert: {
        state: false,
        message: ""
    },
    snackbar: {
        type: "primary",
        message: "",
        state: false
    },
    alerts: []
  },
  mutations: {
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
  },
  actions: {
    listRoutes({commit, state}) {
      Axios.get("/routes", {toto: "toto"})
          .then(({data, status}) => {
              if (status === 200) {
                state.routes = data.routes
              }
          })
          .catch((res) => {
            console.log("error", res)
          })

    },
    addRoute({commit, state}, payload) {
        return new Promise((resolve, reject) => {
            Axios.post("/routes", {object_to_create: payload})
                .then(({data, status}) => {
                    if (status == 201) {
                        state.routes.push(data.datas.object_created)
                        resolve(data)
                    }
                })
                .catch((error) => {
                    reject(error.response.data)
                })
        })
    },
    deleteRoute({commit, state}, payload) {
        return new Promise((resolve, reject) => {
            Axios.delete("/routes/" + payload.id)
                .then(({data, status}) => {
                    if (status == 200) {
                        if (data.datas.object_deleted.id != undefined) {
                            let idDeleted = data.datas.object_deleted.id
                            state.routes = state.routes.filter((route) => {
                                return route.id != idDeleted
                            })
                            resolve(true)
                        }
                    }
                })
                .catch((error) => {
                    return error
                })
        })

    },
    addAlert({commit, state}, data) {
        if (data.message) {
            data.keyAlert = state.alerts.length
            state.alerts.push(data)
        }
    },
    removeAlert({commit, state}, keyAlert) {
        state.alerts = state.alerts.filter((alert) => {
            console.log(alert, keyAlert)
            return alert.keyAlert != keyAlert
        })
    }
  },
  modules: {
  }
})

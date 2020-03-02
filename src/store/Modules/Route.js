import Axios from "axios";

const ModuleRoute = {
    namespaced: true,
    state: {
        routes: [],
        selectedRoute: null
    },
    mutations: {
        selectRoute(state, payload) {
            let index = -1
            let i = 0
            for (let route of state.routes) {
                if (route.id == payload.id) {
                    index = i
                }
                i++
            }
            state.selectedRoute = index
        }
    },
    getters: {
        getSelectedRoute: (state) => {
            return (state.selectedRoute != -1) ? state.routes[state.selectedRoute] : null
        },
        getRoutes: (state) => {
            return state.routes
        },
        getRoute: (state, id) => {
            let i = 0
            let index = -1
            for (let route of state.routes) {
                if (route.id == id) {
                    index = i
                }
                i++;
            }
            return (index != -1) ? state.routes[index] : null
        }
    },
    actions: {
        listRoutes({commit, state}) {
            return new Promise((resolve, reject) => {
                Axios.get("/routes")
                    .then(({data, status}) => {
                        if (status === 200) {
                            state.routes = data.routes
                            resolve(data)
                        }
                    })
                    .catch((res) => {
                        reject(res)
                    })
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
        updateRoute({commit, state}, payload) {
            let $this = this;
            return new Promise((resolve, reject) => {
                Axios.put("/routes/" + payload.id, {object_to_update: payload})
                    .then(({data, status}) => {
                        if (status == 200) {
                            if (data.datas.object_updated) {
                                state.routes = state.routes.map((route) => {
                                        if (route.id == data.datas.object_updated.id) {
                                            return data.datas.object_updated
                                        } else {
                                            return route
                                        }
                                    }
                                )
                            }
                            resolve(data)

                        }
                    })
                    .catch((error) => {
                        console.log(error)
                        reject(error.response)
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
                        reject(error)
                    })
            })
        },
    }
}

export default ModuleRoute
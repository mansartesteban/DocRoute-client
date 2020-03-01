import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: [],
    dictionary: {
        methods: [],
        headers: []
    }
  },
  mutations: {
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
                          state.routes = this.state.routes.map((route) => {
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
    listMethods({commit, state}) {
        return new Promise((resolve, reject) => {
            Axios.get("/methods")
                .then(({data, status}) => {
                    if (status == 200) {
                        for (let method of data.methods) {
                            state.dictionary.methods.push(method)
                        }
                        resolve(data)
                    } else {
                        reject(data)
                    }
                })
                .catch(res => {
                    reject(res)
                })
        })
    }
  },
  modules: {
  }
})

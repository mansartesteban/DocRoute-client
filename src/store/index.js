import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"


import ModuleRoute from "./Modules/Route"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dictionary: {
            methods: [],
            headers: []
        }
    },
    mutations: {
    },
    getters: {
        getMethods: (state) => {
            return state.dictionary.methods
        }
    },
    actions: {
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
        ModuleRoute: ModuleRoute
    }
})

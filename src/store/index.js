import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: []
  },
  mutations: {

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
      Axios.post("/routes", {object_to_create: payload})
          .then(({data, status}) => {
              if (status == 201) {
                state.routes.push(data.datas.object_created)
              }
            // todo : Récupérer l'objet créé et l'ajouter dans store.routes si aucune erreur
            // todo : Prévoir un slot pour les erreurs sur le component RouteNew
          })
          .catch((error) => {
              if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
              } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
              } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
              }
              console.log(error.config);
          })
    },
    deleteRoute({commit, state}, payload) {
        Axios.delete("/routes/" + payload.id)
            .then(({data, status}) => {
                if (status == 200) {
                    if (data.datas.object_deleted.id != undefined) {
                        let idDeleted = data.datas.object_deleted.id
                        state.routes = state.routes.filter((route) => {
                            return route.id != idDeleted
                        })
                    }
                }
            })
            .catch((error) => {
                console.log("error ?", error)
            })
    }
  },
  modules: {
  }
})

// Todo :
//  - Message d'erreurs
//  - Loader
//  - Skeleton Loader
//  - V-Alert
//  - Reset formulaire OK
//  - v-card Tile (sur v-dialog)
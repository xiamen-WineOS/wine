import {
  fetchCatalog
} from '../api'

export default {
  // ensure data for rendering given list type
  FETCH_CATALOG: ({ commit, state }) => {
    fetchCatalog().then(function (res) {
      var catalogTree = res.data
      commit('SET_CATALOGTREE', { catalogTree })
    })
  },
  FETCH_SUBCATALOG: ({ commit, state }, catagory) =>{
    commit('SET_SUBCATALOGTREE',catagory)
  }
}

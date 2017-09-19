import {
  fetchCatalog,
  fetchArticle,
  fetchArticleList
} from '../api'

export default {
  // ensure data for rendering given list type
  FETCH_CATALOG: ({ commit, state }) => {
    fetchCatalog().then(function (res) {
      var catalogTree = res.data
      commit('SET_CATALOGTREE', { catalogTree })
    })
  },
  FETCH_ARTICLE: ({ commit, state }, param) =>{
    fetchArticle(param).then(function (res) {
      var article = res.data
      commit('SET_ARTICLE',article)
    }) 
  },
  FETCH_ARTICLELIST: ({ commit, state }, param) =>{
    fetchArticleList(param).then(function (res) {
      var article = res.data
      commit('SET_ARTICLE',article)
    }) 
  }
}

import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
const Api = {
  databaseUrl: '/api/article/',
  oneArticle: '/api/catalog/',
  articleList: '/api/article/list/',
  catalogUrl: '/api/catalog/list'
}

export function fetchArticleList (param) {
  var url = Api.articleList
  return Vue.http.post(url, {"params": {"catalogId": param}}).then(function (res) {
    return res.body
  })
}

export function fetchArticle (param) {
  var url = Api.oneArticle + param + '/article'
  return Vue.http.get(url).then(function (res) {
    return res.body
  })
}

export function fetchCatalog () {
  var url = Api.catalogUrl
  return Vue.http.get(url).then(function (res) {
    return res.body
  })
}
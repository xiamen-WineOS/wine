import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
const Api = {
  databaseUrl: '/api/catalog/list',
  catalogUrl: '/api/catalog/list'
}

export function fetch (param) {
  var url = Api.databaseUrl + param
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
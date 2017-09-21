import Vue from 'vue'
import VueResource from 'vue-resource'
import { buildUrl } from '@/utils/index'

Vue.use(VueResource)
const Api = {
  databaseUrl: '/api/article/',
  oneArticle: '/api/catalog/',
  articleList: '/api/article/list/',
  catalogUrl: '/api/catalog/list',
  photoList: '/api//catalog/{{catalogId}}/photo/list',
  productList: '/api/catalog/{{catalogId}}/product/list'
}

export function fetchPhotoList (param) {
  var url = Api.photoList
  url = buildUrl(url, {catalogId: param})
  return Vue.http.post(url, {}).then(function (res) {
    return res.body
  })
}

export function fetchProductList (param) {
  var url = Api.productList
  url = buildUrl(url, {catalogId: param})
  return Vue.http.post(url, {}).then(function (res) {
    return res.body
  })
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
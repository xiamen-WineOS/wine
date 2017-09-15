export default {
  SET_PAGE: (state, { page }) => {
    state.page = page
  },
  SET_SUBCATALOGTREE: (state, catagory) => {
    console.log("watch of catagory:",catagory)
    state.subcatalog = catagory
  },
  SET_CATALOGTREE: (state, items) => {
    state.catalogTree = items.resultCatalogTree
  },
  SET_ARTICLE: (state, article) => {
    state.article = article
  }
}

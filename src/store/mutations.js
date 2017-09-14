export default {
  SET_PAGE: (state, { page }) => {
    state.page = page
  },
  SET_CURRURL: (state, currUrl) => {
    state.currUrl = currUrl
  },
  SET_SOURCEDATA: (state, items) => {
    state.sourceData = items.sourceData
  },
  SET_ARTICLE: (state, article) => {
    state.article = article
  }
}

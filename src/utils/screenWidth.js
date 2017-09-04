export function screenwidth () {
  debugger
  var width = document.body.clientWidth
  if (width <= 640) {
    return true
  } else {
    return false
  }
}
export function camelToKebab (str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

export function kebabToCamel (str) {
  return str.replace(/-([a-z])/g, g => g[1].toUpperCase())
}

export function dateFormat (date, format) {
  if (!date) {
    return date
  }
  let n = new Date(date)
  var d = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds(), n.getMilliseconds())
  return new Date(d).toISOString().slice(0, 19).replace('T', ' ')
}

export function dateYMD (date) {
  if (!date) {
    return date
  }
  let d = new Date(date)
  return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
}
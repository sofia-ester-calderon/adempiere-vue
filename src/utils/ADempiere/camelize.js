export function camelizeObjectEntries(obj) {
  Object.keys(obj).forEach(k => {
    const newK = k.replace(/(\_\w)/g, (m) => m[1].toUpperCase())
    if (newK !== k) {
      obj[newK] = obj[k]
      delete obj[k]
    }
  })
}

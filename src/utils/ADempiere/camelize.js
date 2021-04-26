export function camelizeObjectKeys(obj) {
  Object.keys(obj).forEach(k => {
    const newK = k.replace(/(\_\w)/g, (m) => m[1].toUpperCase())
    if (newK !== k) {
      obj[newK] = obj[k]
      delete obj[k]
    }
  })
}
export function renameObjectKey(obj, oldEntry, newEntry) {
  delete Object.assign(obj, { [newEntry]: obj[oldEntry] })[oldEntry]
}

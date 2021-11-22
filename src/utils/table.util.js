/**
 * método para filtrar un array
 * @param {any[]} data
 * @param {string} txt
 * @returns {any[]}
 * @constructor
 */
export function TableArrayFilter(data, txt) {
  const keys = Object.keys(data[0]).filter((x) => x !== 'key')
  const searchText = txt.toLowerCase()
  return data.filter((o) =>
    keys.some(
      (k) => o[k] && o[k].toString().toLowerCase().indexOf(searchText) !== -1
    )
  )
}


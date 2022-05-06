export const buildQuery = (data, type=false) => {
  let query = '?'
  let arr = {}
  const names = Object.keys(data)
  names.forEach(elm => {
    const typeArr = type ? data[elm].split() : data[elm]
    arr[elm] = type ? typeArr : typeArr.map(e => e.value)
    query = query.concat(`${elm}=${arr[elm].toString()}&`)
  })
  query = query.substring(0, query.length - 1)
  return query
}
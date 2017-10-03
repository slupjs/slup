export const requireComponent = (name, callback) => 
  import(`../pages/${name}`)
    .then((mod) => {
      window.endReq()

      callback(null, mod.default)
    })

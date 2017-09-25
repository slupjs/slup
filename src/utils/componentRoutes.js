export const requireComponent = (name, callback) => 
  import(`../pages/${name}`)
    .then((mod) => callback(null, mod.default))

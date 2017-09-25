export const AsyncHome = (n, callback) =>
  import('../pages/home').then(({ Home }) => callback(null, Home))

export const AsyncNotFound = (n, callback) =>
  import('../pages/404').then(({ NotFound }) => callback(null, NotFound))
import Inferno from 'inferno'

export const generate = (pathname) => {
  switch(true) {
    case pathname == '/':
      return 'Home'
    break

    case pathname.indexOf('components') !== -1:
      const name = pathname.replace('/components/', '')
      const Name = name.charAt(0).toUpperCase() + name.slice(1)

      return pathname.length > 12
        ? [
          <a>Components</a>, // Links to the components list
          ' - ',             // Separator
          <a>{Name}</a>      // Links to this specific component
        ]
        : 'Components'
      
    break

    default:
      return '404 - Not Found'
    break
  }
}

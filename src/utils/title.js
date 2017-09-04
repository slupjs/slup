import Inferno from 'inferno'

export const generate = (pathname) => {
  switch(true) {
    case pathname == '/':
      return 'Home'
    break

    case pathname.indexOf('components') !== -1: 
      return(
        <div>
          <a>Components</a>
          {pathname.length > 12 
            ? ['/', <a>{pathname.replace('/components/', '')}</a>]
            : null
          }
        </div>
      )
    break
    
    default:
      return '404 - Not Found'
    break
  }
}
import { components } from '../_pages'

export const generate = ({ pathname }) => {
  switch(true) {
    case pathname == '/':
      return 'Home'
    break

    case 
    pathname.indexOf('components') !== -1 && /** The URL contains /\component/\ */
    components.indexOf(pathname.replace('/components/', '')) !== -1: /** The component exists */

      const name = pathname.replace('/components/', '')
      const Name = name.charAt(0).toUpperCase() + name.slice(1)

      return `Components - ${Name}`
      
    break

    default:
      return '404 - Not Found'
    break
  }
}

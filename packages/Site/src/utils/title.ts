export const generateTitle = ({ pathname }: URL) => {
  const peices: string[] = pathname
    .split('/') /** Divide for each "folder" in the url */
    .filter(str => str) /** Filter just contextful strings */

  switch(peices.length) {
    case 0:
      return 'Home'
  
    default:
      return peices.join(' - ')
  }
}
import styled from '@slup/theming'

import { Navbar } from '@slup/navbar'
import { IconButton } from '@slup/buttons'
import { Typography } from '@slup/typography'
import { generateTitle } from '../utils/title'

import MenuIcon from '../../../Icons/icons/navigation/menu'

/** Navbar with a dimmed  */
export const NavBar = (props) => <Navbar style={{ boxShadow: 'none' }} {...props} />

/** Title element with a custom margin */
export const Title = styled(Typography)`
  margin-left: 16px
`

export const Header = (props, { router }) => {
  return(
    <NavBar> 
      {/** Icon to open the sidenav */}
      <IconButton>
        <MenuIcon />
      </IconButton>

      <Title title>{generateTitle(router.location)}</Title>
    </NavBar>
  )
}
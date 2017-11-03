import styled from '@slup/theming'

import { Navbar } from '@slup/navbar'
import { IconButton } from '@slup/buttons'
import { Typography } from '@slup/typography'
import { Grid } from '@slup/grid'
import { generateTitle } from '../utils/title'

import MenuIcon from '../../../Icons/icons/navigation/menu'
import { GitHub } from '../components/icons'

/** Navbar with a dimmed  */
export const NavBar = (props) => <Navbar style={{ boxShadow: 'none' }} {...props} />

/** Title element with a custom margin */
export const Title = styled(Typography)`
  margin-left: 16px
`

/** Redirect helper */
const redirect = () =>
  setTimeout(any => window.open('https://github.com/slupjs/slup', '_blank'), 350)


export const Header = ({ onOpen, ...props }, { router }) => {
  return(
    <NavBar> 
      <Grid middle space_between style={{ overflow: 'hidden' }}>

        <div style={{ display: 'flex', alignItems: 'center' }}>

          {/** Icon to open the sidenav */}
          <IconButton onClick={onOpen}>
            <MenuIcon />
          </IconButton>

          <Title title>{generateTitle(router.location)}</Title>

        </div>

        <div>
          <IconButton onClick={redirect}>
            <GitHub />
          </IconButton>
        </div>
      </Grid>
    </NavBar>
  )
}
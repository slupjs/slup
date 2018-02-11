import styled from '@slup/theming'

import { Navbar } from '../../../Navbar/src/index'
import { Tooltip } from '../../../Tooltip/src/index'
import { IconButton } from '@slup/buttons'
import { Typography } from '@slup/typography'
import { Grid } from '@slup/grid'
import { generateTitle } from '../utils/title'

import MenuIcon from '../../../Icons/icons/navigation/menu'
import { GitHub } from '../components/icons'

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 0 24px;

  @media (max-width: 960px) {
    padding: 0 16px;
  }
`

/** Title element with a custom margin */
export const Title = styled(Typography)`
  margin-left: 16px;
  flex: 1;
  align-self: center;
`

/** Redirect helper */
const redirect = () =>
  setTimeout(any => window.open('https://github.com/slupjs/slup', '_blank'), 300)


export const Header = ({ onOpen, ...props }, { router }) => {
  return(
    <Navbar primary> 
      <Wrapper>
        {/** Icon to open the sidenav */}
        <IconButton onClick={onOpen}>
          <MenuIcon />
        </IconButton>

        <Title title>{generateTitle(router.location)}</Title>
        
        <Tooltip text='Github'>
          <IconButton onClick={redirect}>
            <GitHub />
          </IconButton>
        </Tooltip>
      </Wrapper>
    </Navbar>
  )
}
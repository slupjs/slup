import styled from '@slup/theming'
import { Typography } from '@slup/typography'

import { CenterContainer } from '../components/container'

export const Spacer = styled.div`
  height: ${props => props.space}px;
  width: 100%;
`

export const CenterText = styled.div`
  width: 75%;
  text-align: center;
`

const CContainer = styled(CenterContainer)`
  &:after {
    display: none;
  }
`

export default () => 
  <CContainer>
    {/** Main big error code */}
    <Typography display4>404!</Typography>

    {/** Spacing */}
    <Spacer space={50} />

    {/** Short error message */}
    <CenterText>
      <Typography subheading>
        We're sorry, the page you requested couldn't be found
      </Typography>
    </CenterText>

    {/** Spacing */}
    <Spacer space={100} />
  </CContainer>
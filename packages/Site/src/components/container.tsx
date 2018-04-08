import Inferno from 'inferno'
import styled from '@slup/theming'

import { Col, Grid } from '@slup/grid'
import { Typography } from '@slup/typography'

export const Container = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  color: white;
  background: ${props => props.theme.background};
  overflow: auto;
`

export const CenterContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  
  &:after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: 500px solid transparent;
		border-left: 500px solid ${props => props.theme.secondary};
    transition: border-width 150ms;
    
    @media (max-width: 840px) {
      border-width: 350px;
    }

    @media (max-width: 600px) {
      border-width: 250px;
    }

    @media (max-width: 400px) {
      border-width: 200px;
    }
  }
`

export const Headline = styled(Typography)`
  margin: 32px 0;
  text-align: center;

  a {
    color: ${props => props.theme.text};
    text-decoration: underline dotted;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

export const Content = ({ children }) =>
  <Grid style={{ paddingTop: 64 }}>
    <Col sm={12}>
      {children}
    </Col>
  </Grid>


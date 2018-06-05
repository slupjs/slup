import { Col, Grid } from '@slup/grid';

import { Typography } from '@slup/typography';
import styled from '@slup/theming';

export const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  color: white;
  background: ${props => props.theme.background};
  overflow: hidden;
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
    border-bottom: 450px solid transparent;
		border-left: 450px solid ${props => props.theme.secondary};
    transition: border-width 150ms;
    
    @media (max-width: 920px), (max-height: 640px) {
      border-width: 300px;
    }

    @media (max-width: 660px), (max-height: 500px) {
      border-left-width: 250px;
      border-bottom-width: 150px;
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
  <Grid style={{ marginTop: 64 }}>
    <Col sm={12}>
      {children}
    </Col>
  </Grid>


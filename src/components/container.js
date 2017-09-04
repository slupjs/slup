import Inferno from 'inferno'
import styled from 'styled-components'

import { Col, Grid } from '@slup/grid'

export const Container = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  color: white;
  background: #424242;
`

export const Content = ({ children}) =>
  <Grid style={{ paddingTop: 64 }}>
    <Col sm={12} offset_lg={320}>
      {children}
    </Col>
  </Grid>

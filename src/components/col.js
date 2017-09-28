import Inferno from 'inferno'

import { Grid, Col } from '@slup/grid'

export const Container = ({ children }) => 
  <Grid>
    <Col
      offset_xl={128}
      pull_xl={128}
      offset_lg={96} 
      pull_lg={96}
      offset_sm={64}
      pull_sm={64}
      offset={24} 
      pull={24}
    >
      {children}
    </Col>
  </Grid>
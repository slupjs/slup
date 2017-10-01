import Inferno from 'inferno'

import { Grid, Col } from '@slup/grid'

export const Container = ({ children }) =>
  <Grid>
    <Col
      offset_xl={256}
      pull_xl={256}
      offset_lg={96}
      pull_lg={96}
      offset_md={64}
      pull_md={64}
      sm={12}
    >
      {children}
    </Col>
  </Grid>

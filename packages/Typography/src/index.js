import Inferno from 'inferno'
import Component from 'inferno-component'
import styled from 'styled-components'

import { lightTheme } from '@slup/theming'

export const Typography = styled.span`
  margin: 0;
  line-height: 1;
  font-size: ${props =>
    props.display4  && 112 ||
    props.display3  && 56  ||
    props.display2  && 45  ||
    props.display1  && 34  ||
    props.headline  && 24  ||
    props.title     && 20  ||
    props.subheader && 15  ||
    props.body2     && 13  ||
    props.body1     && 13  ||
    props.caption   && 12  ||
    props.button    && 14  ||
    14
  }px;
  font-weight: ${props =>
    props.display4  && 300 ||
    props.display3  && 400 ||
    props.display2  && 400 ||
    props.display1  && 400 ||
    props.headline  && 400 ||
    props.title     && 500 ||
    props.subheader && 400 ||
    props.body2     && 500 ||
    props.body1     && 400 ||
    props.caption   && 400 ||
    props.button    && 500 ||
    400
  };
  text-transform: ${props => props.button ? 'uppercase' : 'initial'};
  color: ${props => props.theme.text || lightTheme.text};
`
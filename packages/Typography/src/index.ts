import Inferno from 'inferno'
import styled, { rgba, lightTheme } from '@slup/theming'

export const Typography = styled.p`
  margin: 0;
  line-height: 1;
  text-transform: ${props => props.button ? 'uppercase' : 'initial'};

  /* Default font size */
  font-size: ${props =>
    props.display4   && 112 ||
    props.display3   && 56  ||
    props.display2   && 45  ||
    props.display1   && 34  ||
    props.headline   && 24  ||
    props.title      && 20  ||
    props.subheading && 15  ||
    props.body2      && 13  ||
    props.body1      && 13  ||
    props.caption    && 12  ||
    props.button     && 14  ||
    14
  }px;

  /* Default font weight */
  font-weight: ${props =>
    props.display4   && 300 ||
    props.display3   && 400 ||
    props.display2   && 400 ||
    props.display1   && 400 ||
    props.headline   && 400 ||
    props.title      && 500 ||
    props.subheading && 400 ||
    props.body2      && 500 ||
    props.body1      && 400 ||
    props.caption    && 400 ||
    props.button     && 500 ||
    400
  };

  /* Default colors */
  color: ${props =>
    props.display4   && rgba(props.theme.text || lightTheme.text, .54) ||
    props.display3   && rgba(props.theme.text || lightTheme.text, .54) ||
    props.display2   && rgba(props.theme.text || lightTheme.text, .54) ||
    props.display1   && rgba(props.theme.text || lightTheme.text, .54) ||
    props.headline   && rgba(props.theme.text || lightTheme.text, .87) ||
    props.title      && rgba(props.theme.text || lightTheme.text, .87) ||
    props.subheading && rgba(props.theme.text || lightTheme.text, .87) ||
    props.body2      && rgba(props.theme.text || lightTheme.text, .87) ||
    props.body1      && rgba(props.theme.text || lightTheme.text, .87) ||
    props.caption    && rgba(props.theme.text || lightTheme.text, .54) ||
    props.button     && rgba(props.theme.text || lightTheme.text, .87) ||
    props.theme.text || lightTheme.text
  };


  /* Media queries for font size */
  @media only screen and (max-width: 600px) {
    font-size: ${props =>
      props.display4   && 112 ||
      props.display3   && 56  ||
      props.display2   && 45  ||
      props.display1   && 34  ||
      props.headline   && 24  ||
      props.title      && 20  ||
      props.subheading && 16  ||
      props.body2      && 14  ||
      props.body1      && 14  ||
      props.caption    && 12  ||
      props.button     && 14  ||
      14
    }px;
  }
`

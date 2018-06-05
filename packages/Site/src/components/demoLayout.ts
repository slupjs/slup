import styled, { darken, rgba } from '@slup/theming'

import { Typography } from '@slup/typography'

export const Typo = styled(Typography)`
  width: 80%;
  color: ${props => rgba(props.theme.primary, .87)};
  margin: 24px auto;

  &:after {
    content: '¬';
    padding-left: 10px;
    color: ${props => props.theme.secondary};
  }
  
  @media (max-width: 700px) {
    width: 90%;
  }
`

export const Dot = styled.span`
  color: ${props => props.theme.secondary}; 
`

export const Blockquote = styled.blockquote`
  width: 80%;
  margin: 0 auto 32px auto;
  padding-left: 15px;
  white-space: pre-line;
  border-left: 4px solid ${props => rgba(props.theme.primary, .87)};
  
  @media (max-width: 700px) {
    width: 90%;
  }
`

export const Main = styled.div`
  margin-top: 64px;
  height: calc(100% - 64px);
  overflow-x: hidden;

  @media (max-width: 960px) {
    margin-top: 56px;
    height: calc(100% - 56px);
  }
`

export const Box = styled.div`
  width: 80%;
  margin: 0 auto;
  min-height: 600px;
  display: flex;
  flex-direction: column;

  hr {
    width: 100%;
    margin-bottom: 24px;
  }

  @media (max-width: 700px) {
    width: 90%;
  }
`

export const Heading = styled.div`
  display: flex;

  a:last-child {
    height: 20px;
    transform: translate(50%, 25%);
    fill: ${props => rgba(props.theme.text, .8)};

    svg {
      outline: none;
      transition: opacity 100ms;
      opacity: 0;
    }
  }

  &:hover {
    a:last-child svg {
      opacity: 1;
    }
  }
`

export const Paragraph = styled(Typography)`
  color: ${props => props.subheading ? props.theme.text : props.theme.primary};
  margin-bottom: 24px;

  strong a {
    color: ${props => props.theme.text};
    font-weight: 500;
  }

  p {
    margin: 0;
  }
`
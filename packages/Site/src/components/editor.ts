import styled from '@slup/theming'
import { Card } from '@slup/card'
import { Typography } from '@slup/typography'

export const Main = styled.div`
  height: 100%;
  overflow-x: hidden;
`

export const Typo = styled(Typography)`
  width: 80%;
  color: ${props => props.theme.text};
  margin: 24px auto;
  opacity: .87;
  
  @media (max-width: 700px) {
    width: 90%;
  }
`

export const Blockquote = styled.blockquote`
  width: 40%;
  margin: 0 auto;
  transform: translateX(-45%);
  padding-left: 2%;
  border-left: 4px solid ${props => props.theme.secondary};
  opacity: 0.87;
  
  @media (max-width: 700px) {
    width: 90%;
    transform: translateX(0);
  }
`

export const Container = styled(Card)`
  height: 50%;
  width: 80%;
  display: flex;
  margin: 48px auto;
  color: black;

  @media (max-width: 700px) {
    flex-direction: column;
    width: 90%;
  }
`

export const Area = styled.div`
  height: 100%;
  width: 50%;
  min-height: 50%;

  @media (max-width: 700px) {
    width: 100%;
  }
`
import styled from '@slup/theming'

/** The only needed shadows: 0, 2 and 8 depth */
const shadows = [
  'none',
  '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
  '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)'
]

export const Card = styled.div`
  border-radius: 2px;
  background: white;
  width: 320px;
  height: 340px;
  transition: box-shadow 300ms;
  box-shadow: ${props => props.hoverable
    ? shadows[0]
    : props.raised ? shadows[2] : shadows[1]
  };

  &:hover {
    box-shadow: ${props => props.hoverable
      ? shadows[2]
      : props.raised ? shadows[2] : shadows[1]
    };
  }
`
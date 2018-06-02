import styled, { lightTheme, rgba } from '@slup/theming'

/**
 * If the spacebar is pressed
 * call the function
 * 
 * @param props The props from the class
 * @param event The keyboard event
 */
export const handleKeyDown = (props, { keyCode }: KeyboardEvent) => {
  if (keyCode === 32 && props.onChange && !props.disabled) {
    props.onChange()
  }
}

const Base = styled.div`
  /**
  * Disables blue background on tap in mobile devices.
  * See:
  * - https://stackoverflow.com/a/29961714
  * - #32
  */
  -webkit-tap-highlight-color: transparent;
  display: inline-flex;
  align-items: center;
`

const Label = styled.label`
  user-select: none;
  color: ${props => props.disabled
    ? rgba(props.theme.text || lightTheme.text, .3)
    : props.theme.text || lightTheme.text
  };
  margin-right: ${props => props.right ? 0 : 32}px;
  margin-left: ${props => props.right ? 32 : 0}px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`

export const Container = (props) =>
  <div>
    <Base>
      {props.leftLabel
        ? <Label {...props} onClick={props.disabled 
              ? null 
              : props.onChange
            }>
            {props.leftLabel}
          </Label>

        : null
      }

      {props.children}

      {props.rightLabel
        ? <Label {...props} right onClick={props.disabled 
              ? null
              : props.onChange
            }>
            {props.rightLabel}
          </Label>

        : null
      }
    </Base>
  </div>

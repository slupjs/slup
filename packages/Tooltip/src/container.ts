import styled, { GREY } from '@slup/theming'
import { styledMap } from '@slup/common'

export const Container = styled.div`
  position: relative;
  outline: none;
`

const translate: Function = styledMap('location', {
  'top-start':    '0, calc(-100% - 14px)',
  'top-end':      '-100%, calc(-100% - 14px)',
  top:            '-50%, calc(-100% - 14px)',
  'left-start':   'calc(-100% - 14px), 0',
  'left-end':     'calc(-100% - 14px), -100%',
  left:           'calc(-100% - 14px), -50%',
  'right-start':  '14px, 0',
  'right-end':    '14px, -100%',
  right:          '14px, -50%',
  'bottom-start': '0, 14px',
  'bottom-end':   '-100%, 14px',
  bottom:         '-50%, 14px'
})

const translateMobile: Function = styledMap('location', {
  'top-start':    '0, calc(-100% - 24px)',
  'top-end':      '-100%, calc(-100% - 24px)',
  top:            '-50%, calc(-100% - 24px)',
  'left-start':   'calc(-100% - 24px), 0',
  'left-end':     'calc(-100% - 24px), -100%',
  left:           'calc(-100% - 24px), -50%',
  'right-start':  '24px, 0',
  'right-end':    '24px, -100%',
  right:          '24px, -50%',
  'bottom-start': '0, 24px',
  'bottom-end':   '-100%, 24px',
  bottom:         '-50%, 24px'
})

const top: Function = styledMap('location', {
  'top-start': '0',
  'top-end': '0',
  top: '0',
  'left-start': '0',
  'left-end': '100%',
  left: '50%',
  'right-start': '0',
  'right-end': '100%',
  right: '50%',
  'bottom-start': 'auto',
  'bottom-end': 'auto',
  bottom: 'auto'
})

const left: Function = styledMap('location', {
  'top-start': '0',
  'top-end': '100%',
  top: '50%',
  'left-start': '0',
  'left-end': '0',
  left: '0',
  'right-start': '100%',
  'right-end': '100%',
  right: '100%',
  'bottom-start': '0',
  'bottom-end': '100%',
  bottom: '50%'
})

const transformOrigin: Function = styledMap('location', {
  'top-start': 'center bottom',
  'top-end': 'center bottom',
  top: 'center bottom',
  'left-start': 'right center',
  'left-end': 'right center',
  left: 'right center',
  'right-start': 'left center',
  'right-end': 'left center',
  right: 'left center',
  'bottom-start': 'center top',
  'bottom-end': 'center top',
  bottom: 'center top'
})

export const Tip = styled.div`
  border-radius: 2px;
  white-space: nowrap;
  z-index: 997;
  pointer-events: none;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 22px;
  color: white;
  background: ${GREY[700]};
  padding: 0 8px;
  position: absolute;
  top: ${top};
  left: ${left};
  transition: opacity 150ms, transform 150ms
    ${props => props.focused
    ? 'cubic-bezier(0.0, 0.0, 0.2, 1)' // Entrance with deceleration curve
    : 'cubic-bezier(0.4, 0.0, 1, 1)'   // Exit with the acceleration curve
  };
  transition-delay: ${props => props.delay};
  opacity: ${props => props.focused ? 0.9 : 0};
  transform: 
    translate(${translate})
    scale(${props => props.focused ? 1 : 0});
  transform-origin: ${transformOrigin};

  @media all and (max-width: 600px) {
    font-size: 14px;
    height: 32px;
    padding: 0 16px;
    transform: ${translateMobile}
  }
`
import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'
import { bind }  from 'decko'

export const Checkbox = styled.div`
  width: ${props => props.size || 18}px;
  height: ${props => props.size || 18}px;
  border-radius: 2px;
  box-sizing: border-box;
  border: 2px solid ${props => props.checked ? 'teal' : '#9e9e9e'};
  cursor: pointer;
  background-color: ${props => props.checked ? 'teal' : 'none'};
  transition: background-color 300ms cubic-bezier(0.4, 0.0, 0.2, 1),
    border-color 200ms linear;
  outline: none;
  position: relative;

  &::before,
  &::after {
		content: '';
		background: #fff;
		height: ${props => props.size || 18}px;
		width: ${props => props.size || 18}px;
		position: absolute;
    top: -2px;
		left: -2px;
    opacity: ${props => props.checked ? '1' : '0'};
		transform-origin: 0 0;
		transition: transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1),
      opacity 500ms cubic-bezier(0.4, 0.0, 0.2, 1);
	}

  &::after {
    transform: translate(${props => (props.size / 3.6) || 5}px, ${props => (props.size / 2.3) || 7.8}px)
      rotate(44.91deg)
      ${props => props.checked ? 'scale(.32,.1)' : 'scale(.1, .1)'}
	}

  &::before {
    transform: translate(${props => (props.size / 2.66) || 6.7}px, ${props => (props.size / 1.5) || 12}px)
      rotate(-45deg)
      ${props => props.checked ? 'scale(.5612,.1)' : 'scale(.1, .1)'}
  }
`

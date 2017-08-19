import Inferno   from 'inferno'
import Component from 'inferno-component'
import styled    from 'styled-components'

export const RadioButton = styled.input.attrs({
  type: 'radio'
})`
  appearance: none;
  box-sizing: border-box;
  margin: 0;
  outline: none;
  position: relative;
  border: none;
  cursor: pointer;
  width: 15px;
  height: 15px;
  &::after {
    border-radius: 50%;
    content: close-quote;
    background-color: transparent;
    border: 2px solid red;
    width: inherit;
    height: inherit;
    position: absolute;
    transform: translate(-3.5px, -3.5px);
  }
  &::before {
    content: "";
    position: absolute;
    background-color: red;
    width: 10px;
    height: 10px;
    margin-top: 0.5px;
    margin-left: 0.5px;
    display: block;
    border-radius: 50%;
    transition: transform 150ms cubic-bezier(0.4, 0.0, 0.2, 1);
    transform: scale(0);
  }
  &:checked::before {
    transform: scale(1);
  }
`

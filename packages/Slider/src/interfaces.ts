export interface IBaseProps {
  max: number
  value: number
  primary: boolean
  focused: boolean
  disabled: boolean
  discrete: boolean
  dots: Function
  onChange: (newValue: number) => any
  onFocus: () => any
  onBlur: () => any
}

export interface IBaseState {
  mouseDown: boolean
}

export interface IBaseProps {
  max: number
  value: number
  primary: boolean
  onChange: (newValue: number) => any
}

export interface IBaseState {
  mouseDown: boolean
}

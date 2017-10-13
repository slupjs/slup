/** 
 * Array of three items that describes
 * the three shades of this color(<T>)
 */
export interface ColorShade<Color> {
  0: Color
  1: Color
  2: Color
}

/**
 * Theme interface for the general structure
 */
export interface _ITheme {
  text: string | ColorShade<string>

  background: string | ColorShade<string>

  primary: string | ColorShade<string>

  secondary: string | ColorShade<string>
}

export type ITheme = ((newTheme: _ITheme) => _ITheme) | _ITheme

/** 
 * Inferfaces that described the Provider's props 
 */
export interface IProps {
  theme: ITheme
  children: any[]
}

export interface ISheet {
  
}
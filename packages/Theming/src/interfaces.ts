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
 * Set of colors representing a Material Design
 * color palette for a given shade
 * 
 * @see https://material.io/guidelines/style/color.html
 */
export type ColorSet = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  A100?: string
  A200?: string
  A400?: string
  A700?: string
}

/**
 * Theme interface for the general structure
 */
export interface _ITheme {
  /**
   * Color for the text strings on your page
   */
  text: string | ColorShade<string>

  /**
   * Background for common components
   */
  background: string | ColorShade<string>

  /**
   * Background color used in primary components
   * ex. buttons, slider, etc
   */
  primary: string | ColorShade<string>

  /**
   * Background color used in secondary components when prop is given
   * ex. buttons, slider, etc
   */
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

/**
 * Shett class helper to create css styleshetts
 */
export interface ISheet {
  
}
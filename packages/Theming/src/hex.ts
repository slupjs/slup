export const expandHex = (hex: string): string =>
  hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]

export const toHex = (h: any) => {
  const hex = h.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}

export const rgbToHex = (r: any, g: any, b: any) => {
  return '#' + toHex(r) + toHex(g) + toHex(b)
} 

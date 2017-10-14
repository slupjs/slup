export const expandHex = (hex: string): string =>
  hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]

export const rgbToHex = (r: any, g: any, b: any) => {
  const rgb = b | (g << 8) | (r << 16)
  return '#' + (0x1000000 + rgb).toString(16).slice(1)
}

/**
 * Thanks to raycmorgan for this hashing script:
 * https://gist.github.com/raycmorgan/588423
 */

export const hash = (str: string) => 
  hashStr(str, str.length).toString(36)

export const hashStr = (str: string, seed: number) => {
  let m = 0x5bd1e995
  let r = 24
  let h = seed ^ str.length
  let length = str.length
  let currentIndex = 0

  while (length >= 4) {
    let k = UInt32(str, currentIndex)

    k = Umul32(k, m)
    k ^= k >>> r
    k = Umul32(k, m)

    h = Umul32(h, m)
    h ^= k

    currentIndex += 4
    length -= 4
  }

  switch (length) {
    case 3:
      h ^= UInt16(str, currentIndex)
      h ^= str.charCodeAt(currentIndex + 2) << 16
      h = Umul32(h, m)
      break

    case 2:
      h ^= UInt16(str, currentIndex)
      h = Umul32(h, m)
      break

    case 1:
      h ^= str.charCodeAt(currentIndex)
      h = Umul32(h, m)
      break
  }

  h ^= h >>> 13
  h = Umul32(h, m)
  h ^= h >>> 15

  return h >>> 0
}

export const UInt32 = (str, pos) => (
  str.charCodeAt(pos++) +
  (str.charCodeAt(pos++) << 8) +
  (str.charCodeAt(pos++) << 16) +
  (str.charCodeAt(pos) << 24)
)


export const UInt16 = (str, pos) => 
  str.charCodeAt(pos++) + (str.charCodeAt(pos++) << 8)

export const Umul32 = (n, m) => {
  n = n | 0
  m = m | 0
  let nlo = n & 0xffff
  let nhi = n >>> 16
  let res = (nlo * m + (((nhi * m) & 0xffff) << 16)) | 0
  return res
}

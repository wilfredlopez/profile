import { Variant, ColorTypes } from './types'

function produce(
  VARIANTS: readonly Variant[],
  COLORS: readonly ColorTypes[]
): Array<[Variant, ColorTypes]> {
  let idx = 0
  const ilen = VARIANTS.length
  let j: number
  const jlen = COLORS.length
  var result: Array<[Variant, ColorTypes]> = []
  while (idx < ilen) {
    j = 0
    while (j < jlen) {
      result[result.length] = [VARIANTS[idx], COLORS[j]]
      j += 1
    }
    idx += 1
  }
  return result
}

export default produce

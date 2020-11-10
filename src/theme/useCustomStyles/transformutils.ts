import { Variant, ColorTypes, MatchedVariants } from './types'
// const properCase = <T extends string>(str: T): Capitalize<T> => {
//     return `${str[0].toUpperCase()}${str.slice(1, str.length)}` as Capitalize<T>
//   }

const properCase = <T extends string>(str: T) => {
  return `${str[0].toUpperCase()}${str.slice(1, str.length)}`
}

// export const transformName = <V extends string, C extends string>(variant: V, color: C):`${V}${Capitalize<C>}` =>
//     `${variant}${properCase(color)}` as `${V}${Capitalize<C>}` // as MatchedVariants
export const transformName = <V extends string, C extends string>(
  variant: V,
  color: C
) => `${variant}${properCase(color)}` as MatchedVariants

export function produceTuple(
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

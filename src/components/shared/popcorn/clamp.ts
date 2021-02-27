export type RangeFunction = (min: number, max: number, v: number) => number

export const curryRange = (func: RangeFunction) => (
  min: number,
  max: number,
  v?: number
) => (v !== undefined ? func(min, max, v) : (cv: number) => func(min, max, cv))


const _clamp = (min: number, max: number, v: number) =>
  Math.min(Math.max(v, min), max)

const clamp = curryRange(_clamp)
export default clamp
import { ButtonProps } from '@material-ui/core/Button'

import { COLORS, VARIANTS } from './constants'

type IndexOfVarians = 0 | 1 | 2
type IndexOfColors = 0 | 1 | 2 | 3 | 4 | 5 | 6
type RawVariant = typeof VARIANTS[IndexOfVarians]
type ColorTypesRaw = typeof COLORS[IndexOfColors]

type EnsureVarians<
  V extends ButtonProps['variant'] = ButtonProps['variant']
> = V extends undefined ? never : V

export type Variant = EnsureVarians<RawVariant>
export type ColorTypes = ColorTypesRaw

// type WithDash<V extends string, R extends string> = `${V}-${R}`
// export type MatchedVariants = WithDash<Variant, ColorTypes>
export type MatchedVariants =
  | 'text-error'
  | 'text-warning'
  | 'text-info'
  | 'text-success'
  | 'text-primary'
  | 'text-secondary'
  | 'text-inherit'
  | 'outlined-error'
  | 'outlined-warning'
  | 'outlined-info'
  | 'outlined-success'
  | 'outlined-primary'
  | 'outlined-secondary'
  | 'outlined-inherit'
  | 'contained-error'
  | 'contained-warning'
  | 'contained-info'
  | 'contained-success'
  | 'contained-primary'
  | 'contained-secondary'
  | 'contained-inherit'

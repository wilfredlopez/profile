// import { Theme } from '@material-ui/core/styles'
// import { PaletteColor } from '@material-ui/core/styles/createPalette'
import { ButtonProps } from '@material-ui/core/Button'

import { COLORS, VARIANTS } from './constants'

type IndexOfVarians = 0 | 1 | 2
type IndexOfColors = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
type RawVariant = typeof VARIANTS[IndexOfVarians]
type ColorTypesRaw = typeof COLORS[IndexOfColors]

// type EnsureValidThemeColor<
//   K extends keyof Theme['palette'],
//   D extends Theme['palette'][K] = Theme['palette'][K]
// > = D extends PaletteColor ? K : never

type EnsureVarians<
  V extends ButtonProps['variant'] = ButtonProps['variant']
> = V extends undefined ? never : V

export type Variant = EnsureVarians<RawVariant>
export type ColorTypes = ColorTypesRaw
// type Cases<T extends string> = `${Uppercase<T>} ${Lowercase<T>} ${Capitalize<T>} ${Uncapitalize<T>}`;

// type ColorUpper<T extends string> = `${Uppercase<T>}`
// type WithDash<V extends string, R extends string> = `${V}-${R}`
// type WithCapital<V extends string, R extends string> = `${V}${Capitalize<R>}`
// export type MatchedVariants = WithCapital<Variant, ColorTypes>
export type MatchedVariants =
  | 'textError'
  | 'textWarning'
  | 'textInfo'
  | 'textSuccess'
  | 'textPrimary'
  | 'textSecondary'
  | 'textInherit'
  | 'textDefault'
  | 'outlinedError'
  | 'outlinedWarning'
  | 'outlinedInfo'
  | 'outlinedSuccess'
  | 'outlinedPrimary'
  | 'outlinedSecondary'
  | 'outlinedInherit'
  | 'outlinedDefault'
  | 'containedError'
  | 'containedWarning'
  | 'containedInfo'
  | 'containedSuccess'
  | 'containedPrimary'
  | 'containedSecondary'
  | 'containedInherit'
  | 'containedDefault'

import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createColorStyles from './createColorStyles'
import { MatchedVariants, Variant } from './types'

export * from './types'

export function isContainedMatch(variant: MatchedVariants) {
  return variant && variant.includes('contained')
}

export function isOutlinedMatch(variant: MatchedVariants) {
  return variant && variant.includes('outlined')
}

export function isTextMatch(variant: MatchedVariants) {
  return variant && variant.includes('text')
}

export function matchToVariant(variant?: MatchedVariants): Variant | undefined {
  if (!variant) {
    return undefined
  }
  if (isOutlinedMatch(variant)) {
    return 'outlined'
  }
  if (isContainedMatch(variant)) {
    return 'contained'
  }
  if (isTextMatch(variant)) {
    return 'text'
  }
  return undefined
}

export const useCustomStyles = makeStyles<Theme, MatchedVariants>(theme =>
  createColorStyles(theme)
)

export default useCustomStyles

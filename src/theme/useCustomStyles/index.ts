import { makeStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import createColorStyles from './createColorStyles'
import { MatchedVariants, Variant } from './types'

export * from './types'

export function isContained(variant: MatchedVariants) {
  return variant && variant.includes('contained')
}

export function isOutlined(variant: MatchedVariants) {
  return variant && variant.includes('outlined')
}

export function isText(variant: MatchedVariants) {
  return variant && variant.includes('text')
}

export function matchToVariant(variant?: MatchedVariants): Variant | undefined {
  if (!variant) {
    return undefined
  }
  if (isOutlined(variant)) {
    return 'outlined'
  }
  if (isContained(variant)) {
    return 'contained'
  }
  if (isText(variant)) {
    return 'text'
  }
  return undefined
}

export const useCustomStyles = makeStyles<Theme, MatchedVariants>(theme =>
  createColorStyles(theme)
)

export default useCustomStyles

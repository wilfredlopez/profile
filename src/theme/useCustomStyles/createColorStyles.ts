import { StyleRules } from '@material-ui/core/styles/withStyles'
import { Theme } from '@material-ui/core/styles'
import { COLORS, VARIANTS } from './constants'
import { ColorTypes, Variant, MatchedVariants } from './types'
import transformTemplate from './transformTemplate'
import produce from './produce'

const name = (variant: Variant, color: ColorTypes) =>
  `${variant}-${color}` as MatchedVariants

const createColorStyles = (theme: Theme) => {
  const prod = produce(VARIANTS, COLORS)

  const data: StyleRules<MatchedVariants> = {} as StyleRules<MatchedVariants>

  for (let [variant, color] of prod) {
    data[name(variant, color)] = transformTemplate(variant, color, theme)
  }

  return data
}

export default createColorStyles

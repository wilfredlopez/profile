import { StyleRules } from '@material-ui/core/styles/withStyles'
import { Theme } from '@material-ui/core/styles'
import { COLORS, VARIANTS } from './constants'
import { MatchedVariants } from './types'
import transformTemplate from './transformTemplate'
import { transformName, produceTuple } from './transformutils'

const createColorStyles = (theme: Theme) => {
  const prod = produceTuple(VARIANTS, COLORS)

  const data: StyleRules<MatchedVariants> = {} as StyleRules<MatchedVariants>

  for (let [variant, color] of prod) {
    data[transformName(variant, color)] = transformTemplate(
      variant,
      color,
      theme
    )
  }

  return data
}

export default createColorStyles

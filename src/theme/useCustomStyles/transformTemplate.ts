import {
  CreateCSSProperties,
  CSSProperties,
  StyleRules,
} from '@material-ui/core/styles/withStyles'
import { fade, Theme, darken } from '@material-ui/core'
import { Variant, ColorTypes } from './types'
export const isOutlined = (v: Variant) => v === 'outlined'
export const isContained = (v: Variant) => v === 'contained'
export const isInherit = (c: ColorTypes): c is 'inherit' => c === 'inherit'
export const isDefault = (c: ColorTypes): c is 'default' => c === 'default'

function transformTemplate(
  variant: Variant,
  color: ColorTypes,
  theme: Theme
): CSSProperties | CreateCSSProperties<{}> {
  const props: StyleRules<Variant>['contained'] = {}
  let maincolor: string = darken(theme.palette.background.paper, 0.1)
  // let maincolor: string = fade(theme.palette.background.paper, 0.87)
  let contrastText = theme.palette.getContrastText(maincolor)

  let darkColor = darken(maincolor, theme.palette.action.hoverOpacity)

  if (!isInherit(color) && !isDefault(color)) {
    maincolor = theme.palette[color].main
    contrastText = theme.palette[color].contrastText
    darkColor = theme.palette[color].dark
  }
  props.color = maincolor

  const hoverProps: CSSProperties = {}
  hoverProps.backgroundColor = fade(
    maincolor,
    theme.palette.action.hoverOpacity
  )

  if (isContained(variant)) {
    props.color = contrastText

    props.backgroundColor = maincolor
  }

  if (isOutlined(variant)) {
    props.border = '1px solid'
    props.borderColor = darken(maincolor, 0.2)
    hoverProps.borderColor = fade(maincolor, 0.3)
    // hoverProps.border = '1px solid'

    props['@media (hover: none)'] = {
      backgroundColor: 'transparent',
    }
    hoverProps.backgroundColor = fade(
      maincolor,
      theme.palette.action.hoverOpacity
    )
  }

  if (isContained(variant)) {
    hoverProps.backgroundColor = darkColor
  }

  if (isDefault(color)) {
    props.color = undefined
    props.backgroundColor = undefined
    hoverProps.borderColor = undefined
    hoverProps.backgroundColor = undefined
    props['@media (hover: none)'] = undefined
  }
  props['&:hover'] = hoverProps
  return props
}

export default transformTemplate

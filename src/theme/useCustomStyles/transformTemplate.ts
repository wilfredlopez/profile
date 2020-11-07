import {
  CreateCSSProperties,
  CSSProperties,
  StyleRules,
} from '@material-ui/core/styles/withStyles'
import { fade, Theme, darken } from '@material-ui/core'
import { Variant, ColorTypes } from './types'

const isOutlined = (v: Variant) => v === 'outlined'
const isContained = (v: Variant) => v === 'contained'
const isInherit = (c: ColorTypes): c is 'inherit' => c === 'inherit'

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

  if (!isInherit(color)) {
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
    props.borderColor = fade(maincolor, 0.5)
    hoverProps.backgroundColor = fade(
      maincolor,
      theme.palette.action.hoverOpacity
    )
  }

  if (isContained(variant)) {
    hoverProps.backgroundColor = darkColor
  }
  if (isOutlined(variant)) {
    hoverProps.border = '1px solid'
    hoverProps.borderColor = maincolor

    props['@media (hover: none)'] = {
      backgroundColor: 'transparent',
    }
  }
  props['&:hover'] = hoverProps
  return props
}

export default transformTemplate

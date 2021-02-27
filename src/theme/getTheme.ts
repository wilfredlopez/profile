import { common, green, red } from '@material-ui/core/colors'
// import primary from '@material-ui/core/colors/teal'
import secondary from '@material-ui/core/colors/blue'
import { createMuiTheme } from '@material-ui/core/styles'
import { DefaultTheme } from 'styled-components'

export let SECONDARY_COLOR: string = secondary['500'] // common['white'] //
export const SECONDARY_COLOR_CONTRAST = common['black']

export let PRIMARY_COLOR: string = '#914345' // '#f25022' //'#af6800' //'#b73e35' // primary[700] // '#032e4e'
export const PRIMARY_COLOR_CONTRAST = common['white']

// export const TOOLBAR_MIN_HEIGHT = 50
export const TOOLBAR_MIN_HEIGHT = 60
// export const DARK_COLOR = '#040c14'
export let DARK_COLOR = '#ffffff'
export let LIGHT_COLOR: string = common['black']
export const TERTIARY_COLOR = '#ff6c42' //'#ff9800' // '#76b9ff' // '#8c2f2f' // '#20bfad'
export const TERTIARY_COLOR_CONTRAST = common['white']
export const DARK_BACKGROUND_COLOR = '#424242' //'#303030'
const BORDER_RADIOUS = 4

export const LINK_COLOR = '#7bfdff'
export const LINK_COLOR_HOVER = '#aefeff'
//#914345

//Cool Green #38b584 or #76b9ff
export default function getTheme(prefersDarkMode = false) {
  // const prefersDarkMode = true




  PRIMARY_COLOR = prefersDarkMode ? '#040c14' : PRIMARY_COLOR
  SECONDARY_COLOR = prefersDarkMode ? 'rgb(145 45 17)' : SECONDARY_COLOR
  LIGHT_COLOR = prefersDarkMode ? common['white'] : common['black']
  DARK_COLOR = prefersDarkMode ? '#040c14' : common['white']
  const theme = createMuiTheme({
    status: {
      ...red,
      danger: red[500],
    },
    typography: {
      fontFamily: "'Poppins','Roboto', sans-serif",
    },
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: PRIMARY_COLOR,
        contrastText: PRIMARY_COLOR_CONTRAST,
      },
      secondary: {
        main: SECONDARY_COLOR,

        contrastText: SECONDARY_COLOR_CONTRAST,
      },
      tertiary: {
        main: TERTIARY_COLOR,
        dark: '#914345',
        light: '#f9a09e',
        contrastText: TERTIARY_COLOR_CONTRAST,
      },
      success: {
        ...green,
        main: '#316503',
      },
      background: {
        // default: "#303030",
        default: LIGHT_COLOR,
      },
    },
    shape: {
      borderRadius: BORDER_RADIOUS,
    },
    spacing: 16,
    props: {
      MuiPaper: {
        elevation: 3,
        square: true,
      },
      MuiTextField: {
        InputLabelProps: {
          shrink: true,
        },
      },
      MuiButton: {
        disableRipple: true,
      },
      MuiCheckbox: {
        disableRipple: true,
      },
    },
    overrides: {
      MuiPaper: {
        root: {
          color: prefersDarkMode ? '#d2d2d2' : LIGHT_COLOR,
          backgroundColor: prefersDarkMode ? DARK_BACKGROUND_COLOR : DARK_COLOR,
        },
      },
      MuiMobileStepper: {
        root: {
          backgroundColor: 'transparent',
        },
        positionBottom: {
          position: 'absolute',
        },
      },
      MuiAppBar: {
        positionFixed: {
          zIndex: 1100,
        },
      },
      MuiToolbar: {
        gutters: {
          minHeight: TOOLBAR_MIN_HEIGHT,
          '@media (min-width: 600px)': {
            minHeight: TOOLBAR_MIN_HEIGHT,
          },
        },
        regular: {
          minHeight: TOOLBAR_MIN_HEIGHT,
          '@media (min-width: 600px)': {
            minHeight: TOOLBAR_MIN_HEIGHT,
          },
        },
        root: {
          minHeight: TOOLBAR_MIN_HEIGHT,
          '@media (min-width: 600px)': {
            minHeight: TOOLBAR_MIN_HEIGHT,
          },
        },
      },
      MuiFilledInput: {
        root: {
          backgroundColor: 'transparent',
        },
      },
      MuiInputLabel: {
        root: {
          backgroundColor: 'transparent',
        },
      },
      MuiButton: {
        root: {
          textTransform: 'none',
        },
      },
    },
  })

  theme.palette.tertiary = theme.palette.augmentColor({
    main: '#c47070',
    dark: '#914345',
    light: '#f9a09e',
    contrastText: PRIMARY_COLOR_CONTRAST,
  })
  return theme
}

export const styledComponentsTheme: DefaultTheme = {
  borderRadius: '5px',
  colors: {
    primary: PRIMARY_COLOR,
    primaryContrast: PRIMARY_COLOR_CONTRAST,
    secondary: SECONDARY_COLOR,
    secondaryContrast: SECONDARY_COLOR_CONTRAST,
    tertiary: TERTIARY_COLOR,
    tertiaryContrast: TERTIARY_COLOR_CONTRAST,
    dark: DARK_COLOR,
    light: LIGHT_COLOR,
  },
}

export type StyledComponentColorKey = keyof DefaultTheme['colors']

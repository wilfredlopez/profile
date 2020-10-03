import { common, green, red } from '@material-ui/core/colors'
// import primary from '@material-ui/core/colors/blueGrey'
import secondary from '@material-ui/core/colors/teal'
import { createMuiTheme } from '@material-ui/core/styles'
import { DefaultTheme } from 'styled-components'
export let SECONDARY_COLOR: string = secondary[700]
export const SECONDARY_COLOR_CONTRAST = common['white']
// export let PRIMARY_COLOR: string = primary['900']
export let PRIMARY_COLOR: string = '#032e4e'
// export let PRIMARY_COLOR: string = '#00463e' || '#032e4e'

// export const TOOLBAR_MIN_HEIGHT = 15
export const TOOLBAR_MIN_HEIGHT = 50
export const PRIMARY_COLOR_CONTRAST = common['white']
export const DARK_COLOR = '#040c14'
export const LIGHT_COLOR = common['white']
export const TERTIARY_COLOR = '#20bfad'
export const TERTIARY_COLOR_CONTRAST = common['white']
export const DARK_BACKGROUND_COLOR = '#303030'
const BORDER_RADIOUS = 4

//Cool Green /#38b584
export default function getTheme(prefersDarkMode = false) {
  // PRIMARY_COLOR = prefersDarkMode ? "#319ddf" : primary[900];
  PRIMARY_COLOR = prefersDarkMode ? '#040c14' : PRIMARY_COLOR
  SECONDARY_COLOR = prefersDarkMode ? 'rgb(1 51 45)' : SECONDARY_COLOR
  const theme = createMuiTheme({
    status: {
      danger: red[500],
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
        default: prefersDarkMode ? '#272525' : '#fff',
      },
    },
    shape: {
      borderRadius: BORDER_RADIOUS,
    },
    spacing: 16,
    props: {
      MuiPaper: {
        elevation: 3,
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
          color: prefersDarkMode ? '#d2d2d2' : common['white'],
          backgroundColor: prefersDarkMode ? '#2c2c2c' : DARK_BACKGROUND_COLOR,
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

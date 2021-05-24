import { swiss, deep } from '@theme-ui/presets'

const theme = {
  ...swiss,
  initialColorModeName: 'light',
  colors: {
    ...swiss.colors,
    modes: {
      dark: {
        ...deep.colors
      }
    }
  },
  containers: {
    page: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      m: 0,
      mx: 'auto',
      px: '16em'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      my: '2em',
      px: '4em'
    },
  },
}
console.log(theme)
export default theme
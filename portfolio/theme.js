import { swiss } from '@theme-ui/presets'

const theme = {
  ...swiss,
  colors: {
    ...swiss.colors,
  },
  containers: {
    page: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      m: 0,
      mx: 'auto',
      px: '20em'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      my: '2em',
      px: '4em'
    },
  },
  styles: {
    ...swiss.styles
  }
}
export default theme
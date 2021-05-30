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
  breakpoints: [
    '40em', '56em', '64em'
  ],
  
  containers: {
    page: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      m: 0,
      mx: 'auto',
      px: ['16em', '8em', '4em']
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      my: '2em',
    },
    image: {
      height: '250px',
      width: 'auto',
      borderRadius: '4px'
    },
    skills: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: '8em 16em',
      '@media screen and (max-width: 1000px)': {
        gap: '4em 8em'
      }
    }
  },
}
console.log(theme)
export default theme
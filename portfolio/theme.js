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
      px: '20em',
      '@media screen and (max-width: 1000px)': {
        px: '4em'
      }
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
      borderRadius: '4px',
      '@media screen and (max-width: 1000px)': {
        objectFit: 'contain'
      }
    },
    skills: {
      width: '50%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: '2em',
      '@media screen and (max-width: 1000px)': {
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
      }
    },
    skill : {
      bg: 'highlight',
      borderRadius: '4px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    project: {
      mt: '2em', 
      display: 'flex', 
      flexDirection: 'row', 
      bg: 'highlight', 
      borderRadius: '4px', 
      p: '1em',
      ':hover': {
        cursor: 'pointer',
      }
    }
  },
}
export default theme
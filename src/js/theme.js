const fontFamily = [
  "'Comfortaa'",
  '-apple-system',
  'BlinkMacSystemFont',
  'Helvetica',
  'Arial',
  'sans-serif',
].join(',');
const primary = {
  light: '#5b4390', // deep pink
  main: '#321575',
  dark: '#230e51',
  contrastText: '#FFFFFF',
};
const secondary = {
  light: '#cc0465',
  main: '#c72348',
  dark: '#8b1832',
  contrastText: '#FFFFFF',
};

const theme = {
  palette: {
    primary,
    secondary,
    grey: {
      300: '#eef0f4',
    },
    text: {
      primary: primary.main,
    },
  },
  transitions: {
    duration: {
      standard: '300ms',
    },
  },
  typography: {
    useNextVariants: true,
    fontSize: 16,
    mdFontSize: 14,
    fontFamily,
    h6: {
      fontFamily,
      fontWeight: 700,
      color: primary.main,
      fontSize: '2rem',
    },
    h5: {
      fontFamily,
      fontWeight: 700,
    },
  },
  overrides: {
    MuiButton: {
      text: {
        padding: '12px 30px',
      },
      root: {
        background: '#FFF',
        padding: '12px 30px',
        'border-radius': 35,
        border: `2px solid ${primary.main}`,
        minWidth: 130,
        fontFamily: 'Poppins, sans-serif',
        textTransform: 'lowercase',
      },
      label: {
        fontSize: 16,
      },
    },
    MuiFormControl: {
      root: {
        marginBottom: '0.8rem',
      },
    },
    MuiFormLabel: {
      root: {
        fontFamily: 'Poppins, sans-serif',
      },
    },
    MuiInput: {
      root: {
        fontFamily: 'Poppins, sans-serif',
      },
    },
  },
  mixins: {
    container: {
      margin: '0 auto',
      maxWidth: 1400,
    },
    centerAlign: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    gradient: (left, right) => `linear-gradient(to right, ${left}, ${right})`,
  },
};

export default theme;

import { alpha, outlinedInputClasses } from '@mui/material';
import { grey } from '@mui/material/colors';
import { createTheme, ThemeOptions } from '@mui/material/styles';

export const brand = {
  50: 'hsl(210, 100%, 95%)',
  100: 'hsl(210, 100%, 92%)',
  200: 'hsl(210, 100%, 80%)',
  300: 'hsl(210, 100%, 65%)',
  400: 'hsl(210, 98%, 48%)',
  500: 'hsl(210, 98%, 42%)',
  600: 'hsl(210, 98%, 55%)',
  700: 'hsl(210, 100%, 35%)',
  800: 'hsl(210, 100%, 16%)',
  900: 'hsl(210, 100%, 21%)',
};


export const gray = {
  50: 'hsl(220, 35%, 97%)',
  70: 'hsl(220, 35%, 90%)',
  100: 'hsl(220, 30%, 96%)',
  200: 'hsl(220, 20%, 93%)',
  300: 'hsl(220, 20%, 85%)',
  400: 'hsl(220, 20%, 65%)',
  500: 'hsl(220, 20%, 42%)',
  600: 'hsl(220, 20%, 35%)',
  700: 'hsl(220, 20%, 25%)',
  800: 'hsl(220, 30%, 6%)',
  900: 'hsl(220, 35%, 3%)',
};

export const green = {
  50: 'hsl(120, 80%, 98%)',
  100: 'hsl(120, 75%, 94%)',
  200: 'hsl(120, 75%, 87%)',
  300: 'hsl(120, 61%, 77%)',
  400: 'hsl(120, 44%, 53%)',
  500: 'hsl(120, 59%, 30%)',
  600: 'hsl(120, 70%, 25%)',
  700: 'hsl(120, 75%, 16%)',
  800: 'hsl(120, 84%, 10%)',
  900: 'hsl(120, 87%, 6%)',
};

export const orange = {
  50: 'hsl(45, 100%, 97%)',
  100: 'hsl(45, 92%, 90%)',
  200: 'hsl(45, 94%, 80%)',
  300: 'hsl(45, 90%, 65%)',
  400: 'hsl(45, 90%, 40%)',
  500: 'hsl(45, 90%, 35%)',
  600: 'hsl(45, 91%, 25%)',
  700: 'hsl(45, 94%, 20%)',
  800: 'hsl(45, 95%, 16%)',
  900: 'hsl(45, 93%, 12%)',
};

export const red = {
  50: 'hsl(0, 100%, 97%)',
  100: 'hsl(0, 92%, 90%)',
  200: 'hsl(0, 94%, 80%)',
  300: 'hsl(0, 90%, 65%)',
  400: 'hsl(0, 90%, 40%)',
  500: 'hsl(0, 90%, 30%)',
  600: 'hsl(0, 91%, 25%)',
  700: 'hsl(0, 94%, 18%)',
  800: 'hsl(0, 95%, 12%)',
  900: 'hsl(0, 93%, 6%)',
};

const designSystem: ThemeOptions = {
  spacing: 8,
  typography: {
    h1: {
      fontSize: '48px',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: -0.5,
    },
    h2: {
      fontSize: '36px',
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '30px', 
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '24px', 
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: '20px', 
      fontWeight: 600,
    },
    h6: {
      fontSize: '16px', // Set a default value here
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '18px', 
      color: gray[500],

    },
    subtitle2: {
      fontSize: '12px', 
      color: gray[500],
    },
    body1: {
      fontSize: '14px', // Updated
    },
    body2: {
      fontSize: '12px', // Updated
      fontWeight: 400,
    },
    caption: {
      fontSize: '12px', // Updated
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 4,
  },
  palette: {
    primary: {
      light: brand[300],
      main: brand[400],
      dark: brand[700],
      contrastText: brand[50],
    },
    info: {
      light: brand[100],
      main: brand[300],
      dark: brand[600],
      contrastText: gray[50],
    },
    warning: {
      light: orange[300],
      main: orange[400],
      dark: orange[800],
    },
    error: {
      light: red[300],
      main: red[400],
      dark: red[800],
    },
    success: {
      light: green[300],
      main: green[400],
      dark: green[800],
    },
    grey: {
      ...gray,
    },
    divider: 'rgba(0, 0, 0, 0.1)',
    background: {
      default: 'hsl(220, 35%, 97%)',
      paper: 'hsl(0, 0%, 99%)',

    },
    text: {
      primary: gray[800],
      secondary: gray[600],
      disabled: gray[100],
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.12)',
      selectedOpacity: 0.08,

    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  MuiInputBase: {
    styleOverrides: {
      root: {
        border: 'none',
      },
      input: {
        '&::placeholder': {
          opacity: 0.7,
          color: gray[500],
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      input: {
        padding: 6,
      },
      root: ({ theme }) => ({
        padding: '8px 12px',
        color: theme.palette.text.primary,
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.default,
        transition: 'border 120ms ease-in',
        '&:hover': {
          borderColor: gray[400],
        },
        [`&.${outlinedInputClasses.focused}`]: {
          outline: `3px solid ${alpha(brand[500], 0.5)}`,
          borderColor: brand[400],
        },
        variants: [
          {
            props: {
              size: 'small',
            },
            style: {
              height: '2.25rem',
            },
          },
          {
            props: {
              size: 'medium',
            },
            style: {
              height: '2.5rem',
            },
          },
        ],
      }),
      notchedOutline: {
        border: 'none',
      },
    },
  },
  MuiInputAdornment: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.grey[500],
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        typography: theme.typography.caption,
        marginBottom: 8,
      }),
    },
  },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 4, // Customize as per your design system
          padding: '0.1rem 0.5rem',
          marginBottom: '0.5rem',
          '&.active': {
            backgroundColor: grey[100]
          },
          '&:hover': {
            backgroundColor: grey[100], // Active background color
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontWeight: 600, // Customize text weight
          fontSize: '1rem', // Customize font size
        },
      },
    },
   
    
  },

  
};

const theme = createTheme(designSystem);

export default theme;

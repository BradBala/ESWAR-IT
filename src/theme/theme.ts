import { alpha, createTheme } from '@mui/material/styles'
import type { PaletteColor, PaletteColorOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    accent: PaletteColor
  }

  interface PaletteOptions {
    accent?: PaletteColorOptions
  }

  interface TypeBackground {
    surface: string
  }
}

export const softNovaColors = {
  primary: '#FF6B35',
  primaryLight: '#FF8A63',
  primaryDark: '#D84D1E',
  secondary: '#4361EE',
  secondaryLight: '#6F86FF',
  secondaryDark: '#2F47D6',
  accent: '#7209B7',
  accentLight: '#9B3AE0',
  accentDark: '#51077F',
  background: '#0A0A0B',
  surface: '#141416',
  textPrimary: '#F8F9FA',
  textSecondary: '#8B949E',
} as const

const softNovaTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: softNovaColors.primary,
      light: softNovaColors.primaryLight,
      dark: softNovaColors.primaryDark,
      contrastText: softNovaColors.background,
    },
    secondary: {
      main: softNovaColors.secondary,
      light: softNovaColors.secondaryLight,
      dark: softNovaColors.secondaryDark,
      contrastText: softNovaColors.textPrimary,
    },
    accent: {
      main: softNovaColors.accent,
      light: softNovaColors.accentLight,
      dark: softNovaColors.accentDark,
      contrastText: softNovaColors.textPrimary,
    },
    background: {
      default: softNovaColors.background,
      paper: softNovaColors.surface,
      surface: softNovaColors.surface,
    },
    text: {
      primary: softNovaColors.textPrimary,
      secondary: softNovaColors.textSecondary,
      disabled: alpha(softNovaColors.textSecondary, 0.45),
    },
    divider: alpha(softNovaColors.textPrimary, 0.08),
    action: {
      active: softNovaColors.textPrimary,
      hover: alpha(softNovaColors.textPrimary, 0.04),
      hoverOpacity: 0.04,
      selected: alpha(softNovaColors.primary, 0.12),
      selectedOpacity: 0.12,
      focus: alpha(softNovaColors.primary, 0.16),
      focusOpacity: 0.16,
      disabled: alpha(softNovaColors.textSecondary, 0.45),
      disabledBackground: alpha(softNovaColors.textPrimary, 0.08),
      disabledOpacity: 0.45,
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", Inter, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: 'clamp(3.5rem, 7vw, 5.75rem)',
      lineHeight: 1.02,
      fontWeight: 700,
      letterSpacing: '-0.05em',
    },
    h2: {
      fontSize: 'clamp(2.75rem, 5vw, 4.25rem)',
      lineHeight: 1.05,
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    h3: {
      fontSize: 'clamp(2.125rem, 4vw, 3.25rem)',
      lineHeight: 1.08,
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h4: {
      fontSize: 'clamp(1.625rem, 3vw, 2.5rem)',
      lineHeight: 1.12,
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
      lineHeight: 1.18,
      fontWeight: 600,
      letterSpacing: '-0.015em',
    },
    h6: {
      fontSize: '1.125rem',
      lineHeight: 1.25,
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      fontWeight: 400,
      letterSpacing: '0',
    },
    body2: {
      fontSize: '0.9375rem',
      lineHeight: 1.65,
      fontWeight: 400,
      letterSpacing: '0.01em',
    },
    button: {
      fontSize: '0.9375rem',
      lineHeight: 1.2,
      fontWeight: 700,
      letterSpacing: '0.03em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        'html, body, #root': {
          minHeight: '100%',
        },
        html: {
          scrollBehavior: 'smooth',
          colorScheme: 'dark',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        body: {
          margin: 0,
          minWidth: '320px',
          backgroundColor: softNovaColors.background,
          color: softNovaColors.textPrimary,
          fontFamily: '"Space Grotesk", Inter, sans-serif',
          transition:
            'background-color 180ms ease, color 180ms ease, border-color 180ms ease',
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
        button: {
          fontFamily: 'inherit',
        },
        input: {
          fontFamily: 'inherit',
        },
        textarea: {
          fontFamily: 'inherit',
        },
        '::selection': {
          backgroundColor: alpha(softNovaColors.primary, 0.28),
          color: softNovaColors.textPrimary,
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(softNovaColors.background, 0.72),
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: 'transparent',
      },
      styleOverrides: {
        root: {
          backgroundColor: alpha(softNovaColors.background, 0.56),
          backgroundImage: 'none',
          boxShadow: 'none',
          borderBottom: `1px solid ${alpha(softNovaColors.textPrimary, 0.08)}`,
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          transition:
            'background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: alpha(softNovaColors.surface, 0.9),
          backgroundImage:
            'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 42%, rgba(255, 255, 255, 0.008) 100%)',
          border: `1px solid ${alpha(softNovaColors.textPrimary, 0.08)}`,
          borderRadius: 20,
          boxShadow: `0 24px 60px ${alpha(softNovaColors.background, 0.45)}`,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          transition:
            'background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 700,
          letterSpacing: '0.01em',
          transition:
            'background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease, color 180ms ease, transform 180ms ease, opacity 180ms ease',
          '&:active': {
            transform: 'translateY(1px)',
          },
          '&.Mui-focusVisible': {
            outline: `2px solid ${alpha(softNovaColors.primary, 0.22)}`,
            outlineOffset: 3,
          },
          '&.MuiButton-contained': {
            boxShadow: 'none',
          },
          '&.MuiButton-containedPrimary': {
            color: softNovaColors.background,
            backgroundImage: `linear-gradient(135deg, ${softNovaColors.primary} 0%, ${softNovaColors.primaryLight} 100%)`,
            boxShadow: `0 0 0 1px ${alpha(softNovaColors.primary, 0.2)}, 0 14px 32px ${alpha(softNovaColors.primary, 0.24)}`,
            '&:hover': {
              boxShadow: `0 0 0 1px ${alpha(softNovaColors.primary, 0.26)}, 0 18px 38px ${alpha(softNovaColors.primary, 0.3)}`,
              transform: 'translateY(-1px)',
            },
            '&.Mui-disabled': {
              color: alpha(softNovaColors.background, 0.55),
              backgroundImage: 'none',
              backgroundColor: alpha(softNovaColors.primary, 0.24),
            },
          },
          '&.MuiButton-containedSecondary': {
            color: softNovaColors.textPrimary,
            backgroundImage: `linear-gradient(135deg, ${softNovaColors.secondary} 0%, ${softNovaColors.secondaryLight} 100%)`,
            boxShadow: `0 0 0 1px ${alpha(softNovaColors.secondary, 0.2)}, 0 14px 32px ${alpha(softNovaColors.secondary, 0.22)}`,
            '&:hover': {
              boxShadow: `0 0 0 1px ${alpha(softNovaColors.secondary, 0.28)}, 0 18px 38px ${alpha(softNovaColors.secondary, 0.28)}`,
              transform: 'translateY(-1px)',
            },
            '&.Mui-disabled': {
              color: alpha(softNovaColors.textPrimary, 0.5),
              backgroundImage: 'none',
              backgroundColor: alpha(softNovaColors.secondary, 0.24),
            },
          },
          '&.MuiButton-outlined': {
            borderWidth: 1,
            backgroundColor: alpha(softNovaColors.textPrimary, 0.02),
          },
          '&.MuiButton-outlinedPrimary': {
            borderColor: alpha(softNovaColors.primary, 0.35),
            color: softNovaColors.textPrimary,
            '&:hover': {
              borderColor: softNovaColors.primary,
              backgroundColor: alpha(softNovaColors.primary, 0.08),
            },
          },
          '&.MuiButton-outlinedSecondary': {
            borderColor: alpha(softNovaColors.secondary, 0.35),
            color: softNovaColors.textPrimary,
            '&:hover': {
              borderColor: softNovaColors.secondary,
              backgroundColor: alpha(softNovaColors.secondary, 0.08),
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: alpha(softNovaColors.surface, 0.55),
          transition:
            'background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha(softNovaColors.textPrimary, 0.14),
            transition: 'border-color 180ms ease',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: alpha(softNovaColors.textPrimary, 0.24),
          },
          '&.Mui-focused': {
            boxShadow: `0 0 0 3px ${alpha(softNovaColors.primary, 0.14)}`,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: softNovaColors.primary,
            borderWidth: 1,
          },
          '&.Mui-disabled': {
            backgroundColor: alpha(softNovaColors.textPrimary, 0.03),
          },
        },
        input: {
          color: softNovaColors.textPrimary,
          paddingTop: 14,
          paddingBottom: 14,
          '&::placeholder': {
            color: alpha(softNovaColors.textSecondary, 0.78),
            opacity: 1,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: softNovaColors.textSecondary,
          transition: 'color 180ms ease, transform 180ms ease',
          '&.Mui-focused': {
            color: softNovaColors.primary,
          },
          '&.Mui-error': {
            color: '#F87171',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          color: alpha(softNovaColors.textSecondary, 0.9),
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: alpha(softNovaColors.textPrimary, 0.08),
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: alpha(softNovaColors.surface, 0.96),
          color: softNovaColors.textPrimary,
          border: `1px solid ${alpha(softNovaColors.textPrimary, 0.08)}`,
          borderRadius: 12,
          boxShadow: `0 18px 40px ${alpha(softNovaColors.background, 0.45)}`,
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          fontSize: '0.8125rem',
          fontWeight: 500,
          padding: '10px 12px',
        },
        arrow: {
          color: softNovaColors.surface,
        },
      },
    },
  },
})

export default softNovaTheme
export { softNovaTheme }

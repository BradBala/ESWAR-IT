import type { ReactNode } from 'react'
import { CircularProgress } from '@mui/material'
import Button, { type ButtonProps } from '@mui/material/Button'
import { alpha, useTheme } from '@mui/material/styles'
import { motion, useReducedMotion } from 'framer-motion'

export type GradientButtonVariant = 'primary' | 'secondary' | 'outline'

export interface GradientButtonProps
  extends Omit<ButtonProps, 'variant' | 'color' | 'startIcon' | 'endIcon' | 'fullWidth'> {
  children: ReactNode
  loading?: boolean
  fullWidth?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  variant?: GradientButtonVariant
}

export function GradientButton({
  children,
  loading = false,
  fullWidth = false,
  startIcon,
  endIcon,
  variant = 'primary',
  disabled,
  sx,
  ...rest
}: GradientButtonProps) {
  const theme = useTheme()
  const prefersReducedMotion = useReducedMotion()
  const isDisabled = disabled || loading

  const extraSx = Array.isArray(sx) ? sx : sx ? [sx] : []

  const variantSx = {
    primary: {
      color: theme.palette.background.default,
      backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
      boxShadow: `0 0 0 1px ${alpha(theme.palette.primary.main, 0.2)}, 0 14px 32px ${alpha(
        theme.palette.primary.main,
        0.24,
      )}`,
      '&:hover': {
        boxShadow: `0 0 0 1px ${alpha(theme.palette.primary.main, 0.28)}, 0 18px 40px ${alpha(
          theme.palette.primary.main,
          0.34,
        )}`,
      },
      '&.Mui-disabled': {
        color: alpha(theme.palette.background.default, 0.55),
        backgroundImage: 'none',
        backgroundColor: alpha(theme.palette.primary.main, 0.24),
      },
    },
    secondary: {
      color: theme.palette.text.primary,
      backgroundImage: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.accent.main} 100%)`,
      boxShadow: `0 0 0 1px ${alpha(theme.palette.secondary.main, 0.2)}, 0 14px 32px ${alpha(
        theme.palette.secondary.main,
        0.22,
      )}`,
      '&:hover': {
        boxShadow: `0 0 0 1px ${alpha(theme.palette.secondary.main, 0.28)}, 0 18px 40px ${alpha(
          theme.palette.secondary.main,
          0.3,
        )}`,
      },
      '&.Mui-disabled': {
        color: alpha(theme.palette.text.primary, 0.5),
        backgroundImage: 'none',
        backgroundColor: alpha(theme.palette.secondary.main, 0.22),
      },
    },
    outline: {
      color: theme.palette.text.primary,
      backgroundColor: alpha(theme.palette.background.surface, 0.46),
      border: `1px solid ${alpha(theme.palette.primary.main, 0.35)}`,
      boxShadow: `0 0 0 1px ${alpha(theme.palette.common.white, 0.02)}`,
      '&:hover': {
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
        borderColor: alpha(theme.palette.primary.main, 0.55),
        boxShadow: `0 0 0 1px ${alpha(theme.palette.primary.main, 0.12)}, 0 16px 36px ${alpha(
          theme.palette.primary.main,
          0.18,
        )}`,
      },
      '&.Mui-disabled': {
        color: alpha(theme.palette.text.primary, 0.45),
        borderColor: alpha(theme.palette.common.white, 0.08),
        backgroundColor: alpha(theme.palette.background.surface, 0.3),
      },
    },
  } as const

  return (
    <motion.div
      style={{
        display: fullWidth ? 'block' : 'inline-flex',
        width: fullWidth ? '100%' : 'auto',
      }}
      whileHover={
        prefersReducedMotion || isDisabled
          ? undefined
          : { y: -2, scale: 1.01 }
      }
      whileTap={prefersReducedMotion || isDisabled ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 30 }}
    >
      <Button
        {...rest}
        fullWidth={fullWidth}
        disabled={isDisabled}
        startIcon={loading ? <CircularProgress color="inherit" size={16} thickness={5} /> : startIcon}
        endIcon={loading ? undefined : endIcon}
        sx={[
          {
            position: 'relative',
            overflow: 'hidden',
            minHeight: 48,
            px: 2.5,
            py: 1.35,
            borderRadius: '14px',
            textTransform: 'none',
            fontWeight: 700,
            letterSpacing: '0.02em',
            transition:
              'transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease, border-color 180ms ease, color 180ms ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              opacity: 0,
              pointerEvents: 'none',
              background:
                'radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 45%)',
              transition: 'opacity 180ms ease',
            },
            '&:hover::before': {
              opacity: 1,
            },
            '& .MuiButton-startIcon, & .MuiButton-endIcon': {
              position: 'relative',
              zIndex: 1,
            },
          },
          variantSx[variant],
          ...extraSx,
        ]}
      >
        <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
      </Button>
    </motion.div>
  )
}

export default GradientButton

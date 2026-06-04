import type { ReactElement, ReactNode } from 'react'
import { Chip } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { motion, useReducedMotion } from 'framer-motion'

export interface GlowingChipProps {
  label: ReactNode
  icon?: ReactElement
  sx?: Record<string, unknown> | Array<Record<string, unknown>> | undefined
}

export function GlowingChip({ label, icon, sx }: GlowingChipProps) {
  const theme = useTheme()
  const prefersReducedMotion = useReducedMotion()
  const extraSx = Array.isArray(sx) ? sx : sx ? [sx] : []

  return (
    <motion.div
      style={{ display: 'inline-flex', maxWidth: '100%' }}
      animate={
        prefersReducedMotion
          ? undefined
          : {
              y: [0, -3, 0],
            }
      }
      transition={{
        duration: 3.4,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut',
      }}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
    >
      <Chip
        icon={icon}
        label={label}
        sx={[
          {
            height: 40,
            px: 0.5,
            borderRadius: 999,
            fontWeight: 600,
            letterSpacing: '0.01em',
            color: 'text.primary',
            backgroundColor: alpha(theme.palette.background.surface, 0.68),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.24)}`,
            boxShadow: `0 0 0 1px ${alpha(theme.palette.common.white, 0.02)}, 0 0 20px ${alpha(
              theme.palette.primary.main,
              0.14,
            )}`,
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            '& .MuiChip-icon': {
              color: theme.palette.primary.main,
            },
            '&:hover': {
              backgroundColor: alpha(theme.palette.primary.main, 0.08),
              borderColor: alpha(theme.palette.primary.main, 0.42),
              boxShadow: `0 0 0 1px ${alpha(theme.palette.primary.main, 0.14)}, 0 0 28px ${alpha(
                theme.palette.primary.main,
                0.18,
              )}`,
            },
          },
          ...extraSx,
        ]}
      />
    </motion.div>
  )
}

export default GlowingChip

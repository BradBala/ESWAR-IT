import type { HTMLAttributes, ReactNode } from 'react'
import { Box, Paper, Typography } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { motion, useReducedMotion } from 'framer-motion'

import { softNovaColors } from '../../theme/theme'

export interface BentoCardProps extends HTMLAttributes<HTMLDivElement> {
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
  children?: ReactNode
  height?: number | string
  width?: number | string
}

export function BentoCard({
  title,
  description,
  icon,
  children,
  height,
  width,
  sx,
  ...rest
}: BentoCardProps & {
  sx?: Record<string, unknown> | Array<Record<string, unknown>> | undefined
}) {
  const theme = useTheme()
  const prefersReducedMotion = useReducedMotion()
  const extraSx = Array.isArray(sx) ? sx : sx ? [sx] : []

  return (
    <motion.div
      style={{
        width: width ?? '100%',
        height: height ?? '100%',
        display: 'block',
        maxWidth: '100%',
      }}
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.01 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Paper
        {...rest}
        sx={[
          {
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            cursor: rest.onClick ? 'pointer' : 'default',
            backgroundColor: alpha(theme.palette.background.surface, 0.84),
            border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
            boxShadow: `0 18px 48px ${alpha(softNovaColors.background, 0.34)}`,
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            transition:
              'transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background-color 180ms ease',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              background:
                'radial-gradient(circle at top left, rgba(255,107,53,0.12), transparent 40%)',
              opacity: 0,
              transition: 'opacity 180ms ease',
            },
            '&:hover': {
              borderColor: alpha(theme.palette.primary.main, 0.32),
              boxShadow: `0 22px 56px ${alpha(softNovaColors.background, 0.42)}, 0 0 0 1px ${alpha(
                theme.palette.primary.main,
                0.12,
              )}`,
            },
            '&:hover::before': {
              opacity: 1,
            },
          },
          ...extraSx,
        ]}
      >
        {icon ? (
          <Box
            sx={{
              width: 46,
              height: 46,
              borderRadius: 3,
              display: 'grid',
              placeItems: 'center',
              color: 'primary.main',
              backgroundImage: `linear-gradient(135deg, ${alpha(
                theme.palette.primary.main,
                0.16,
              )}, ${alpha(theme.palette.accent.main, 0.12)})`,
              border: `1px solid ${alpha(theme.palette.primary.main, 0.16)}`,
              boxShadow: `0 0 24px ${alpha(theme.palette.primary.main, 0.16)}`,
            }}
          >
            {icon}
          </Box>
        ) : null}

        <Box sx={{ display: 'grid', gap: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            {title}
          </Typography>
          {description ? (
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          ) : null}
        </Box>

        {children ? <Box sx={{ mt: description || icon ? 1 : 0, display: 'grid', gap: 1.5 }}>{children}</Box> : null}
      </Paper>
    </motion.div>
  )
}

export default BentoCard

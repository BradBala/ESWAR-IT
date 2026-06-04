import type { ReactNode } from 'react'
import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { motion, useReducedMotion } from 'framer-motion'

export type SectionHeadingAlign = 'left' | 'center'

export interface SectionHeadingProps {
  label: ReactNode
  title: ReactNode
  description?: ReactNode
  align?: SectionHeadingAlign
  sx?: Record<string, unknown> | Array<Record<string, unknown>> | undefined
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  sx,
}: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion()
  const extraSx = Array.isArray(sx) ? sx : sx ? [sx] : []

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Box
        sx={[
          {
            display: 'grid',
            gap: 1.5,
            justifyItems: align === 'center' ? 'center' : 'start',
            textAlign: align,
          },
          ...extraSx,
        ]}
      >
        <Typography
          variant="overline"
          sx={(theme) => ({
            color: theme.palette.primary.main,
            letterSpacing: '0.22em',
            fontWeight: 700,
            textTransform: 'uppercase',
            textShadow: `0 0 18px ${alpha(theme.palette.primary.main, 0.18)}`,
          })}
        >
          {label}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            maxWidth: align === 'center' ? 860 : 780,
            mx: align === 'center' ? 'auto' : 0,
          }}
        >
          {title}
        </Typography>

        {description ? (
          <Typography
            variant="body1"
            sx={{
              maxWidth: align === 'center' ? 760 : 680,
              mx: align === 'center' ? 'auto' : 0,
              color: 'text.secondary',
            }}
          >
            {description}
          </Typography>
        ) : null}
      </Box>
    </motion.div>
  )
}

export default SectionHeading

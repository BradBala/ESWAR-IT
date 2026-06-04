import { Box, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import type { SxProps, Theme } from '@mui/material/styles'

export interface BrandLogoProps {
  compact?: boolean
  href?: string
  className?: string
  sx?: SxProps<Theme>
}

export function BrandLogo({
  compact = false,
  href = '#home',
  className,
  sx,
}: BrandLogoProps) {
  const composedSx = Array.isArray(sx) ? sx : sx ? [sx] : []

  return (
    <Box
      component="a"
      href={href}
      aria-label="SoftNova home"
      className={className}
      sx={[
        {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1.5,
          minWidth: 0,
          transition: 'transform 180ms ease, opacity 180ms ease',
          '&:hover': {
            transform: 'translateY(-1px)',
            opacity: 0.98,
          },
        },
        ...composedSx,
      ]}
    >
      <Box
        sx={(theme) => ({
          position: 'relative',
          width: compact ? 40 : 46,
          height: compact ? 40 : 46,
          flexShrink: 0,
          display: 'grid',
          placeItems: 'center',
          overflow: 'hidden',
          borderRadius: 2.5,
          border: `1px solid ${alpha(theme.palette.common.white, 0.12)}`,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.accent.main} 100%)`,
          boxShadow: `0 0 0 1px ${alpha(theme.palette.primary.main, 0.24)}, 0 18px 36px ${alpha(theme.palette.primary.main, 0.2)}`,
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 1,
            borderRadius: 'inherit',
            background:
              'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.42), rgba(255,255,255,0) 58%)',
          },
        })}
      >
        <Typography
          variant="subtitle2"
          sx={{
            position: 'relative',
            zIndex: 1,
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: 'background.default',
          }}
        >
          SN
        </Typography>
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <Typography
          variant="h6"
          sx={{
            lineHeight: 1,
            fontWeight: 700,
            color: 'text.primary',
            whiteSpace: 'nowrap',
          }}
        >
          SoftNova
        </Typography>
        {!compact ? (
          <Typography
            variant="body2"
            sx={{
              mt: 0.25,
              color: 'text.secondary',
              lineHeight: 1.2,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Innovation That Shines
          </Typography>
        ) : null}
      </Box>
    </Box>
  )
}

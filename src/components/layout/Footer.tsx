import { Box, Container, Divider, Link, Paper, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { motion, useReducedMotion } from 'framer-motion'

import { BrandLogo } from './BrandLogo'
import { FOOTER_CONTACT_ITEMS, NAV_LINKS, SERVICE_ITEMS } from './layoutData'

export function Footer() {
  const prefersReducedMotion = useReducedMotion()
  const currentYear = new Date().getFullYear()

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <Box
        component="footer"
        sx={(theme) => ({
          mt: 'auto',
          pt: { xs: 6, md: 8 },
          pb: { xs: 3, md: 4 },
          borderTop: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
          backgroundImage: `linear-gradient(180deg, ${alpha(theme.palette.background.surface, 0.9)} 0%, ${alpha(theme.palette.background.default, 1)} 100%)`,
        })}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, minmax(0, 1fr))',
                lg: 'repeat(4, minmax(0, 1fr))',
              },
            }}
          >
            <Paper
              sx={{
                height: '100%',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <BrandLogo />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                SoftNova builds modern digital experiences for ambitious brands that want
                strategy, performance, and standout design in one focused agency partner.
              </Typography>
            </Paper>

            <Paper
              sx={{
                height: '100%',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'grid', gap: 1.25 }}>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.id}
                    href={`#${link.id}`}
                    underline="none"
                    sx={{
                      width: 'fit-content',
                      color: 'text.secondary',
                      transition: 'color 180ms ease, transform 180ms ease',
                      '&:hover': {
                        color: 'text.primary',
                        transform: 'translateX(4px)',
                      },
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Paper>

            <Paper
              sx={{
                height: '100%',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Services
              </Typography>
              <Box sx={{ display: 'grid', gap: 1.25 }}>
                {SERVICE_ITEMS.map((service) => (
                  <Box key={service} sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                    <Box
                      sx={(theme) => ({
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        flexShrink: 0,
                        backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.accent.main})`,
                        boxShadow: `0 0 18px ${alpha(theme.palette.primary.main, 0.28)}`,
                      })}
                    />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {service}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>

            <Paper
              sx={{
                height: '100%',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Contact Information
              </Typography>

              <Box sx={{ display: 'grid', gap: 1.5 }}>
                {FOOTER_CONTACT_ITEMS.map((item) => {
                  const Icon = item.icon

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      underline="none"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        p: 1.2,
                        borderRadius: 2.5,
                        border: (theme) => `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
                        backgroundColor: (theme) => alpha(theme.palette.common.white, 0.03),
                        transition: 'transform 180ms ease, background-color 180ms ease, border-color 180ms ease',
                        '&:hover': {
                          transform: 'translateX(4px)',
                          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
                          borderColor: (theme) => alpha(theme.palette.primary.main, 0.2),
                        },
                      }}
                    >
                      <Box
                        sx={(theme) => ({
                          width: 38,
                          height: 38,
                          borderRadius: 2,
                          display: 'grid',
                          placeItems: 'center',
                          flexShrink: 0,
                          color: 'primary.main',
                          backgroundColor: alpha(theme.palette.primary.main, 0.08),
                          border: `1px solid ${alpha(theme.palette.primary.main, 0.18)}`,
                        })}
                      >
                        <Icon fontSize="small" />
                      </Box>

                      <Box sx={{ minWidth: 0 }}>
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.2 }}>
                          {item.label}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.primary',
                            fontWeight: 600,
                            wordBreak: 'break-word',
                          }}
                        >
                          {item.value}
                        </Typography>
                      </Box>
                    </Link>
                  )
                })}
              </Box>
            </Paper>
          </Box>

          <Divider sx={{ my: 3, borderColor: 'divider' }} />

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
              gap: 1.5,
            }}
          >
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              © {currentYear} SoftNova. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Innovation That Shines
            </Typography>
          </Box>
        </Container>
      </Box>
    </motion.div>
  )
}


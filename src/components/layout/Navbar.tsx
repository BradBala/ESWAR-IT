import { useEffect, useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import { motion, useReducedMotion } from 'framer-motion'

import { BrandLogo } from './BrandLogo'
import { ArrowUpRightIcon, CloseIcon, MenuIcon } from './LayoutIcons'
import { NAV_LINKS, type SectionId } from './layoutData'

const NAVBAR_HEIGHT = {
  xs: 80,
  md: 88,
}

export function Navbar() {
  const prefersReducedMotion = useReducedMotion()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId>(NAV_LINKS[0].id)

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as SectionId
    if (NAV_LINKS.some((link) => link.id === hash)) {
      setActiveSection(hash)
    }

    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (section): section is HTMLElement => Boolean(section),
    )

    if (sections.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id as SectionId)
        }
      },
      {
        root: null,
        rootMargin: '-32% 0px -54% 0px',
        threshold: [0.15, 0.3, 0.5, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -18 }}
        animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <AppBar position="fixed" elevation={0} color="transparent">
          <Container
            maxWidth="xl"
            sx={{
              px: { xs: 2, sm: 3, lg: 4 },
            }}
          >
            <Toolbar
              disableGutters
              sx={{
                minHeight: NAVBAR_HEIGHT,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <BrandLogo compact href="#home" />

              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  flex: 1,
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="nav"
                  aria-label="Primary navigation"
                  sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.75,
                    p: 0.75,
                    borderRadius: 999,
                    border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
                    backgroundColor: alpha(theme.palette.background.paper, 0.35),
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                  })}
                >
                  {NAV_LINKS.map((link) => {
                    const isActive = activeSection === link.id

                    return (
                      <Button
                        key={link.id}
                        href={`#${link.id}`}
                        aria-current={isActive ? 'page' : undefined}
                        sx={(theme) => ({
                          position: 'relative',
                          px: 2,
                          py: 1,
                          minWidth: 0,
                          borderRadius: 999,
                          color: isActive ? 'text.primary' : 'text.secondary',
                          backgroundColor: isActive
                            ? alpha(theme.palette.primary.main, 0.1)
                            : 'transparent',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            left: '50%',
                            bottom: 6,
                            width: isActive ? 'calc(100% - 24px)' : 0,
                            height: 2,
                            transform: 'translateX(-50%)',
                            borderRadius: 999,
                            backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                            transition: 'width 180ms ease',
                          },
                          '&:hover': {
                            backgroundColor: alpha(theme.palette.common.white, 0.04),
                            color: 'text.primary',
                            '&::after': {
                              width: 'calc(100% - 24px)',
                            },
                          },
                        })}
                      >
                        {link.label}
                      </Button>
                    )
                  })}
                </Box>
              </Box>

              <Box
                sx={{
                  position: 'relative',
                  display: { xs: 'none', md: 'inline-flex' },
                  ml: 'auto',
                }}
              >
                {!prefersReducedMotion ? (
                  <motion.div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      inset: -8,
                      borderRadius: 999,
                      pointerEvents: 'none',
                      background:
                        'linear-gradient(135deg, rgba(255,107,53,0.28), rgba(114,9,183,0.18))',
                      filter: 'blur(18px)',
                    }}
                    animate={{
                      opacity: [0.35, 0.75, 0.35],
                      scale: [0.98, 1.03, 0.98],
                    }}
                    transition={{
                      duration: 3.4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: 'easeInOut',
                    }}
                  />
                ) : null}

                <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    href="#contact"
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={<ArrowUpRightIcon fontSize="small" />}
                    sx={{
                      position: 'relative',
                      zIndex: 1,
                      minWidth: 152,
                    }}
                  >
                    Start Project
                  </Button>
                </motion.div>
              </Box>

              <IconButton
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                onClick={() => setMobileOpen((open) => !open)}
                sx={(theme) => ({
                  ml: 'auto',
                  display: { xs: 'inline-flex', md: 'none' },
                  color: 'text.primary',
                  border: `1px solid ${alpha(theme.palette.common.white, 0.12)}`,
                  backgroundColor: alpha(theme.palette.background.paper, 0.28),
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                })}
              >
                {mobileOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>

      <Toolbar
        aria-hidden
        sx={{
          minHeight: NAVBAR_HEIGHT,
        }}
      />

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        transitionDuration={{ enter: 260, exit: 220 }}
        sx={{
          '& .MuiDrawer-paper': (theme) => ({
            width: { xs: '100%', sm: 360 },
            maxWidth: '100%',
            backgroundColor: alpha(theme.palette.background.surface, 0.96),
            borderLeft: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }),
        }}
      >
        <Box
          sx={{
            p: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
            }}
          >
            <BrandLogo compact href="#home" />
            <IconButton
              aria-label="Close navigation menu"
              onClick={() => setMobileOpen(false)}
              sx={(theme) => ({
                color: 'text.primary',
                border: `1px solid ${alpha(theme.palette.common.white, 0.12)}`,
                backgroundColor: alpha(theme.palette.background.paper, 0.28),
              })}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <Divider sx={{ my: 3, borderColor: 'divider' }} />

          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 18 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <List disablePadding sx={{ display: 'grid', gap: 1 }}>
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id

                  return (
                    <ListItemButton
                      key={link.id}
                      component="a"
                      href={`#${link.id}`}
                      selected={isActive}
                      onClick={() => setMobileOpen(false)}
                      sx={(theme) => ({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 2,
                        py: 1.5,
                        borderRadius: 3,
                        border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
                        backgroundColor: isActive
                          ? alpha(theme.palette.primary.main, 0.12)
                          : alpha(theme.palette.common.white, 0.02),
                        '&.Mui-selected': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.12),
                          '&:hover': {
                            backgroundColor: alpha(theme.palette.primary.main, 0.16),
                          },
                        },
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.common.white, 0.05),
                        },
                      })}
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 700, color: isActive ? 'text.primary' : 'text.secondary' }}
                        >
                          {link.label}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          Jump to section
                        </Typography>
                      </Box>
                    </ListItemButton>
                  )
                })}
              </List>
            </motion.div>

            <Box sx={{ mt: 'auto' }}>
              <Button
                href="#contact"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                endIcon={<ArrowUpRightIcon fontSize="small" />}
                onClick={() => setMobileOpen(false)}
              >
                Start Project
              </Button>

              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  color: 'text.secondary',
                  textAlign: 'center',
                }}
              >
                Innovation That Shines
              </Typography>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  )
}


import { Box, Button, Container, Paper, Typography } from '@mui/material'
import { alpha } from '@mui/material/styles'

import { Layout } from './components/layout/Layout'
import { ArrowUpRightIcon } from './components/layout/LayoutIcons'

const serviceCards = [
  {
    title: 'Web Development',
    description:
      'Fast, scalable React builds with careful architecture, polished interactions, and conversion-focused UX.',
  },
  {
    title: 'SEO Optimization',
    description:
      'Technical and content-aware search optimization that improves visibility without sacrificing performance.',
  },
  {
    title: 'Technical SEO',
    description:
      'Crawlability, structured data, indexation, and site health improvements for growth-minded brands.',
  },
  {
    title: 'UI/UX Design',
    description:
      'Modern interface systems with clear hierarchy, accessible interactions, and premium SaaS polish.',
  },
  {
    title: 'E-Commerce Solutions',
    description:
      'High-trust storefronts designed to reduce friction and lift revenue across devices and funnels.',
  },
] as const

const portfolioCards = [
  {
    title: 'Fintech Launch System',
    metric: '42% higher conversions',
    description: 'A premium React experience for a product launch that needed both speed and trust.',
  },
  {
    title: 'B2B Agency Rebrand',
    metric: '3x longer session time',
    description: 'Full visual refresh, stronger messaging, and a funnel designed for qualified leads.',
  },
  {
    title: 'Commerce Experience',
    metric: 'Lower bounce rate',
    description: 'A clean storefront experience with improved discovery, speed, and mobile ergonomics.',
  },
] as const

function App() {
  return (
    <Layout>
      <Box
        component="section"
        id="home"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 5, md: 8 },
          pb: { xs: 10, md: 16 },
          scrollMarginTop: { xs: 10, md: 12 },
        }}
      >
        <Box
          sx={(theme) => ({
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            backgroundImage: `
              radial-gradient(circle at 15% 18%, ${alpha(theme.palette.primary.main, 0.16)} 0, transparent 28%),
              radial-gradient(circle at 84% 10%, ${alpha(theme.palette.secondary.main, 0.16)} 0, transparent 24%),
              radial-gradient(circle at 85% 82%, ${alpha(theme.palette.accent.main, 0.12)} 0, transparent 22%)
            `,
          })}
        />

        <Container maxWidth="xl" sx={{ position: 'relative', px: { xs: 2, sm: 3, lg: 4 } }}>
          <Box
            sx={{
              display: 'grid',
              gap: 6,
              alignItems: 'center',
              gridTemplateColumns: {
                xs: '1fr',
                md: 'minmax(0, 1.2fr) minmax(320px, 0.8fr)',
              },
            }}
          >
            <Box sx={{ display: 'grid', gap: 3 }}>
              <Box
                sx={(theme) => ({
                  width: 'fit-content',
                  px: 1.5,
                  py: 0.8,
                  borderRadius: 999,
                  border: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
                  backgroundColor: alpha(theme.palette.background.paper, 0.35),
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                })}
              >
                <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 700 }}>
                  Premium freelance agency
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    maxWidth: 760,
                    mb: 2,
                  }}
                >
                  Innovation That Shines
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    maxWidth: 760,
                    color: 'text.secondary',
                    fontSize: { xs: '1.02rem', md: '1.08rem' },
                  }}
                >
                  SoftNova designs and builds modern digital experiences for ambitious brands
                  that want sharper positioning, stronger performance, and a premium SaaS
                  presence.
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 1.5,
                }}
              >
                <Button
                  href="#contact"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowUpRightIcon fontSize="small" />}
                  sx={{ minWidth: 168 }}
                >
                  Start Project
                </Button>
                <Button
                  href="#portfolio"
                  variant="outlined"
                  color="secondary"
                  size="large"
                  sx={{ minWidth: 168 }}
                >
                  View Portfolio
                </Button>
              </Box>

              <Box
                sx={{
                  pt: 1.5,
                  display: 'grid',
                  gap: 2,
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(3, minmax(0, 1fr))',
                  },
                }}
              >
                {[
                  ['Launch-ready builds', 'React systems built to ship fast and scale cleanly.'],
                  ['SEO built-in', 'Technical SEO and content structure considered from day one.'],
                  ['Founder-led', 'Direct collaboration, quick feedback loops, no agency noise.'],
                ].map(([title, description]) => (
                  <Paper key={title} sx={{ p: 2, height: '100%' }}>
                    <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 0.75, color: 'text.secondary' }}>
                      {description}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            </Box>

            <Paper
              sx={{
                p: { xs: 3, md: 4 },
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={(theme) => ({
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  backgroundImage: `radial-gradient(circle at 80% 0%, ${alpha(
                    theme.palette.primary.main,
                    0.16,
                  )} 0, transparent 38%)`,
                })}
              />

              <Box sx={{ position: 'relative', display: 'grid', gap: 2.5 }}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  What SoftNova brings
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Strategy, design, and engineering packaged into one focused delivery system.
                </Typography>

                <Box sx={{ display: 'grid', gap: 1.5 }}>
                  {[
                    ['Premium UI systems', 'Clean visual language with glassmorphism depth.'],
                    ['Faster execution', 'Lean workflow with clear milestones and launch cadence.'],
                    ['Commercial clarity', 'Messaging and UX that support better lead quality.'],
                  ].map(([label, value]) => (
                    <Box
                      key={label}
                      sx={{
                        p: 1.5,
                        borderRadius: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        backgroundColor: 'rgba(255,255,255,0.02)',
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>
                        {label}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                        {value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        id="about"
        sx={{
          py: { xs: 10, md: 14 },
          scrollMarginTop: { xs: 10, md: 12 },
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: {
                xs: '1fr',
                md: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
              },
            }}
          >
            <Box sx={{ display: 'grid', gap: 2 }}>
              <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 2 }}>
                About SoftNova
              </Typography>
              <Typography variant="h2" sx={{ maxWidth: 520 }}>
                A focused freelance agency for modern digital brands.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 560 }}>
                We combine strategic thinking, polished design, and production-ready React
                implementation to help brands look sharper and convert better.
              </Typography>
            </Box>

            <Paper sx={{ p: { xs: 3, md: 4 } }}>
              <Box
                sx={{
                  display: 'grid',
                  gap: 2,
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, minmax(0, 1fr))',
                  },
                }}
              >
                {[
                  ['Brand strategy', 'Clear positioning and tighter messaging hierarchy.'],
                  ['UI systems', 'Reusable components that keep the experience consistent.'],
                  ['Launch support', 'From concept to deployment with real delivery momentum.'],
                  ['SEO structure', 'Metadata, headings, and technical performance baked in.'],
                ].map(([title, description]) => (
                  <Box
                    key={title}
                    sx={{
                      p: 2.5,
                      height: '100%',
                      borderRadius: 3,
                      border: '1px solid',
                      borderColor: 'divider',
                      backgroundColor: 'rgba(255,255,255,0.02)',
                    }}
                  >
                    <Typography variant="body1" sx={{ fontWeight: 700 }}>
                      {title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                      {description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        id="services"
        sx={{
          py: { xs: 10, md: 14 },
          scrollMarginTop: { xs: 10, md: 12 },
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <Box sx={{ display: 'grid', gap: 1.5, maxWidth: 700, mb: 4 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 2 }}>
              Services
            </Typography>
            <Typography variant="h2">Built to cover the full digital growth stack.</Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              SoftNova helps with execution where it matters most: design clarity, technical
              performance, and launch-ready frontend delivery.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, minmax(0, 1fr))',
                lg: 'repeat(3, minmax(0, 1fr))',
              },
            }}
          >
            {serviceCards.map((service) => (
              <Paper
                key={service.title}
                sx={{
                  p: 3,
                  height: '100%',
                  transition: 'transform 180ms ease, box-shadow 180ms ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box sx={{ display: 'grid', gap: 1.5 }}>
                  <Box
                    sx={(theme) => ({
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.accent.main})`,
                      boxShadow: `0 0 22px ${alpha(theme.palette.primary.main, 0.28)}`,
                    })}
                  />
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {service.description}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        id="portfolio"
        sx={{
          py: { xs: 10, md: 14 },
          scrollMarginTop: { xs: 10, md: 12 },
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <Box sx={{ display: 'grid', gap: 1.5, maxWidth: 700, mb: 4 }}>
            <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 2 }}>
              Portfolio
            </Typography>
            <Typography variant="h2">Selected projects designed for measurable results.</Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, minmax(0, 1fr))',
              },
            }}
          >
            {portfolioCards.map((project) => (
              <Paper
                key={project.title}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 700 }}>
                  {project.metric}
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {project.description}
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Button href="#contact" variant="text" endIcon={<ArrowUpRightIcon fontSize="small" />} sx={{ px: 0 }}>
                    Discuss a similar project
                  </Button>
                </Box>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        id="contact"
        sx={{
          py: { xs: 10, md: 14 },
          scrollMarginTop: { xs: 10, md: 12 },
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
          <Paper
            sx={{
              p: { xs: 3, md: 4 },
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Box
              sx={(theme) => ({
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                backgroundImage: `radial-gradient(circle at 90% 10%, ${alpha(
                  theme.palette.primary.main,
                  0.15,
                )} 0, transparent 30%)`,
              })}
            />

            <Box
              sx={{
                position: 'relative',
                display: 'grid',
                gap: 4,
                alignItems: 'center',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: 'minmax(0, 1.15fr) minmax(280px, 0.85fr)',
                },
              }}
            >
              <Box sx={{ display: 'grid', gap: 2 }}>
                <Typography variant="overline" sx={{ color: 'primary.main', letterSpacing: 2 }}>
                  Contact
                </Typography>
                <Typography variant="h2" sx={{ maxWidth: 620 }}>
                  Ready to build something sharp, fast, and memorable?
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 640 }}>
                  Start with a short intro and we&apos;ll map out the right scope, timeline, and
                  delivery shape for your next launch.
                </Typography>
              </Box>

              <Box sx={{ display: 'grid', gap: 1.5 }}>
                <Button
                  href="mailto:hello@softnova.studio"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowUpRightIcon fontSize="small" />}
                  fullWidth
                >
                  hello@softnova.studio
                </Button>
                <Button href="#home" variant="outlined" color="secondary" size="large" fullWidth>
                  Back to top
                </Button>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Layout>
  )
}

export default App

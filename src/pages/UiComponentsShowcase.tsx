import { Box, Container, Typography } from '@mui/material'
import { SvgIcon, type SvgIconProps } from '@mui/material'

import {
  BentoCard,
  FAQAccordion,
  GradientButton,
  GlowingChip,
  SectionHeading,
} from '../components/ui'

function SparkIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M12 2.75 13.9 8.1 19.25 10 13.9 11.9 12 17.25 10.1 11.9 4.75 10 10.1 8.1 12 2.75Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M18.75 13.5 19.6 15.9 22 16.75 19.6 17.6 18.75 20 17.9 17.6 15.5 16.75 17.9 15.9 18.75 13.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </SvgIcon>
  )
}

const stats = [
  { label: '99% Client Retention' },
  { label: '50+ Projects Completed', icon: <SparkIcon fontSize="small" /> },
  { label: '5 Years Experience' },
] as const

const serviceCards = [
  {
    title: 'Brand Systems',
    description:
      'Reusable components, visual consistency, and clear hierarchy for premium agency websites.',
  },
  {
    title: 'Conversion UX',
    description:
      'Layouts and interactions designed to reduce friction and support stronger lead generation.',
  },
  {
    title: 'Technical Performance',
    description:
      'Fast-loading, maintainable React UI patterns that hold up as the product scales.',
  },
] as const

const faqs = [
  {
    question: 'How long does a website take?',
    answer: 'Typical SoftNova builds take 2 to 6 weeks depending on scope, content readiness, and revisions.',
  },
  {
    question: 'Can these components be reused across multiple pages?',
    answer: 'Yes. They are designed to be composable, theme-aware, and easy to drop into any route or layout.',
  },
  {
    question: 'Do the animations respect reduced motion preferences?',
    answer: 'Yes. The motion wrappers use Framer Motion with reduced-motion checks for a calmer experience.',
  },
] as const

export default function UiComponentsShowcase() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        py: { xs: 6, md: 10 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, lg: 4 } }}>
        <Box
          sx={{
            display: 'grid',
            gap: 8,
          }}
        >
          <SectionHeading
            align="center"
            label="UI Kit"
            title="Reusable building blocks for SoftNova"
            description="A small, opinionated component set that keeps the premium dark theme consistent across pages."
          />

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1.5,
            }}
          >
            {stats.map((item) => (
              <GlowingChip key={item.label} label={item.label} icon={item.icon} />
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1.5,
            }}
          >
            <GradientButton variant="primary">Start Project</GradientButton>
            <GradientButton variant="secondary">View Services</GradientButton>
            <GradientButton variant="outline" loading>
              Loading Example
            </GradientButton>
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
            {serviceCards.map((card) => (
              <BentoCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon={<SparkIcon fontSize="small" />}
              >
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Great for agency home pages, service sections, and portfolio highlights.
                </Typography>
              </BentoCard>
            ))}
          </Box>

          <Box
            sx={{
              display: 'grid',
              gap: 2,
            }}
          >
            <SectionHeading
              align="left"
              label="FAQ"
              title="Frequently asked questions"
              description="A dark accordion pattern with copper highlights for expandable content."
            />
            <FAQAccordion faqs={faqs} defaultExpandedIndex={0} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

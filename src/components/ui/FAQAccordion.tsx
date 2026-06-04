import type { ReactNode } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  SvgIcon,
  type SvgIconProps,
  Typography,
} from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import { motion, useReducedMotion } from 'framer-motion'

export interface FAQItem {
  question: ReactNode
  answer: ReactNode
}

export interface FAQAccordionProps {
  faqs: FAQItem[]
  defaultExpandedIndex?: number
  sx?: Record<string, unknown> | Array<Record<string, unknown>> | undefined
}

function ChevronDownIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M6.5 9.25 12 14.75l5.5-5.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </SvgIcon>
  )
}

export function FAQAccordion({ faqs, defaultExpandedIndex, sx }: FAQAccordionProps) {
  const theme = useTheme()
  const prefersReducedMotion = useReducedMotion()
  const extraSx = Array.isArray(sx) ? sx : sx ? [sx] : []

  if (faqs.length === 0) {
    return null
  }

  return (
    <Box
      sx={[
        {
          display: 'grid',
          gap: 1.5,
        },
        ...extraSx,
      ]}
    >
      {faqs.map((faq, index) => (
        <motion.div
          key={`${String(faq.question)}-${index}`}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <Accordion
            disableGutters
            elevation={0}
            defaultExpanded={index === defaultExpandedIndex}
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              overflow: 'hidden',
              borderRadius: 3,
              border: `1px solid ${alpha(theme.palette.common.white, 0.08)}`,
              backgroundColor: alpha(theme.palette.background.surface, 0.82),
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              backgroundImage:
                'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
              transition:
                'border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease',
              '&:before': {
                display: 'none',
              },
              '&.Mui-expanded': {
                borderColor: alpha(theme.palette.primary.main, 0.34),
                boxShadow: `0 0 0 1px ${alpha(theme.palette.primary.main, 0.12)}, 0 18px 40px ${alpha(
                  theme.palette.primary.main,
                  0.12,
                )}`,
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ChevronDownIcon />}
              sx={{
                px: 2.5,
                py: 0.5,
                minHeight: 72,
                '& .MuiAccordionSummary-content': {
                  my: 1.5,
                },
                '& .MuiAccordionSummary-expandIconWrapper': {
                  color: 'text.secondary',
                  transition: 'transform 180ms ease, color 180ms ease',
                },
                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                  color: 'primary.main',
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>
                {faq.question}
              </Typography>
            </AccordionSummary>

            <AccordionDetails
              sx={{
                px: 2.5,
                pb: 2.5,
                pt: 0,
              }}
            >
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </Box>
  )
}

export default FAQAccordion

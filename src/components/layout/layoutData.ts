import type { ComponentType } from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
} from './LayoutIcons'

export type SectionId = 'home' | 'about' | 'services' | 'portfolio' | 'contact'

export interface NavLinkItem {
  id: SectionId
  label: string
}

export interface FooterContactItem {
  label: string
  value: string
  href: string
  icon: ComponentType<SvgIconProps>
  external?: boolean
}

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
]

export const SERVICE_ITEMS = [
  'Web Development',
  'SEO Optimization',
  'Technical SEO',
  'UI/UX Design',
  'E-Commerce Solutions',
] as const

export const FOOTER_CONTACT_ITEMS: FooterContactItem[] = [
  {
    label: 'Email',
    value: 'hello@softnova.studio',
    href: 'mailto:hello@softnova.studio',
    icon: MailIcon,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/company/softnova',
    href: 'https://www.linkedin.com/company/softnova',
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/softnova',
    href: 'https://github.com/softnova',
    icon: GitHubIcon,
    external: true,
  },
  {
    label: 'Instagram',
    value: '@softnova',
    href: 'https://www.instagram.com/softnova',
    icon: InstagramIcon,
    external: true,
  },
]

import { SvgIcon, type SvgIconProps } from '@mui/material'

export function MenuIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M4 6.5h16M4 12h16M4 17.5h16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </SvgIcon>
  )
}

export function CloseIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M6.5 6.5 17.5 17.5M17.5 6.5 6.5 17.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </SvgIcon>
  )
}

export function ArrowUpRightIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M7 17 17 7M10 7h7v7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </SvgIcon>
  )
}

export function MailIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M5.25 6.75h13.5v10.5H5.25z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d="M5.5 7.2 12 12.3l6.5-5.1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </SvgIcon>
  )
}

export function LinkedInIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path
        d="M5.5 5.5h13A1.5 1.5 0 0 1 20 7v10a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17V7a1.5 1.5 0 0 1 1.5-1.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8 10.1V16M8 7.6a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12.2 10.1V16m0-3.3c0-1.7.9-2.8 2.5-2.8 1.7 0 2.4 1.1 2.4 2.8V16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </SvgIcon>
  )
}

export function GitHubIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M12 3.75A8.25 8.25 0 0 0 3.75 12c0 3.6 2.31 6.66 5.52 7.79.41.08.56-.18.56-.4v-1.53c-2.25.49-2.72-1-2.72-1-.37-.94-.91-1.19-.91-1.19-.75-.52.06-.5.06-.5.83.06 1.27.86 1.27.86.74 1.26 1.95.9 2.43.69.07-.54.29-.9.52-1.11-1.8-.2-3.7-.9-3.7-4.03 0-.89.32-1.62.84-2.19-.08-.2-.36-1.02.08-2.12 0 0 .68-.22 2.22.84a7.5 7.5 0 0 1 4.04 0c1.54-1.06 2.22-.84 2.22-.84.44 1.1.16 1.92.08 2.12.53.57.84 1.3.84 2.19 0 3.14-1.9 3.83-3.71 4.03.3.27.57.78.57 1.57v2.33c0 .22.15.49.57.4A8.25 8.25 0 0 0 12 3.75Z" />
    </SvgIcon>
  )
}

export function InstagramIcon(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <rect
        x="4.5"
        y="4.5"
        width="15"
        height="15"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" />
    </SvgIcon>
  )
}

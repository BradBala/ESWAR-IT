import type { ReactNode } from 'react'
import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

import { Footer } from './Footer'
import { Navbar } from './Navbar'

export interface LayoutProps {
  children?: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const content = children ?? <Outlet />

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default',
        color: 'text.primary',
        overflowX: 'clip',
      }}
    >
      <Navbar />

      <Box
        component="main"
        sx={{
          flex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {content}
      </Box>

      <Footer />
    </Box>
  )
}


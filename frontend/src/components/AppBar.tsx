import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: '#7a26c1' }}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            Fly My Drone
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
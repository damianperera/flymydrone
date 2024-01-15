import { Backdrop, CircularProgress, Typography } from '@mui/material'

const FullScreenLoader = () => {
  return (
    <Backdrop
        sx={{ backgroundColor: '#7a26c1', color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
        <Typography
          variant='h6'
          noWrap
          component='div'
          sx={{ paddingLeft: 1 }}
        >
          Loading your location
        </Typography>
      </Backdrop>
  )
}

export default FullScreenLoader
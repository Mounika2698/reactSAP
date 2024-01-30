import React, { useState } from 'react'
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Model from './Model';

const Header = () => {
  const [logoState, setLogoState] = useState(false)
  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
  const handleLogoClick = () => {
    setLogoState(true)
  }

  return (
    <>
      <Box
        sx={{
          typography: 'body1',
          '& > :not(style) ~ :not(style)': {
            ml: 2,
          },
        }}
        onClick={preventDefault}
      >
        <Link href="#" color="inherit" underline="none" onClick={handleLogoClick}>Logo</Link>
        <Link href="#" color="inherit" underline="none">
          Home
        </Link>
        <Link href="#" color="inherit" underline="none">
          Service
        </Link>
        <Link href="#" color="inherit" underline="none">
          Gallery
        </Link>
        <Link href="#" color="inherit" underline="none">
          Contact Us
        </Link>
      </Box>
      <br/>
      {
        logoState ? <Model />  : <></>
      }

    </>
  )
}

export default Header;
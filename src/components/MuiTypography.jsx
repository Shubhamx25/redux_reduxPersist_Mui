import React from 'react';
import { Typography } from '@mui/material';

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1' >h1 mui Heading</Typography>
        <Typography variant='h2'gutterBottom>h2 mui Heading</Typography> {/* gutterBottom adds margin buttom to elements that is different for different element */}
        <Typography variant='h3'>h3 mui Heading</Typography>
        <Typography variant='h4'>h4 mui Heading</Typography>
        <Typography variant='h5'>h5 mui Heading</Typography>
        <Typography variant='h6' component='h1'>h6 mui Heading</Typography> { /* makes the component render with h1 tag instead of h6 */}

        <h1>h1 normal heading</h1>
        <h2>h2 normal heading</h2>
        <h3>h3 normal heading</h3>
        <h4>h4 normal heading</h4>
        <h5>h5 normal heading</h5>
        <h6>h6 normal heading</h6>
    </div>
  )
}

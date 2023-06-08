
import { Button, Stack, IconButton, ButtonGroup } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
/* For importing icons individually from icon library of mui */

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>   
        {/* stack is div tag with display:flex and flex-direction: coloum property. 
        spacing is like gap property,
        dirction is used to change flex direction */}
             
            {/*  By Default every button content is uppercase */}
            <Button  variant='text' href='https://google.com'>Mui button text</Button> 
            {/* simple button with no border,background with litle hover effect. Less attention grabbing design,
            *****ONLY***** text' typed button in MUI  can be given href to give it link */}

            <Button variant='contained'>Mui button contained</Button> 
            {/* Button with background, color,hover, shadow etc. Used for primary button */}

            <Button variant='outlined'>Mui button outlined</Button> 
            {/* button with just border and hover effect with no background color. Used as secondary buttons */}

        </Stack>

        <Stack spacing={2} direction='row' display='block' flexWrap='wrap'> 
        {/* Default color in Mui is define in palette object which can be customized as per needs */}

            <Button  variant='contained' color='primary' size='small'>Mui small button primary color</Button> 
            
            <Button variant='contained' color='secondary' size='medium'>Mui medium button secondary color</Button> 
           
            <Button variant='contained' color='error' size='large'>Mui large button Error color</Button>

            <Button variant='contained' color='warning'> Warning color</Button>

            <Button variant='contained' color='success'>Success color</Button> 

            <Button variant='contained' disabled>Disabled button</Button> 
             {/* Disabled attribute removes any color from the buttons */}

        </Stack>

        <Stack display='block' spacing={2} direction='row'>
             <Button variant='contained' startIcon={<SendIcon />} disableElevation> Send with disableElevation </Button>
             <span>(No bottom shadow)</span>
            {/*  To removed default box shadow at the bottom disableElevation is used */}

             <Button variant='contained' endIcon={<SendIcon />} disableRipple> Send with disableRipple</Button>
             <span>(No animation)</span>
             {/* to removed default animation of ripple effect use disableRipple is use */}

             <IconButton color='success'>
                <SendIcon />
             </IconButton>
            {/*  To add button without text use IconButton component */}

        </Stack>

        <Stack display='block' >
            <ButtonGroup variant='contained'>

                <Button>left</Button>
                <Button>center</Button>
                <Button>right</Button>

            </ButtonGroup>
        </Stack>



    </Stack>
  )
}

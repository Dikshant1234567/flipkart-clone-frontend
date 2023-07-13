import { Box } from '@mui/material';
import React from 'react'

const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
function Covid() {
  return (
    <Box>
        <img id='covid-img' src={url} alt="covid" style={{width:"100%", height:250 , marginTop:10}} />
    </Box>
  )
}

export default Covid
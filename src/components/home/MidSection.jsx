import { Grid } from '@mui/material';
import React from 'react'


export const imageURL = [
    'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
    'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
    'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
];

function MidSection() {
  return (
    <Grid lg={12}  md={12} sm={12} container style={{marginTop:10}} >
        {
            imageURL.map(value=>(
                <Grid  lg={4} md={4} sm={12}  key={value}  >
                <img src={value} alt="banner" width="100%" />
                </Grid>
            ))
        }
    </Grid>
  )
}

export default MidSection
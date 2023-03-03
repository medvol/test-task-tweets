import Grid from '@mui/material/Grid';
import React from 'react'

function Card({ user }) {
  const {id, user:name, tweets, followers, avatar} = user
  return (
    <Grid item xs={2} sm={4} md={4} component='li' >
  
    </Grid>
  );
}

export default Card
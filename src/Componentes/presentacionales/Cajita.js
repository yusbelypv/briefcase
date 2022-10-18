import React from "react";
import {Box, Grid } from '@material-ui/core';



function Cajita() {

  
  return (

   <div>
  
    <Box
    color='secondary.constrastText'
    bgcolor='secondary.main'
    m={2}
    px={2}
    >Cajita 2</Box>

    <Grid container>
        <Grid item xs={6}>
            <Box border={2}>
                x12
            </Box>

        </Grid>

    </Grid>

   </div>
   
  );
}

export default Cajita;
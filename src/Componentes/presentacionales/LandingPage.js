import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Styles from "../../Styles/Styles.module.css"


function LandingPage() {
  return (

    <Grid container>
      <Grid item md={6} sm={12} xs={12}>
      <span className={Styles.texto}>Yusbely Parra</span>
      <span className={Styles.texto2}>Full Stack Web Developer</span>
        <Link to="/home">
        <p className={Styles.texto1}>Portfolio</p>
        </Link>
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
       
      </Grid>

    </Grid>
    
  );
}

export default LandingPage;
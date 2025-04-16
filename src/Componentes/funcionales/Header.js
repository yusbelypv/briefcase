import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../../assets/avatar.png";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Styles from "../../Styles/Styles.module.css";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
    boxShadow: "0px 7px 10px #ba68c8"
  },
  title: {
    color: "#f5f5f5",
  },
  subtitle: {
    color: "#71bcc3",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },

  btn: {
    border: 'none',
    margin: 20,
    width: 200,
    height: 40,
    borderRadius: 6,
    textTransform: 'uppercase',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    cursor: 'pointer',
    color: '#fff',
    backgroundSize: '200%',
    transition: '0.4s',
    '&:hover': {
      backgroundPosition: 'right'
    }
  },
   btn1: {
     backgroundImage: 'linear-gradient(45deg, #472a5b, #9ce0db, #8e24aa)'
   },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <div className={Styles.animacion}>
           <Avatar className={classes.avatar} src={avatar} alt="Yusbely Parra" />
           <br></br>
        </div>
       
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Yusbely Parra."]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Desarrollo Web",
            "Ingeniero de Sistemas",
            "Máster en Dirección de Sistemas",
            "Diseño UX en formacion",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
      <br></br>
      <Link to="/Pdf" style={{ textDecoration: 'none' }}> 
         <Button  className={ `${classes.btn} ${classes.btn1}` }>
          
          Ver Resumen</Button></Link>

          <br></br>
      <Link to="/portfolio" style={{ textDecoration: 'none' }}> 
         <Button  className={ `${classes.btn} ${classes.btn1}` }>
          
          Portafolio</Button></Link>
       
        
      
      
    </Box>
  );
};

export default Header;
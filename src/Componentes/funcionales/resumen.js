import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Navbar from "../presentacionales/NavBar";
import { Link } from "react-router-dom";
import Styles from "../../Styles/Styles.module.css"



const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "black",
    
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid #71bcc3",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid #71bcc3",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#8e24aa #8e24aa transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "#9ce0db",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent #472a5b #472a5b",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "#472a5b",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "#f5f5f5",
    padding: "6rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#71bcc3",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "#71bcc3",
  },
  subtitle1: {
    color: "#f5f5f5",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    
     <Box component="header" className={classes.mainContainer}>
        <Navbar></Navbar>
      <div className={Styles.animacion}>
      <Typography variant="h4" align="center" className={classes.heading}>
      Acerca de mí
      </Typography>

      <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          <Link to="/Pdf" style={{ textDecoration: 'none', color: 'white' }}> BDR </Link>
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Prospección - Setter Digital
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            -- ELEVATE, Group --
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Actualmente me encuentro desarrollando una certificación en técnicas de prospección 
            digital para la generación y calificación de prospectos en entornos digitales.
          </Typography>
        </Box>







      <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          <Link to="/Pdf" style={{ textDecoration: 'none', color: 'white' }}> Máster </Link>
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Máster de Formación Permanente en Dirección de Sistemas y TI 
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            -- OBS, España --
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Trabajo Final (Proyecto Grupal): "Modernización de Centro de Datos para una empresa
             líder en el mercado de mensajería y transporte de carga en Colombia"
          </Typography>
        </Box>






      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
         <a href="https://certificates.soyhenry.com/cert?id=a4c17b87-49c3-4350-80ef-60f8dd6fd9d2" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
          Certificación</a>
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Full Stack Web Developer
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
           -- Henry, Buenos Aires Argentina  --
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Bootcamp. 
            Formación intensiva en la que aprendí las últimas tecnologías. 
            y lenguajes de programación. 
            Team building de proyectos del mundo real 
            con metodologías y herramientas ágiles (scrum), bajo el aprendizaje colaborativo.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          <Link to="/Pdf" style={{ textDecoration: 'none', color: 'white' }}> Resumen </Link>
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Ingeniero de Sistemas
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            -- UPSM, Venezuela --
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            A lo largo de mi carrera he trabajado en diferentes campos como analista de sistemas 
            y también en el mundo del marketing digital.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
        <a href="https://github.com/yusbelypv/" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
          GitHub</a>
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Habilidades Técnicas
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
             JavaScript, HTML, CSS, Node.js,
             React.js, Redux, Express, SQL, Sequelize - Postgres, SQL.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
         <a href="https://www.linkedin.com/in/yusbely-parra/" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
          Linkedin</a>
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Habilidades Blandas
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Dedicación, Adaptabilidad, Iniciativa, Creatividad, Resolución de Problemas, Analítica, Metodologías Ágiles
          

          </Typography>
        </Box>
      </Box>
      </div>
    </Box>
    
    
  );
};

export default Resume;

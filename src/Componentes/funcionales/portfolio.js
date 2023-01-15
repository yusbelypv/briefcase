import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import pi from "../../assets/pi.png";
import app from "../../assets/app.png";
import fron from "../../assets/fron.png";
import grupal from "../../assets/grupal.png";
import port from "../../assets/port.png";
import Navbar from "../presentacionales/NavBar";
import Styles from "../../Styles/Styles.module.css";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "black",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    Height: 450,
    margin: "6rem auto",
    boxShadow: "8px 8px 8px #472a5b",
    
  },
  btn: {
    border: 'none',
    textDecoration: 'none',
    margin: 20,
    width: 120,
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

const projects = [
  {
    name: "App Pokemon",
    description: `
    Individual Project App Development using React, Redux, 
    Node and Sequelize: which allows you to view the different 
    Pokémon using the external pokeapi api that includes:
    search pokemon
    Filter, Sort them and
    create new pokemon`,
    image: pi,
    link: "https://pi-pokemon-eight.vercel.app/",
    demo: "https://www.youtube.com/watch?v=KUre0HudsXs&t=4s",
   
   
  },
  {
    name: "Group Project: HMovies",
    description: `Ecommerce Development of Movies "Without Subscription" 
    that includes: movie search, filtering and sorting, movie reviews, favorites 
    list, payment gateway, user login, add to favorites, shopping cart. 
    Administration control panel.
    `, 
    image: grupal,
    link: "https://henrymovies.vercel.app/",
    demo: "https://www.youtube.com/watch?v=keG8ClPjraA&t=23s",
  },
  {
    name: "Portfolio",
    description: `Personal project shows a little more about 
    me where you can access professional and contact information 
    such as: projects made with videos and deploy of each one, linkedin, 
    github, curriculum. Also briefly what are my soft and technical skills.`,
    image: port,
    link: "https://github.com/yusbelypv/briefcase",
    demo: "https://www.youtube.com/watch?v=s31aRAZCtI0",
    
  },

  {
    name: "Frontend",
    description: `
    Personal project developed with JS, Html, CSS and IndexedDB 
    to keep information locally. Allows you to view a list of 
    customers with their respective information and with the 
    option to edit it. It also allows you to add a new customer.`,
    image: fron,
    link: "https://yusbely-parra.vercel.app/",
    demo: "https://www.youtube.com/watch?v=X-D62E3lHcQ",
   
   
  },

  {
    name: "App Sheet",
    description: `
    Personal project using Google's AppSheet tool that allows you 
    to make applications without code but with great potential. 
    This app allows you to control and monitor projects, visualize
     the process of activities and their development..`,
    image: app,
    link: "https://youtube.com/shorts/neWvlok-swY?feature=share",
    demo: "https://youtube.com/shorts/neWvlok-swY?feature=share",
   
   
  },
  
  
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
        <Navbar> </Navbar>
      <div className={Styles.animacionContact}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                  
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
               <a href={project.link} target="_blank" style={{ textDecoration: 'none' }}>
                <Button className={ `${classes.btn} ${classes.btn1}`} >
                  View
                </Button>
                </a>
                <a href={project.demo} target="_blank" style={{ textDecoration: 'none' }}>
                <Button className={ `${classes.btn} ${classes.btn1}`}>
                  Video
                </Button>
                </a>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      </div>
    </Box>
  );
};

export default Portfolio;
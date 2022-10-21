import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Navbar from "../presentacionales/NavBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Styles from "../../Styles/Styles.module.css";



const useStyles = makeStyles((theme) => ({
    contactContainer: {
      background: "#000000",
      height: "100vh",
    },
    heading: {
      color: "#f5f5f5",
      textAlign: "center",
      textTransform: "uppercase",
      marginBottom: "1rem",
    },

    cBox:{

        top: "20%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",

        
    },

    cBox2:{

        top: "150%",
        left: "50%",
        transform: "translate(-50%, -2%)",
        boxShadow: "6px 6px 6px #472a5b",
        position: "absolute",
        background: "#212121",
        borderRadius: 6,
    },

    
    input: {
      color: "#fff",
    },
    button: {
      marginTop: "1rem",
      color: "#b6e5e6",
      borderColor: "#b6e5e6",
    },
    field: {
      margin: "1rem 0rem",
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


  const InputField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "#e1bee7",
      },
      "& label": {
        color: "#e1bee7",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#f5f5f5",
        },
        "&:hover fieldset": {
          borderColor: "#f5f5f5",
        },
        "&.Mui-focused fieldset": {
          color: "#fff",
          borderColor: "#f5f5f5",
        },
      },
    },
  })(TextField);
  

const ContactP = () => {
    const classes = useStyles();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1kblkj7",
        "template_zhindgn",
        form.current,
        "k55LWBInoBFtDOnZP"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            type: 'success',
            title: 'It was sent correctly',
        })
        window.location.reload(true);
        
        },
        (error) => {
            return Swal.fire({
                type: "error",
                title: "Oops...",
                text: "The email could not be sent",
                timer: 9000,
              });
        }
      );
  };

  return (

    <Box component="div" className={classes.contactContainer}>
      <Navbar></Navbar>
      <Grid container justify="center">
        <Box className={classes.cBox} container justify="center">
      
        <Typography variant="h5" className={classes.heading}>
            Contact me...
          </Typography>
      
      <div  className={Styles.animacionContact}>

      <Box className={classes.cBox2} container justify="center">
        
      <form ref={form} onSubmit={sendEmail} className={Styles.form}>
     
         <label className={Styles.label}>Name:</label>
         <input type="text" name="name" className={Styles.input} required/>
         <label className={Styles.label}>Email:</label>
         <input type="email" name="email" className={Styles.input} required/>
         <label className={Styles.label}>Message:</label>
         <textarea name="message" className={Styles.textarea} required/>
        <input type="submit" value="Send" className={ `${classes.btn} ${classes.btn1}`}/>
      </form>
      </Box>
      </div>
    
      </Box>

      </Grid>
      
   </Box>

  );
};

export default ContactP;
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from "@material-ui/icons/GitHub";




const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#71bcc3",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#472a5b",
      "&:hover": {
        fill: "#8e24aa",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <a href="https://www.linkedin.com/in/yusbely-parra/" target="_blank"><BottomNavigationAction icon={<LinkedInIcon />} className={classes.root} /></a>
      <a href="https://github.com/yusbelypv/" target="_blank"><BottomNavigationAction icon={<GitHubIcon />} className={classes.root} /></a>
      
    </BottomNavigation>
  );
};

export default Footer;